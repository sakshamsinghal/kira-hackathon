define(function(require) {
    var Backbone = require("Backbone"),
        mediator = require("module/mediator");

    return Backbone.Router.extend({
        initialize: function(options) {
            mediator.on("navigate", this.navigate, this);

            var re = new RegExp("(\/)+$", "g");
            /*jshint regexp: false*/
            this.route(/(.*)\/+$/, "trailFix", function (id) {
                // remove all trailing slashes if more than one
                id = id.replace(re, '');
                this.navigate(id, {
                    trigger: true,
                    replace: true
                });
            });
        },

        route: function (route, name, callback) {
            Backbone.Router.prototype.route.call(this, route, name, function () {
                this.trigger.apply(this, ["change", route, name].concat(arguments));
                callback.apply(this, arguments);
            });
        }
    });
}, "module/routers/base");define(function(require) {
    var BaseRouter = require("module/routers/base"),
        UrlsView = require("module/views/urls_view"),
        ListsView = require("module/views/lists_view"),
        ActivityListView = require("module/views/activity_list_view"),
        SubHeaderView = require("module/views/sub_header_view"),
        NavView = require("module/views/nav_view"),
        ExploreView = require("module/views/explore_view"),
        BaseCollection = require("module/collections/base"),
        BaseModel = require("module/models/base"),
        Viewer = require("module/models/user"),
        mediator = require("module/mediator"),
        utils = require("module/utils");

    return BaseRouter.extend({
        routes: {
            "home": "recommended",
            "home/activity": "activity",
            "home/trending": "trending",
            "home/lists/:filter": "lists",
            "explore/:interest": "explore",
            "home/*splat": "recommended"
        },

        initialize: function(options) {
            var fetchSequence = [5, 20, 20],
                viewer = new Viewer(options.config.viewer, {parse: true});

            BaseRouter.prototype.initialize.call(this, options);

            this.query = options.config.query;

            this.urls = new BaseCollection(options.stumbles.data.items, {
                uri: options.stumbles.uri,
                next: options.stumbles.view.next,
                parse: true
            });

            this.lists = new BaseCollection(options.lists.data.items, {
                uri: options.lists.uri,
                next: options.lists.view.next,
                parse: true
            });

            this.activity = new BaseCollection([], {
                url: options.config.viewer.view.data.urlActivity
            });

            this.urlsView = new UrlsView({
                el: "#tile-wrap",
                collection: this.urls,
                viewer: viewer,
                fetchSequence: fetchSequence,
                disableFetchFill: true
            });

            this.listsView = new ListsView({
                el: "#tile-wrap",
                collection: this.lists,
                viewer: viewer,
                fetchSequence: fetchSequence,
                disableFetchFill: true
            });

            this.subHeaderView = new SubHeaderView({
                el: "#sub-header",
                headingMap: {
                    recommended: Handlebars.templates.lihpHeadingRecommended,
                    activity: Handlebars.templates.lihpHeadingActivity,
                    trending: Handlebars.templates.lihpHeadingTrending,
                    lists: Handlebars.templates.lihpHeadingLists,
                    explore: Handlebars.templates.lihpHeadingExplore
                }
            });

            this.navView = new NavView({
                el: "body",
                nav: {
                    "recommended": "#nav-whats-new",
                    "activity": "#nav-activity",
                    "trending": "#nav-trending",
                    "lists": "#nav-lists"
                }
            });

            this.exploreView = new ExploreView({
                el: "#explore-interests"
            });

            // Reflow content when activity arrives
            this.activity.on("reset", function() {
                _.defer(this.urlsView.reflow.bind(this.urlsView));
            }.bind(this));
            this.on("change", this.routeChange, this);
        },

        routeChange: function(route, name) {
            // Reset the collection for the next view
            this.urls.reset([], {silent: true});
            this.lists.reset([], {silent: true});
            // Trigger a clean event for fetch cached to remove add/remove event hookes
            this.urls.clean();
            this.lists.clean();
            // Abort any current AJAX fetches
            this.urls.currentFetch && this.urls.currentFetch.abort();
            this.lists.currentFetch && this.lists.currentFetch.abort();
            // Get urlsView in a clean state before route executes
            $("#reflow-wrapper").height("auto");
            this.urlsView.resetView();
            this.listsView.resetView();
            this.activityListView && this.activityListView.resetView();

            this.urlsView.resetSequence();
            this.listsView.resetSequence();

            this.navView.updateNav(name);

            mediator.trigger("route", "/" + route);
        },

        recommended: function() {
            var name = "recommended";

            mediator.trigger("dropdown:clean");
            this.subHeaderView.updateHeading(name);
            this.fetchSequenceCached({
                view: this.urlsView,
                name: name
            });
        },

        activity: function() {
            mediator.trigger("dropdown:clean");
            this.subHeaderView.updateHeading("activity");
            this.activityListView = new ActivityListView({
                el: "#activity-feed",
                collection: this.activity,
                dependentCollection: this.urls
            });

            this.fetchSequenceCached({
                view: this.urlsView,
                name: "active"
            });
        },

        trending: function() {
            var name = "trending";

            mediator.trigger("dropdown:clean");
            this.subHeaderView.updateHeading(name);
            this.fetchSequenceCached({
                view: this.urlsView,
                name: name
            });
        },

        lists: function(filter) {
            filter || (filter = "");
            mediator.trigger("dropdown:clean");
            this.subHeaderView.updateHeading("lists", {
                filter: filter
            });
            this.fetchSequenceCached({
                view: this.listsView,
                name: filter,
                cacheKey: "lists-homepage-" + filter
            });
        },

        explore: function(query) {
            var interest = this.exploreView.selectedInterest,
                mode = "tag",
                tlds = [],
                title = query;

            // this is the page reload case on an interest
            if (!interest && this.query) {
                interest = new BaseModel(this.query, {parse: true});
                mediator.trigger("dropdown:updateInput", interest);
                query = interest.get("name");
                title = interest.get("title");
            }

            // domain stumbling hack
            if (query.match(/^d:/))
            {
                title = title.substr(2, title.length);
                mode = 'stumblethru';
                tlds = [title];
            }

            $(".dropdown-search").val(title);
            this.subHeaderView.updateHeading("explore", {
                title: title,
                query: query,
                mode: mode,
                tlds: tlds
            });

            this.urlsView.fetchNextSequence({
                filter: "keyword",
                query: query
            });
        },

        fetchSequenceCached: function(config) {
            var options = {
                cache: {
                    TTL: 60 * 10,
                    serializeOptions: {
                        ensureItems: true
                    }
                }
            };
            config.name && (options.filter = config.name);
            config.query && (options.query = config.query);

            config.view.fetchNextSequence(options);
        }
    });
}, "module/routers/home_page");define(function(require) {
    var TutorialView = require("module/views/tutorial_view"),
        Modal = require("module/modal"),
        mediator = require("module/mediator");

    return {
        initialize: function(options) {
            this.tutorialUrls = options.tutorialUrls;

            // Setup routes for each tutorial
            mediator.on("route", this.onRoute, this);
            this.onRoute(window.location.pathname);
        },

        onRoute: function(route) {
            var tutorial = this.tutorialUrls[route];

            if (tutorial) {
                delete this.tutorialUrls[route];
                _.delay(function() {
                    $(".tutorial-tip[data-template='" + tutorial.type + "']").trigger("tutorial:tip", [{
                        modal: true,
                        data: tutorial
                    }]);
                }, 300);

                $.post(tutorial.uri.url, {
                    type: tutorial.type,
                    _token: tutorial.uri.token
                }, '', 'json');
            }
        }
    };
}, "module/routers/tutorial_machine");define(function(require) {
    var Modal = require("module/modal"),
        mediator = require("module/mediator");

    return {
        initialize: function(options) {
            this.adxMessages = options.adxUrls;
            // Setup routes for each adx modal
            mediator.on("route", this.onRoute, this);

            route = window.location.pathname;
            if ('/' == route.charAt(route.length - 1))
                route = route.slice(0, -1);

            this.onRoute(route);
        },

        onRoute: function(route) {
            var adxData = this.adxMessages[route];
            if (adxData) {
                var templateName = adxData.type,
                    viewName = adxData.view || false,
                    template;

                if (viewName) {
                    Modal = require('module/views/modals/' + viewName);

                    var modal = new Modal({
                        modalClass: "adx-modal",
                        skipLoader: true,
                        extra: adxData.extra || {}
                    });
                } else {
                    template = Handlebars.templates[templateName];

                    var modal = new Modal({
                        skipLoader: true,
                        modalClass: "adx-modal",
                        contentTemplate: template
                    });

                    modal.on("close", function(){
                        if (adxData.uri)
                        {
                            $.post(adxData.uri.url, {
                                _token: adxData.uri.token
                            }, '', 'json');
                        }
                    });
                }
            }
        }
    };
}, "module/routers/adx_machine");