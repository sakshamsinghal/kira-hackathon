(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['alertMessage'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1, foundHelper;
  foundHelper = helpers.alertType;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.alertType; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);}

function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "data-messageid=\"";
  foundHelper = helpers.messageId;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messageId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <a class=\"close\" href=\"#\" ";
  stack1 = depth0.messageId;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">&times;</a>\n    ";
  return buffer;}
function program6(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "data-closeid=\"";
  foundHelper = helpers.messageId;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.messageId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

  buffer += "\n<div class=\"alert-message ";
  stack1 = depth0.alertType;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = depth0.messageId;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    ";
  stack1 = depth0.showClose;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <p class=\"alert-icon\">";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n</div>";
  return buffer;});
templates['loader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1, foundHelper;
  foundHelper = helpers.loaderClass;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.loaderClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);}

  buffer += "<div class=\"loader ";
  stack1 = depth0.loaderClass;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></div>";
  return buffer;});
templates['simpleLink'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += " class=\"";
  foundHelper = helpers.elClass;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.elClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "title=\"";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" ";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "data-publicid=\"";
  foundHelper = helpers.publicid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.publicid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

  buffer += "\n<a href=\"";
  foundHelper = helpers.href;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  stack1 = depth0.elClass;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = depth0.title;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  foundHelper = helpers.attrs;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attrs; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = depth0.publicid;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>";
  return buffer;});
templates['simpleSpan'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "class=\"";
  foundHelper = helpers.elClass;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.elClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

  buffer += "\n<span ";
  stack1 = depth0.elClass;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>";
  return buffer;});
templates['simpleOption'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += " value=\"";
  foundHelper = helpers.value;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += " name=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

function program5(depth0,data) {
  
  
  return " selected=\"selected\"";}

function program7(depth0,data) {
  
  
  return " disabled=\"disabled\"";}

  buffer += "\n<option";
  stack1 = depth0.value;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = depth0.name;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = depth0.selected;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = depth0.disabled;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</option>";
  return buffer;});
templates['lazyLoadViewMore'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"wrapper-view-more\">\n    <button class=\"btn lazy-load-view-more\">View More</button>\n</div>";});
templates['generalFollowees'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  stack1 = depth0.followees_with_pic;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.total;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(7, program7, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, foundHelper;
  buffer += "\n        <hgroup class=\"invite-header\">\n            <h1>\n                Great, we found ";
  stack1 = depth0.followees_with_pic;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.total;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + " of your <mark class=\"service\">";
  foundHelper = helpers.service;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.service; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</mark> friends on StumbleUpon!\n            </h1>\n            <h2>You are now following them and can start discovering great stuff from your friends.</h2>\n        </hgroup>\n        <ul class=\"new-followees\">\n            ";
  stack1 = depth0.followees_with_nopic;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1._rows;
  stack2 = depth0.followees_with_pic;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2._rows;
  stack3 = {};
  foundHelper = helpers.followeesCount;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, 19, {hash:stack3,inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data}) : helperMissing.call(depth0, "followeesCount", stack2, stack1, 19, {hash:stack3,inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n    ";
  return buffer;}
function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n                <li>\n                    <img src=\"";
  foundHelper = helpers.thumbs;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.thumbs; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" title=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.display_name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" alt=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.display_name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                </li>\n            ";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n                <li><strong class=\"extra-count\">+";
  foundHelper = helpers.count;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</strong>more</li>\n            ";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n        <hgroup class=\"invite-header\">\n            <h1>\n                We couldn't find any of your <mark class=\"service\">";
  foundHelper = helpers.service;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.service; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</mark> friends on StumbleUpon!\n            </h1>\n            <h2>Invite some! Select some friends that you would like to share your discoveries with and invite to StumbleUpon.</h2>\n        </hgroup>\n    ";
  return buffer;}

  stack1 = depth0.templateData;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['generalInvitees'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  stack1 = depth0.templateData;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contacts;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n        ";
  foundHelper = helpers._rows;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  else { stack1 = depth0._rows; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  stack2 = {};
  if (!helpers._rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;}
function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n            <li class=\"invitees-item\">\n                <label class=\"invitees-label ";
  stack1 = {};
  foundHelper = helpers.isChecked;
  stack1 = foundHelper ? foundHelper.call(depth0, "checked", {hash:stack1,data:data}) : helperMissing.call(depth0, "isChecked", "checked", {hash:stack1,data:data});
  buffer += escapeExpression(stack1) + "\" for=\"id-";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" id=\"label-id-";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n                    <span class=\"wrapper-image\">\n                        <img src=\"";
  foundHelper = helpers.thumbs;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.thumbs; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n                    </span>\n                    <strong class=\"contact-name\">";
  foundHelper = helpers.displayName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.displayName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</strong><br>\n                    <input type=\"checkbox\" name=\"";
  foundHelper = helpers.displayName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.displayName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" value=\"";
  foundHelper = helpers.contactId;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.contactId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" id=\"id-";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" ";
  stack1 = {};
  foundHelper = helpers.isChecked;
  stack1 = foundHelper ? foundHelper.call(depth0, "checked", {hash:stack1,data:data}) : helperMissing.call(depth0, "isChecked", "checked", {hash:stack1,data:data});
  buffer += escapeExpression(stack1) + " class=\"invite-checkbox\">\n                </label>\n            </li>\n        ";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <li class=\"no-results\">\n        ";
  foundHelper = helpers.noFolloweesResults;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.noFolloweesResults; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\n    </li>\n";
  return buffer;}

  stack1 = depth0.templateData;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contacts;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1._rows;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['dna'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <span class=\"dna-strand\" data-name=\"";
  foundHelper = helpers.percentage;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.percentage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "% ";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"  data-contrastcolor=\"";
  foundHelper = helpers.contrastColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.contrastColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" data-size=\"";
  foundHelper = helpers.percentage;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.percentage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" style=\"background-color: ";
  foundHelper = helpers.color;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.color; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "; width: ";
  foundHelper = helpers.percentage;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.percentage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "%;\"></span>\n";
  return buffer;}

  stack1 = depth0.strands;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['scroller'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"antiscroll-wrap url-activity\">\n    <div class=\"antiscroll-inner\">\n        ";
  stack1 = {};
  stack2 = depth0.template;
  stack1['template'] = stack2;
  stack2 = depth0.data;
  stack1['data'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>";
  return buffer;});
templates['onError'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <h4 class=\"no-results-body\">";
  foundHelper = helpers.message;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h4>\n    ";
  return buffer;}

  buffer += "<div class=\"no-results\">\n    <h3 class=\"no-results-heading\">Oh no! Something went wrong.</h3>\n    ";
  stack1 = depth0.message;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;});
templates['urlActivity'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n<div class=\"url-activity-item\" data-id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    <a href=\"";
  stack1 = depth0.activity;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n        ";
  stack1 = depth1.disableUserHover;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n    <p>\n        ";
  stack1 = depth0.activity;
  stack2 = {};
  foundHelper = helpers.contentBuilder;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "contentBuilder", stack1, {hash:stack2,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <span class=\"url-activity-item-date notification-date\" data-timestamp=\"";
  foundHelper = helpers.timestampCreated;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.timestampCreated; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"></span>\n    </p>\n</div>\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n            ";
  stack1 = depth0.user;
  stack2 = {};
  foundHelper = helpers.userHoverThumb;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "url-activity-item-thumb", {hash:stack2,data:data}) : helperMissing.call(depth0, "userHoverThumb", stack1, "url-activity-item-thumb", {hash:stack2,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <img class=\"url-activity-item-thumb\" src=\"";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.small;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"/>\n        ";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['urlActivities'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "urlActivity";
  stack2 = depth0.data;
  stack1['data'] = stack2;
  stack2 = depth1.disableUserHover;
  stack1['disableUserHover'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['urlActivityOverlay'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, stack3, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<section class=\"url-activity\">\n    <div class=\"url-activity-header\">\n        <a href=\"";
  stack1 = depth0.subject;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            <img class=\"url-activity-thumb\" src=\"";
  stack1 = depth0.subject;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"/>\n        </a>\n        <h1 class=\"url-activity-title\">\n            <a href=\"";
  stack1 = depth0.subject;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                ";
  stack1 = depth0.subject;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.titleType;
  stack2 = depth0.subject;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.title;
  stack3 = {};
  stack3['max'] = "55";
  foundHelper = helpers.truncateTitle;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:stack3,data:data}) : helperMissing.call(depth0, "truncateTitle", stack2, stack1, {hash:stack3,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </a>\n        </h1>\n    </div>\n    <h2 class=\"url-activity-subheading\">Activity</h2>\n    <div class=\"url-activity-content\"></div>\n</section>";
  return buffer;});
templates['activityNotifications'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "reflow";}

  buffer += "<article class=\"tile tile-url ";
  stack1 = depth0.reflow;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " activity-notifications\">\n    <div class=\"tile-url-topic tk-header\">";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n    <div class=\"antiscroll-wrap\">\n        <div class=\"antiscroll-inner\">\n            <div class=\"url-activity-items\">\n                ";
  stack1 = {};
  stack1['template'] = "urlActivities";
  stack2 = depth0.data;
  stack1['data'] = stack2;
  stack2 = depth0.disableUserHover;
  stack1['disableUserHover'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </div>\n</article>";
  return buffer;});
templates['emptyNotifications'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<article class=\"tile tile-url reflow activity-notifications\">\n    <div class=\"tile-url-topic tk-header\">Recent Activity</div>\n    <div class=\"tile-empty\">\n        <h2>Nothing to see here.</h2>\n        <a href=\"/invite\">Find and follow friends.</a>\n        <span>StumbleUpon is more fun that way.</span>\n    </div>\n</article>";});
templates['emptyResults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"no-results\">\n    <h3 class=\"no-results-heading\">No results found.</h3>\n    <h4 class=\"no-results-body\">Stumble on!</h4>\n    <div class=\"center\">\n        <a href=\"#\" class=\"btn medium primary stumble-button\" data-mode=\"all\" data-contextual=\"All Interests\">Stumble</a>\n    </div>\n</div>";});
templates['subjectList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n<section class=\"subject-list\" id=\"subject\">\n    <ul class=\"subject-controls\">\n        ";
  stack1 = depth0.ownedByMe;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <li class=\"control-item\">\n            <a href=\"#\" class=\"control control-share stumble-acts-share\" title=\"Share\">Share</a>\n        </li>\n    </ul>\n    <div class=\"subject-left-wrap\">\n        <div class=\"subject-thumb-wrap\">\n            <img class=\"subject-thumb\" src=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" height=\"129\" width=\"184\">\n            ";
  stack1 = depth0.ownedByMe;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        ";
  stack1 = depth0.ownedByMe;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = depth1.viewer;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.view;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.isAdmin;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"subject-copyblock\">\n        <h1 class=\"tile-header-primary\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.namePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.visibility;
  stack2 = {};
  foundHelper = helpers.ifEqual;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "private", "<span class=\"subject-list-visibility\" title=\"Private\"> (Private)</span>", {hash:stack2,data:data}) : helperMissing.call(depth0, "ifEqual", stack1, "private", "<span class=\"subject-list-visibility\" title=\"Private\"> (Private)</span>", {hash:stack2,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </h1>\n        <p class=\"tile-copy\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack2 = {};
  stack2['max'] = 330;
  foundHelper = helpers.truncate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncate", stack1, {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + "</p>\n    </div>\n    <div class=\"subject-dna\">\n        <h2 class=\"dna-heading\">ListDNA</h2>\n        <div class=\"dna-bar medium sticky\">\n            ";
  stack1 = {};
  stack1['template'] = "dna";
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.dna;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.strands;
  stack1['strands'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <a href=\"";
  stack1 = depth0.owner;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.profileUrl;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" class=\"subject-list-attribution\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.owner;
  stack2 = {};
  foundHelper = helpers.userHoverThumb;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "subject-list-attribution-user-thumb", {hash:stack2,data:data}) : helperMissing.call(depth0, "userHoverThumb", stack1, "subject-list-attribution-user-thumb", {hash:stack2,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <span class=\"subject-list-attribution-username\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.owner;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n        </a>\n    </div>\n</section>\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return "\n        <li class=\"control-item\"><a class=\"control control-edit\" href=\"javascript:void(0)\" title=\"Edit List\">Edit List</a></li>\n        ";}

function program4(depth0,data) {
  
  
  return "\n                <div class=\"subject-list-change-cover\">Change Cover</div>\n            ";}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <a href=\"#\" class=\"button-follow ";
  stack1 = depth0.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.follows;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.count;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " small bg-light\">\n                <span class=\"s-follow\">follow</span>\n                <span class=\"s-following\">following</span>\n                <span class=\"s-unfollow\">unfollow</span>\n            </a>\n        ";
  return buffer;}
function program7(depth0,data) {
  
  
  return "following";}

function program9(depth0,data) {
  
  
  return "follow";}

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <a href=\"#\" class=\"button-curate right ";
  stack1 = depth0.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.curation;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.count;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " small bg-light\" data-id=";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ">\n                <span class=\"s-curate\">curate</span>\n                <span class=\"s-curated\">curated</span>\n                <span class=\"s-uncurate\">uncurate</span>\n            </a>\n        ";
  return buffer;}
function program12(depth0,data) {
  
  
  return "curated";}

function program14(depth0,data) {
  
  
  return "curate";}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['userDescription'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n<div class=\"user-description-wrap\">\n    <img class=\"user-thumb\" src=\"";
  stack1 = depth0.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"/>\n    <h2 class=\"user-username tk-header\">";
  foundHelper = helpers.username;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\n    <p class=\"user-description\">";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\n</div>\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['lihpHeadingRecommended'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"page-actions\">\n    <a href=\"javascript:void(0);\" class=\"btn medium primary stumble-button left\" data-mode=\"all\" data-contextual=\"Recommended\">Stumble</a>\n    <h1 class=\"page-title\" id=\"header-text\">Recommended Pages in Your Interests</h1>\n    <a href=\"javascript:void(0)\" class=\"tutorial-tip\" data-template=\"yourInterests\"></a>\n    <a href=\"/discover/interests\" class=\"btn right secondary\" id=\"header-secondary\">Add Interests</a>\n</div>";});
templates['lihpHeadingActivity'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"page-actions\">\n    <a href=\"javascript:void(0);\" class=\"btn medium primary stumble-button left\" data-mode=\"activity\" data-contextual=\"Activity\">Stumble</a>\n    <h1 class=\"page-title\" id=\"header-text\">Activity from Stumblers and Lists You're Following</h1>\n    <a href=\"javascript:void(0)\" class=\"tutorial-tip\" data-template=\"activity\"></a>\n    <a href=\"/invite\" class=\"btn right secondary\" id=\"header-secondary\">Follow Friends</a>\n</div>";});
templates['lihpHeadingTrending'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"page-actions\">\n    <a href=\"javascript:void(0);\" class=\"btn medium primary stumble-button left\" data-mode=\"trending\" data-contextual=\"Trending\">Stumble</a>\n    <h1 class=\"page-title\" id=\"header-text\">Trending Pages on StumbleUpon</h1>\n    <a href=\"javascript:void(0)\" class=\"tutorial-tip\" data-template=\"trending\"></a>\n</div>";});
templates['lihpHeadingLists'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "s-active";}

function program3(depth0,data) {
  
  
  return "s-active";}

function program5(depth0,data) {
  
  
  return "s-active";}

  buffer += "<div class=\"nav-filter-center\">\n    <nav class=\"nav-filter\">\n        <ul>\n            <li class=\"nav-filter-nav-item ";
  stack1 = depth0.filter;
  stack2 = {};
  stack2['compare'] = "curated";
  foundHelper = helpers.if_eq;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data}) : helperMissing.call(depth0, "if_eq", stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"nav-lists-curated\">\n                <a class=\"nav-filter-nav-link pushState\" href=\"/home/lists/curated\">Featured</a>\n            </li>\n            <li class=\"nav-filter-nav-item ";
  stack1 = depth0.filter;
  stack2 = {};
  stack2['compare'] = "updated";
  foundHelper = helpers.if_eq;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data}) : helperMissing.call(depth0, "if_eq", stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"nav-lists-recent\">\n                <a class=\"nav-filter-nav-link pushState\" href=\"/home/lists/updated\">Recently Updated</a>\n            </li>\n            <li class=\"nav-filter-nav-item ";
  stack1 = depth0.filter;
  stack2 = {};
  stack2['compare'] = "popular";
  foundHelper = helpers.if_eq;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(5, program5, data),data:data}) : helperMissing.call(depth0, "if_eq", stack1, {hash:stack2,inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"nav-lists-popular\">\n                <a class=\"nav-filter-nav-link pushState\" href=\"/home/lists/popular\">Most Popular</a>\n            </li>\n        </ul>\n    </nav>\n</div>\n<a href=\"javascript:void(0)\" class=\"tutorial-tip lists\" data-template=\"lists\"></a>";
  return buffer;});
templates['lihpHeadingExplore'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += " data-partner=\"";
  foundHelper = helpers.tlds;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tlds; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

  buffer += "<div class=\"page-actions\">\n    <a href=\"javascript:void(0);\" class=\"btn medium primary stumble-button left\" data-mode=\"";
  foundHelper = helpers.mode;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mode; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" data-contextual=\"";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" data-q=\"";
  foundHelper = helpers.query;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.query; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  stack1 = depth0.tlds;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Stumble</a>\n    <h1 class=\"page-title\" id=\"header-text\">";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h1>\n</div>";
  return buffer;});
templates['tileUrl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, stack3, foundHelper;
  buffer += "\n<article class=\"tile tile-url reflow";
  stack1 = depth1.meta;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.actionable;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.dead;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" ";
  stack1 = depth0.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.attrs;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ">\n    <div class=\"tile-url-topic tk-header\" style=\"background-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n        <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.urlCategory;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" style=\"color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contrastColor;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.categoryNamePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</a>\n    </div>\n    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.narrow;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <section class=\"tile-url-content\">\n        <a class=\"tile-header-link Url\" href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" title=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.title;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            <h2 class=\"tile-url-header tk-header\">\n                ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.titleType;
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.title;
  stack3 = {};
  stack3['max'] = "55";
  foundHelper = helpers.truncateTitle;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:stack3,data:data}) : helperMissing.call(depth0, "truncateTitle", stack2, stack1, {hash:stack3,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </h2>\n        </a>\n        ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div class=\"tile-url-details\">\n            <span class=\"tile-url-domain\" title=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.domain;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.domain;
  stack2 = {};
  stack2['type'] = "middle";
  stack2['max'] = 17;
  foundHelper = helpers.truncate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncate", stack1, {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + "</span>\n            <a class=\"tile-url-info-link details-sep\" href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.urlContent;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.countStumblesPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n            </a>\n        </div>\n    </section>\n    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.urlContent;
  stack2 = depth0.context;
  stack3 = {};
  foundHelper = helpers.tileContext;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, 3, stack1, {hash:stack3,data:data}) : helperMissing.call(depth0, "tileContext", stack2, 3, stack1, {hash:stack3,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = depth0.actionable;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</article>\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return " no-controls";}

function program4(depth0,data) {
  
  
  return " disabled dead";}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    <a class=\"tile-url-thumb\" href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" style=\"border-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ";\">\n        <img ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.narrow;
  stack2 = {};
  foundHelper = helpers.notificationUrlThumbHandler;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "notificationUrlThumbHandler", stack1, {hash:stack2,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"tile-url-thumb-image\">\n    </a>\n    ";
  return buffer;}

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n            <p class=\"tile-copy tile-url-description\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack2 = {};
  stack2['max'] = 220;
  foundHelper = helpers.truncate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncate", stack1, {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + "</p>\n        ";
  return buffer;}

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n        <div class=\"tile-controls\">\n            <ul class=\"controls e-stumbles\">\n                <li class=\"control-item-right\">\n                    <a href=\"javascript:void(0);\" class=\"control control-comment\" title=\"Comment\">Comment</a>\n                </li>\n                <li class=\"control-item-right\">\n                    <a href=\"javascript:void(0);\" class=\"control control-share stumble-acts-share\" title=\"Share\">Share</a>\n                </li>\n                <li class=\"control-item-right\">\n                    <a href=\"javascript:void(0);\" class=\"control control-list-add list-add\" title=\"Add to List\">Add to List</a>\n                </li>\n                ";
  stack1 = depth0.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.likes;
  stack2 = {};
  foundHelper = helpers.withInteraction;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(11, program11, data),data:data}) : helperMissing.call(depth0, "withInteraction", stack1, {hash:stack2,inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ul>\n        </div>\n    ";
  return buffer;}
function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <li class=\"control-item\">\n                        <a href=\"javascript:void(0);\" class=\"control control-remove control-like-toggle\" title=\"Unlike\">Unlike</a>\n                        <span class=\"url-tile-time-liked\">";
  stack1 = depth0.view;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.timestampLikedPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n                    </li>\n                ";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileUrls'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "tileUrl";
  stack1['data'] = depth0;
  stack2 = depth1.meta;
  stack1['meta'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileUser'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n<article class=\"tile tile-user ";
  stack1 = depth1.popup;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n    <div class=\"dna-bar\">\n        ";
  stack1 = {};
  stack1['template'] = "dna";
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.dna;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.strands;
  stack1['strands'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"tile-user-details\">\n        <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            <img class=\"tile-user-thumb-large\" src=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" height=\"120\" width=\"120\">\n        </a>\n        <ul class=\"tile-detail-items\">\n            <li>\n                <h2 class=\"tile-detail-count tk-header\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.countLikesPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h2>\n                <span class=\"tile-detail-text tk-header\">Likes</span>\n            </li>\n            <li>\n                <h2 class=\"tile-detail-count tk-header\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.countListsPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h2>\n                <span class=\"tile-detail-text tk-header\">Lists</span>\n            </li>\n            <li>\n                <h2 class=\"tile-detail-count tk-header\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.countFollowersPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h2>\n                <span class=\"tile-detail-text tk-header\">Followers</span>\n            </li>\n        </ul>\n    </div>\n    <div class=\"tile-url-content\">\n        <a class=\"tile-header-link\" href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            <h1 class=\"tile-url-header tk-header\">\n                ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n            </h1>\n        </a>\n        <h2 class=\"tile-header-secondary\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.namePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n        </h2>\n        <p class=\"tile-copy\" title=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack2 = {};
  stack2['max'] = 9999;
  foundHelper = helpers.truncateClean;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncateClean", stack1, {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack2 = {};
  stack2['max'] = 80;
  foundHelper = helpers.truncateClean;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncateClean", stack1, {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + "</p>\n        ";
  stack1 = depth1.popup;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    ";
  stack1 = depth0.actionable;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</article>\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return "reflow";}

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">View Profile</a>\n        ";
  return buffer;}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div class=\"tile-controls\">\n            ";
  stack1 = depth0.editable;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <ul class=\"controls-right e-stumbles\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                ";
  stack1 = depth0.editable;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program12, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ul>\n        </div>\n    ";
  return buffer;}
function program7(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <a href=\"#\" class=\"button-follow ";
  stack1 = depth0.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.follows;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.count;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " small bg-light\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                    <span class=\"s-follow\">follow</span>\n                    <span class=\"s-following\">following</span>\n                    <span class=\"s-unfollow\">unfollow</span>\n                </a>\n            ";
  return buffer;}
function program8(depth0,data) {
  
  
  return "following";}

function program10(depth0,data) {
  
  
  return "follow";}

function program12(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n                    <li class=\"control-item-right\">\n                        <a class=\"control control-edit\" href=\"";
  stack1 = depth1.viewer;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.view;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.urlSettingsProfile;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" title=\"Edit Profile\">Edit Profile</a>\n                    </li>\n                ";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileUsers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "tileUser";
  stack1['data'] = depth0;
  stack2 = depth1.viewer;
  stack1['viewer'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileMessage'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<article class=\"tile tile-message\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n    <section class=\"tile-url-content tile-message-content\">\n        <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.sender;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" class=\"connection-link\">\n            <img class=\"tile-message-sender-thumb\" src=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.sender;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" alt=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.sender;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            <h2 class=\"tile-url-header tile-message-header tk-header\">\n                ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.sender;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n            </h2>\n        </a>\n        <h3 class=\"tile-message-sender-name tk-header\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.sender;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n        </h3>\n        ";
  stack1 = depth0.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.reads;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.count;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <p class=\"tile-copy tile-message-copy\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.messagePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</p>\n    </section>\n    <div class=\"tile-controls\">\n        <ul class=\"controls\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            <li class=\"control-item\">\n                <span class=\"tile-message-date-sent\">Sent On ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.dateCreatedPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n            </li>\n";
  buffer += "\n            <li class=\"control-item-right\">\n                <a class=\"control control-remove\" href=\"#\" title=\"Delete\">\n                    Delete\n                </a>\n            </li>\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.sender;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.messages;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <li class=\"control-item-right wrapper-undo invisible\">\n                <a class=\"control control-remove\" href=\"#\" title=\"Undo\">\n                    Undo\n                </a>\n            </li>\n        </ul>\n    </div>\n</article>\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return "\n            <span class=\"tile-message-flag-new tk-header\">New</span>\n        ";}

function program4(depth0,data) {
  
  
  return "\n            <li class=\"control-item-right\">\n                <a class=\"control control-reply\" href=\"#\" title=\"View/Reply\">\n                    View/Reply\n                </a>\n            </li>\n            ";}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileMessages'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "tileMessage";
  stack1['data'] = depth0;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n<article class=\"tile tile-list reflow\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n    <div class=\"tile-list-dna dna-bar\">\n        ";
  stack1 = {};
  stack1['template'] = "dna";
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.dna;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.strands;
  stack1['strands'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <a class=\"tile-list-thumb\" href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n        <img class=\"list-thumb-image\" src=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" style=\"width: 342px; height: 223px;\">\n    </a>\n    <div class=\"tile-list-attribution\">\n        <hgroup class=\"tile-list-page-counter tk-header\">\n            <h2 class=\"tile-list-page-counter-followers\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.countFollowers;
  stack2 = {};
  foundHelper = helpers.number_format;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 0, 0, ",", {hash:stack2,data:data}) : helperMissing.call(depth0, "number_format", stack1, 0, 0, ",", {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + " Followers</h2>\n            <h2 class=\"tile-list-page-counter-pages\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.countUrls;
  stack2 = {};
  foundHelper = helpers.number_format;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, 0, 0, ",", {hash:stack2,data:data}) : helperMissing.call(depth0, "number_format", stack1, 0, 0, ",", {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + " Pages</h2>\n        </hgroup>\n    </div>\n    <div class=\"tile-url-content\">\n        <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            <h1 class=\"tile-url-header tk-header\">\n                ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.namePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n                ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.visibility;
  stack2 = {};
  foundHelper = helpers.ifEqual;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "private", "<span class=\"tile-list-visibility\" title=\"Private\"> (Private)</span>", {hash:stack2,data:data}) : helperMissing.call(depth0, "ifEqual", stack1, "private", "<span class=\"tile-list-visibility\" title=\"Private\"> (Private)</span>", {hash:stack2,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </h1>\n        </a>\n        <p class=\"tile-copy tile-list-description\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</p>\n    </div>\n    <div class=\"tile-url-context\">\n        <span class=\"tile-list-date-edited\">Last Edited ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.timestampModifiedPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n        <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.owner;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.owner;
  stack2 = {};
  foundHelper = helpers.userHoverThumb;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "tile-list-owner-thumb", {hash:stack2,data:data}) : helperMissing.call(depth0, "userHoverThumb", stack1, "tile-list-owner-thumb", {hash:stack2,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <figcaption class=\"tile-list-owner\">Created By\n                <strong class=\"tile-list-owner-name\">\n                    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.owner;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n                </strong>\n            </figcaption>\n        </a>\n    </div>\n    ";
  stack1 = depth0.actionable;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</article>\n";
  return buffer;}
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div class=\"tile-controls\">\n            ";
  stack1 = depth0.editable;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = depth1.viewer;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.view;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.isAdmin;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <ul class=\"controls e-stumbles\">\n                ";
  stack1 = depth0.editable;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <li class=\"control-item-right\">\n                    <a href=\"#\" class=\"control control-share stumble-acts-share\" title=\"Share\">Share</a>\n                </li>\n            </ul>\n        </div>\n    ";
  return buffer;}
function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <a href=\"#\" class=\"button-follow left ";
  stack1 = depth0.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.follows;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.count;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " small bg-light\" data-id=";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ">\n                    <span class=\"s-follow\">follow</span>\n                    <span class=\"s-following\">following</span>\n                    <span class=\"s-unfollow\">unfollow</span>\n                </a>\n            ";
  return buffer;}
function program4(depth0,data) {
  
  
  return "following";}

function program6(depth0,data) {
  
  
  return "follow";}

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <a href=\"#\" class=\"button-curate left ";
  stack1 = depth0.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.curation;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.count;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " small bg-light\" data-id=";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ">\n                    <span class=\"s-curate\">curate</span>\n                    <span class=\"s-curated\">curated</span>\n                    <span class=\"s-uncurate\">uncurate</span>\n                </a>\n            ";
  return buffer;}
function program9(depth0,data) {
  
  
  return "curated";}

function program11(depth0,data) {
  
  
  return "curate";}

function program13(depth0,data) {
  
  
  return "\n                    <li class=\"control-item\">\n                        <a class=\"control control-edit\" title=\"Edit List\">Edit List</a>\n                    </li>\n                ";}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileShareUrl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, stack3, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <a class=\"tile-share-thumb\" href=\"";
  foundHelper = helpers.urlViewShare;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.urlViewShare; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" style=\"border-bottom-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ";\">\n        <img class=\"tile-share-thumb-image\" src=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n    </a>\n";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p class=\"tile-url-description\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n        </p>\n    ";
  return buffer;}

  buffer += "<div class=\"tile-url-topic tk-header\" style=\"background-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "; color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contrastColor;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ";\">\n    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.categoryNamePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n</div>\n";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<section class=\"tile-url-content tile-share-content\">\n    <a class=\"tile-header-link url\" href=\"";
  foundHelper = helpers.urlViewShare;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.urlViewShare; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" title=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.title;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n        <h2 class=\"tile-url-header tile-share-header tk-header\">\n            <span class=\"urlHostname\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.titleType;
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.title;
  stack3 = {};
  stack3['max'] = "65";
  foundHelper = helpers.truncateTitle;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:stack3,data:data}) : helperMissing.call(depth0, "truncateTitle", stack2, stack1, {hash:stack3,data:data});
  buffer += escapeExpression(stack1) + "</span>\n        </h2>\n    </a>\n    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</section>";
  return buffer;});
templates['tileShareList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <a class=\"tile-share-thumb tile-list-share-thumb\" href=\"";
  foundHelper = helpers.urlViewShare;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.urlViewShare; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n        <img class=\"tile-share-thumb-image\" src=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n    </a>\n";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p class=\"tile-url-description\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n        </p>\n    ";
  return buffer;}

  buffer += "<div class=\"tile-url-topic tile-list-topic tk-header\">\n    ";
  stack1 = {};
  stack1['template'] = "dna";
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.dna;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.strands;
  stack1['strands'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<section class=\"tile-url-content tile-share-content\">\n    <a class=\"tile-header-link url\" href=\"";
  foundHelper = helpers.urlViewShare;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.urlViewShare; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" title=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.namePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n        <h2 class=\"tile-url-header tile-share-header tk-header\">\n            <span class=\"urlHostname\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.namePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n        </h2>\n    </a>\n    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</section>";
  return buffer;});
templates['tileShare'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    <article class=\"tile tile-share reflow\">\n        ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.list;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <section class=\"tile-url-content tile-share-sender-content\">\n            <h2 class=\"tile-url-header tile-share-header tk-header\">\n                From:\n                ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.sender;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <span><a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.sender;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.sender;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</a></span>\n            </h2>\n            <h2 class=\"tile-url-header tile-share-header tk-header\">\n                To:\n                ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.recipient;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <span><a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.recipient;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.recipient;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</a></span>\n            </h2>\n            ";
  stack1 = depth0.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.reads;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.count;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class=\"tile-share-message\">\n                ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.notePretty;
  stack2 = {};
  foundHelper = helpers.nl2br;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "nl2br", stack1, {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + "\n            </div>\n        </section>\n        <div class=\"tile-controls\">\n            <ul class=\"controls\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                <li class=\"control-item\">\n                    <span class=\"tile-share-date-sent\">Sent on ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.dateCreatedPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + " at ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.timeCreatedPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n                </li>\n                <li class=\"control-item-right\">\n                    ";
  stack1 = depth0.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.replies;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  stack1 = depth0.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.reads;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.count;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </li>\n            </ul>\n        </div>\n    </article>\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n            ";
  stack1 = {};
  stack1['template'] = "tileShareList";
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.list;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.data;
  stack1['data'] = stack2;
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.urlViewShare;
  stack1['urlViewShare'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n            ";
  stack1 = {};
  stack1['template'] = "tileShareUrl";
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.url;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.data;
  stack1['data'] = stack2;
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.urlViewShare;
  stack1['urlViewShare'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;}

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.sender;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ",\n                ";
  return buffer;}

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.recipient;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ",\n                ";
  return buffer;}

function program10(depth0,data) {
  
  
  return "\n                <span class=\"tile-share-flag-new tk-header\">New</span>\n            ";}

function program12(depth0,data) {
  
  
  return "\n                        <a class=\"control control-share-reply\" data-action=\"share-reply\" href=\"#\" title=\"reply\">reply</a>\n                    ";}

function program14(depth0,data) {
  
  
  return "\n                        <a class=\"control control-mark-seen\" data-action=\"share-mark-unread\" href=\"#\" title=\"mark as read\">mark as read</a>\n                    ";}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileShares'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "tileShare";
  stack1['data'] = depth0;
  stack2 = depth1.interaction;
  stack1['interaction'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileLists'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "tileList";
  stack1['data'] = depth0;
  stack2 = depth1.viewer;
  stack1['viewer'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileListItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, foundHelper;
  buffer += "\n<article class=\"reflow tile tile-url";
  stack1 = depth0.actionable;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" ";
  stack1 = depth0.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.attrs;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ">\n    <div class=\"tile-url-topic tk-header\" style=\"background-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "; color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contrastColor;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ";\">\n        ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.categoryNamePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n    </div>\n    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.narrow;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n     <section class=\"tile-url-content\" style=\"border-top-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ";\">\n       <h2 class=\"tile-url-header tk-header\">\n            <a class=\"tile-header-link Url\" href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" title=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.title;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.titleType;
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.title;
  stack3 = {};
  stack3['max'] = "55";
  foundHelper = helpers.truncateTitle;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:stack3,data:data}) : helperMissing.call(depth0, "truncateTitle", stack2, stack1, {hash:stack3,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </a>\n        </h2>\n        ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div class=\"tile-url-details tk-header\">\n            <span class=\"tile-url-domain\" title=\"\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.domain;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.domain;
  stack2 = {};
  stack2['type'] = "middle";
  stack2['max'] = 17;
  foundHelper = helpers.truncate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncate", stack1, {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + "</span>\n            <a class=\"tile-url-info-link details-sep\" href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.urlContent;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.countStumblesPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n            </a>\n        </div>\n    </section>\n    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.urlContent;
  stack2 = depth0.context;
  stack3 = {};
  foundHelper = helpers.tileContext;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, 3, stack1, {hash:stack3,data:data}) : helperMissing.call(depth0, "tileContext", stack2, 3, stack1, {hash:stack3,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = depth0.actionable;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</article>\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return " no-controls";}

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    <a class=\"tile-url-thumb\" href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n        <img ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.narrow;
  stack2 = {};
  foundHelper = helpers.notificationUrlThumbHandler;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "notificationUrlThumbHandler", stack1, {hash:stack2,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"tile-url-thumb-image\">\n        <ul class=\"edit-controls hidden\">\n            <li>\n                <button class=\"btn secondary make-cover\">Make Cover</button>\n            </li>\n        </ul>\n     </a>\n    ";
  return buffer;}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n            <p class=\"tile-url-description\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack2 = {};
  stack2['max'] = 220;
  foundHelper = helpers.truncate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncate", stack1, {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + "</p>\n        ";
  return buffer;}

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div class=\"tile-controls\">\n            <ul class=\"controls\">\n                ";
  stack1 = depth0.ownedByMe;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <li class=\"control-item-right\">\n                    <a href=\"javascript:void(0);\" class=\"control control-comment\" title=\"Comment\">Comment</a>\n                </li>\n                <li class=\"control-item-right\">\n                    <a href=\"javascript:void(0);\" class=\"control control-share stumble-acts-share\" title=\"Share\">Share</a>\n                </li>\n                <li class=\"control-item-right\">\n                    <a href=\"javascript:void(0);\" class=\"control control-list-add list-add\" title=\"Add to List\">Add to List</a>\n                </li>\n            </ul>\n        </div>\n    ";
  return buffer;}
function program9(depth0,data) {
  
  
  return "\n                    <li class=\"control-item\">\n                        <a href=\"javascript:void(0);\" class=\"edit-control control-remove remove\" title=\"Remove From List\">Remove From List</a>\n                    </li>\n                ";}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileListItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "tileListItem";
  stack1['data'] = depth0;
  stack2 = depth1.meta;
  stack1['meta'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileListEditCard'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n<div class=\"list-edit-form-wrapper ";
  stack1 = depth1.modal;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    ";
  stack1 = depth1.modal;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <fieldset class=\"list-edit-form\">\n        <div class=\"tile-list-card-thumb-wrap\">\n            <img class=\"tile-list-card-thumb\" id=\"list-cover\" src=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" height=\"90\" width=\"135\">\n            <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.owner;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" class=\"tile-list-card-attribution\">\n                <img class=\"tile-list-card-attribution-user-thumb\" src=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.owner;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.small;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" height=\"25\" width=\"25\">\n                <span class=\"tile-list-card-attribution-created-by\">Created by</span>\n                <span class=\"tile-list-card-attribution-username\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.owner;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n            </a>\n        </div>\n        ";
  stack1 = depth1.modal;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div class=\"list-edit-columns\">\n            <div class=\"list-edit-col-left\">\n                <div class=\"wrapper-input\">\n                    <label class=\"header-label\" for=\"list-name\">Title</label>\n                    <div class=\"header-input\">\n                        <input type=\"text\" id=\"list-name\" class=\"list-edit-title\" value=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.namePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" maxlength=\"70\"><br>\n                        <em class=\"help-text\">70 characters max</em>\n                    </div>\n                </div>\n                <div class=\"wrapper-input\">\n                    <label class=\"header-label header-label-inline\">Visibility</label>\n                    <div class=\"header-input inline\">\n                        <label for=\"list-public\">\n                            <input type=\"radio\" name=\"visibility\" id=\"list-public\" value=\"public\" ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.visibility;
  stack2 = {};
  foundHelper = helpers.ifEqual;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "public", "checked", {hash:stack2,data:data}) : helperMissing.call(depth0, "ifEqual", stack1, "public", "checked", {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + ">\n                            Public\n                        </label>\n                        <label for=\"list-private\">\n                            <input type=\"radio\" name=\"visibility\" id=\"list-private\" value=\"private\" ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.visibility;
  stack2 = {};
  foundHelper = helpers.ifEqual;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "private", "checked", {hash:stack2,data:data}) : helperMissing.call(depth0, "ifEqual", stack1, "private", "checked", {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + ">\n                            Private\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"list-edit-col-right\">\n                <div class=\"wrapper-input\">\n                    <label class=\"header-label\" for=\"list-description\">Description</label>\n                    <div class=\"header-input\">\n                        <textarea id=\"list-description\" class=\"list-edit-description\" maxlength=\"250\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</textarea><br>\n                        <em class=\"help-text\">250 characters max</em>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"list-edit-actions\">\n            <button href=\"javascript:void(0)\" class=\"btn primary action list-edit-btn\" id=\"list-save\">Save</button>\n            <button href=\"javascript:void(0)\" class=\"btn secondary list-edit-btn\" id=\"list-cancel\">Cancel</button>\n            ";
  stack1 = depth1.modal;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </fieldset>\n</div>\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return "view-modal";}

function program4(depth0,data) {
  
  
  return "\n    <div class=\"dna-bar\"></div>\n    ";}

function program6(depth0,data) {
  
  
  return "\n        <h1 id=\"dialog-header\" class=\"list-edit-header\">Edit List</h1>\n        ";}

function program8(depth0,data) {
  
  
  return "\n            <button href=\"javascript:void(0)\" class=\"btn action list-edit-btn\" id=\"list-delete\">Delete</button>\n            ";}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileInterest'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<article class=\"tile tile-interest reflow\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n    <a class=\"tile-header-link\" href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n        <div class=\"topic-bar tk-header\" style=\"background-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "; color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contrastColor;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.namePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n        </div>\n    </a>\n    <div class=\"tile-interest-details\" style=\"border-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ";\">\n        <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            <img class=\"tile-interest-thumb\" src=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" height=\"104\" width=\"160\">\n        </a>\n        <ul class=\"tile-detail-items\">\n            <li>\n                <h2 class=\"tile-detail-count tk-header\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.countFollowersPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h2>\n                <span class=\"tile-detail-text tk-header\">Followers</span>\n            </li>\n        </ul>\n    </div>\n    <div class=\"tile-url-content\">\n        <p class=\"tile-copy\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</p>\n    </div>\n    ";
  stack1 = depth0.actionable;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</article>\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div class=\"tile-controls\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            <a href=\"#\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" class=\"button-follow ";
  stack1 = depth0.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.follows;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.count;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " small bg-light\">\n                <span class=\"s-follow\">follow</span>\n                <span class=\"s-following\">following</span>\n                <span class=\"s-unfollow\">unfollow</span>\n            </a>\n        </div>\n    ";
  return buffer;}
function program3(depth0,data) {
  
  
  return "following";}

function program5(depth0,data) {
  
  
  return "follow";}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileInterests'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "tileInterest";
  stack1['data'] = depth0;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileLikedInterest'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<article class=\"tile tile-interest reflow\" data-mode='topic' data-topic=\"\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" data-type=\"interest\">\n    <div class=\"topic-bar tk-header\" style=\"background-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "; color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contrastColor;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ";\">\n        ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.namePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n    </div>\n    <div class=\"tile-interest-details\" style=\"border-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ";\">\n        <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            <img class=\"tile-interest-thumb\" src=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" height=\"120\" width=\"120\" />\n        </a>\n        <ul class=\"tile-detail-items\">\n            <li>\n                <h2 class=\"tile-detail-count tk-header\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.countLikes;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h2>\n                <span class=\"tile-detail-text tk-header\">Likes</span>\n            </li>\n        </ul>\n    </div>\n</article>\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileLikedInterests'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "tileLikedInterest";
  stack1['data'] = depth0;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileContextUsers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    <div class=\"tile-url-context\">\n        ";
  stack1 = depth0.users;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = depth0.overflow;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <a href=\"";
  foundHelper = helpers.destination;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.destination; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"tile-context-activity-link\">See Activity</a>\n    </div>\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n        <a class=\"tile-wrapper-user-thumb\" href=\"";
  foundHelper = helpers.url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" title=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n            ";
  stack1 = {};
  foundHelper = helpers.userHoverThumb;
  stack1 = foundHelper ? foundHelper.call(depth0, depth0, "tile-user-thumb thumb", {hash:stack1,data:data}) : helperMissing.call(depth0, "userHoverThumb", depth0, "tile-user-thumb thumb", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n        ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n            <span class=\"tile-context-additional tk-header\">+";
  foundHelper = helpers.overflow;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.overflow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\n        ";
  return buffer;}

  stack1 = depth0.users;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileContextText'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <div class=\"tile-url-context\">\n        <span class=\"tile-context-text-";
  foundHelper = helpers.type;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "-thumb\"></span>\n        <span class=\"tile-context-text\">";
  foundHelper = helpers.content;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    </div>\n";
  return buffer;}

  stack1 = depth0.content;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileChannel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n<article class=\"tile-channel reflow\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" data-type=\"channel\">\n    <section>\n        <div class=\"dna-bar\">\n            ";
  stack1 = {};
  stack1['template'] = "dna";
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.dna;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.strands;
  stack1['strands'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"tile-user-details\">\n            <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                <img class=\"tile-channel-thumb\" src=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" height=\"120\" width=\"120\">\n            </a>\n            <ul class=\"tile-detail-items\">\n                <li>\n                    <h2 class=\"tile-detail-count tk-header\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.countUrlsPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h2>\n                    <span class=\"tile-detail-text tk-header\">Pages</span>\n                </li>\n                <li>\n                    <h2 class=\"tile-detail-count tk-header\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.countFollowersPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h2>\n                    <span class=\"tile-detail-text tk-header\">Followers</span>\n                </li>\n            </ul>\n        </div>\n        <div class=\"tile-url-content\">\n            <a class=\"tile-header-link\" href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                <h1 class=\"tile-url-header tk-header\">\n                    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.namePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n                </h1>\n            </a>\n            <p class=\"tile-copy\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</p>\n        </div>\n\n        ";
  stack1 = depth0.actionable;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </section>\n</article>\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <div class=\"tile-controls\">\n                <a href=\"#\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" class=\"button-follow ";
  stack1 = depth0.interaction;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.follows;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.count;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " small bg-light\">\n                    <span class=\"s-follow\">follow</span>\n                    <span class=\"s-following\">following</span>\n                    <span class=\"s-unfollow\">unfollow</span>\n                </a>\n            </div>\n        ";
  return buffer;}
function program3(depth0,data) {
  
  
  return "following";}

function program5(depth0,data) {
  
  
  return "follow";}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileChannels'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "tileChannel";
  stack1['data'] = depth0;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileUserComment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, foundHelper;
  buffer += "\n<article class=\"tile tile-comment reflow\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n    <section>\n        <div class=\"tile-url-topic tk-header\" style=\"background-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "; color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.contrastColor;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ";\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.categoryNamePretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n        </div>\n        <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" class=\"tile-url-thumb\" style=\"float: left; border-bottom-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ";\">\n            <img ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack2 = {};
  foundHelper = helpers.notificationUrlThumbHandler;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "notificationUrlThumbHandler", stack1, {hash:stack2,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"tile-comment-thumb-image\">\n        </a>\n        <div class=\"tile-url-content\" style=\"height: 138px; border-bottom: 6px solid; border-bottom-color: ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ";\">\n            <a class=\"tile-header-link Url\" href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" title=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.title;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                <h2 class=\"tile-url-header tk-header\">\n                    <span class=\"Url\">\n                        ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.titleType;
  stack2 = depth0.data;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.url;
  stack2 = stack2 == null || stack2 === false ? stack2 : stack2.title;
  stack3 = {};
  stack3['max'] = "55";
  foundHelper = helpers.truncateTitle;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:stack3,data:data}) : helperMissing.call(depth0, "truncateTitle", stack2, stack1, {hash:stack3,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </span>\n                </h2>\n            </a>\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class=\"tile-url-details\">\n                <span class=\"tile-url-domain\" title=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.domain;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.domain;
  stack2 = {};
  stack2['type'] = "middle";
  stack2['max'] = 17;
  foundHelper = helpers.truncate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncate", stack1, {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + "</span>\n                <a class=\"tile-url-info-link details-sep\" href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.urlContent;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.countStumblesPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n                </a>\n            </div>\n        </div>\n        <div class=\"tile-context-wrap\">\n            <div class=\"tile-context\">\n                <div class=\"tile-comment-thumb-wrapper\">\n                    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.user;
  stack2 = {};
  foundHelper = helpers.userHoverThumb;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "tile-comment-thumb-large image-responsive", {hash:stack2,data:data}) : helperMissing.call(depth0, "userHoverThumb", stack1, "tile-comment-thumb-large image-responsive", {hash:stack2,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n                <h3 class=\"tile-comment-user tk-header\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ":</h3>\n                <p class=\"tile-copy e-comment\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.comment;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</p>\n            </div>\n        </div>\n        <div class=\"tile-controls\">\n            ";
  stack1 = depth0.editable;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <span class=\"url-tile-time-liked\">Posted on ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.timestampCreatedPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n        </div>\n    <section>\n</article>\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <p class=\"tile-url-description\">\n                    ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n                </p>\n            ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <ul class=\"controls comment-controls\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                    <li class=\"control-item-right\">\n                        <a class=\"control control-edit control-edit-comment\" href=\"#\" title=\"Edit Comment\">Edit Comment</a>\n                    </li>\n                    <li class=\"control-item-right\">\n                        <a class=\"control control-remove\" href=\"#\" title=\"Delete Comment\">Delete Comment</a>\n                    </li>\n                </ul>\n            ";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileUserComments'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "tileUserComment";
  stack1['data'] = depth0;
  stack2 = depth1.meta;
  stack1['meta'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileUrlComment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n<article class=\"tile tile-url-comment reflow\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n    <section class=\"tile-url-content tile-url-comment-content\">\n        <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.user;
  stack2 = {};
  foundHelper = helpers.userHoverThumb;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "tile-url-comment-thumb", {hash:stack2,data:data}) : helperMissing.call(depth0, "userHoverThumb", stack1, "tile-url-comment-thumb", {hash:stack2,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <h2 class=\"tile-url-header tile-url-comment-header tk-header\">\n                ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h3>\n            </h2>\n        </a>\n        <h3 class=\"tile-url-comment-name tk-header\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h3>\n        </h3>\n        <p class=\"tile-copy e-comment\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.comment;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n        </p>\n    </section>\n    <div class=\"tile-controls\">\n        ";
  stack1 = depth0.editable;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <span class=\"url-tile-time-liked\">Posted on ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.timestampCreatedPretty;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n    </div>\n</article>\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <ul class=\"controls comment-controls\" data-id=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                <li class=\"control-item-right\">\n                    <a class=\"control control-edit control-edit-comment\" href=\"javascript:void(0);\" title=\"Edit Comment\">Edit Comment</a>\n                </li>\n                <li class=\"control-item-right\">\n                    <a class=\"control control-remove\" href=\"javascript:void(0);\" title=\"Delete Comment\">Delete Comment</a>\n                </li>\n            </ul>\n        ";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['tileUrlComments'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "tileUrlComment";
  stack1['data'] = depth0;
  stack2 = depth1.meta;
  stack1['meta'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['editComment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form class=\"form-modal\">\n    <div class=\"modal-input\">\n        <label for=\"comment\" class=\"modal-label modal-label-unclickable\">Comment</label>\n        <textarea id=\"comment\">";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.comment;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</textarea>\n    </div>\n    <div class=\"modal-actions\">\n        <button href=\"javascript:void(0)\" class=\"btn primary right edit-save\">Save</button>\n        <button href=\"javascript:void(0)\" class=\"btn right edit-cancel\">Cancel</button>\n        <button href=\"javascript:void(0)\" class=\"btn secondary left edit-delete\" id=\"list-destroy\">Delete</button>\n    </div>\n</form>";
  return buffer;});
templates['comments'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        ";
  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;}
function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n        <li class=\"comment\">\n            <a href=\"";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                <img class=\"comment-user-thumb\" src=\"";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.small;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"/>\n            </a>\n            <a class=\"comment-attribution\" href=\"";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n                ";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n            </a>\n            <p class=\"comment-text\">";
  foundHelper = helpers.comment;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.comment; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\n            <span class=\"comment-timestamp\">";
  foundHelper = helpers.timestampCreatedPretty;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.timestampCreatedPretty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\n        </li>\n        ";
  return buffer;}

function program5(depth0,data) {
  
  
  return "\n    <h3 class=\"empty\">No comments</h3>\n";}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['newComment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"url-context\">\n            <img class=\"url-context-thumb\" src=\"";
  stack1 = depth0.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"/>\n        </div>\n        ";
  return buffer;}

function program3(depth0,data) {
  
  var stack1;
  stack1 = depth0.comment;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.comment;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  return escapeExpression(stack1);}

function program5(depth0,data) {
  
  
  return "\n            <button class=\"btn secondary left\" id=\"delete-comment\">Delete</button>\n        ";}

  buffer += "<div class=\"new-comment-wrap\">\n    <div class=\"url-context-center\">\n        ";
  stack1 = depth0.url;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.large;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <h2 class=\"url-context-title tk-header\">Comments</h2>\n    </div>\n    <div class=\"antiscroll-wrap comments\">\n        <div class=\"antiscroll-inner\">\n            <ul class=\"comments-wrap\"></ul>\n        </div>\n    </div>\n    <form class=\"create-comment\">\n        <textarea class=\"new-comment\" id=\"new-comment\" placeholder=\"Write a comment...\">";
  stack1 = depth0.comment;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</textarea>\n        ";
  stack1 = depth0.comment;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <button class=\"btn disabled right\" id=\"post-comment\">Post</button>\n    </form>\n</div>";
  return buffer;});
templates['fbCanvasStumble'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    <article class=\"stumble-item ";
  stack1 = {};
  stack1['modValue'] = 3;
  stack1['modClass'] = "s-mod";
  stack1['defaultClass'] = "";
  foundHelper = helpers.cycle;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "cycle", {hash:stack1,data:data});
  buffer += escapeExpression(stack1) + "\" data-id=\"";
  foundHelper = helpers.public_id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.public_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n        <div class=\"stumble-details\">\n            <a href=\"";
  foundHelper = helpers.source_link;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.source_link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" target=\"_blank\"><img width=\"42\" height=\"42\" src=\"";
  foundHelper = helpers.source_thumb;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.source_thumb; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" alt=\"";
  foundHelper = helpers.recommender;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.recommender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"></a>\n            <div class=\"source-info\">\n                <a class=\"recommend-info fbcanvas-stumble-link\" href=\"";
  foundHelper = helpers.su_link;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.su_link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" target=\"_blank\" title=\"";
  stack1 = depth0.title;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                    ";
  stack1 = depth0.title;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </a>\n                ";
  stack1 = depth0.source;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n        <div class=\"stumble-controls\">\n            <a class=\"stumble-category\" href=\"";
  foundHelper = helpers.interest_link;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.interest_link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" target=\"_blank\">";
  foundHelper = helpers.interest;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.interest; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n            <a href=\"";
  foundHelper = helpers.su_link;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.su_link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"fbcanvas-stumble-link\" target=\"_blank\"><img src=\"";
  foundHelper = helpers.url_thumb;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url_thumb; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" width=\"223\" height=\"147\" alt=\"";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"></a>\n        </div>\n    </article>\n";
  return buffer;}
function program2(depth0,data) {
  
  var stack1, foundHelper;
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);}

function program4(depth0,data) {
  
  var stack1, foundHelper;
  foundHelper = helpers.url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);}

function program6(depth0,data) {
  
  var stack1, stack2, foundHelper;
  stack1 = depth0.title;
  stack2 = {};
  stack2['max'] = 40;
  foundHelper = helpers.truncate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncate", stack1, {hash:stack2,data:data});
  return escapeExpression(stack1);}

function program8(depth0,data) {
  
  var stack1, stack2, foundHelper;
  stack1 = depth0.url;
  stack2 = {};
  stack2['max'] = 45;
  stack2['position'] = "center";
  foundHelper = helpers.truncate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncate", stack1, {hash:stack2,data:data});
  return escapeExpression(stack1);}

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n                    <span title=\"";
  foundHelper = helpers.source;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.source; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">liked by ";
  stack1 = depth0.source;
  stack2 = {};
  stack2['max'] = 12;
  foundHelper = helpers.truncate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncate", stack1, {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + "</span>\n                ";
  return buffer;}

function program12(depth0,data) {
  
  
  return "\n                    <span>from StumbleUpon</span>\n                ";}

  foundHelper = helpers.recs;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  else { stack1 = depth0.recs; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  stack2 = {};
  if (!helpers.recs) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['formMessage'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "class=\"";
  foundHelper = helpers.cssClass;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cssClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

function program3(depth0,data) {
  
  
  return "class=\"help-block\"";}

  buffer += "\n<span ";
  stack1 = depth0.cssClass;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>";
  return buffer;});
templates['mappInterest'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"stumble-controls\">\n    <div class=\"stumble-acts-stumble lihp-interest-link\">\n        <img src=\"";
  foundHelper = helpers.image;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"stumble-image\">\n        <mark>";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</mark>\n    </div>\n</div>";
  return buffer;});
templates['photoSlider'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n            <li class=\"photo-slider-slide";
  stack1 = depth0.vertical;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                <img class=\"photo-slider-slide-image\" src=\"";
  foundHelper = helpers.url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n                ";
  stack1 = depth0.description;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </li>\n        ";
  return buffer;}
function program2(depth0,data) {
  
  
  return " vertical";}

function program4(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n                <p class=\"description\">";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\n                ";
  return buffer;}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n                <div class=\"photo-slider-thumb";
  stack1 = depth0.vertical;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                    <img class=\"photo-slider-slide-image\" src=\"";
  foundHelper = helpers.url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n                </div>\n            ";
  return buffer;}
function program7(depth0,data) {
  
  
  return " vertical";}

  buffer += "\n<div class=\"photo-slider-slider\">\n    <ul class=\"slides photo-slider-long\">\n        ";
  stack1 = {};
  stack1 = helpers.each.call(depth0, depth0, {hash:stack1,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    <nav class=\"photo-slider-controls\">\n        <a href='#' class=\"prev photo-slider-controls-nav\"></a>\n        <a href='#' class=\"next photo-slider-controls-nav\"></a>\n    </nav>\n</div>\n<div class=\"photo-slider-thumbnails\">\n    <nav class=\"photo-slider-thumbnail-nav prev\">\n        <div class=\"photo-slider-thumbnail-nav-arrow\"></div>\n    </nav>\n    <div class=\"photo-slider-thumbnail-frame\">\n        <div class=\"photo-slider-thumbs photo-slider-long\">\n            ";
  stack1 = {};
  stack1 = helpers.each.call(depth0, depth0, {hash:stack1,inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n    <nav class=\"photo-slider-thumbnail-nav next\">\n        <div class=\"photo-slider-thumbnail-nav-arrow\"></div>\n    </nav>\n</div>";
  return buffer;});
templates['progressBar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n                <span class=\"stop ";
  stack1 = depth0.passed;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = depth0.active;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"left: ";
  foundHelper = helpers.percent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.percent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "%;\">";
  stack1 = depth0.active;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<span class=\"star\"></span></span>\n                ";
  return buffer;}
function program2(depth0,data) {
  
  
  return "passed";}

function program4(depth0,data) {
  
  
  return "active";}

function program6(depth0,data) {
  
  var stack1, foundHelper;
  foundHelper = helpers.count;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);}

  buffer += "<div class=\"progress-content\">\n    <h1 class=\"progress-message\">";
  foundHelper = helpers.message;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h1>\n    <div class=\"progress-wrap\">\n        <div class=\"progress-wrap-inner\">\n            <div class=\"progress-bg\"></div>\n            <div class=\"progress-remain\" style=\"width: ";
  stack1 = depth0.state;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.percent;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "%;\"></div>\n            <div class=\"progress-stops\">\n                ";
  stack1 = depth0.stops;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;});
templates['dropdown'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "placeholder=\"";
  foundHelper = helpers.placeholder;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.placeholder; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n    ";
  stack1 = {};
  stack1['template'] = "dropdownList";
  stack2 = depth0.items;
  stack1['items'] = stack2;
  stack2 = depth0.viewCid;
  stack1['viewCid'] = stack2;
  stack2 = depth0.allowCreate;
  stack1['allowCreate'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;}

  buffer += "<div class=\"dropdown\" data-cid=\"";
  foundHelper = helpers.viewCid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.viewCid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    <input type=\"text\" class=\"dropdown-search\" ";
  stack1 = depth0.placeholder;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/>\n    <div class=\"spinner\"></div>\n    ";
  stack1 = depth0.absolute;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;});
templates['dropdownList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "absolute";}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n            <li class=\"dropdown-item ";
  stack1 = depth0.preSelected;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-cid=\"";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n                <span>";
  foundHelper = helpers.valueBefore;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.valueBefore; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  stack1 = depth0.valueToBold;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  foundHelper = helpers.value;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\n            </li>\n        ";
  return buffer;}
function program4(depth0,data) {
  
  
  return "s-active";}

function program6(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "<strong>";
  foundHelper = helpers.valueToBold;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.valueToBold; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</strong>";
  return buffer;}

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            ";
  stack1 = depth0.query;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;}
function program9(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                ";
  stack1 = depth0.match;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;}
function program10(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n                    <li class=\"dropdown-item dropdown-create-new\"><span>+ <strong>\"";
  foundHelper = helpers.query;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.query; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"</strong> (create new)</span></li>\n                ";
  return buffer;}

  buffer += "<div class=\"dropdown-items-wrap ";
  stack1 = depth0.absolute;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-cid=\"";
  foundHelper = helpers.viewCid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.viewCid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    <ul class=\"dropdown-items\">\n        ";
  stack1 = depth0.items;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = depth0.allowCreate;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>";
  return buffer;});
templates['popup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <h1 class=\"modal-title tk-header\">";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h1>\n    ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <h2 class=\"modal-subtitle\">";
  foundHelper = helpers.subTitle;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\n    ";
  return buffer;}

function program5(depth0,data) {
  
  
  return "\n    <a href=\"javascript:void(0);\" class=\"modal-close\">&times;</a>\n    ";}

function program7(depth0,data) {
  
  
  return "\n            <a href=\"javascript:void(0);\" class=\"modal-close\">&times;</a>\n            ";}

  buffer += "<header class=\"modal-header hidden\">\n    ";
  stack1 = depth0.title;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = depth0.subTitle;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = depth0.noCloseButton;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</header>\n<div class=\"modal-body\"></div>\n<div class=\"loading hidden\"></div>\n<div class=\"modal-context hidden\">\n    <div class=\"modal-outer\">\n        <div class=\"modal-inner\">\n            ";
  stack1 = depth0.noCloseButton;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <span class=\"modal-context-message\"></span>\n        </div>\n    </div>\n</div>";
  return buffer;});
templates['contentPopup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"content-popup\">\n    ";
  stack1 = {};
  stack1['template'] = "popup";
  stack2 = depth0.title;
  stack1['title'] = stack2;
  stack2 = depth0.noCloseButton;
  stack1['noCloseButton'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;});
templates['actionDropdown'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n        <li data-cid=\"";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n            <a href=\"";
  stack1 = depth0.url;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n        </li>\n    ";
  return buffer;}
function program2(depth0,data) {
  
  var stack1, foundHelper;
  foundHelper = helpers.url;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);}

function program4(depth0,data) {
  
  
  return "javascript:void(0);";}

  buffer += "<ul class=\"action-dropdown ";
  foundHelper = helpers.dropdownClass;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dropdownClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    ";
  stack1 = depth0.actions;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;});
templates['modal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "animate";}

  buffer += "<div class=\"modal-view ";
  stack1 = depth0.animate;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  foundHelper = helpers.modalClass;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.modalClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    <div class=\"modal-outer\">\n        <div class=\"modal-inner\">\n            <div class=\"modal-wrap\">\n                ";
  stack1 = {};
  stack1['template'] = "popup";
  stack2 = depth0.title;
  stack1['title'] = stack2;
  stack2 = depth0.subTitle;
  stack1['subTitle'] = stack2;
  stack2 = depth0.noCloseButton;
  stack1['noCloseButton'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;});
templates['listEdit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var stack1, foundHelper;
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n                <input type=\"radio\" name=\"visibility\" id=\"list-edit-public\" value=\"public\" ";
  stack1 = depth0.visibility;
  stack2 = {};
  stack2['compare'] = "public";
  foundHelper = helpers.if_eq;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data}) : helperMissing.call(depth0, "if_eq", stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/>\n            ";
  return buffer;}
function program4(depth0,data) {
  
  
  return "checked";}

function program6(depth0,data) {
  
  
  return "\n                <input type=\"radio\" name=\"visibility\" id=\"list-edit-public\" value=\"public\" checked/>\n            ";}

function program8(depth0,data) {
  
  
  return "checked";}

function program10(depth0,data) {
  
  
  return "Create";}

function program12(depth0,data) {
  
  
  return "Save";}

function program14(depth0,data) {
  
  
  return "secondary";}

function program16(depth0,data) {
  
  
  return "\n        <button href=\"javascript:void(0)\" class=\"btn secondary list-edit-btn left\" id=\"list-destroy\">Delete List</button>\n        ";}

  buffer += "<form class=\"form-modal\">\n    <div class=\"wrapper-input\">\n        <label for=\"list-edit-name\">Name</label>\n        <input type=\"text\" value=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" id=\"list-edit-name\" maxlength=\"70\"/>\n    </div>\n    <div class=\"wrapper-input\">\n        <label for=\"list-edit-description\">Description</label>\n        <textarea id=\"list-edit-description\">";
  stack1 = depth0.description;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</textarea>\n    </div>\n\n    <div class=\"wrapper-input\">\n        <label for=\"list-edit-visibility\">Visibility</label>\n        <label for=\"list-edit-public\" class=\"label-inline\">\n            ";
  stack1 = depth0.visibility;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = depth0.visibility;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            Public\n        </label>\n        <label for=\"list-edit-private\" class=\"label-inline\">\n            <input type=\"radio\" name=\"visibility\" id=\"list-edit-private\" value=\"private\" ";
  stack1 = depth0.visibility;
  stack2 = {};
  stack2['compare'] = "private";
  foundHelper = helpers.if_eq;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(8, program8, data),data:data}) : helperMissing.call(depth0, "if_eq", stack1, {hash:stack2,inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/>\n            Private\n        </label>\n    </div>\n\n    <div class=\"modal-actions\">\n        <button href=\"javascript:void(0)\" class=\"btn primary action list-edit-btn right\" id=\"list-save\">";
  stack1 = depth0.isNew;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n        <button href=\"javascript:void(0)\" class=\"btn ";
  stack1 = depth0.isNew;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " list-edit-btn right\" id=\"list-cancel\">Cancel</button>\n        ";
  stack1 = depth0.isNew;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</form>";
  return buffer;});
templates['confirm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function";


  buffer += "<div class=\"confirm-wrap\">\n    <p class=\"confirm-message\">";
  foundHelper = helpers.message;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    <button class=\"btn secondary\" id=\"confirm-cancel\">No</button>\n    <button class=\"btn primary\" id=\"confirm\">Yes</button>\n</div>";
  return buffer;});
templates['newMessage'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <input type=\"hidden\" id=\"message-to\" value=\"";
  stack1 = depth0.selected;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.selected;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\n                ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <select id=\"message-to\" class=\"message-to chzn-select\" data-placeholder=\"-Select-\">\n                    <option value=\"\"></option>\n                    ";
  stack1 = depth0.contacts;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                    ";
  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;}
function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n                        <option value=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.username;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " (";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ")</option>\n                    ";
  return buffer;}

  buffer += "<form class=\"new-message-form\">\n    <div class=\"new-message-contacts-wrap\">\n        <label for=\"contacts\">\n            To:\n            ";
  stack1 = depth0.selected;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </select>\n        </label>\n    </div>\n    <label for=\"message-body\">\n        Message:\n        <textarea id=\"message-body\" class=\"message-body\"></textarea>\n    </label>\n    <div class=\"form-controls\">\n        <button id=\"cancel\" class=\"btn secondary left\">Cancel</button>\n        <button id=\"post-message\" class=\"btn disabled right\">Send</button>\n    </div>\n</form>";
  return buffer;});
templates['messageUser'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n<li class=\"contact-item\">\n    <a href=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n        <img src=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.thumbs;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.small;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" width=\"42\" height=\"42\" alt=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" >\n        <strong title=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack2 = {};
  stack2['max'] = 9;
  foundHelper = helpers.truncate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncate", stack1, {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + "\n        </strong><br>\n        <span title=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\n            ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack2 = {};
  stack2['max'] = 9;
  foundHelper = helpers.truncate;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2,data:data}) : helperMissing.call(depth0, "truncate", stack1, {hash:stack2,data:data});
  buffer += escapeExpression(stack1) + "\n        </span>\n    </a>\n</li>\n";
  return buffer;}

  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers['with'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
templates['messageUsers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\n            ";
  stack1 = {};
  stack1['template'] = "messageUser";
  stack2 = depth0.view;
  stack1['data'] = stack2;
  foundHelper = helpers.subtemplate;
  stack1 = foundHelper ? foundHelper.call(depth0, {hash:stack1,data:data}) : helperMissing.call(depth0, "subtemplate", {hash:stack1,data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;}

  buffer += "<section>\n    <h2>\n        Send a Message to:\n    </h2>\n    <ul class=\"list-contacts\">\n        ";
  stack1 = depth0.data;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n    <h4>Tools</h4>\n    <a href=\"#\">Blocked List</a>\n</section>";
  return buffer;});
templates['editUsername'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<label for=\"new-username\">New Username</label>\n<input id=\"new-username\" type=\"text\" value=\"";
  foundHelper = helpers.username;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"/>\n<p>Please note: You can only change your username once. This change cannot be reversed, and your old username will not become available for re-use.</p>\n\n<div class=\"popup-controls\">\n    <button class=\"btn small secondary left control-cancel\">Cancel</button>\n    <button class=\"btn small primary right control-save\">Update</button>\n</div>";
  return buffer;});
templates['signin'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "right inline";}

function program3(depth0,data) {
  
  
  return "\n            <button class=\"btn secondary right\" id=\"back\">Back</button>\n        ";}

  buffer += "<form action=\"";
  stack1 = depth0.uri;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.url;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" method=\"post\" class=\"form-modal large\">\n    <div class=\"wrapper-input\">\n        <label for=\"username\">Your Email or Username</label>\n        <input type=\"text\" name=\"user\" id=\"username\"/>\n    </div>\n    <div class=\"wrapper-input\">\n        <label for=\"password\">Your Password</label>\n        <input type=\"password\" name=\"pass\" id=\"password\"/>\n    </div>\n    <div class=\"left\"><a href=\"/reset-password\">Forgot your password?</a></div>\n    <input type=\"hidden\" name=\"_token\" id=\"token\" value=\"";
  stack1 = depth0.uri;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.token;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"/>\n    <input type=\"hidden\" name=\"_action\" value=\"auth\"/>\n    <input type=\"hidden\" name=\"next\" value=\"";
  foundHelper = helpers.next;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.next; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\"/>\n    <input type=\"hidden\" name=\"nativeSubmit\" value=\"1\"/>\n\n    <div class=\"modal-actions ";
  stack1 = depth0.noBackButton;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <input type=\"submit\" class=\"btn primary right\" value=\"Sign in\">\n        ";
  stack1 = depth0.noBackButton;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</form>";
  return buffer;});
templates['captcha'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n<p class=\"error-message\">";
  foundHelper = helpers.error;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.error; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\n";
  return buffer;}

  buffer += "<span class=\"sign-up-email\">Please prove you're human</span>\n";
  foundHelper = helpers.captcha;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.captcha; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<input type=\"submit\" class=\"btn primary large submit captcha\" value=\"Join\" data-type=\"captcha-join\"/>\n";
  stack1 = depth0.error;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;});
templates['forcedRegIndex'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1 class=\"signup-header tk-header\">Dive into Epic</h1>\n<p class=\"signup-text\">Torpedo boring. Escape ordinary. Surprise yourself.<br/>Stumble the best photos, videos, and websites<br/>on the entire Internet.</p>\n\n<a href=\"#\" class=\"connect-service\" data-service=\"facebook\" data-method=\"register\" data-context=\"authenticatedreferral\" data-success=\"";
  foundHelper = helpers.urlCurrent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.urlCurrent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" data-fail=\"/signup\">\n    <button class=\"btn large join\">Go!</button>\n</a>\n<a href=\"javascript:void(0);\" class=\"already-member\" id=\"sign-in\">Already a member? Sign in</a>";
  return buffer;});
templates['activity'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"tutorial\">\n    <div class=\"tutorial-strip\">\n        <div class=\"tutorial-strip-image tutorial-activity\"></div>\n        <h2 class=\"tutorial-strip-context\">See what the Stumblers you're following are doing\non StumbleUpon.</h2>\n    </div>\n    <p>We also show you activity from StumbleUpon experts. These are Stumblers that like popular pages. That means if they Liked it, we think you will, too.</p>\n    <div class=\"tutorial-example\">\n        <div class=\"tutorial-example-image\" title=\"stumble button example\"></div>\n        <p>Click the Stumble button to see these pages one at a time.</p>\n    </div>\n</div>";});
templates['discover'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"tutorial\">\n    <div class=\"tutorial-strip\">\n        <div class=\"tutorial-strip-image tutorial-discover\"></div>\n        <h2 class=\"tutorial-strip-context\">Here you can follow Interests, Stumblers, Channels, and Lists.</h2>\n    </div>\n    <p>The more you follow, the easier it will be to discover amazing websites, photos, and videos.</p>\n</div>";});
templates['lists'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"tutorial\">\n    <div class=\"tutorial-strip\">\n        <div class=\"tutorial-strip-image tutorial-lists\"></div>\n        <h2 class=\"tutorial-strip-context\">Lists are the best way to collect, organize, and share a personalized collection of pages.</h2>\n    </div>\n    <p>Click on a List to see and Stumble the pages inside.</p>\n    <p>To create and share your own Lists, click the + button on the StumbleBar or on any of the Likes in <a href=\"";
  foundHelper = helpers.urlProfile;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.urlProfile; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">Your Profile.</a></p>\n</div>";
  return buffer;});
templates['profile'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"tutorial\">\n    <div class=\"tutorial-strip\">\n        <div class=\"tutorial-strip-image tutorial-profile\"></div>\n        <h2 class=\"tutorial-strip-context\">This is where you'll find your Likes and Lists, plus your Stumbling history and all the things you follow.</h2>\n    </div>\n    <p>You'll also see your StumbleDNA, a colorful representation of the pages you've Liked on StumbleUpon.</p>\n</div>";});
templates['shares'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"tutorial\">\n    <div class=\"tutorial-strip\">\n        <div class=\"tutorial-strip-image tutorial-shares\"></div>\n        <h2 class=\"tutorial-strip-context\">When friends share Stumbles with you, this is where you'll see them.</h2>\n    </div>\n    <div class=\"tutorial-example\">\n        <div class=\"tutorial-example-image share\" title=\"stumble button example\"></div>\n        <p>Click the share button on the StumbleBar to post any page to your social networks or email it to your friends.</p>\n    </div>\n</div>";});
templates['trending'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"tutorial\">\n    <span class=\"title hidden\">This is the Trending page.</span>\n    <div class=\"tutorial-strip\">\n        <div class=\"tutorial-strip-image tutorial-trending\"></div>\n        <h2 class=\"tutorial-strip-context\">Here you can see the hottest websites, photos, and videos on StumbleUpon.</h2>\n    </div>\n    <div class=\"tutorial-example\">\n        <div class=\"tutorial-example-image\" title=\"stumble button example\"></div>\n        <p>Click the Stumble button to see these pages one at a time.</p>\n    </div>\n</div>";});
templates['yourInterests'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"tutorial\">\n    <div class=\"tutorial-strip\">\n        <div class=\"tutorial-strip-image tutorial-your-interests\"></div>\n        <h2 class=\"tutorial-strip-context\">This is your home page. Here you will find recommendations for pages in your interests.</h2>\n    </div>\n    <div class=\"tutorial-example\">\n        <div class=\"tutorial-example-image\" title=\"stumble button example\"></div>\n        <p>Click the Stumble button to see these pages one at a time.</p>\n    </div>\n</div>";});
templates['chooseInterests'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"tutorial\">\n    <div class=\"tutorial-strip\">\n        <div class=\"tutorial-strip-image tutorial-your-interests\"></div>\n        <h2 class=\"tutorial-strip-context\">Start by picking things you like so we can show you pages based on your Interests.</h2>\n    </div>\n    <p>Feel free to experiment - you can always add or edit your Interests later.</p>\n</div>";});
templates['visitNewSite'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"adx-new-site\">\n    <h1 class=\"header tk-header\">The Internet should not taste like chicken.</h1>\n    <p class=\"intro\">Add some flavor to your Internet diet.<br>Try the all new Stumbleupon.com.</p>\n    <a href=\"javascript:void(0);\" class=\"btn primary modal-close\">Try It Now</a>\n</div>";});
templates['createNewList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"adx-new-list\">\n    <h1 class=\"header tk-header\">Create a List.</h1>\n    <h2 class=\"subhead tk-header\">It's fun and probably makes you a better person.</h2>\n    <p class=\"intro\">Click the + button to create a List<br>of all your favorite stuff.</p>\n    <a href=\"javascript:void(0);\" class=\"btn primary modal-close\">Try It Out</a>\n</div>";});
templates['yearInReview2012'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"adx-year-in-review-2012\">\n    <h1 class=\"header tk-header\">Stumble THIS List<br>and Win Sweet Prizes.</h1>\n    <p class=\"intro\">We're celebrating 2012's most epic moments with an awesome sweepstakes. To enter, just Stumble the List below!</p>\n</div>";});
templates['submit_wall'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"modal-reg-header\">\n    <a class=\"logo-primary ir\" href=\"/\">StumbleUpon</a>\n    <span>Already on StumbleUpon? <a href=\"/login\">Login</a></span>\n</div>\n<h1>Please Register to Submit</h1>\n<ul>\n    <li>Discover great web pages, videos, and photos tailored to your interested.</li>\n    <li>Share your discoveries by submitting content you find on the web.</li>\n    <li>Make lists of all the best of StumbleUpon.</li>\n</ul>\n<section class=\"reg-actions\">\n    <a href=\"#\" class=\"connect-service btn-social facebook\" data-service=\"facebook\" data-method=\"login\" data-success=\"/home\">Connect with <strong>Facebook</strong></a>\n    <span>or</span>\n    <a href=\"/signup?pre=submit\" class=\"email-signup\">Sign Up with Email</a>\n</section>";});
templates['fb_login'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img class=\"profile-thumb\" src=\"http://graph.facebook.com/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "/picture?type=large\"/>\n<h2 class=\"login-header\">Welcome back ";
  foundHelper = helpers.first_name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "!</h2>\n<a href=\"#\" id=\"fb-return-login\" class=\"connect-service btn-social facebook\" data-service=\"facebook\" data-method=\"login\" data-success=\"";
  foundHelper = helpers.href;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">Login with <strong>Facebook</strong></a>";
  return buffer;});
templates['fbLoginV82'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img class=\"profile-thumb\" src=\"http://graph.facebook.com/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "/picture?type=large\"/>\n<h2 class=\"login-header\">Welcome back ";
  foundHelper = helpers.first_name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "!</h2>\n<a href=\"javascript:;\" id=\"fb-return-login\" class=\"btn primary cta connect-service\"data-service=\"facebook\" data-method=\"login\" data-success=\"";
  foundHelper = helpers.href;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">Start Stumbling Now</a>";
  return buffer;});
templates['emailRegCaptcha'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <div class=\"alert-message error\">\n        <p><strong></strong>";
  foundHelper = helpers.error;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.error; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\n    </div>\n    <div id=\"captcha-wrapper\">\n";
  return buffer;}

function program3(depth0,data) {
  
  
  return "\n    <div id=\"captcha-wrapper\" style=\"display:none\">\n";}

  buffer += "<h2>Prove you're human:</h2>\n<a class=\"connect-service btn-social facebook\">With <strong>Facebook</strong></a>\n<span>or</span>\n<a class=\"btn-social no-logo open\">With Captcha</a>\n<hr>\n";
  stack1 = depth0.error;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = depth0.error;
  stack2 = {};
  stack1 = helpers.unless.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  foundHelper = helpers.captchaSnippet;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.captchaSnippet; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <button class=\"btn primary left submit\" type=\"submit\">Submit</button>\n</div>";
  return buffer;});
})();
