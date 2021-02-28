!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=209)}({209:function(t,e,n){"use strict";n(210),n(211)},210:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u={xs:{min:0,max:767},sm:{min:768,max:991},md:{min:992,max:1199},lg:{min:1200,max:1/0}},l={each:function(t,e){for(var n in t)if(("object"!==(void 0===t?"undefined":r(t))||t.hasOwnProperty(n))&&!1===e(n,t[n]))break},isFunction:function(t){return"function"==typeof t||!1},extend:function(t,e){for(var n in e)t[n]=e[n];return t}},c=function(){function t(){s(this,t),this.length=0,this.list=[]}return i(t,[{key:"add",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.list.push({fn:t,data:e,one:n}),this.length++}},{key:"remove",value:function(t){for(var e=0;e<this.list.length;e++)this.list[e].fn===t&&(this.list.splice(e,1),this.length--,e--)}},{key:"empty",value:function(){this.list=[],this.length=0}},{key:"call",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e||(e=this.length-1);var i=this.list[e];l.isFunction(n)?n.call(this,t,i,e):l.isFunction(i.fn)&&i.fn.call(t||window,i.data),i.one&&(delete this.list[e],this.length--)}},{key:"fire",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;for(var n in this.list)this.list.hasOwnProperty(n)&&this.call(t,n,e)}}]),t}(),d={current:null,callbacks:new c,trigger:function(t){var e=this.current;this.current=t,this.callbacks.fire(t,function(n,i){l.isFunction(i.fn)&&i.fn.call({current:t,previous:e},i.data)})},one:function(t,e){return this.on(t,e,!0)},on:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];void 0===e&&l.isFunction(t)&&(e=t,t=void 0),l.isFunction(e)&&this.callbacks.add(e,t,n)},off:function(t){void 0===t&&this.callbacks.empty()}},f=function(){function t(e,n){s(this,t),this.name=e,this.media=n,this.initialize()}return i(t,[{key:"initialize",value:function(){this.callbacks={enter:new c,leave:new c},this.mql=window.matchMedia&&window.matchMedia(this.media)||{matches:!1,media:this.media,addListener:function(){},removeListener:function(){}};var t=this;this.mqlListener=function(e){var n=e.matches?"enter":"leave";t.callbacks[n].fire(t)},this.mql.addListener(this.mqlListener)}},{key:"on",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("object"===(void 0===t?"undefined":r(t))){for(var o in t)t.hasOwnProperty(o)&&this.on(o,e,t[o],i);return this}return void 0===n&&l.isFunction(e)&&(n=e,e=void 0),l.isFunction(n)?(void 0!==this.callbacks[t]&&(this.callbacks[t].add(n,e,i),"enter"===t&&this.isMatched()&&this.callbacks[t].call(this)),this):this}},{key:"one",value:function(t,e,n){return this.on(t,e,n,!0)}},{key:"off",value:function(t,e){var n=void 0;if("object"===(void 0===t?"undefined":r(t))){for(n in t)t.hasOwnProperty(n)&&this.off(n,t[n]);return this}return void 0===t?(this.callbacks.enter.empty(),this.callbacks.leave.empty()):t in this.callbacks&&(e?this.callbacks[t].remove(e):this.callbacks[t].empty()),this}},{key:"isMatched",value:function(){return this.mql.matches}},{key:"destroy",value:function(){this.off()}}]),t}(),h={min:function(t){return"(min-width: "+t+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px")+")"},max:function(t){return"(max-width: "+t+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px")+")"},between:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";return"(min-width: "+t+n+") and (max-width: "+e+n+")"},get:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";return 0===t?this.max(e,n):e===1/0?this.min(t,n):this.between(t,e,n)}},p=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"px";s(this,e);var a=h.get(n,i,r),u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,a));u.min=n,u.max=i,u.unit=r;var l=u;return u.changeListener=function(){l.isMatched()&&d.trigger(l)},u.isMatched()&&(d.current=u),u.mql.addListener(u.changeListener),u}return a(e,f),i(e,[{key:"destroy",value:function(){this.off(),this.mql.removeListener(this.changeListener)}}]),e}(),v=function(t){function e(t){s(this,e);var n=[],i=[];return l.each(t.split(" "),function(t,e){var r=b.get(e);r&&(n.push(r),i.push(r.media))}),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i.join(",")))}return a(e,f),e}(),g={},y={},m=window.Breakpoints=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];m.define.apply(m,e)};m.defaults=u;var b=m=l.extend(m,{version:"1.0.6",defined:!1,define:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in this.defined&&this.destroy(),t||(t=m.defaults),this.options=l.extend(e,{unit:"px"}),t)t.hasOwnProperty(n)&&this.set(n,t[n].min,t[n].max,this.options.unit);this.defined=!0},destroy:function(){l.each(g,function(t,e){e.destroy()}),g={},d.current=null},is:function(t){var e=this.get(t);return e?e.isMatched():null},all:function(){var t=[];return l.each(g,function(e){t.push(e)}),t},set:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"px",r=this.get(t);return r&&r.destroy(),g[t]=new p(t,e,n,i),g[t]},get:function(t){return g.hasOwnProperty(t)?g[t]:null},getUnion:function(t){return y.hasOwnProperty(t)?y[t]:(y[t]=new v(t),y[t])},getMin:function(t){var e=this.get(t);return e?e.min:null},getMax:function(t){var e=this.get(t);return e?e.max:null},current:function(){return d.current},getMedia:function(t){var e=this.get(t);return e?e.media:null},on:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if("change"===(t=t.trim()))return i=n,n=e,d.on(n,i,r);if(t.includes(" ")){var o=this.getUnion(t);o&&o.on(e,n,i,r)}else{var a=this.get(t);a&&a.on(e,n,i,r)}return this},one:function(t,e,n,i){return this.on(t,e,n,i,!0)},off:function(t,e,n){if("change"===(t=t.trim()))return d.off(e);if(t.includes(" ")){var i=this.getUnion(t);i&&i.off(e,n)}else{var r=this.get(t);r&&r.off(e,n)}return this}});e.default=b},211:function(t,e,n){"use strict";!function(t,e){if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var i=this;i.data("dotdotdot")&&i.trigger("destroy.dot"),i.data("dotdotdot-style",i.attr("style")||""),i.css("word-wrap","break-word"),"nowrap"===i.css("white-space")&&i.css("white-space","normal"),i.bind_events=function(){return i.bind("update.dot",function(e,n){e.preventDefault(),e.stopPropagation(),c.maxHeight="number"==typeof c.height?c.height:function(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],i=0,r=n.length;i<r;i++){var o=parseInt(t.css(n[i]),10);isNaN(o)&&(o=0),e-=o}return e}(i),c.maxHeight+=c.tolerance,void 0!==n&&(("string"==typeof n||n instanceof HTMLElement)&&(n=t("<div />").append(n).contents()),n instanceof t&&(r=n)),(v=i.wrapInner('<div class="dotdotdot" />').children()).contents().detach().end().append(r.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var s=!1,h=!1;return f.afterElement&&((s=f.afterElement.clone(!0)).show(),f.afterElement.detach()),o(v,c)&&(h="children"==c.wrap?function(t,e,n){var i=t.children(),r=!1;t.empty();for(var a=0,s=i.length;a<s;a++){var u=i.eq(a);if(t.append(u),n&&t.append(n),o(t,e)){u.remove(),r=!0;break}n&&n.detach()}return r}(v,c,s):function e(n,i,r,s,c){var f=!1;n.contents().detach().each(function(){var h=this,p=t(h);if(void 0===h||3==h.nodeType&&0==t.trim(h.data).length)return!0;if(p.is("script, .dotdotdot-keep"))n.append(p);else{if(f)return!0;n.append(p),c&&n[n.is("table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style")?"after":"append"](c),o(r,s)&&((f=3==h.nodeType?function(e,n,i,r,s){var c=e[0];if(!c)return!1;var f=l(c),h=-1!==f.indexOf(" ")?" ":"　",p="letter"==r.wrap?"":h,v=f.split(p),g=-1,y=-1,m=0,b=v.length-1;r.fallbackToLetter&&0==m&&0==b&&(p="",v=f.split(p),b=v.length-1);for(;m<=b&&(0!=m||0!=b);){var w=Math.floor((m+b)/2);if(w==y)break;y=w,u(c,v.slice(0,y+1).join(p)+r.ellipsis),o(i,r)?(b=y,r.fallbackToLetter&&0==m&&0==b&&(p="",v=v[0].split(p),g=-1,y=-1,m=0,b=v.length-1)):(g=y,m=y)}if(-1==g||1==v.length&&0==v[0].length){var x=e.parent();e.detach();var k=s&&s.closest(x).length?s.length:0;x.contents().length>k?c=d(x.contents().eq(-1-k),n):(c=d(x,n,!0),k||x.detach()),c&&(f=a(l(c),r),u(c,f),k&&s&&t(c).parent().append(s))}else f=a(v.slice(0,g+1).join(p),r),u(c,f);return!0}(p,i,r,s,c):e(p,i,r,s,c))||(p.detach(),f=!0)),f||c&&c.detach()}});return f}(v,i,v,c,s)),v.replaceWith(v.contents()),v=null,t.isFunction(c.callback)&&c.callback.call(i[0],h,r),f.isTruncated=h,h}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(i[0],f.isTruncated),f.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(i[0],r),r}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),i.unwatch().unbind_events().contents().detach().end().append(r).attr("style",i.data("dotdotdot-style")||"").data("dotdotdot",!1)}),i},i.unbind_events=function(){return i.unbind(".dot"),i},i.watch=function(){if(i.unwatch(),"window"==c.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+f.dotId,function(){n==e.width()&&r==e.height()&&c.windowResizeFix||(n=e.width(),r=e.height(),p&&clearInterval(p),p=setTimeout(function(){i.trigger("update.dot")},100))})}else h=s(i),p=setInterval(function(){if(i.is(":visible")){var t=s(i);h.width==t.width&&h.height==t.height||(i.trigger("update.dot"),h=t)}},500);return i},i.unwatch=function(){return t(window).unbind("resize.dot"+f.dotId),p&&clearInterval(p),i};var r=i.contents(),c=t.extend(!0,{},t.fn.dotdotdot.defaults,e),f={},h={},p=null,v=null;return c.lastCharacter.remove instanceof Array||(c.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),c.lastCharacter.noEllipsis instanceof Array||(c.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),f.afterElement=function(e,n){if(!e)return!1;if("string"==typeof e)return!!(e=t(e,n)).length&&e;return!!e.jquery&&e}(c.after,i),f.isTruncated=!1,f.dotId=n++,i.data("dotdotdot",!0).bind_events().trigger("update.dot"),c.watch&&i.watch(),i},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(t){};var n=1,i=t.fn.html;t.fn.html=function(e){return void 0!=e&&!t.isFunction(e)&&this.data("dotdotdot")?this.trigger("update",[e]):i.apply(this,arguments)};var r=t.fn.text;t.fn.text=function(e){return void 0!=e&&!t.isFunction(e)&&this.data("dotdotdot")?(e=t("<div />").text(e).html(),this.trigger("update",[e])):r.apply(this,arguments)}}function o(t,e){return t.innerHeight()>e.maxHeight}function a(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function s(t){return{width:t.innerWidth(),height:t.innerHeight()}}function u(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function l(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do{t=t.previousSibling}while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function d(e,n,i){var r,o=e&&e[0];if(o){if(!i){if(3===o.nodeType)return o;if(t.trim(e.text()))return d(e.contents().last(),n)}for(r=c(o);!r;){if((e=e.parent()).is(n)||!e.length)return!1;r=c(e[0])}if(r)return d(t(r),n)}return!1}}(jQuery)}});