/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);/**
 * Base.js
 *
 * @author jrylan
 */

// Globals
var Base, Browser, $, jQuery, press, $win, $doc, $body, clone, extend;

(function(){
/*******************************************************************************
 * Define global variables
 ******************************************************************************/
    window.Base = Base = {
        _init: {},

        addInit: function(name, callback){
            Base._init[name] = callback;
        },

        initialize: function(inits) {
            // Execute on DOM ready state
            $(function() {
                for (var prop in inits) {
                    if (Base._init[prop]) {
                        Base._init[prop]( inits[prop] );
                    }
                }

                if (Base._init.ready) {
                    Base._init.ready(inits);
                }
            });
        }
    };


    window.Browser = Browser = {};
    window.$ = $ = jQuery = window.jQuery || window.jq;
    window.press = "click";
    window.$win = $win = $(window);
    window.$doc = $doc = $(document);
    window.$body = null;

    $(function(){
        window.$body = $body = $("body");
    });


/*******************************************************************************
 * Object methods
 ******************************************************************************/

    /**
     * Clone an object
     *
     * @param none
     * @returns object Clones object
     */
    window.clone = clone = function(obj) {
        var newObj = (obj instanceof Array) ? [] : {};
        for (i in obj) {
            if (i == "clone") {
                continue;
            }

            if (obj[i] && typeof obj[i] == "object") {
                newObj[i] = clone(obj[i]);
            }
            else {
                newObj[i] = obj[i];
            }
        }

        return newObj;
    };


    /**
     * Extend an object
     *
     * Accepts an unlimited number of parameters, the first parameter is extended
     * directly with the properties of each object provided.
     *
     * @param object Object to extend
     * @param object Unlimited number of objects to extend from
     * @returns object The modified version of the original object
     */
    window.extend = extend = function() {
        var root = arguments[0];

        for (var i=1, obj; obj=arguments[i]; i++) {
            for (var prop in obj) {
                root[prop] = obj[prop];
            }
        };

        return root;
    };





    // Shared empty constructor function to aid in prototype-chain creation.
    var ctor = function(){};

    // Helper function to correctly set up the prototype chain, for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    var inherits = function(parent, protoProps, staticProps) {
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call `super()`.
        if (protoProps && protoProps.hasOwnProperty('constructor')) {
          child = protoProps.constructor;
        } else {
          child = function(){ return parent.apply(this, arguments); };
        }

        // Inherit class (static) properties from parent.
        extend(child, parent);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) {
            extend(child.prototype, protoProps);
        }

        // Add static properties to the constructor function, if supplied.
        if (staticProps) {
            extend(child, staticProps);
        }

        // Correctly set child's `prototype.constructor`.
        child.prototype.constructor = child;

        // Set a convenience property in case the parent's prototype is needed later.
        child.__super__ = parent.prototype;

        return child;
    };










/*******************************************************************************
 * Base
 *
 * These base classes are never meant to be used directly, hence the term `Base`.
 * You should always create new variable and extend one of these classes.
 *
 * Ex:
 * var foo = Base.Controller.extend({
 *  foo: function() {}
 * });
 *
 * new Foo;
 ******************************************************************************/

Base.extend = function (protoProps, classProps) {
    var child = inherits(this, protoProps, classProps);
    child.extend = this.extend;
    return child;
};


/*******************************************************************************
 * Events
 ******************************************************************************/

/*
 * Extends an object to provide observer pattern pub/sub methods.
 *
 * Ex:
 * extend(Foo.prototype, Base.Events);
 *
 * Now you have access to bind, unbind and trigger for every instance of that object.
 */
Base.Events = {
    /**
     * Bind an event listener to a property
     *
     * @param string ev Event to listen to, ex: "change:foo", "remove:foo"
     * @param object [optional] Data to pass to the callback
     * @param function callback method to execute
     * @returns object self
     */
    bind: function(ev, callback, data) {
        var calls = (this._callbacks || (this._callbacks = {})),
            list;

        list = calls[ev] || (calls[ev] = []);
        list.push([callback, data]);

        return this;
    },


    /**
    * Remove one or many callbacks.
    *
    * @param string ev Event to unbind. If (`null` || "all"), removes all bound callbacks for all events
    * @param function callback If null, removes all callbacks for the event.
    * @returns object self
    */
    unbind: function(ev, callback) {
        var calls, list, i, item;

        if (ev == "all") {
            this._callbacks = {};
        }

        else if (calls = this._callbacks) {
            if (!callback) {
                calls[ev] = [];
            } else {
                list = calls[ev];

                if (!list) {
                    return this;
                }

                for (i = 0; item=list[i]; i++) {
                    if (item && callback === item[0]) {
                        item = null;
                        break;
                    }
                }
            }
        }
        return this;
    },


    /**
    * Trigger an event, firing all bound callbacks.
    *
    * Callbacks are passed the same arguments as `trigger` is, apart from the event
    * name. Listening for `"all"` passes the true event name as the first argument.
    *
    * @params string eventName The event to trigger
    * @returns object self
    */
    trigger: function(eventName) {
        if (!this._callbacks) {
            return;
        }

        var calls = [], i, event,
            params = Array.prototype.slice.call(arguments, 1);


        if (calls = this._callbacks[eventName]) {
            for (i=0; event=calls[i]; i++) {
                if (event[1]) {
                    params.unshift(this);
                    event[0].apply(event[1], params);
                } else {
                    event[0](this, params);
                }
            }
        }

        return this;
    }
};






/*******************************************************************************
 * Model
 ******************************************************************************/

/**
 * Base model
 *
 * @param object attributes Properties to add to the model
 */
Base.Model = function( attributes ) {
    var arg = arguments[0],
        controller = arg instanceof Base.Controller ? arg : null,
        $el = arg instanceof $ ? arg : null,
        attributes = !controller && !$el ? arg : {};

    if (controller) {
        // Does this model have it's own restURL?
        if (this.restURL) {
            this.sync = new Base.Sync(this.restURL);
        }

        // If not, use the restURL and `sync method provided by the controller.
        else if (controller.sync) {
            this.sync = controller.sync;
        }
        return this;
    }

    if ($el) {
        this.$el = $el;
        attributes = Base.View.prototype.extractData($el);
    }

    var _defaults = clone(this.defaults);
    attributes = extend(_defaults, attributes);

    this.attributes = {};
    this._changed = false;

    this._previousAttributes = clone(attributes);
    this.set(attributes, {silent:true});

    this.initialize.apply(this, Array.prototype.slice.call(arguments, 1));

    return this;
};

    /**
     * Extend the prototype object
     */
    Base.Model.extend = Base.extend;

    extend(Base.Model.prototype, Base.Events, {
        /**
         * Default attributes
         */
        defaults: {},

        idAttribute: "id",


        /**
         * A snapshot of the model's previous attributes, taken immediately
         * after the last `"change"` event was fired.
         */
        _previousAttributes: null,


        /**
         * Initialize is an empty function by default. Override it with your own
         * initialization logic.
         */
        initialize: function(){},


        /**
         * Return a copy of the model's `attributes` object.
         */
        toJSON: function() {
              return this.attributes;
        },


        /**
         * Get the value of an attribute.
         */
        get: function(attr) {
              return this.attributes[attr] || null;
        },


        /**
         * Get the int value of an attribute.
         */
        getInt: function(attr, radix) {
            var value = parseInt(this.get(attr), radix);
            return !isNaN(value) ? value : 0;
        },


        /**
         * Get the HTML-escaped value of an attribute.
         */
        getEscaped: function(attr) {
              var val = this.attributes[attr];
              return window.Utils.escapeHTML(val == null ? '' : '' + val);
        },


        /**
         * Returns `true` if the attribute contains a value that is not null
         * or undefined.
         */
        has: function(attr) {
            if (!window.Utils.isArray(attr)) {
                return (this.get(attr) !== null);
            } else {
                for (var i = 0, a; a=attr[i]; i++) {
                    if (this.get(a) === null) {
                        return false;
                    }
                }

                return true;
            }
        },


        /**
         * Set a hash of model attributes on the object, firing `"change"` unless you
         * choose to silence it.
         */
        set: function(attrs) {
            this.attributes = this.attributes || {};
            this._previousAttributes = this._previousAttributes || {};

            var now = this.attributes,
                prev = this._previousAttributes,
                data = {},
                options = {};

            if (typeof attrs == "string") {
                data[attrs] = arguments[1];
                options = arguments[2] || {};
            } else {
                data = attrs;
                options = arguments[1] || {};
            }

            // Run validation.
            if (!options.silent && this.validate && !this._performValidation(data, options)) {
                return false;
            }

            if (this.idAttribute in data) {
                this[this.idAttribute] = data[this.idAttribute];
            }

            // We're about to start triggering change events.
            var alreadyChanging = this._changing;
            this._changing = true;

            // Update attributes.
            for (var attr in data) {
                var val = data[attr];
                now[attr] = now[attr] || null;
                if (now[attr] !== val) {
                    prev[attr] = now[attr];
                    now[attr] = val;
                    if (!options.silent) {
                        this.trigger('change:' + attr, val);
                    }
                }
            }

            // Fire the `"change"` event, if the model has been changed.
            if (!alreadyChanging && !options.silent && this._changed) {
                this.trigger("all");
            }

            this._changing = false;
            return this;
        },


        setInt: function(attr, value) {
            var radix = null,
                options = {},
                arg2Type = arguments[2] ? typeof arguments[2] : false;

            if (arg2Type == "number") {
                radix = arguments[2];
            }
            else if (arg2Type == "object") {
                options = arguments[2];
            }

            if (arguments[3]) {
                options = arguments[3];
            }

            value = parseInt(value, radix);
            value = !isNaN(value) ? value : 0;

            return this.set(attr, value, options);
        },



        // Remove an attribute from the model, firing `"change"` unless you choose
        // to silence it. `unset` is a noop if the attribute doesn't exist.
        unset: function(attr, options) {
            if (!(attr in this.attributes)) {
                  return this;
            }

            options = options || {};

            // Run validation.
            var validObj = {};
            validObj[attr] = void 0;

            if (!options.silent && this.validate && !this._performValidation(validObj, options)) {
                return false;
            }

            // Remove the attribute.
            delete this.attributes[attr];
            this._changed = true;

            if (!options.silent) {
                this.trigger("change:" + attr);
                this.trigger("all");
            }

            return this;
        },

        // **parse** converts a response into the hash of attributes to be `set` on
        // the model. The default implementation is just to pass the response along.
        parse: function(resp, xhr) {
            return resp;
        },

        // Set a hash of model attributes, and sync the model to the server.
        // If the server returns an attributes hash that differs, the model's
        // state will be `set` again.
        save: function(options) {
            if (!this._changed) {
                return true;
            }

            options || (options = {});
            var model = this,
                success = options.success;

            options.success = function(resp, status, xhr) {
                if (!model.set(model.parse(resp, xhr), options)) {
                    return false;
                }

                if (success) {
                    success(model, resp, xhr);
                }
            };

            options.error = wrapError(options.error, model, options);

            var method = model.get("id") ? 'create' : 'update';
            return this.sync[method](this.toJSON(), options).success(function(response) {
                if (response.success && response.success === true) {
                    model._changed = false;
                }
            });
        },



        // Destroy this model on the server if it was already persisted. Upon success, the model is removed
        // from its collection, if it has one.
        destroy: function(options) {
            options || (options = {});
            if (this.isNew()) {
                return this.trigger("destroy", this, this.collection, options);
            }

            var model = this,
                success = options.success;

            options.success = function(resp) {
                model.trigger('destroy', model, model.collection, options);
                if (success) {
                    success(model, resp);
                }
            };

            options.error = wrapError(options.error, model, options);
            return this.sync.del.call(this, options);
        },


        // Create a new model with identical attributes to this one.
        clone: function() {
              return new this.constructor(this);
        },


        // Run validation against a set of incoming attributes, returning `true`
        // if all is well. If a specific `error` callback has been passed,
        // call that instead of firing the general `"error"` event.
        _performValidation: function(attrs, options) {
              var error = !this.validate(this);
              if (error) {
                if (options.error) {
                  options.error(this, error, options);
                } else {
                  this.trigger('error', error, options);
                }
                return false;
              }
              return true;
        }
    });











  // Base.Collection
  // -------------------

  // Provides a standard collection class for our sets of models, ordered
  // or unordered. If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  Base.Collection = function(controller) {
    if (!controller) {
        return this;
    }

    if (controller.sync) {
        this.sync = controller.sync;
    }

    this._reset();
    this.initialize.apply(this, Array.prototype.slice.call(arguments, 1));
  };

    Base.Collection.extend = Base.extend;

    extend(Base.Collection.prototype, Base.Events, {
        // The default model for a collection is just a **Base.Model**.
        // This should be overridden in most cases.
        model: Base.Model,

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // The JSON representation of a Collection is an array of the
        // models' attributes.
        toJSON: function() {
            var models = [];

            for (var i=0, model; model=this.models[i]; i++) {
                models.push( model.toJSON() );
            }

            return models;
        },

        // Add a model, or list of models to the set. Pass **silent** to avoid
        // firing the `added` event for every new model.
        add: function(data, options) {
            options = options || {};

            if (!this.models) {
                options.silent = true;
            }

            if (data instanceof $) {
                this._add(Base.View.prototype.extractData(data), options);
            }

            else if (window.Utils.isArray(data)) {
                for (var i = 0, l = data.length; i < l; i++) {
                    this._add(data[i], options);
                }
            } else {
                this._add(data, options);
            }

            return this;
        },

        // Remove a model, or a list of models from the set. Pass silent to avoid
        // firing the `removed` event for every model removed.
        remove: function(models, options) {
              if (Utils.isArray(models)) {
                for (var i = 0, l = models.length; i < l; i++) {
                  this._remove(models[i], options);
                }
              } else {
                this._remove(models, options);
              }
              return this;
        },

        // Get a model from the set by id.
        getById: function(id) {
            return this._byId[id];
        },

        // When you have more items than you want to add or remove individually,
        // you can reset the entire set with a new list of models, without firing
        // any `added` or `removed` events. Fires `reset` when finished.
        reset: function(models, options) {
              models  || (models = []);
              options || (options = {});

              this._reset();
              this.add(models, {silent: true});

              if (!options.silent) {
                  this.trigger("reset", this, options);
              }
              return this;
        },

        // Create a new instance of a model in this collection. After the model
        // has been created on the server, it will be added to the collection.
        // Returns the model, or 'false' if validation on a new model fails.
        create: function(model, options) {
              var coll = this;
              options || (options = {});
              model = this._prepareModel(model, options);
              if (!model) {
                  return false;
              }

              var success = options.success;

              options.success = function(nextModel, resp, xhr) {
                coll.add(nextModel, options);
                if (success) {
                    success(nextModel, resp, xhr);
                }
              };

              model.save(null, options);
              return model;
        },


        // Reset all internal state. Called when the collection is reset.
        _reset: function(options) {
              this.length = 0;
              this.models = [];
              this._byId  = {};
        },

        // Prepare a model to be added to this collection
        _prepareModel: function(model, options) {
            if (!(model instanceof Base.Model)) {
                var attrs = model;
                model = new this.model(attrs, {collection: this});
                if (model.validate && !model._performValidation(attrs, options)) {
                    model = false;
                }
                else if (!model.collection) {
                    model.collection = this;
                }

                return model;
            }
        },

        // Internal implementation of adding a single model to the set, updating
        // hash indexes for `id` lookups.
        // Returns the model, or 'false' if validation on a new model fails.
        _add: function(model, options) {
            var self = this;
            options || (options = {});
            model = this._prepareModel(model, options);

            if (!model) {
                return false;
            }

            var already = this.getById( model[this.model.prototype.idAttribute] );
            if (already) {
                throw new Error(["Can't add the same model to a set twice", already.id]);
            }

            if (this.sync) {
                model.sync = this.sync;
            }

            model.collection = this;

            if (typeof model.attributes[this.model.prototype.idAttribute] !== "undefined") {
                this._byId[ model[this.model.prototype.idAttribute] ] = model;
            }

            this.models.push(model);
            this.length++;

            model.bind('all', function(){
                self._onModelEvent(arguments);
            });

            if (!options.silent) {
                this.trigger('add', model, options);
            }

            return model;
        },

        // Internal implementation of removing a single model from the set, updating
        // hash indexes for `id` lookups.
        _remove: function(model, options) {
            options || (options = {});

            if (model.id) {
                delete this._byId[model.id];
            }

            this.models.splice(this.models.indexOf(model), 1);
            this.length--;

            if (!options.silent) {
                this.trigger('remove', model, options);
            }

            this._removeReference(model);
            return model;
        },

        // Internal method to remove a model's ties to a collection.
        _removeReference: function(model) {
            if (this == model.collection) {
                delete model.collection;
            }
            model.unbind('all', this._onModelEvent);
        },

        // Internal method called every time a model in the set fires an event.
        // Sets need to update their indexes when models change ids. All other
        // events simply proxy through. "add" and "remove" events that originate
        // in other collections are ignored.
        _onModelEvent: function(ev, model, collection, options) {
            if ((ev == 'add' || ev == 'remove') && collection != this) {
                return;
            }

            if (ev == 'destroy') {
                this._remove(model, options);
            }

            this.trigger.apply(this, arguments);
        }
    });






    // Base.View
    // -------------
    Base.View = function(controller) {
        if (!controller) {
            return this;
        }

        if (controller.$el) {
            this.$el = controller.$el;
        }

        controller.__view__ = this;


        this.initialize.apply(this, Array.prototype.slice.call(arguments, 1));
    };

    Base.View.extend = Base.extend;

    extend(Base.View.prototype, Base.Events, {
        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        findModelElement: function($el, idAttrName) {
            try {
                var $parent = $el.parent(),
                    parentId = $parent.data(idAttrName);

                if (parentId) {
                    return $parent;
                } else {
                    return Base.View.prototype.findModelElement($parent, idAttrName);
                }
            } catch (e) {
                return false;
            }
        },

        extractData: function($el) {
            return $el.data();
        }
    });






    /**
     * Base.Sync is utilized directly within models and collections
     */
    Base.Sync = function(restURL) {
        this._settings = {};
        this._data = {};

        if (restURL) {
            this._settings.url = restURL;
        }

        this._methodData = {
            "GET" : {},
            "PUT" : {},
            "DELETE" : {},
            "POST" : {}
        }

        extend(this._data, Base.Sync.prototype._data);

        extend(this._methodData.GET, Base.Sync.prototype._methodData.GET);
        extend(this._methodData.PUT, Base.Sync.prototype._methodData.PUT);
        extend(this._methodData.DELETE, Base.Sync.prototype._methodData.DELETE);
        extend(this._methodData.POST, Base.Sync.prototype._methodData.POST);

        return this;
    };

    extend(Base.Sync.prototype, {
        _data: {},

        _methodData: {
            "GET" : {},
            "PUT" : {},
            "DELETE" : {},
            "POST" : {}
        },

        set: function() {
            var method,
                data;

            if (typeof arguments[0] == "object") {
                method = null;
                data = arguments[0];
            } else {
                method = arguments[0];
                data = arguments[1];
            }

            if (!method) {
                extend(this._data, data);
            } else {
                extend(this._methodData[method], data);
            }
        },

        emulateMethods: function(methodParam) {
            this._methodParam = methodParam;
        },

        _process: function(type, method, model, params) {
            var prefix;
            params = params || {};
            extend(params, this._settings);
            if (params.url && !params.url.match('login|submit|/to')) {
                prefix = params.url.match('\\?') ? '&' : '?';
                params.url = params.url + prefix + $.param({'_nospa': true});
            }
            params.type = type;
            params.data = (model instanceof Base.Model) ? model.toJSON() : model;

            params.data = extend({}, this._data, this._methodData[type], params.data);

            if (this._methodParam) {
                params.data[ this._methodParam ] = method;
                if (params.type != "GET") {
                    params.type = "POST";
                }
            }

            if (params.data._output != "html") {
                params.dataType = "json";
            }

            return $.ajax(params);
        },

        create: function(model, params) {
            return this._process("POST", "create", model, params);
        },

        read: function(model, params) {
            return this._process("GET", "read", model, params);
        },

        update: function(model, params) {
            return this._process("PUT", "update", model, params);
        },

        del: function(model, params) {
            return this._process("DELETE", "delete", model, params);
        }
    });








    Base.Controller = function(options) {
        if (this.selector) {
            this.$el = typeof this.selector == "object" ? this.selector : $(this.selector);
        } else {
            this.$el = $body;
        }

        if (this.restURL) {
            this.sync = new Base.Sync(this.restURL);
        }

        this.initialize(options);

        return this;
    };

    Base.Controller.extend = Base.extend;

    // Cached regex to split keys for `delegate`.
    var eventSplitter = /^(\S+)\s*(.*)$/;

    extend(Base.Controller.prototype, Base.Events, {
        // The default model for a collection is just a **Base.Model**.
        // This should be overridden in most cases.
        model: Base.Model,

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},


        // Set callbacks, where `this.callbacks` is a hash of
        //
        // *{"event selector": "callback"}*
        //
        //     {
        //        'mousedown .title':  'edit',
        //        'click .button':     'save'
        //     }
        //
        // pairs. Callbacks will be bound to the view, with `this` set properly.
        // Uses event delegation for efficiency.
        // Omitting the selector binds the event to `this.$el`.
        // This only works for delegate-able events: not `focus`, `blur`, and
        // not `change`, `submit`, and `reset` in Internet Explorer.
        //
        // Source is either a collection or a boolean.
        // Hence, pass false to bypass preventDefault()

        bindEvents: function() {
            var source, events, key, callback;

            if (arguments.length === 1) {
                source = null;
                events = arguments[0];
            } else {
                source = arguments[0];
                events = arguments[1];
            }

            for (key in events) {
                if (typeof events[key] == "string") {
                    callback = this[ events[key] ];
                } else {
                    callback = events[key];
                }

                this._bindEvent(source, key, callback);
            }

            return this;
        },

        _bindEvent: function(source, key, callback) {
            var self = this,
                events,
                noDelegation = ["focus", "blur", "change", "submit", "reset"],
                method;


            if (!source) {
                method = function(event) {
                    if (source !== false) {
                        event.preventDefault();
                    }
                    var $this = $(this);
                    callback.call(self, $this, event);
                };
            }


            else if (source instanceof Base.Model) {
                method = function(event) {
                    event.preventDefault();
                    callback.call(self, source, event);
                };
            }

            else { // (data instance of Base.Collection)
                method = function(event) {
                    event.preventDefault();

                    var $this = $(this),
                        model = null,
                        id = null,
                        data = null,
                        $el,
                        idAttrName = source.model.prototype.idAttribute,
                        id = $this.data(idAttrName);

                    if (typeof id != "undefined") {
                        model = source.getById(id);

                        if (!model) {
                            source.add( Base.View.prototype.extractData($this) );
                            model = source.getById(id);
                            model.$el = $this;
                        }
                    }

                    // The parent has already been found before, we know the model exists
                    if (!model && ( id = $this.data("__id__") ) ) {
                        model = source.getById(id);
                    }

                    if (!model && ( $el = Base.View.prototype.findModelElement($this, idAttrName) )) {
                        data = Base.View.prototype.extractData($el);
                        model = source.getById(data[idAttrName]);

                        if (!model) {
                            source.add(data);
                            model = source.getById(data[idAttrName]);
                        }

                        if (model) {
                            model.$el = $el;
                        }

                        $this.data("__id__", data[idAttrName]);
                    }

                    if (model) {
                        callback.call(self, model, event);
                    } else {
                        // todo: throw an error here
                    }
                };
            }


            var match = key.match(eventSplitter);

            if (match[1] == "press") {
                match[1] = press;
            }

            var eventName = match[1],
                selector = match[2];

            eventName += ".delegateEvents";

            if (selector === "") {
                this.$el.bind(eventName, method);
            } else {
                if (!Utils.inArray(match[1], noDelegation)) {
                    this.$el.delegate(selector, eventName, method);
                } else {
                    this.$el.find(selector).live(eventName, method);
                }
            }
        },


        _bindPaginationEvents: function() {
            var self = this;
            this.$el.delegate(".pagination a", (press + ".delegateEvents"), function(e){
                e.preventDefault();

                self.__router__.navigate( $(this).attr("href") );
            });

            this.$el.delegate(".pagination input[type=text]", "keydown.delegateEvents", function(e){
                if (e.which > 31 && (e.which < 48 || e.which > 57)) {
                    return false;
                }

                return true;
            });

            var goToPage = function() {
                var $input = self.$el.find(".pagination input[type=text]"),
                    page = parseInt( $input.val() ),
                    max = parseInt( $input.data("max") ),
                    current = parseInt( $input.data("current") ),
                    perPage = parseInt( $input.data("perpage") );

                if (!isNaN(page) && page > 0 && page <= max && page != current) {
                    var newPage = isNaN(perPage) ? page : ((page - 1) * perPage)
                    self.__router__.navigate( _Router.getPageURL(newPage) );
                }
            };

            this.$el.delegate(".pagination input[type=text]", "keyup.delegateEvents", function(e){
                if (e.which == 13) {
                    goToPage();
                }
            });

            this.$el.delegate(".pagination button", (press + ".delegateEvents"), function(e){
                goToPage();
            });
        },

        unbindEvents: function(){
            this.$el.unbind(".delegateEvents");
            return this;
        },


        __attemptFetchState__: function(routeObj) {
            if (_Router.extractParameters(routeObj, routeObj._url) && _Router.updateParameters(routeObj)) {
                routeObj.trigger("pending");
                this.fetchState();
            }
        }
    });




    // Cached regular expressions for matching named param parts and splatted
    // parts of route strings.
    var namedParam    = /:([\w\d]+)/g,
        splatParam    = /\*([\w\d]+)/g,
        sanitizeRoute = /[[\]{}()+?.,\\^$|#\s][:|\[\\d\]\+]?/g,
        stripPage     = /\/\d+\/?$/;

    var _Router = {
        patterns: {},

        initialize: function(routeObj, config) {
            var popped = false;

            if (!this._initialized && Browser.supports("pushState")) {
                window.onpopstate = function(event) {
                    popped = true;
                    _Router.pop(event);
                    return true;
                };
            }

            // Give Webkit time to register an empty popstate
            setTimeout(function(){
                if (!popped) {
                    if (_Router.extractParameters(routeObj, _Router.getLocation()) && _Router.updateParameters(routeObj)) {
                        routeObj.trigger("fetch-state");
                    }
                }
            }, 250);

            this._initialized = true;
        },

        pop: function(event) {
            var pattern, routeObj, params,
                currentURL = this.getLocation();

            for (pattern in this.patterns) {
                routeObj = this.patterns[pattern];

                if (this.extractParameters(routeObj, currentURL)) {
                    this.updateParameters(routeObj);
                    routeObj.event = event || {state:{}};
                    routeObj._source = "pop";
                    routeObj._prevURL = routeObj._url;
                    routeObj._url = currentURL;
                    routeObj.trigger("fetch-state");
                    break;
                }
            }
        },

        getBaseURL: function() {
            return window.location.pathname.replace(stripPage, "");
        },

        getPageURL: function(page) {
            var url = this.getBaseURL();
            if (page > 1) {
                url = url + "/" + page
            }
            return this.formatLocation(url);
        },

        getLocation: function() {
            return this.formatLocation(window.location.pathname);
        },

        formatLocation: function(location) {
            if (window.location.search.length > 0) {
                location = location + window.location.search;
            }

            if (window.location.hash.length > 0) {
                location = location + window.location.hash;
            }

            return location;
        },

        triggerUpdate: function(routeObj) {
            window.history[routeObj._method](routeObj._state, routeObj._title, routeObj._url);
        },

        // Convert a route string into a regular expression, suitable for matching
        // against the current location hash.
        routeToRegExp: function(route) {
            route = route//.replace(escapeRegExp, "\\$&")
                    .replace(namedParam, "[^\/]*")
                    .replace(splatParam, "(.*?)");

            return new RegExp('^' + route);
        },

        routeToParams: function(route) {
            var pattern = route.replace(namedParam, "[^\/]*");
            route = route.replace(sanitizeRoute, "");

            //route = route.replace("[\\d]+", "");
            var params = new RegExp('^' + pattern + '$').exec(route).slice(1);
            var lastIndex = params.length - 1 ;

            if (typeof params[lastIndex] == "undefined") {
                params[lastIndex] = "page";
            }

            return params;
        },

        // Given a route, and a URL fragment that it matches, return the array of
        // extracted parameters.
        extractParameters: function(routerObj, fragment) {
            var match = routerObj._regex.exec(fragment);

            if (match) {
                match = match.slice(1);
                var data = clone( routerObj.defaults );

                for (var i=0, val; val=match[i]; i++) {
                    data[ routerObj._paramNames[i] ] = val;
                }

                data.page = data.page || 1;

                if (!routerObj.validate || (routerObj.validate && routerObj.validate(data))) {
                    routerObj._tempParams = data;
                    return true;
                }
            }

            return false;
        },

        updateParameters: function(router) {
            for (var key in router._tempParams) {
                router.params[key] = router._tempParams[key];
                if (router._initialized) {
                    router.trigger("change:" + key);
                }
            }

            if (router._initialized) {
                router.trigger("all");
            }

            router._initialized = true;
            return true;
        },

        changeState: function() {
            // `this` is scoped to the Base.Router instance
            this._url = null;
            this._state = null;
            this._title = null;
            this._source = "direct";
            this._method = "pushState";

            var arg0Type = typeof arguments[0],
                arg1Type = typeof arguments[1],
                arg2Type = typeof arguments[2];

            if (arg0Type == "string") {
                this._url = arguments[0];

                if (this._url.indexOf("http://") > -1 || this._url.indexOf("https://") > -1) {
                    this._url = this._url.replace("http://", "").replace("https://", "");
                    this._url = this._url.substr( this._url.indexOf("/") );
                }
            }
            else if (arg0Type == "object") {
                this._method = "replaceState";
                this._state = arguments[0];
            }

            if (arg1Type == "object") {
                this._state = arguments[1];
            }
            else {
                this._title = arguments[1];
            }

            if (arg2Type == "string") {
                this._title = arguments[2];
            }

            if (Browser.supports("pushState")) {
                this.trigger("attempt-fetch-state");
            } else {
                window.location = this._url;
            }
        }
    };



/*
    How to use Base.Router:

    var Router = Base.Router.extend({
        pattern: "likes/?(:section)?/?(:filter)", // `?` denotes optional characters or sections
        pagination: true, // Optional, if set to true, pagination links and input fields events will be binded
        defaults: {
            "section": "all",
            "filter": null
        },

        // If this method returns false, the URL will not be updated, and
        // `fetchState` in the controller will never be accessed.
        validate: function(params) {
            return true;
        }
    });


    var Foo = Base.Controller.extend({
        initialize: function() {
            this.route = new Router(this);

            this.route.bind("change:section", function(route){
                console.log(route.get("section"));
            });

            this.route.bind("all", this.view.stateUpdate);
        },

        fetchState: function(route) {
            console.log("section", this.route.get("section"));
            // fetch some stuff via AJAX here
            route.trigger("ready"); // Updates the URL
        }
    });
 */
    Base.Router = function(controller) {
        if (controller) {
            var self = this;
            controller.__router__ = this;

            this.bind("fetch-state", function(){
                this._url = _Router.getLocation();
                controller.fetchState();
            });
            this.bind("attempt-fetch-state", function(){
                controller.__attemptFetchState__.apply(controller, arguments);
            });
            this.bind("ready", function(){
                _Router.triggerUpdate(self);
                self._prevURL = self._url;
            });

            if (controller.__view__) {
                this.bind("pending", controller.__view__.pageUpdateInProgress, controller.__view__);
                this.bind("ready", controller.__view__.pageUpdateCompleted, controller.__view__);
                this.bind("error", controller.__view__.pageUpdateError, controller.__view__);
            }

            if (this.pagination === true) {
                controller._bindPaginationEvents();
            };

            this.initialize.apply(this, Array.prototype.slice.call(arguments, 1) );
        }

        return this;
    };

    Base.Router.extend = Base.extend;
    extend(Base.Router.prototype, Base.Events, {
        defaults: {},

        initialize: function(routePattern) {
            if (routePattern) {
                this.pattern = routePattern;
            }

            this.params = {};
            this._tempParams = {};
            this.event = {state:{}};
            this.pattern = "/" + this.pattern.replace(/^\/+/,"");
            this._url = this._prevURL = _Router.getLocation();
            this._method = "pushState";

            if (this.pagination === true) {
                this.pattern = this.pattern + "/?([\\d]+)?/?";
            }

            this._regex = _Router.routeToRegExp(this.pattern);
            this._paramNames = _Router.routeToParams(this.pattern);

            _Router.patterns[this.pattern] = this;
            _Router.initialize(this, {silent:true});
        },

        get: function(key) {
            switch (key) {
                case "page":
                    return this.params.page ? parseInt(this.params.page) : 1;
                    break;

                case "url":
                    return this._url;
                    break;

                case "__source__":
                    return this._source;
                    break;

                default:
                    return this.params[key] || this.defaults[key] || null;
            }
        },

        _set: function(key, value) {
            if (this.params[key] != value) {
                this._tempParams[key] = value;
            }
        },

        navigate: function() {
            this._method = "pushState";
            return _Router.changeState.apply(this, arguments);
        },

        replaceState: function() {
            this._method = "replaceState";
            return _Router.changeState.apply(this, arguments);
        },

        isNewURL: function() {
            return this._url != this._prevURL;
        },

        getBaseURL: function() {
            return _Router.getBaseURL();
        }
    });



    /*
     * The documentMode is evaluated becuase IE signals a false positive for
     * pushstate when using compatibility mode.
     */
    var docMode = document.documentMode || null;

    Browser.evaluate
    Browser = {
        _supports: {
            "touch": ("createTouch" in document),
            "pushState": ( ("pushState" in window.history) && (!docMode || docMode > 8) ),
            "orientationChange": (typeof window.onorientationchange != "undefined")
        },

        supports: function(feature) {
            return this._supports[feature];
        }
    };





    window.Utils = {
        _ids: {},

        uniqueId: function(prefix){
            if (!this._ids[prefix]) {
                this._ids[prefix] = 0;
            }

            return prefix + "-" + (++this._ids[prefix]);
        },


        isArray: function (obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        },

        inArray: function(needle, haystack) {
            var length = haystack.length;
            for (var i = 0; i < length; i++) {
                if (haystack[i] == needle) {
                    return true;
                }
            }
            return false;
        },


        //Helper function to escape a string for HTML rendering.
        escapeHTML: function(string) {
            return string.replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;');
        }
    };







  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(onError, model, options) {
    return function(resp) {
      if (onError) {
        onError(model, resp, options);
      } else {
        model.trigger('error', model, resp, options);
      }
    };
  };


}).call(this);// lib/handlebars/base.js
var Handlebars = {};

Handlebars.VERSION = "1.0.beta.6";

Handlebars.helpers  = {};
Handlebars.partials = {};

Handlebars.registerHelper = function(name, fn, inverse) {
  if(inverse) { fn.not = inverse; }
  this.helpers[name] = fn;
};

Handlebars.registerPartial = function(name, str) {
  this.partials[name] = str;
};

Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Could not find property '" + arg + "'");
  }
});

var toString = Object.prototype.toString, functionType = "[object Function]";

Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;


  var ret = "";
  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      for(var i=0, j=context.length; i<j; i++) {
        ret = ret + fn(context[i]);
      }
    } else {
      ret = inverse(this);
    }
    return ret;
  } else {
    return fn(context);
  }
});

Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var ret = "";

  if(context && context.length > 0) {
    for(var i=0, j=context.length; i<j; i++) {
      ret = ret + fn(context[i]);
    }
  } else {
    ret = inverse(this);
  }
  return ret;
});

Handlebars.registerHelper('if', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if(!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('unless', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  options.fn = inverse;
  options.inverse = fn;

  return Handlebars.helpers['if'].call(this, context, options);
});

Handlebars.registerHelper('with', function(context, options) {
  return options.fn(context);
});

Handlebars.registerHelper('log', function(context) {
  Handlebars.log(context);
});
;
// lib/handlebars/utils.js
Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  for (var p in tmp) {
    if (tmp.hasOwnProperty(p)) { this[p] = tmp[p]; }
  }

  this.message = tmp.message;
};
Handlebars.Exception.prototype = new Error;

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

(function() {
  var escape = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /&(?!\w+;)|[<>"'`]/g;
  var possible = /[&<>"'`]/;

  var escapeChar = function(chr) {
    return escape[chr] || "&amp;";
  };

  Handlebars.Utils = {
    escapeExpression: function(string) {
      // don't escape SafeStrings, since they're already safe
      if (string instanceof Handlebars.SafeString) {
        return string.toString();
      } else if (string == null || string === false) {
        return "";
      }

      if(!possible.test(string)) { return string; }
      return string.replace(badChars, escapeChar);
    },

    isEmpty: function(value) {
      if (typeof value === "undefined") {
        return true;
      } else if (value === null) {
        return true;
      } else if (value === false) {
        return true;
      } else if(Object.prototype.toString.call(value) === "[object Array]" && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  };
})();;
// lib/handlebars/runtime.js
Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          return Handlebars.VM.program(fn, data);
        } else if(programWrapper) {
          return programWrapper;
        } else {
          programWrapper = this.programs[i] = Handlebars.VM.program(fn);
          return programWrapper;
        }
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop
    };

    return function(context, options) {
      options = options || {};
      return templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);
    };
  },

  programWithDepth: function(fn, data, $depth) {
    var args = Array.prototype.slice.call(arguments, 2);

    return function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
  },
  program: function(fn, data) {
    return function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!Handlebars.compile) {
      throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = Handlebars.compile(partial);
      return partials[name](context, options);
    }
  }
};

Handlebars.template = Handlebars.VM.template;
;//     Underscore.js 1.4.2
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      unshift          = ArrayProto.unshift,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root['_'] = _;
  }

  // Current version.
  _.VERSION = '1.4.2';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError('Reduce of empty array with no initial value');
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return arguments.length > 2 ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError('Reduce of empty array with no initial value');
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    each(obj, function(value, index, list) {
      if (!iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    var found = false;
    if (obj == null) return found;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    found = any(obj, function(value) {
      return value === target;
    });
    return found;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    return _.map(obj, function(value) {
      return (_.isFunction(method) ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // with specific `key:value` pairs.
  _.where = function(obj, attrs) {
    if (_.isEmpty(attrs)) return [];
    return _.filter(obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        index : index,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index < right.index ? -1 : 1;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(obj, value, context, behavior) {
    var result = {};
    var iterator = lookupIterator(value);
    each(obj, function(value, index) {
      var key = iterator.call(context, value, index, obj);
      behavior(result, key, value);
    });
    return result;
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });
  };

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      if (!_.has(result, key)) result[key] = 0;
      result[key]++;
    });
  };

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (obj.length === +obj.length) return slice.call(obj);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, function(value){ return !!value; });
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    each(input, function(value) {
      if (_.isArray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(concat.apply(ArrayProto, arguments));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(args, "" + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, l = list.length; i < l; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, l = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < l; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Binding with arguments is also known as `curry`.
  // Delegates to **ECMAScript 5**'s native `Function.bind` if available.
  // We check for `func.bind` first, to fail fast when `func` is undefined.
  _.bind = function bind(func, context) {
    var bound, args;
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length == 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, throttling, more, result;
    var whenDone = _.debounce(function(){ more = throttling = false; }, wait);
    return function() {
      context = this; args = arguments;
      var later = function() {
        timeout = null;
        if (more) {
          result = func.apply(context, args);
        }
        whenDone();
      };
      if (!timeout) timeout = setTimeout(later, wait);
      if (throttling) {
        more = true;
      } else {
        throttling = true;
        result = func.apply(context, args);
      }
      whenDone();
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var values = [];
    for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var pairs = [];
    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (obj[prop] == null) obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                               _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return _.isNumber(obj) && isFinite(obj);
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    for (var i = 0; i < n; i++) iterator.call(context, i);
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + (0 | Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return null;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = idCounter++;
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    // Commented out for SMARTY :(
    // 
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });
      source +=
        escape ? "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'" :
        interpolate ? "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'" :
        evaluate ? "';\n" + evaluate + "\n__p+='" : '';
      index = offset + match.length;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);//     Backbone.js 0.9.2

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(){

  // Initial Setup
  // -------------

  // Save a reference to the global object (`window` in the browser, `global`
  // on the server).
  var root = this;

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to slice/splice.
  var slice = Array.prototype.slice;
  var splice = Array.prototype.splice;

  // The top-level namespace. All public Backbone classes and modules will
  // be attached to this. Exported for both CommonJS and the browser.
  var Backbone;
  if (typeof exports !== 'undefined') {
    Backbone = exports;
  } else {
    Backbone = root.Backbone = {};
  }

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '0.9.2';

  // Require Underscore, if we're on the server, and it's not already present.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

  // For Backbone's purposes, jQuery, Zepto, or Ender owns the `$` variable.
  var $ = root.jQuery || root.Zepto || root.ender;

  // Set the JavaScript library that will be used for DOM manipulation and
  // Ajax calls (a.k.a. the `$` variable). By default Backbone will use: jQuery,
  // Zepto, or Ender; but the `setDomLibrary()` method lets you inject an
  // alternate JavaScript library (or a mock library for testing your views
  // outside of a browser).
  Backbone.setDomLibrary = function(lib) {
    $ = lib;
  };

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // -----------------

  // Regular expression used to split event strings
  var eventSplitter = /\s+/;

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback functions
  // to an event; trigger`-ing an event fires all callbacks in succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind one or more space separated events, `events`, to a `callback`
    // function. Passing `"all"` will bind the callback to all events fired.
    on: function(events, callback, context) {

      var calls, event, node, tail, list;
      if (!callback) return this;
      events = events.split(eventSplitter);
      calls = this._callbacks || (this._callbacks = {});

      // Create an immutable callback list, allowing traversal during
      // modification.  The tail is an empty object that will always be used
      // as the next node.
      while (event = events.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {tail: tail, next: list ? list.next : node};
      }

      return this;
    },

    // Remove one or many callbacks. If `context` is null, removes all callbacks
    // with that function. If `callback` is null, removes all callbacks for the
    // event. If `events` is null, removes all bound callbacks for all events.
    off: function(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      // No events, or removing *all* events.
      if (!(calls = this._callbacks)) return;
      if (!(events || callback || context)) {
        delete this._callbacks;
        return this;
      }

      // Loop through the listed events and contexts, splicing them out of the
      // linked list of callbacks if appropriate.
      events = events ? events.split(eventSplitter) : _.keys(calls);
      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];
        if (!node || !(callback || context)) continue;
        // Create a new list, omitting the indicated callbacks.
        tail = node.tail;
        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;
          if ((callback && cb !== callback) || (context && ctx !== context)) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(events) {
      var event, node, calls, tail, args, all, rest;
      if (!(calls = this._callbacks)) return this;
      all = calls.all;
      events = events.split(eventSplitter);
      rest = slice.call(arguments, 1);

      // For each event, walk through the linked list of callbacks twice,
      // first to trigger the event, then to trigger any `"all"` callbacks.
      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;
          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
        if (node = all) {
          tail = node.tail;
          args = [event].concat(rest);
          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, args);
          }
        }
      }

      return this;
    }

  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Backbone.Model
  // --------------

  // Create a new model, with defined attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var defaults;
    attributes || (attributes = {});
    if (options && options.parse) attributes = this.parse(attributes);
    if (defaults = getValue(this, 'defaults')) {
      attributes = _.extend({}, defaults, attributes);
    }
    if (options && options.collection) this.collection = options.collection;
    this.attributes = {};
    this._escapedAttributes = {};
    this.cid = _.uniqueId('c');
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this.set(attributes, {silent: true});
    // Reset change tracking.
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this._previousAttributes = _.clone(this.attributes);
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // A hash of attributes that have silently changed since the last time
    // `change` was called.  Will become pending attributes on the next call.
    _silent: null,

    // A hash of attributes that have changed since the last `'change'` event
    // began.
    _pending: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      var html;
      if (html = this._escapedAttributes[attr]) return html;
      var val = this.get(attr);
      return this._escapedAttributes[attr] = _.escape(val == null ? '' : '' + val);
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"` unless
    // you choose to silence it.
    set: function(key, value, options) {
      var attrs, attr, val;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (_.isObject(key) || key == null) {
        attrs = key;
        options = value;
      } else {
        attrs = {};
        attrs[key] = value;
      }

      // Extract attributes and options.
      options || (options = {});
      if (!attrs) return this;
      if (attrs instanceof Model) attrs = attrs.attributes;
      if (options.unset) for (attr in attrs) attrs[attr] = void 0;

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      var changes = options.changes = {};
      var now = this.attributes;
      var escaped = this._escapedAttributes;
      var prev = this._previousAttributes || {};

      // For each `set` attribute...
      for (attr in attrs) {
        val = attrs[attr];

        // If the new and current value differ, record the change.
        if (!_.isEqual(now[attr], val) || (options.unset && _.has(now, attr))) {
          delete escaped[attr];
          (options.silent ? this._silent : changes)[attr] = true;
        }

        // Update or delete the current value.
        options.unset ? delete now[attr] : now[attr] = val;

        // If the new and previous value differ, record the change.  If not,
        // then remove changes for this attribute.
        if (!_.isEqual(prev[attr], val) || (_.has(now, attr) != _.has(prev, attr))) {
          this.changed[attr] = val;
          if (!options.silent) this._pending[attr] = true;
        } else {
          delete this.changed[attr];
          delete this._pending[attr];
        }
      }

      // Fire the `"change"` events.
      if (!options.silent) this.change(options);
      return this;
    },

    // Remove an attribute from the model, firing `"change"` unless you choose
    // to silence it. `unset` is a noop if the attribute doesn't exist.
    unset: function(attr, options) {
      (options || (options = {})).unset = true;
      return this.set(attr, null, options);
    },

    // Clear all attributes on the model, firing `"change"` unless you choose
    // to silence it.
    clear: function(options) {
      (options || (options = {})).unset = true;
      return this.set(_.clone(this.attributes), options);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overriden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        if (!model.set(model.parse(resp, xhr), options)) return false;
        if (success) success(model, resp);
      };
      options.error = Backbone.wrapError(options.error, model, options);
      return (this.sync || Backbone.sync).call(this, 'read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, value, options) {
      var attrs, current;

      // Handle both `("key", value)` and `({key: value})` -style calls.
      if (_.isObject(key) || key == null) {
        attrs = key;
        options = value;
      } else {
        attrs = {};
        attrs[key] = value;
      }
      options = options ? _.clone(options) : {};

      // If we're "wait"-ing to set changed attributes, validate early.
      if (options.wait) {
        if (!this._validate(attrs, options)) return false;
        current = _.clone(this.attributes);
      }

      // Regular saves `set` attributes before persisting to the server.
      var silentOptions = _.extend({}, options, {silent: true});
      if (attrs && !this.set(attrs, options.wait ? silentOptions : options)) {
        return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        var serverAttrs = model.parse(resp, xhr);
        if (options.wait) {
          delete options.wait;
          serverAttrs = _.extend(attrs || {}, serverAttrs);
        }
        if (!model.set(serverAttrs, options)) return false;
        if (success) {
          success(model, resp);
        } else {
          model.trigger('sync', model, resp, options);
        }
      };

      // Finish configuring and sending the Ajax request.
      options.error = Backbone.wrapError(options.error, model, options);
      var method = this.isNew() ? 'create' : 'update';
      var xhr = (this.sync || Backbone.sync).call(this, method, this, options);
      if (options.wait) this.set(current, silentOptions);
      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var triggerDestroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      if (this.isNew()) {
        triggerDestroy();
        return false;
      }

      options.success = function(resp) {
        if (options.wait) triggerDestroy();
        if (success) {
          success(model, resp);
        } else {
          model.trigger('sync', model, resp, options);
        }
      };

      options.error = Backbone.wrapError(options.error, model, options);
      var xhr = (this.sync || Backbone.sync).call(this, 'delete', this, options);
      if (!options.wait) triggerDestroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base = getValue(this, 'urlRoot') || getValue(this.collection, 'url') || urlError();
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, xhr) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return this.id == null;
    },

    // Call this method to manually fire a `"change"` event for this model and
    // a `"change:attribute"` event for each changed attribute.
    // Calling this will cause all objects observing the model to update.
    change: function(options) {
      options || (options = {});
      var changing = this._changing;
      this._changing = true;

      // Silent changes become pending changes.
      for (var attr in this._silent) this._pending[attr] = true;

      // Silent changes are triggered.
      var changes = _.extend({}, options.changes, this._silent);
      this._silent = {};
      for (var attr in changes) {
        this.trigger('change:' + attr, this, this.get(attr), options);
      }
      if (changing) return this;

      // Continue firing `"change"` events while there are pending changes.
      while (!_.isEmpty(this._pending)) {
        this._pending = {};
        this.trigger('change', this, options);
        // Pending and silent changes still remain.
        for (var attr in this.changed) {
          if (this._pending[attr] || this._silent[attr]) continue;
          delete this.changed[attr];
        }
        this._previousAttributes = _.clone(this.attributes);
      }

      this._changing = false;
      return this;
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (!arguments.length) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false, old = this._previousAttributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (!arguments.length || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Check if the model is currently in a valid state. It's only possible to
    // get into an *invalid* state if you're using silent changes.
    isValid: function() {
      return !this.validate(this.attributes);
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. If a specific `error` callback has
    // been passed, call that instead of firing the general `"error"` event.
    _validate: function(attrs, options) {
      if (options.silent || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validate(attrs, options);
      if (!error) return true;
      if (options && options.error) {
        options.error(this, error, options);
      } else {
        this.trigger('error', this, error, options);
      }
      return false;
    }

  });

  // Backbone.Collection
  // -------------------

  // Provides a standard collection class for our sets of models, ordered
  // or unordered. If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, {silent: true, parse: options.parse});
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Add a model, or list of models to the set. Pass **silent** to avoid
    // firing the `add` event for every new model.
    add: function(models, options) {
      var i, index, length, model, cid, id, cids = {}, ids = {}, dups = [];
      options || (options = {});
      models = _.isArray(models) ? models.slice() : [models];

      // Begin by turning bare objects into model references, and preventing
      // invalid models or duplicate models from being added.
      for (i = 0, length = models.length; i < length; i++) {
        if (!(model = models[i] = this._prepareModel(models[i], options))) {
          throw new Error("Can't add an invalid model to a collection");
        }
        cid = model.cid;
        id = model.id;
        if (cids[cid] || this._byCid[cid] || ((id != null) && (ids[id] || this._byId[id]))) {
          dups.push(i);
          continue;
        }
        cids[cid] = ids[id] = model;
      }

      // Remove duplicates.
      i = dups.length;
      while (i--) {
        models.splice(dups[i], 1);
      }

      // Listen to added models' events, and index models for lookup by
      // `id` and by `cid`.
      for (i = 0, length = models.length; i < length; i++) {
        (model = models[i]).on('all', this._onModelEvent, this);
        this._byCid[model.cid] = model;
        if (model.id != null) this._byId[model.id] = model;
      }

      // Insert models into the collection, re-sorting if needed, and triggering
      // `add` events unless silenced.
      this.length += length;
      index = options.at != null ? options.at : this.models.length;
      splice.apply(this.models, [index, 0].concat(models));
      if (this.comparator) this.sort({silent: true});
      if (options.silent) return this;
      for (i = 0, length = this.models.length; i < length; i++) {
        if (!cids[(model = this.models[i]).cid]) continue;
        options.index = i;
        model.trigger('add', model, this, options);
      }
      return this;
    },

    // Remove a model, or a list of models from the set. Pass silent to avoid
    // firing the `remove` event for every model removed.
    remove: function(models, options) {
      var i, l, index, model;
      options || (options = {});
      models = _.isArray(models) ? models.slice() : [models];
      for (i = 0, l = models.length; i < l; i++) {
        model = this.getByCid(models[i]) || this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byCid[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model);
      }
      return this;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, options);
      return model;
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: 0}, options));
      return model;
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Get a model from the set by id.
    get: function(id) {
      if (id == null) return void 0;
      return this._byId[id.id != null ? id.id : id];
    },

    // Get a model from the set by client id.
    getByCid: function(cid) {
      return cid && this._byCid[cid.cid || cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of `filter`.
    where: function(attrs) {
      if (_.isEmpty(attrs)) return [];
      return this.filter(function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      options || (options = {});
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      var boundComparator = _.bind(this.comparator, this);
      if (this.comparator.length == 1) {
        this.models = this.sortBy(boundComparator);
      } else {
        this.models.sort(boundComparator);
      }
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.map(this.models, function(model){ return model.get(attr); });
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any `add` or `remove` events. Fires `reset` when finished.
    reset: function(models, options) {
      models  || (models = []);
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i]);
      }
      this._reset();
      this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `add: true` is passed, appends the
    // models to the collection instead of resetting.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === undefined) options.parse = true;
      var collection = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        collection[options.add ? 'add' : 'reset'](collection.parse(resp, xhr), options);
        if (success) success(collection, resp);
      };
      options.error = Backbone.wrapError(options.error, collection, options);
      return (this.sync || Backbone.sync).call(this, 'read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      var coll = this;
      options = options ? _.clone(options) : {};
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!options.wait) coll.add(model, options);
      var success = options.success;
      options.success = function(nextModel, resp, xhr) {
        if (options.wait) coll.add(nextModel, options);
        if (success) {
          success(nextModel, resp);
        } else {
          nextModel.trigger('sync', model, resp, options);
        }
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, xhr) {
      return resp;
    },

    // Proxy to _'s chain. Can't be proxied the same way the rest of the
    // underscore methods are proxied because it relies on the underscore
    // constructor.
    chain: function () {
      return _(this.models).chain();
    },

    // Reset all internal state. Called when the collection is reset.
    _reset: function(options) {
      this.length = 0;
      this.models = [];
      this._byId  = {};
      this._byCid = {};
    },

    // Prepare a model or hash of attributes to be added to this collection.
    _prepareModel: function(model, options) {
      options || (options = {});
      if (!(model instanceof Model)) {
        var attrs = model;
        options.collection = this;
        model = new this.model(attrs, options);
        if (!model._validate(model.attributes, options)) model = false;
      } else if (!model.collection) {
        model.collection = this;
      }
      return model;
    },

    // Internal method to remove a model's ties to a collection.
    _removeReference: function(model) {
      if (this == model.collection) {
        delete model.collection;
      }
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event == 'add' || event == 'remove') && collection != this) return;
      if (event == 'destroy') {
        this.remove(model, options);
      }
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find',
    'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any',
    'include', 'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex',
    'toArray', 'size', 'first', 'initial', 'rest', 'last', 'without', 'indexOf',
    'shuffle', 'lastIndexOf', 'isEmpty', 'groupBy'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      return _[method].apply(_, [this.models].concat(_.toArray(arguments)));
    };
  });

  // Backbone.Router
  // -------------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var namedParam    = /:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[-[\]{}()+?.,\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      Backbone.history || (Backbone.history = new History);
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (!callback) callback = this[name];
      Backbone.history.route(route, _.bind(function(fragment) {
        var args = this._extractParameters(route, fragment);
        callback && callback.apply(this, args);
        this.trigger.apply(this, ['route:' + name].concat(args));
        Backbone.history.trigger('route', this, name, args);
      }, this));
      return this;
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      var routes = [];
      for (var route in this.routes) {
        routes.unshift([route, this.routes[route]]);
      }
      for (var i = 0, l = routes.length; i < l; i++) {
        this.route(routes[i][0], routes[i][1], this[routes[i][1]]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(namedParam, '([^\/]+)')
                   .replace(splatParam, '(.*?)');
      return new RegExp('^' + route + '$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted parameters.
    _extractParameters: function(route, fragment) {
      return route.exec(fragment).slice(1);
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on URL fragments. If the
  // browser does not support `onhashchange`, falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');
  };

  // Cached regex for cleaning leading hashes and slashes .
  var routeStripper = /^[#\/]/;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(windowOverride) {
      var loc = windowOverride ? windowOverride.location : window.location;
      var match = loc.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || forcePushState) {
          fragment = window.location.pathname;
          var search = window.location.search;
          if (search) fragment += search;
        } else {
          fragment = this.getHash();
        }
      }
      if (!fragment.indexOf(this.options.root)) fragment = fragment.substr(this.options.root.length);
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({}, {root: '/'}, this.options, options);
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && window.history && window.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      if (oldIE) {
        this.iframe = $('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }
      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        $(window).bind('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        $(window).bind('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = window.location;
      var atRoot  = loc.pathname == this.options.root;

      // If we've started off with a route from a `pushState`-enabled browser,
      // but we're currently in a browser that doesn't support it...
      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
        this.fragment = this.getFragment(null, true);
        window.location.replace(this.options.root + '#' + this.fragment);
        // Return immediately as browser will do redirect to new url
        return true;

      // Or if we've started out with a hash-based route, but we're currently
      // in a browser where it could be `pushState`-based instead...
      } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
        this.fragment = this.getHash().replace(routeStripper, '');
        window.history.replaceState({}, document.title, loc.protocol + '//' + loc.host + this.options.root + this.fragment);
      }

      if (!this.options.silent) {
        return this.loadUrl();
      }
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      $(window).unbind('popstate', this.checkUrl).unbind('hashchange', this.checkUrl);
      clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current == this.fragment && this.iframe) current = this.getFragment(this.getHash(this.iframe));
      if (current == this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl() || this.loadUrl(this.getHash());
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragmentOverride) {
      var fragment = this.fragment = this.getFragment(fragmentOverride);
      var matched = _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
      return matched;
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: options};
      var frag = (fragment || '').replace(routeStripper, '');
      if (this.fragment == frag) return;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        if (frag.indexOf(this.options.root) != 0) frag = this.options.root + frag;
        this.fragment = frag;
        window.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, frag);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this.fragment = frag;
        this._updateHash(window.location, frag, options.replace);
        if (this.iframe && (frag != this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a history entry on hash-tag change.
          // When replace is true, we don't want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, frag, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        window.location.assign(this.options.root + fragment);
      }
      if (options.trigger) this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        location.replace(location.toString().replace(/(javascript:|#).*$/, '') + '#' + fragment);
      } else {
        location.hash = fragment;
      }
    }
  });

  // Backbone.View
  // -------------

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    this._configure(options || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be prefered to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view from the DOM. Note that the view isn't present in the
    // DOM by default, so calling this method may be a no-op.
    remove: function() {
      this.$el.remove();
      return this;
    },

    // For small amounts of DOM Elements, where a full-blown template isn't
    // needed, use **make** to manufacture elements, one at a time.
    //
    //     var el = this.make('li', {'class': 'row'}, this.model.escape('title'));
    //
    make: function(tagName, attributes, content) {
      var el = document.createElement(tagName);
      if (attributes) $(el).attr(attributes);
      if (content) $(el).html(content);
      return el;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = (element instanceof $) ? element : $(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save'
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = getValue(this, 'events')))) return;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) throw new Error('Method "' + events[key] + '" does not exist');
        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.bind(eventName, method);
        } else {
          this.$el.delegate(selector, eventName, method);
        }
      }
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.unbind('.delegateEvents' + this.cid);
    },

    // Performs the initial configuration of a View with a set of options.
    // Keys with special meaning *(model, collection, id, className)*, are
    // attached directly to the view.
    _configure: function(options) {
      if (this.options) options = _.extend({}, this.options, options);
      for (var i = 0, l = viewOptions.length; i < l; i++) {
        var attr = viewOptions[i];
        if (options[attr]) this[attr] = options[attr];
      }
      this.options = options;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = getValue(this, 'attributes') || {};
        if (this.id) attrs.id = this.id;
        if (this.className) attrs['class'] = this.className;
        this.setElement(this.make(this.tagName, attrs), false);
      } else {
        this.setElement(this.el, false);
      }
    }

  });

  // The self-propagating extend function that Backbone classes use.
  var extend = function (protoProps, classProps) {
    var child = inherits(this, protoProps, classProps);
    child.extend = this.extend;
    return child;
  };

  // Set up inheritance for the model, collection, and view.
  Model.extend = Collection.extend = Router.extend = View.extend = extend;

  // Backbone.sync
  // -------------

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    options || (options = {});

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = getValue(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (!options.data && model && (method == 'create' || method == 'update')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(model.toJSON());
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (Backbone.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (Backbone.emulateHTTP) {
      if (type === 'PUT' || type === 'DELETE') {
        if (Backbone.emulateJSON) params.data._method = type;
        params.type = 'POST';
        params.beforeSend = function(xhr) {
          xhr.setRequestHeader('X-HTTP-Method-Override', type);
        };
      }
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !Backbone.emulateJSON) {
      params.processData = false;
    }

    // Make the request, allowing the user to override any Ajax options.
    return $.ajax(_.extend(params, options));
  };

  // Wrap an optional error callback with a fallback error event.
  Backbone.wrapError = function(onError, originalModel, options) {
    return function(model, resp) {
      resp = model === originalModel ? resp : model;
      if (onError) {
        onError(originalModel, resp, options);
      } else {
        originalModel.trigger('error', originalModel, resp, options);
      }
    };
  };

  // Helpers
  // -------

  // Shared empty constructor function to aid in prototype-chain creation.
  var ctor = function(){};

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var inherits = function(parent, protoProps, staticProps) {
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && protoProps.hasOwnProperty('constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ parent.apply(this, arguments); };
    }

    // Inherit class (static) properties from parent.
    _.extend(child, parent);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Add static properties to the constructor function, if supplied.
    if (staticProps) _.extend(child, staticProps);

    // Correctly set child's `prototype.constructor`.
    child.prototype.constructor = child;

    // Set a convenience property in case the parent's prototype is needed later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Helper function to get a value from a Backbone object as a property
  // or as a function.
  var getValue = function(object, prop) {
    if (!(object && object[prop])) return null;
    return _.isFunction(object[prop]) ? object[prop]() : object[prop];
  };

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

}).call(this);// moment.js
// version : 1.7.0
// author : Tim Wood
// license : MIT
// momentjs.com
(function(a,b){function G(a,b,c){this._d=a,this._isUTC=!!b,this._a=a._a||null,a._a=null,this._lang=c||!1}function H(a){var b=this._data={},c=a.years||a.y||0,d=a.months||a.M||0,e=a.weeks||a.w||0,f=a.days||a.d||0,g=a.hours||a.h||0,h=a.minutes||a.m||0,i=a.seconds||a.s||0,j=a.milliseconds||a.ms||0;this._milliseconds=j+i*1e3+h*6e4+g*36e5,this._days=f+e*7,this._months=d+c*12,b.milliseconds=j%1e3,i+=I(j/1e3),b.seconds=i%60,h+=I(i/60),b.minutes=h%60,g+=I(h/60),b.hours=g%24,f+=I(g/24),f+=e*7,b.days=f%30,d+=I(f/30),b.months=d%12,c+=I(d/12),b.years=c,this._lang=!1}function I(a){return a<0?Math.ceil(a):Math.floor(a)}function J(a,b){var c=a+"";while(c.length<b)c="0"+c;return c}function K(a,b,c){var d=b._milliseconds,e=b._days,f=b._months,g;d&&a._d.setTime(+a+d*c),e&&a.date(a.date()+e*c),f&&(g=a.date(),a.date(1).month(a.month()+f*c).date(Math.min(g,a.daysInMonth())))}function L(a){return Object.prototype.toString.call(a)==="[object Array]"}function M(a,b){var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;for(f=0;f<c;f++)~~a[f]!==~~b[f]&&e++;return e+d}function N(b,c){var d,e;for(d=1;d<7;d++)b[d]=b[d]==null?d===2?1:0:b[d];return b[7]=c,e=new a(0),c?(e.setUTCFullYear(b[0],b[1],b[2]),e.setUTCHours(b[3],b[4],b[5],b[6])):(e.setFullYear(b[0],b[1],b[2]),e.setHours(b[3],b[4],b[5],b[6])),e._a=b,e}function O(a,b){var d,e,f=[];!b&&i&&(b=require("./lang/"+a));for(d=0;d<j.length;d++)b[j[d]]=b[j[d]]||g.en[j[d]];for(d=0;d<12;d++)e=c([2e3,d]),f[d]=new RegExp("^"+(b.months[d]||b.months(e,""))+"|^"+(b.monthsShort[d]||b.monthsShort(e,"")).replace(".",""),"i");return b.monthsParse=b.monthsParse||f,g[a]=b,b}function P(a){var b=typeof a=="string"&&a||a&&a._lang||null;return b?g[b]||O(b):c}function Q(a){return D[a]?"'+("+D[a]+")+'":a.replace(n,"").replace(/\\?'/g,"\\'")}function R(a){return P().longDateFormat[a]||a}function S(a){var b="var a,b;return '"+a.replace(l,Q)+"';",c=Function;return new c("t","v","o","p","m",b)}function T(a){return C[a]||(C[a]=S(a)),C[a]}function U(a,b){function d(d,e){return c[d].call?c[d](a,b):c[d][e]}var c=P(a);while(m.test(b))b=b.replace(m,R);return C[b]||(C[b]=S(b)),C[b](a,d,c.ordinal,J,c.meridiem)}function V(a){switch(a){case"DDDD":return r;case"YYYY":return s;case"S":case"SS":case"SSS":case"DDD":return q;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return t;case"Z":case"ZZ":return u;case"T":return v;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return p;default:return new RegExp(a.replace("\\",""))}}function W(a,b,c,d){var e;switch(a){case"M":case"MM":c[1]=b==null?0:~~b-1;break;case"MMM":case"MMMM":for(e=0;e<12;e++)if(P().monthsParse[e].test(b)){c[1]=e;break}break;case"D":case"DD":case"DDD":case"DDDD":b!=null&&(c[2]=~~b);break;case"YY":b=~~b,c[0]=b+(b>70?1900:2e3);break;case"YYYY":c[0]=~~Math.abs(b);break;case"a":case"A":d.isPm=(b+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":c[3]=~~b;break;case"m":case"mm":c[4]=~~b;break;case"s":case"ss":c[5]=~~b;break;case"S":case"SS":case"SSS":c[6]=~~(("0."+b)*1e3);break;case"Z":case"ZZ":d.isUTC=!0,e=(b+"").match(z),e&&e[1]&&(d.tzh=~~e[1]),e&&e[2]&&(d.tzm=~~e[2]),e&&e[0]==="+"&&(d.tzh=-d.tzh,d.tzm=-d.tzm)}}function X(a,b){var c=[0,0,1,0,0,0,0],d={tzh:0,tzm:0},e=b.match(l),f,g;for(f=0;f<e.length;f++)g=(V(e[f]).exec(a)||[])[0],a=a.replace(V(e[f]),""),W(e[f],g,c,d);return d.isPm&&c[3]<12&&(c[3]+=12),d.isPm===!1&&c[3]===12&&(c[3]=0),c[3]+=d.tzh,c[4]+=d.tzm,N(c,d.isUTC)}function Y(a,b){var c,d=a.match(o)||[],e,f=99,g,h,i;for(g=0;g<b.length;g++)h=X(a,b[g]),e=U(new G(h),b[g]).match(o)||[],i=M(d,e),i<f&&(f=i,c=h);return c}function Z(b){var c="YYYY-MM-DDT",d;if(w.exec(b)){for(d=0;d<4;d++)if(y[d][1].exec(b)){c+=y[d][0];break}return u.exec(b)?X(b,c+" Z"):X(b,c)}return new a(b)}function $(a,b,c,d,e){var f=e.relativeTime[a];return typeof f=="function"?f(b||1,!!c,a,d):f.replace(/%d/i,b||1)}function _(a,b,c){var d=e(Math.abs(a)/1e3),f=e(d/60),g=e(f/60),h=e(g/24),i=e(h/365),j=d<45&&["s",d]||f===1&&["m"]||f<45&&["mm",f]||g===1&&["h"]||g<22&&["hh",g]||h===1&&["d"]||h<=25&&["dd",h]||h<=45&&["M"]||h<345&&["MM",e(h/30)]||i===1&&["y"]||["yy",i];return j[2]=b,j[3]=a>0,j[4]=c,$.apply({},j)}function ab(a,b){c.fn[a]=function(a){var c=this._isUTC?"UTC":"";return a!=null?(this._d["set"+c+b](a),this):this._d["get"+c+b]()}}function bb(a){c.duration.fn[a]=function(){return this._data[a]}}function cb(a,b){c.duration.fn["as"+a]=function(){return+this/b}}var c,d="1.7.0",e=Math.round,f,g={},h="en",i=typeof module!="undefined"&&module.exports,j="months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),k=/^\/?Date\((\-?\d+)/i,l=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?)/g,m=/(LT|LL?L?L?)/g,n=/(^\[)|(\\)|\]$/g,o=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,p=/\d\d?/,q=/\d{1,3}/,r=/\d{3}/,s=/\d{1,4}/,t=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,u=/Z|[\+\-]\d\d:?\d\d/i,v=/T/i,w=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,x="YYYY-MM-DDTHH:mm:ssZ",y=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],z=/([\+\-]|\d\d)/gi,A="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),B={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},C={},D={M:"(a=t.month()+1)",MMM:'v("monthsShort",t.month())',MMMM:'v("months",t.month())',D:"(a=t.date())",DDD:"(a=new Date(t.year(),t.month(),t.date()),b=new Date(t.year(),0,1),a=~~(((a-b)/864e5)+1.5))",d:"(a=t.day())",dd:'v("weekdaysMin",t.day())',ddd:'v("weekdaysShort",t.day())',dddd:'v("weekdays",t.day())',w:"(a=new Date(t.year(),t.month(),t.date()-t.day()+5),b=new Date(a.getFullYear(),0,4),a=~~((a-b)/864e5/7+1.5))",YY:"p(t.year()%100,2)",YYYY:"p(t.year(),4)",a:"m(t.hours(),t.minutes(),!0)",A:"m(t.hours(),t.minutes(),!1)",H:"t.hours()",h:"t.hours()%12||12",m:"t.minutes()",s:"t.seconds()",S:"~~(t.milliseconds()/100)",SS:"p(~~(t.milliseconds()/10),2)",SSS:"p(t.milliseconds(),3)",Z:'((a=-t.zone())<0?((a=-a),"-"):"+")+p(~~(a/60),2)+":"+p(~~a%60,2)',ZZ:'((a=-t.zone())<0?((a=-a),"-"):"+")+p(~~(10*a/6),4)'},E="DDD w M D d".split(" "),F="M D H h m s w".split(" ");while(E.length)f=E.pop(),D[f+"o"]=D[f]+"+o(a)";while(F.length)f=F.pop(),D[f+f]="p("+D[f]+",2)";D.DDDD="p("+D.DDD+",3)",c=function(d,e){if(d===null||d==="")return null;var f,g;return c.isMoment(d)?new G(new a(+d._d),d._isUTC,d._lang):(e?L(e)?f=Y(d,e):f=X(d,e):(g=k.exec(d),f=d===b?new a:g?new a(+g[1]):d instanceof a?d:L(d)?N(d):typeof d=="string"?Z(d):new a(d)),new G(f))},c.utc=function(a,b){return L(a)?new G(N(a,!0),!0):(typeof a=="string"&&!u.exec(a)&&(a+=" +0000",b&&(b+=" Z")),c(a,b).utc())},c.unix=function(a){return c(a*1e3)},c.duration=function(a,b){var d=c.isDuration(a),e=typeof a=="number",f=d?a._data:e?{}:a,g;return e&&(b?f[b]=a:f.milliseconds=a),g=new H(f),d&&(g._lang=a._lang),g},c.humanizeDuration=function(a,b,d){return c.duration(a,b===!0?null:b).humanize(b===!0?!0:d)},c.version=d,c.defaultFormat=x,c.lang=function(a,b){var d;if(!a)return h;(b||!g[a])&&O(a,b);if(g[a]){for(d=0;d<j.length;d++)c[j[d]]=g[a][j[d]];c.monthsParse=g[a].monthsParse,h=a}},c.langData=P,c.isMoment=function(a){return a instanceof G},c.isDuration=function(a){return a instanceof H},c.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;return~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"}}),c.fn=G.prototype={clone:function(){return c(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this._d.toString()},toDate:function(){return this._d},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds(),!!this._isUTC]},isValid:function(){return this._a?!M(this._a,(this._a[7]?c.utc(this):this).toArray()):!isNaN(this._d.getTime())},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(a){return U(this,a?a:c.defaultFormat)},add:function(a,b){var d=b?c.duration(+b,a):c.duration(a);return K(this,d,1),this},subtract:function(a,b){var d=b?c.duration(+b,a):c.duration(a);return K(this,d,-1),this},diff:function(a,b,d){var f=this._isUTC?c(a).utc():c(a).local(),g=(this.zone()-f.zone())*6e4,h=this._d-f._d-g,i=this.year()-f.year(),j=this.month()-f.month(),k=this.date()-f.date(),l;return b==="months"?l=i*12+j+k/30:b==="years"?l=i+(j+k/30)/12:l=b==="seconds"?h/1e3:b==="minutes"?h/6e4:b==="hours"?h/36e5:b==="days"?h/864e5:b==="weeks"?h/6048e5:h,d?l:e(l)},from:function(a,b){return c.duration(this.diff(a)).lang(this._lang).humanize(!b)},fromNow:function(a){return this.from(c(),a)},calendar:function(){var a=this.diff(c().sod(),"days",!0),b=this.lang().calendar,d=b.sameElse,e=a<-6?d:a<-1?b.lastWeek:a<0?b.lastDay:a<1?b.sameDay:a<2?b.nextDay:a<7?b.nextWeek:d;return this.format(typeof e=="function"?e.apply(this):e)},isLeapYear:function(){var a=this.year();return a%4===0&&a%100!==0||a%400===0},isDST:function(){return this.zone()<c([this.year()]).zone()||this.zone()<c([this.year(),5]).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return a==null?b:this.add({d:a-b})},startOf:function(a){switch(a.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return this},endOf:function(a){return this.startOf(a).add(a.replace(/s?$/,"s"),1).subtract("ms",1)},sod:function(){return this.clone().startOf("day")},eod:function(){return this.clone().endOf("day")},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return c.utc([this.year(),this.month()+1,0]).date()},lang:function(a){return a===b?P(this):(this._lang=a,this)}};for(f=0;f<A.length;f++)ab(A[f].toLowerCase(),A[f]);ab("year","FullYear"),c.duration.fn=H.prototype={weeks:function(){return I(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(a){var b=+this,c=this.lang().relativeTime,d=_(b,!a,this.lang());return a&&(d=(b<=0?c.past:c.future).replace(/%s/i,d)),d},lang:c.fn.lang};for(f in B)B.hasOwnProperty(f)&&(cb(f,B[f]),bb(f.toLowerCase()));cb("Weeks",6048e5),i&&(module.exports=c),typeof ender=="undefined"&&(this.moment=c),typeof define=="function"&&define.amd&&define("moment",[],function(){return c})}).call(this,Date);//fgnass.github.com/spin.js#v1.2.6
!function(window, document, undefined) {

  /**
   * Copyright (c) 2011 Felix Gnass [fgnass at neteye dot de]
   * Licensed under the MIT license
   */

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }()

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines*100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-'+prefix+'-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }
    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   **/
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    if(s[prop] !== undefined) return prop
    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: 'auto',          // center vertically
    left: 'auto'          // center horizontally
  }

  /** The constructor */
  var Spinner = function Spinner(o) {
    if (!this.spin) return new Spinner(o)
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  Spinner.defaults = {}

  merge(Spinner.prototype, {
    spin: function(target) {
      this.stop()
      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: 'relative', width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width
        , ep // element position
        , tp // target position

      if (target) {
        target.insertBefore(el, target.firstChild||null)
        tp = pos(target)
        ep = pos(el)
        css(el, {
          left: '0px',
          top: '0px'
        })
      }

      el.setAttribute('aria-role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var s=o.lines; s; s--) {
            var alpha = Math.max(1-(i+s*astep)%f * ostep, o.opacity)
            self.opacity(el, o.lines-s, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    lines: function(el, o) {
      var i = 0
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, i, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))

        ins(el, ins(seg, fill(o.color, '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })

  /////////////////////////////////////////////////////////////////////////
  // VML rendering for IE
  /////////////////////////////////////////////////////////////////////////

  /**
   * Check and init VML support
   */
  ;(function() {

    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    var s = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(s, 'transform') && s.adj) {

      // VML support detected. Insert CSS rule ...
      sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

      Spinner.prototype.lines = function(el, o) {
        var r = o.length+o.width
          , s = 2*r

        function grp() {
          return css(
            vml('group', {
              coordsize: s + ' ' + s,
              coordorigin: -r + ' ' + -r
            }),
            { width: s, height: s }
          )
        }

        var margin = -(o.width+o.length)*2 + 'px'
          , g = css(grp(), {position: 'absolute', top: margin, left: margin})
          , i

        function seg(i, dx, filter) {
          ins(g,
            ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
              ins(css(vml('roundrect', {arcsize: o.corners}), {
                  width: r,
                  height: o.width,
                  left: o.radius,
                  top: -o.width>>1,
                  filter: filter
                }),
                vml('fill', {color: o.color, opacity: o.opacity}),
                vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
              )
            )
          )
        }

        if (o.shadow)
          for (i = 1; i <= o.lines; i++)
            seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

        for (i = 1; i <= o.lines; i++) seg(i)
        return ins(el, g)
      }

      Spinner.prototype.opacity = function(el, i, val, o) {
        var c = el.firstChild
        o = o.shadow && o.lines || 0
        if (c && i+o < c.childNodes.length) {
          c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
          if (c) c.opacity = val
        }
      }
    }
    else
      useCssAnimations = vendor(s, 'animation')
  })()

  if (typeof define == 'function' && define.amd)
    define(function() { return Spinner })
  else
    window.Spinner = Spinner

}(window, document);(function() {
    // Custom override of Sync
    Backbone.sync = (function() {
        // Helper function to get a value from a Backbone object as a property
        // or as a function.
        var getValue = function(object, prop) {
          if (!(object && object[prop])) return null;
          return _.isFunction(object[prop]) ? object[prop]() : object[prop];
        };

        // Throw an error when a URL is needed, and none is supplied.
        var urlError = function() {
          throw new Error('A "url" property or function must be specified');
        };

        return function(method, model, options) {
            var methodMap = {
                    'create': 'POST',
                    'update': 'PUT',
                    'delete': 'DELETE',
                    'read':   'GET'
                },
                type = methodMap[method];

            // Default options, unless specified.
            options || (options = {});

            // Default JSON-request options.
            var params = {
                type: type,
                dataType: 'json',
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                cache: false
            };

            // Ensure that we have a URL.
            if (!options.url) {
                params.url = getValue(model, 'url') || urlError();
            }

            // Ensure that we have the appropriate request data.
            if (model && (method == 'create' || method == 'update')) {
                params.contentType = 'application/x-www-form-urlencoded';
                // Allow extra query params that are not apart of the model
                options.data || (options.data = {});
                params.data = _.extend(model.toJSON(), options.data);

                delete options.data;

                params.data = $.param(params.data);
            }

            // Don't process data on a non-GET request.
            if (params.type !== 'GET') {
                params.processData = false;
            }

            // Make the request, allowing the user to override any Ajax options.
            return $.ajax(_.extend(params, options));
        };
    }());

    // Fixes query params breaking matches in router
    (function(old) {
        Backbone.History.prototype.getFragment = function() {
            return old.apply(this, arguments).replace(/\?.*/, '');
        };
    })(Backbone.History.prototype.getFragment);
}());(function() {
    "use strict";

    /*
     * Utility functions for handlebars helpers
     */

    function buildContext (str, obj) {
        var pattern = /%(\w*)%/g;

        return str.replace(pattern, function(m, key){
            return obj[key];
        });
    }

    function buildContent(text, data) {
        var content,
            field,
            replacement,
            renderer,
            rendererParameters,
            replacements = {};

        if (data) {
            for (field in data) {
                replacement = data[field];
                if (replacement.url) {
                    renderer = 'simpleLink';
                    rendererParameters = {
                        href: replacement.url,
                        text: replacement.text
                    };
                 } else {
                    renderer = 'simpleSpan';
                    rendererParameters = {
                        text: replacement.text
                    };
                }
                replacements[field] = Handlebars.templates[renderer](rendererParameters);
            }
            content = text ? buildContext(text, replacements) : '';
        } else {
            content = text;
        }

        return content;
    }

    function truncate (str, data) {
        var splitString = [],
            outputString = '',
            str = str || '',
            data = data || {},
            max = data.max || 40,
            type = data.type || 'end',
            strLength = str.length,
            ellipsis = data.ellipsis || '&hellip;',
            i,
            ii;

        function endTruncate(str, max, ellipsis) {
            var strArr = [];

            strArr.push(str.slice(0, max));
            strArr.push(ellipsis);

            return strArr.join('');
        }

        function middleTruncate(str, max, ellipsis) {
            var strArr = [];

            strArr.push(str.slice(0, max/2));
            strArr.push(ellipsis);
            strArr.push(str.slice(-max/2));

            return strArr.join('');
        }

        function hasSpecialChar(str) {
            if (str.match(/[!;\:|,.?\/\s]/) !== null) {
                return true;
            }

            return false;
        }

        // only truncates at eow
        function wordTruncate(str, max, ellipsis) {
            var strLength = 0,
                strArr,
                truncated;

            strArr = $('<div/>').html(str)
            .text()
            .split(/\b/);

            truncated = _(strArr).chain()
            .filter(function (word, i) {
                var nextWord = strArr[i + 1] || "";

                strLength += word.length;

                // don't end string on punctuation or space
                if ((strLength + nextWord.length > max) && (hasSpecialChar(word) || hasSpecialChar(nextWord))) {
                    return false;
                }

                return strLength < max;
            })
            .push(ellipsis)
            .join('')
            .value();

            if (strArr.length === 1 || truncated === ellipsis) {
                truncated = endTruncate(str, max, ellipsis);
            }

            return truncated;
        }

        // shall we truncate?
        if (strLength <= max) {
            return str;
        }

        switch (type) {
        case "word":
            outputString = wordTruncate(str, max, ellipsis);
            break;
        case "center":
        case "middle":
            outputString = middleTruncate(str, max, ellipsis);
            break;
        default:
            outputString = endTruncate(str, max, ellipsis);
            break;
        }

        return outputString;
    }

    /*
     * Handlebars Helpers
     */
    Handlebars.registerHelper("debug", function(optionalValue) {
        console.log("Current Context");
        console.log("====================");
        console.log(this);

        if (optionalValue) {
            console.log("Value");
            console.log("====================");
            console.log(optionalValue);
        }
    });


    /**
     * {{truncate str max=12}} truncates str to 12th character, adds &hellip; at end
     * {{truncate str max=12 position="middle"}} truncates str with &hellip; in the center
     * {{truncate str max=12 ellipsis="...etc."}} truncates with a custom truncation at end
     */
    Handlebars.registerHelper('truncate', function (str, options) {
        var data = {
            type: options.hash.type || options.hash.position || 'end',
            max: options.hash.max || 40,
            ellipsis: options.hash.ellipsis || "&hellip;"
        };

        return new Handlebars.SafeString(truncate(str, data));
    });

    // @TODO kill this and add option to truncate instead
    Handlebars.registerHelper('truncateClean', function (str, options) {
        var data = {
            type: options.hash.type || options.hash.position || 'end',
            max: options.hash.max || 40,
            ellipsis: options.hash.ellipsis || "&hellip;"
        };

        return truncate(str, data);
    });

    Handlebars.registerHelper("ifEqual", function(one, two, val) {
        if (one === two) {
            return val;
        }

        return "";
    });

    Handlebars.registerHelper('if_eq', function(context, options) {
        if (context == options.hash.compare) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    /*
     * classFormatter
     */
    Handlebars.registerHelper("classFormatter", function(string) {
        if (!string) {
            return;
        }

        return string.replace(/\//g, '-').toLowerCase();
    });

    /**
     * Render a template inside the current template
     * {{{subtemplate template="templateName" otherData="foobar" moarData="foobaz"}}}
     * @return string
     */
    Handlebars.registerHelper('subtemplate', function (options) {
        var data = options.hash,
            subtemplate = data.template || '';

        if ('' != subtemplate) {
            return Handlebars.templates[subtemplate](data);
        }
    });

    // requires momentjs.com library
    Handlebars.registerHelper('dateFormat', function(timestamp, format) {
        return moment(timestamp * 1000).format(format);
    });

    /*
     * Converts seconds into formatted time duration hour:minute:seconds format
     * {{seconds_to_hms}}
     * @return string - formatted time duration
     */
    Handlebars.registerHelper('seconds_to_hms', function(seconds) {
        // @todo: try using moment.js for this
        var hours   = Math.floor(seconds / 3600),
            minutes = Math.floor(seconds % 3600 / 60),
            seconds = Math.floor(seconds % 60);

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        return hours + ':' + minutes + ':' + seconds;
    });

    Handlebars.registerHelper("withInteraction", function(interaction, block) {
        if (interaction.data.count) {
            return block.fn(interaction.data.items[0]);
        }
    });

    Handlebars.registerHelper("tileContext", function(context, split, destination) {
        var content,
            output = '';

        if (!context) {
            return;
        }

        if (context.text) {
            content = buildContent(context.text.text, context.text.data);

            output += Handlebars.templates["tileContextText"]({
                content: content,
                type: context.text.type
            });
        }

        if (context.users) {
            output += Handlebars.templates["tileContextUsers"]({
                users: context.users.slice(0, split),
                overflow: (context.users.length > split) ? context.users.length - split : null,
                destination: destination
            });
        }

        return output;
    });

    Handlebars.registerHelper("contentBuilder", function(activity) {
        return buildContent(activity.text, activity.data);
    });

    Handlebars.registerHelper("userHoverThumb", function(user, elClass, size) {
        _.isString(size) || (size = "small");
        elClass || (elClass = "");

        return "<img src='" + user.thumbs[size].url + "' class='hover-user " + elClass + "' data-user='" + user.urlProfile + "'/>";
    });

    /*
     * notificationThumbHandler
     */
    Handlebars.registerHelper("notificationUrlThumbHandler", function(thumb) {
        var outputString = [],
            widthConstant = 228,
            width,
            height,
            resizeConstant;

        if (!thumb) {
            return;
        }

        width = thumb.width || false;
        height = thumb.height || false;

        outputString.push(' src="');
        outputString.push(thumb.url);
        outputString.push('" style="width:');
        outputString.push(widthConstant);
        outputString.push('px; ');

        if (width && height) {
            resizeConstant = widthConstant / width;
            outputString.push(' height:');
            outputString.push(parseInt(height * resizeConstant, 10));
            outputString.push('px;');
        }

        outputString.push('"');

        return outputString.join('');;
    });

    Handlebars.registerHelper('truncateTitle', function (title, titleType, options) {

        var truncateOptions = options.hash || {},
            pattern = /[^:]*:\/\/([^\/]*)([^?]*)(.*)/,
            urlArray;

        if (!title) {
            return "";
        }

        // truncate if needed
        switch (titleType) {
            case "url":
                urlArray = title.match(pattern);
                title = urlArray[1].replace(/^www[.]/, '');

                if (truncateOptions.max) {
                    truncateOptions.type = 'middle';
                    title = truncate(title, truncateOptions);
                }
                break;

            case "title":
            case "comment":
                if (truncateOptions.max) {
                    truncateOptions.type = 'word';
                    title = truncate(title, truncateOptions);
                }
                break;
        }

        return title;
    });

    /**
     * stringSub
     * handles string replacement for delimited %s% strings
     */
     Handlebars.registerHelper('stringSub', function (str, obj) {
        return buildContext(str, obj);
    });

     Handlebars.registerHelper('url_encode', function (str) {
        return encodeURIComponent(str);
    });

    /**
     * Returns class based on modValue
     * Defaults are set ONLY for legacy support, and all values should
     * ideally be explicitly set in args object
     * e.g. {{cycle modVaule=3 modClass="s-mod" defaultClass=""}}
     */
    var cycleVal = 0;
    Handlebars.registerHelper('cycle', function (options) {
        var defaultClass = options.hash.defaultClass || 's-odd',
            modClass = options.hash.modClass || 's-even',
            modValue = options.hash.modValue || 2;

        cycleVal ++;
        return cycleVal % modValue ? defaultClass : modClass;
    });

    /*
     * number_format helper
     */
    Handlebars.registerHelper('number_format', function(number, decimals, dec_point, thousands_sep) {
        // Formats a number with grouped thousands
        //
        // version: 1109.2015
        // discuss at: http://phpjs.org/functions/number_format
        // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +     bugfix by: Michael White (http://getsprink.com)
        // +     bugfix by: Benjamin Lupton
        // +     bugfix by: Allan Jensen (http://www.winternet.no)
        // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
        // +     bugfix by: Howard Yeend
        // +    revised by: Luke Smith (http://lucassmith.name)
        // +     bugfix by: Diogo Resende
        // +     bugfix by: Rival
        // +      input by: Kheang Hok Chin (http://www.distantia.ca/)
        // +   improved by: davook
        // +   improved by: Brett Zamir (http://brett-zamir.me)
        // +      input by: Jay Klehr
        // +   improved by: Brett Zamir (http://brett-zamir.me)
        // +      input by: Amir Habibi (http://www.residence-mixte.com/)
        // +     bugfix by: Brett Zamir (http://brett-zamir.me)
        // +   improved by: Theriault
        // +      input by: Amirouche
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // *     example 1: number_format(1234.56);
        // *     returns 1: '1,235'
        // *     example 2: number_format(1234.56, 2, ',', ' ');
        // *     returns 2: '1 234,56'
        // *     example 3: number_format(1234.5678, 2, '.', '');
        // *     returns 3: '1234.57'
        // *     example 4: number_format(67, 2, ',', '.');
        // *     returns 4: '67,00'
        // *     example 5: number_format(1000);
        // *     returns 5: '1,000'
        // *     example 6: number_format(67.311, 2);
        // *     returns 6: '67.31'
        // *     example 7: number_format(1000.55, 1);
        // *     returns 7: '1,000.6'
        // *     example 8: number_format(67000, 5, ',', '.');
        // *     returns 8: '67.000,00000'
        // *     example 9: number_format(0.9, 0);
        // *     returns 9: '1'
        // *    example 10: number_format('1.20', 2);
        // *    returns 10: '1.20'
        // *    example 11: number_format('1.20', 4);
        // *    returns 11: '1.2000'
        // *    example 12: number_format('1.2000', 3);
        // *    returns 12: '1.200'
        // *    example 13: number_format('1 000,50', 2, '.', ' ');
        // *    returns 13: '100 050.00'
        // Strip all characters but numerical ones.
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined' || typeof thousands_sep === 'object') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined' || typeof dec_point === 'object') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + Math.round(n * k) / k;
            };

        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    });

    /**
     * Convert new line (\n\r) to <br>
     * from http://phpjs.org/functions/nl2br:480
     */
    Handlebars.registerHelper('nl2br', function(text) {
        var nl2br = (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
        return new Handlebars.SafeString(nl2br);
    });
})();/**
 * Global site js
 *
 * include in master after jQuery or related lib
 *
 * @author jrylan, haroun,  mdavid
 */

// Globals
var SU, Handlebars, FB, console, Sync;

(function(){
    "use strict";
    /**
     * Don't break debugging for browsers without dev tools
     *
     * We can safely remove this once we rollout the production (non beta) site
     */
    if (typeof console == "undefined") {
        var _null = function(){};
        window.console = console = {
            'error': _null,
            'warn': _null,
            'info': _null,
            'debug': _null,
            'log': _null
        };
    }

    window.Handlebars = Handlebars = window.Handlebars || false;
    window.FB = FB = window.FB || false;

    window.SU = SU = {
        Captcha: {
            _callbacks: [],

            isRequired: function(data) {
                return (data && data._captcha);
            },

            show: function(callback) {
                SU.Captcha._callbacks.push(callback);
                SU.Modal.loadURL("/captcha", {iframe:true}).open();
            },

            executeCallbacks: function() {
                for (var i=0, callback; callback=SU.Captcha._callbacks[i]; i++) {
                    callback();
                }
            }
        }
    };

    window.SUdebug = {
        spa: false
    };

    SU.addInit = Base.addInit;
    SU.initialize = Base.initialize;
    SU.log = function(msg) {
        var text = 'SU:';
        // console-only logging for now
        if (typeof window.console === 'undefined') {
            return;
        }
        if (window != window.top) {
            text += 'CF:';
        }
        text += msg;
        window.console.log(text);
    }


    /**
     * Setup sync
     */
    Base.Sync.prototype.emulateMethods("_method");
    Base.Sync.prototype.set({
        "_output": "Json"
    });
    Base.Sync.prototype.set("GET", {
        "_action": "get"
    });


    /**
     * window.Sync is intended to be used as a general replacement for $.ajax
     *
     * This allows for normalization between jQuery and Zepto as issues arise.
     */
    var _sync = new Base.Sync;
    window.Sync = Sync = function(url) {
        _sync._settings.url = url;
        return _sync;
    };


    /**
    * Controller
    */
    extend(Base.Controller.prototype, {
        fetchState: function() {
            var self = this;

            if (this.route.isNewURL()) {
                if (self.__router__.get("__source__") == "direct") {
                    $('html,body').animate({scrollTop: $("#content").offset().top}, "fast");
                }

                Sync( this.__router__.get("url") ).read({"_nohead":true, "_output":"html"})
                    .success(function(response){
                        $("#content").html( $(response).html() );
                        self.__router__.trigger("ready");
                    })
                    .error(function(jqXHR, textStatus, errorThrown){
                        if (errorThrown) {
                            self.__router__.trigger("error");
                        }
                    });
            }
        },

        unauthorizedRequest: function(source) {
            var url = "/login",
                segments = [];

            if (source) {
                url = url + "?";
                var i = 0;
                for (var key in source) {
                    segments[i] = key + "=" + source[key];
                    i++;
                }
            }

            window.location = url + segments.join("&");
        }
    });


    /**
    * View
    */
    extend(Base.View.prototype, {
        _selectorCache: {},

        $sel: function(query) {
            if (this._selectorCache[query]) {
                return this._selectorCache[query];
            } else {
                this._selectorCache[query] = this.$el.find(query);
                return this._selectorCache[query];
            }
        },

        pageUpdateInProgress: function(route) {
            this.$sel(".page-loading-overlay").height( this.$sel(".l-content-primary-wrap").height() + 50 );
            this.$sel(".page-loading-wrapper").css("height", "auto");
        },

        pageUpdateCompleted: function(route) {
            this.initialize(); // Regather selectors
            this._selectorCache = {};

            // Update the document title
            var $h1 = this.$el.find(".l-content-primary h1:first");
            if ($h1) {
                // Look for a data-title attribute first, in case we need the doc title to be different from the H1
                var dataTitle = $h1.data("title"),
                    pageTitle = dataTitle ? dataTitle : $h1.text(); // Fall back on H1 contents if data-title is absent

                document.title = pageTitle + " | StumbleUpon.com";
            }
        },

        pageUpdateError: function(route) {
            alert("Oops! Something went wrong while processing your request. Please try again");
            this.$sel(".page-loading-wrapper").hide();
        }
    });


    /**
    * Setup our reusable modal instance
    *
    * DOM elements are not injected until the modal is used for the first time.
    */
    SU.addInit("mModal", function(config){
        SU.Modal = new Base.Modal(config);
    });
}).call(this);/**
 * JS Error reporting (SER = Stumble Error Reporting)
 *
 * Catch js errors and report them to the server
 *
 * @author fabrice
 */
(function(){

    SU.SER = function (previousHandler, app) {
        this.previousHandler = previousHandler;
        this.app = app;
        this.language = 'javascript';
        this.limit = 1;
        this.current = 0;

        return true;
    };

    SU.SER.prototype = {
        onError: function(errorMsg, url, lineNumber) {
            if (this.current >= this.limit) return;

            this.current++;

            this.reportError(errorMsg, url, lineNumber);
            if (this.previousHandler) {
                try {
                    this.previousHandler(errorMsg, url, lineNumber);
                } catch (err) {}
            }
        },

        reportError: function(errorMsg, url, lineNumber) {
            this.reportMessage('error', errorMsg, url, lineNumber);
        },

        reportMessage: function(type, message, url, lineNumber) {
            var referer = '',
                location = '';
            try {
                referer = document.referer;
            } catch (err) {}
            try {
                location = document.location.href;
            } catch (err) {}
            $.post("/report/message", {
                type: type,
                message: message,
                url: url,
                location: location,
                referer: referer,
                linenumber: lineNumber,
                app: this.app,
                language: this.language
            });
        }
    };

    var handler = new SU.SER(window.onerror, 'web');

    window.onerror = function(errorMsg, url, lineNumber) {
        try {
            handler.onError(errorMsg, url, lineNumber);
        } catch (err) {}
    };

}).call(this);$.fn.spin = function(opts) {
  this.each(function() {
    var $this = $(this),
        data = $this.data();

    if (data.spinner) {
      data.spinner.stop();
      delete data.spinner;
    }
    if (opts !== false) {
      data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
    }
  });
  return this;
};/*! qTip2 - Pretty powerful tooltips - v2.0.0 - 2012-09-10
* http://craigsworks.com/projects/qtip2/
* Copyright (c) 2012 Craig Michael Thompson; Licensed MIT, GPL */

/*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
/*global window: false, jQuery: false, console: false, define: false */

/* Cache window, document, undefined */
(function( window, document, undefined ) {

// Uses AMD or browser globals to create a jQuery plugin.
(function( factory ) {
    "use strict";
    if(typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    }
    else if(jQuery && !jQuery.fn.qtip) {
        factory(jQuery);
    }
}
(function($) {
    /* This currently causes issues with Safari 6, so for it's disabled */
    //"use strict"; // (Dis)able ECMAScript "strict" operation for this function. See more: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/

    // Munge the primitives - Paul Irish tip
    var TRUE = true,
        FALSE = false,
        NULL = null,

        // Side names and other stuff
        X = 'x', Y = 'y',
        WIDTH = 'width',
        HEIGHT = 'height',
        TOP = 'top',
        LEFT = 'left',
        BOTTOM = 'bottom',
        RIGHT = 'right',
        CENTER = 'center',
        FLIP = 'flip',
        FLIPINVERT = 'flipinvert',
        SHIFT = 'shift',

        // Shortcut vars
        QTIP, PLUGINS, MOUSE,
        usedIDs = {},
        uitooltip = 'ui-tooltip',
        widget = 'ui-widget',
        disabled = 'ui-state-disabled',
        selector = 'div.qtip.'+uitooltip,
        defaultClass = uitooltip + '-default',
        focusClass = uitooltip + '-focus',
        hoverClass = uitooltip + '-hover',
        replaceSuffix = '_replacedByqTip',
        oldtitle = 'oldtitle',
        trackingBound,
        redrawContainer;

    /*
    * redraw() container for width/height calculations
    */
    redrawContainer = $('<div/>', { id: 'qtip-rcontainer' });
    $(function() { redrawContainer.appendTo(document.body); });



// Option object sanitizer
function sanitizeOptions(opts)
{
    var invalid = function(a) { return a === NULL || 'object' !== typeof a; },
        invalidContent = function(c) { return !$.isFunction(c) && ((!c && !c.attr) || c.length < 1 || ('object' === typeof c && !c.jquery)); };

    if(!opts || 'object' !== typeof opts) { return FALSE; }

    if(invalid(opts.metadata)) {
        opts.metadata = { type: opts.metadata };
    }

    if('content' in opts) {
        if(invalid(opts.content) || opts.content.jquery) {
            opts.content = { text: opts.content };
        }

        if(invalidContent(opts.content.text || FALSE)) {
            opts.content.text = FALSE;
        }

        if('title' in opts.content) {
            if(invalid(opts.content.title)) {
                opts.content.title = { text: opts.content.title };
            }

            if(invalidContent(opts.content.title.text || FALSE)) {
                opts.content.title.text = FALSE;
            }
        }
    }

    if('position' in opts && invalid(opts.position)) {
        opts.position = { my: opts.position, at: opts.position };
    }

    if('show' in opts && invalid(opts.show)) {
        opts.show = opts.show.jquery ? { target: opts.show } : { event: opts.show };
    }

    if('hide' in opts && invalid(opts.hide)) {
        opts.hide = opts.hide.jquery ? { target: opts.hide } : { event: opts.hide };
    }

    if('style' in opts && invalid(opts.style)) {
        opts.style = { classes: opts.style };
    }

    // Sanitize plugin options
    $.each(PLUGINS, function() {
        if(this.sanitize) { this.sanitize(opts); }
    });

    return opts;
}

/*
* Core plugin implementation
*/
function QTip(target, options, id, attr)
{
    // Declare this reference
    var self = this,
        docBody = document.body,
        tooltipID = uitooltip + '-' + id,
        isPositioning = 0,
        isDrawing = 0,
        tooltip = $(),
        namespace = '.qtip-' + id,
        elements, cache;

    // Setup class attributes
    self.id = id;
    self.rendered = FALSE;
    self.destroyed = FALSE;
    self.elements = elements = { target: target };
    self.timers = { img: {} };
    self.options = options;
    self.checks = {};
    self.plugins = {};
    self.cache = cache = {
        event: {},
        target: $(),
        disabled: FALSE,
        attr: attr,
        onTarget: FALSE,
        lastClass: ''
    };

    /*
    * Private core functions
    */
    function convertNotation(notation)
    {
        var i = 0, obj, option = options,

        // Split notation into array
        levels = notation.split('.');

        // Loop through
        while( option = option[ levels[i++] ] ) {
            if(i < levels.length) { obj = option; }
        }

        return [obj || options, levels.pop()];
    }

    function triggerEvent(type, args, event) {
        var callback = $.Event('tooltip'+type);
        callback.originalEvent = (event ? $.extend({}, event) : NULL) || cache.event || NULL;
        tooltip.trigger(callback, [self].concat(args || []));

        return !callback.isDefaultPrevented();
    }

    function setWidget()
    {
        var on = options.style.widget;

        tooltip.toggleClass('ui-helper-reset '+widget, on).toggleClass(defaultClass, options.style.def && !on);

        if(elements.content) {
            elements.content.toggleClass(widget+'-content', on);
        }

        if(elements.titlebar) {
            elements.titlebar.toggleClass(widget+'-header', on);
        }
        if(elements.button) {
            elements.button.toggleClass(uitooltip+'-icon', !on);
        }
    }

    function removeTitle(reposition)
    {
        if(elements.title) {
            elements.titlebar.remove();
            elements.titlebar = elements.title = elements.button = NULL;

            // Reposition if enabled
            if(reposition !== FALSE) { self.reposition(); }
        }
    }

    function createButton()
    {
        var button = options.content.title.button,
            isString = typeof button === 'string',
            close = isString ? button : 'Close tooltip';

        if(elements.button) { elements.button.remove(); }

        // Use custom button if one was supplied by user, else use default
        if(button.jquery) {
            elements.button = button;
        }
        else {
            elements.button = $('<a />', {
                'class': 'ui-state-default ui-tooltip-close ' + (options.style.widget ? '' : uitooltip+'-icon'),
                'title': close,
                'aria-label': close
            })
            .prepend(
                $('<span />', {
                    'class': 'ui-icon ui-icon-close',
                    'html': '&times;'
                })
            );
        }

        // Create button and setup attributes
        elements.button.appendTo(elements.titlebar)
            .attr('role', 'button')
            .click(function(event) {
                if(!tooltip.hasClass(disabled)) { self.hide(event); }
                return FALSE;
            });

        // Redraw the tooltip when we're done
        self.redraw();
    }

    function createTitle()
    {
        var id = tooltipID+'-title';

        // Destroy previous title element, if present
        if(elements.titlebar) { removeTitle(); }

        // Create title bar and title elements
        elements.titlebar = $('<div />', {
            'class': uitooltip + '-titlebar ' + (options.style.widget ? 'ui-widget-header' : '')
        })
        .append(
            elements.title = $('<div />', {
                'id': id,
                'class': uitooltip + '-title',
                'aria-atomic': TRUE
            })
        )
        .insertBefore(elements.content)

        // Button-specific events
        .delegate('.ui-tooltip-close', 'mousedown keydown mouseup keyup mouseout', function(event) {
            $(this).toggleClass('ui-state-active ui-state-focus', event.type.substr(-4) === 'down');
        })
        .delegate('.ui-tooltip-close', 'mouseover mouseout', function(event){
            $(this).toggleClass('ui-state-hover', event.type === 'mouseover');
        });

        // Create button if enabled
        if(options.content.title.button) { createButton(); }

        // Redraw the tooltip dimensions if it's rendered
        else if(self.rendered){ self.redraw(); }
    }

    function updateButton(button)
    {
        var elem = elements.button,
            title = elements.title;

        // Make sure tooltip is rendered and if not, return
        if(!self.rendered) { return FALSE; }

        if(!button) {
            elem.remove();
        }
        else {
            if(!title) {
                createTitle();
            }
            createButton();
        }
    }

    function updateTitle(content, reposition)
    {
        var elem = elements.title;

        // Make sure tooltip is rendered and if not, return
        if(!self.rendered || !content) { return FALSE; }

        // Use function to parse content
        if($.isFunction(content)) {
            content = content.call(target, cache.event, self);
        }

        // Remove title if callback returns false or null/undefined (but not '')
        if(content === FALSE || (!content && content !== '')) { return removeTitle(FALSE); }

        // Append new content if its a DOM array and show it if hidden
        else if(content.jquery && content.length > 0) {
            elem.empty().append(content.css({ display: 'block' }));
        }

        // Content is a regular string, insert the new content
        else { elem.html(content); }

        // Redraw and reposition
        self.redraw();
        if(reposition !== FALSE && self.rendered && tooltip[0].offsetWidth > 0) {
            self.reposition(cache.event);
        }
    }

    function updateContent(content, reposition)
    {
        var elem = elements.content;

        // Make sure tooltip is rendered and content is defined. If not return
        if(!self.rendered || !content) { return FALSE; }

        // Use function to parse content
        if($.isFunction(content)) {
            content = content.call(target, cache.event, self) || '';
        }

        // Append new content if its a DOM array and show it if hidden
        if(content.jquery && content.length > 0) {
            elem.empty().append(content.css({ display: 'block' }));
        }

        // Content is a regular string, insert the new content
        else { elem.html(content); }

        // Image detection
        function detectImages(next) {
            var images, srcs = {};

            function imageLoad(image) {
                // Clear src from object and any timers and events associated with the image
                if(image) {
                    delete srcs[image.src];
                    clearTimeout(self.timers.img[image.src]);
                    $(image).unbind(namespace);
                }

                // If queue is empty after image removal, update tooltip and continue the queue
                if($.isEmptyObject(srcs)) {
                    self.redraw();
                    if(reposition !== FALSE) {
                        self.reposition(cache.event);
                    }

                    next();
                }
            }

            // Find all content images without dimensions, and if no images were found, continue
            if((images = elem.find('img[src]:not([height]):not([width])')).length === 0) { return imageLoad(); }

            // Apply timer to each image to poll for dimensions
            images.each(function(i, elem) {
                // Skip if the src is already present
                if(srcs[elem.src] !== undefined) { return; }

                // Keep track of how many times we poll for image dimensions.
                // If it doesn't return in a reasonable amount of time, it's better
                // to display the tooltip, rather than hold up the queue.
                var iterations = 0, maxIterations = 3;

                (function timer(){
                    // When the dimensions are found, remove the image from the queue
                    if(elem.height || elem.width || (iterations > maxIterations)) { return imageLoad(elem); }

                    // Increase iterations and restart timer
                    iterations += 1;
                    self.timers.img[elem.src] = setTimeout(timer, 700);
                }());

                // Also apply regular load/error event handlers
                $(elem).bind('error'+namespace+' load'+namespace, function(){ imageLoad(this); });

                // Store the src and element in our object
                srcs[elem.src] = elem;
            });
        }

        /*
        * If we're still rendering... insert into 'fx' queue our image dimension
        * checker which will halt the showing of the tooltip until image dimensions
        * can be detected properly.
        */
        if(self.rendered < 0) { tooltip.queue('fx', detectImages); }

        // We're fully rendered, so reset isDrawing flag and proceed without queue delay
        else { isDrawing = 0; detectImages($.noop); }

        return self;
    }

    function assignEvents()
    {
        var posOptions = options.position,
            targets = {
                show: options.show.target,
                hide: options.hide.target,
                viewport: $(posOptions.viewport),
                document: $(document),
                body: $(document.body),
                window: $(window)
            },
            events = {
                show: $.trim('' + options.show.event).split(' '),
                hide: $.trim('' + options.hide.event).split(' ')
            },
            IE6 = $.browser.msie && parseInt($.browser.version, 10) === 6;

        // Define show event method
        function showMethod(event)
        {
            if(tooltip.hasClass(disabled)) { return FALSE; }

            // Clear hide timers
            clearTimeout(self.timers.show);
            clearTimeout(self.timers.hide);

            // Start show timer
            var callback = function(){ self.toggle(TRUE, event); };
            if(options.show.delay > 0) {
                self.timers.show = setTimeout(callback, options.show.delay);
            }
            else{ callback(); }
        }

        // Define hide method
        function hideMethod(event)
        {
            if(tooltip.hasClass(disabled) || isPositioning || isDrawing) { return FALSE; }

            // Check if new target was actually the tooltip element
            var relatedTarget = $(event.relatedTarget || event.target),
                ontoTooltip = relatedTarget.closest(selector)[0] === tooltip[0],
                ontoTarget = relatedTarget[0] === targets.show[0];

            // Clear timers and stop animation queue
            clearTimeout(self.timers.show);
            clearTimeout(self.timers.hide);

            // Prevent hiding if tooltip is fixed and event target is the tooltip. Or if mouse positioning is enabled and cursor momentarily overlaps
            if((posOptions.target === 'mouse' && ontoTooltip) || (options.hide.fixed && ((/mouse(out|leave|move)/).test(event.type) && (ontoTooltip || ontoTarget)))) {
                try { event.preventDefault(); event.stopImmediatePropagation(); } catch(e) {} return;
            }

            // If tooltip has displayed, start hide timer
            if(options.hide.delay > 0) {
                self.timers.hide = setTimeout(function(){ self.hide(event); }, options.hide.delay);
            }
            else{ self.hide(event); }
        }

        // Define inactive method
        function inactiveMethod(event)
        {
            if(tooltip.hasClass(disabled)) { return FALSE; }

            // Clear timer
            clearTimeout(self.timers.inactive);
            self.timers.inactive = setTimeout(function(){ self.hide(event); }, options.hide.inactive);
        }

        function repositionMethod(event) {
            if(self.rendered && tooltip[0].offsetWidth > 0) { self.reposition(event); }
        }

        // On mouseenter/mouseleave...
        tooltip.bind('mouseenter'+namespace+' mouseleave'+namespace, function(event) {
            var state = event.type === 'mouseenter';

            // Focus the tooltip on mouseenter (z-index stacking)
            if(state) { self.focus(event); }

            // Add hover class
            tooltip.toggleClass(hoverClass, state);
        });

        // If using mouseout/mouseleave as a hide event...
        if(/mouse(out|leave)/i.test(options.hide.event)) {
            // Hide tooltips when leaving current window/frame (but not select/option elements)
            if(options.hide.leave === 'window') {
                targets.window.bind('mouseout'+namespace+' blur'+namespace, function(event) {
                    if(!/select|option/.test(event.target.nodeName) && !event.relatedTarget) { self.hide(event); }
                });
            }
        }

        // Enable hide.fixed
        if(options.hide.fixed) {
            // Add tooltip as a hide target
            targets.hide = targets.hide.add(tooltip);

            // Clear hide timer on tooltip hover to prevent it from closing
            tooltip.bind('mouseover'+namespace, function() {
                if(!tooltip.hasClass(disabled)) { clearTimeout(self.timers.hide); }
            });
        }

        /*
        * Make sure hoverIntent functions properly by using mouseleave to clear show timer if
        * mouseenter/mouseout is used for show.event, even if it isn't in the users options.
        */
        else if(/mouse(over|enter)/i.test(options.show.event)) {
            targets.hide.bind('mouseleave'+namespace, function(event) {
                clearTimeout(self.timers.show);
            });
        }

        // Hide tooltip on document mousedown if unfocus events are enabled
        if(('' + options.hide.event).indexOf('unfocus') > -1) {
            posOptions.container.closest('html').bind('mousedown'+namespace, function(event) {
                var elem = $(event.target),
                    enabled = self.rendered && !tooltip.hasClass(disabled) && tooltip[0].offsetWidth > 0,
                    isAncestor = elem.parents(selector).filter(tooltip[0]).length > 0;

                if(elem[0] !== target[0] && elem[0] !== tooltip[0] && !isAncestor &&
                    !target.has(elem[0]).length && !elem.attr('disabled')
                ) {
                    self.hide(event);
                }
            });
        }

        // Check if the tooltip hides when inactive
        if('number' === typeof options.hide.inactive) {
            // Bind inactive method to target as a custom event
            targets.show.bind('qtip-'+id+'-inactive', inactiveMethod);

            // Define events which reset the 'inactive' event handler
            $.each(QTIP.inactiveEvents, function(index, type){
                targets.hide.add(elements.tooltip).bind(type+namespace+'-inactive', inactiveMethod);
            });
        }

        // Apply hide events
        $.each(events.hide, function(index, type) {
            var showIndex = $.inArray(type, events.show),
                    targetHide = $(targets.hide);

            // Both events and targets are identical, apply events using a toggle
            if((showIndex > -1 && targetHide.add(targets.show).length === targetHide.length) || type === 'unfocus')
            {
                targets.show.bind(type+namespace, function(event) {
                    if(tooltip[0].offsetWidth > 0) { hideMethod(event); }
                    else { showMethod(event); }
                });

                // Don't bind the event again
                delete events.show[ showIndex ];
            }

            // Events are not identical, bind normally
            else { targets.hide.bind(type+namespace, hideMethod); }
        });

        // Apply show events
        $.each(events.show, function(index, type) {
            targets.show.bind(type+namespace, showMethod);
        });

        // Check if the tooltip hides when mouse is moved a certain distance
        if('number' === typeof options.hide.distance) {
            // Bind mousemove to target to detect distance difference
            targets.show.add(tooltip).bind('mousemove'+namespace, function(event) {
                var origin = cache.origin || {},
                    limit = options.hide.distance,
                    abs = Math.abs;

                // Check if the movement has gone beyond the limit, and hide it if so
                if(abs(event.pageX - origin.pageX) >= limit || abs(event.pageY - origin.pageY) >= limit) {
                    self.hide(event);
                }
            });
        }

        // Mouse positioning events
        if(posOptions.target === 'mouse') {
            // Cache mousemove coords on show targets
            targets.show.bind('mousemove'+namespace, function(event) {
                MOUSE = { pageX: event.pageX, pageY: event.pageY, type: 'mousemove' };
            });

            // If mouse adjustment is on...
            if(posOptions.adjust.mouse) {
                // Apply a mouseleave event so we don't get problems with overlapping
                if(options.hide.event) {
                    // Hide when we leave the tooltip and not onto the show target
                    tooltip.bind('mouseleave'+namespace, function(event) {
                        if((event.relatedTarget || event.target) !== targets.show[0]) { self.hide(event); }
                    });

                    // Track if we're on the target or not
                    elements.target.bind('mouseenter'+namespace+' mouseleave'+namespace, function(event) {
                        cache.onTarget = event.type === 'mouseenter';
                    });
                }

                // Update tooltip position on mousemove
                targets.document.bind('mousemove'+namespace, function(event) {
                    // Update the tooltip position only if the tooltip is visible and adjustment is enabled
                    if(self.rendered && cache.onTarget && !tooltip.hasClass(disabled) && tooltip[0].offsetWidth > 0) {
                        self.reposition(event || MOUSE);
                    }
                });
            }
        }

        // Adjust positions of the tooltip on window resize if enabled
        if(posOptions.adjust.resize || targets.viewport.length) {
            ($.event.special.resize ? targets.viewport : targets.window).bind('resize'+namespace, repositionMethod);
        }

        // Adjust tooltip position on scroll if screen adjustment is enabled
        if(targets.viewport.length || (IE6 && tooltip.css('position') === 'fixed')) {
            targets.viewport.bind('scroll'+namespace, repositionMethod);
        }
    }

    function unassignEvents()
    {
        var targets = [
                options.show.target[0],
                options.hide.target[0],
                self.rendered && elements.tooltip[0],
                options.position.container[0],
                options.position.viewport[0],
                options.position.container.closest('html')[0], // unfocus
                window,
                document
            ];

        // Check if tooltip is rendered
        if(self.rendered) {
            $([]).pushStack( $.grep(targets, function(i){ return typeof i === 'object'; }) ).unbind(namespace);
        }

        // Tooltip isn't yet rendered, remove render event
        else { options.show.target.unbind(namespace+'-create'); }
    }

    // Setup builtin .set() option checks
    self.checks.builtin = {
        // Core checks
        '^id$': function(obj, o, v) {
            var id = v === TRUE ? QTIP.nextid : v,
                tooltipID = uitooltip + '-' + id;

            if(id !== FALSE && id.length > 0 && !$('#'+tooltipID).length) {
                tooltip[0].id = tooltipID;
                elements.content[0].id = tooltipID + '-content';
                elements.title[0].id = tooltipID + '-title';
            }
        },

        // Content checks
        '^content.text$': function(obj, o, v){ updateContent(v); },
        '^content.title.text$': function(obj, o, v) {
            // Remove title if content is null
            if(!v) { return removeTitle(); }

            // If title isn't already created, create it now and update
            if(!elements.title && v) { createTitle(); }
            updateTitle(v);
        },
        '^content.title.button$': function(obj, o, v){ updateButton(v); },

        // Position checks
        '^position.(my|at)$': function(obj, o, v){
            // Parse new corner value into Corner objecct
            if('string' === typeof v) {
                obj[o] = new PLUGINS.Corner(v);
            }
        },
        '^position.container$': function(obj, o, v){
            if(self.rendered) { tooltip.appendTo(v); }
        },

        // Show checks
        '^show.ready$': function() {
            if(!self.rendered) { self.render(1); }
            else { self.toggle(TRUE); }
        },

        // Style checks
        '^style.classes$': function(obj, o, v) {
            tooltip.attr('class', uitooltip + ' qtip ' + v);
        },
        '^style.widget|content.title': setWidget,

        // Events check
        '^events.(render|show|move|hide|focus|blur)$': function(obj, o, v) {
            tooltip[($.isFunction(v) ? '' : 'un') + 'bind']('tooltip'+o, v);
        },

        // Properties which require event reassignment
        '^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)': function() {
            var posOptions = options.position;

            // Set tracking flag
            tooltip.attr('tracking', posOptions.target === 'mouse' && posOptions.adjust.mouse);

            // Reassign events
            unassignEvents(); assignEvents();
        }
    };

    /*
    * Public API methods
    */
    $.extend(self, {
        render: function(show)
        {
            if(self.rendered) { return self; } // If tooltip has already been rendered, exit

            var text = options.content.text,
                title = options.content.title.text,
                posOptions = options.position;

            // Add ARIA attributes to target
            $.attr(target[0], 'aria-describedby', tooltipID);

            // Create tooltip element
            tooltip = elements.tooltip = $('<div/>', {
                    'id': tooltipID,
                    'class': uitooltip + ' qtip ' + defaultClass + ' ' + options.style.classes + ' '+ uitooltip + '-pos-' + options.position.my.abbrev(),
                    'width': options.style.width || '',
                    'height': options.style.height || '',
                    'tracking': posOptions.target === 'mouse' && posOptions.adjust.mouse,

                    /* ARIA specific attributes */
                    'role': 'alert',
                    'aria-live': 'polite',
                    'aria-atomic': FALSE,
                    'aria-describedby': tooltipID + '-content',
                    'aria-hidden': TRUE
                })
                .toggleClass(disabled, cache.disabled)
                .data('qtip', self)
                .appendTo(options.position.container)
                .append(
                    // Create content element
                    elements.content = $('<div />', {
                        'class': uitooltip + '-content',
                        'id': tooltipID + '-content',
                        'aria-atomic': TRUE
                    })
                );

            // Set rendered flag and prevent redundant redraw/reposition calls for now
            self.rendered = -1;
            isDrawing = 1; isPositioning = 1;

            // Create title...
            if(title) {
                createTitle();

                // Update title only if its not a callback (called in toggle if so)
                if(!$.isFunction(title)) { updateTitle(title, FALSE); }
            }

            // Set proper rendered flag and update content if not a callback function (called in toggle)
            if(!$.isFunction(text)) { updateContent(text, FALSE); }
            self.rendered = TRUE;

            // Setup widget classes
            setWidget();

            // Assign passed event callbacks (before plugins!)
            $.each(options.events, function(name, callback) {
                if($.isFunction(callback)) {
                    tooltip.bind(name === 'toggle' ? 'tooltipshow tooltiphide' : 'tooltip'+name, callback);
                }
            });

            // Initialize 'render' plugins
            $.each(PLUGINS, function() {
                if(this.initialize === 'render') { this(self); }
            });

            // Assign events
            assignEvents();

            /* Queue this part of the render process in our fx queue so we can
            * load images before the tooltip renders fully.
            *
            * See: updateContent method
            */
            tooltip.queue('fx', function(next) {
                // tooltiprender event
                triggerEvent('render');

                // Reset flags
                isDrawing = 0; isPositioning = 0;

                // Redraw the tooltip manually now we're fully rendered
                self.redraw();

                // Show tooltip if needed
                if(options.show.ready || show) {
                    self.toggle(TRUE, cache.event, FALSE);
                }

                next(); // Move on to next method in queue
            });

            return self;
        },

        get: function(notation)
        {
            var result, o;

            switch(notation.toLowerCase())
            {
                case 'dimensions':
                    result = {
                        height: tooltip.outerHeight(), width: tooltip.outerWidth()
                    };
                break;

                case 'offset':
                    result = PLUGINS.offset(tooltip, options.position.container);
                break;

                default:
                    o = convertNotation(notation.toLowerCase());
                    result = o[0][ o[1] ];
                    result = result.precedance ? result.string() : result;
                break;
            }

            return result;
        },

        set: function(option, value)
        {
            var rmove = /^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,
                rdraw = /^content\.(title|attr)|style/i,
                reposition = FALSE,
                redraw = FALSE,
                checks = self.checks,
                name;

            function callback(notation, args) {
                var category, rule, match;

                for(category in checks) {
                    for(rule in checks[category]) {
                        if(match = (new RegExp(rule, 'i')).exec(notation)) {
                            args.push(match);
                            checks[category][rule].apply(self, args);
                        }
                    }
                }
            }

            // Convert singular option/value pair into object form
            if('string' === typeof option) {
                name = option; option = {}; option[name] = value;
            }
            else { option = $.extend(TRUE, {}, option); }

            // Set all of the defined options to their new values
            $.each(option, function(notation, value) {
                var obj = convertNotation( notation.toLowerCase() ), previous;

                // Set new obj value
                previous = obj[0][ obj[1] ];
                obj[0][ obj[1] ] = 'object' === typeof value && value.nodeType ? $(value) : value;

                // Set the new params for the callback
                option[notation] = [obj[0], obj[1], value, previous];

                // Also check if we need to reposition / redraw
                reposition = rmove.test(notation) || reposition;
                redraw = rdraw.test(notation) || redraw;
            });

            // Re-sanitize options
            sanitizeOptions(options);

            /*
            * Execute any valid callbacks for the set options
            * Also set isPositioning/isDrawing so we don't get loads of redundant repositioning
            * and redraw calls.
            */
            isPositioning = isDrawing = 1; $.each(option, callback); isPositioning = isDrawing = 0;

            // Update position / redraw if needed
            if(self.rendered && tooltip[0].offsetWidth > 0) {
                if(reposition) {
                    self.reposition( options.position.target === 'mouse' ? NULL : cache.event );
                }
                if(redraw) { self.redraw(); }
            }

            return self;
        },

        toggle: function(state, event)
        {
            // Render the tooltip if showing and it isn't already
            if(!self.rendered) { return state ? self.render(1) : self; }

            var type = state ? 'show' : 'hide',
                opts = options[type],
                otherOpts = options[ !state ? 'show' : 'hide' ],
                posOptions = options.position,
                contentOptions = options.content,
                visible = tooltip[0].offsetWidth > 0,
                animate = state || opts.target.length === 1,
                sameTarget = !event || opts.target.length < 2 || cache.target[0] === event.target,
                showEvent, delay;

            // Detect state if valid one isn't provided
            if((typeof state).search('boolean|number')) { state = !visible; }

            // Return if element is already in correct state
            if(!tooltip.is(':animated') && visible === state && sameTarget) { return self; }

            // Try to prevent flickering when tooltip overlaps show element
            if(event) {
                if((/over|enter/).test(event.type) && (/out|leave/).test(cache.event.type) &&
                    options.show.target.add(event.target).length === options.show.target.length &&
                    tooltip.has(event.relatedTarget).length) {
                    return self;
                }

                // Cache event
                cache.event = $.extend({}, event);
            }

            // tooltipshow/tooltiphide events
            if(!triggerEvent(type, [90])) { return self; }

            // Set ARIA hidden status attribute
            $.attr(tooltip[0], 'aria-hidden', !!!state);

            // Execute state specific properties
            if(state) {
                // Store show origin coordinates
                cache.origin = $.extend({}, MOUSE);

                // Focus the tooltip
                self.focus(event);

                // Update tooltip content & title if it's a dynamic function
                if($.isFunction(contentOptions.text)) { updateContent(contentOptions.text, FALSE); }
                if($.isFunction(contentOptions.title.text)) { updateTitle(contentOptions.title.text, FALSE); }

                // Cache mousemove events for positioning purposes (if not already tracking)
                if(!trackingBound && posOptions.target === 'mouse' && posOptions.adjust.mouse) {
                    $(document).bind('mousemove.qtip', function(event) {
                        MOUSE = { pageX: event.pageX, pageY: event.pageY, type: 'mousemove' };
                    });
                    trackingBound = TRUE;
                }

                // Update the tooltip position
                self.reposition(event, arguments[2]);

                // Hide other tooltips if tooltip is solo
                if(!!opts.solo) {
                    $(selector, opts.solo).not(tooltip).qtip('hide', $.Event('tooltipsolo'));
                }
            }
            else {
                // Clear show timer if we're hiding
                clearTimeout(self.timers.show);

                // Remove cached origin on hide
                delete cache.origin;

                // Remove mouse tracking event if not needed (all tracking qTips are hidden)
                if(trackingBound && !$(selector+'[tracking="true"]:visible', opts.solo).not(tooltip).length) {
                    $(document).unbind('mousemove.qtip');
                    trackingBound = FALSE;
                }

                // Blur the tooltip
                self.blur(event);
            }

            // Define post-animation, state specific properties
            function after() {
                if(state) {
                    // Prevent antialias from disappearing in IE by removing filter
                    if($.browser.msie) { tooltip[0].style.removeAttribute('filter'); }

                    // Remove overflow setting to prevent tip bugs
                    tooltip.css('overflow', '');

                    // Autofocus elements if enabled
                    if('string' === typeof opts.autofocus) {
                        $(opts.autofocus, tooltip).focus();
                    }

                    // If set, hide tooltip when inactive for delay period
                    opts.target.trigger('qtip-'+id+'-inactive');
                }
                else {
                    // Reset CSS states
                    tooltip.css({
                        display: '',
                        visibility: '',
                        opacity: '',
                        left: '',
                        top: ''
                    });
                }

                // tooltipvisible/tooltiphidden events
                triggerEvent(state ? 'visible' : 'hidden');
            }

            // If no effect type is supplied, use a simple toggle
            if(opts.effect === FALSE || animate === FALSE) {
                tooltip[ type ]();
                after.call(tooltip);
            }

            // Use custom function if provided
            else if($.isFunction(opts.effect)) {
                tooltip.stop(1, 1);
                opts.effect.call(tooltip, self);
                tooltip.queue('fx', function(n){ after(); n(); });
            }

            // Use basic fade function by default
            else { tooltip.fadeTo(90, state ? 1 : 0, after); }

            // If inactive hide method is set, active it
            if(state) { opts.target.trigger('qtip-'+id+'-inactive'); }

            return self;
        },

        show: function(event){ return self.toggle(TRUE, event); },

        hide: function(event){ return self.toggle(FALSE, event); },

        focus: function(event)
        {
            if(!self.rendered) { return self; }

            var qtips = $(selector),
                curIndex = parseInt(tooltip[0].style.zIndex, 10),
                newIndex = QTIP.zindex + qtips.length,
                cachedEvent = $.extend({}, event),
                focusedElem;

            // Only update the z-index if it has changed and tooltip is not already focused
            if(!tooltip.hasClass(focusClass))
            {
                // tooltipfocus event
                if(triggerEvent('focus', [newIndex], cachedEvent)) {
                    // Only update z-index's if they've changed
                    if(curIndex !== newIndex) {
                        // Reduce our z-index's and keep them properly ordered
                        qtips.each(function() {
                            if(this.style.zIndex > curIndex) {
                                this.style.zIndex = this.style.zIndex - 1;
                            }
                        });

                        // Fire blur event for focused tooltip
                        qtips.filter('.' + focusClass).qtip('blur', cachedEvent);
                    }

                    // Set the new z-index
                    tooltip.addClass(focusClass)[0].style.zIndex = newIndex;
                }
            }

            return self;
        },

        blur: function(event) {
            // Set focused status to FALSE
            tooltip.removeClass(focusClass);

            // tooltipblur event
            triggerEvent('blur', [tooltip.css('zIndex')], event);

            return self;
        },

        reposition: function(event, effect)
        {
            if(!self.rendered || isPositioning) { return self; }

            // Set positioning flag
            isPositioning = 1;

            var target = options.position.target,
                posOptions = options.position,
                my = posOptions.my,
                at = posOptions.at,
                adjust = posOptions.adjust,
                method = adjust.method.split(' '),
                elemWidth = tooltip.outerWidth(),
                elemHeight = tooltip.outerHeight(),
                targetWidth = 0,
                targetHeight = 0,
                fixed = tooltip.css('position') === 'fixed',
                viewport = posOptions.viewport,
                position = { left: 0, top: 0 },
                container = posOptions.container,
                visible = tooltip[0].offsetWidth > 0,
                adjusted, offset, win;

            // Check if absolute position was passed
            if($.isArray(target) && target.length === 2) {
                // Force left top and set position
                at = { x: LEFT, y: TOP };
                position = { left: target[0], top: target[1] };
            }

            // Check if mouse was the target
            else if(target === 'mouse' && ((event && event.pageX) || cache.event.pageX)) {
                // Force left top to allow flipping
                at = { x: LEFT, y: TOP };

                // Use cached event if one isn't available for positioning
                event = (event && (event.type === 'resize' || event.type === 'scroll') ? cache.event :
                    event && event.pageX && event.type === 'mousemove' ? event :
                    MOUSE && MOUSE.pageX && (adjust.mouse || !event || !event.pageX) ? { pageX: MOUSE.pageX, pageY: MOUSE.pageY } :
                    !adjust.mouse && cache.origin && cache.origin.pageX && options.show.distance ? cache.origin :
                    event) || event || cache.event || MOUSE || {};

                // Use event coordinates for position
                position = { top: event.pageY, left: event.pageX };
            }

            // Target wasn't mouse or absolute...
            else {
                // Check if event targetting is being used
                if(target === 'event' && event && event.target && event.type !== 'scroll' && event.type !== 'resize') {
                    cache.target = $(event.target);
                }
                else if(target !== 'event'){
                    cache.target = $(target.jquery ? target : elements.target);
                }
                target = cache.target;

                // Parse the target into a jQuery object and make sure there's an element present
                target = $(target).eq(0);
                if(target.length === 0) { return self; }

                // Check if window or document is the target
                else if(target[0] === document || target[0] === window) {
                    targetWidth = PLUGINS.iOS ? window.innerWidth : target.width();
                    targetHeight = PLUGINS.iOS ? window.innerHeight : target.height();

                    if(target[0] === window) {
                        position = {
                            top: (viewport || target).scrollTop(),
                            left: (viewport || target).scrollLeft()
                        };
                    }
                }

                // Use Imagemap/SVG plugins if needed
                else if(PLUGINS.imagemap && target.is('area')) {
                    adjusted = PLUGINS.imagemap(self, target, at, PLUGINS.viewport ? method : FALSE);
                }
                else if(PLUGINS.svg && typeof target[0].xmlbase === 'string') {
                    adjusted = PLUGINS.svg(self, target, at, PLUGINS.viewport ? method : FALSE);
                }

                else {
                    targetWidth = target.outerWidth();
                    targetHeight = target.outerHeight();

                    position = PLUGINS.offset(target, container);
                }

                // Parse returned plugin values into proper variables
                if(adjusted) {
                    targetWidth = adjusted.width;
                    targetHeight = adjusted.height;
                    offset = adjusted.offset;
                    position = adjusted.position;
                }

                // Adjust for position.fixed tooltips (and also iOS scroll bug in v3.2-4.0 & v4.3-4.3.2)
                if((PLUGINS.iOS > 3.1 && PLUGINS.iOS < 4.1) ||
                    (PLUGINS.iOS >= 4.3 && PLUGINS.iOS < 4.33) ||
                    (!PLUGINS.iOS && fixed)
                ){
                    win = $(window);
                    position.left -= win.scrollLeft();
                    position.top -= win.scrollTop();
                }

                // Adjust position relative to target
                position.left += at.x === RIGHT ? targetWidth : at.x === CENTER ? targetWidth / 2 : 0;
                position.top += at.y === BOTTOM ? targetHeight : at.y === CENTER ? targetHeight / 2 : 0;
            }

            // Adjust position relative to tooltip
            position.left += adjust.x + (my.x === RIGHT ? -elemWidth : my.x === CENTER ? -elemWidth / 2 : 0);
            position.top += adjust.y + (my.y === BOTTOM ? -elemHeight : my.y === CENTER ? -elemHeight / 2 : 0);

            // Use viewport adjustment plugin if enabled
            if(PLUGINS.viewport) {
                position.adjusted = PLUGINS.viewport(
                    self, position, posOptions, targetWidth, targetHeight, elemWidth, elemHeight
                );

                // Apply offsets supplied by positioning plugin (if used)
                if(offset && position.adjusted.left) { position.left += offset.left; }
                if(offset && position.adjusted.top) {  position.top += offset.top; }
            }

            // Viewport adjustment is disabled, set values to zero
            else { position.adjusted = { left: 0, top: 0 }; }

            // tooltipmove event
            if(!triggerEvent('move', [position, viewport.elem || viewport], event)) { return self; }
            delete position.adjusted;

            // If effect is disabled, target it mouse, no animation is defined or positioning gives NaN out, set CSS directly
            if(effect === FALSE || !visible || isNaN(position.left) || isNaN(position.top) || target === 'mouse' || !$.isFunction(posOptions.effect)) {
                tooltip.css(position);
            }

            // Use custom function if provided
            else if($.isFunction(posOptions.effect)) {
                posOptions.effect.call(tooltip, self, $.extend({}, position));
                tooltip.queue(function(next) {
                    // Reset attributes to avoid cross-browser rendering bugs
                    $(this).css({ opacity: '', height: '' });
                    if($.browser.msie) { this.style.removeAttribute('filter'); }

                    next();
                });
            }

            // Set positioning flag
            isPositioning = 0;

            return self;
        },

        // Max/min width simulator function for all browsers.. yeaaah!
        redraw: function()
        {
            if(self.rendered < 1 || isDrawing) { return self; }

            var style = options.style,
                container = options.position.container,
                perc, width, max, min;

            // Set drawing flag
            isDrawing = 1;

            // tooltipredraw event
            triggerEvent('redraw');

            // If tooltip has a set height/width, just set it... like a boss!
            if(style.height) { tooltip.css(HEIGHT, style.height); }
            if(style.width) { tooltip.css(WIDTH, style.width); }

            // Simulate max/min width if not set width present...
            else {
                // Reset width and add fluid class
                tooltip.css(WIDTH, '').appendTo(redrawContainer);

                // Grab our tooltip width (add 1 if odd so we don't get wrapping problems.. huzzah!)
                width = tooltip.width();
                if(width % 2 < 1) { width += 1; }

                // Grab our max/min properties
                max = tooltip.css('max-width') || '';
                min = tooltip.css('min-width') || '';

                // Parse into proper pixel values
                perc = (max + min).indexOf('%') > -1 ? container.width() / 100 : 0;
                max = ((max.indexOf('%') > -1 ? perc : 1) * parseInt(max, 10)) || width;
                min = ((min.indexOf('%') > -1 ? perc : 1) * parseInt(min, 10)) || 0;

                // Determine new dimension size based on max/min/current values
                width = max + min ? Math.min(Math.max(width, min), max) : width;

                // Set the newly calculated width and remvoe fluid class
                tooltip.css(WIDTH, Math.round(width)).appendTo(container);
            }

            // tooltipredrawn event
            triggerEvent('redrawn');

            // Set drawing flag
            isDrawing = 0;

            return self;
        },

        disable: function(state)
        {
            if('boolean' !== typeof state) {
                state = !(tooltip.hasClass(disabled) || cache.disabled);
            }

            if(self.rendered) {
                tooltip.toggleClass(disabled, state);
                $.attr(tooltip[0], 'aria-disabled', state);
            }
            else {
                cache.disabled = !!state;
            }

            return self;
        },

        enable: function() { return self.disable(FALSE); },

        destroy: function()
        {
            var t = target[0],
                title = $.attr(t, oldtitle),
                elemAPI = target.data('qtip');

            // Set flag the signify destroy is taking place to plugins
            self.destroyed = TRUE;

            // Destroy tooltip and  any associated plugins if rendered
            if(self.rendered) {
                tooltip.stop(1,0).remove();

                $.each(self.plugins, function() {
                    if(this.destroy) { this.destroy(); }
                });
            }

            // Clear timers and remove bound events
            clearTimeout(self.timers.show);
            clearTimeout(self.timers.hide);
            unassignEvents();

            // If the API if actually this qTip API...
            if(!elemAPI || self === elemAPI) {
                // Remove api object
                $.removeData(t, 'qtip');

                // Reset old title attribute if removed
                if(options.suppress && title) {
                    $.attr(t, 'title', title);
                    target.removeAttr(oldtitle);
                }

                // Remove ARIA attributes
                target.removeAttr('aria-describedby');
            }

            // Remove qTip events associated with this API
            target.unbind('.qtip-'+id);

            // Remove ID from sued id object
            delete usedIDs[self.id];

            return target;
        }
    });
}

// Initialization method
function init(id, opts)
{
    var obj, posOptions, attr, config, title,

    // Setup element references
    elem = $(this),
    docBody = $(document.body),

    // Use document body instead of document element if needed
    newTarget = this === document ? docBody : elem,

    // Grab metadata from element if plugin is present
    metadata = (elem.metadata) ? elem.metadata(opts.metadata) : NULL,

    // If metadata type if HTML5, grab 'name' from the object instead, or use the regular data object otherwise
    metadata5 = opts.metadata.type === 'html5' && metadata ? metadata[opts.metadata.name] : NULL,

    // Grab data from metadata.name (or data-qtipopts as fallback) using .data() method,
    html5 = elem.data(opts.metadata.name || 'qtipopts');

    // If we don't get an object returned attempt to parse it manualyl without parseJSON
    try { html5 = typeof html5 === 'string' ? $.parseJSON(html5) : html5; } catch(e) {}

    // Merge in and sanitize metadata
    config = $.extend(TRUE, {}, QTIP.defaults, opts,
        typeof html5 === 'object' ? sanitizeOptions(html5) : NULL,
        sanitizeOptions(metadata5 || metadata));

    // Re-grab our positioning options now we've merged our metadata and set id to passed value
    posOptions = config.position;
    config.id = id;

    // Setup missing content if none is detected
    if('boolean' === typeof config.content.text) {
        attr = elem.attr(config.content.attr);

        // Grab from supplied attribute if available
        if(config.content.attr !== FALSE && attr) { config.content.text = attr; }

        // No valid content was found, abort render
        else { return FALSE; }
    }

    // Setup target options
    if(!posOptions.container.length) { posOptions.container = docBody; }
    if(posOptions.target === FALSE) { posOptions.target = newTarget; }
    if(config.show.target === FALSE) { config.show.target = newTarget; }
    if(config.show.solo === TRUE) { config.show.solo = posOptions.container.closest('body'); }
    if(config.hide.target === FALSE) { config.hide.target = newTarget; }
    if(config.position.viewport === TRUE) { config.position.viewport = posOptions.container; }

    // Ensure we only use a single container
    posOptions.container = posOptions.container.eq(0);

    // Convert position corner values into x and y strings
    posOptions.at = new PLUGINS.Corner(posOptions.at);
    posOptions.my = new PLUGINS.Corner(posOptions.my);

    // Destroy previous tooltip if overwrite is enabled, or skip element if not
    if($.data(this, 'qtip')) {
        if(config.overwrite) {
            elem.qtip('destroy');
        }
        else if(config.overwrite === FALSE) {
            return FALSE;
        }
    }

    // Remove title attribute and store it if present
    if(config.suppress && (title = $.attr(this, 'title'))) {
        // Final attr call fixes event delegatiom and IE default tooltip showing problem
        $(this).removeAttr('title').attr(oldtitle, title).attr('title', '');
    }

    // Initialize the tooltip and add API reference
    obj = new QTip(elem, config, id, !!attr);
    $.data(this, 'qtip', obj);

    // Catch remove/removeqtip events on target element to destroy redundant tooltip
    elem.bind('remove.qtip-'+id+' removeqtip.qtip-'+id, function(){ obj.destroy(); });

    return obj;
}

// jQuery $.fn extension method
QTIP = $.fn.qtip = function(options, notation, newValue)
{
    var command = ('' + options).toLowerCase(), // Parse command
        returned = NULL,
        args = $.makeArray(arguments).slice(1),
        event = args[args.length - 1],
        opts = this[0] ? $.data(this[0], 'qtip') : NULL;

    // Check for API request
    if((!arguments.length && opts) || command === 'api') {
        return opts;
    }

    // Execute API command if present
    else if('string' === typeof options)
    {
        this.each(function()
        {
            var api = $.data(this, 'qtip');
            if(!api) { return TRUE; }

            // Cache the event if possible
            if(event && event.timeStamp) { api.cache.event = event; }

            // Check for specific API commands
            if((command === 'option' || command === 'options') && notation) {
                if($.isPlainObject(notation) || newValue !== undefined) {
                    api.set(notation, newValue);
                }
                else {
                    returned = api.get(notation);
                    return FALSE;
                }
            }

            // Execute API command
            else if(api[command]) {
                api[command].apply(api[command], args);
            }
        });

        return returned !== NULL ? returned : this;
    }

    // No API commands. validate provided options and setup qTips
    else if('object' === typeof options || !arguments.length)
    {
        opts = sanitizeOptions($.extend(TRUE, {}, options));

        // Bind the qTips
        return QTIP.bind.call(this, opts, event);
    }
};

// $.fn.qtip Bind method
QTIP.bind = function(opts, event)
{
    return this.each(function(i) {
        var options, targets, events, namespace, api, id;

        // Find next available ID, or use custom ID if provided
        id = $.isArray(opts.id) ? opts.id[i] : opts.id;
        id = !id || id === FALSE || id.length < 1 || usedIDs[id] ? QTIP.nextid++ : (usedIDs[id] = id);

        // Setup events namespace
        namespace = '.qtip-'+id+'-create';

        // Initialize the qTip and re-grab newly sanitized options
        api = init.call(this, id, opts);
        if(api === FALSE) { return TRUE; }
        options = api.options;

        // Initialize plugins
        $.each(PLUGINS, function() {
            if(this.initialize === 'initialize') { this(api); }
        });

        // Determine hide and show targets
        targets = { show: options.show.target, hide: options.hide.target };
        events = {
            show: $.trim('' + options.show.event).replace(/ /g, namespace+' ') + namespace,
            hide: $.trim('' + options.hide.event).replace(/ /g, namespace+' ') + namespace
        };

        /*
        * Make sure hoverIntent functions properly by using mouseleave as a hide event if
        * mouseenter/mouseout is used for show.event, even if it isn't in the users options.
        */
        if(/mouse(over|enter)/i.test(events.show) && !/mouse(out|leave)/i.test(events.hide)) {
            events.hide += ' mouseleave' + namespace;
        }

        /*
        * Also make sure initial mouse targetting works correctly by caching mousemove coords
        * on show targets before the tooltip has rendered.
        *
        * Also set onTarget when triggered to keep mouse tracking working
        */
        targets.show.bind('mousemove'+namespace, function(event) {
            MOUSE = { pageX: event.pageX, pageY: event.pageY, type: 'mousemove' };
            api.cache.onTarget = TRUE;
        });

        // Define hoverIntent function
        function hoverIntent(event) {
            function render() {
                // Cache mouse coords,render and render the tooltip
                api.render(typeof event === 'object' || options.show.ready);

                // Unbind show and hide events
                targets.show.add(targets.hide).unbind(namespace);
            }

            // Only continue if tooltip isn't disabled
            if(api.cache.disabled) { return FALSE; }

            // Cache the event data
            api.cache.event = $.extend({}, event);
            api.cache.target = event ? $(event.target) : [undefined];

            // Start the event sequence
            if(options.show.delay > 0) {
                clearTimeout(api.timers.show);
                api.timers.show = setTimeout(render, options.show.delay);
                if(events.show !== events.hide) {
                    targets.hide.bind(events.hide, function() { clearTimeout(api.timers.show); });
                }
            }
            else { render(); }
        }

        // Bind show events to target
        targets.show.bind(events.show, hoverIntent);

        // Prerendering is enabled, create tooltip now
        if(options.show.ready || options.prerender) { hoverIntent(event); }
    });
};

// Setup base plugins
PLUGINS = QTIP.plugins = {
    // Corner object parser
    Corner: function(corner) {
        corner = ('' + corner).replace(/([A-Z])/, ' $1').replace(/middle/gi, CENTER).toLowerCase();
        this.x = (corner.match(/left|right/i) || corner.match(/center/) || ['inherit'])[0].toLowerCase();
        this.y = (corner.match(/top|bottom|center/i) || ['inherit'])[0].toLowerCase();

        var f = corner.charAt(0); this.precedance = (f === 't' || f === 'b' ? Y : X);

        this.string = function() { return this.precedance === Y ? this.y+this.x : this.x+this.y; };
        this.abbrev = function() {
            var x = this.x.substr(0,1), y = this.y.substr(0,1);
            return x === y ? x : this.precedance === Y ? y + x : x + y;
        };

        this.invertx = function(center) { this.x = this.x === LEFT ? RIGHT : this.x === RIGHT ? LEFT : center || this.x; };
        this.inverty = function(center) { this.y = this.y === TOP ? BOTTOM : this.y === BOTTOM ? TOP : center || this.y; };

        this.clone = function() {
            return {
                x: this.x, y: this.y, precedance: this.precedance,
                string: this.string, abbrev: this.abbrev, clone: this.clone,
                invertx: this.invertx, inverty: this.inverty
            };
        };
    },

    // Custom (more correct for qTip!) offset calculator
    offset: function(elem, container) {
        var pos = elem.offset(),
            docBody = elem.closest('body')[0],
            parent = container, scrolled,
            coffset, overflow;

        function scroll(e, i) {
            pos.left += i * e.scrollLeft();
            pos.top += i * e.scrollTop();
        }

        if(parent) {
            // Compensate for non-static containers offset
            do {
                if(parent.css('position') !== 'static') {
                    coffset = parent.position();

                    // Account for element positioning, borders and margins
                    pos.left -= coffset.left + (parseInt(parent.css('borderLeftWidth'), 10) || 0) + (parseInt(parent.css('marginLeft'), 10) || 0);
                    pos.top -= coffset.top + (parseInt(parent.css('borderTopWidth'), 10) || 0) + (parseInt(parent.css('marginTop'), 10) || 0);

                    // If this is the first parent element with an overflow of "scroll" or "auto", store it
                    if(!scrolled && (overflow = parent.css('overflow')) !== 'hidden' && overflow !== 'visible') { scrolled = parent; }
                }
            }
            while((parent = $(parent[0].offsetParent)).length);

            // Compensate for containers scroll if it also has an offsetParent
            if(scrolled && scrolled[0] !== docBody) { scroll( scrolled, 1 ); }
        }

        return pos;
    },

    /*
    * iOS version detection
    */
    iOS: parseFloat(
        ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
        .replace('undefined', '3_2').replace('_', '.').replace('_', '')
    ) || FALSE,

    /*
    * jQuery-specific $.fn overrides
    */
    fn: {
        /* Allow other plugins to successfully retrieve the title of an element with a qTip applied */
        attr: function(attr, val) {
            if(this.length) {
                var self = this[0],
                    title = 'title',
                    api = $.data(self, 'qtip');

                if(attr === title && api && 'object' === typeof api && api.options.suppress) {
                    if(arguments.length < 2) {
                        return $.attr(self, oldtitle);
                    }

                    // If qTip is rendered and title was originally used as content, update it
                    if(api && api.options.content.attr === title && api.cache.attr) {
                        api.set('content.text', val);
                    }

                    // Use the regular attr method to set, then cache the result
                    return this.attr(oldtitle, val);
                }
            }

            return $.fn['attr'+replaceSuffix].apply(this, arguments);
        },

        /* Allow clone to correctly retrieve cached title attributes */
        clone: function(keepData) {
            var titles = $([]), title = 'title',

            // Clone our element using the real clone method
            elems = $.fn['clone'+replaceSuffix].apply(this, arguments);

            // Grab all elements with an oldtitle set, and change it to regular title attribute, if keepData is false
            if(!keepData) {
                elems.filter('['+oldtitle+']').attr('title', function() {
                    return $.attr(this, oldtitle);
                })
                .removeAttr(oldtitle);
            }

            return elems;
        }
    }
};

// Apply the fn overrides above
$.each(PLUGINS.fn, function(name, func) {
    if(!func || $.fn[name+replaceSuffix]) { return TRUE; }

    var old = $.fn[name+replaceSuffix] = $.fn[name];
    $.fn[name] = function() {
        return func.apply(this, arguments) || old.apply(this, arguments);
    };
});

/* Fire off 'removeqtip' handler in $.cleanData if jQuery UI not present (it already does similar).
 * This snippet is taken directly from jQuery UI source code found here:
 *     http://code.jquery.com/ui/jquery-ui-git.js
 */
if(!$.ui) {
    $['cleanData'+replaceSuffix] = $.cleanData;
    $.cleanData = function( elems ) {
        for(var i = 0, elem; (elem = elems[i]) !== undefined; i++) {
            try { $( elem ).triggerHandler('removeqtip'); }
            catch( e ) {}
        }
        $['cleanData'+replaceSuffix]( elems );
    };
}

// Set global qTip properties
QTIP.version = '@VERSION';
QTIP.nextid = 0;
QTIP.inactiveEvents = 'click dblclick mousedown mouseup mousemove mouseleave mouseenter'.split(' ');
QTIP.zindex = 15000;

// Define configuration defaults
QTIP.defaults = {
    prerender: FALSE,
    id: FALSE,
    overwrite: TRUE,
    suppress: TRUE,
    content: {
        text: TRUE,
        attr: 'title',
        title: {
            text: FALSE,
            button: FALSE
        }
    },
    position: {
        my: 'top left',
        at: 'bottom right',
        target: FALSE,
        container: FALSE,
        viewport: FALSE,
        adjust: {
            x: 0, y: 0,
            mouse: TRUE,
            resize: TRUE,
            method: 'flip flip'
        },
        effect: function(api, pos, viewport) {
            $(this).animate(pos, {
                duration: 200,
                queue: FALSE
            });
        }
    },
    show: {
        target: FALSE,
        event: 'mouseenter',
        effect: TRUE,
        delay: 90,
        solo: FALSE,
        ready: FALSE,
        autofocus: FALSE
    },
    hide: {
        target: FALSE,
        event: 'mouseleave',
        effect: TRUE,
        delay: 0,
        fixed: FALSE,
        inactive: FALSE,
        leave: 'window',
        distance: FALSE
    },
    style: {
        classes: '',
        widget: FALSE,
        width: FALSE,
        height: FALSE,
        def: TRUE
    },
    events: {
        render: NULL,
        move: NULL,
        show: NULL,
        hide: NULL,
        toggle: NULL,
        visible: NULL,
        hidden: NULL,
        focus: NULL,
        blur: NULL
    }
};


PLUGINS.svg = function(api, svg, corner, adjustMethod)
{
    var doc = $(document),
        elem = svg[0],
        result = {
            width: 0, height: 0,
            position: { top: 1e10, left: 1e10 }
        },
        box, mtx, root, point, tPoint;

    // Ascend the parentNode chain until we find an element with getBBox()
    while(!elem.getBBox) { elem = elem.parentNode; }

    // Check for a valid bounding box method
    if (elem.getBBox && elem.parentNode) {
        box = elem.getBBox();
        mtx = elem.getScreenCTM();
        root = elem.farthestViewportElement || elem;

        // Return if no method is found
        if(!root.createSVGPoint) { return result; }

        // Create our point var
        point = root.createSVGPoint();

        // Adjust top and left
        point.x = box.x;
        point.y = box.y;
        tPoint = point.matrixTransform(mtx);
        result.position.left = tPoint.x;
        result.position.top = tPoint.y;

        // Adjust width and height
        point.x += box.width;
        point.y += box.height;
        tPoint = point.matrixTransform(mtx);
        result.width = tPoint.x - result.position.left;
        result.height = tPoint.y - result.position.top;

        // Adjust by scroll offset
        result.position.left += doc.scrollLeft();
        result.position.top += doc.scrollTop();
    }

    return result;
};


function Ajax(api)
{
    var self = this,
        tooltip = api.elements.tooltip,
        opts = api.options.content.ajax,
        defaults = QTIP.defaults.content.ajax,
        namespace = '.qtip-ajax',
        rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        first = TRUE,
        stop = FALSE,
        xhr;

    api.checks.ajax = {
        '^content.ajax': function(obj, name, v) {
            // If content.ajax object was reset, set our local var
            if(name === 'ajax') { opts = v; }

            if(name === 'once') {
                self.init();
            }
            else if(opts && opts.url) {
                self.load();
            }
            else {
                tooltip.unbind(namespace);
            }
        }
    };

    $.extend(self, {
        init: function() {
            // Make sure ajax options are enabled and bind event
            if(opts && opts.url) {
                tooltip.unbind(namespace)[ opts.once ? 'one' : 'bind' ]('tooltipshow'+namespace, self.load);
            }

            return self;
        },

        load: function(event) {
            if(stop) {stop = FALSE; return; }

            var hasSelector = opts.url.lastIndexOf(' '),
                url = opts.url,
                selector,
                hideFirst = !opts.loading && first;

            // If loading option is disabled, prevent the tooltip showing until we've completed the request
            if(hideFirst) { try{ event.preventDefault(); } catch(e) {} }

            // Make sure default event hasn't been prevented
            else if(event && event.isDefaultPrevented()) { return self; }

            // Cancel old request
            if(xhr && xhr.abort) { xhr.abort(); }

            // Check if user delcared a content selector like in .load()
            if(hasSelector > -1) {
                selector = url.substr(hasSelector);
                url = url.substr(0, hasSelector);
            }

            // Define common after callback for both success/error handlers
            function after() {
                var complete;

                // Don't proceed if tooltip is destroyed
                if(api.destroyed) { return; }

                // Set first flag to false
                first = FALSE;

                // Re-display tip if loading and first time, and reset first flag
                if(hideFirst) { stop = TRUE; api.show(event.originalEvent); }

                // Call users complete method if it was defined
                if((complete = defaults.complete || opts.complete) && $.isFunction(complete)) {
                    complete.apply(opts.context || api, arguments);
                }
            }

            // Define success handler
            function successHandler(content, status, jqXHR) {
                var success;

                // Don't proceed if tooltip is destroyed
                if(api.destroyed) { return; }

                // If URL contains a selector
                if(selector && 'string' === typeof content) {
                    // Create a dummy div to hold the results and grab the selector element
                    content = $('<div/>')
                        // inject the contents of the document in, removing the scripts
                        // to avoid any 'Permission Denied' errors in IE
                        .append(content.replace(rscript, ""))

                        // Locate the specified elements
                        .find(selector);
                }

                // Call the success function if one is defined
                if((success = defaults.success || opts.success) && $.isFunction(success)) {
                    success.call(opts.context || api, content, status, jqXHR);
                }

                // Otherwise set the content
                else { api.set('content.text', content); }
            }

            // Error handler
            function errorHandler(xhr, status, error) {
                if(api.destroyed || xhr.status === 0) { return; }
                api.set('content.text', status + ': ' + error);
            }

            // Setup $.ajax option object and process the request
            xhr = $.ajax(
                $.extend({
                    error: defaults.error || errorHandler,
                    context: api
                },
                opts, { url: url, success: successHandler, complete: after })
            );
        },

        destroy: function() {
            // Cancel ajax request if possible
            if(xhr && xhr.abort) { xhr.abort(); }

            // Set api.destroyed flag
            api.destroyed = TRUE;
        }
    });

    self.init();
}


PLUGINS.ajax = function(api)
{
    var self = api.plugins.ajax;

    return 'object' === typeof self ? self : (api.plugins.ajax = new Ajax(api));
};

PLUGINS.ajax.initialize = 'render';

// Setup plugin sanitization
PLUGINS.ajax.sanitize = function(options)
{
    var content = options.content, opts;
    if(content && 'ajax' in content) {
        opts = content.ajax;
        if(typeof opts !== 'object') { opts = options.content.ajax = { url: opts }; }
        if('boolean' !== typeof opts.once && opts.once) { opts.once = !!opts.once; }
    }
};

// Extend original api defaults
$.extend(TRUE, QTIP.defaults, {
    content: {
        ajax: {
            loading: TRUE,
            once: TRUE
        }
    }
});


// Tip coordinates calculator
function calculateTip(corner, width, height)
{
    var width2 = Math.ceil(width / 2), height2 = Math.ceil(height / 2),

    // Define tip coordinates in terms of height and width values
    tips = {
        bottomright:    [[0,0],             [width,height],     [width,0]],
        bottomleft:     [[0,0],             [width,0],              [0,height]],
        topright:       [[0,height],        [width,0],              [width,height]],
        topleft:            [[0,0],             [0,height],             [width,height]],
        topcenter:      [[0,height],        [width2,0],             [width,height]],
        bottomcenter:   [[0,0],             [width,0],              [width2,height]],
        rightcenter:    [[0,0],             [width,height2],        [0,height]],
        leftcenter:     [[width,0],         [width,height],     [0,height2]]
    };

    // Set common side shapes
    tips.lefttop = tips.bottomright; tips.righttop = tips.bottomleft;
    tips.leftbottom = tips.topright; tips.rightbottom = tips.topleft;

    return tips[ corner.string() ];
}


function Tip(qTip, command)
{
    var self = this,
        opts = qTip.options.style.tip,
        elems = qTip.elements,
        tooltip = elems.tooltip,
        cache = { top: 0, left: 0 },
        size = {
            width: opts.width,
            height: opts.height
        },
        color = { },
        border = opts.border || 0,
        namespace = '.qtip-tip',
        hasCanvas = !!($('<canvas />')[0] || {}).getContext,
        tiphtml;

    self.corner = NULL;
    self.mimic = NULL;
    self.border = border;
    self.offset = opts.offset;
    self.size = size;

    // Add new option checks for the plugin
    qTip.checks.tip = {
        '^position.my|style.tip.(corner|mimic|border)$': function() {
            // Make sure a tip can be drawn
            if(!self.init()) {
                self.destroy();
            }

            // Reposition the tooltip
            qTip.reposition();
        },
        '^style.tip.(height|width)$': function() {
            // Re-set dimensions and redraw the tip
            size = {
                width: opts.width,
                height: opts.height
            };
            self.create();
            self.update();

            // Reposition the tooltip
            qTip.reposition();
        },
        '^content.title.text|style.(classes|widget)$': function() {
            if(elems.tip && elems.tip.length) {
                self.update();
            }
        }
    };

    function whileVisible(callback) {
        var visible = tooltip.is(':visible');
        tooltip.show(); callback(); tooltip.toggle(visible);
    }

    function swapDimensions() {
        size.width = opts.height;
        size.height = opts.width;
    }

    function resetDimensions() {
        size.width = opts.width;
        size.height = opts.height;
    }

    function reposition(event, api, pos, viewport) {
        if(!elems.tip) { return; }

        var newCorner = self.corner.clone(),
            adjust = pos.adjusted,
            method = qTip.options.position.adjust.method.split(' '),
            horizontal = method[0],
            vertical = method[1] || method[0],
            shift = { left: FALSE, top: FALSE, x: 0, y: 0 },
            offset, css = {}, props;

        // If our tip position isn't fixed e.g. doesn't adjust with viewport...
        if(self.corner.fixed !== TRUE) {
            // Horizontal - Shift or flip method
            if(horizontal === SHIFT && newCorner.precedance === X && adjust.left && newCorner.y !== CENTER) {
                newCorner.precedance = newCorner.precedance === X ? Y : X;
            }
            else if(horizontal !== SHIFT && adjust.left){
                newCorner.x = newCorner.x === CENTER ? (adjust.left > 0 ? LEFT : RIGHT) : (newCorner.x === LEFT ? RIGHT : LEFT);
            }

            // Vertical - Shift or flip method
            if(vertical === SHIFT && newCorner.precedance === Y && adjust.top && newCorner.x !== CENTER) {
                newCorner.precedance = newCorner.precedance === Y ? X : Y;
            }
            else if(vertical !== SHIFT && adjust.top) {
                newCorner.y = newCorner.y === CENTER ? (adjust.top > 0 ? TOP : BOTTOM) : (newCorner.y === TOP ? BOTTOM : TOP);
            }

            // Update and redraw the tip if needed (check cached details of last drawn tip)
            if(newCorner.string() !== cache.corner.string() && (cache.top !== adjust.top || cache.left !== adjust.left)) {
                self.update(newCorner, FALSE);
            }
        }

        // Setup tip offset properties
        offset = self.position(newCorner, adjust);
        offset[ newCorner.x ] += parseWidth(newCorner, newCorner.x);
        offset[ newCorner.y ] += parseWidth(newCorner, newCorner.y);

        // Readjust offset object to make it left/top
        if(offset.right !== undefined) { offset.left = -offset.right; }
        if(offset.bottom !== undefined) { offset.top = -offset.bottom; }
        offset.user = Math.max(0, opts.offset);

        // Viewport "shift" specific adjustments
        if(shift.left = (horizontal === SHIFT && !!adjust.left)) {
            if(newCorner.x === CENTER) {
                css['margin-left'] = shift.x = offset['margin-left'] - adjust.left;
            }
            else {
                props = offset.right !== undefined ?
                    [ adjust.left, -offset.left ] : [ -adjust.left, offset.left ];

                if( (shift.x = Math.max(props[0], props[1])) > props[0] ) {
                    pos.left -= adjust.left;
                    shift.left = FALSE;
                }

                css[ offset.right !== undefined ? RIGHT : LEFT ] = shift.x;
            }
        }
        if(shift.top = (vertical === SHIFT && !!adjust.top)) {
            if(newCorner.y === CENTER) {
                css['margin-top'] = shift.y = offset['margin-top'] - adjust.top;
            }
            else {
                props = offset.bottom !== undefined ?
                    [ adjust.top, -offset.top ] : [ -adjust.top, offset.top ];

                if( (shift.y = Math.max(props[0], props[1])) > props[0] ) {
                    pos.top -= adjust.top;
                    shift.top = FALSE;
                }

                css[ offset.bottom !== undefined ? BOTTOM : TOP ] = shift.y;
            }
        }

        /*
        * If the tip is adjusted in both dimensions, or in a
        * direction that would cause it to be anywhere but the
        * outer border, hide it!
        */
        elems.tip.css(css).toggle(
            !((shift.x && shift.y) || (newCorner.x === CENTER && shift.y) || (newCorner.y === CENTER && shift.x))
        );

        // Adjust position to accomodate tip dimensions
        pos.left -= offset.left.charAt ? offset.user : horizontal !== SHIFT || shift.top || !shift.left && !shift.top ? offset.left : 0;
        pos.top -= offset.top.charAt ? offset.user : vertical !== SHIFT || shift.left || !shift.left && !shift.top ? offset.top : 0;

        // Cache details
        cache.left = adjust.left; cache.top = adjust.top;
        cache.corner = newCorner.clone();
    }

    function parseCorner() {
        var corner = opts.corner,
            posOptions = qTip.options.position,
            at = posOptions.at,
            my = posOptions.my.string ? posOptions.my.string() : posOptions.my;

        // Detect corner and mimic properties
        if(corner === FALSE || (my === FALSE && at === FALSE)) {
            return FALSE;
        }
        else {
            if(corner === TRUE) {
                self.corner = new PLUGINS.Corner(my);
            }
            else if(!corner.string) {
                self.corner = new PLUGINS.Corner(corner);
                self.corner.fixed = TRUE;
            }
        }

        // Cache it
        cache.corner = new PLUGINS.Corner( self.corner.string() );

        return self.corner.string() !== 'centercenter';
    }

    /* border width calculator */
    function parseWidth(corner, side, use) {
        side = !side ? corner[corner.precedance] : side;

        var isTitleTop = elems.titlebar && corner.y === TOP,
            elem = isTitleTop ? elems.titlebar : tooltip,
            borderSide = 'border-' + side + '-width',
            css = function(elem) { return parseInt(elem.css(borderSide), 10); },
            val;

        // Grab the border-width value (make tooltip visible first)
        whileVisible(function() {
            val = (use ? css(use) : (css(elems.content) || css(elem) || css(tooltip))) || 0;
        });
        return val;
    }

    function parseRadius(corner) {
        var isTitleTop = elems.titlebar && corner.y === TOP,
            elem = isTitleTop ? elems.titlebar : elems.content,
            moz = $.browser.mozilla,
            prefix = moz ? '-moz-' : $.browser.webkit ? '-webkit-' : '',
            nonStandard = 'border-radius-' + corner.y + corner.x,
            standard = 'border-' + corner.y + '-' + corner.x + '-radius',
            css = function(c) { return parseInt(elem.css(c), 10) || parseInt(tooltip.css(c), 10); },
            val;

        whileVisible(function() {
            val = css(standard) || css(prefix + standard) || css(prefix + nonStandard) || css(nonStandard) || 0;
        });
        return val;
    }

    function parseColours(actual) {
        var i, fill, border,
            tip = elems.tip.css('cssText', ''),
            corner = actual || self.corner,
            invalid = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
            borderSide = 'border-' + corner[ corner.precedance ] + '-color',
            bgColor = 'background-color',
            transparent = 'transparent',
            important = ' !important',

            titlebar = elems.titlebar,
            useTitle = titlebar && (corner.y === TOP || (corner.y === CENTER && tip.position().top + (size.height / 2) + opts.offset < titlebar.outerHeight(TRUE))),
            colorElem = useTitle ? titlebar : elems.content;

        function css(elem, prop, compare) {
            var val = elem.css(prop) || transparent;
            if(compare && val === elem.css(compare)) { return FALSE; }
            else { return invalid.test(val) ? FALSE : val; }
        }

        // Ensure tooltip is visible then...
        whileVisible(function() {
            // Attempt to detect the background colour from various elements, left-to-right precedance
            color.fill = css(tip, bgColor) || css(colorElem, bgColor) || css(elems.content, bgColor) ||
                css(tooltip, bgColor) || tip.css(bgColor);

            // Attempt to detect the correct border side colour from various elements, left-to-right precedance
            color.border = css(tip, borderSide, 'color') || css(colorElem, borderSide, 'color') ||
                css(elems.content, borderSide, 'color') || css(tooltip, borderSide, 'color') || tooltip.css(borderSide);

            // Reset background and border colours
            $('*', tip).add(tip).css('cssText', bgColor+':'+transparent+important+';border:0'+important+';');
        });
    }

    function calculateSize(corner) {
        var y = corner.precedance === Y,
            width = size [ y ? WIDTH : HEIGHT ],
            height = size [ y ? HEIGHT : WIDTH ],
            isCenter = corner.string().indexOf(CENTER) > -1,
            base = width * (isCenter ? 0.5 : 1),
            pow = Math.pow,
            round = Math.round,
            bigHyp, ratio, result,

        smallHyp = Math.sqrt( pow(base, 2) + pow(height, 2) ),

        hyp = [
            (border / base) * smallHyp, (border / height) * smallHyp
        ];
        hyp[2] = Math.sqrt( pow(hyp[0], 2) - pow(border, 2) );
        hyp[3] = Math.sqrt( pow(hyp[1], 2) - pow(border, 2) );

        bigHyp = smallHyp + hyp[2] + hyp[3] + (isCenter ? 0 : hyp[0]);
        ratio = bigHyp / smallHyp;

        result = [ round(ratio * height), round(ratio * width) ];
        return { height: result[ y ? 0 : 1 ], width: result[ y ? 1 : 0 ] };
    }

    function createVML(tag, props, style) {
        return '<qvml:'+tag+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(props||'')+
            ' style="behavior: url(#default#VML); '+(style||'')+ '" />';
    }

    $.extend(self, {
        init: function()
        {
            var enabled = parseCorner() && (hasCanvas || $.browser.msie);

            // Determine tip corner and type
            if(enabled) {
                // Create a new tip and draw it
                self.create();
                self.update();

                // Bind update events
                tooltip.unbind(namespace).bind('tooltipmove'+namespace, reposition);

                // Fix for issue of tips not showing after redraw in IE (VML...)
                if(!hasCanvas) {
                    tooltip.bind('tooltipredraw tooltipredrawn', function(event) {
                        if(event.type === 'tooltipredraw') {
                            tiphtml = elems.tip.html();
                            elems.tip.html('');
                        }
                        else { elems.tip.html(tiphtml); }
                    });
                }
            }

            return enabled;
        },

        create: function()
        {
            var width = size.width,
                height = size.height,
                vml;

            // Remove previous tip element if present
            if(elems.tip) { elems.tip.remove(); }

            // Create tip element and prepend to the tooltip
            elems.tip = $('<div />', { 'class': 'ui-tooltip-tip' }).css({ width: width, height: height }).prependTo(tooltip);

            // Create tip drawing element(s)
            if(hasCanvas) {
                // save() as soon as we create the canvas element so FF2 doesn't bork on our first restore()!
                $('<canvas />').appendTo(elems.tip)[0].getContext('2d').save();
            }
            else {
                vml = createVML('shape', 'coordorigin="0,0"', 'position:absolute;');
                elems.tip.html(vml + vml);

                // Prevent mousing down on the tip since it causes problems with .live() handling in IE due to VML
                $('*', elems.tip).bind('click mousedown', function(event) { event.stopPropagation(); });
            }
        },

        update: function(corner, position)
        {
            var tip = elems.tip,
                inner = tip.children(),
                width = size.width,
                height = size.height,
                mimic = opts.mimic,
                round = Math.round,
                precedance, context, coords, translate, newSize;

            // Re-determine tip if not already set
            if(!corner) { corner = cache.corner || self.corner; }

            // Use corner property if we detect an invalid mimic value
            if(mimic === FALSE) { mimic = corner; }

            // Otherwise inherit mimic properties from the corner object as necessary
            else {
                mimic = new PLUGINS.Corner(mimic);
                mimic.precedance = corner.precedance;

                if(mimic.x === 'inherit') { mimic.x = corner.x; }
                else if(mimic.y === 'inherit') { mimic.y = corner.y; }
                else if(mimic.x === mimic.y) {
                    mimic[ corner.precedance ] = corner[ corner.precedance ];
                }
            }
            precedance = mimic.precedance;

            // Ensure the tip width.height are relative to the tip position
            if(corner.precedance === X) { swapDimensions(); }
            else { resetDimensions(); }

            // Set the tip dimensions
            elems.tip.css({
                width: (width = size.width),
                height: (height = size.height)
            });

            // Update our colours
            parseColours(corner);

            // Detect border width, taking into account colours
            if(color.border !== 'transparent') {
                // Grab border width
                border = parseWidth(corner, NULL);

                // If border width isn't zero, use border color as fill (1.0 style tips)
                if(opts.border === 0 && border > 0) { color.fill = color.border; }

                // Set border width (use detected border width if opts.border is true)
                self.border = border = opts.border !== TRUE ? opts.border : border;
            }

            // Border colour was invalid, set border to zero
            else { self.border = border = 0; }

            // Calculate coordinates
            coords = calculateTip(mimic, width , height);

            // Determine tip size
            self.size = newSize = calculateSize(corner);
            tip.css(newSize);

            // Calculate tip translation
            if(corner.precedance === Y) {
                translate = [
                    round(mimic.x === LEFT ? border : mimic.x === RIGHT ? newSize.width - width - border : (newSize.width - width) / 2),
                    round(mimic.y === TOP ? newSize.height - height : 0)
                ];
            }
            else {
                translate = [
                    round(mimic.x === LEFT ? newSize.width - width : 0),
                    round(mimic.y === TOP ? border : mimic.y === BOTTOM ? newSize.height - height - border : (newSize.height - height) / 2)
                ];
            }

            // Canvas drawing implementation
            if(hasCanvas) {
                // Set the canvas size using calculated size
                inner.attr(newSize);

                // Grab canvas context and clear/save it
                context = inner[0].getContext('2d');
                context.restore(); context.save();
                context.clearRect(0,0,3000,3000);

                // Set properties
                context.fillStyle = color.fill;
                context.strokeStyle = color.border;
                context.lineWidth = border * 2;
                context.lineJoin = 'miter';
                context.miterLimit = 100;

                // Translate origin
                context.translate(translate[0], translate[1]);

                // Draw the tip
                context.beginPath();
                context.moveTo(coords[0][0], coords[0][1]);
                context.lineTo(coords[1][0], coords[1][1]);
                context.lineTo(coords[2][0], coords[2][1]);
                context.closePath();

                // Apply fill and border
                if(border) {
                    // Make sure transparent borders are supported by doing a stroke
                    // of the background colour before the stroke colour
                    if(tooltip.css('background-clip') === 'border-box') {
                        context.strokeStyle = color.fill;
                        context.stroke();
                    }
                    context.strokeStyle = color.border;
                    context.stroke();
                }
                context.fill();
            }

            // VML (IE Proprietary implementation)
            else {
                // Setup coordinates string
                coords = 'm' + coords[0][0] + ',' + coords[0][1] + ' l' + coords[1][0] +
                    ',' + coords[1][1] + ' ' + coords[2][0] + ',' + coords[2][1] + ' xe';

                // Setup VML-specific offset for pixel-perfection
                translate[2] = border && /^(r|b)/i.test(corner.string()) ?
                    parseFloat($.browser.version, 10) === 8 ? 2 : 1 : 0;

                // Set initial CSS
                inner.css({
                    coordsize: (width+border) + ' ' + (height+border),
                    antialias: ''+(mimic.string().indexOf(CENTER) > -1),
                    left: translate[0],
                    top: translate[1],
                    width: width + border,
                    height: height + border
                })
                .each(function(i) {
                    var $this = $(this);

                    // Set shape specific attributes
                    $this[ $this.prop ? 'prop' : 'attr' ]({
                        coordsize: (width+border) + ' ' + (height+border),
                        path: coords,
                        fillcolor: color.fill,
                        filled: !!i,
                        stroked: !i
                    })
                    .toggle(!!(border || i));

                    // Check if border is enabled and add stroke element
                    if(!i && $this.html() === '') {
                        $this.html(
                            createVML('stroke', 'weight="'+(border*2)+'px" color="'+color.border+'" miterlimit="1000" joinstyle="miter"')
                        );
                    }
                });
            }

            // Position if needed
            if(position !== FALSE) { self.position(corner); }
        },

        // Tip positioning method
        position: function(corner)
        {
            var tip = elems.tip,
                position = {},
                userOffset = Math.max(0, opts.offset),
                precedance, dimensions, corners;

            // Return if tips are disabled or tip is not yet rendered
            if(opts.corner === FALSE || !tip) { return FALSE; }

            // Inherit corner if not provided
            corner = corner || self.corner;
            precedance = corner.precedance;

            // Determine which tip dimension to use for adjustment
            dimensions = calculateSize(corner);

            // Setup corners and offset array
            corners = [ corner.x, corner.y ];
            if(precedance === X) { corners.reverse(); }

            // Calculate tip position
            $.each(corners, function(i, side) {
                var b, bc, br;

                if(side === CENTER) {
                    b = precedance === Y ? LEFT : TOP;
                    position[ b ] = '50%';
                    position['margin-' + b] = -Math.round(dimensions[ precedance === Y ? WIDTH : HEIGHT ] / 2) + userOffset;
                }
                else {
                    b = parseWidth(corner, side);
                    bc = parseWidth(corner, side, elems.content);
                    br = parseRadius(corner);

                    position[ side ] = i ? bc : (userOffset + (br > b ? br : -b));
                }
            });

            // Adjust for tip dimensions
            position[ corner[precedance] ] -= dimensions[ precedance === X ? WIDTH : HEIGHT ];

            // Set and return new position
            tip.css({ top: '', bottom: '', left: '', right: '', margin: '' }).css(position);
            return position;
        },

        destroy: function()
        {
            // Remove the tip element
            if(elems.tip) { elems.tip.remove(); }
            elems.tip = false;

            // Unbind events
            tooltip.unbind(namespace);
        }
    });

    self.init();
}

PLUGINS.tip = function(api)
{
    var self = api.plugins.tip;

    return 'object' === typeof self ? self : (api.plugins.tip = new Tip(api));
};

// Initialize tip on render
PLUGINS.tip.initialize = 'render';

// Setup plugin sanitization options
PLUGINS.tip.sanitize = function(options)
{
    var style = options.style, opts;
    if(style && 'tip' in style) {
        opts = options.style.tip;
        if(typeof opts !== 'object'){ options.style.tip = { corner: opts }; }
        if(!(/string|boolean/i).test(typeof opts['corner'])) { opts['corner'] = TRUE; }
        if(typeof opts.width !== 'number'){ delete opts.width; }
        if(typeof opts.height !== 'number'){ delete opts.height; }
        if(typeof opts.border !== 'number' && opts.border !== TRUE){ delete opts.border; }
        if(typeof opts.offset !== 'number'){ delete opts.offset; }
    }
};

// Extend original qTip defaults
$.extend(TRUE, QTIP.defaults, {
    style: {
        tip: {
            corner: TRUE,
            mimic: FALSE,
            width: 6,
            height: 6,
            border: TRUE,
            offset: 0
        }
    }
});


function Modal(api)
{
    var self = this,
        options = api.options.show.modal,
        elems = api.elements,
        tooltip = elems.tooltip,
        overlaySelector = '#qtip-overlay',
        globalNamespace = '.qtipmodal',
        namespace = globalNamespace + api.id,
        attr = 'is-modal-qtip',
        docBody = $(document.body),
        focusableSelector = PLUGINS.modal.focusable.join(','),
        focusableElems = {}, overlay;

    // Setup option set checks
    api.checks.modal = {
        '^show.modal.(on|blur)$': function() {
            // Initialise
            self.init();

            // Show the modal if not visible already and tooltip is visible
            elems.overlay.toggle( tooltip.is(':visible') );
        },
        '^content.text$': function() {
            updateFocusable();
        }
    };

    function updateFocusable() {
        focusableElems = $(focusableSelector, tooltip).not('[disabled]').map(function() {
            return typeof this.focus === 'function' ? this : null;
        });
    }

    function focusInputs(blurElems) {
        // Blurring body element in IE causes window.open windows to unfocus!
        if(focusableElems.length < 1 && blurElems.length) { blurElems.not('body').blur(); }

        // Focus the inputs
        else { focusableElems.first().focus(); }
    }

    function stealFocus(event) {
        var target = $(event.target),
            container = target.closest('.qtip'),
            targetOnTop;

        // Determine if input container target is above this
        targetOnTop = container.length < 1 ? FALSE :
            (parseInt(container[0].style.zIndex, 10) > parseInt(tooltip[0].style.zIndex, 10));

        // If we're showing a modal, but focus has landed on an input below
        // this modal, divert focus to the first visible input in this modal
        // or if we can't find one... the tooltip itself
        if(!targetOnTop && ($(event.target).closest(selector)[0] !== tooltip[0])) {
            focusInputs(target);
        }
    }

    $.extend(self, {
        init: function()
        {
            // If modal is disabled... return
            if(!options.on) { return self; }

            // Create the overlay if needed
            overlay = self.create();

            // Add unique attribute so we can grab modal tooltips easily via a selector
            tooltip.attr(attr, TRUE)

            // Set z-index
            .css('z-index', PLUGINS.modal.zindex + $(selector+'['+attr+']').length)

            // Remove previous bound events in globalNamespace
            .unbind(globalNamespace).unbind(namespace)

            // Apply our show/hide/focus modal events
            .bind('tooltipshow'+globalNamespace+' tooltiphide'+globalNamespace, function(event, api, duration) {
                var oEvent = event.originalEvent;

                // Make sure mouseout doesn't trigger a hide when showing the modal and mousing onto backdrop
                if(event.target === tooltip[0]) {
                    if(oEvent && event.type === 'tooltiphide' && /mouse(leave|enter)/.test(oEvent.type) && $(oEvent.relatedTarget).closest(overlay[0]).length) {
                        try { event.preventDefault(); } catch(e) {}
                    }
                    else if(!oEvent || (oEvent && !oEvent.solo)) {
                        self[ event.type.replace('tooltip', '') ](event, duration);
                    }
                }
            })

            // Adjust modal z-index on tooltip focus
            .bind('tooltipfocus'+globalNamespace, function(event) {
                // If focus was cancelled before it reearch us, don't do anything
                if(event.isDefaultPrevented() || event.target !== tooltip[0]) { return; }

                var qtips = $(selector).filter('['+attr+']'),

                // Keep the modal's lower than other, regular qtips
                newIndex = PLUGINS.modal.zindex + qtips.length,
                curIndex = parseInt(tooltip[0].style.zIndex, 10);

                // Set overlay z-index
                overlay[0].style.zIndex = newIndex - 2;

                // Reduce modal z-index's and keep them properly ordered
                qtips.each(function() {
                    if(this.style.zIndex > curIndex) {
                        this.style.zIndex -= 1;
                    }
                });

                // Fire blur event for focused tooltip
                qtips.end().filter('.' + focusClass).qtip('blur', event.originalEvent);

                // Set the new z-index
                tooltip.addClass(focusClass)[0].style.zIndex = newIndex;

                // Prevent default handling
                try { event.preventDefault(); } catch(e) {}
            })

            // Focus any other visible modals when this one hides
            .bind('tooltiphide'+globalNamespace, function(event) {
                if(event.target === tooltip[0]) {
                    $('[' + attr + ']').filter(':visible').not(tooltip).last().qtip('focus', event);
                }
            });

            // Apply keyboard "Escape key" close handler
            if(options.escape) {
                $(document).unbind(namespace).bind('keydown'+namespace, function(event) {
                    if(event.keyCode === 27 && tooltip.hasClass(focusClass)) {
                        api.hide(event);
                    }
                });
            }

            // Apply click handler for blur option
            if(options.blur) {
                elems.overlay.unbind(namespace).bind('click'+namespace, function(event) {
                    if(tooltip.hasClass(focusClass)) { api.hide(event); }
                });
            }

            // Update focusable elements
            updateFocusable();

            return self;
        },

        create: function()
        {
            var elem = $(overlaySelector);

            // Return if overlay is already rendered
            if(elem.length) {
                // Modal overlay should always be below all tooltips if possible
                return (elems.overlay = elem.insertAfter( $(selector).last() ));
            }

            // Create document overlay
            overlay = elems.overlay = $('<div />', {
                id: overlaySelector.substr(1),
                html: '<div></div>',
                mousedown: function() { return FALSE; }
            })
            .hide()
            .insertAfter( $(selector).last() );

            // Update position on window resize or scroll
            function resize() {
                overlay.css({
                    height: $(window).height(),
                    width: $(window).width()
                });
            }
            $(window).unbind(globalNamespace).bind('resize'+globalNamespace, resize);
            resize(); // Fire it initially too

            return overlay;
        },

        toggle: function(event, state, duration)
        {
            // Make sure default event hasn't been prevented
            if(event && event.isDefaultPrevented()) { return self; }

            var effect = options.effect,
                type = state ? 'show': 'hide',
                visible = overlay.is(':visible'),
                modals = $('[' + attr + ']').filter(':visible').not(tooltip),
                zindex;

            // Create our overlay if it isn't present already
            if(!overlay) { overlay = self.create(); }

            // Prevent modal from conflicting with show.solo, and don't hide backdrop is other modals are visible
            if((overlay.is(':animated') && visible === state) || (!state && modals.length)) { return self; }

            // State specific...
            if(state) {
                // Set position
                overlay.css({ left: 0, top: 0 });

                // Toggle backdrop cursor style on show
                overlay.toggleClass('blurs', options.blur);

                // IF the modal can steal the focus
                if(options.stealfocus !== FALSE) {
                    // Make sure we can't focus anything outside the tooltip
                    docBody.bind('focusin'+namespace, stealFocus);

                    // Blur the current item and focus anything in the modal we an
                    focusInputs( $('body :focus') );
                }
            }
            else {
                // Undelegate focus handler
                docBody.unbind('focusin'+namespace);
            }

            // Stop all animations
            overlay.stop(TRUE, FALSE);

            // Use custom function if provided
            if($.isFunction(effect)) {
                effect.call(overlay, state);
            }

            // If no effect type is supplied, use a simple toggle
            else if(effect === FALSE) {
                overlay[ type ]();
            }

            // Use basic fade function
            else {
                overlay.fadeTo( parseInt(duration, 10) || 90, state ? 1 : 0, function() {
                    if(!state) { $(this).hide(); }
                });
            }

            // Reset position on hide
            if(!state) {
                overlay.queue(function(next) {
                    overlay.css({ left: '', top: '' });
                    next();
                });
            }

            return self;
        },

        show: function(event, duration) { return self.toggle(event, TRUE, duration); },
        hide: function(event, duration) { return self.toggle(event, FALSE, duration); },

        destroy: function()
        {
            var delBlanket = overlay;

            if(delBlanket) {
                // Check if any other modal tooltips are present
                delBlanket = $('[' + attr + ']').not(tooltip).length < 1;

                // Remove overlay if needed
                if(delBlanket) {
                    elems.overlay.remove();
                    $(document).unbind(globalNamespace);
                }
                else {
                    elems.overlay.unbind(globalNamespace+api.id);
                }

                // Undelegate focus handler
                docBody.undelegate('*', 'focusin'+namespace);
            }

            // Remove bound events
            return tooltip.removeAttr(attr).unbind(globalNamespace);
        }
    });

    self.init();
}

PLUGINS.modal = function(api) {
    var self = api.plugins.modal;

    return 'object' === typeof self ? self : (api.plugins.modal = new Modal(api));
};

// Plugin needs to be initialized on render
PLUGINS.modal.initialize = 'render';

// Setup sanitiztion rules
PLUGINS.modal.sanitize = function(opts) {
    if(opts.show) {
        if(typeof opts.show.modal !== 'object') { opts.show.modal = { on: !!opts.show.modal }; }
        else if(typeof opts.show.modal.on === 'undefined') { opts.show.modal.on = TRUE; }
    }
};

// Base z-index for all modal tooltips (use qTip core z-index as a base)
PLUGINS.modal.zindex = QTIP.zindex - 200;

// Defines the selector used to select all 'focusable' elements within the modal when using the show.modal.stealfocus option.
// Selectors initially taken from http://stackoverflow.com/questions/7668525/is-there-a-jquery-selector-to-get-all-elements-that-can-get-focus
PLUGINS.modal.focusable = ['a[href]', 'area[href]', 'input', 'select', 'textarea', 'button', 'iframe', 'object', 'embed', '[tabindex]', '[contenteditable]'];

// Extend original api defaults
$.extend(TRUE, QTIP.defaults, {
    show: {
        modal: {
            on: FALSE,
            effect: TRUE,
            blur: TRUE,
            stealfocus: TRUE,
            escape: TRUE
        }
    }
});


PLUGINS.viewport = function(api, position, posOptions, targetWidth, targetHeight, elemWidth, elemHeight)
{
    var target = posOptions.target,
        tooltip = api.elements.tooltip,
        my = posOptions.my,
        at = posOptions.at,
        adjust = posOptions.adjust,
        method = adjust.method.split(' '),
        methodX = method[0],
        methodY = method[1] || method[0],
        viewport = posOptions.viewport,
        container = posOptions.container,
        cache = api.cache,
        tip = api.plugins.tip,
        adjusted = { left: 0, top: 0 },
        fixed, newMy, newClass;

    // If viewport is not a jQuery element, or it's the window/document or no adjustment method is used... return
    if(!viewport.jquery || target[0] === window || target[0] === document.body || adjust.method === 'none') {
        return adjusted;
    }

    // Cache our viewport details
    fixed = tooltip.css('position') === 'fixed';
    viewport = {
        elem: viewport,
        height: viewport[ (viewport[0] === window ? 'h' : 'outerH') + 'eight' ](),
        width: viewport[ (viewport[0] === window ? 'w' : 'outerW') + 'idth' ](),
        scrollleft: fixed ? 0 : viewport.scrollLeft(),
        scrolltop: fixed ? 0 : viewport.scrollTop(),
        offset: viewport.offset() || { left: 0, top: 0 }
    };
    container = {
        elem: container,
        scrollLeft: container.scrollLeft(),
        scrollTop: container.scrollTop(),
        offset: container.offset() || { left: 0, top: 0 }
    };

    // Generic calculation method
    function calculate(side, otherSide, type, adjust, side1, side2, lengthName, targetLength, elemLength) {
        var initialPos = position[side1],
            mySide = my[side], atSide = at[side],
            isShift = type === SHIFT,
            viewportScroll = -container.offset[side1] + viewport.offset[side1] + viewport['scroll'+side1],
            myLength = mySide === side1 ? elemLength : mySide === side2 ? -elemLength : -elemLength / 2,
            atLength = atSide === side1 ? targetLength : atSide === side2 ? -targetLength : -targetLength / 2,
            tipLength = tip && tip.size ? tip.size[lengthName] || 0 : 0,
            tipAdjust = tip && tip.corner && tip.corner.precedance === side && !isShift ? tipLength : 0,
            overflow1 = viewportScroll - initialPos + tipAdjust,
            overflow2 = initialPos + elemLength - viewport[lengthName] - viewportScroll + tipAdjust,
            offset = myLength - (my.precedance === side || mySide === my[otherSide] ? atLength : 0) - (atSide === CENTER ? targetLength / 2 : 0);

        // shift
        if(isShift) {
            tipAdjust = tip && tip.corner && tip.corner.precedance === otherSide ? tipLength : 0;
            offset = (mySide === side1 ? 1 : -1) * myLength - tipAdjust;

            // Adjust position but keep it within viewport dimensions
            position[side1] += overflow1 > 0 ? overflow1 : overflow2 > 0 ? -overflow2 : 0;
            position[side1] = Math.max(
                -container.offset[side1] + viewport.offset[side1] + (tipAdjust && tip.corner[side] === CENTER ? tip.offset : 0),
                initialPos - offset,
                Math.min(
                    Math.max(-container.offset[side1] + viewport.offset[side1] + viewport[lengthName], initialPos + offset),
                    position[side1]
                )
            );
        }

        // flip/flipinvert
        else {
            // Update adjustment amount depending on if using flipinvert or flip
            adjust *= (type === FLIPINVERT ? 2 : 0);

            // Check for overflow on the left/top
            if(overflow1 > 0 && (mySide !== side1 || overflow2 > 0)) {
                position[side1] -= offset + adjust;
                newMy['invert'+side](side1);
            }

            // Check for overflow on the bottom/right
            else if(overflow2 > 0 && (mySide !== side2 || overflow1 > 0)  ) {
                position[side1] -= (mySide === CENTER ? -offset : offset) + adjust;
                newMy['invert'+side](side2);
            }

            // Make sure we haven't made things worse with the adjustment and reset if so
            if(position[side1] < viewportScroll && -position[side1] > overflow2) {
                position[side1] = initialPos; newMy = my.clone();
            }
        }

        return position[side1] - initialPos;
    }

    // Set newMy if using flip or flipinvert methods
    if(methodX !== 'shift' || methodY !== 'shift') { newMy = my.clone(); }

    // Adjust position based onviewport and adjustment options
    adjusted = {
        left: methodX !== 'none' ? calculate( X, Y, methodX, adjust.x, LEFT, RIGHT, WIDTH, targetWidth, elemWidth ) : 0,
        top: methodY !== 'none' ? calculate( Y, X, methodY, adjust.y, TOP, BOTTOM, HEIGHT, targetHeight, elemHeight ) : 0
    };

    // Set tooltip position class if it's changed
    if(newMy && cache.lastClass !== (newClass = uitooltip + '-pos-' + newMy.abbrev())) {
        tooltip.removeClass(api.cache.lastClass).addClass( (api.cache.lastClass = newClass) );
    }

    return adjusted;
};
PLUGINS.imagemap = function(api, area, corner, adjustMethod)
{
    if(!area.jquery) { area = $(area); }

    var cache = (api.cache.areas = {}),
        shape = (area[0].shape || area.attr('shape')).toLowerCase(),
        coordsString = area[0].coords || area.attr('coords'),
        baseCoords = coordsString.split(','),
        coords = [],
        image = $('img[usemap="#'+area.parent('map').attr('name')+'"]'),
        imageOffset = image.offset(),
        result = {
            width: 0, height: 0,
            position: {
                top: 1e10, right: 0,
                bottom: 0, left: 1e10
            }
        },
        i = 0, next = 0, dimensions;

    // POLY area coordinate calculator
    //  Special thanks to Ed Cradock for helping out with this.
    //  Uses a binary search algorithm to find suitable coordinates.
    function polyCoordinates(result, coords, corner)
    {
        var i = 0,
            compareX = 1, compareY = 1,
            realX = 0, realY = 0,
            newWidth = result.width,
            newHeight = result.height;

        // Use a binary search algorithm to locate most suitable coordinate (hopefully)
        while(newWidth > 0 && newHeight > 0 && compareX > 0 && compareY > 0)
        {
            newWidth = Math.floor(newWidth / 2);
            newHeight = Math.floor(newHeight / 2);

            if(corner.x === LEFT){ compareX = newWidth; }
            else if(corner.x === RIGHT){ compareX = result.width - newWidth; }
            else{ compareX += Math.floor(newWidth / 2); }

            if(corner.y === TOP){ compareY = newHeight; }
            else if(corner.y === BOTTOM){ compareY = result.height - newHeight; }
            else{ compareY += Math.floor(newHeight / 2); }

            i = coords.length; while(i--)
            {
                if(coords.length < 2){ break; }

                realX = coords[i][0] - result.position.left;
                realY = coords[i][1] - result.position.top;

                if((corner.x === LEFT && realX >= compareX) ||
                (corner.x === RIGHT && realX <= compareX) ||
                (corner.x === CENTER && (realX < compareX || realX > (result.width - compareX))) ||
                (corner.y === TOP && realY >= compareY) ||
                (corner.y === BOTTOM && realY <= compareY) ||
                (corner.y === CENTER && (realY < compareY || realY > (result.height - compareY)))) {
                    coords.splice(i, 1);
                }
            }
        }

        return { left: coords[0][0], top: coords[0][1] };
    }

    // Make sure we account for padding and borders on the image
    imageOffset.left += Math.ceil((image.outerWidth() - image.width()) / 2);
    imageOffset.top += Math.ceil((image.outerHeight() - image.height()) / 2);

    // Parse coordinates into proper array
    if(shape === 'poly') {
        i = baseCoords.length; while(i--)
        {
            next = [ parseInt(baseCoords[--i], 10), parseInt(baseCoords[i+1], 10) ];

            if(next[0] > result.position.right){ result.position.right = next[0]; }
            if(next[0] < result.position.left){ result.position.left = next[0]; }
            if(next[1] > result.position.bottom){ result.position.bottom = next[1]; }
            if(next[1] < result.position.top){ result.position.top = next[1]; }

            coords.push(next);
        }
    }
    else {
        i = -1; while(i++ < baseCoords.length) {
            coords.push( parseInt(baseCoords[i], 10) );
        }
    }

    // Calculate details
    switch(shape)
    {
        case 'rect':
            result = {
                width: Math.abs(coords[2] - coords[0]),
                height: Math.abs(coords[3] - coords[1]),
                position: {
                    left: Math.min(coords[0], coords[2]),
                    top: Math.min(coords[1], coords[3])
                }
            };
        break;

        case 'circle':
            result = {
                width: coords[2] + 2,
                height: coords[2] + 2,
                position: { left: coords[0], top: coords[1] }
            };
        break;

        case 'poly':
            result.width = Math.abs(result.position.right - result.position.left);
            result.height = Math.abs(result.position.bottom - result.position.top);

            if(corner.abbrev() === 'c') {
                result.position = {
                    left: result.position.left + (result.width / 2),
                    top: result.position.top + (result.height / 2)
                };
            }
            else {
                // Calculate if we can't find a cached value
                if(!cache[corner+coordsString]) {
                    result.position = polyCoordinates(result, coords.slice(), corner);

                    // If flip adjustment is enabled, also calculate the closest opposite point
                    if(adjustMethod && (adjustMethod[0] === 'flip' || adjustMethod[1] === 'flip')) {
                        result.offset = polyCoordinates(result, coords.slice(), {
                            x: corner.x === LEFT ? RIGHT : corner.x === RIGHT ? LEFT : CENTER,
                            y: corner.y === TOP ? BOTTOM : corner.y === BOTTOM ? TOP : CENTER
                        });

                        result.offset.left -= result.position.left;
                        result.offset.top -= result.position.top;
                    }

                    // Store the result
                    cache[corner+coordsString] = result;
                }

                // Grab the cached result
                result = cache[corner+coordsString];
            }

            result.width = result.height = 0;
        break;
    }

    // Add image position to offset coordinates
    result.position.left += imageOffset.left;
    result.position.top += imageOffset.top;

    return result;
};


/*
 * BGIFrame adaption (http://plugins.jquery.com/project/bgiframe)
 * Special thanks to Brandon Aaron
 */
function BGIFrame(api)
{
    var self = this,
        elems = api.elements,
        tooltip = elems.tooltip,
        namespace = '.bgiframe-' + api.id;

    $.extend(self, {
        init: function()
        {
            // Create the BGIFrame element
            elems.bgiframe = $('<iframe class="ui-tooltip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';" ' +
                ' style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); ' +
                    '-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>');

            // Append the new element to the tooltip
            elems.bgiframe.appendTo(tooltip);

            // Update BGIFrame on tooltip move
            tooltip.bind('tooltipmove'+namespace, self.adjust);
        },

        adjust: function()
        {
            var dimensions = api.get('dimensions'), // Determine current tooltip dimensions
                plugin = api.plugins.tip,
                tip = elems.tip,
                tipAdjust, offset;

            // Adjust border offset
            offset = parseInt(tooltip.css('border-left-width'), 10) || 0;
            offset = { left: -offset, top: -offset };

            // Adjust for tips plugin
            if(plugin && tip) {
                tipAdjust = (plugin.corner.precedance === 'x') ? ['width', 'left'] : ['height', 'top'];
                offset[ tipAdjust[1] ] -= tip[ tipAdjust[0] ]();
            }

            // Update bgiframe
            elems.bgiframe.css(offset).css(dimensions);
        },

        destroy: function()
        {
            // Remove iframe
            elems.bgiframe.remove();

            // Remove bound events
            tooltip.unbind(namespace);
        }
    });

    self.init();
}

PLUGINS.bgiframe = function(api)
{
    var browser = $.browser,
        self = api.plugins.bgiframe;

        // Proceed only if the browser is IE6 and offending elements are present
        if($('select, object').length < 1 || !(browser.msie && (''+browser.version).charAt(0) === '6')) {
        return FALSE;
    }

    return 'object' === typeof self ? self : (api.plugins.bgiframe = new BGIFrame(api));
};

// Plugin needs to be initialized on render
PLUGINS.bgiframe.initialize = 'render';


}));
}( window, document ));/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },

    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },

    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";

    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }

    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;

    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }

    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }

    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);

    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);(function ($) {

  /**
   * Augment jQuery prototype.
   */

  $.fn.antiscroll = function (options) {
    return this.each(function () {
      if ($(this).data('antiscroll')) {
        $(this).data('antiscroll').destroy();
      }

      $(this).data('antiscroll', new $.Antiscroll(this, options));
    });
  };

  /**
   * Expose constructor.
   */

  $.Antiscroll = Antiscroll;

  /**
   * Antiscroll pane constructor.
   *
   * @param {Element|jQuery} main pane
   * @parma {Object} options
   * @api public
   */

  function Antiscroll (el, opts) {
    this.el = $(el);
    this.options = opts || {};

    this.x = false !== this.options.x;
    this.y = false !== this.options.y;
    this.padding = undefined == this.options.padding ? 2 : this.options.padding;

    this.inner = this.el.find('.antiscroll-inner');
    this.inner.css({
        'width': '+=' + scrollbarSize()
      , 'height': '+=' + scrollbarSize()
    });

    this.refresh();
  };

  /**
   * refresh scrollbars
   *
   * @api public
   */

  Antiscroll.prototype.refresh = function() {
    var needHScroll = this.inner.get(0).scrollWidth > this.el.width()
      , needVScroll = this.inner.get(0).scrollHeight > this.el.height();

    if (!this.horizontal && needHScroll && this.x) {
      this.horizontal = new Scrollbar.Horizontal(this);
    } else if (this.horizontal && !needHScroll)  {
      this.horizontal.destroy();
      this.horizontal = null
    }

    if (!this.vertical && needVScroll && this.y) {
      this.vertical = new Scrollbar.Vertical(this);
    } else if (this.vertical && !needVScroll)  {
      this.vertical.destroy();
      this.vertical = null
    }
  };

  /**
   * Cleans up.
   *
   * @return {Antiscroll} for chaining
   * @api public
   */

  Antiscroll.prototype.destroy = function () {
    if (this.horizontal) {
      this.horizontal.destroy();
    }
    if (this.vertical) {
      this.vertical.destroy();
    }
    return this;
  };

  /**
   * Rebuild Antiscroll.
   *
   * @return {Antiscroll} for chaining
   * @api public
   */

  Antiscroll.prototype.rebuild = function () {
    this.destroy();
    this.inner.attr('style', '');
    Antiscroll.call(this, this.el, this.options);
    return this;
  };

  /**
   * Scrollbar constructor.
   *
   * @param {Element|jQuery} element
   * @api public
   */

  function Scrollbar (pane) {
    this.pane = pane;
    this.pane.el.append(this.el);
    this.innerEl = this.pane.inner.get(0);

    this.dragging = false;
    this.enter = false;
    this.shown = false;

    // hovering
    this.pane.el.mouseenter($.proxy(this, 'mouseenter'));
    this.pane.el.mouseleave($.proxy(this, 'mouseleave'));

    // dragging
    this.el.mousedown($.proxy(this, 'mousedown'));

    // scrolling
    this.pane.inner.scroll($.proxy(this, 'scroll'));

    // wheel -optional-
    this.pane.inner.bind('mousewheel', $.proxy(this, 'mousewheel'));

    // show
    var initialDisplay = this.pane.options.initialDisplay;

    if (initialDisplay !== false) {
      this.show();
      // this.hiding = setTimeout($.proxy(this, 'hide'), parseInt(initialDisplay, 10) || 3000);
    }
  }

  /**
   * Cleans up.
   *
   * @return {Scrollbar} for chaining
   * @api public
   */

  Scrollbar.prototype.destroy = function () {
    this.el.remove();
    return this;
  };

  /**
   * Called upon mouseenter.
   *
   * @api private
   */

  Scrollbar.prototype.mouseenter = function () {
    this.enter = true;
    this.show();
  };

  /**
   * Called upon mouseleave.
   *
   * @api private
   */

  Scrollbar.prototype.mouseleave = function () {
    this.enter = false;

    // if (!this.dragging) {
    //   this.hide();
    // }
  };

  /**
   * Called upon wrap scroll.
   *
   * @api private
   */

  Scrollbar.prototype.scroll = function () {
    if (!this.shown) {
      this.show();
      // if (!this.enter && !this.dragging) {
      //   this.hiding = setTimeout($.proxy(this, 'hide'), 1500);
      // }
    }

    this.update();
  };

  /**
   * Called upon scrollbar mousedown.
   *
   * @api private
   */

  Scrollbar.prototype.mousedown = function (ev) {
    ev.preventDefault();

    this.dragging = true;

    this.startPageY = ev.pageY - parseInt(this.el.css('top'), 10);
    this.startPageX = ev.pageX - parseInt(this.el.css('left'), 10);

    // prevent crazy selections on IE
    document.onselectstart = function () { return false; };

    var pane = this.pane
      , move = $.proxy(this, 'mousemove')
      , self = this

    $(document)
      .mousemove(move)
      .mouseup(function () {
        self.dragging = false;
        document.onselectstart = null;

        $(document).unbind('mousemove', move);

        // if (!self.enter) {
        //   self.hide();
        // }
      });
  };

  /**
   * Show scrollbar.
   *
   * @api private
   */

  Scrollbar.prototype.show = function (duration) {
    if (!this.shown) {
      this.update();
      this.el.addClass('antiscroll-scrollbar-shown');
      if (this.hiding) {
        clearTimeout(this.hiding);
        this.hiding = null;
      }
      this.shown = true;
    }
  };

  /**
   * Hide scrollbar.
   *
   * @api private
   */

  Scrollbar.prototype.hide = function () {
    var autoHide = this.pane.options.autoHide;
    if (autoHide !== false && this.shown) {
      // check for dragging
      this.el.removeClass('antiscroll-scrollbar-shown');
      this.shown = false;
    }
  };

  /**
   * Horizontal scrollbar constructor
   *
   * @api private
   */

  Scrollbar.Horizontal = function (pane) {
    this.el = $('<div class="antiscroll-scrollbar antiscroll-scrollbar-horizontal">');
    Scrollbar.call(this, pane);
  };

  /**
   * Inherits from Scrollbar.
   */

  inherits(Scrollbar.Horizontal, Scrollbar);

  /**
   * Updates size/position of scrollbar.
   *
   * @api private
   */

  Scrollbar.Horizontal.prototype.update = function () {
    var paneWidth = this.pane.el.width()
      , trackWidth = paneWidth - this.pane.padding * 2
      , innerEl = this.pane.inner.get(0)

    this.el
      .css('width', trackWidth * paneWidth / innerEl.scrollWidth)
      .css('left', trackWidth * innerEl.scrollLeft / innerEl.scrollWidth);
  };

  /**
   * Called upon drag.
   *
   * @api private
   */

  Scrollbar.Horizontal.prototype.mousemove = function (ev) {
    var trackWidth = this.pane.el.width() - this.pane.padding * 2
      , pos = ev.pageX - this.startPageX
      , barWidth = this.el.width()
      , innerEl = this.pane.inner.get(0)

    // minimum top is 0, maximum is the track height
    var y = Math.min(Math.max(pos, 0), trackWidth - barWidth)

    innerEl.scrollLeft = (innerEl.scrollWidth - this.pane.el.width())
      * y / (trackWidth - barWidth)
  };

  /**
   * Called upon container mousewheel.
   *
   * @api private
   */

  Scrollbar.Horizontal.prototype.mousewheel = function (ev, delta, x, y) {
    if ((x < 0 && 0 == this.pane.inner.get(0).scrollLeft) ||
        (x > 0 && (this.innerEl.scrollLeft + Math.ceil(this.pane.el.width())
          == this.innerEl.scrollWidth))) {
      ev.preventDefault();
      return false;
    }
  };

  /**
   * Vertical scrollbar constructor
   *
   * @api private
   */

  Scrollbar.Vertical = function (pane) {
    this.el = $('<div class="antiscroll-scrollbar antiscroll-scrollbar-vertical">');
    Scrollbar.call(this, pane);
  };

  /**
   * Inherits from Scrollbar.
   */

  inherits(Scrollbar.Vertical, Scrollbar);

  /**
   * Updates size/position of scrollbar.
   *
   * @api private
   */

  Scrollbar.Vertical.prototype.update = function () {
    var paneHeight = this.pane.el.height()
      , trackHeight = paneHeight - this.pane.padding * 2
      , innerEl = this.innerEl

    this.el
      .css('height', trackHeight * paneHeight / innerEl.scrollHeight)
      .css('top', trackHeight * innerEl.scrollTop / innerEl.scrollHeight)
  };

  /**
   * Called upon drag.
   *
   * @api private
   */

  Scrollbar.Vertical.prototype.mousemove = function (ev) {
    var paneHeight = this.pane.el.height()
      , trackHeight = paneHeight - this.pane.padding * 2
      , pos = ev.pageY - this.startPageY
      , barHeight = this.el.height()
      , innerEl = this.innerEl

    // minimum top is 0, maximum is the track height
    var y = Math.min(Math.max(pos, 0), trackHeight - barHeight)

    innerEl.scrollTop = (innerEl.scrollHeight - paneHeight)
      * y / (trackHeight - barHeight)
  };

  /**
   * Called upon container mousewheel.
   *
   * @api private
   */

  Scrollbar.Vertical.prototype.mousewheel = function (ev, delta, x, y) {
    if ((y > 0 && 0 == this.innerEl.scrollTop) ||
        (y < 0 && (this.innerEl.scrollTop + Math.ceil(this.pane.el.height())
          == this.innerEl.scrollHeight))) {
      ev.preventDefault();
      return false;
    }
  };

  /**
   * Cross-browser inheritance.
   *
   * @param {Function} constructor
   * @param {Function} constructor we inherit from
   * @api private
   */

  function inherits (ctorA, ctorB) {
    function f() {};
    f.prototype = ctorB.prototype;
    ctorA.prototype = new f;
  }

  /**
   * Scrollbar size detection.
   */

  var size;

  function scrollbarSize () {
    if (size === undefined) {
      var div = $(
          '<div style="width:50px;height:50px;overflow:hidden;'
        + 'position:absolute;top:-200px;left:-200px;"><div style="height:100px;">'
        + '</div>'
      );

      $('body').append(div);

      var w1 = $('div', div).innerWidth();
      div.css('overflow-y', 'scroll');
      var w2 = $('div', div).innerWidth();
      $(div).remove();

      size = w1 - w2;
    }

    return size;
  }

})(jQuery);// Chosen, a Select Box Enhancer for jQuery and Protoype
// by Patrick Filler for Harvest, http://getharvest.com
//
// Version 0.9.8
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `cake build`, do not edit it by hand.
(function() {
  var SelectParser;

  SelectParser = (function() {

    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, option, _i, _len, _ref, _results;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: group.label,
        children: 0,
        disabled: group.disabled
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) this.parsed[group_position].children += 1;
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, parser, _i, _len, _ref;
    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  this.SelectParser = SelectParser;

}).call(this);

/*
Chosen source: generate output using 'cake build'
Copyright (c) 2011 by Harvest
*/

(function() {
  var AbstractChosen, root;

  root = this;

  AbstractChosen = (function() {

    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      this.set_default_values();
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.finish_setup();
    }

    AbstractChosen.prototype.set_default_values = function() {
      var _this = this;
      this.click_test_action = function(evt) {
        return _this.test_active_click(evt);
      };
      this.activate_action = function(evt) {
        return _this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.result_single_selected = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.search_contains = this.options.search_contains || false;
      this.choices = 0;
      this.single_backstroke_delete = this.options.single_backstroke_delete || false;
      return this.max_selected_options = this.options.max_selected_options || Infinity;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || "Select Some Options";
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || "Select an Option";
      }
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || "No results match";
    };

    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function(evt) {
      var _this = this;
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout((function() {
            return _this.container_mousedown();
          }), 50);
        }
      } else {
        if (!this.active_field) return this.activate_field();
      }
    };

    AbstractChosen.prototype.input_blur = function(evt) {
      var _this = this;
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((function() {
          return _this.blur_test();
        }), 100);
      }
    };

    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, style;
      if (!option.disabled) {
        option.dom_id = this.container_id + "_o_" + option.array_index;
        classes = option.selected && this.is_multiple ? [] : ["active-result"];
        if (option.selected) classes.push("result-selected");
        if (option.group_array_index != null) classes.push("group-option");
        if (option.classes !== "") classes.push(option.classes);
        style = option.style.cssText !== "" ? " style=\"" + option.style + "\"" : "";
        return '<li id="' + option.dom_id + '" class="' + classes.join(' ') + '"' + style + '>' + option.html + '</li>';
      } else {
        return "";
      }
    };

    AbstractChosen.prototype.results_update_field = function() {
      if (!this.is_multiple) this.results_reset_cleanup();
      this.result_clear_highlight();
      this.result_single_selected = null;
      return this.results_build();
    };

    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) return this.result_select(evt);
          break;
        case 27:
          if (this.results_showing) this.results_hide();
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          return this.results_search();
      }
    };

    AbstractChosen.prototype.generate_field_id = function() {
      var new_id;
      new_id = this.generate_random_id();
      this.form_field.id = new_id;
      return new_id;
    };

    AbstractChosen.prototype.generate_random_char = function() {
      var chars, newchar, rand;
      chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      rand = Math.floor(Math.random() * chars.length);
      return newchar = chars.substring(rand, rand + 1);
    };

    return AbstractChosen;

  })();

  root.AbstractChosen = AbstractChosen;

}).call(this);

/*
Chosen source: generate output using 'cake build'
Copyright (c) 2011 by Harvest
*/

(function() {
  var $, Chosen, get_side_border_padding, root,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  root = this;

  $ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      if ($.browser.msie && ($.browser.version === "6.0" || ($.browser.version === "7.0" && document.documentMode === 7))) {
        return this;
      }
      return this.each(function(input_field) {
        var $this;
        $this = $(this);
        if (!$this.hasClass("chzn-done")) {
          return $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = (function(_super) {

    __extends(Chosen, _super);

    function Chosen() {
      Chosen.__super__.constructor.apply(this, arguments);
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      this.current_value = this.form_field_jq.val();
      return this.is_rtl = this.form_field_jq.hasClass("chzn-rtl");
    };

    Chosen.prototype.finish_setup = function() {
      return this.form_field_jq.addClass("chzn-done");
    };

    Chosen.prototype.set_up_html = function() {
      var container_div, dd_top, dd_width, sf_width;
      this.container_id = this.form_field.id.length ? this.form_field.id.replace(/[^\w]/g, '_') : this.generate_field_id();
      this.container_id += "_chzn";
      this.f_width = this.form_field_jq.outerWidth();
      container_div = $("<div />", {
        id: this.container_id,
        "class": "chzn-container" + (this.is_rtl ? ' chzn-rtl' : ''),
        style: 'width: ' + this.f_width + 'px;'
      });
      if (this.is_multiple) {
        container_div.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>');
      } else {
        container_div.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>');
      }
      this.form_field_jq.hide().after(container_div);
      this.container = $('#' + this.container_id);
      this.container.addClass("chzn-container-" + (this.is_multiple ? "multi" : "single"));
      this.dropdown = this.container.find('div.chzn-drop').first();
      dd_top = this.container.height();
      dd_width = this.f_width - get_side_border_padding(this.dropdown);
      this.dropdown.css({
        "width": dd_width + "px",
        "top": dd_top + "px"
      });
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chzn-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chzn-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chzn-search').first();
        this.selected_item = this.container.find('.chzn-single').first();
        sf_width = dd_width - get_side_border_padding(this.search_container) - get_side_border_padding(this.search_field);
        this.search_field.css({
          "width": sf_width + "px"
        });
      }
      this.results_build();
      this.set_tab_index();
      return this.form_field_jq.trigger("liszt:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function() {
      var _this = this;
      this.container.mousedown(function(evt) {
        return _this.container_mousedown(evt);
      });
      this.container.mouseup(function(evt) {
        return _this.container_mouseup(evt);
      });
      this.container.mouseenter(function(evt) {
        return _this.mouse_enter(evt);
      });
      this.container.mouseleave(function(evt) {
        return _this.mouse_leave(evt);
      });
      this.search_results.mouseup(function(evt) {
        return _this.search_results_mouseup(evt);
      });
      this.search_results.mouseover(function(evt) {
        return _this.search_results_mouseover(evt);
      });
      this.search_results.mouseout(function(evt) {
        return _this.search_results_mouseout(evt);
      });
      this.form_field_jq.bind("liszt:updated", function(evt) {
        return _this.results_update_field(evt);
      });
      this.form_field_jq.bind("liszt:activate", function(evt) {
        return _this.activate_field(evt);
      });
      this.form_field_jq.bind("liszt:open", function(evt) {
        return _this.container_mousedown(evt);
      });
      this.search_field.blur(function(evt) {
        return _this.input_blur(evt);
      });
      this.search_field.keyup(function(evt) {
        return _this.keyup_checker(evt);
      });
      this.search_field.keydown(function(evt) {
        return _this.keydown_checker(evt);
      });
      this.search_field.focus(function(evt) {
        return _this.input_focus(evt);
      });
      if (this.is_multiple) {
        return this.search_choices.click(function(evt) {
          return _this.choices_click(evt);
        });
      } else {
        return this.container.click(function(evt) {
          return evt.preventDefault();
        });
      }
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.addClass('chzn-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind("focus", this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.removeClass('chzn-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
          return this.selected_item.bind("focus", this.activate_action);
        }
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      var target_closelink;
      if (!this.is_disabled) {
        target_closelink = evt != null ? ($(evt.target)).hasClass("search-choice-close") : false;
        if (evt && evt.type === "mousedown" && !this.results_showing) {
          evt.stopPropagation();
        }
        if (!this.pending_destroy_click && !target_closelink) {
          if (!this.active_field) {
            if (this.is_multiple) this.search_field.val("");
            $(document).click(this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chzn-single").length)) {
            evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        } else {
          return this.pending_destroy_click = false;
        }
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chzn-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
      $(document).unbind("click", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chzn-container-active");
      this.winnow_results_clear();
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };

    Chosen.prototype.activate_field = function() {
      this.container.addClass("chzn-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function(evt) {
      if ($(evt.target).parents('#' + this.container_id).length) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      var content, data, _i, _len, _ref;
      this.parsing = true;
      this.results_data = root.SelectParser.select_to_array(this.form_field);
      if (this.is_multiple && this.choices > 0) {
        this.search_choices.find("li.search-choice").remove();
        this.choices = 0;
      } else if (!this.is_multiple) {
        this.selected_item.addClass("chzn-default").find("span").text(this.default_text);
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.container.addClass("chzn-container-single-nosearch");
        } else {
          this.container.removeClass("chzn-container-single-nosearch");
        }
      }
      content = '';
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        if (data.group) {
          content += this.result_add_group(data);
        } else if (!data.empty) {
          content += this.result_add_option(data);
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.selected_item.removeClass("chzn-default").find("span").text(data.text);
            if (this.allow_single_deselect) this.single_deselect_control_build();
          }
        }
      }
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      this.search_results.html(content);
      return this.parsing = false;
    };

    Chosen.prototype.result_add_group = function(group) {
      if (!group.disabled) {
        group.dom_id = this.container_id + "_g_" + group.array_index;
        return '<li id="' + group.dom_id + '" class="group-result">' + $("<div />").text(group.label).html() + '</li>';
      } else {
        return "";
      }
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) this.result_highlight.removeClass("highlighted");
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      var dd_top;
      if (!this.is_multiple) {
        this.selected_item.addClass("chzn-single-with-drop");
        if (this.result_single_selected) {
          this.result_do_highlight(this.result_single_selected);
        }
      } else if (this.max_selected_options <= this.choices) {
        this.form_field_jq.trigger("liszt:maxselected", {
          chosen: this
        });
        return false;
      }
      dd_top = this.is_multiple ? this.container.height() : this.container.height() - 1;
      this.form_field_jq.trigger("liszt:showing_dropdown", {
        chosen: this
      });
      this.dropdown.css({
        "top": dd_top + "px",
        "left": 0
      });
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.search_field.val());
      return this.winnow_results();
    };

    Chosen.prototype.results_hide = function() {
      if (!this.is_multiple) {
        this.selected_item.removeClass("chzn-single-with-drop");
      }
      this.result_clear_highlight();
      this.form_field_jq.trigger("liszt:hiding_dropdown", {
        chosen: this
      });
      this.dropdown.css({
        "left": "-9000px"
      });
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;
      if (this.form_field_jq.attr("tabindex")) {
        ti = this.form_field_jq.attr("tabindex");
        this.form_field_jq.attr("tabindex", -1);
        return this.search_field.attr("tabindex", ti);
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) return this.result_do_highlight(target);
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      if (this.active_field && !($(evt.target).hasClass("search-choice" || $(evt.target).parents('.search-choice').first)) && !this.results_showing) {
        return this.results_show();
      }
    };

    Chosen.prototype.choice_build = function(item) {
      var choice_id, html, link,
        _this = this;
      if (this.is_multiple && this.max_selected_options <= this.choices) {
        this.form_field_jq.trigger("liszt:maxselected", {
          chosen: this
        });
        return false;
      }
      choice_id = this.container_id + "_c_" + item.array_index;
      this.choices += 1;
      if (item.disabled) {
        html = '<li class="search-choice search-choice-disabled" id="' + choice_id + '"><span>' + item.html + '</span></li>';
      } else {
        html = '<li class="search-choice" id="' + choice_id + '"><span>' + item.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + item.array_index + '"></a></li>';
      }
      this.search_container.before(html);
      link = $('#' + choice_id).find("a").first();
      return link.click(function(evt) {
        return _this.choice_destroy_link_click(evt);
      });
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      if (!this.is_disabled) {
        this.pending_destroy_click = true;
        return this.choice_destroy($(evt.target));
      } else {
        return evt.stopPropagation;
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
      if (this.result_deselect(link.attr("rel"))) {
        this.choices -= 1;
        this.show_search_field_default();
        if (this.is_multiple && this.choices > 0 && this.search_field.val().length < 1) {
          this.results_hide();
        }
        return link.parents('li').first().remove();
      }
    };

    Chosen.prototype.results_reset = function() {
      this.form_field.options[0].selected = true;
      this.selected_item.find("span").text(this.default_text);
      if (!this.is_multiple) this.selected_item.addClass("chzn-default");
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.form_field_jq.trigger("change");
      if (this.active_field) return this.results_hide();
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_value = this.form_field_jq.val();
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, high_id, item, position;
      if (this.result_highlight) {
        high = this.result_highlight;
        high_id = high.attr("id");
        this.result_clear_highlight();
        if (this.is_multiple) {
          this.result_deactivate(high);
        } else {
          this.search_results.find(".result-selected").removeClass("result-selected");
          this.result_single_selected = high;
          this.selected_item.removeClass("chzn-default");
        }
        high.addClass("result-selected");
        position = high_id.substr(high_id.lastIndexOf("_") + 1);
        item = this.results_data[position];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.selected_item.find("span").first().text(item.text);
          if (this.allow_single_deselect) this.single_deselect_control_build();
        }
        if (!(evt.metaKey && this.is_multiple)) this.results_hide();
        this.search_field.val("");
        if (this.is_multiple || this.form_field_jq.val() !== this.current_value) {
          this.form_field_jq.trigger("change", {
            'selected': this.form_field.options[item.options_index].value
          });
        }
        this.current_value = this.form_field_jq.val();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.result_activate = function(el) {
      return el.addClass("active-result");
    };

    Chosen.prototype.result_deactivate = function(el) {
      return el.removeClass("active-result");
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result, result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        result = $("#" + this.container_id + "_o_" + pos);
        result.removeClass("result-selected").addClass("active-result").show();
        this.result_clear_highlight();
        this.winnow_results();
        this.form_field_jq.trigger("change", {
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1) {
        return this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
    };

    Chosen.prototype.winnow_results = function() {
      var found, option, part, parts, regex, regexAnchor, result, result_id, results, searchText, startpos, text, zregex, _i, _j, _len, _len2, _ref;
      this.no_results_clear();
      results = 0;
      searchText = this.search_field.val() === this.default_text ? "" : $('<div/>').text($.trim(this.search_field.val())).html();
      regexAnchor = this.search_contains ? "" : "^";
      regex = new RegExp(regexAnchor + searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
      zregex = new RegExp(searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (!option.disabled && !option.empty) {
          if (option.group) {
            $('#' + option.dom_id).css('display', 'none');
          } else if (!(this.is_multiple && option.selected)) {
            found = false;
            result_id = option.dom_id;
            result = $("#" + result_id);
            if (regex.test(option.html)) {
              found = true;
              results += 1;
            } else if (option.html.indexOf(" ") >= 0 || option.html.indexOf("[") === 0) {
              parts = option.html.replace(/\[|\]/g, "").split(" ");
              if (parts.length) {
                for (_j = 0, _len2 = parts.length; _j < _len2; _j++) {
                  part = parts[_j];
                  if (regex.test(part)) {
                    found = true;
                    results += 1;
                  }
                }
              }
            }
            if (found) {
              if (searchText.length) {
                startpos = option.html.search(zregex);
                text = option.html.substr(0, startpos + searchText.length) + '</em>' + option.html.substr(startpos + searchText.length);
                text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              } else {
                text = option.html;
              }
              result.html(text);
              this.result_activate(result);
              if (option.group_array_index != null) {
                $("#" + this.results_data[option.group_array_index].dom_id).css('display', 'list-item');
              }
            } else {
              if (this.result_highlight && result_id === this.result_highlight.attr('id')) {
                this.result_clear_highlight();
              }
              this.result_deactivate(result);
            }
          }
        }
      }
      if (results < 1 && searchText.length) {
        return this.no_results(searchText);
      } else {
        return this.winnow_results_set_highlight();
      }
    };

    Chosen.prototype.winnow_results_clear = function() {
      var li, lis, _i, _len, _results;
      this.search_field.val("");
      lis = this.search_results.find("li");
      _results = [];
      for (_i = 0, _len = lis.length; _i < _len; _i++) {
        li = lis[_i];
        li = $(li);
        if (li.hasClass("group-result")) {
          _results.push(li.css('display', 'auto'));
        } else if (!this.is_multiple || !li.hasClass("result-selected")) {
          _results.push(this.result_activate(li));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;
      if (!this.result_highlight) {
        selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
        do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
        if (do_high != null) return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function(terms) {
      var no_results_html;
      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
      no_results_html.find("span").first().html(terms);
      return this.search_results.append(no_results_html);
    };

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var first_active, next_sib;
      if (!this.result_highlight) {
        first_active = this.search_results.find("li.active-result").first();
        if (first_active) this.result_do_highlight($(first_active));
      } else if (this.results_showing) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) this.result_do_highlight(next_sib);
      }
      if (!this.results_showing) return this.results_show();
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices > 0) this.results_hide();
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.keydown_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) this.clear_backstroke();
      switch (stroke) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) this.result_select(evt);
          this.mouse_on_container = false;
          break;
        case 13:
          evt.preventDefault();
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          this.keydown_arrow();
          break;
      }
    };

    Chosen.prototype.search_field_scale = function() {
      var dd_top, div, h, style, style_block, styles, w, _i, _len;
      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block += style + ":" + this.search_field.css(style) + ";";
        }
        div = $('<div />', {
          'style': style_block
        });
        div.text(this.search_field.val());
        $('body').append(div);
        w = div.width() + 25;
        div.remove();
        if (w > this.f_width - 10) w = this.f_width - 10;
        this.search_field.css({
          'width': w + 'px'
        });
        dd_top = this.container.height();
        return this.dropdown.css({
          "top": dd_top + "px"
        });
      }
    };

    Chosen.prototype.generate_random_id = function() {
      var string;
      string = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char();
      while ($("#" + string).length > 0) {
        string += this.generate_random_char();
      }
      return string;
    };

    return Chosen;

  })(AbstractChosen);

  get_side_border_padding = function(elmt) {
    var side_border_padding;
    return side_border_padding = elmt.outerWidth() - elmt.width();
  };

  root.get_side_border_padding = get_side_border_padding;

}).call(this);$.fn.fookmark = function(options) {
    var defaultDividerText = "Page",
        supportsOrientationChange = "onorientationchange" in window,
        orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

    if(!this.fookmarkOptions) {
        this.fookmarkOptions = $.extend( {
            container: $('body'),
            offset: 2,
            autoResize: false,
            itemWidth: $(this[0]).outerWidth(),
            dividerClass: "page-divider",
            resizeDelay: 50,
            pageOffset: 50,
            divider: true,
            dividerValue: defaultDividerText,
            dividerFallback: true,
            fuzzyBottom: 200,
            minHeight: 1400,
            onReflow: function() {}
        }, options);
    } else if(options) {
        this.fookmarkOptions = $.extend(this.fookmarkOptions, options);
    }

    // Layout variables.
    if(!this.fookmarkColumns) {
        this.fookmarkColumns = null;
        this.fookmarkContainerWidth = null;
    }

    // Main layout function.
    this.fookmarkLayout = function() {
        // Calculate basic layout parameters.
        var columnWidth = this.fookmarkOptions.itemWidth + this.fookmarkOptions.offset;
        var containerWidth = this.fookmarkOptions.container.width();
        var columns = Math.floor((containerWidth+this.fookmarkOptions.offset)/columnWidth);
        var offset = Math.round((containerWidth - (columns*columnWidth-this.fookmarkOptions.offset))/2);

        // If container and column count hasn't changed, we can only update the columns.
        var bottom = this.fookmarkLayoutFull(columnWidth, columns, offset);

        // Set container height to height of the grid.
        this.fookmarkOptions.container.css('height', bottom+'px');
        this.fookmarkOptions.onReflow({
            columnWidth: columnWidth,
            containerWidth: containerWidth,
            columns: columns,
            bottom: bottom
        });
    };

    this.fookmarkLayoutFull = function(columnWidth, columns, offset) {
        // Prepare Array to store height of columns.
        var viewportHeight = $(window).height(),
            itemsToPosition = $(this).toArray(),
            itemsInPage = 0,
            pageOffset = 0,
            page = 1,
            heights,
            nextTop = 0,
            nextBottom = 0,
            shortestIndex = 0,
            itemHeight,
            division,
            tallest,
            shortest,
            item,
            k,
            i;

        // Remove all dividers
        this.fookmarkOptions.container.find("." + this.fookmarkOptions.dividerClass).remove();
        heights = this.resetHeight(columns);

        while(itemsToPosition.length) {
            shortest = null;
            shortestIndex = 0;
            for(k=0; k<columns; k++) {
                if(shortest == null || heights[k] < shortest) {
                    shortest = heights[k];
                    shortestIndex = k;
                }
            }

            item = $(itemsToPosition.shift());
            itemHeight = heights[shortestIndex];
            nextTop = itemHeight + this.fookmarkOptions.offset;
            nextBottom = nextTop + item.outerHeight();

            // Determine if break is needed
            if (nextBottom - this.fookmarkOptions.fuzzyBottom > viewportHeight &&
                nextBottom - this.fookmarkOptions.fuzzyBottom > this.fookmarkOptions.minHeight &&
                itemsInPage >= columns) {
                // try and fill in gaps for remaining columns
                for (i = shortestIndex + 1; i < columns; i++) {
                    itemHeight = heights[i];
                    nextTop = itemHeight + this.fookmarkOptions.offset;
                    nextBottom = nextTop + item.outerHeight();

                    if (nextBottom - this.fookmarkOptions.fuzzyBottom < viewportHeight) {
                        heights[i] = nextBottom;
                        item.css({
                            position: "absolute",
                            top: pageOffset + itemHeight + "px",
                            left: (i * columnWidth + offset) + "px"
                        });
                        item = $(itemsToPosition.shift());
                    }
                }

                tallest = this.getTallest(heights);
                pageOffset += tallest + this.fookmarkOptions.pageOffset;
                page += 1;

                heights = this.resetHeight(columns);
                nextBottom = item.outerHeight() + this.fookmarkOptions.offset;
                itemsInPage = 0;
                shortestIndex = 0;
                itemHeight = 0;

                if (this.fookmarkOptions.divider) {
                    division = pageOffset - ((this.fookmarkOptions.pageOffset + this.fookmarkOptions.offset) / 2);

                    this.drawDivider(division, this.getDividerText(item, page));
                }
            }

            // Postion the item.
            item.css({
                position: "absolute",
                top: pageOffset + itemHeight + "px",
                left: (shortestIndex * columnWidth + offset) + "px"
            });

            // Update column height.
            heights[shortestIndex] = nextBottom;

            itemsInPage += 1;
        }

        return pageOffset + this.getTallest(heights);
    };

    this.resetHeight = function(columns) {
        var heights = [];

        while(heights.length < columns) {
            heights.push(0);
        }

        return heights;
    };

    this.getTallest = function(heights) {
        return Math.max.apply(null, heights);
    };

    this.getDividerText = function($el, page) {
        var defaultText = defaultDividerText + " " + page,
            dividerText;

        if (typeof this.fookmarkOptions.dividerValue === "function") {
            dividerText = this.fookmarkOptions.dividerValue($el);
        }
        if (!dividerText && this.fookmarkOptions.dividerFallback) {
            dividerText = defaultText;
        }

        return dividerText;
    };

    this.drawDivider = function(y, blockStr) {
        blockStr || (blockStr = "");

        var divider = "<div class='" + this.fookmarkOptions.dividerClass + "' style='" +
                        "position: absolute;" +
                        "top: " + y + "px;' " +
                        "data-block='" + blockStr + "' " +
                        "><span class='page-divider-text'>" + blockStr + "</span></div>";

        this.fookmarkOptions.container.append(divider);
    };

    // Listen to resize event if requested.
    this.fookmarkResizeTimer = null;
    if(!this.fookmarkResizeMethod) {
        this.fookmarkResizeMethod = null;
    }
    if(this.fookmarkOptions.autoResize) {
        // This timer ensures that layout is not continuously called as window is being dragged.
        this.fookmarkOnResize = function(event) {
            if(this.fookmarkResizeTimer) {
                clearTimeout(this.fookmarkResizeTimer);
            }
            this.fookmarkResizeTimer = setTimeout($.proxy(this.fookmarkLayout, this), this.fookmarkOptions.resizeDelay);
        };

        // Bind event listener.
        if(!this.fookmarkResizeMethod) {
            this.fookmarkResizeMethod = $.proxy(this.fookmarkOnResize, this);
        }
        $(window).off(orientationEvent, this.fookmarkResizeMethod);
        $(window).on(orientationEvent, this.fookmarkResizeMethod);
    }

    /**
    * Clear event listeners and time outs.
    */
    this.fookmarkClear = function() {
        if(this.fookmarkResizeTimer) {
            clearTimeout(this.fookmarkResizeTimer);
            this.fookmarkResizeTimer = null;
        }
        if(this.fookmarkResizeMethod) {
            $(window).off(orientationEvent, this.fookmarkResizeMethod);
        }
    };

    // Apply layout
    this.fookmarkLayout();

    // Display items (if hidden).
    this.show();

    return this;
};/**
 * Click tracking: go/clicktracking
 *
 * Reports clicks
 *
 */

(function() {
    "use strict";

    SU.UserClickTracking = (function() {

        var cookieNamePrefix = "ct_",
            nbCookiesForBatch = 8,
            maxCookies = 10,
            previousElementClicked = null,
            loggingInProgress = false,
            $body = $(document.body),
            maxScroll = 0; // maxScroll records the max vertical scroll during the page session


        $(window).scroll(function(evt) {
            var st = $body.scrollTop();
            if (st > maxScroll)
                maxScroll = st;
        });

        function getEdid(e) {
            var edid = '';

            edid += e.attr('data-id');
            edid += ":";
            if (e.data('type')) {
                edid += e.data('type');
            }
            edid += ":";
            edid += e.index();
            edid += ":";

            // Add class information
            if (e.attr('class') !== undefined) {
                edid += e.attr('class');
            }

            return edid;
        };

        function getEid(e) {
            var eid = '';

            eid += e.attr('id');
            eid += ":";
            if (e.data('type')) {
                eid += e.data('type');
            }
            eid += ":";
            eid += e.index();
            eid += ":";

            // Add class information
            if (e.attr('class') !== undefined) {
                eid += e.attr('class');
            }

            return eid;
        };

        function getData(e) {
            var result = {},
                t = e.currentTarget,
                $t = $(e.currentTarget),
                l = null,
                p = null,
                parents = null,
                i = 0,
                thref = '',
                mediator;

            // Coordonates info
            result.cx = e.clientX;
            result.cy = e.clientY;
            result.st = $body.scrollTop();
            result.sl = $body.scrollLeft();
            // max scroll info
            if (maxScroll > 0)
                result.ms = maxScroll;
            // Element info
            result.e = t.tagName;
            result.e += ':' + (t.type ? t.type : '');
            result.e += ':' + ((!t.id && t.name) ? t.name : '');
            result.e += ':' + (t.id ? t.id : '');
            result.e += ':';
            if ($t.data('type')) {
                result.e += $t.data('type');
            }
            result.e += ':';
            // Add class information
            if ($t.attr('class') !== undefined) {
                result.e += $t.attr('class');
            }

            // Extra element info
            /*
            try {
                mediator = require("module/mediator");
                if (mediator) {
                    mediator.trigger("tracking:getModel", e, function (model, index) {
                        // Get the model name if possible
                    })
                }
            } catch (err) {}
            */

            // Try to get a data-id either from the element or a parent
            if ($t.data('id') !== undefined) {
                result.edid = getEdid($t);
            } else {
                parents = $t.parents();
                l = parents.length;
                for (i = 0 ; i < l ; i++) {
                    var p = $(parents[i]);
                    if (p.data('id') !== undefined) {
                        result.edid = getEdid(p);
                        break;
                    }
                }
            }

            // Try to get a id either from the element or a parent
            if ($t.attr('id') !== undefined) {
                result.eid = getEid($t);
            } else {
                parents = $t.parents();
                l = parents.length;
                for (i = 0 ; i < l ; i++) {
                    var p = $(parents[i]);
                    if (p.attr('id') !== undefined) {
                        result.eid = getEid(p);
                        break;
                    }
                }
            }

            // origin url
            result.ou = window.location.href;
            // target url
            thref = $t.attr('href');
            if (t.tagName == 'A' && thref && thref != '#') {
                result.tu = t.href;
            }
            result.t = new Date().getTime();

            return result;
        };

        function S4() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };

        function getClickCookies() {
            var a = document.cookie.match(/ct_[0-9]{13}_[0-9a-z]{4}=/gi);
            if (a) {
                return a.length;
            }
            return 0;
        };

        return {
            logClickFromMouseDownUp: function(e) {
                if (e._suEventLogged) {
                    return;
                }
                e._suEventLogged = true;
                if (e.type == "mousedown") {
                    previousElementClicked = e.currentTarget;
                    return;
                }
                if (e.currentTarget != previousElementClicked) {
                    return;
                }
                SU.UserClickTracking.logClick(e);
            },

            logClick: function(e) {
                var nbCookies = getClickCookies(),
                    data,
                    cookieName,
                    cookieValue;

                if (nbCookies < maxCookies) {
                    data = getData(e);
                    // Create the cookie
                    cookieName = cookieNamePrefix + data.t + "_" + S4();
                    cookieValue = $.param(data);
                    document.cookie = cookieName + "=" + cookieValue + "; ; path=/; ;";
                }

                if (nbCookies+1 >= nbCookiesForBatch && !loggingInProgress) {
                    loggingInProgress = true;
                    $.ajax("/p", {
                        complete: function() {
                            loggingInProgress = false;
                        }
                    });
                }
            },
            
            setNbCookiesForBatch: function(newValue) {
                nbCookiesForBatch = newValue;
            },

            setMaxCookies: function(newvalue) {
                maxCookies = newValue;
            }
        };

    })();

    // Install click tracking when page is loaded
    $(function() {
        $(document.body).on("mousedown mouseup", "a, .btn, input, textarea, select", SU.UserClickTracking.logClickFromMouseDownUp);
    });

}).call(this);/**
 * Class_toggle extends jquery and zepto
 * adds ability to add arbitrary class on event
 */

(function(){
    $.fn.classToggle = function(options) {
        var opts = $.extend({}, $.fn.classToggle.defaults, options),
            $self = $( this ),
            $targ; 
        if ( !opts.targElem ){
            return;
        }
        $targ = $( opts.targElem );

        function toggler() {
            $( opts.targElem ).toggleClass( opts.newClass );
        }

        if ( opts.onEvent == 'hover' ){
//            $self.hover( function (){ toggler(); toggler(); });
            $self.bind('mouseenter mouseleave', toggler() );
console.log('bear');
        } else {
            $self.bind( opts.onEvent, function(){
                toggler();
                console.log('pooh');
            });
        }
    };
    $.fn.classToggle.defaults = {
        "onEvent" : "hover",
        "newClass" : "active",
        "targElem" : false
    };
    // Call init
}).call(this);/**
 * toolbar_action.js
 *
 * Facade to send calls to the toolbars
 *
 * @author fabrice
 */
(function(){
    SU.ToolbarAction = {

        _hasCorrectExtension: function() {
            if (typeof suExtensionApi == "undefined") {
                return false;
            }

            var info = suExtensionApi._info;
            if (!info) {
                return false;
            }

            if ($.inArray(info.provider, ["webtb", "ios", "android"]) > -1) {
                return true;
            }

            if ((info.provider == "chromebar") && (parseInt(info._providerVersion) >= 4)) {
                return true;
            }

            return false;
        },

        _getWebTb: function() {
            if (SU.WebToolbar) {
                return SU.WebToolbar;
            } else if (top.SU && top.SU.WebToolbar) {
                return top.SU.WebToolbar;
            }
            return null;
        },

        _getChromebar: function() {
            try {
                var el = document.getElementById("__su__tbcont");
                if(el) {
                    return el.contentWindow;
                }
            } catch (err) {}
            return null;
        },

        _convertModeToChromebar: function(mode) {
            // Copy the existing mode, then change it
            var modeCopy = jQuery.extend({}, mode);
            var chromebar_mode = {mode: modeCopy};
            chromebar_mode.mode.method = mode.mode;
            if (chromebar_mode.mode.method == 'videos'){chromebar_mode.mode.method = 'video';}else if (chromebar_mode.mode.method == 'photos')
            {
                chromebar_mode.mode.mode   = 'topic';
                chromebar_mode.mode.method = 'topic';
                chromebar_mode.mode.topic  = 302;
            }
            delete chromebar_mode.mode.mode;
            if (mode.contextual)
            {
                chromebar_mode.label = mode.contextual;
            }
            return chromebar_mode;
        },
        /**
         * Tell the toolbar to start stumbling.
         * if mode is null, the current mode is not changed
         * if a nextpid is given, the mode (if not null) will change
         * but the next displayed stumble is the nextpid given
         * nextpid can also be passed as a property in the mode object (precedence to the second arg)
         */
        stumble: function(mode, nextpid) {
            if (!nextpid && mode != null && typeof mode.nextpid != 'undefined'){nextpid = mode.nextpid;}

            // Check if mozbar installed
            if (typeof suExtensionApi != 'undefined' && suExtensionApi.getProviderInfo)
            {
                suExtensionApi.getProviderInfo(function(info){providerInfo = info;});
                if (providerInfo.provider == "mozbar")
                {
                    if (mode != null)
                    {
                        // The old mozbar has slightly different mode formats
                        if (providerInfo.apiVersion == "1.0")
                        {
                            mode.method = mode.mode;
                            if (mode.mode == 'stumblethru'){mode.domain = mode.partner;}
                            if (mode.mode == 'topic'){mode.topicid = mode.topic;}
                            if (mode.mode == 'tag'){mode.tag = mode.q;}
                            if (mode.mode == 'instumbler' && mode.stumblername){mode.stumbler = mode.stumblername + '';} // We need to be sure we have a string and not a number here
                            if (mode.mode == 'stumblelist') {mode.listid = mode.s_prefixed_listid.substring(1);}

                            if (mode.mode == 'photos')
                            {
                                mode.method  = 'topic';
                                mode.topicid = 302;
                            }
                            if (mode.mode == 'all'){mode.method = 'general';}
                            if (mode.mode == 'videos'){mode.method = 'video';}
                            if (mode.mode == 'channels'){mode.method = 'channel';}
                        }
                        suExtensionApi.stumble.setMode(mode);
                    }

                    if (nextpid)
                    {
                        try {
                            window.top.location.href = '/su/' + nextpid;
                            return true;
                        } catch (err) {}
                        window.location.href = '/su/' + nextpid;
                    } else {suExtensionApi.stumble.stumble();}
                    return true;
                }
                else if (providerInfo.provider == "chromebar")
                {
                    if (mode == null && suExtensionApi.stumble)
                    {
                        suExtensionApi.stumble.stumble();
                        return true;
                    }

                    // todo:  Why is this necessary?  Something seems whack
                    delete mode.stumblername;

                    // New toolbars directly support stumble functionality
                    suExtensionApi.stumble.setMode(mode, function() {
                        if (nextpid)
                        {
                            try {
                                window.top.location.href = '/su/' + nextpid;
                            } catch (err) {}
                            window.location.href = '/su/' + nextpid;
                        } else {suExtensionApi.stumble.stumble();}
                    });
                    return true;
                }
                else if (providerInfo.provider == "ios" || providerInfo.provider == "android")
                {
                    if (mode)
                    {
                        switch (mode.mode)
                        {
                            case 'instumbler':
                                mode.mode    = 'user';
                                mode.userids = [ mode.stumbler ];
                                break;

                            case 'stumblethru':
                                mode.mode    = 'domain';
                                mode.domains = [ mode.partner ];
                                break;

                            case 'tag':
                                mode.mode    = 'keyword';
                                mode.keyword = mode.q;
                                break;

                            case 'topic':
                                mode.mode      = 'interest';
                                mode.interests = [ mode.topic ];
                                break;

                            case 'friends':
                                mode.mode = 'following';
                                break;

                            case 'related_url':
                                mode.url = mode.related_url;
                                break;

                            case 'videos':
                                mode.mode      = 'video';
                                mode.interests = [ mode.topic ];
                                mode.domains   = [ mode.partner ];
                                break;
                        }
                    }
                }
            }

            if (mode != null){delete mode.stumblername;}

            // Check if webtb suExtensionApi present
            if (this._hasCorrectExtension())
            {
                if (mode){suExtensionApi.message.broadcastMessage('externalModeSelect', mode);}
                suExtensionApi.message.postMessage(suExtensionApi.overlay.opener, 'stumbleNow', true);
                return true;
            }

            // Check if webtoolbar installed without suExtensionApiWebTb instantiated
            var _webtb = this._getWebTb();

            if (_webtb)
            {
                try
                {
                    if (mode)
                    {
                        _webtb.setStumblingMode(mode);
                        if (mode.contextual){_webtb.setModeLabel(mode.contextual);}
                    }
                    _webtb.performStumble(null, nextpid);
                    return true;
                }
                catch (err) {
                }
            }

            // We fallback to a basic link because we don't have any toolbar installed
            return this._stumblelink(mode, nextpid);
        },

        _stumblelink: function(mode, nextpid) {
            var stumblelink = '/to/stumble/go';
            if (mode)
            {
                switch (mode.mode)
                {
                case 'topic':
                    if (mode.topic){stumblelink = '/to/stumble/topic:' + mode.topic;}
                    break;
                case 'videos':
                case 'news':
                case 'photos':
                case 'friends':
                    stumblelink = '/to/stumble/metatopic:' + mode.mode;
                    break;
                case 'instumbler':
                    if (mode.stumbler){stumblelink = '/to/stumble/stumbler:' + mode.stumbler;}
                    break;
                case 'stumblethru':
                    if (mode.partner){stumblelink = '/to/stumble/stumblethru:' + mode.partner;}
                    break;
                case 'tag':
                    if (mode.q){stumblelink = '/to/stumble/tag:' + mode.q;}
                    break;
                case 'stumblelist':
                    // We use s_prefixed_listid because jquery data attributes are cast as floats for big numbers
                    if (mode.s_prefixed_listid) {
                        stumblelink = '/to/stumble/stumblelist:'+mode.s_prefixed_listid.substring(1);
                    }
                }
            }

            if (nextpid) {
                stumblelink += ';pid=' + nextpid;
            }
            stumblelink += ';src=website';
            if (nextpid && mode.m){stumblelink += '?m=' + encodeURIComponent(mode.m);}
            try {
                window.top.location.href = stumblelink;
                return true;
            } catch (err) {}
            window.location.href = stumblelink;

            return true;
        },

        _getFullPath: function(url) {
            var ourOrigin,
                regex,
                match;
            // Turn relative paths into full paths
            if (url.match(/^https?:/))
                return url;

            // If it starts with '/', then append it to our domain
            if (url.indexOf("/") === 0) {
                regex = /^https?:\/\/[^\/]*/;
                ourOrigin = document.location.href.match(regex)[0];
                url = ourOrigin + url;
                return url;
            }

            // It doesn't start with '/' or 'https?:', use the current path to build the url
            regex = /(.*\/)/; // Greedily grab everything up to the last /
            match = document.body.baseURI.match(regex);
            url = match[0] + url;
            return url;
        },

        rate: function(pid, rating) {
            // Check if suExtensionApi present
            if (this._hasCorrectExtension())
            {
                suExtensionApi.message.postMessage(suExtensionApi.overlay.opener, 'rate', {pid: pid, rating: rating});
            }
            else
            {
                var _webtb = this._getWebTb();
                if (_webtb)
                {
                    if (_webtb.currentStumble.publicid == pid
                            && $.inArray(rating, [1, 0, -1]) != -1){_webtb.performRating(rating);}
                }
            }
        },

        subrate: function(pid, subrating) {
            if (this._hasCorrectExtension())
            {
                suExtensionApi.message.postMessage(suExtensionApi.overlay.opener,
                        'thumbDownMenu_subrate',
                        {pid: pid, subrating: subrating});
            }
            else
            {
                var _webtb = this._getWebTb();
                if (_webtb)
                {
                    _webtb.onMessage('thumbDownMenu_subrate', {
                        pid: pid,
                        subrating: subrating
                    }, null);
                }
            }
        },

        blocksite: function(pid, blocksite) {
            if (this._hasCorrectExtension())
            {
                suExtensionApi.message.postMessage(suExtensionApi.overlay.opener,
                        'thumbDownMenu_blocksite',
                        {pid: pid, blocksite: blocksite});
            }
            else
            {
                var _webtb = this._getWebTb();
                if (_webtb)
                {
                    _webtb.onMessage('thumbDownMenu_blocksite', {
                        pid: pid,
                        blocksite: blocksite
                    }, null);
                }
            }
        },

        showShare: function(sharePid, sharedUrl, webbarUrl) {
            sharedUrl = this._getFullPath(sharedUrl);
            webbarUrl = this._getFullPath(webbarUrl);
            if (suExtensionApi && suExtensionApi.overlay && suExtensionApi.overlay.showUrlWithOverlay) {
                var messageUrl = '/su/overlay/sharemsg?sharepid=' + encodeURIComponent(sharePid) + '&markseen=1';
                messageUrl = this._getFullPath(messageUrl);
                var options = {
                    url: messageUrl,
                    position: { top: 0, height: 40 },
                    css: {
                        "width": "100%",
                        "box-shadow" : "2px 6px 6px rgba(0,0,0,0.2), -2px 6px 6px rgba(0,0,0,0.2)",
                        "background-color" : "#F1F1EE"
                    }
                };
                suExtensionApi.overlay.showUrlWithOverlay(sharedUrl, 'share-panel', options);
            } else {
                SU.ToolbarAction.navigateWithOAuth(webbarUrl);
            }
        },

        openSharePanel: function(pid) {
            if (this._hasCorrectExtension())
            {
                var info = suExtensionApi._info;
                if (suExtensionApi.overlay.opener) {
                    var target = suExtensionApi.overlay.opener;
                } else if (info.provider == 'chromebar') {
                    var target = document.getElementById('__su__toolbar').contentWindow.suExtensionApi;
                }

                suExtensionApi.message.postMessage(target, 'showSharePanel', {pid: pid});
            }
            else
            {
                var _webtb = this._getWebTb();
                if (_webtb)
                {
                    _webtb.showSharePanel(pid);
                }
            }
        },

        showShareMessageReply: function(pid) {
            if (this._hasCorrectExtension())
            {
                if (suExtensionApi.message.postToCurrentBar) {
                    suExtensionApi.message.postToCurrentBar('showShareMessageReply', pid);
                } else {
                    suExtensionApi.message.postMessage(suExtensionApi.overlay.opener, 'showShareMessageReply', pid);
                }
            }
            else
            {
                var _webtb = this._getWebTb();
                if (_webtb)
                {
                    _webtb.onMessage('showShareMessageReply', pid, null);
                }
            }
        },

        displayNotification: function(data) {
            if (this._hasCorrectExtension())
            {
                suExtensionApi.message.postMessage(suExtensionApi.overlay.opener, 'displayNotification', data);
                return true;
            }
            else
            {
                var _webtb = this._getWebTb();
                if (_webtb)
                {
                    try
                    {
                        _webtb.displayNotification(data);
                    }
                    catch (err)
                    {
                        return false;
                    }
                    return true;
                }
            }
            return false;
        },

        closeOverlay: function(data) {
            if (this._hasCorrectExtension())
            {
                if (suExtensionApi.message.postToCurrentBar)
                    suExtensionApi.message.postToCurrentBar('overlayClose', data);
                else
                    suExtensionApi.message.postMessage(suExtensionApi.overlay.opener, 'overlayClose', data);
            }
            else
            {
                var _webtb = this._getWebTb();
                if (_webtb)
                {
                    _webtb.overlayManager.closeOverlay(data);
                }
            }
        },

        destroyOverlay: function(id) {
            var _webtb;

            if (this._hasCorrectExtension()) {
                if (suExtensionApi.message.postToCurrentBar)
                    suExtensionApi.message.postToCurrentBar('overlayDestroy', id);
                else
                    suExtensionApi.message.postMessage(suExtensionApi.overlay.opener, 'overlayDestroy', id);
            }
            else {
                _webtb = this._getWebTb();
                if (_webtb)
                    _webtb.overlayManager.destroyOverlay(id);
            }
        },

        handleImplication: function(data) {
            if (this._hasCorrectExtension()) {
                    suExtensionApi.message.postMessage(suExtensionApi.overlay.opener, 'handleImplication', data);
            } else {
                var _webtb = this._getWebTb();
                if (_webtb) {
                    _webtb.handleImplication(data);
                }
            }
        },

        implicationSubmit: function(response) {
            if (this._hasCorrectExtension()) {
                suExtensionApi.message.postMessage(suExtensionApi.overlay.opener, 'implicationSubmit', response);
            } else {
                var _webtb = this._getWebTb();
                if (_webtb) {
                    _webtb.handleImplication(data);
                }
            }
        },

        resizePanel: function(data) {
            if (this._hasCorrectExtension())
            {
                suExtensionApi.message.postMessage(suExtensionApi.overlay.opener, 'resizePanel', data);
            }
            else
            {
                var _webtb = this._getWebTb();
                if (_webtb)
                {
                    _webtb.overlayManager.repositionOverlay(data.id, data.size);
                }
            }
        },

        navigateWithOAuth: function(url) {
            // If there's no extension api then just navigate the top frame
            if (!suExtensionApi || !suExtensionApi.litebar) {
                window.top.location = url;
                return;
            }

            // Convert it to a full path
            url = this._getFullPath(url);

            // Make sure the url we are adding the tokens to is for our own domain
            var regex = /^https?:\/\/([^\/]*?)(\/|$)/;
            var match = url.match(regex);
            if (!match || (match[1] != document.domain)) {
                window.top.location = url;
                return;
            }

            suExtensionApi.litebar.getOAuthInfo(function(info) {
                if (info) {
                    // We are going to append credentials, make sure we're using https
                    if(url.match(/^http\:/))
                        url = url.replace("http:", "https:");

                    // Now append the args (respecting any existing url args)
                    var argIndex = url.indexOf('?');
                    if (argIndex == -1)
                        url += '?';
                    else
                        url += '&';
                    url += 'x_su_consumer_key=' + info.consumer_key + '&x_su_access_token_key=' + info.token;

                    suExtensionApi.litebar.setContentLocation(url);

                } else {
                    window.top.location = url;
                }
            });
        },

        /**
         * If we are using an extension with OAuth credentials, this function will ensure we
         * open an authenticated session before navigating a site url.
         */
        sessionNavigate: function(url) {
            // If there's no extension api then just navigate the top frame
            if (!suExtensionApi || !suExtensionApi.litebar) {
                window.top.location = url;
                return;
            }

            suExtensionApi.litebar.getOAuthInfo(function(info) {
                if (info) {
                    // Build the session url with the tokens and the final landing page
                    var sessionUrl = "https://www.stumbleupon.com/su/api/startSession";
                    sessionUrl += '?x_su_consumer_key=' + info.consumer_key + '&x_su_access_token_key=' + info.token;
                    sessionUrl += '&url=' + encodeURIComponent(url);
                    suExtensionApi.litebar.setContentLocation(sessionUrl);

                } else {
                    window.top.location = url;
                }
            });
        },

        /**
         * logs the toolbar in
         * expects data to contain an array of data with the keys userid, hashedPassword and username
         *
         * currently this function only sure to work for mozbar
         *
         */
        login: function(data) {
            // Wait for the extension API to be available and ready
            if((typeof(suExtensionApi) == "undefined") || !suExtensionApi.isReady())
            {
                // Wait for the script ready event
                if (window.addEventListener){window.addEventListener("suScriptReadyExtensionApi", SU.ToolbarAction.doLogin(data), false);}else if (window.attachEvent){window.attachEvent("suScriptReadyExtensionApi", SU.ToolbarAction.doLogin(data));}
            }
            else
            {
                SU.ToolbarAction.doLogin(data);
            }

        },

        /*
         * performs a Sync(url).update, but adds OAuth params if they are available from the extension api
         *
         */
        syncUpdateWithOAuth: function(url, params, fnComplete) {
            try {
                suExtensionApi.litebar.getOAuthInfo(function(info){
                    params.x_su_consumer_key     = info.consumer_key;
                    params.x_su_access_token_key = info.token;
                    Sync(url).update(params).complete(fnComplete);
                });
            } catch (err) {
                Sync(url).update(params).complete(fnComplete);
            }
        },

        /**
         * This function actually does the login...currently works only with mozbar
         *
         */
        doLogin: function(data) {
            var do_login = 0, provider, version;
            suExtensionApi.getProviderInfo(function(info){provider = info.provider;version=info.providerVersion;});
            if (provider == 'mozbar' && parseFloat(version) >= 3.73){do_login = 1;}
            if (do_login && typeof(suExtensionApi) != "undefined") {
                suExtensionApi.message.broadcastMessage("msgLogin", data);
                location.reload();
            }
        },

        /**
         * Sends the new list of topics for the currently logged in user to the toolbar
         * @param topics: an object or an array.  If an object, then in the form:
         *          { topicid: topicname, topicid: topicname, ...}
         *          { 504: 'Photography', 21: 'Music', ...}
         *
         *      If an array then just an array of topic ids:
         *          [ "38", "49", "224", ... ]
         */
        updateTopics: function(topics) {
            try {
                if (suExtensionApi && suExtensionApi.oldbar && suExtensionApi.oldbar.processCommands)
                {
                    var command = "UPDATETOPICS ";
                    var isArray = (typeof(topics.length) != "undefined");
                    for (var key in topics) {
                        var topicId = isArray ? topics[key] : key;
                        command += topicId + " ";
                    }
                    suExtensionApi.oldbar.processCommands(command);
                }
            } catch (err) {}
        },

        /**
         * Invokes a callback when the extension api is ready
         *
         * @param callback: function(found)
         *                  Invokes the callback with found=true if the extension API was found
         *                  Invokes the callback with found=false if the wait timed out
         * @param timeout:  ms to wait for the extension api before calling callback(false) if it is not found
         */
        waitForExtensionApi: function(callback, timeout) {
            var finished = false;
            if ((typeof(suExtensionApi) != 'undefined') && suExtensionApi.isReady()) {
                callback(true);
                return;
            }

            if (timeout) {
                window.setTimeout(function() {
                    if (!finished) {
                        finished = true;
                        callback(false);
                    }
                }, timeout);
            }

            window.addEventListener('suScriptReadyExtensionApi', function() {
                if (!finished) {
                    finished = true;
                    callback(true);
                }
            }, false);
        }
    };

    SU.addInit("toolbarLogin", function(data) {
        SU.ToolbarAction.login(data);
    });
}).call(this);// Globals
var define,
    require,
    _loadedMods;

(function() {
    var modules = _loadedMods = {
        jQuery: jQuery,
        underscore: _,
        Backbone: Backbone
    };

    define = function(fn, name) {
        if (!name) {
            throw "Module name is required as second param";
        }

        modules[name] = fn.call(null, require, {}, {});
    };

    require = function(deps, fn) {
        var depModules;

        if (fn) {
            deps || (deps = []);
            depModules = loadDeps(deps);
            depModules = fn.apply(null, depModules);
        } else {
            deps = [deps];
            depModules = loadDeps(deps)[0];
        }

        return depModules;
    };

    function loadDeps(deps) {
        var depModules = [],
            dep,
            i;

        for (i = 0; i < deps.length; i++) {
            dep = modules[deps[i]];
            if (dep) {
                depModules.push(dep);
            }
        }

        return depModules;
    }
}).call(this);(function($) {
    $.fn.redraw = function() {
        var offset = this.get(0).offsetHeight;

        return this;
    };
}(jQuery));define(function (require) {
    var _ = require("underscore"),
        Backbone = require("Backbone"),
        parentMediator,
        mediator;

    mediator = _.extend({

    }, Backbone.Events);

    try {
        if (typeof window.parent.SUdebug === "undefined" || (typeof window.parent.SUdebug !== "undefined" && !window.parent.SUdebug.spa)) {
            parentMediator = window.parent.require("module/mediator");
            if (parentMediator) {
                mediator = parentMediator;
            }
        }
    } catch (e) { }

    return mediator;
}, "module/mediator");/**
 * master_init.js
 * global js init called from master
 */

(function(){
    "use strict";

    SU.addInit("gMasterInit", function(config){
        var CacheManager = require("module/cache_manager"),
            HeaderView = require('module/views/header_view'),
            HelpTip = require('module/help_tip'),
            UserHoverCard = require("module/user_hover_card"),
            ActionDropdown = require("module/action_dropdown"),
            tutorialStateMachine = require("module/routers/tutorial_machine"),
            adxMachine = require("module/routers/adx_machine"),
            DnaHover = require("module/hover_tip"),
            Rocket = require("module/rocket"),
            rocketOffset;

        try {
            rocketOffset = $(".content-primary").offset().top;
        } catch (e) {
            rocketOffset = 400;
        }

        $.fn.qtip.zindex = 5;

        new CacheManager();
        new DnaHover({
            wrapper: "body"
        });

        new HeaderView({
            el: '#header-top',
            visitor: config.visitor
        });

        new Rocket({
            el: ".rocket",
            offset: rocketOffset,
            paddingY: 40
        });
        new ActionDropdown({
            target: $(".admin-controls"),
            actionsTarget: $(".admin-actions"),
            show: {
                event: "mouseenter"
            },
            hide: {
                event: "mouseleave",
                fixed: true,
                delay: 150
            }
        });

        new UserHoverCard({
            target: ".hover-user",
            viewer: config.viewer
        });
        new HelpTip({
            target: ".tutorial-tip"
        });

        if (config.viewer && config.viewer.messages) {
            tutorialStateMachine.initialize({
                tutorialUrls: config.viewer.messages
            });
        }

        if (config.viewer && config.viewer.adxMessages) {
            adxMachine.initialize({
                adxUrls: config.viewer.adxMessages
            });
        }

    });
}).call(this);/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));var _vwo_code=(function(){
    var account_id=30464,
    settings_tolerance=2000,
    library_tolerance=1500,
    use_existing_jquery=true,
    // DO NOT EDIT BELOW THIS LINE
    f=false,d=document;return{use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){settings_timer=setTimeout('_vwo_code.finish()',settings_tolerance);this.load('//dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&r='+Math.random());var a=d.createElement('style'),b='body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);return settings_timer;}};}());_vwo_settings_timer=_vwo_code.init();