/**
 * Global form handler
 *
 * Use for form validation
 *
 * @author jrylan
 */

/*
 How to use this code:

 $(function(){
    var test = new Base.FormHandler.extend({
        selector: $('.form'),

        restURL: "blah",

        // If you provide a `submit` callback, it's boolean return value will
        // determine if the ajax validation request should be should be processed.
        submit: function() {
            if (doSomething) {
                return true;
            }
            return false;
        },

        inputs: [
            {
                id: "text1",
                validateUrl: "foo1.php",
                validateOn: "blur",
                validate: function() {
                    this.ajaxValidation();
                }
            }
        ]
    });
});
*/

(function() {
    /*
     * Setup the view
     */
    var view = Base.View.extend({
        initialize: function() {
            this.$error = this.$el.find(".alert-message");
            this.$errorMsg = this.$error.find("p");
        },

        showTopLevelErrors: function(collection) {
            if (!this.$error || collection.submitted !== true) {
                return;
            }

            if (collection.formErrors) {
                this.$errorMsg.html( collection.formErrors.join("<br>") );
            } else {
                this.$errorMsg.html( this.$errorMsg.data("original") );
            }

            this.$error.removeClass("hide");
        },

        hideTopLevelErrors: function() {
            this.$error.addClass("hide");
        },

        toggleStatus: function(model) {
            var status = model.get("status");

            if (status == "success") {
                model.$wrap.removeClass("error").addClass("success");
            }
            else if (status == "error" || status == "error-soft") {
                model.$wrap.removeClass("success").addClass("error");
            }
            else {
                model.$wrap.removeClass("success").removeClass("error");
            }
        },

        setErrorMessage: function(model) {
            var errors = model.get("errors");

            if (typeof errors != "string") {
                errors = errors.join("<br>");
            }

            model.$wrap.find(".s-error").html(errors);
        },

        setActive: function($el) {
            $el.parents(".wrapper-input").addClass("active");
        },

        setInactive: function($el) {
            $el.parents(".wrapper-input").removeClass("active");
        }
    });



    /*
     * Setup the model
     */
    var input = Base.Model.extend({
        defaults: {
            active: false,
            error: false
        },

        initialize: function() {
            var self = this;

            if (this.attributes.type != "radio") {
                this.$el = $("#" + this.id);
                this.$el.data("__id__", this.id);

                this.$wrap = this.$el.parents(".wrapper-input");
                this.type = (this.$el.attr("type") || this.$el[0].tagName).toLowerCase();
                if (this.type == "input") {
                    this.type = "text";
                }

                this.name = (this.$el.attr("name") || this.id);

                if (this.attributes.validateOn) {
                    this.$el.bind(this.attributes.validateOn, function(e){
                        self.set("value", self.getValue());
                        self.inputValidation(e);
                    });
                }

                if (this.get("active")) {
                    self.$el.focus();
                    this.set("active", true);
                }
            } else {
                this.name = this.id;
                this.type = "radio";
                this.$wrap = $("input[name=" + this.name + "]:first").parents(".wrapper-input");
            }

            var val = this.getValue();

            this.set({
                "value": val,
                "initValue": val,
                "lastValue": val
            }, {silent:false});
        },

        ajaxValidation: function() {
            var self = this,
                value = this.getValue(),
                data = {},
                params = {
                    dataType: "json"
                };

            data[this.name] = value;

            if (typeof this.attributes.validationData == "function") {
                extend(data, this.attributes.validationData(this.collection));
            }

            return Sync(this.attributes.validationURL).update(data, params)
                .success(function(data) {
                    if (typeof data._success == "undefined") {
                        return;
                    }

                    if (data._success === true) {
                        self.set("status", "success");
                    } else {
                        if (data._reason && data._reason.length > 0) {
                            var reasons = [];
                            for (var i=0, reason; reason=data._reason[i]; i++) {
                                reasons.push(reason.message);
                            }
                            self.set("errors", reasons);
                        }
                        self.set("status", "error");
                    }
                })
                .error(function() {
                    //alert("error");
                });
        },

        getValue: function(){
            switch(this.type) {
                case "checkbox":
                    return this.$el.is(":checked");
                    break;

                case "radio":
                    return $("input[name=" + this.id + "]:checked").val();
                    break;

                default:
                    var value = this.$el.val();
                    return value ? value : "";
            }
        },

        hasChanged: function() {
            return (this.getValue() != this.get("initValue"));
        },

        inputValidation: function(e) {
            var self = this,
                value = this.getValue();

            if (!value) {
                return;
            }
            if (!this.attributes.validate) {
                this.ajaxValidation();
            } else {
                this.attributes.validate.call(this);
            }
        },

        removeErrorIfNotEmpty: function() {
            if (this.value != "") {
                this.set("status", "success");
            }
        },

        updateInitValue: function() {
            this.set("initValue", this.getValue());
        }
    });


    /*
     * Setup the collection of models
     */
    var inputs = Base.Collection.extend({
        submitted: false,

        model: input,

        initialize: function() {
            this.totalErrors = 0;
        },

        recordStatusChange: function(model) {
            var status = model.get("status"),
                prevStatus = model._previousAttributes.status;

            if (status == "error-soft") {
                return;
            }
            else if (status == "error") {
                this.totalErrors++;
            }
            else if (prevStatus) {
                this.totalErrors--;
            }
        },

        updateInitValues: function() {
            for (var id in this._byId) {
                this.getById(id).updateInitValue();
            }
        }
    });



    Base.FormHandler = Base.Controller.extend({
        method: "update",

        useAjaxFieldValidation: true,

        initialize: function(config) {
            var self = this;

            this.view = new view(this);

            var collection = new inputs(this);

            collection.model.prototype
                .bind("change:status", this.view.toggleStatus)
                .bind("change:status", collection.recordStatusChange, collection)
                .bind("change:errors", this.view.setErrorMessage, this.view);

            this.bindEvents({
                "submit": "_submit",
                "press .submit": "_submit",
                "press .cancel": "cancel",
                "press .alert-message .close": "closeMessage"
            });

            if (this.highlightLabels) {
                $("input,select,textarea", this.$el)
                    .live("focus", function(e){
                        view.prototype.setActive( $(this) );
                    })
                    .live("blur", function(e){
                        view.prototype.setInactive( $(this) );
                    });
            }

            // Changes the provided `inputs` property into an accessible collection
            this.inputs = collection.add(this.inputs, {silent:true});
            if (!this.formData) {
                this.formData = this._formData;
            }

            this.init(config);
        },

        init: function(config) {},

        closeMessage: function() {
            this.view.hideTopLevelErrors();
        },

        _formData: function(options) {
            options = options || {};
            var getAllFields = options.fields != "changed" || false;

            var data = {},
                id,
                model,
                total = 0;

            for (id in this.inputs._byId) {
                model = this.inputs.getById(id);

                if (getAllFields || model.attributes.persist || model.hasChanged()) {
                    data[model.name] = model.getValue();
                    total++;
                }
            }

            $("input[type=hidden]", this.$el).each(function(){
                var $this = $(this);
                data[$this.attr("name")] = $this.val();
            });

            return total ? data : false;
        },

        cancel: function() {
            this.$el[0].reset();
        },

        _submit: function() {
            var formData = this.formData();

            if (!formData) {
                return false;
            }

            if (this.submit) {
                if (this.submit(formData)) {
                    this.ajaxSubmit(formData);
                }
            } else {
                this.ajaxSubmit(formData);
            }
        },

        ajaxSubmit: function(formData) {
            var self = this;

            if (this._submitInProcess) {
                return;
            }

            this._submitInProcess = true;
            this.inputs.submitted = true;
            this.inputs.formErrors = false;

            return self.sync[self.method](formData)
                .success(function(data, textStatus, jqXHR) {
                    if (SU.Captcha.isRequired(data)) {
                        self._submitInProcess = false;
                        self.inputs.submitted = false;
                        SU.Captcha.show(function(){
                            self.ajaxSubmit(formData);
                        });
                        return;
                    }

                    self._submitInProcess = false;
                    if (data._success === true && self.success) {
                        self.inputs.updateInitValues();
                        self.success(data, textStatus, jqXHR);
                    }
                    else if (self.failure) {
                        self.failure(data, textStatus, jqXHR);
                    }
                    else {
                        self.inputs.totalErrors = 0;

                        if (data._reason) {
                            if (Utils.isArray(data._reason)) {
                                var reasons = [];
                                for (var i=0, reason; reason=data._reason[i]; i++) {
                                    if (reason.meta && reason.meta.field) {
                                        var model = self.inputs.getById(reason.meta.field);
                                    }
                                    if (model) {
                                        model.set("status", "error");
                                        model.set("errors", reason.message);
                                    } else {
                                        reasons[reasons.length] = reason.message;
                                    }
                                }
                                self.inputs.formErrors = reasons;
                                self.view.showTopLevelErrors(self.inputs);
                            }
                        }
                    }
                })
                .error(function(jqXHR, textStatus, errorThrown) {
                    self._submitInProcess = false;
                    if (self.error) {
                        self.error(jqXHR, textStatus, errorThrown);
                    }
                });
        }
    });
}).call(this);/*

How to use this code:

NAMESPACE.Modal = new Base.Modal(OPTIONS_OBJECT);

1. Load content for a specific selector on the page:
NAMESPACE.Modal.load("#some-content").open();

2. Load content from a specific URL
NAMESPACE.Modal.loadURL("http://www.google.com/").open();

3. Load content from a specific URL in an iframe:
NAMESPACE.Modal.loadURL("http://www.google.com/", {iframe:true}).open();

4. Set the HTML content directly:
NAMESPACE.Modal.set("<h1>Blah</h1>").open();

5. When calling the `open` method, you can pass a configuration object:
"ready" - Function to execute when the content has been set

"close:before" - Function to execute when the user tries to close the modal. Must return a boolean value -- returing `true` will close the modal.

"close:after" - Callback function to execute when the modal has closed.

"close:overlay" - Boolean to denote if the user should be able to click on the overlay to close the modal.

Sample config:
{
    "ready": function() {
        console.log("Your content is ready");
    },
    "close:before": function(){
        return confirm("Are you sure you want to close this?");
    },
    "close:after": function(){
        alert("you closed the modal!");
    },
    "close:overlay": false
}

*/


(function() {
    "use strict";
    /*
     * Setup the view
     */
    var _view = Base.View.extend({
        initialize: function() {
            this.$content = this.$el.find(".modal-content");
        },


        load: function(selector) {
            this.ready = false;

            if (selector) {
                var $selector = selector instanceof $ ? selector : $(selector);
                this.$content.html( $selector.html() );
            }

            this.measureHeight().positionContent();
        },

        loadURL: function(url, settings) {
            this.ready = false;
            var view = this,
                $iframe;

            if (settings.wrapperClass) {
                this.$content.addClass(settings.wrapperClass);
            }

            if (settings.iframe) {
                this.$content.html("<iframe src=" + url + " frameborder=0 class=modal-iframe>");
                $iframe = this.$content.find("iframe");
                view.measureHeight().positionContent();
                view.insertLoading(settings.loadingMessage);
                $iframe.bind("load", function(){
                    view.measureHeight().positionContent();
                    view.removeLoading();
                });
            } else {
                $.get(url, function(response){
                    view.set(response);
                    view.measureHeight().positionContent();
                });
            }
        },


        set: function(str) {
            this.ready = false;
            this.$content.html(str);
            this.measureHeight().positionContent();
        },

        measureHeight: function() {
            // The display property of the element has to be set to something other than `block` in order to measure it's height.
            this.$el.css({"visibility":"hidden", "display":"block"});
            var _height = "" + this.$content.height();
            this._height = _height;
            this.$el.css({"visibility":"", "display":""});
            return this;
        },

        positionContent: function() {
            var modalHeight = this._height,
                windowHeight = $win.height(),
                topOffset;

            if (modalHeight < windowHeight) {
                this.$el.css("position", "fixed");
                topOffset = Math.ceil( (windowHeight - modalHeight) / 2) - ( (20 / modalHeight) * 100);
            } else {
                this.$el.css("position", "absolute");
                topOffset = Math.ceil( $win.scrollTop() + 25 );
            }

            this.$el.css("top", topOffset);
            this.ready = true;
            this.trigger("ready");

            return this;
        },


        changeStatus: function(model) {
            if ("open" == model.get("status")) {
                this.$overlay.addClass("modal-open");
                this.$el.addClass("modal-open");
            } else {
                this.$overlay.removeClass("modal-open");
                this.$el.removeClass("modal-open");
            }
        },

        toggleCloseButton: function(status) {
            if (status) {
                this.$el.addClass("modal-hide-close");
            } else {
                this.$el.removeClass("modal-hide-close");
            }
        },

        insertOverlay: function() {
            $body.append("<div id=modal-overlay class=modal-overlay><!--  --></div>");
        },

        insertLoading: function(loadingMessage) {
            var $loaderDiv,
                topOffset,
                $loader;
            $body.append("<div id=modal-loader class=modal-loader><!--  --></div>");
            $loaderDiv = $body.find('#modal-loader');
            if(Handlebars && Handlebars.templates.loader) {
                $loaderDiv.append(Handlebars.templates.loader({message: loadingMessage}));
                new Spinner({
                    color: "#6D6E71",
                    hwaccel: true
                }).spin($loaderDiv.find(".loader")[0]);
            }
            $loader = $body.find('.loader');
            topOffset = Math.ceil( ($win.height() - $loader.height()) / 2);
            $loaderDiv.css('top', topOffset);
        },

        removeLoading: function() {
            var $loaderDiv = $body.find('#modal-loader');
            $loaderDiv.remove();
        },

        insertModal: function() {
            $body.append('' +
                '<div id=modal class=modal-container>' +
                    '<div class=modal>' +
                        '<div class=modal-content><!--  --></div>' +
                        '<a href=# class="btn-modal-close modal-close" title="close">&times;</a>' +
                    '</div>' +
                '</div>');
        }
    });



    /*
     * Setup the controller
     */
    Base.Modal = Base.Controller.extend({
        initialize: function(config) {
            this._config = config || {};

            /*
             * Setup the model
             */
            this.model = new Base.Model({
                "status": "closed",
                "ready": false
            });

            return this;
        },

        // On demand init
        _initialize: function() {
            if (this._initialized) {
                return this;
            }

            this._initialized = true;

            var self = this,
                $overlay,
                $modal;

            $overlay = this.overlay ? $(this.overlay) : null;

            if (!$overlay) {
                $overlay = $("#modal-overlay");

                if (!$overlay.length) {
                    _view.prototype.insertOverlay();
                    $overlay = $("#modal-overlay");
                }
            }

            $modal = this.modal ? $(this.modal) : null;
            if (!$modal) {
                $modal = $("#modal");

                if (!$modal.length) {
                    _view.prototype.insertModal();
                    $modal = $("#modal");
                }
            }

            this.$el = $modal;


            this.view = new _view(this);
            this.view.$overlay = $overlay;

            this.model.bind("change:status", this.view.changeStatus, this.view);

            this.bindEvents(this.model, {
                "press .btn-modal-close": "closeButton"
            });

            $win.resize(function(){
                self.view.positionContent();
            });

            this.init();

            return this;
        },

        init: function(){},

        load: function(selector) {
            this._initialize().view.load(selector);
            return this;
        },

        loadURL: function(url, config) {
            var settings = {iframe:false};
            extend(settings, config);

            this._initialize().view.loadURL(url, settings);
            return this;
        },

        set: function(str) {
            this._initialize().view.set(str);
            return this;
        },

        close: function() {
            if ( this.isOpen() ) {
                this.model.set("status", "closed");

                if (this._config["close:after"]) {
                    this._config["close:after"]();
                }

                this.view.removeLoading();
            }

            return this;
        },

        closeButton: function() {
            if (this._config["close:before"]) {
                if (this._config["close:before"]()) {
                    this.close();
                }
            } else {
                this.close();
            }
        },

        open: function(config) {
            var self = this;

            var settings = {
                "close:overlay": true
            };

            this._initialize();

            config = config || {};

            extend(settings, config);
            extend(this._config, settings);


            if (!Browser.supports("touch")) {
                this.view.$overlay.unbind("click.modal");
                this.$el.unbind("click.modal");

                if (this._config["close:overlay"]) {
                    this.view.$overlay.bind("click.modal", function(){
                        self.close();
                    });
                }
            }

            if (this._config["close:hide"] === true) {
                this.view.toggleCloseButton(true);
            } else {
                this.view.toggleCloseButton(false);
            }

            this.model.set("status", "open");
            if (this._config["ready"]) {
                this._config["ready"]();
            }

            return this;
        },

        isOpen: function() {
            return "open" == this.model.get("status");
        }
    });
}).call(this);// Popup Mixin shared across modal and contentPopup

define(function(require) {
    var mediator = require("module/mediator");

    return {
        initPopupMixin: function() {
            mediator.on("modal:close", this.close, this);
            mediator.on("modal:update:title", this.updateTitle, this);
            mediator.on("modal:showLoading", this.showLoading, this);
            mediator.on("modal:hideLoading", this.hideLoading, this);
            mediator.on("modal:showContext", this.showContext, this);
            mediator.on("modal:hideContext", this.hideContext, this);
            mediator.on("modal:update:classes", this.updateClasses, this);
        },

        showContext: function(context) {
            if (this.$context) {
                this.$context.removeClass("hidden").css({
                    opacity: 1
                }).show();
                this.$context.find(".modal-context-message").html(context);
            }
        },

        hideContext: function(options) {
            options || (options = {});

            if (options.close) {
                this.close(options);
            } else if (options.animate) {
                this.$context.fadeOut(function() {
                    $(this).addClass("hidden");
                });
            } else {
                this.$context.addClass("hidden");
            }
        },

        showLoading: function(options) {
            if (this.$loader) {
                this.$loader.removeClass("hidden");
                this.showLoader(_.extend({
                    $target: this.$loader,
                    loaderClass: "center"
                }, options));
            }
        },

        hideLoading: function() {
            if (this.$loader) {
                this.showChrome();
                this.$loader.addClass("hidden");
                this.hideLoader();
            }
        },

        updateTitle: function(title) {
            if (this.$el) {
                this.$el.find(".modal-title").html(title);
            }
        },

        showChrome: function() {
            if (this.$el) {
                this.$el.find(".modal-header").removeClass("hidden");
                if (this.options.animate) {
                    this.$el.find(".modal-view").addClass("fadeIn");
                }
            }
        },

        updateClasses: function(classes) {
            this.$el.find(".modal-view").removeClass().addClass("modal-view " + classes);
        }
    };
}, "module/mixins/popup");define(function(require) {
    var sizes = {
        small: {
            lines: 11, // The number of lines to draw
            length: 4, // The length of each line
            width: 3, // The line thickness
            radius: 4 // The radius of the inner circle
        }
    };

    return {
        loaderTemplate: Handlebars.templates.loader,
        showLoader: function(options) {
            var $target,
                loader;

            options || (options = {});
            _.extend(options, {
                color: "#6D6E71",
                zIndex: 2
            });

            if (options.size) {
                _.extend(options, sizes[options.size]);
            }

            if (options.target) {
                $target = $(options.target);
            } else {
                $target = options.$target || this.$el;
            }

            this.spinner && this.hideLoader();
            loader = this.loaderTemplate({loaderClass: options.loaderClass || "bottom"});
            if (options.after) {
                $target.after(loader);
                this.spinner = new Spinner(options).spin($target.parent().find(".loader")[0]);
                this.spinner.after = true;
            } else {
                $target.append(loader);
                this.spinner = new Spinner(options).spin($target.find(".loader")[0]);
            }
        },

        hideLoader: function() {
            var $spinnerParent;

            if (this.spinner) {
                $spinnerParent = $(this.spinner.el).parent();
                this.spinner.stop();
                $spinnerParent.remove();
                this.spinner = null;
            }
        }
    };
}, "module/mixins/loader");// Fetch fill mixin can only been used with an infinteView

define(function(require) {
    return {
        initFetchFill: function(options) {
            var delegateRender = this.appendRender,
                $last;

            options || (options = {});
            function checkNeedsMore() {
                var $tempLast = $(options.target || ".tile:last");

                if ($tempLast.length &&
                    $last !== $tempLast.get(0) &&
                    $tempLast.offset().top + $tempLast.height() < $(window).height()) {
                    this.infiniteScroll.fetch();
                    $last = $tempLast.get(0);
                }
            }

            this.appendRender = function() {
                delegateRender.apply(this, arguments);
                checkNeedsMore.call(this);
            };
            checkNeedsMore.call(this);
        }
    };
}, "module/mixins/fetch_fill");define(function(require) {
    return {
        initChosen: function(options) {
            var delegateRender = this.render;
            options || (options = {});

            _.extend(this.events, {
                "click .search-choice-close": "stopProp"
            });

            this.render = function() {
                var rval = delegateRender.apply(this, arguments);

                if (options.ajax) {
                    _.extend(options, options.ajax);
                    delete options.ajax;
                    this.$el.find(".chzn-select").ajaxChosen(options, options.parse);
                } else {
                    this.$el.find(".chzn-select").chosen(options);
                }

                return rval;
            };
        }
    };
}, "module/mixins/chosen");define(function(require) {
    return {
        setCaretPosition: function($el) {
            var elem = $el.get(0),
                caretPos = $el.val().length;

            if (elem) {
                try {
                    if(caretPos && elem.setSelectionRange) {
                        elem.focus();
                        elem.setSelectionRange(caretPos,caretPos);
                    } else if (caretPos && elem.createTextRange) {
                        var range = elem.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', caretPos);
                        range.moveStart('character', caretPos);
                        range.select();
                    } else {
                        elem.focus();
                    }
                } catch (e) {
                    elem.focus();
                }
            }
        },

        toTitleCase: function(str) {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        },

        beginsRegex: function(query) {
            return new RegExp('^' + query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
        },

        containsRegex: function(query) {
            return new RegExp(query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
        },

        isMobile: function(type) {
            var mobiles = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function() {
                    return (mobiles.Android() || mobiles.BlackBerry() || mobiles.iOS() || mobiles.Opera() || mobiles.Windows());
                }
            };

            return mobiles[type || "any"]();
        }
    };
}, "module/utils");define(function() {
    var CacheManager,
        tokenize;

    tokenize = _.memoize(function(str) {
        return _.compact(str.split("/"));
    });

    CacheManager = function() {
        var self = this;

        // Backbone collection methods to override
        this.collectionDelegateMethods = [
            "remove",
            "push",
            "pop",
            "unshift",
            "shift",
            "create"
        ];

        // Backbone model methods to override
        this.modelDelegateMethods = [
            "change"
        ];

        _.each(this.collectionDelegateMethods, function(methodName) {
            var delegate = Backbone.Collection.prototype[methodName];

            Backbone.Collection.prototype[methodName] = function() {
                self.clear.apply(this, [methodName, delegate].concat(arguments));
            };
        });

        _.each(this.modelDelegateMethods, function(methodName) {
            var delegate = Backbone.Model.prototype[methodName];

            Backbone.Model.prototype[methodName] = function() {
                self.clear.apply(this, [methodName, delegate].concat(arguments));
            };
        });
    };

    CacheManager.prototype =  {
        clear: function(methodName, method, args) {
            var obj = this,
                key,
                keyTags,
                tempTags,
                event;

            if (window.sessionStorage) {
                try {
                    // Check if we're a model
                    if (this instanceof Backbone.Model && this.collection) {
                        obj = this.collection;
                    }

                    if (methodName === "_onModelEvent") {
                        event = args[0];
                    }
                    // Compare the object's exploded key to the current cache keys. Remove if match is found.
                    if (event !== "add") {
                        key = obj.getCacheKey();
                        keyTags = tokenize(key);
                        for (key in window.sessionStorage) {
                            tempTags = tokenize(key);
                            if (_.intersection(tempTags, keyTags).length) {
                                window.sessionStorage.removeItem(key);
                            }
                        }
                    }
                } catch (e) {}
            }

            // Delegate to overriden method
            method.apply(this, args);
        }
    };

    return CacheManager;
}, "module/cache_manager");define(function(require) {
    var mediator = require("module/mediator"),
        TrackingModule;

    TrackingModule = function(view) {
        this.view = view;
        this.mediator = mediator;

        this.mediator.on("tracking:getModel", this.getModel, this);
    };

    TrackingModule.prototype = {
        getModel: function(e, fn) {
            var model,
                index;

            if (this.view.$el.has(e.currentTarget).length) {
                model = this.view.getClosestById(e);
                index = $(e.currentTarget).closest("article").index();
                fn(model, index);
            }
        }
    };

    return TrackingModule;
}, "module/tracking");(function() {
    var delegateCollectionFetch = Backbone.Collection.prototype.fetch,
        delegateModelFetch = Backbone.Model.prototype.fetch,
        storedOptions,
        boundUpdateCache;

     function fetchCached(options) {
        var delegateFetch,
            savedObj,
            cache,
            key,
            TTL,
            savedTTL,
            now,
            old;


        if (options.cache) {
            storedOptions = options ? _.clone(options) : {};
            options.success || (options.success = function(){});
            cache = options.cache.cache || "session";
            cache = window[cache + "Storage"];
            key = this.getCacheKey();
            TTL = options.cache.TTL;

            removeBindings.call(this);
            boundUpdateCache = _.bind(updateCache, null, cache, key, TTL)
            this.on("add remove updateCache", boundUpdateCache);
            this.on("clean", removeBindings, this);

            if (cache && cache[key]) {
                savedObj = JSON.parse(cache[key]);

                if (savedObj.TTL) {
                    now = new Date();
                    savedTTL = new Date(savedObj.TTL);

                    if (now <= savedTTL) {
                        return cachedSuccess(this, savedObj.data, options);
                    } else {
                        cache.removeItem(key);
                    }
                } else {
                    return cachedSuccess(this, savedObj.data, options);
                }
            }
            options.success = wrapSuccess.call(this, options.success, cache, key, TTL);
        }

        delegateFetch = this.models ? delegateCollectionFetch : delegateModelFetch;
        return delegateFetch.call(this, options);
    }

    function removeBindings() {
        this.off("clean", removeBindings);
        boundUpdateCache && this.off(null, boundUpdateCache);
    }

    function updateCache(cache, key, TTL, model, obj) {
        var current = new Date(),
            data = obj.toData(storedOptions.cache.serializeOptions);

        if (!data){
            return;
        }

        TTL || (TTL = 0);
        TTL = parseInt(current.getTime(), 10) + (TTL * 1000);

        cache[key] = JSON.stringify({
            TTL: TTL,
            data: data
        });
    }

    function wrapSuccess(delegateSuccess, cache, key, TTL) {
        return function(obj, data) {
            updateCache(cache, key, TTL, null, obj);

            if (delegateSuccess) {
                delegateSuccess.apply(this, arguments);
            }
        }.bind(this);
    }

    function cachedSuccess(obj, data, options) {
        if (obj.reset) {
            obj.reset(obj.parse(data), _.extend({parse: true}, options));
        } else {
            obj.set(obj.parse(data), _.extend({silent: true}, options));
        }
        // Let current call stack clear before success is called.
        _.defer(options.success.bind(obj), obj);
    }

    Backbone.Collection.prototype.fetch = fetchCached;
    Backbone.Model.prototype.fetch = fetchCached;
}( ));define(function(require) {
    return {
        resetSequence: function() {
            this.infiniteScroll.disableFetch();
            this.fetchSequence = _.clone(this.options.fetchSequence);
        },

        fetchNextSequence: function(options, add) {
            var self = this,
                data;

            if (this.collection.currentFetch) {
                this.collection.currentFetch.abort();
            }
            // Disable infinite scroll while doing sequence fetching
            this.infiniteScroll.disableFetch();

            this.collection.currentFetch = this.collection.fetch(_.extend({
                count: this.fetchSequence.shift(),
                add: !!add,
                success: function(collection, response) {
                    self.hideLoader();
                    // Not cached
                    if (response) {
                        // only parse/append when add is true
                        !!add && self.parseResponse(collection, response);

                        // Fetch next sequence
                        if (self.fetchSequence.length) {
                            // Remove cache option so sequences are allowed to fetch normally
                            delete options.cache;
                            self.fetchNextSequence(options, true);
                        } else {
                            // sequence is over, re-enable infinite scroll
                            self.infiniteScroll.enableFetch();
                        }
                    } else {
                        self.infiniteScroll.enableFetch();
                    }
                },
                error: this.onError.bind(this)
            }, options));
        }
    };
}, "module/fetchSequenced");define(function() {
    var mediator = require("module/mediator"),
        cachedReflow,
        typekitTimeout,
        typekitPollInterval = 25,
        typekitPoll,
        typekitLimit = 500,
        config;

    function reflow() {
        if (window._typekitLoaded && config) {
            cachedReflow && cachedReflow.fookmarkClear();
            cachedReflow = $('.reflow').fookmark(config);
            mediator.trigger("reflow");
            config.container.removeClass("invisible").show();
        }
    }
    // reflow anyways if typekit hasn't loaded in time
    typekitTimeout = setTimeout(function() {
        clearTimeout(typekitPoll);
        window._typekitLoaded = {
            state: "failed"
        };
        reflow();
    }, typekitLimit);

    // Poll for typekit to load
    var checkTypekit = function() {
        if (window._typekitLoaded) {
            clearTimeout(typekitTimeout);
            reflow();
        } else {
            typekitPoll = setTimeout(checkTypekit, typekitPollInterval);
        }
    };
    checkTypekit();

    return function(options) {
        config = $.extend({
            offset: 25,
            resizeDelay: 200,
            autoResize: true,
            itemWidth: 244,
            container: $('#reflow-wrapper'),
            onReflow: function(data) {
                mediator.trigger("reflow", data);
            }
        }, options);

        reflow();
    };
}, "module/reflow");define(function(require) {
    var Backbone = require("Backbone");

    return Backbone.View.extend({
        shown: false,
        events: {
            "click": "rocketTop"
        },

        initialize: function(options) {
            this.rocketOffset = options.offset || 200;
            this.paddingY = options.paddingY || 0;
            this.rocketHeight = this.$el.outerHeight();
            this.rocketY = $("body").offset().top;
            this.$el.removeClass("hidden");
            this.hideRocket();

            $(window).on("scroll", this.watchScroll.bind(this));
        },

        watchScroll: function(e) {
            var scrollY = $(window).scrollTop();

            if (scrollY > this.rocketOffset - this.paddingY) {
                this.showRocket();
            } else {
                this.hideRocket();
            }
        },

        showRocket: function() {
            if (!this.shown) {
                this.shown = true;
                this.$el.css({
                    top: (this.rocketY) + "px"
                });
            }
        },

        hideRocket: function() {
            if (this.shown) {
                this.shown = false;
                this.$el.css({
                    top: (this.rocketY - this.rocketHeight - 5) + "px"
                });
            }
        },

        rocketTop: function(e) {
            this.hideRocket();
            $('html, body').animate({scrollTop:0}, 'slow');
        }
    });
}, "module/rocket");define(function(require) {
    var mediator = require("module/mediator"),
        popupMixin = require("module/mixins/popup"),
        loaderMixin = require("module/mixins/loader"),
        utils = require("module/utils"),
        ContentPopup;

    ContentPopup = function(options, e) {
        this.options = options ? _.clone(options) : {};
        this.options.viewOptions || (this.options.viewOptions = {});
        this.options.onShow || (this.options.onShow = function(){});
        this.options.onHide || (this.options.onHide = function(){});

        // Default qtip options
        var qtipOptions = {
            overwrite: !!this.options.overwrite,
            position: {
                my: "left center",
                at: "right center",
                target: this.options.pointerTarget || this.options.target,
                viewport: $(".wrapper-content"),
                adjust: {
                    resize: this.options.resize || false,
                    method: "flip none",
                    x: -1,
                    y: -3
                }
            },
            show: {
                event: e ? e.type :"click",
                ready: this.options.immediate
            },
            hide: {
                event: "click unfocus"
            },
            events: {
                show: this.onShow.bind(this),
                hidden: this.onHidden.bind(this)
            },
            content: Handlebars.templates.contentPopup(_.extend({
                title: this.options.title
            }, this.options.popupTemplateOptions)),
            style: {
                tip: {
                    height: 15,
                    width: 20
                }
            }
        };

        // Allow for user overrides
        this.options.position && _.extend(qtipOptions.position, this.options.position);
        this.options.show && _.extend(qtipOptions.show, this.options.show);
        this.options.hide && _.extend(qtipOptions.hide, this.options.hide);
        this.options.events && _.extend(qtipOptions.events, this.options.events);
        this.options.style && _.extend(qtipOptions.style, this.options.style);

        this.$target = this.options.target.qtip(qtipOptions, e);

        this.initPopupMixin();

        mediator.on("reflow", this.reposition, this);

        return this;
    };

    ContentPopup.prototype = _.extend({
        size: {
            height: 0,
            width: 0
        },

        onShow: function(e, api) {
            this.$el = api.elements.tooltip;
            this.$loader = this.$el.find(".loading");
            this.$context = this.$el.find(".modal-context");
            api.elements.tooltip.on("click", ".modal-close", this.close.bind(this));

            // View specified, render view
            if (!this.view) {
                if (this.options.view) {
                    if (!this.options.skipLoader) {
                        this.showLoading(this.options.spinnerOptions);
                    } else {
                        _.defer(this.showChrome.bind(this));
                    }
                    this.view = new this.options.view(_.extend({
                        el: api.elements.tooltip.find(".modal-body")
                    }, this.options.viewOptions));
                } else {
                    // No view, append passed in content
                    api.elements.tooltip.find(".modal-body").append(this.options.content);
                    _.defer(this.showChrome.bind(this));
                }
            }
            this.options.onShow(e, api);

            this.watchResize(api);
        },

        onHidden: function(e, api) {
            if (this.view && !!this.options.overwrite) {
                this.view.trigger("close");
                this.view.resetView();
                delete this.view;
                if (this.options.immediate) {
                    api.destroy();
                }
            }
            this.options.onHide(e, api);
            api.elements.tooltip.off("click", ".modal-close");
            clearTimeout(this.resizeTimeout);
        },

        watchResize: function(api) {
            var height = api.elements.tooltip.outerHeight(),
                width = api.elements.tooltip.outerWidth();

            if (height !== this.size.height || width !== this.size.width) {
                this.size.height = height;
                this.size.width = width;
                this.reposition();
            }
            this.resizeTimeout = setTimeout(_.bind(this.watchResize, this, api), 100);
        },

        reposition: function() {
            this.$target.qtip("reposition");
        },

        close: function() {
            this.$target.qtip("hide");
        }
   }, loaderMixin, popupMixin);

    return ContentPopup;
}, "module/content_popup");define(function(require) {
    var mediator = require("module/mediator"),
        ActionDropdown;

    ActionDropdown = function(options) {
        this.options = options ? _.clone(options) : {};
        this.options.actions || (this.options.actions = []);

        // Default qtip options
        var qtipOptions = {
            position: {
                my: "top center",
                at: "bottom center",
                target: this.options.pointerTarget || this.options.target,
                viewport: this.options.viewport || true,
                adjust: {
                    method: "flip none",
                    x: -1,
                    y: -3
                }
            },
            show: {
                event: "click",
                ready: options.immediate
            },
            hide: {
                event: "click unfocus"
            },
            events: {
                show: this.onShow.bind(this),
                hidden: this.onHidden.bind(this)
            },
            content: this.options.actionsTarget || this.template(actions),
            style: {
                classes: "action-dropdown-qtip",
                tip: {
                    height: 10,
                    width: 15
                }
            }
        };

        // Allow for user overrides
        this.options.position && _.extend(qtipOptions.position, this.options.position);
        this.options.show && _.extend(qtipOptions.show, this.options.show);
        this.options.hide && _.extend(qtipOptions.hide, this.options.hide);
        this.options.events && _.extend(qtipOptions.events, this.options.events);
        this.options.style && _.extend(qtipOptions.style, this.options.style);

        this.$target = this.options.target.qtip(qtipOptions);
        mediator.on("reflow", this.reposition, this);

        return this;
    };

    ActionDropdown.prototype = {
        size: {
            height: 0,
            width: 0
        },

        template: function(actions) {
            return Handlebars.templates.actionDropdown({
                actions: _.map(actions, function(action) {
                    action.cid = _.uniqueId();
                    return {
                        cid: action.cid,
                        title: action.title,
                        url: action.url
                    };
                }),
                dropdownClass: this.options.dropdownClass
            });
        },

        onShow: function(e, api) {
            api.elements.tooltip.on("click", ".action", this.onAction.bind(this));
            this.watchResize(api);
        },

        onHidden: function(e, api) {
            this.options.immediate && api.destroy();
            api.elements.tooltip.off("click", ".action");
            clearTimeout(this.resizeTimeout);
        },

        onAction: function(e) {
            var actionCid = $(e.currentTarget).attr("data-cid"),
                action = _.find(this.options.actions, function(action) {
                    return action.cid === actionCid;
                });

            if (action.view) {
                new action.view(action.viewOptions);
            }
            this.close();
        },

        watchResize: function(api) {
            var height = api.elements.tooltip.outerHeight(),
                width = api.elements.tooltip.outerWidth();

            if (height !== this.size.height || width !== this.size.width) {
                this.size.height = height;
                this.size.width = width;
                this.reposition();
            }
            this.resizeTimeout = setTimeout(_.bind(this.watchResize, this, api), 100);
        },

        reposition: function() {
            this.$target.qtip("reposition");
        },

        close: function() {
            this.$target.qtip("hide");
        }
   };

    return ActionDropdown;
}, "module/action_dropdown");/**
 * hoverTip plugin
 * initially designed for dna bar hovers
 * can be made more modular for other purposes
 */

define(function(require) {
    "use strict";

    // @TODO: refactor to remove the suck
    // make tip stay open when hovering on tip

    // Dynamically create id, if you want
    var mediator = require("module/mediator"),
        pubMethods = {},
        tipId = "hover-tip",
        supportsOrientationChange = "onorientationchange" in window,
        orientationEvent = supportsOrientationChange ? "orientationchange" : "resize",
        resizeTimer;

    var HoverTip = function(options) {
        this.hasTip = false;
        this.$hoverTip = null;
        this.$tipTriangle = null;
        this.$currentTrigger = null;
        this.resizeTimer = null;
        this.options = $.extend({
            wrapper: "body",
            trigger: ".dna-strand",
            tipHeight: "15px",
            topOffset: -20,
            tipClass: "",
            resizeDelay: 200
        }, options);

        this.checkSticky();
        $(this.options.wrapper).on('hover', this.options.trigger, this.tipHandler.bind(this));
        $(window).on(orientationEvent, this.positionTip.bind(this));
    };

    HoverTip.prototype = {
        makeTip: function(){
            return $('<div/>', {"id": tipId, "class": tipId}).css({
                position: 'absolute',
                height: this.options.tipHeight
            });
        },

        makeTipPointer: function() {
            return $('<div/>', {"class": "hover-tip-pointer"}).css({
                position: 'absolute'
            });
        },

        tipHandler: function(e){
            this.$currentTrigger = $(e.target);

            if (this.$currentTrigger.parent().hasClass("static")) {
                return;
            }

            if (e.type === 'mouseenter') {
                this.$currentTrigger.addClass('s-active');
                this.showTip(e);
            } else {
                this.hideTip(e);
            }
        },

        showTip: function(e){
            // @TODO: create options callbacks for the text and
            // color methods to make this more generic
            // and optimize
            var tipText = this.$currentTrigger.data('name'),
                textColor = this.$currentTrigger.data('contrastcolor');

            if (!this.hasTip) {
                this.$hoverTip = this.makeTip();
                this.$tipTriangle = this.makeTipPointer();
                this.$hoverTip.addClass('hidden').appendTo('body');
                this.hasTip = true;
            }

            this.$hoverTip.html('<span class="dna-tip-text" style="color:' + textColor + ';">' + tipText + '</span>');
            this.$hoverTip.append(this.$tipTriangle);
            this.positionTip();

            this.$hoverTip.removeClass('hidden');
        },

        positionTip: function() {
            var toolbarOffset = parseInt($("#tb-toolbar").css("top"), 10) || 0,
                bgColor,
                $targParent,
                tipTop,
                tipLeft,
                tipWidth;

            if (this.hasTip) {
                bgColor = this.$currentTrigger.css('background-color'),
                $targParent = this.$currentTrigger.parent(),
                tipTop = $targParent.offset().top + this.options.topOffset - toolbarOffset,
                tipLeft = $targParent.offset().left,
                tipWidth = this.options.width || $targParent.width();

                this.$hoverTip.css({
                    "background-color": bgColor,
                    "left": tipLeft + "px",
                    "top": tipTop + "px",
                    "width": tipWidth
                });

                this.$tipTriangle.css({
                    "left": (this.$currentTrigger.outerWidth() / 2) - (this.$tipTriangle.outerWidth() / 2) + this.$currentTrigger.position().left,
                    "border-top": "6px solid " + bgColor
                });
            }
        },

        hideTip: function(e){
            if (!$(e.currentTarget).closest(".dna-bar.sticky").length) {
                this.$currentTrigger.removeClass('s-active').unbind();
                this.$hoverTip.addClass('hidden');
            }
        },

        checkSticky: function() {
            var self = this,
                $sticky = $(this.options.wrapper).find(".dna-bar.sticky"),
                $strand,
                standSize,
                $largestStrand,
                largestStrandSize = 0;

            if ($sticky.length) {
                $sticky.each(function() {
                    $(this).find(".dna-strand").each(function() {
                        $strand = $(this);
                        standSize = $strand.data("size");
                        if (!$strand || standSize > largestStrandSize) {
                            largestStrandSize = standSize;
                            $largestStrand = $strand;
                        }
                    });
                    if ($largestStrand) {
                        self.$currentTrigger = $largestStrand;
                        self.showTip();
                    }
                });
            }
        }
    };

    return HoverTip;

}, "module/hover_tip");define(function(require) {
    var ContentPopup = require("module/content_popup");

    function tooltip(e, options) {
        var templateName = $(e.currentTarget).attr("data-template"),
            template = Handlebars.templates[templateName],
            templateData,
            onShow,
            onHide,
            config;

        options || (options = {});
        templateData = options.data ? options.data.data : {};

        if (template) {
            onShow = function(e, api) {
                api.elements.target.addClass("s-active");
            };
            onHide = function(e, api) {
                api.elements.target.removeClass("s-active");
            };

            config = {
                target: $(e.currentTarget),
                immediate: true,
                skipLoader: true,
                overwrite: true,
                content: template(templateData),
                position: {
                    my: "left center",
                    at: "right center",
                    viewport: true,
                    adjust: {
                        resize: false,
                        x: 0,
                        y: 1
                    }
                },
                show: {
                    solo: true
                },
                style: {
                    height: false,
                    width: false,
                    classes: "tutorial-tip-wrap"
                },
                onShow: onShow,
                onHide: onHide
            };

            if (options.modal) {
                _.extend(config, {
                    events: {
                        visible: function(event, api) {
                            // Set tooltip over the overlay
                            api.elements.tooltip.css("z-index", 401);
                            api.elements.target.css("z-index", 401);
                        }
                    },
                    onShow: function(e, api) {
                        onShow(e, api);
                        $("body").append("<div class='modal-view'></div>");
                        $("body").addClass("modal-mode");
                    },
                    onHide: function(e, api) {
                        onHide(e, api);
                        $("body > .modal-view").fadeOut(function() {
                            $(this).remove();
                        });
                        $("body").removeClass("modal-mode");
                    }
                });
            }

            new ContentPopup(config, e);
        }
    }

    return function(options) {
        $("body").on("click", options.target, tooltip);
        $("body").on("tutorial:tip", options.target, tooltip);
    };
}, "module/help_tip");define(function() {
    return function($el, options){
        var now = new Date().getTime(),
            $notificationDates = $el.find('.notification-date'),
            $notificationDate,
            timeStamp = 0,
            seconds,
            i, ii;

        for (i=0, ii=$notificationDates.length; i<ii; i++) {
            $notificationDate = $($notificationDates[i]);
            timeStamp = $notificationDate.data('timestamp'),
            seconds = Math.round(timeStamp / 1000);
            if (timeStamp > 0) {
                $notificationDate.text(moment.unix(seconds).fromNow());
            }
        }
    };
}, "module/time_since");define(function(require) {
    var Backbone = require("Backbone");

    return Backbone.View.extend({
        template: Handlebars.templates.progressBar,

        initialize: function() {
            var self = this,
                i;

            this.stops = [];
            this.state = {
                current: this.options.current || (this.options.current = 0),
                total: this.options.total || (this.options.total = 1)
            };
            this.state.percent = 100 - (this.state.current / this.state.total) * 100;

            for (i = 1; i <= this.state.total; i++) {
                this.stops.push({
                    count: i,
                    active: i === this.state.current,
                    passed: !!(i < this.state.current),
                    percent: Math.floor((i / this.state.total) * 100)
                });
            }

            this.render();
        },

        render: function() {
            this.$el.html(this.template({
                message: this.options.message,
                state: this.state,
                stops: this.stops
            }));

            return this;
        }
    });
}, "module/progress_bar");define(function() {
    "use strict";

    return Backbone.Model.extend({
        initialize: function(attrs, options) {
            options || (options = {});

            if (options.url) {
                this.uri = {
                    url: options.url
                };
            } else if (options.uri) {
                this.uri = options.uri;
            }

            return this;
        },

        url: function() {
            var url = "",
                prefix;

            if (this.uri) {
                url = this.uri.url;
            } else if (this.collection) {
                url = _.result(this.collection, "url");
            }

            prefix = url.match('\\?') ? '&' : '?';

            return url + prefix + $.param({'_nospa': true});
        },

        editUrl: function() {
            // a model may or may not have a url
            try {
                return this.url() + "/edit";
            } catch(e) {
                return "";
            }
        },

        parse: function(raw) {
            var actions,
                interactions;

            raw || (raw = {});

            // BLASPHEMOUS!!!
            if (raw.data && raw.data.data) {
                raw = raw.data;
            }

            this.uri = raw.uri || this.uri;
            this.view = raw.view || this.view || {};
            this.interactions = {};
            this.actions = {};

            interactions = this.view.interaction;
            if (interactions) {
                _.each(interactions, _.bind(this._buildNestedCollection, this, this.interactions));
            }
            actions = this.view.action;
            if (actions) {
                _.each(actions, _.bind(this._buildNestedCollection, this, this.actions));
            }

            return raw.data;
        },

        _buildNestedCollection: function(obj, value, key) {
            var BaseCollection = require("module/collections/base");

            obj[key] = new BaseCollection(value.data.items, {
                uri: value.uri,
                parse: true
            });
        },

        // Returns a "unique" key identifier for the collection
        getCacheKey: function() {
            return this.url();
        },

        toData: function() {
            var interactionData,
                data = {
                uri: _.clone(this.uri),
                view: _.clone(this.view),
                data: _.clone(this.attributes)
            };

            _.each(this.interactions, function(interaction, name) {
                interactionData = interaction.toData();
                if (interactionData) {
                    data.view.interaction[name] = interactionData.data;
                    data.view.interaction[name].data.count = data.view.interaction[name].data.items.length;
                }
            });

            return data;
        },

        toHandlebars: function() {
            var json = _.clone(this.view || {});
            json.cid = this.cid;
            json.editUrl = this.editUrl();

            return json;
        },

        updateCache: function() {
            // Notify fetchCached that we should update the cache
            this.collection && this.collection.updateCache();
            this.trigger("updateCache", this, this.collection);
        },

        save: function(attrs, options) {
            attrs || (attrs = {});
            options || (options = {});

            if (this.uri) {
                options.data || (options.data = {});
                _.extend(options.data, {
                    _token: this.uri.token
                });
            }

            return Backbone.Model.prototype.save.call(this, attrs, options);
        },

        destroy: function(options) {
            var paramData;

            paramData = $.param({
                _token: this.uri.token
            });
            options = options ? _.clone(options) : {};
            options = _.extend({
                data: paramData
            }, options);

            return Backbone.Model.prototype.destroy.call(this, options);
        },

        // Creates a new collection if not already defined and returns
        // a fetch promise, otherwise it returns a promise which will resolve
        // immediately. Takes a key name to store the collection on the object,
        // a Collection constructor, and collection options.
        fetchStatic: function(key, Collection, options) {
            var collection = this[key],
                deferred,
                promise;

            if (!collection) {
                collection = new Collection([], options);
                this[key] = collection;
                promise = collection.fetch(options);
            } else {
                deferred = $.Deferred();
                promise = deferred.promise();
                deferred.resolve(collection);
                if (options.success) {
                    _.defer(options.success, collection);
                }
            }

            // Always return a promise
            return promise;
        }
    });
}, "module/models/base");define(function() {
    "use strict";

    var Backbone = require("Backbone"),
        BaseModel = require("module/models/base");

    return BaseModel.extend({

    });
}, "module/models/list");define(function() {
    "use strict";

    var BaseModel = require("module/models/base");

    return Backbone.Collection.extend({
        model: BaseModel,

        initialize: function(items, options) {
            options || (options = {});
            _.extend(options, {
                parse: true
            });
            if (options.uri) {
                this.uri = options.uri;
            } else if (options.url) {
                this.uri = {
                    url: options.url
                };
            } else {
                this.uri = {};
            }

            options.next && (this.next = options.next);
            options.view && (this.view = options.view);
            this.next && (this.pageStateId = options.next._pageStateId);
        },


        url: function() {
            var prefix = this.uri.url.match('\\?') ? '&' : '?';
            return this.uri.url + prefix + $.param({'_nospa': true});
        },

        get: function(id) {
            var item = Backbone.Collection.prototype.get.call(this, id);

            // check if item is referenced by view id
            if (!item) {
                item = this.find(function(model) {
                    return model.view && model.view.data.id == id;
                });
            }

            return item;
        },

        parse: function(response) {
            var data;

            // clear the previous next
            delete this.next;

            if (_.isArray(response)) {
                data = response;
            } else {
                this.uri = response.data.uri;
                this.view = response.data.view;
                this.view && (this.next = this.view.next);
                this.next && (this.pageStateId = this.next._pageStateId);
                data = response.data.data.items;
            }

            return data;
        },

        // Returns a "unique" key identifier for the collection
        getCacheKey: function() {
            var extra = "";

            if (this.next && this.next.filter) {
                extra = ":" + this.next.filter;
            } else if (this.filterParam) {
                extra = ":" + this.filterParam;
            }

            return this.url() + extra;
        },

        // Opposite of parse
        toData: function(options) {
            var items,
                data;

            options || (options = {});

            items = this.map(function(model) {
                return model.toData();
            });

            // Allow option of not serializing empty object
            if (options.ensureItems) {
                if (!items.length) {
                    return;
                }
            }

            data = {
                uri: this.uri,
                data: {
                    items: items
                }
            };

            if (this.view) {
                data.view = {
                    next: this.next
                };
            }

            return {
                data: data
            };
        },

        toHandlebars: function() {
            return this.map(function(model) {
                return model.toHandlebars();
            });
        },

        updateCache: function() {
            this.trigger("updateCache", null, this);
        },

        fetch: function(options) {
            var jqXHR;

            options = options ? _.clone(options) : {};
            options.data || (options.data = {});
            options.parse = true;

            // Merge the current next over the data
            this.next && (options.data = _.extend(options.data, this.next));

            // Allow overriding of pageStateId
            this.pageStateId && (options.data._pageStateId = this.pageStateId);

            // Update the collections filter if specified in options
            options.filter && (this.filterParam = options.filter);

            // Set query filter based on collections filter
            this.filterParam && (options.data._filter = this.filterParam);

            // Update the collections search query if specified in options
            options.query && (this.query = options.query);

            // Set the search query based on collections query
            this.query && (options.data._query = this.query);

            options.query && (options.data._query = options.query);
            options.count && (options.data._count = options.count);

            jqXHR = Backbone.Collection.prototype.fetch.call(this, options);
            this.trigger("fetch");

            return jqXHR;
        },

        clean: function() {
            delete this.filterParam;
            delete this.query;
            delete this.next;

            this.trigger("clean");
        },

        create: function(data, options) {
            data = _.extend({
                _token: this.uri.token
            }, data);

            // returns model
            return Backbone.Collection.prototype.create.call(this, data, options);
        }
    });
}, "module/collections/base");define(function() {
    "use strict";

    var BaseCollection = require("module/collections/base"),
        List = require("module/models/list");

    return BaseCollection.extend({
        model: List,

        comparator: function(list) {
            if (list.get("timestampModified")) {
                return -list.get("timestampModified");
            } else {
                return -list.get("timestampCreated");
            }
        }
    });
}, "module/collections/lists");define(function(require) {
    var BaseModel = require("module/models/base");

    return BaseModel.extend({});
}, "module/models/user");define(function(require) {
    var BaseModel = require("module/models/base"),
        ContentPopup = require("module/content_popup");

    return {
        _validateEvents: {
            "blur .validate": "validate",
            "focus input:not([type='submit'])": "showHelpTip",
            "focus select": "showHelpTip",
            "blur input:not([type='submit'])": "hideHelpTip",
            "blur select": "hideHelpTip",
            "submit form": "submitValidate",
            "submit": "submitValidate"
        },

        initValidateForm: function(options) {
            this.events || (this.events = {});
            !this.steps && (this.steps  = options.steps || []);
            this.formModel = options.formModel;
            this.$submit = this.$el.find(".submit");
            this._validateOptions = options;
            this._validations = {};

            _.extend(this.events, this._validateEvents);
            this.delegateEvents(this.events);

            if (this.$el.is("form")) {
                this.$activeForm = this.$el;
            } else {
                this.$activeForm = this.$el.find("fieldset").first();
                // if no fieldset is found, fallback to the first form
                if (!this.$activeForm.length) {
                    this.$activeForm = this.$el.find("form");
                }
            }

            try {
                if (this.formModel.view.errors) {
                    this.showModelErrors(this.formModel.view.errors);
                }
            } catch(e) {}
        },

        showHelpTip: function(e) {
            var $field = $(e.currentTarget),
                $target = $field.closest(".validate-wrap"),
                fieldHelpText = $field.attr("data-help");

            this.removeError($target);
            if (fieldHelpText) {
                this.setFieldMessage($field, "help-tip", "", fieldHelpText);
            }
        },

        hideHelpTip: function(e) {
            var $field = $(e.currentTarget),
                $target = $field.closest(".validate-wrap");

            $target.qtip('destroy');
            this.checkRequired($field);
        },

        showSpinner: function($field) {
            $field.find(".input-state").spin({
                lines: 11, // The number of lines to draw
                length: 3, // The length of each line
                width: 2, // The line thickness
                radius: 4, // The radius of the inner circle
                color: '#888' // #rgb or #rrggbb
            });
            $field.removeClass("success error").addClass("spinning");
        },

        hideSpinner: function($field) {
            $field.removeClass("spinning");
            $field.find(".input-state").spin(false);
        },

        removeError: function($el) {
            $el.qtip('destroy');
            $el.removeClass("error");
        },

        nextStep: function(e) {
            var step;

            if (this.steps.length) {
                step = this.steps.shift();
                this.onStep && this.onStep();
                step.call(this, e);
            }
        },

        showModelErrors: function(errors) {
            var self = this,
                $field;

            _.each(errors, function(error, name) {
                $field = self.$el.find("[name='" + name + "']");
                self.setFieldMessage($field, "error", "success", error.text);
            });
        },

        validate: function(e) {
            var $field = $(e.currentTarget),
                $fieldWrap = $field.closest(".validate-wrap"),
                fieldName = $field.attr("name"),
                value = $.trim($field.val()),
                validation,
                data = {};

            if ($fieldWrap.data("validate-date")) {
                $field = $fieldWrap;
                data = this.validateDate($fieldWrap);
                if (!data) {
                    return;
                }
            } else if (!value) {
                return;
            } else {
                data[fieldName] = value;
            }
            data._validate = true;

            validation = new BaseModel({
                uri: this.formModel.actions.creates.uri
            }, {
                parse: true
            });

            this.showSpinner($fieldWrap);
            this._validations[fieldName] = validation.save(data, {
                success: _.bind(this.onValidateSuccess, this, $field, fieldName),
                error: _.bind(this.onValidateError, this, $field, fieldName)
            });
        },

        validateAll: function () {
            this.$el
            .find("input[type!='hidden'],select")
            .each(function (i, el) {
                this.validate({
                    currentTarget: el
                });
            }.bind(this));
        },

        validateDate: function($fieldWrap) {
            var data = {},
                $month,
                month,
                $day,
                day,
                $year,
                year;

            $month = $fieldWrap.find(".validate.month");
            month = $month.val();
            $day = $fieldWrap.find(".validate.day");
            day = $day.val();
            $year = $fieldWrap.find(".validate.year");
            year = $year.val();

            // check if date has changed
            if (!month || !day || !year) {
                return false;
            }

            data[$month.attr("name")] = month;
            data[$day.attr("name")] = day;
            data[$year.attr("name")] = year;

            return data;
        },

        onValidateSuccess: function($field, name, model, response) {
            var qtipApi = $field.data("qtip");

            //  Hide any error messages
            qtipApi && qtipApi.hide();
            this.hideSpinner($field.closest(".validate-wrap"));
            this.setFieldMessage($field, "success", "error validate-error", "");
        },

        onValidateError: function($field, name, model, response) {
            var message = "";

            try {
                message = JSON.parse(response.responseText).data[name].text;
            } catch(e) { }

            this.trigger('validation:error', name);

            this.hideSpinner($field.closest(".validate-wrap"));
            this.setFieldMessage($field, "error validate-error", "success", message);
        },

        onRequired: function($field) {
            var message = this._validateOptions.requiredMessage || "Must not be empty";
            this.setFieldMessage($field, "error", "success", message);
        },

        setFieldMessage: function($field, addClass, removeClass, message) {
            var $fieldWrap = $field.closest(".validate-wrap"),
                qtipApi = $field.data("qtip"),
                tooltipOverides = this._tooltipOverides || {};

            //  Hide any previous messages
            qtipApi && qtipApi.destroy();

            $fieldWrap.removeClass(removeClass).addClass(addClass);

            if (message) {
                new ContentPopup(_.extend({
                    target: $fieldWrap,
                    content: message,
                    popupTemplateOptions: {
                        noCloseButton: true
                    },
                    immediate: true,
                    position: {
                        viewport: false,
                        adjust: {
                            resize: false,
                            x: 1
                        }
                    },
                    hide: {
                        event: false
                    },
                    show: {
                        event: false
                    },
                    style: {
                        classes: "field-tip " + addClass,
                        width: "auto",
                        height: "auto",
                        tip: {
                            border: 1,
                            height: 9,
                            width: 23
                        }
                    }
                }, tooltipOverides));
            }
        },

        checkRequired: function($el) {
            var radio = false,
                present = false,
                value,
                $target,
                $radio;

            $target = $el.closest(".validate-wrap");
            radio = $el.is("[type='radio']");

            if ($target.hasClass("hidden") || $target.hasClass("validate-error")) {
                return;
            }

            if ($target.attr("data-validate-date")) {
                // If there is a date, required check passes, no matter what it is.
                present = !!this.validateDate($target);
            } else if (radio && $target.attr("data-required")) {
                // A radio is valid if the one item is checked.
                $radio = $target.find("input[type='radio'][name='" + $el.attr("name") + "']:checked");
                present = !!$radio.length;
            } else {
                value = $el.val().replace(/^\s*|\s*$/g, "");
                present = (value && $el.attr("data-default") !== value);
            }

            if (!present) {
                this.onRequired($target);
            } else {
                // remove require error
                this.removeError($target);
            }
        },

        submitValidate: function(e) {
            var self = this,
                stop = false,
                field,
                validations = [];

            this.$activeForm.find("[data-required]").each(function(i, el){
                self.checkRequired($(el));
            });

            // Don't allow form submission with errors on the page
            if (this.$activeForm.find(".validate-wrap.error").length) {
                this.stopProp(e);
                stop = true;
            }

            // All validations passed proceed to next step
            if (!stop) {
                if (this.steps.length) {
                    this.stopProp(e);
                }
                this.$activeForm.find(".submit").focus();

                for (field in this._validations) {
                    validations.push(this._validations[field]);
                }
                $.when.apply(null, validations).done(_.bind(this.nextStep, this, e));
            }
        }
    };
}, "module/mixins/validate_form");define(function() {
    "use strict";

    return function(collection, options) {
        var self = { },
            $target,
            fetchOn,
            page,
            prevScrollY = 0;

        options || (options = {});
        self.collection = collection;
        self.options = $.extend({
            success: function(){ },
            error: function(){ },
            onFetch: function(){ },
            queryData: {},
            target: $(window),
            scrollOffset: $(window).height(),
            eventType: "scroll",
            add: true,
            stopProp: false
        }, options);

        self.destroy = function() {
            $target.off(self.options.eventType, self.watchScroll);
        };

        self.enableFetch = function() {
            fetchOn = true;
        };

        self.disableFetch = function() {
            fetchOn = false;
        };

        self.onFetch = function() {
            self.options.onFetch();
        };

        self.fetchSuccess = function(collection, response) {
            if (response.data.data.count > 0) {
                self.enableFetch();
                page += 1;
            } else {
                self.disableFetch();
            }
            self.options.success(collection, response);
        };

        self.fetchError = function(collection, response) {
            self.disableFetch();

            self.options.error(collection, response);
        };

        self.fetch = function(args) {
            self.onFetch();
            self.disableFetch();
            self.collection.fetch({
                success: self.fetchSuccess,
                error: self.fetchError,
                add: self.options.add,
                data: _.extend(self.options.queryData, args)
            });
        };

        self.watchScroll = function(e) {
            var queryParams,
                scrollY = $target.scrollTop() + $target.height(),
                docHeight = $target.get(0).scrollHeight;

            if (!docHeight) {
                docHeight = $(document).height();
            }

            if (scrollY >= docHeight - self.options.scrollOffset &&
                fetchOn &&
                self.collection.next &&
                prevScrollY <= scrollY) {
                self.fetch({
                    action_trigger: "userscrolldown"
                });
            }
            prevScrollY = scrollY;
        };

        self.rebind = function() {
            $target = $(self.options.target);
            $target.off(self.options.eventType, self.watchScroll);
            $target.on(self.options.eventType, self.watchScroll);
        };

        (function initialize() {
            fetchOn = true;
            page = 1;

            if (self.collection.uri && self.collection.uri.url) {
                $target = $(self.options.target);
                $target.on(self.options.eventType, self.watchScroll);
            }
        }());

        return self;
    };
}, "module/backbone/infinite_scroll");define(function() {
    "use strict";

    var Backbone = require("Backbone"),
        loaderMixin = require("module/mixins/loader"),
        TrackingModule = require("module/tracking"),
        mediator = require("module/mediator"),
        utils = require("module/utils");

    return Backbone.View.extend({
        mediator: mediator,

        initialize: function(options) {
            options || (options = {});
            options.template && !this.template && (this.template = options.template);
            _.extend(this, loaderMixin);
            new TrackingModule(this);
        },

        stopProp: function(e) {
            if (e && e.stopPropagation) {
                e.stopPropagation();
                e.preventDefault();
            }
        },

        stopPropagation: function(e) {
            e && e.stopPropagation && e.stopPropagation();
        },

        resetView: function() {
            this.hideLoader();
            this.$el.html("").css({
                height: "auto"
            });
            this.dropdown && this.dropdown.remove();
            this.undelegateEvents();
            this.infiniteScroll && this.infiniteScroll.enableFetch();
        },

        onError: function(obj, response) {
            var message = "";

            if (response.statusText === "abort" || response.status === 0) {
                return;
            }

            try {
                response = JSON.parse(response.responseText);
                message = response.meta.message;
            } catch (e) {
                message = "Don't worry. The engineers will pay dearly for this outage.";
            }

            this.hideLoader && this.hideLoader();
            this.$el.find(".no-results").remove();
            this.$el.after(Handlebars.templates.onError({
                message: message
            }));
        },

        initScroller: function(){
            var $scrollerWrap = this.$el.find('.antiscroll-wrap'),
                $scrollerInner = this.$el.find('.antiscroll-inner');

            if (!$scrollerWrap.length && this.$el.hasClass("antiscroll-wrap")) {
                $scrollerWrap = this.$el;
            }

            if ($scrollerWrap) {
                $scrollerWrap.width($scrollerWrap.width());
                $scrollerInner.width($scrollerWrap.width());
                $scrollerWrap.find(".antiscroll-inner").css({
                    "height": $scrollerWrap.height() + "px",
                    "overflow-y": "scroll"
                });
            }
            if (!this.options.osScroller && !utils.isMobile()) {
                this.scroller && this.scroller.destroy();
                this.scroller = $scrollerWrap.antiscroll({
                    x: false
                }).data('antiscroll');
            }
        },

        getClosestById: function(e) {
            return this.collection.get($(e.currentTarget).closest("[data-id]").attr("data-id"));
        },

        getItemById: function(e, closest) {
            var item;

            if (closest) {
                item = this.collection.get($(e.currentTarget).closest(closest).attr("data-id"));
            } else {
                item = this.collection.get($(e.currentTarget).attr("data-id"));
            }

            return item;
        },

        getItemByCid: function(e) {
            return this.collection.getByCid($(e.currentTarget).attr("data-cid"));
        }
    });
}, "module/views/base");define(function(require) {
    "use strict";

    var BaseView = require("module/views/base"),
        InfiniteScroll = require("module/backbone/infinite_scroll"),
        fetchFill = require("module/mixins/fetch_fill");

    return BaseView.extend({
        initialize: function(options) {
            options || (options = {});
            _.bindAll(this, "onFetch", "parseResponse", "appendRender");
            BaseView.prototype.initialize.call(this, options);

            this.collection.on("fetch", this.onFetch, this);
            this.collection.on("reset", this.render, this);

            this.infiniteScroll = new InfiniteScroll(this.collection, _.extend({
                success: this.parseResponse,
                error: this.onError.bind(this)
            }, options.infiniteOptions));

            BaseView.prototype.initialize.call(this, options);
            if (!options.disableFetchFill) {
                _.extend(this, fetchFill);
                this.initFetchFill();
            }
        },

        onFetch: function() {
            this.showLoader(this.options.loader);
            this.lastModel = this.collection.last();
        },

        parseResponse: function(collection, response) {
            var fromIndex,
                renderCount,
                data;

            if (this.lastModel) {
                fromIndex = this.collection.indexOf(this.lastModel);
                renderCount = collection.length - fromIndex - 1;
            } else {
                renderCount = collection.length;
            }

            data = _(collection.toHandlebars()).last(renderCount);
            this.appendRender(data);
        },

        render: function() {
            this.$el.html("");
            this.appendRender(this.collection.toHandlebars());

            return this;
        },

        appendRender: function(data) {
            var $target = this.options.appendTarget ? $(this.options.appendTarget) : this.$el,
                template = this.options.appendTemplate ? this.options.appendTemplate : this.template;

            this.$el.find(".no-results").remove();
            this.hideLoader();
            $target.append(template({
                data: data,
                meta: this.options.meta,
                viewer: this.options.viewer
            }));

            this.delegateEvents(this.events);
            this.afterRender(data);
        },

        afterRender: function(options) {
            // stub implemented in children
        }
    });
}, "module/views/infinite_view");define(function(require) {
    var BaseView = require("module/views/base"),
        popupMixin = require("module/mixins/popup"),
        mediator = require("module/mediator");

    return BaseView.extend({
        el: "body",
        template: Handlebars.templates.modal,

        events: {
            "click .modal-close": "close",
            "click .modal-wrap": "stopPropagation",
            "keyup": "keyPress"
        },

        initialize: function(options) {
            BaseView.prototype.initialize.call(this, options);
            this.templateOptions = options.templateOptions || {};
            options.animate && (this.templateOptions.animate = options.animate);
            this.ModalView = options.view;
            this.viewOptions = options.viewOptions || {};
            this.afterRender = options.afterRender || function() {};
            this.skipLoader = options.skipLoader || false;

            if (!this.options.disableClickToClose) {
                this.events = _.extend({}, this.events, {
                    "click": "close"
                });
            }

            _.extend(this, popupMixin);
            this.initPopupMixin();

            this.viewOptions = _.extend({
                el: ".modal-body"
            }, this.viewOptions);

            BaseView.prototype.initialize.call(this, options);

            this.render();
        },

        render: function() {
            this.$el.append(this.template(_.extend({
                modalClass: this.options.modalClass,
                title: this.options.title,
                subTitle: this.options.subTitle,
                noCloseButton: this.options.noCloseButton || this.options.unclosable
            }, this.templateOptions)));
            this.$el.addClass("modal-mode");
            this.$loader = this.$el.find(".loading");
            this.$context = this.$el.find(".modal-context");

            if (!this.skipLoader && !this.options.contentTemplate) {
                this.showLoading();
            } else {
                _.defer(this.showChrome.bind(this));
            }

            if (this.ModalView) {
                this.modalView = new this.ModalView(this.viewOptions);
                this.modalView.on("close", this.close, this);
            } else if (this.options.contentTemplate) {
                this.$el.find(".modal-body").html(
                    this.options.contentTemplate(this.options.contentTemplateData)
                );
            }
            this.afterRender(this);
            this.trigger("afterRender");
        },

        keyPress: function(e) {
            if (e.keyCode === 27) {
                this.close();
            }
        },

        close: function(options) {
            options || (options = {});

            if (this.options.unclosable) {
                return;
            }

            if (options.animate) {
                this.$el.find(".modal-view").fadeOut(this._close.bind(this));
            } else {
                this._close();
            }
        },

        _close: function() {
            this.undelegateEvents();
            this.$el.removeClass("modal-mode");
            this.$el.find(".modal-view").remove();
            this.trigger("close");
            this.modalView && this.modalView.trigger("modal:close");
        }
    });
}, "module/modal");define(function() {
    var BaseView = require("module/views/base"),
        mediator = require("module/mediator"),
        utils = require("module/utils"),
        UP = 38,
        DOWN = 40,
        ENTER = 13,
        SHIFT = 16,
        ESC = 27;

    return BaseView.extend({
        el: "body",
        template: Handlebars.templates.dropdown,
        dropdownTemplate: Handlebars.templates.dropdownList,
        currentItem: 0,
        focusItem: -1,
        cachedResults: {},
        requestFinished: true,

        initialize: function(options) {
            _.bindAll(this, "hideDropdown", "focusOption", "unFocusOption",
                    "selectOption", "filterItems", "createNew", "keyPress");
            this.options.position || (this.options.position = {});
            this.options.offset || (this.options.offset = {top: 0, left: 0});
            this.ajaxKey = options.ajaxKey || "query";
            this.itemKey = options.itemKey || "name";
            this.absolute = !this.options.position.static;
            this.dropdownItemsSelector = ".dropdown-items-wrap[data-cid='" + this.cid + "']";

            mediator.on("dropdown:clean", this.clean, this);
            mediator.on("dropdown:inputUpdate", this.inputUpdate, this);

            this.renderDropdown();
            if (!options.noFocus) {
                this.$el.find(".dropdown-search").focus();
            }
        },

        attachDropdownEvents: function(dropdownItemsSelector) {
            $("body").off("mouseover", ".dropdown-item");
            $("body").on("mouseover", this.dropdownItemsSelector + " .dropdown-item", this.focusOption);
            $("body").off("mouseout", ".dropdown-item");
            $("body").on("mouseout", this.dropdownItemsSelector + " .dropdown-item", this.unFocusOption);
            $("body").off("click", ".dropdown-item");
            $("body").on("click", this.dropdownItemsSelector + " .dropdown-item", this.selectOption);
            this.$dropdown.find(".dropdown-search").on("keyup", this.keyPress);
            this.$dropdown.find(".dropdown-search").on("keyup keydown keypress", this.filterItems);

            $(window).on("click", this.hideDropdown.bind(this));
        },

        stopPropagation: function(e) {
            e.stopPropagation();
            e.preventDefault();
        },

        clean: function() {
            this.inputUpdate("");
            this.abortServerFilter();
            this.resetFocus();
        },

        remove: function() {
            this.$dropdownItems.remove();
            Backbone.View.prototype.remove.call(this);
        },

        inputUpdate: function(val) {
            this.$el.find(".dropdown-search").val(val);
        },

        toDropdownFormat: function(collection) {
            var self = this;

            return collection.map(function(item) {
                return {
                    cid: item.cid,
                    value: item.get(self.itemKey),
                    valueToBold: ""
                };
            });
        },

        toMatchFormat: function(collection, query, filter) {
            var self = this,
                match = false,
                items = [],
                queryLength,
                matchIndex,
                itemJSON,
                value,
                json,
                regex;

            collection.each(function(item) {
                value = item.get(self.itemKey);
                regex = utils.beginsRegex(query);
                itemJSON = item.toHandlebars();
                itemJSON.value = value;
                if (regex.test(value) && query) {
                    queryLength = query.length;
                    matchIndex = value.indexOf(query);
                    if (value === query) {
                        match = true;
                        itemJSON.valueToBold = value;
                        itemJSON.value = "";
                    } else if (queryLength > 0) {
                        itemJSON.valueToBold = value.substring(matchIndex, matchIndex + queryLength + 1);
                        itemJSON.valueBefore = value.substring(0, matchIndex);
                        itemJSON.value = value.substring(matchIndex + queryLength + 1);
                    }
                    filter && items.push(itemJSON);
                } else if (!query || !filter){
                    items.push(itemJSON);
                }
            });

            return {
                items: items,
                match: match
            };
        },

        renderDropdown: function() {
            var data = this.toDropdownFormat(this.collection);

            this.rendered = true;
            this.$el.html(this.template({
                items: data,
                viewCid: this.cid,
                allowCreate: this.options.allowCreate,
                placeholder: this.options.placeholder,
                absolute: this.absolute
            }));
            this.$dropdown = this.$el.find(".dropdown[data-cid='" + this.cid + "']");
            this.$dropdownItems = $(this.dropdownItemsSelector);

            if (this.absolute) {
                $('body').append(this.dropdownTemplate({
                    items: data,
                    viewCid: this.cid,
                    allowCreate: this.options.allowCreate
                }));
                this.$dropdownItems = $(this.dropdownItemsSelector);
            } else {
                this.$dropdownItems.show();
            }
            this.initScroller();
            this.$el.find('.dropdown-search').placeholder();

            this.attachDropdownEvents();
        },

        positionDropdown: function() {
            var targetPos = this.$dropdown.offset(),
                targetWidth = this.$dropdown.outerWidth(),
                css;

            this.options.offset.top || (this.options.offset.top = 0);
            this.options.offset.left || (this.options.offset.left = 0);

            css = {
                position: "absolute",
                height: this.options.height || 300,
                width: this.options.width || targetWidth,
                top: targetPos.top + this.$dropdown.outerHeight() + this.options.offset.top,
                left: targetPos.left + this.options.offset.left,
                'z-index': 5
            };

            this.$dropdownItems.css(css);
        },

        updateDropdown: function(items, query, match) {
            if (items.length) {
                items[0].preSelected = true;
            }

            $(this.dropdownItemsSelector).replaceWith(Handlebars.templates.dropdownList({
                viewCid: this.cid,
                items: items,
                query: query,
                match: match,
                allowCreate: this.options.allowCreate,
                absolute: this.absolute
            }));
            this.$dropdownItems = $(this.dropdownItemsSelector);
            this.absolute && this.positionDropdown();
            this.resetFocus();

            if (!this.options.allowCreate && !items.length){
                this.hideDropdown();
            } else {
                this.showDropdown();
                this.initScroller();
            }
        },

        hideDropdown: function() {
            if (!this.options.disableHide) {
                this.$dropdownItems.hide();
            }
        },

        showDropdown: function() {
            this.$dropdownItems.show();
        },

        filterItems: function(e) {
            var query = this.$dropdown.find(".dropdown-search").val();

            this.abortServerFilter();
            if (e && !e.shiftKey && (e.which === UP || e.which === DOWN || e.which === ESC)) {
                e.preventDefault();
                return;
            } else if (e.which === ENTER){
                e.preventDefault();
                this.hideDropdown();
                if (this.requestFinished) {
                    return;
                }
            }

            if (e.which !== SHIFT) {
                if (this.options.ajax) {
                    this.filterServer(query);
                } else {
                    this.filterLocal(query);
                }
            }
        },

        filterServer: _.debounce(function(query) {
            var self = this,
                results = this.cachedResults[query],
                data;

            if (!query || query.length <= 2) {
                this.hideDropdown();
                return;
            }

            if (results) {
                this.collection.reset(this.collection.parse(results), {
                    silent: true,
                    parse: true
                });
                data = self.toMatchFormat(self.collection, query);
                self.updateDropdown(data.items, query, false);
            } else {
                data = {};

                this.requestFinished = false;
                this.showSpinner();
                this.activeAjaxRequest = this.collection.fetch({
                    parse: true,
                    data: data,
                    query: query,
                    success: function(collection, data) {
                        self.requestFinished = true;
                        self.cachedResults[query] = data;

                        self.hideSpinner();
                        data = self.toDropdownFormat(self.collection);
                        self.updateDropdown(data, query, false);
                    }
                });
            }
        }, 100),

        abortServerFilter: function() {
            if (this.activeAjaxRequest) {
                this.hideSpinner();
                this.activeAjaxRequest.abort();
                delete this.activeAjaxRequest;
            }
        },

        filterLocal: function(query) {
            var data = this.toMatchFormat(this.collection, query, true);
            this.updateDropdown(data.items, query, data.match);
        },

        keyPress: function(e) {
            var target,
                $input = this.$dropdown.find(".dropdown-search"),
                itemCount = this.$dropdownItems.find(".dropdown-item").length - 1,
                focusItem;

            // Will refator this
            if (e.which === UP) {
                focusItem = this.focusItem - 1;
                focusItem = focusItem < 0 ? itemCount : focusItem;
                target = this.$dropdownItems.find(".dropdown-item:eq(" + focusItem + ")").get(0);
                e.currentTarget = target;
                this.scrollToTarget(e);
                this.focusOption(e);
            } else if (e.which === DOWN) {
                focusItem = this.focusItem + 1;
                focusItem = focusItem > itemCount ? 0 : focusItem;
                target = this.$dropdownItems.find(".dropdown-item:eq(" + focusItem + ")").get(0);
                e.currentTarget = target;
                this.scrollToTarget(e);
                this.focusOption(e);
            } else if (e.which === ENTER) {
                target = this.$dropdownItems.find(".dropdown-item:eq(" + this.focusItem + ")").get(0);
                e.currentTarget = target;
                if (this.requestFinished) {
                    this.selectOption(e);
                }
            } else if (e.which === ESC) {
                if ($input.is(":focus")) {
                    this.hideDropdown();
                }
            }
        },

        scrollToTarget: function(e) {
            var $item = $(e.currentTarget);
                $dropdownContent = this.$dropdownItems.find(".dropdown-items"),
                dropdownScrollTop = $dropdownContent.scrollTop(),
                itemTop = $item.position().top;

            $dropdownContent.scrollTop(dropdownScrollTop + itemTop);
        },

        focusOption: function(e) {
            var $item = $(e.currentTarget);

            this.focusItem = this.$dropdownItems.find(".dropdown-item").index($item);
            this.$dropdownItems.find(".dropdown-item").removeClass("s-active");
            $item.addClass("s-active");
        },

        unFocusOption: function(e) {
            this.resetFocus();
            this.$dropdownItems.find(".dropdown-item").removeClass("s-active");
        },

        resetFocus: function() {
            // Reset the focus to top
            this.focusItem = 0;
        },

        showSpinner: function() {
            if (!this.spinner) {
                this.spinner = new Spinner({
                    lines: 11, // The number of lines to draw
                    length: 3, // The length of each line
                    width: 2, // The line thickness
                    radius: 4, // The radius of the inner circle
                    color: '#888' // #rgb or #rrggbb
                });
            }
            this.spinner.spin(this.$dropdown.find(".spinner").get(0));
            this.$dropdown.addClass("spinning");
        },

        hideSpinner: function() {
            this.spinner.stop();
            this.$dropdown.removeClass("spinning");
        },

        selectOption: function(e) {
            var $item = $(e.currentTarget),
                item = this.collection.getByCid($item.data("cid"));

            this.stopPropagation(e);
            this.hideDropdown();

            if (item) {
                // update text field with selection
                this.$dropdown.find(".dropdown-search").val(item.get(this.itemKey));
                item.set("selected", true);
                this.trigger("item:selected", item);
            } else {
                this.createNew();
            }
        },

        createNew: function() {
            var query = this.$dropdown.find(".dropdown-search").val();

            if (query) {
                this.trigger("createNew", {item: query});
            }
        }
    });
}, "module/dropdown");define(function() {
    var BaseView = require("module/views/base"),
        Modal = require("module/modal"),
        ContentPopup = require("module/content_popup");

    return BaseView.extend({
        events: {
            "click .button-follow": "toggleFollow",
            "click .button-curate": "toggleCurate",
            "click .control-block-user": "toggleBlockUser",
            "click .list-add": "listAdd",
            "click .control-share": "share",
            "click .control-remove": "destroy",
            "click .control-something-wrong": "somethingWrong",
            "click .control-comment": "comments",
            "click .control-edit-comment": "editComment",
            "click .control-message-user": "sendMessage",
            "click .control-mark-seen": "markSeen",
            "click .control-share-reply": "shareReply"
        },

        toggleFollow: function(e) {
            var $target,
                model,
                follows;

            this.stopProp(e);
            $target = $(e.currentTarget),
            model = this.model || this.getItemById(e);
            if (!model || !model.interactions.follows) {
                return;
            }
            follows = model.interactions.follows;

            if (follows.length) {
                $target.removeClass("following").addClass("follow");
                follows.first()
                .destroy()
                .success(model.updateCache.bind(model));
            } else {
                $target.removeClass("follow").addClass("following");
                follows.create({
                    targetId: model.view.data.id,
                    userId: this.options.viewer.id
                }, {
                    success: model.updateCache.bind(model)
                });
            }
        },

        toggleCurate: function(e) {
            var $target,
                model,
                curation;

            this.stopProp(e);
            $target = $(e.currentTarget),
            model = this.model || this.getItemById(e);
            if (!model || !model.interactions.curation) {
                return;
            }
            curation = model.interactions.curation;

            if (curation.length) {
                $target.removeClass("curated").addClass("curate");
                curation.first()
                .destroy()
                .success(model.updateCache.bind(model));
            } else {
                $target.removeClass("curate").addClass("curated");
                curation.create({
                    targetId: model.view.data.id
                }, {
                    success: model.updateCache.bind(model)
                });
            }
        },

        toggleBlockUser: function(e) {
            var $target,
                model,
                blocks;

            this.stopProp(e);
            $target = $(e.currentTarget),
            model = this.model || this.getItemById(e);
            if (!model || !model.interactions.blocks) {
                return;
            }

            blocks = model.interactions.blocks;
            if (blocks.length) {
                $target.removeClass("blocked").addClass("block");
                blocks.first().destroy();
            } else {
                $target.removeClass("block").addClass("blocked");
                blocks.create({
                    targetId: model.view.data.id
                });
            }
        },

        listAdd: function(e) {
            var SelectListView,
                model;

            this.stopProp(e);
            SelectListView = require("module/views/lists_select_view");
            model = this.model || this.getClosestById(e);
            if (!model) {
                return;
            }

            new Modal({
                title: "Add to List",
                subTitle: "Start typing to search or create a List.",
                view: SelectListView,
                modalClass: "small",
                viewOptions: {
                    viewer: this.options.viewer,
                    urlId: model.view.data.id,
                    dropdownOptions: {
                        disableHide: true,
                        immediate: true,
                        allowCreate: true,
                        itemKey: "name"
                    }
                }
            });
        },

        share: function(e) {
            var model,
                key;

            this.stopProp(e);
            model = this.model || this.getClosestById(e);
            key = this.options.shareParam || "pid";

            if (!model) {
                return;
            }

            SU.Modal.loadURL("/su/overlay/share/?" + key + "=" + model.view.data.id + "&src=website", {
                iframe:true,
                wrapperClass: "share-panel-modal"
            }).open();
        },

        destroy: function(e) {
            var model;

            this.stopProp(e);
            model = this.getClosestById(e);
            model.destroy();
        },

        somethingWrong: function(e) {
            var flagUrl;

            this.stopProp(e);
            flagUrl = $(e.currentTarget).data('flagitem');

            SU.flagModal.loadURL(flagUrl, {iframe:true, wrapperClass: "something-wrong"}).open();
        },

        comments: function(e) {
            var CommentsView,
                model;

            this.stopProp(e);
            CommentsView = require("module/views/comments_view"),
            model = this.model || this.getClosestById(e);

            if (!model) {
                return;
            }

            new Modal({
                title: true,
                modalClass: "comments-modal",
                view: CommentsView,
                viewOptions: {
                    model: model,
                    collection: model.interactions.comments,
                    viewer: this.options.viewer
                }
            });
        },

        editComment: function(e) {
            var EditView,
                model;

            this.stopProp(e);
            EditView = require("module/views/edit_view");
            model = this.model || this.getClosestById(e);

            new ContentPopup({
                target: $(e.currentTarget),
                title: "Edit Comment",
                skipLoader: true,
                immediate: true,
                style: {
                    height: 224
                },
                view: EditView,
                viewOptions: {
                    template: Handlebars.templates.editComment,
                    model: model,
                    focusField: "#comment",
                    fields: {
                        comment: "#comment"
                    }
                }
            });
        },

        sendMessage: function(e) {
            var NewMessageView,
                model;

            this.stopProp(e);
            NewMessageView = require("module/views/new_message_view");
            model = this.model || this.getClosestById(e);

            new Modal({
                skipLoader: true,
                disableClickToClose: true,
                title: "New Message",
                view: NewMessageView,
                viewOptions: {
                    model: model
                }
            });
        },

        markSeen: function(e) {
            var $target,
                model,
                reads;

            this.stopProp(e);
            $target = $(e.currentTarget);
            model = this.model || this.getClosestById(e);
            if (!model || !model.interactions.reads) {
                return;
            }
            reads = model.interactions.reads;

            if (reads.length == 0) {
                reads.create({
                    shareId: model.view.data.id
                }, {
                    success: function() {
                        $target.closest('article').addClass("share-seen");
                    }
                });
            }
        },

        shareReply: function(e) {
            var model;

            this.stopProp(e);
            model = this.model || this.getItemById(e, 'ul');
            // @todo For now, use V5 modal. We will want to have new stuff at a later point
            SU.ToolbarAction.showShareMessageReply(model.get('sharePid'));
        }
    });
}, "module/controls");define(function (require) {
    var mediator = require("module/mediator");

    var parseBirthday = function (birthday) {
        if (typeof birthday !== "string") {
            return null;
        }

        birthday = birthday.split("/")
        .map(function (part) {
            return parseInt(part, 10);
        });

        return {
            month: birthday[0],
            day: birthday[1],
            year: birthday[2]
        };
    };

    var parseUsername = function (username) {
        if (typeof username !== "string") {
            return null;
        }

        return username.replace(/\W/g, '');
    };

    var parseThumbnail = function (thumbnail) {
        if (typeof thumbnail.data !== "object")
            return null;

        if (typeof thumbnail.data.url !== "string")
            return null;

        return thumbnail.data.url;
    };

    var appendScript = function () {
        (function(d) {
            var js,
                id = 'facebook-jssdk',
                ref = d.getElementsByTagName('script')[0];

            if (d.getElementById(id)) {
                return;
            }

            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            ref.parentNode.insertBefore(js, ref);
        } (document));
    };

    return {
        init: _.memoize(function (config) {
            var dfd = new $.Deferred();

            this.config = config;

            window.fbAsyncInit = function() {
                FB.init({
                    appId: config.applicationId,
                    frictionlessRequests: true,
                    oauth: true,
                    channelUrl: "http://www.stumbleupon.com/fb_xd_fragment.html"
                });

                dfd.resolve();
            };

            appendScript();

            return dfd.promise();
        }),

        getLoginStatus: function () {
            var dfd = new $.Deferred();

            FB.getLoginStatus(dfd.resolve);

            return dfd.promise();
        },

        getStatusFromLogin: function () {
            var dfd = new $.Deferred();

            FB.login(dfd.resolve);

            return dfd.promise();
        },

        login: function () {
            var config = this.config;

            return this.getLoginStatus()
            .then(function (data) {
                var dfd = new $.Deferred();

                if (data.status === "connected") {
                    dfd.resolve(data);
                } else {
                    FB.login(function (response) {
                        if (response.status === "connected") {
                            mediator.trigger("facebook:loggedin", response);
                            dfd.resolve(response);
                        } else {
                            dfd.reject(response);
                        }
                    }, {scope: config.scope});
                }

                return dfd.promise();
            });
        },

        getUser: function () {
            return this.login()
            .then(function (data) {
                var dfd = new $.Deferred();

                FB.api("/me", {fields: "username,email,picture,name,gender,birthday"}, function (response) {
                    response["birthday"] = parseBirthday(response["birthday"]);
                    response["username"] = parseUsername(response["username"]);
                    response['thumbnail'] = parseThumbnail(response['picture'])
                    data["user"] = response;

                    mediator.trigger("facebook:gotuser", data);
                    dfd.resolve(data);
                });

                return dfd.promise();
            });
        }
    };
}, "module/facebook");define(function (require) {
    var mediator = require("module/mediator");

    var getAuthUrl = function (service, method, params) {
        var url,
            urls = {};

        method = method || 'connect';

        switch (service) {
            case "facebook":
                urls = {
                    autoshare: "/service/facebook/autoshare/request",
                    connect: "/service/facebook/connect/request",
                    login: "/service/facebook/login/request",
                    register: "/service/facebook/register/request",
                    signup: "/service/facebook/signup/request",
                    captcha: "/service/facebook/captcha/request",
                    channels: "/dt/settings/connections/facebook/request?service=facebook"
                };
                break;

            case "twitter":
                urls = {
                    connect: "/service/twitter/connect/request",
                    channels: "/dt/settings/connections/twitter/request?service=twitter"
                };
                break;

            case "linkedin":
                urls = {
                    connect: "/service/linkedin/connect/request"
                };
                break;

            case "google":
                urls = {
                    connect: "/service/google/connect/request",
                    register: "/service/google/register/request"
                };
                break;

            case "gmail":
                urls = {
                    connect: "/service/gmail/connect/request"
                };
                break;

            case "yahoo":
                urls = {
                    connect: "/service/yahoo/connect/request"
                };
                break;

        }

        url = urls[method];

        if (typeof (params) !== 'undefined') {
            // Additional parameters were specified for the Url.
            url = url + '?' + $.param(params);
        }

        return url;
    };

    var announceResult = function (data) {
        var eventName = data.response.service + ":";

        if (data.response._success) {
            eventName += "authenticated";
        } else {
            eventName += "failed";
        }

        mediator.trigger(eventName, data);
    };

    // Need to abuse the revealing module pattern here in order to make
    // this method accessible from the services auth callback page.
    // Typically this would be Bad(tm).
    window.SU.services = {
        announceResult: announceResult
    };

    return {
        announceResult: announceResult,

        load: function(service, method, options) {
            var params,
                authUrl;

            if (typeof options === "undefined") {
                options = {};
            }

            params = {
                success: options.success || document.URL,
                fail: options.fail || document.URL,
                context: options.context || '',
                scope: options.scope || ''
            };

            authUrl = getAuthUrl(service, method, params);

            window.top.location = authUrl;
        },

        open: function(service, method, params) {
            var dfd = new $.Deferred(),
                windowOptions = "menubar=1,resizable=1,width=1000,height=600",
                windowName = "auth_" + service,
                authUrl = getAuthUrl(service, method, params);

            window.open(authUrl, windowName, windowOptions);

            mediator.on(service + ":authenticated", dfd.resolve);
            mediator.on(service + ":failed", dfd.reject);

            return dfd.promise();
        }
    };
}, "module/services");define(function(require) {
    var BaseView = require("module/views/base"),
        BaseCollection = require("module/collections/base"),
        Dropdown = require("module/dropdown");

    return BaseView.extend({
        initialize: function(options) {
            BaseView.prototype.initialize.call(this, options);

            this.searchCollection = new BaseCollection([], {
                url: "/interest"
            });

            this.dropdown = new Dropdown({
                el: this.$el,
                collection: this.searchCollection,
                placeholder: "Explore an interest",
                noFocus: true,
                ajax: true,
                itemKey: "title",
                offset: {
                    top: 12
                }
            });
            this.dropdown.on("item:selected", this.exploreInterest, this);
        },

        exploreInterest: function(item) {
            var url;

            this.selectedInterest = item;
            url = "explore/" + item.get("name");
            this.mediator.trigger("navigate", url, {trigger: true});
        }
    });
}, "module/views/explore_view");define(function(require) {
    var InfiniteView = require("module/views/infinite_view");

    return InfiniteView.extend({
        initialize: function(options) {
            options || (options = {});
            if (!this.collection.length) {
                this.collection.fetch();
            }

            _.extend(options, {
                infiniteOptions: {
                    target: ".antiscroll-inner",
                    scrollOffset: 200
                },
                loader: {
                    target: options.appendTarget,
                    size: "small",
                    loaderClass: "small"
                }
            });
            InfiniteView.prototype.initialize.call(this, options);

            if (this.collection.length) {
                this.render();
            } else {
                this.showLoader({
                    size: "small",
                    loaderClass: "center small"
                });
            }
        },

        render: function() {
            this.hideLoader();
            this.$el.find(this.options.appendTarget).html(this.template(_.extend({
                data: this.collection.toHandlebars()
            }, this.options.templateData)));
            this.afterRender();

            return this;
        },

        afterRender: function() {
            this.initScroller();
            this.infiniteScroll && this.infiniteScroll.rebind();
        }
    });
}, "module/views/simple_list_view");define(function() {
    "use strict";

    var InfiniteView = require("module/views/infinite_view"),
        ControlsModule = require("module/controls"),
        fetchSequenced = require("module/fetchSequenced"),
        reflow = require("module/reflow");

    return InfiniteView.extend({
        emptyTemplate: Handlebars.templates.emptyResults,

        initialize: function(options) {
            options || (options = {});
            options.itemWidth && (this.itemWidth = options.itemWidth);
            options.singularTemplate && (this.singularTemplate = options.singularTemplate);
            this.fetchSequence = this.options.fetchSequence ? _.clone(this.options.fetchSequence) : [];
            _.extend(this, fetchSequenced);

            // Initialize the parent view
            InfiniteView.prototype.initialize.call(this, options);

            new ControlsModule(_.extend({
                el: this.el,
                collection: this.collection,
                viewer: options.viewer,
                view: this
            }, options.controlOptions));

            this.collection.on("change", this.updateTile, this);
            this.collection.on("destroy", this.removeTile, this);
            this.collection.on("search:empty", this.showEmpty, this);
            this.collection.on("search", this.resetView, this);
            this.mediator.on("reflow:trigger", this.reflow, this);

            if (options.skipAfter) {
                return;
            }
            this.afterRender();
        },

        updateTile: function(model) {
            var $target = this.$el.find(".tile[data-id='" + model.id + "']"),
                template = this.singularTemplate || this.template;

            // Boooo! Talk with backend guys to fix this!!!
            if (!$target.length) {
                $target = this.$el.find(".tile[data-id='" + model.view.data.id + "']");
            }

            $target.replaceWith(template({
                data: model.toHandlebars()
            }));

            this.reflow();
        },

        removeTile: function(model) {
            var $target = this.$el.find(".tile[data-id='" + model.id + "']"),
                self = this;

            // Boooo! Talk with backend guys to fix this!!!
            if (!$target.length) {
                $target = this.$el.find(".tile[data-id='" + model.view.data.id + "']");
            }

            $target.fadeOut(function() {
                $target.remove();
                self.reflow();
            });
        },

        showEmpty: function() {
            this.$el.html(this.emptyTemplate());
        },

        reflow: function(options) {
            options || (options = {});
            this.itemWidth && !options.itemWidth && (options.itemWidth = this.itemWidth);

            reflow(_.extend({
                dividerValue: this.calcDividerText.bind(this)
            }, options));
        },

        afterRender: function(options) {
            this.reflow(options);
        },

        calcDividerText: function($el) {
            return "";
        }
    });
}, "module/views/tile_view");define(function(require) {
    var BaseView = require("module/views/base");

    return BaseView.extend({
        events: {
            "click a.pushState": "navigate"
        },

        initialize: function(options) {
            BaseView.prototype.initialize.call(this, options);
            this.nav = options.nav || {};
        },

        navigate: function(e) {
            var href = $(e.currentTarget).attr("href");

            e.preventDefault();
            if (href) {
                this.mediator.trigger("navigate", href, {trigger: true});
            }
        },

        updateNav: function(name) {
            var target = this.nav[name],
                $target;

            this.$el.find(".s-active").removeClass("s-active");
            if (target) {
                $target = this.$el.find(target);
                $target.addClass("s-active");
            }
        }
    });
}, "module/views/nav_view");define(function(require) {
    var BaseView = require("module/views/base"),
        mediator = require("module/mediator");

    return BaseView.extend({
        events: {
            "submit": "search"
        },

        initialize: function(options) {
            this.$search = this.$el.find("input[type='search']");
            BaseView.prototype.initialize.call(this, options);
        },

        search: function(e) {
            var query = this.$search.val();

            this.stopProp(e);

            this.collection.trigger("search", query);
            this.collection.clean();
            this.collection.fetch({
                query: query,
                success: function(collection) {
                    if (!collection.length) {
                        collection.trigger("search:empty", query);
                    }
                }
            });
        }
    });
}, "module/views/search_view");define(function(require) {
    "use strict";

    var BaseView = require("module/views/base"),
        mediator = require("module/mediator");

    return BaseView.extend({
        successMessageDelay: 2000,

        events: {
            "click .close": "close"
        },

        initialize: function(options) {
            _.bindAll(this, "showConfirm", "confirmCancel", "onConfirm", "close", "onSuccess", "onError");
            BaseView.prototype.initialize.call(this, options);
        },

        showConfirm: function(options) {
            mediator.trigger("modal:showContext", Handlebars.templates.confirm(options));
            options.onConfirm && (this.onConfirm = options.onConfirm);

            $("#confirm").off("click", this.onConfirm);
            $("#confirm").on("click", this.onConfirm.bind(this));
            $("#confirm-cancel").off("click", this.confirmCancel);
            $("#confirm-cancel").on("click", this.confirmCancel.bind(this));
        },

        confirmCancel: function(e) {
            this.stopProp(e);
            mediator.trigger("modal:hideContext");
        },

        onConfirm: function(e) {
            this.stopProp(e);
        },

        showLoading: function() {
            mediator.trigger("modal:showLoading");
        },

        hideLoading: function() {
            mediator.trigger("modal:hideLoading");
        },

        close: function(e) {
            this.stopProp(e);
            this.undelegateEvents();
            $("#confirm").off("click", this.onConfirm);
            $("#confirm-cancel").off("click", this.confirmCancel);

            this.trigger("close", e);
            mediator.trigger("modal:close", e);
        },

        onSuccess: function(model, response) {
            mediator.trigger("modal:hideLoading");
            mediator.trigger("modal:showContext", response.meta.message);
            setTimeout(function() {
                mediator.trigger("modal:hideContext", {
                    close: true,
                    animate: true
                });
            }, this.successMessageDelay);
        },

        onError: function(model, response) {
            response = JSON.parse(response.responseText);

            mediator.trigger("modal:hideLoading");
            mediator.trigger("modal:showContext", response.meta.message);
            setTimeout(function() {
                mediator.trigger("modal:hideContext", {
                    animate: true
                });
            }, this.successMessageDelay);
        }
    });
}, "module/views/overlay_view");define(function(require) {
    var OverlayView = require("module/views/overlay_view"),
        utils = require("module/utils");

    return OverlayView.extend({
        events: {
            "click .edit-save": "save",
            "click .edit-cancel": "close",
            "click .edit-delete": "requestConfirm"
        },

        initialize: function(options) {
            OverlayView.prototype.initialize.call(this, options);

            this.render();
        },

        render: function() {
            this.$el.html(this.template(this.model.toHandlebars()));

            if (this.options.focusField) {
                utils.setCaretPosition($(this.options.focusField));
            }

            return this;
        },

        save: function(e) {
            var data = {};

            this.stopProp(e);

            _.each(this.options.fields, function(selector, key) {
                data[key] = $(selector).val();
            });

            this.mediator.trigger("modal:showLoading");
            this.model.save(data, {
                success: this.onSuccess.bind(this),
                error: this.onError.bind(this),
                wait: this.options.wait !== true,
                data: this.options.extraParams || {}
            });
        },

        requestConfirm: function(e) {
            this.stopProp(e);
            this.showConfirm({
                message: this.options.confirmText || "Are you sure?",
                onConfirm: this.destroy
            });
        },

        destroy: function() {
            this.mediator.trigger("modal:hideContext");
            this.mediator.trigger("modal:showLoading");

            this.model.destroy();
            if (this.options.waitOnDestroy) {
                this.mediator.trigger("modal:showLoading");
            } else {
                this.close();
            }
        }
    });
}, "module/views/edit_view");define(function(require) {
    var OverlayView = require("module/views/overlay_view");

    return OverlayView.extend({
        initialize: function(options) {
            OverlayView.prototype.initialize.call(this, options);
            this.template = Handlebars.templates[options.type];
            this.templateOptions = options.data || {};

            this.render();
        },

        render: function() {
            this.$el.html(this.template(this.templateOptions));
            this.updateTitle();

            return this;
        },

        updateTitle: function() {
            var $target = this.$el.find(".title");
                title = $target.text();

            $target.remove();
            $(".modal-title").text(title);
        }
    });
}, "module/views/tutorial_view");define(function(require) {
    var OverlayView = require("module/views/overlay_view");

    return OverlayView.extend({
        template: Handlebars.templates.signin,

        events: {
            "click #back": "back"
        },

        initialize: function(options) {
            OverlayView.prototype.initialize.call(this, options);

            this.render();
        },

        render: function() {

            this.$el.html(this.template({
                uri: this.options.uri,
                next: this.options.next,
                noBackButton: this.options.noBackButton
            }));

            this.mediator.trigger("modal:update:title", "Please Sign-In");
        },

        back: function(e) {
            this.stopProp(e);
            this.resetView();
            this.trigger("back");
        }
    });
}, "module/views/signin_view");define(function(require) {
    var BaseView = require("module/views/base");

    return BaseView.extend({
        template: Handlebars.templates.captcha,

        events: {
            "click .submit-captcha": "submit"
        },

        initialize: function(options) {
            BaseView.prototype.initialize.call(this, options);
            this.render();
        },

        render: function() {
            this.$el.html(this.template({
                error: this.options.error,
                captcha: this.model.view.data.captcha
            }));

            return this;
        },

        submit: function(e) {
            this.trigger("captcha:submit");
        }
    });
}, "module/views/signup_captcha_view");define(function(require) {
    var OverlayView = require("module/views/overlay_view"),
        SignInView = require("module/views/signin_view");

    return OverlayView.extend({
        template: Handlebars.templates.forcedRegIndex,

        events: {
            "click #sign-in": "signIn"
        },

        initialize: function(options) {
            OverlayView.prototype.initialize.call(this, options);

            this.render();
        },

        render: function() {
            this.mediator.trigger("modal:update:classes", "fb-connect-welcome large");
            this.mediator.trigger("modal:update:title", "");
            this.$el.html(this.template({
                urlCurrent: window.location.href
            }));
            this.delegateEvents(this.events);
        },

        signIn: function(e) {
            this.stopProp(e);
            this.undelegateEvents();

            this.signInView = new SignInView({
                el: this.$el,
                uri: this.options.message.uri,
                next: this.options.message.data.next
            });
            this.signInView.on("back", this.render, this);

            this.mediator.trigger("modal:update:classes", "small");
        }
    });
}, "module/views/facebook_signup_view");define(function(require){
    "use strict";

    var BaseView = require('module/views/base'),
        SignInView = require("module/views/signin_view"),
        ContentPopup = require("module/content_popup");

    return BaseView.extend({
        initialize: function(options){
            var self = this,
                $signInEl = this.$el.find(".sign-in-action"),
                qtipOptions = {
                    position: {
                        my: "top center",
                        at: "bottom center",
                        adjust: {
                            y: 16
                        }
                    },
                    show: {
                        event: "click"
                    },
                    hide: {
                        event: "click unfocus"
                    },
                    style: {
                        width: 174,
                        classes: "nav-tooltip-contents",
                        tip: {
                            height: 10,
                            width: 20,
                            corner: true,
                            offset: 65
                        }
                    },
                    events: {
                        show: function(e, api) {
                            api.elements.target.closest(".nav-utility-item").addClass("s-active");
                        },
                        hide: function(e, api) {
                            self.$el.find(".nav-utility-item").removeClass("s-active");
                        }
                    }
                };

            BaseView.prototype.initialize.call(this, options);

            // user control dropdown
            this.$el.find("#main-nav-user").qtip(_.extend(qtipOptions, {
                content: $("#main-nav-user-content")
            }));

            // corporate control dropdown
            this.$el.find("#main-nav-corporate").qtip(_.extend(qtipOptions, {
                content: $("#main-nav-corporate-content")
            }));

            // sign in popup
            if (options.visitor) {
                new ContentPopup({
                    target: $signInEl,
                    skipLoader: true,
                    overwrite: false,
                    view: SignInView,
                    viewOptions: {
                        noBackButton: true,
                        next: options.visitor.view.data.urlLoginRedirect,
                        uri: options.visitor.uri
                    },
                    popupTemplateOptions: {
                        noCloseButton: true
                    },
                    position: {
                        my: "top center",
                        at: "bottom center",
                        viewport: true,
                        adjust: {
                            x: 73,
                            y: 14
                        }
                    },
                    style: {
                        classes: "sign-in-popup",
                        tip: {
                            height: 10,
                            width: 26,
                            offset: 120
                        }
                    },
                    events: {
                        visible: function(e, api) {
                            api.elements.tooltip.find("#username").focus();
                        }
                    },
                    onShow: function(e, api) {
                        api.elements.target.addClass("s-active");
                    },
                    onHide: function(e, api) {
                        api.elements.target.removeClass("s-active");
                    }
                });
            }
        }
    });

}, 'module/views/header_view');define(function(require) {
    var BaseView = require("module/views/base"),
        utils = require("module/utils"),
        mediator = require("module/mediator");

    return BaseView.extend({
        initialize: function(options) {
            this.headingPrefix = options.headingPrefix || "";
            this.titleKey = options.titleKey || "title";
            this.headingMap = options.headingMap || {};

            BaseView.prototype.initialize.call(this, options);
        },

        render: function(options) {
            options || (options = {});

            this.$el.html(this.template(options));
        },

        updateHeading: function(name, options) {
            var template = this.headingMap[name];
            if (template) {
                this.template = template;
                this.render(options);
            }
        }
    });
}, "module/views/sub_header_view");define(function(require) {
    "use strict";

    var BaseView = require("module/views/base"),
        BaseCollection = require("module/collections/base");

    return BaseView.extend({
        initialize: function(options) {
            this.collection.on('remove', this.decreaseCount, this);
            BaseView.prototype.initialize.call(this, options);
        },

        decreaseCount: function() {
            var $count = this.$el.find(".s-active .nav-tertiary-count"),
                count = $.trim($count.text());

            // Only update if NOT a pretty number
            if (parseInt(count, 10) == count) {
                count = parseInt(count, 10) - 1;
                $count.text(count);
            }
        }
    });
}, "module/views/nav_tertiary_view");define(function(require) {
    "use strict";

    var BaseView = require("module/views/base"),
        BaseCollection = require("module/collections/base");

    return BaseView.extend({
        initialize: function(options) {
            this.collection.on('remove', this.decreaseCount, this);
            BaseView.prototype.initialize.call(this, options);
        },

        decreaseCount: function() {
            var $count = this.$el.find(".s-active .nav-filter-nav-item-count"),
                count = $.trim($count.text());

            // Only update if NOT a pretty number
            if (parseInt(count, 10) == count) {
                count = parseInt(count, 10) - 1;
                $count.text(count);
            }
        }
    });
}, "module/views/nav_filter_view");define(function(require) {
    var BaseView = require("module/views/base"),
        ControlsModule = require("module/controls");

    return BaseView.extend({
        template: Handlebars.templates.tileUser,

        initialize: function(options) {
            BaseView.prototype.initialize.call(this, options);

            var config = _.extend({
                el: this.el,
                model: this.model,
                viewer: options.viewer
            }, options.controlOptions);
            new ControlsModule(config);

            this.fetchJqXhr = this.model.fetch({
                cache: {
                    cache: "local",
                    TTL: 60 * 60 * 24
                },
                silent: true,
                success: this.render.bind(this)
            });
            this.on("close", this.stopFetch, this);
        },

        render: function() {
            this.$el.html(this.template({
                data: this.model.toHandlebars(),
                popup: true
            }));

            return this;
        },

        stopFetch: function() {
            this.fetchJqXhr && this.fetchJqXhr.abort();
        }
    });
}, "module/views/user_hover_card_view");define(function(require) {
    var OverlayView = require("module/views/overlay_view"),
        BaseCollection = require("module/collections/base"),
        timeSince = require("module/time_since");

    return OverlayView.extend({
        template: Handlebars.templates.activityNotifications,

        initialize: function(options) {
            OverlayView.prototype.initialize.call(this, options);

            this.collection = new BaseCollection([], {
                url: options.url
            });
            this.collection.on("reset", this.render, this);
            this.collection.fetch();
        },

        render: function() {
            this.mediator.trigger("modal:hideLoading");
            this.$el.html(this.template({
                title: "Activity",
                data: this.collection.toHandlebars(),
                disableUserHover: true
            }));

            timeSince(this.$el);
            this.initScroller();
        }
    });
}, "module/views/url_activity_view");define(function(require) {
    var TileView = require("module/views/tile_view"),
        UrlActivityView = require("module/views/url_activity_view"),
        ContentPopup = require("module/content_popup");

    return TileView.extend({
        template: Handlebars.templates.tileUrls,

        events: {
            "click .tile-context-activity-link": "seeActivity"
        },

        initialize: function(options) {
            options || (options = {});
            TileView.prototype.initialize.call(this, options);

            if (options.skipAfter) {
                return;
            }
            this.afterRender();
        },

        calcDividerText: function($el) {
            var modelId = $el.attr('data-id'),
                url = this.collection.get(modelId),
                timeStamp = "",
                sinceStr = "";

            if (url) {
                timeStamp = (url.get("timestampLiked") || url.get("timestampStumbled")) * 1000;
                if (timeStamp) {
                    sinceStr = moment(timeStamp).format("MMM DD, YYYY");
                }
            }

            return sinceStr;
        },

        seeActivity: function(e) {
            var model = this.getItemById(e, ".tile-url");
            this.stopProp(e);

            new ContentPopup(_.extend({
                target: $(e.currentTarget),
                immediate: true,
                view: UrlActivityView,
                viewOptions: {
                    model: model,
                    url: model.view.data.urlActivity
                },
                position: {
                    adjust: {
                        y: 0
                    }
                },
                style: {
                    classes: "activity-tip tight",
                    width: false,
                    height: false,
                    tip: {
                        height: 15,
                        width: 20
                    }
                },
                spinnerOptions: {
                    lines: 11,
                    length: 5,
                    width: 3,
                    radius: 7
                }
            }, this.options.popupOptions));
        }
    });
}, "module/views/urls_view");define(function(require) {
    var InfiniteView = require("module/views/infinite_view"),
        timeSince = require("module/time_since");

    return InfiniteView.extend({
        fetched: false,
        maxHeight: 360,
        template: Handlebars.templates.activityNotifications,
        emptyTemplate: Handlebars.templates.emptyNotifications,

        initialize: function(options) {
            options.dependentCollection && options.dependentCollection.on("reset", this.show, this);

            this.render();
            // fetch collection if we don't have any items
            if (!this.collection.length) {
                this.collection.fetch();
                this.fetched = true;
            }

            _.extend(options, {
                appendTarget: ".url-activity-items",
                appendTemplate: Handlebars.templates.urlActivities,
                infiniteOptions: {
                    target: ".antiscroll-inner",
                    scrollOffset: 200
                },
                loader: {
                    target: ".url-activity-items",
                    size: "small",
                    loaderClass: "small"
                }
            });
            InfiniteView.prototype.initialize.call(this, options);

            if (!this.collection.length) {
                this.showLoader({
                    $target: this.$el.find(".activity-notifications"),
                    size: "small",
                    loaderClass: "small center"
                });
            }
        },

        show: function() {
            this.$el.removeClass("invisible");
        },

        updateSize: function() {
            var $target = this.$el.find(".url-activity-items"),
                targetHeight = $target.height(),
                $targetParent = $target.parent(),
                targetParentHeight = $targetParent.height();

            if (targetHeight < targetParentHeight || targetHeight < this.maxHeight) {
                $targetParent.height(targetHeight);
            } else {
                $targetParent.height(this.maxHeight);
            }
        },

        render: function() {
            if (this.fetched && !this.collection.length) {
                this.infiniteScroll && this.infiniteScroll.disableFetch();
                this.$el.html(this.emptyTemplate());
            } else {
                this.$el.html(this.template({
                    title: "Recent Activity",
                    reflow: true,
                    data: this.collection.toHandlebars()
                }));
            }

            this.afterRender();
        },

        afterRender: function() {
            this.reflow();
            this.updateSize();
            timeSince(this.$el);
            this.initScroller();
            this.infiniteScroll && this.infiniteScroll.rebind();
        },

        reflow: function() {
            this.mediator.trigger("reflow:trigger", {
                itemWidth: 244
            });
        }
    });
}, "module/views/activity_list_view");define(function(require) {
    var TileView = require("module/views/tile_view");

    return TileView.extend({
        template: Handlebars.templates.tileInterests,

        initialize: function(options) {
            TileView.prototype.initialize.call(this, options);
        },

        calcDividerText: function($el) {
            var model = this.collection.get($el.attr("data-id")),
                dividerText = "";

            if (model && (this.collection.next && this.collection.next._filter !== "recommended")) {
                dividerText = model.view.data.namePretty[0];
            }

            return dividerText;
        }
    });
}, "module/views/interests_view");define(function(require) {
    var OverlayView = require("module/views/overlay_view");

    return OverlayView.extend({
        template: Handlebars.templates.listEdit,
        events: {
            "click #list-save": "save",
            "submit .modal-form": "save",
            "click #list-destroy": "requestConfirm",
            "click #list-cancel": "close"
        },

        initialize: function(options) {
            OverlayView.prototype.initialize.call(this, options);

            this.list = options.list;
            this.urlId = options.urlId;
            this.url = options.url;

            this.render();

            this.mediator.trigger("view:listEdit:ready");
        },

        render: function() {
            var data,
                json;

            if (this.model.isNew()) {
                json = {
                    name: this.model.get("name"),
                    description: "",
                    visibility: "",
                    isNew: true
                };
            } else {
                data = this.model.toHandlebars();
                json = {
                    name: data.data.namePretty,
                    description: data.data.description,
                    visibility: data.data.visibility,
                    isNew: false
                };
            }

            this.$el.html(this.template(json));
            this.delegateEvents(this.events);

            if (this.model.isNew()) {
                this.$el.find("#list-edit-description").focus();
            }
            return this;
        },

        requestConfirm: function(e) {
            this.stopProp(e);
            this.showConfirm({
                message: "Are you sure you want to<br/>delete this list?",
                onConfirm: this.destroy
            });
        },

        save: function(e) {
            var name = this.$el.find("#list-edit-name").val(),
                description = this.$el.find("#list-edit-description").val(),
                visibility = this.$el.find('input:radio[name=visibility]:checked').val(),
                extraParams = {},
                data;

            this.stopProp(e);
            this.mediator.trigger("modal:showLoading");

            data = {
                name: name,
                description: description,
                visibility: visibility
            };
            this.urlId && (data.urlId = this.urlId);
            this.url && (data.url = this.url);
            if (this.model.isNew()) {
                extraParams._view = "selectStumbleList";
            } else {
                extraParams._view = this.options.requestView || "";
            }

            // update model view :( :( :(
            if (this.model.view) {
                this.model.view.data.namePretty = name;
                this.model.view.data.description = description;
                this.model.view.data.visibility = visibility;
            }

            this.model.save(data, {
                success: this.listCreated.bind(this),
                error: this.onError.bind(this),
                data: extraParams,
                wait: true
            });
        },

        listCreated: function() {
            if (this.collection && !this.model.collection) {
                this.collection.add(this.model);
            }
            this.onSuccess.apply(this, arguments);
        },

        destroy: function() {
            this.mediator.trigger("modal:hideContext");
            this.mediator.trigger("modal:showLoading");

            this.model.destroy();
            if (this.options.waitOnDestroy) {
                mediator.trigger("modal:showLoading");
            } else {
                this.close();
            }
        }
    });
}, "module/views/list_edit_view");define(function() {
    "use strict";

    var BaseView = require("module/views/base"),
        ListEditView = require("module/views/list_edit_view"),
        Modal = require("module/modal"),
        ControlsModule = require("module/controls");

    return BaseView.extend({
        template: Handlebars.templates.tileList,

        events: {
            "click .control-edit": "editModal"
        },

        initialize: function(options) {
            new ControlsModule({
                el: this.el,
                model: this.model,
                viewer: options.viewer,
                view: this
            });

            this.model.on("change", this.render, this);
            this.model.on("destroy", this.redirect, this);

            BaseView.prototype.initialize.call(this, options);
        },

        render: function() {
            this.$el.html(this.template({
                data: this.model.toHandlebars()
            }));

            return this;
        },

        redirect: function() {
            window.location.href = "/";
        },

        editModal: function(e) {
            this.stopProp(e);

            new Modal({
                view: ListEditView,
                title: "Edit List",
                viewOptions: {
                    model: this.model,
                    requestView: "tileList"
                },
                skipLoader: true
            });
        }
    });
}, "module/views/list_view");define(function() {
    "use strict";

    var TileView = require("module/views/tile_view"),
        ListEditView = require("module/views/list_edit_view"),
        ContentPopup = require("module/content_popup");

    return TileView.extend({
        itemWidth: 358,
        template: Handlebars.templates.tileLists,
        singularTemplate: Handlebars.templates.tileList,

        events: {
            "click .control-edit": "editList"
        },

        initialize: function(options) {
            options.controlOptions = {
                shareParam: 'listId'
            };
            TileView.prototype.initialize.call(this, options);
        },

        editList: function(e) {
            var model = this.getClosestById(e);

            this.stopProp(e);

            new ContentPopup({
                target: $(e.currentTarget),
                immediate: true,
                skipLoader: true,
                title: "Edit List",
                view: ListEditView,
                viewOptions: {
                    model: model,
                    collection: this.collection,
                    requestView: "tileList"
                }
            });
        }
    });
}, "module/views/lists_view");define(function() {
    "use strict";

    var UrlsView = require("module/views/urls_view"),
        ControlsModule = require("module/controls"),
        reflow = require("module/reflow");

    return UrlsView.extend({
        coverMode: false,
        template: Handlebars.templates.tileListItems,

        events: _.extend({
            "click .tile-url .make-cover": "makeItemCover",
            "click .tile-url .current-cover": "stopProp"
        }, UrlsView.prototype.events),

        initialize: function(options) {
            this.list = options.list;
            this.coverUrlId = options.coverUrlId || "0";

            UrlsView.prototype.initialize.call(this, options);

            this.mediator.on("subject:list:disableCover", this.disableCoverMode, this);
            this.mediator.on("subject:list:enableCover", this.enableCoverMode, this);
        },

        afterRender: function() {
            this.updateMakeCoverState();
            this.updateTileState();
            this.reflow();
        },

        updateMakeCoverState: function() {
            var $target = this.$el.find(".tile-url[data-id='" + this.coverUrlId + "'] .make-cover");

            if ($target.length) {
                $target.removeClass("make-cover secondary")
                .addClass("current-cover")
                .text("Current Cover");
            }
        },

        // BAD
        updateTileState: function() {
            if (this.coverMode) {
                this.enableCoverMode();
            } else {
                this.disableCoverMode();
            }
        },

        enableCoverMode: function() {
            this.coverMode = true;
            this.$el.find(".edit-controls").removeClass("hidden");
        },

        disableCoverMode: function() {
            this.coverMode = false;
            this.$el.find(".edit-controls").addClass("hidden");
        },

        // REFACTOR!!! Should not be changing crazy button state in this view.
        updateButtonState: function(e) {
            this.$el.find(".current-cover").removeClass("current-cover")
            .addClass("make-cover secondary")
            .text("Make Cover");

            $(e.currentTarget).removeClass("make-cover secondary")
            .addClass("current-cover")
            .text("Current Cover");
        },

        makeItemCover: function(e) {
            var item = this.getItemById(e, ".tile-url");

            this.stopProp(e);
            this.updateButtonState(e);

            this.list.view.data.thumbs.large = item.view.data.thumbs.large;

            this.list.save({
                thumbUrlId: item.view.data.id
            });

            this.mediator.trigger("list:change:cover");
        }
    });
}, "module/views/list_items_view");define(function() {
    "use strict";

    var OverlayView = require("module/views/overlay_view"),
        Lists = require("module/collections/lists"),
        BaseModel = require("module/models/base"),
        Dropdown = require("module/dropdown"),
        mediator = require("module/mediator");

    return OverlayView.extend({
        successMessageDelay: 1500,
        initialize: function(options) {
            var self = this;

            options.dropdownOptions || (this.options.dropdownOptions = {});
            OverlayView.prototype.initialize.call(this, options);

            this.collection = new Lists([], {
                url: options.viewer.view.data.urlLists
            });

            this.collection.fetch({
                cache: {
                    TTL: 60 * 60 * 24
                },
                data: {
                    _view: "selectStumbleList",
                    _count: 500
                },
                success: function(collection) {
                    self.collection = collection;
                    self.renderSelect();
                    mediator.trigger("view:listSelect:ready");
                }
            });
        },

        renderSelect: function() {
            mediator.trigger("modal:hideLoading");

            this.dropdown = new Dropdown({
                el: this.el,
                target: this.$el,
                collection: this.collection,
                height: this.options.dropdownOptions.height || 235,
                width: this.options.dropdownOptions.width || 307,
                immediate: this.options.dropdownOptions.immediate,
                allowCreate: this.options.dropdownOptions.allowCreate,
                disableHide: true,
                position: {
                    static: true
                }
            });

            this.dropdown.on("item:selected", this.addToList.bind(this));
            this.dropdown.on("createNew", this.createList.bind(this));
            this.on("modal:close", this.dropdown.remove, this.dropdown);
        },

        addToList: function(model) {
            var self = this,
                list = this.collection.get(model.id),
                listItem;

            this.showLoading();

            listItem = new BaseModel({
                listId: list.id,
                urlId: this.options.urlId ? this.options.urlId : '',
                url: this.options.url ? this.options.url : ''
            }, {
                uri: list.view.data.items.uri
            });

            listItem.save({}, {
                success: this.onSuccess.bind(this),
                error: this.onError.bind(this)
            });
        },

        createList: function(data) {
            var ListEditView = require("module/views/list_edit_view"),
                list;

            list = new BaseModel({
                name: data.item
            }, {
                uri: this.collection.uri
            });

            mediator.trigger("modal:update:title", "Create List");
            new ListEditView({
                el: this.el,
                model: list,
                collection: this.collection,
                urlId: this.options.urlId ? this.options.urlId : '',
                url: this.options.url ? this.options.url : ''
            });
        }
    });
}, "module/views/lists_select_view");define(function(require) {
    var OverlayView = require("module/views/overlay_view"),
        SimpleListView = require("module/views/simple_list_view"),
        BaseCollection = require("module/collections/base");

    return OverlayView.extend({
        template: Handlebars.templates.newComment,
        events: {
            "click #post-comment": "newComment",
            "click #delete-comment": "destroyConfirm",
            "keyup #new-comment": "updatePostState",
            "keydown #new-comment": "updatePostState"
        },

        initialize: function(options) {
            OverlayView.prototype.initialize.call(this, options);

            this.comments = new BaseCollection([], {
                url: this.model.view.data.urlComments
            });

            this.render();
        },

        render: function() {
            var comment = this.collection.first();
            this.mediator.trigger("modal:update:title", this.model.view.data.title);

            this.$el.html(this.template({
                url: this.model.toHandlebars(),
                comment: comment ? comment.toHandlebars() : false
            }));

            new SimpleListView({
                el: this.$el.find(".comments"),
                appendTarget: ".comments-wrap",
                template: Handlebars.templates.comments,
                collection: this.comments
            });

            this.hideLoading();
        },

        updatePostState: function(e) {
            var text = $("#new-comment").val(),
                comment = this.collection.first();

            if (text && text.length && (!comment || comment.view.data.comment !== text)) {
                $("#post-comment").removeClass("disabled").addClass("primary");
            } else {
                $("#post-comment").removeClass("primary").addClass("disabled");
            }
        },

        newComment: function(e) {
            var options,
                comment,
                newComment;

            this.stopProp(e);
            if ($("#post-comment").hasClass("disabled")) {
                return;
            }

            newComment = this.$el.find(".new-comment").val();
            comment = this.collection.first();

            options = [{
                comment: newComment,
                urlId: this.model.view.data.id,
                userId: this.options.viewer.id
            }, {
                success: this.onSuccess.bind(this),
                error: this.onError.bind(this),
                wait: true
            }];

            this.showLoading();
            if (comment) {
                comment.view.data.comment = newComment;
                comment.save.apply(comment, options);
            } else {
                this.collection.create.apply(this.collection, options);
            }
        },

        destroyConfirm: function(e) {
            this.stopProp(e);
            this.showConfirm({
                message: "Are you sure?",
                onConfirm: this.destroy
            });
        },

        destroy: function() {
            var comment = this.collection.first();

            comment.destroy();
            this.close({
                animate: true
            });
        }
    });
}, "module/views/comments_view");define(function(require) {
    var OverlayView = require("module/views/overlay_view"),
        chosenMixin = require("module/mixins/chosen");

    return OverlayView.extend({
        template: Handlebars.templates.newMessage,
        events: {
            "submit": "save",
            "click #post-message": "save",
            "click #cancel": "close",
            "change #message-to": "updateSendState",
            "keyup #message-body": "updateSendState",
            "keydown #message-body": "updateSendState"
        },

        initialize: function(options) {
            var chosenOptions;

            OverlayView.prototype.initialize.call(this, options);
            this.contacts = options.contacts;
            _.extend(this, chosenMixin);

            if (this.model) {
                chosenOptions = {
                    disable_search: true
                };
            } else {
                chosenOptions = {
                    search_contains: true,
                    allow_single_deselect: true
                };
            }

            this.initChosen(chosenOptions);
            this.render();
        },

        render: function() {
            var selected = this.model ? this.model.toHandlebars() : false,
                contacts = this.contacts ? this.contacts.toHandlebars() : [];

            this.$el.html(this.template({
                contacts: contacts,
                selected: selected
            }));

            return this;
        },

        updateSendState: function(e) {
            var body = this.$el.find("#message-body").val(),
                to = this.$el.find("#message-to").val();

            if (body && to && to.length) {
                this.$el.find("#post-message").removeClass("disabled").addClass("primary");
            } else {
                this.$el.find("#post-message").removeClass("primary").addClass("disabled");
            }
        },

        save: function(e) {
            var body,
                userId,
                user;

            this.stopProp(e);
            body = this.$el.find("#message-body").val();
            userId = this.$el.find("#message-to").val();
            user = this.model || this.contacts.get(userId);

            if (this.$el.find("#post-message").hasClass("disabled")) {
                return;
            }

            this.mediator.trigger("modal:showLoading");
            user.interactions.messages.create({
                message: body
            }, {
                wait: true,
                success: this.onSuccess,
                error: this.onError
            });
        }
    });
}, "module/views/new_message_view");define(function(require) {
    var TileView = require("module/views/tile_view"),
        NewMessageView = require("module/views/new_message_view"),
        Modal = require("module/modal"),
        BaseModel = require("module/models/base");

    return TileView.extend({
        template: Handlebars.templates.tileMessages,
        events: {
            "click .control-flag-item": "flagMessage",
            "click .control-block-user": "blockUser"
        },

        initialize: function(options) {
            TileView.prototype.initialize.call(this, options);
            this.contacts = options.contacts;

            // Should refactor into a separate view once more functionality is needed.
            $("#send-message").on("click", this.newMessage.bind(this));
        },

        newMessage: function(e) {
            var sender;

            this.stopProp(e);
            sender = this.getClosestById(e);

            if (sender) {
                sender = new BaseModel({
                   view: sender.view.data.sender
                }, {
                    parse: true
                });
            }

            new Modal({
                skipLoader: true,
                disableClickToClose: true,
                title: "New Message",
                view: NewMessageView,
                viewOptions: {
                    model: sender,
                    contacts: this.contacts
                }
            });
        },

        flagMessage: function(e) {
            var model,
                reports,
                report;

            this.stopProp(e);
            model = this.getClosestById(e);
            reports = model.interactions.reports;

            // mark message as spam
            if (!reports.length) {
                reports.create({
                    id: model.id
                });
            } else {
                // unmark message as spam
                report = reports.first();
                report.destroy();
            }
        },

        blockUser: function(e) {
            var model,
                sender,
                blocks,
                block;

            this.stopProp(e);
            model = this.getClosestById(e);
            sender = model.view.data.sender;
            blocks = sender.interactions.blocks;

            if (!blocks.length) {
                blocks.create({
                    id: sender.id
                });
            } else {
                block = blocks.first();
                block.destroy();
            }
        }
    });
}, "module/views/messages_view");define(function() {
    "use strict";

    var mediator = require("module/mediator"),
        BaseView = require("module/views/base"),
        DnaHover = require("module/hover_tip"),
        ControlsModule = require("module/controls");

    return BaseView.extend({
        initialize: function(options) {
            var config = _.extend({
                el: this.el,
                model: this.model,
                viewer: options.viewer
            }, options.controlOptions);

            this.controlsModule = new ControlsModule(config);

            BaseView.prototype.initialize.call(this, options);

            new DnaHover({
                wrapper: "#subject"
            });
        }
    });
}, "module/views/subject_view");define(function() {
    "use strict";

    var SubjectView = require("module/views/subject_view"),
        Modal = require("module/modal");

    return SubjectView.extend({
        events: {
            "click .subject-copyblock .show-more": "showDescription"
        },

        initialize: function(options) {
            SubjectView.prototype.initialize.call(this, options);
        },

        showDescription: function(e) {
            var description;

            this.stopProp(e);

            new Modal({
                contentTemplate: Handlebars.templates.userDescription,
                contentTemplateData: this.model.toHandlebars()
            });
        }
    });
}, "module/views/subject_user_view");define(function() {
    "use strict";

    var SubjectView = require("module/views/subject_view"),
        ContentPopup = require("module/content_popup"),
        ListEditView = require("module/views/list_edit_view"),
        mediator = require("module/mediator");

    return SubjectView.extend({
        template: Handlebars.templates.subjectList,

        events: {
            "click .control-edit": "editList",
            "click .subject-list-change-cover": "toggleCover"
        },

        initialize: function(options) {
            this.model.on("change", this.render, this);
            this.model.on("destroy", this.onDestroy, this);
            this.mediator.on("list:change:cover", this.toggleCover, this);

            options.controlOptions = {
                shareParam: 'listId'
            };

            SubjectView.prototype.initialize.call(this, options);
        },

        render: function() {
            var html = this.template({
                data: this.model.toHandlebars(),
                viewer: this.options.viewer.toHandlebars()
            });

            this.$el.replaceWith(html);
            this.setElement("#subject");
            this.controlsModule.setElement("#subject");

            return this;
        },

        onDestroy: function() {
            window.location.href = this.options.destroyRedirect;
        },

        editList: function(e) {
            this.stopProp(e);

            new ContentPopup({
                target: $(e.currentTarget),
                immediate: true,
                skipLoader: true,
                title: "Edit List",
                view: ListEditView,
                viewOptions: {
                    model: this.model,
                    collection: this.collection,
                    requestView: "tileListCard"
                },
                position: {
                    my: "top center",
                    at: "bottom center",
                    adjust: {
                        x: -3,
                        y: -4
                    }
                }
            });
        },

        toggleCover: function(e) {
            this.stopProp(e);

            if (this.changeCover) {
                this.changeCover = false;

                this.$el.find(".subject-list-change-cover").text("Change Cover");
                mediator.trigger("subject:list:disableCover");
            } else {
                this.changeCover = true;

                this.$el.find(".subject-list-change-cover").text("Cancel");
                mediator.trigger("subject:list:enableCover");
            }
        }
    });
}, "module/views/subject_list_view");define(function(require) {
    var ContentPopup = require("module/content_popup"),
        UserHoverCardView = require("module/views/user_hover_card_view"),
        User = require("module/models/user");

    return function(options) {
        $("body").on("mouseenter", options.target, function(e) {
            var url = $(e.currentTarget).attr("data-user"),
                user = new User({}, {
                    url: url
                });

            new ContentPopup({
                target: $(e.currentTarget),
                immediate: true,
                skipLoader: true,
                overwrite: false,
                view: UserHoverCardView,
                viewOptions: {
                    model: user,
                    viewer: options.viewer
                },
                position: {
                    my: "bottom center",
                    at: "top center",
                    adjust: {
                        resize: false,
                        x: 0,
                        y: 0
                    }
                },
                show: {
                    solo: true
                },
                hide: {
                    event: "mouseleave",
                    fixed: true,
                    delay: 150
                },
                events: {
                    visible: function(event, api) {
                        api.elements.tooltip.css("z-index", 4);
                    }
                },
                style: {
                    height: false,
                    width: false,
                    classes: "tight hover-card-user"
                },
                popupTemplateOptions: {
                    noCloseButton: true
                }
            }, e);
        });
    };
}, "module/user_hover_card");/**
 * login js
 *
 * js for ajax login
 *
 * @author jrylan, haroun,  mdavid
 */
(function(){
    SU.Login = Base.FormHandler.extend({
        selector: "#login-form",

        method: "create",

        restURL: "/login",

        submit: function(values) {
            var hasErrors = false;

            var fields = [
                "user",
                "pass",
                "nativeSubmit"
            ];

            values.nativeSubmit = '0';

            for (var i=0,name; name=fields[i]; i++) {
                if (!values[name]) {
                    this.inputs.getById(name).set({status: "error-soft"});
                    hasErrors = true;
                }
            }

            return !(hasErrors);
        },

        success: function(response) {
            window.location = response.url;
        },

        error: function() {
            window.location.reload();
        },

        inputs: [
            {
                id:"user",
                active:true,
                validateOn: "blur",
                validate: function() {
                    return this.removeErrorIfNotEmpty();
                }
            },
            {
                id:"pass",
                validateOn: "blur",
                validate: function() {
                    return this.removeErrorIfNotEmpty();
                }
            },
            {
                id:"remember"
            }
        ]
    });

    SU.addInit("mLogin", function(config) {
        new SU.Login(config);
    });
}).call(this);(function(){
    
    SU.Logout = Base.Controller.extend({
        restURL: "/logout",

        initialize: function(data) {
            this.sync.set(data);
            this.bindEvents({
                "click .logout" : "execute"
            });
        },


        execute: function() {
            // Clear sessionStorage and localStorage
            if (window.sessionStorage) {
                window.sessionStorage.clear();
                window.localStorage.clear();
            }
            // If there's an extension then tell it to log out as well
            if (typeof(suExtensionApi) != "undefined" && suExtensionApi.message)
                suExtensionApi.message.postMessage({ id: 1 }, "msgLogout");
            return this.sync.del({"_action": "logout"})
                .success(function(response) {
                    if (response._success) {
                        window.location = "/logged-out";
                    }
                });
        }
    });

    SU.addInit("mLogout", function(data){
        new SU.Logout(data);
    });
}).call(this);(function(){
    "use strict";

    SU.addInit("mStumbles", function(config){
        var UrlsView = require("module/views/urls_view"),
            SearchView = require("module/views/search_view"),
            SubjectView = require("module/views/subject_view"),
            BaseCollection = require("module/collections/base"),
            withConfig = require("module/with_config"),
            collection;

        $('#search-query').placeholder();

        withConfig(config, function(items, view, viewer) {
            collection = new BaseCollection(items, {
                uri: config.data.uri,
                next: view.next,
                parse: true
            });

            new UrlsView({
                el: "#reflow-wrapper",
                collection: collection,
                viewer: viewer,
            });

            new SearchView({
                el: ".search-content",
                collection: collection
            });
        });
    });
}).call(this);SU.addInit("mUserComments", function(config){
    var TileView = require("module/views/tile_view"),
        BaseCollection = require("module/collections/base"),
        withConfig = require("module/with_config"),
        collection;

    withConfig(config, function(items, view, viewer) {
        collection = new BaseCollection(items, {
            uri: config.data.uri,
            next: view.next,
            parse: true
        });

        new TileView({
            template: Handlebars.templates.tileUserComments,
            singularTemplate: Handlebars.templates.tileUserComment,
            el: "#reflow-wrapper",
            itemWidth: 478,
            collection: collection
        });
    });
});SU.addInit("mUrlComments", function(config){
    var TileView = require("module/views/tile_view"),
        BaseCollection = require("module/collections/base"),
        withConfig = require("module/with_config"),
        collection;

    withConfig(config, function(items, view, viewer) {
        collection = new BaseCollection(items, {
            uri: config.data.uri,
            next: view.next,
            parse: true
        });

        new TileView({
            template: Handlebars.templates.tileUrlComments,
            singularTemplate: Handlebars.templates.tileUrlComment,
            el: "#reflow-wrapper",
            collection: collection,
            itemWidth: 478
        });
    });
});SU.addInit("mShares", function(config){
    "use strict";

    var TileView = require("module/views/tile_view"),
        BaseCollection = require("module/collections/base"),
        withConfig = require("module/with_config"),
        collection;

    withConfig(config, function(items, view, viewer) {
        collection = new BaseCollection(items, {
            uri: config.data.uri,
            next: view.next,
            parse: true
        });

        new TileView({
            template: Handlebars.templates.tileShares,
            el: "#reflow-wrapper",
            collection: collection,
            viewer: viewer,
            itemWidth: 478
        });
    });
});SU.addInit("mMessages", function(config){
    "use strict";

    var MessagesView = require("module/views/messages_view"),
        BaseCollection = require("module/collections/base"),
        withConfig = require("module/with_config");

    SU.ToolbarAction.waitForExtensionApi(function() {
        // Reset the extension's inbox state
        // Older versions of mozbar (< 2013) failed to expose extapi methods on Fx17, so we have to explicitly
        // check for the existence of broadcastMessage
        if (suExtensionApi.message && suExtensionApi.message.broadcastMessage)
            suExtensionApi.message.broadcastMessage('msgSetInboxStatus', false);
    });

    withConfig(config, function(items, view) {
        var messages,
            contacts;

        messages = new BaseCollection(items, {
            uri: config.data.uri,
            next: view.next
        });
        contacts = new BaseCollection(config.contact_list.data.items, {
            uri: config.contact_list.uri,
            next: config.contact_list.view.next
        });

        new MessagesView({
            el: "#messages-wrapper",
            collection: messages,
            contacts: contacts
        });
    });
});(function(){
    var _followingInit = false;

    var FollowStatus = Base.Model.extend({
        initialize: function() {
            var curStatus = this.get("status"),
                newStatus = false;

            if (curStatus === 1) {
                newStatus = "follow";
            } else if (!curStatus) {
                newStatus = "unfollow";
            }

            if (newStatus) {
                this.set("status", newStatus, {silent:true});
            }

        },

        buildRequestURL: function() {
            return "/follow/" + this.get("type");
        },

        getData: function() {
            var data = {},
                type = this.get("type"),
                id = this.get("id");

            if (type === "stumbler") {
                data.userid = id;
            } else {
                data[type] = id;
            }

            data.status = this.get("pending-status");
            data[this._config.tokenName] = this._config.tokens[type];

            return data;
        },

        save: function() {
            var sync = Sync(this.buildRequestURL()),
                requestMethod = "create";

            if (this.get("pending-status") === "unfollow") {
                requestMethod = "update";
            }

            return sync[requestMethod](this.getData());
        }
    });

    var FollowEntities = Base.Collection.extend({
        model: FollowStatus
    });

    var FollowView = Base.View.extend({
        toggleStatus: function(model) {
            var elementIsButton = model.$el.hasClass("button-follow"),
                classToRemove,
                classToAdd;

            if (model.get("status") === "follow") {
                classToRemove = "follow";
                classToAdd = "following";
            } else {
                classToRemove = "following";
                classToAdd = "follow";
            }

            if (!elementIsButton) {
                model.$el
                    .find(".button-follow")
                    .removeClass(classToRemove)
                    .addClass(classToAdd);
            } else {
                model.$el.removeClass(classToRemove).addClass(classToAdd);
            }
        }
    });

    SU.Following = Base.Controller.extend({
        initialize: function(config) {
            config = config || {};
            this.$el = $("#content");
            this.view = new FollowView(this);
            this.collection = new FollowEntities(this);
            this.collection.model.prototype
                .bind("change:pending-status", this.statusChanged, this)
                .bind("change:status", this.view.toggleStatus);
            this.collection.model.prototype._config = config;

            this.bindEvents(this.collection, {
                "press .button-follow.follow": "follow",
                "press .button-follow.following": "unfollow"
            });
        },

        follow: function(model, e) {
            e.stopPropagation();
            // don't allow follow action for unfollowOnly buttons.
            if (model.$el.data().unfollowOnly) {
                return false;
            }

            model.set("pending-status", "follow");
        },

        unfollow: function(model, e) {
            e.stopPropagation();
            model.set("pending-status", "unfollow");
        },

        statusChanged: function(model) {
            var self = this;

            model.save()
                .success(function(data, textStatus, jqXHR) {

                    if (SU.Captcha.isRequired(data)) {
                        SU.Captcha.show(function(){
                            self.statusChanged(model);
                        });
                        return;
                    }

                    if (data._success === true) {
                        model.set("status", model.get("pending-status"));

                        // add disabled class to element when button is
                        // unfollowOnly and user unfollowed. No follow allowed.
                        if (model.get("pending-status") === "unfollow" &&
                                model.$el.data().unfollowOnly) {
                            model.$el.addClass("disabled");
                        }

                        // If we have new interests, then update the toolbar
                        if (data.interests) {
                            SU.ToolbarAction.updateTopics(data.interests);
                        }
                    } else {
                        model.set("pending-status", "", {silent:true});
                    }
                })
                .error(function(jqXHR, textStatus, errorThrown){
                    model.set("pending-status", "", {silent:true});

                    if (errorThrown === "Unauthorized") {
                        self.unauthorizedRequest({
                            source: "follow_" + model.get("type"),
                            id: model.get("id")
                        });
                    }
                });
        }
    });

    SU.addInit("mFollow", function(config){

        if (!_followingInit) {
            new SU.Following(config);
            _followingInit = true;
        }
    });
}).call(this);(function() {
    "use strict";

    SU.addInit("mLists", function(config){
        var Lists = require("module/collections/base"),
            ListsView = require("module/views/lists_view"),
            SearchView = require("module/views/search_view"),
            NavTertiaryView = require("module/views/nav_tertiary_view"),
            NavFilterView = require("module/views/nav_filter_view"),
            withConfig = require("module/with_config"),
            viewer,
            lists;

        $('#search-query').placeholder();

        withConfig(config, function(items, view, viewer) {
            lists = new Lists(items, {
                uri: config.data.uri,
                next: view.next,
                parse: true
            });

            new ListsView({
                el: "#reflow-wrapper",
                collection: lists,
                viewer: viewer
            });

            new SearchView({
                el: ".search-content",
                collection: lists
            });

            new NavTertiaryView({
                el: ".nav-tertiary",
                collection: lists
            });

            new NavFilterView({
                el: ".nav-filter",
                collection: lists
            });
        });
    });
}).call(this);(function() {
    "use strict";

    SU.addInit("mListItems", function(config){
        var mediator = require("module/mediator"),
            withConfig = require("module/with_config"),
            NavTertiaryView = require("module/views/nav_tertiary_view"),
            HeaderView = require("module/views/sub_header_view"),
            SubjectListView = require("module/views/subject_list_view"),
            ListItemsView = require("module/views/list_items_view"),
            BaseModel = require("module/models/base"),
            BaseCollection = require("module/collections/base"),
            listItems,
            list,
            nav;

        withConfig(config, function(items, view, viewer) {
            list = new BaseModel(config.subject, {parse: true});
            listItems = new BaseCollection(items, {
                uri: config.data.uri,
                next: view.next,
                parse: true
            });

            new SubjectListView({
                el: "#subject",
                collection: listItems,
                model: list,
                viewer: viewer,
                destroyRedirect: config.destroyRedirect,
                type: 'items'
            });

            new ListItemsView({
                el: "#reflow-wrapper",
                collection: listItems,
                list: list,
                viewer: viewer,
                coverUrlId: list.get("thumbUrlId"),
            });

            new HeaderView({
                el: ".header-content",
                model: list,
                titleKey: "name",
                headingPrefix: "Pages in "
            });

            new NavTertiaryView({
                el: ".nav-tertiary",
                collection: listItems
            });
        });
    });
}).call(this);(function() {
    SU.addInit("mSubjectList", function(config){
        var BaseModel = require("module/models/base"),
            Viewer = require("module/models/user"),
            SubjectListView = require("module/views/subject_list_view"),
            list = new BaseModel(config.subject, {parse: true});

        viewer = new Viewer(config.viewer, {
            parse: true
        });

        new SubjectListView({
            el: "#subject",
            model: list,
            viewer: viewer,
            destroyRedirect: config.destroyRedirect,
            type: 'followers'
        });
    });
}());(function() {
    SU.addInit("mSubjectUrl", function(config){
        var BaseModel = require("module/models/base"),
            Viewer = require("module/models/user"),
            SubjectView = require("module/views/subject_view"),
            subjectUrl,
            viewer;

        viewer = new Viewer(config.viewer, {
            parse: true
        });

        subjectUrl = new BaseModel(config.data, {
            parse: true
        });

        new SubjectView({
            el: "#subject",
            model: subjectUrl,
            viewer: viewer
        });
    });
}());(function() {
    SU.addInit("mSubjectUser", function(config){
        var BaseModel = require("module/models/base"),
            Viewer = require("module/models/user"),
            SubjectUserView = require("module/views/subject_user_view"),
            subjectUser,
            viewer;

        viewer = new Viewer(config.viewer, {
            parse: true
        });

        subjectUser = new BaseModel(config.subject, {
            parse: true
        });

        new SubjectUserView({
            el: "#subject",
            model: subjectUser,
            viewer: viewer
        });
    });
}());(function(){
    "use strict";

    SU.addInit("mSubjectChannel", function(config){
        var BaseModel = require("module/models/base"),
            Viewer = require("module/models/user"),
            SubjectView = require("module/views/subject_view"),
            subjectChannel,
            viewer;

        viewer = new Viewer(config.viewer, {
            parse: true
        });

        subjectChannel = new BaseModel(config.subject, {
            parse: true
        });

        new SubjectView({
            el: ".subject",
            model: subjectChannel,
            viewer: viewer
        });
    });
}).call(this);(function() {
    SU.addInit("mSubjectInterest", function(config){
        var BaseModel = require("module/models/base"),
            Viewer = require("module/models/user"),
            SubjectView = require("module/views/subject_view"),
            subjectInterest,
            viewer;

        viewer = new Viewer(config.viewer, {
            parse: true
        });

        subjectInterest = new BaseModel(config.subject, {
            parse: true
        });

        new SubjectView({
            el: "#subject",
            model: subjectInterest,
            viewer: viewer
        });
    });
}());(function(){
    "use strict";

    var Router = Base.Router.extend({
        pattern: "stumbler/(:username)/connections/?(:show)?",
        pagination: true
    });

    SU.Connections = Base.Controller.extend({
        initialize: function(config) {
            var self = this;

            this.$el = $("#content");
            this.view = new Base.View(this);
            this.route = new Router(this);

            this.filter = new Base.Model({
                "show": "all"
            });
            this.filter.bind("change:show", this.filterShowUpdated, this);

            this.bindEvents({
                "change .stumbles-filter select": "filterChangeShow"
            });

            // on route update trigger custom event to let other
            // controllers know pagination happened
            this.route.bind("ready", function(){
                self.$el.trigger("pagination");
            });
        },

        filterChangeShow: function($el) {
            this.filter.set("show", $el.val());
        },

        filterShowUpdated: function(filter) {
            this.route.navigate(filter.get("show"));
        }
    });

    SU.addInit("mConnections", function(config){
        var TileView = require("module/views/tile_view"),
            SearchView = require("module/views/search_view"),
            BaseModel = require("module/models/base"),
            BaseCollection = require("module/collections/base"),
            withConfig = require("module/with_config"),
            collection;

        $('#search-query').placeholder();

        new SU.Connections(config);

        withConfig(config, function(items, view, viewer) {
            collection = new BaseCollection(items, {
                uri: config.data.uri,
                next: view.next,
                parse: true
            });

            new TileView({
                template: Handlebars.templates.tileUsers,
                el: "#reflow-wrapper",
                collection: collection,
                viewer: viewer
            });

            new SearchView({
                el: ".search-content",
                collection: collection
            });
        });
    });
}).call(this);SU.addInit("mInterests", function(config){
    "use strict";

    var InterestsView = require("module/views/interests_view"),
        SearchView = require("module/views/search_view"),
        BaseCollection = require("module/collections/base"),
        withConfig = require("module/with_config"),
        collection;

    $('#search-query').placeholder();

    withConfig(config, function(items, view, viewer) {
        collection = new BaseCollection(items, {
            uri: config.data.uri,
            next: view.next,
            parse: true
        });

        new InterestsView({
            el: "#reflow-wrapper",
            collection: collection,
            viewer: viewer
        });

        new SearchView({
            el: ".search-content",
            collection: collection
        });
    });
});SU.addInit("mLikedInterests", function(config){
    "use strict";

    var TileView = require("module/views/tile_view"),
        SearchView = require("module/views/search_view"),
        BaseCollection = require("module/collections/base"),
        withConfig = require("module/with_config"),
        collection;

    $('#search-query').placeholder();

    withConfig(config, function(items, view) {
        collection = new BaseCollection(items, {
            uri: config.data.uri,
            next: view.next,
            parse: true
        });

        new TileView({
            template: Handlebars.templates.tileLikedInterests,
            el: "#reflow-wrapper",
            collection: collection
        });

        new SearchView({
            el: ".search-content",
            collection: collection
        });
    });
});(function(){
    SU.addInit("mStumbleButton", function(){
        $body.delegate(".stumble-button", press, function(e){
            e.preventDefault();
            SU.ToolbarAction.stumble( $(this).data() );
        });
        // If we have a toolbar make sure it is open so it can stumble
        SU.ToolbarAction.waitForExtensionApi(function() {
            if (suExtensionApi.toolbar) {
                suExtensionApi.toolbar.openToolbar();
            }
        });
    });
}).call(this);(function(){
    "use strict";
    /**
     * State Model
     */
    var state = Base.Model.extend({
        defaults: {
            "keyword": "",
            "typed-keyword": "",
            "index": -1
        },

        getTypedKeyword: function() {
            var typedKeyword = this.get("typed-keyword") || ""; // Always needs to at least return an empty string;
            // Remove tabs, spaces, line breaks and trim
            return typedKeyword.replace( /[\s\n\r\t]+/g, " " ).replace(/^\s*([\S\s]*?)\s*$/, "$1");
        }
    });

    /**
     * Result model
     */
    var result = Base.Model.extend({
        idAttribute: "index",

        defaults: {
            label: null,
            matchesInput: false
        },

        getKeyword: function() {
            return this.get("label");
        }
    });

    /**
     * Results Collection
     */
    var results = Base.Collection.extend({
        model: result,

        getByIndex: function(index) {
            var model = this.models[index];
            return model ? model : false;
        },

        /**
         * Get the keyword from the specified index offset
         *
         * @param index
         */
        getKeywordFromIndex: function(index) {
            var model = this.getByIndex(index);
            return model ? model.getKeyword() : false;
        }

    });

    /**
     * Cache Collection
     */
    var CacheIndex = function(config) {
        this._keywords = [];
        this._resultsByKeyword = {};
        this._keywordIndexPositions = {};
        this._keywordAdded = {};
        this._limit = config.limit || 50;
        this._expires = config.expires || 3600000; // Milliseconds: 1 hour default, use 0 to disable
        this._total = 0;

        return this;

    };

    extend(CacheIndex.prototype, {

        addResults: function(keyword, results) {
            this._keywords.push(keyword);
            this._resultsByKeyword[keyword] = results;
            this._keywordIndexPositions[keyword] = this._total++; // Assign the index value and update the total after
            this._keywordAdded[keyword] = (new Date()).getTime();

            if (this._total > this._limit) {
                this.purgeOldResults();
            }

            return this;

        },

        get: function(keyword) {
            var results = this._resultsByKeyword[keyword],
                curTime;

            if (!results) {
                return false;
            }

            if (this._expires > 0) {
                curTime = (new Date()).getTime();

                if ((curTime - this._keywordAdded[keyword]) >= this._expires) {
                    this.remove(keyword);
                    return false;
                }
            }

            return results;

        },

        remove: function(keyword) {
            var index = this._keywordIndexPositions[keyword];

            this._keywords.splice(index, 1);
            delete this._resultsByKeyword[keyword];
            delete this._keywordIndexPositions[keyword];
            delete this._keywordAdded[keyword];
            this._total--;
        },

        purgeOldResults: function() {
            this.remove( this._keywords[0] );
        }

    });

    var CacheLibrary = {
        createIndex: function(config) {

            if (!this[config.instance]) {
                this[config.instance] = new CacheIndex(config || {});
            }

            return this[config.instance];
        }
    };

    /**
     * View
     */
    var view = Base.View.extend({

        initialize: function() {
            this.$input = this.$el;

            var placeholderText = this.$input.attr("placeholder");

            if(!Browser.supports("placeholder")) {
                this.$input.val( this.$input.attr("placeholder") ).addClass("ac-placeholder");

                this.$input
                    .focus((function() {
                        if (this.$input.val() == placeholderText) {
                            this.$input.val("").removeClass("ac-placeholder");
                        }
                    }).bind(this))
                    .blur((function() {
                        if (this.$input.val() === "") {
                            this.$input.val(placeholderText).addClass("ac-placeholder");
                        }
                    }).bind(this));
            }
        },

        $resultsContent: function() {
            if (!this._resultsContent) {
                this._resultsContent = this.$results.find(".ac-results-content");
                this._initialResultsHTML = this._resultsContent.html();
            }

            return this._resultsContent;

        },

        /**
         * Render results
         */
        renderResults: function(collection) {
            var html = "",
                results = collection.models,
                i,
                ii,
                result,
                heading;

            this.trigger("results:before");
            html += "<ul class='ac-results'>";

            //@fixme
            for (i=0, ii=results.length; i<ii; i++) {

                result = results[i];

                heading = result.get("heading");

                if (heading) {

                    if (i > 0) {
                        html += '</ul>';
                    }

                    html += "" +
                        "<h6 class='ac-results-heading'>" + heading + "</h6>" +
                        "<ul class='ac-results'>";
                }

                html += "<li><a href='#' data-index='" + i + "'";

                if (result.get("highlight")) {
                    html += " class='s-ac-selected'";
                }

                html += ">" + result.get("matchedText") + "</a></li>";

            }

            html += "</ul>";

            this.$resultsContent().html(this._initialResultsHTML + html);

            if (results.length === 0) {
                this.noResults();
            }

            this.trigger("results:after");

        },

        noResults: function() {
            this.$results.find(".ac-no-results").show();
        },

        keywordChanged: function(state) {
            this.$input.val(state.get("keyword"));
        },

        indexChanged: function(state) {
            var index = state.getInt("index");

            this.$resultsContent().find(".s-ac-selected").attr("class", "");

            if (index > -1) {
                this.$results.find("[data-index=" + index + "]").addClass("s-ac-selected");
            } else {
                state.set("keyword", state.get("typed-keyword"));
            }

        },

        scrollElementIntoView: function() {
            this.$scrollTarget[0].scrollIntoView();
        },

        toggleLoading: function(state) {

            if (state.get("loading")) {
                this.$input.addClass("s-ac-loading");
            } else {
                this.$input.removeClass("s-ac-loading");
            }

        },

        toggleFocus: function(state) {

            if (state.get("focused")) {
                this.$input.focus();
            } else {

                if (!Browser.supports("touch")) {
                    state.set("open", false);
                }

            }

        },

        toggleResultsDisplay: function(state) {
            var typedKeyword = state.get("typed-keyword");

            if (this._hideTimeout) {
                clearTimeout(this._hideTimeout);
                this._hideTimeout = null;
            }

            if (state.get("open")) {
                this.$results.show();
            } else {

                if (typedKeyword && typedKeyword.length > 1) {
                    this._hideTimeout = setTimeout((function(){
                        this.$results.hide();
                    }).bind(this), 400);
                } else {
                    this.$results.hide();
                }
            }
        }

    });

    /**
     * Controller
     */
    Base.Autocomplete = Base.Controller.extend({
        _lastRequest: 0,
        _timer: null,

        _settings: {
            "delay": 100,
            "auto_focus": false
        },

        // Base initialize`
        initialize: function(config) {
            extend(this._settings, config);

            this._instanceId = ".autocomplete-" + config.id;

            this.keywordBuffer = [];

            this.state = new state();
            this.view = new view(this);

            this.results = new results(this);
            this.results.bind("reset", this.view.renderResults, this.view);

            this.cache = CacheLibrary.createIndex({instance:this.cacheId});

            this.state
                .bind("change:keyword", this.view.keywordChanged, this.view)
                .bind("change:typed-keyword", this.typedKeywordChanged, this)
                .bind("change:index", this.view.indexChanged, this.view)
                .bind("change:index", this.indexChanged, this)
                .bind("change:focused", this.view.toggleFocus, this.view)
                .bind("change:open", this.view.toggleResultsDisplay, this.view);

            if (config.showLoadingState !== false) { // Passes if `undefined` or `true`
                this.state.bind("change:loading", this.view.toggleLoading, this.view);
            }

            /*
             * Remove the loading class when the page unloads, otherwise the user could navigate back in their history and
             * the loading icon will still be animating.
             */
            $(window).bind("unload" + this._instanceId, (function(){
                try {
                    this.state.set("loading", "off");
                } catch(e) {
                    // Don't break
                }
            }).bind(this));

            // Scroll a specific target back into view when device orientation changes
            if (this._settings.scrollTargetSelector && Browser.supports("orientationChange")) {
                this.view.$scrollTarget = $(this._settings.scrollTargetSelector);
                this.state.bind("change:orientation", this.view.scrollElementIntoView, this.view);
                window.onorientationchange = (function() {
                    this.state.trigger("change:orientation");
                }).bind(this);
            }

            this.bindEvents({
                "keyup": "keyInput",
                "blur": "blur"
            });

            this.$results = $(this._settings.resultsSelector);

            // Pass this selector onto the view
            this.view.$results = this.$results;

            this.$results
                .delegate("a", "click", (function(e){
                    e.preventDefault();
                    this.selectResult($(e.target).data("index"));
                }).bind(this))
                .delegate("a", "hover", (function(e){
                    this.setIndex($(e.target).data("index"));
                }).bind(this));

            if (this._settings.auto_focus) {
                this.state.set("focused", true);
            }

            this.init(config);

        },

        indexChanged: function(event, data, newIndex) {

            if (newIndex > -1) {
                this.state.set("keyword", this.results.getKeywordFromIndex(newIndex));
            } else {
                this.state.set("keyword", this.state.get("typed-keyword"));
            }

        },

        typedKeywordChanged: function(state) {
            var curVal = state.getTypedKeyword();

            if (curVal && curVal.length > 1) {
                this.queueRequest();
            } else {
                this.state.set("open", false);
                this.results.reset();
            }

        },

        /**
         * Keypress handler
         */
        keyInput: function($this, e) {
            var index = this.state.getInt("index"),
                newIndex = false,
                newKeyword = false,
                lastIndex = this.results.length - 1,
                typedKeyword = this.state.get("typed-keyword") || "";

            lastIndex = lastIndex > -1 ? lastIndex : 0;
            this.state.set("loading", false);

            if (e.which != 13 && e.which != 38 && e.which != 40) {
                var value = $this.val();

                if (value != typedKeyword) {
                    this.state.set("typed-keyword", value);
                }
                return;
            }

            if (e.which === 13 /*Enter*/) {

                if (this.keywordBuffer.length === 0) {
                    this.submit();
                } else {
                    this.bind("keyword:done", (function() {

                        if (this.keywordBuffer.length === 0) {
                            this.submit();
                        }

                    }).bind(this));
                }
            }

            // If there are no results or the list isn't open, don't bother trying to cycle through it.
            if (!this.results.models.length || !this.state.get("open")) {
                return;
            }

            if (e.which === 38 /*Up*/) {
                newIndex = index > -1 ? index - 1 : lastIndex;
            }

            if (e.which === 40 /*Down*/) {
                newIndex = index != lastIndex ? index + 1 : -1;
            }

            if (newIndex !== false) {
                this.state.setInt("index", newIndex);
            }
        },

        blur: function() {
            this.state.set("focused", false);
        },

        /**
         * Submit
         */
        submit: function() {
            var index = this.state.getInt("index"),
                result;

            if (index === -1) {
                result = this.results.getByIndex(0);

                if (result && result.get("matchesInput") === true) {
                   this.state.setInt("index", 0);
                    this._resultSelected(0);
                } else {
                    this.view.noResults();
                }

            } else {
                // .resultSelected is a method that should exist within the object that extends Base.Autocomplete
                this._resultSelected(index);
            }

        },

        setIndex: function(index) {
            this.state.setInt("index", index);
        },

        /**
         * Select an item from the result list
         */
        selectResult: function(index){
            var model = this.results.getById(index);

            this.state.trigger("change:orientation");
            this.state.set("keyword", model.get("label"));
            this.submit();
        },

        /**
         * Queue a lookup request to the server
         */
        queueRequest: function() {
            var toDelay = this._settings.delay,
                curTime = (new Date()).getTime(),
                timeDiff = (curTime - this._lastRequest);

            if (timeDiff < this.delay) {
                toDelay = this.delay - timeDiff;
            }

            if (this._timer) {
                clearTimeout(this._timer);
                this._timer = null;
            }

            this._timer = setTimeout((function(){
                this.sendRequest();
            }).bind(this), toDelay);

        },

        /**
         * Send the request to the server
         */
        sendRequest: function(){
            var keyword = this.state.getTypedKeyword(),
                cache = this.cache.get(keyword);

            this._lastRequest = (new Date()).getTime();

            this.keywordBuffer.push(keyword);

            if (this._requestProcessing) {
                this._requestProcessing.abort();
            }

            if (cache) {
                this.state.setInt("index", -1);
                this._prepareData(cache);
                this._requestProcessing = null;
                this.trigger("keyword:done");
                this.keywordBuffer = this.keywordBuffer.splice(1, this.keywordBuffer.length);

                return;
            }

            this._requestProcessing = this.sync.create(
                // Data
                {
                    "q": keyword,
                    "_token": this._settings._token
                },

                // Ajax params
                {
                    cache: false,

                    success: (function(response){
                        this.keywordBuffer = this.keywordBuffer.splice(1, this.keywordBuffer.length);
                        this._lastRequest = (new Date()).getTime();

                        if (response._success) {
                            this.state.setInt("index", -1);
                            this._prepareData(response.data);
                            this.cache.addResults(keyword, response.data);
                            this.trigger("keyword:done");
                        }

                    }).bind(this),

                    error: (function(){
                        //$todo
                        this.trigger("keyword:done");
                        this.keywordBuffer = this.keywordBuffer.splice(1, this.keywordBuffer.length);
                    }).bind(this)

                }
            );
        },

        _prepareData: function(data) {
            var hasResults = false,
                results = [],
                result,
                index = 0,
                categories = data.categories,
                category,
                pattern = this.state.getTypedKeyword().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
                c,
                cc,
                r,
                rr;

            if (!categories || categories && categories.length > 0) {
                this.results.reset();
            }

            for (c=0, cc=categories.length; c<cc; c++) {
                category = categories[c];

                // Loop through the results under each category
                for (r = 0, rr = category.keywords.length; r<rr; r++) {
                    result = category.keywords[r];
                    result.index = index;

                    if (r === 0 && category.label != "default") {
                        result.heading = category.label;
                    }

                    if (result.highlight) {
                        result.matchesInput = true;
                    }

                    var regexObj = new RegExp(pattern, "ig");
                    var replaceWith = regexObj.exec(result.label);

                    result.matchedText = result.label.replace(regexObj, "<strong>"+replaceWith+"</strong>");
                    results.push(result);
                    index++;

                }
            }

            this.results.reset(results);
            this.state.set("open", true);

        },

        _resultSelected: function(index) {
            this.state.set("loading", true);
            this.resultSelected( this.results.getByIndex(index) );
            this.state.set("open", false);
        }

    });
}).call(this);(function(){
    function resultsTemplate(id) {
        return "" +
        "<div class='ac-results-wrap' id='" + id + "'>" +
            "<div class='ac-results-content'>" +
                "<div class='ac-no-results explore-no-results'>" +
                    "<h6>No Results Found.</h6>" +
                    "<p>Please try exploring another interest.</p>" +
                "</div>" +
            "</div>" +
        "</div>";
    }


    function exploreBoxInit(config) {
        config.selector = "#" + config.id;

        var isWebToolbar = (config.id == "tb-explore-box"),
            resultsId = config.id + "-results-wrap";

        config.resultsSelector = "#" + resultsId;


        if (isWebToolbar) {
            $body.append( resultsTemplate(resultsId) );
        } else {
           $(config.selector).after( resultsTemplate(resultsId) );
        }

        var ExploreBox = Base.Autocomplete.extend({
            selector: config.selector,

            cacheId: "ExploreBox",

            restURL: "/autocomplete/keyword",

            init: function() {
                if (isWebToolbar && config.client == 'chromebar') {
                    this.view.bind("results:after", this.openAutoCompleteOverlay);
                    this.state.bind("change:keyword", this.openAutoCompleteOverlay);
                }
            },

            openAutoCompleteOverlay: function()
            {
                if ($(config.resultsSelector + ' .ac-results-content ul'))
                    var w = $(config.resultsSelector + ' .ac-results-content ul').width();
                else
                    var w = $(config.resultsSelector + ' .ac-results-content').width();

                SU.WebToolbar.overlayManager.openOverlay('keyword-autocomplete', {
                    data: "<div id='" + resultsId + "'>" + $(config.resultsSelector).html() + "</div>",
                    type: 'floating',
                    anchorElement: $('#' + config.id),
                    size: {width: w, height: $(config.resultsSelector).height()},
                    closeOthers: ['floating', 'notification'],
                    refresh: true
                })
            },

            resultSelected: function(model) {
                var data = model.toJSON();
                var mode = {};
                mode.contextual = data.label;

                // TODO: remove this, because the server should send the correct data
                if (data.mode == 'topic')
                {
                    mode.mode = 'topic';
                    mode.topic = data.topicid;
                }
                else
                {
                    mode.mode = 'tag';
                    mode.q = data.label;
                }
                mode.action_trigger = "exploreBox";
                SU.ToolbarAction.stumble(mode);
            }
        });

        SU.ExploreBox = new ExploreBox(config);
    }

    SU.addInit("mExploreBox", function(config){
        // config.scrollTargetSelector = '.explore-interests h2';
        exploreBoxInit(config);
    });

    SU.addInit("mExploreBoxWebToolbar", function(config){
        exploreBoxInit(config);
    });
}).call(this);(function(){
    "use strict";

    SU.addInit("mChannels", function(config){
        var TileView = require("module/views/tile_view"),
            BaseCollection = require("module/collections/base"),
            withConfig = require("module/with_config"),
            collection;

        withConfig(config, function(items, view, viewer) {
            collection = new BaseCollection(items, {
                uri: config.data.uri,
                next: view.next,
                parse: true
            });

            new TileView({
                template: Handlebars.templates.tileChannels,
                el: "#reflow-wrapper",
                collection: collection,
                viewer: viewer
            });
        });
    });
}).call(this);(function(){
    "use strict";

    SU.flagModal = new Base.Modal();

    SU.FlagItem = function(config){
        var $flagTrigger = $('#flag-item, .e-flag-item'),
            modalClass = config.modalClass || 'flag-stumbler',
            flagUrl = $flagTrigger.data('flagitem');

        $flagTrigger.click(function(e){
            e.preventDefault();
            SU.flagModal.loadURL(flagUrl, {iframe:true, wrapperClass: modalClass}).open();
        });
        if (config && config.showSomethingWrong) {
            SU.flagModal.loadURL(flagUrl, {iframe:true, wrapperClass: modalClass}).open();
        }
    };

    SU.addInit("mFlagItem", function(config){
        new SU.FlagItem(config);
    });
}).call(this);(function() {
    // Legacy services auth. Deprecated in favor of module/services
    SU.ServicesAuth = function() {

        var _callbacks = {};

        var _services = {
            facebook: true,
            twitter: true,
            linkedin: true,
            google: true,
            gmail: true,
            yahoo: true
        };

        function _getAuthUrl(service, method, params) {
            var url,
                urls = {};

            method = method || 'connect';

            switch (service) {
                case "facebook":
                    urls = {
                        autoshare: "/service/facebook/autoshare/request",
                        connect: "/service/facebook/connect/request",
                        login: "/service/facebook/login/request",
                        register: "/service/facebook/register/request",
                        signup: "/service/facebook/signup/request",
                        captcha: "/service/facebook/captcha/request",
                        channels: "/dt/settings/connections/facebook/request?service=facebook"
                    };
                    break;

                case "twitter":
                    urls = {
                        connect: "/service/twitter/connect/request",
                        channels: "/dt/settings/connections/twitter/request?service=twitter"
                    };
                    break;

                case "linkedin":
                    urls = {
                        connect: "/service/linkedin/connect/request"
                    };
                    break;

                case "google":
                    urls = {
                        connect: "/service/google/connect/request",
                        register: "/service/google/register/request"
                    };
                    break;

                case "gmail":
                    urls = {
                        connect: "/service/gmail/connect/request"
                    };
                    break;

                case "yahoo":
                    urls = {
                        connect: "/service/yahoo/connect/request"
                    };
                    break;

            }

            url = urls[method];

            if (typeof (params) !== 'undefined') {
                // Additional parameters were specified for the Url.
                url = url + '?' + $.param(params);
            }

            return url;
        }

        return {

            services: _services,

            bind: function(service, callback) {
                if (_callbacks[service]) {
                    _callbacks[service].push(callback);
                } else {
                    _callbacks[service] = [callback];
                }
                return this;
            },

            load: function(source) {
                var context = source.data('context') || '';

                if (typeof(_kmq) !== 'undefined') {
                    _kmq.push(['record', 'Clicked Facebook Button', {'Context': context}]);
                }

                window.top.location = _getAuthUrl(source.data('service'), source.data('method'), {
                    success: source.data('success') || document.URL,
                    fail: source.data('fail') || document.URL,
                    context: context,
                    scope: source.data('scope') || ''
                });
            },

            open: function(service, method, params) {
                if (typeof(_kmq) !== 'undefined') {
                    _kmq.push(['record', 'Clicked Facebook Button', {'Context': method}]);
                }

                window.open(_getAuthUrl(service, method, params), "auth_" + service, "menubar=1,resizable=1,width=1000,height=600");
            },

            result: function(response, window_ref) {
                //this is to close the window calling the response, if required
                if(typeof window_ref !== 'undefined') {
                   window_ref.close();
                }

                for ( var i = 0, callback; callback = _callbacks[response.service][i]; i++) {
                    callback(response._success, response);
                }
            }
        };
    }();

    // Bind service connection buttons.
    $("body").on('click', '.connect-service', function(e) {
        var $el = $(this),
            service = $el.data("service");

        if (typeof service !== "undefined") {
            SU.ServicesAuth.load($el);
        }
        e.stopPropagation();
        e.preventDefault();
    });
}).call(this);//Simple config mapping helper
define(function(require) {
    var BaseModel = require("module/models/base"),
        Viewer = require("module/models/user");

    return function(config, fn) {
        var items,
            view,
            viewer = {};

        _.isString(config) && (config = {});
        config || (config = {});
        config.data || (config.data = {});
        config.data.data || (config.data.data = {});

        items = config.data.data.items || {};
        view = config.data.view || {};

        if (config.viewer) {
            viewer = new Viewer(config.viewer, {
                parse: true
            });
        }

        fn(items, view, viewer);
    };
}, "module/with_config");define(function(require) {
    var BaseView = require("module/modal");

    return BaseView.extend({
        events: {
            "click .primary": "doAction"
        },

        initialize: function(options) {
            var extra = options.extra || {},
                templateName = extra.template || "";
            this.uri = extra.uri || {};
            this.redirectUrl = extra.redirectUrl || "";
            options.contentTemplate = Handlebars.templates[templateName];
            BaseView.prototype.initialize.call(this, options);
        },

        doAction: function() {
            var redirectUrl = this.redirectUrl;
            if (this.uri)
            {
                $.post(this.uri.url, {
                    _token: this.uri.token
                }, function(data) {
                    window.location = redirectUrl;
                }, 'json');
            }
        }
    });
}, "module/views/modals/mobile_app_redir");