!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=197)}({17:function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},197:function(e,t,n){"use strict";n(198),n(199),$(document).ready(function(){-1!=navigator.userAgent.indexOf("Edge")&&$(".licenses-wrap").length>0||(objectFitPolyfill(),$(window).trigger("resize"))})},198:function(e,t,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){if("undefined"!=typeof window){var e=window.navigator.userAgent.match(/Edge\/(\d{2})\./),t=!!e&&16<=parseInt(e[1],10);if("objectFit"in document.documentElement.style==0||t){var n=function(e,t,n){var i,r,s,o,c;if((n=n.split(" ")).length<2&&(n[1]=n[0]),"x"===e)i=n[0],r=n[1],s="left",o="right",c=t.clientWidth;else{if("y"!==e)return;i=n[1],r=n[0],s="top",o="bottom",c=t.clientHeight}if(i!==s&&r!==s){if(i!==o&&r!==o)return"center"===i||"50%"===i?(t.style[s]="50%",void(t.style["margin-"+s]=c/-2+"px")):void(0<=i.indexOf("%")?(i=parseInt(i))<50?(t.style[s]=i+"%",t.style["margin-"+s]=c*(i/-100)+"px"):(i=100-i,t.style[o]=i+"%",t.style["margin-"+o]=c*(i/-100)+"px"):t.style[s]=i);t.style[o]="0"}else t.style[s]="0"},r=function(e){var t=e.dataset?e.dataset.objectFit:e.getAttribute("data-object-fit"),i=e.dataset?e.dataset.objectPosition:e.getAttribute("data-object-position");t=t||"cover",i=i||"50% 50%";var r=e.parentNode;return function(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("position"),i=t.getPropertyValue("overflow"),r=t.getPropertyValue("display");n&&"static"!==n||(e.style.position="relative"),"hidden"!==i&&(e.style.overflow="hidden"),r&&"inline"!==r||(e.style.display="block"),0===e.clientHeight&&(e.style.height="100%"),-1===e.className.indexOf("object-fit-polyfill")&&(e.className=e.className+" object-fit-polyfill")}(r),function(e){var t=window.getComputedStyle(e,null),n={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var i in n)t.getPropertyValue(i)!==n[i]&&(e.style[i]=n[i])}(e),e.style.position="absolute",e.style.width="auto",e.style.height="auto","scale-down"===t&&(t=e.clientWidth<r.clientWidth&&e.clientHeight<r.clientHeight?"none":"contain"),"none"===t?(n("x",e,i),void n("y",e,i)):"fill"===t?(e.style.width="100%",e.style.height="100%",n("x",e,i),void n("y",e,i)):(e.style.height="100%",void("cover"===t&&e.clientWidth>r.clientWidth||"contain"===t&&e.clientWidth<r.clientWidth?(e.style.top="0",e.style.marginTop="0",n("x",e,i)):(e.style.width="100%",e.style.height="auto",e.style.left="0",e.style.marginLeft="0",n("y",e,i))))},s=function(e){if(void 0===e||e instanceof Event)e=document.querySelectorAll("[data-object-fit]");else if(e&&e.nodeName)e=[e];else{if("object"!=(void 0===e?"undefined":i(e))||!e.length||!e[0].nodeName)return!1;e=e}for(var n=0;n<e.length;n++)if(e[n].nodeName){var s=e[n].nodeName.toLowerCase();if("img"===s){if(t)continue;e[n].complete?r(e[n]):e[n].addEventListener("load",function(){r(this)})}else"video"===s?0<e[n].readyState?r(e[n]):e[n].addEventListener("loadedmetadata",function(){r(this)}):r(e[n])}return!0};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",s):s(),window.addEventListener("resize",s),window.objectFitPolyfill=s}else window.objectFitPolyfill=function(){return!1}}}()},199:function(e,t,n){"use strict";(function(e){var i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/*! picturefill - v3.0.2 - 2016-02-12
* https://scottjehl.github.io/picturefill/
* Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
*//*! Gecko-Picture - v1.0
* https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
* Firefox's early picture implementation (prior to FF41) is static and does
* not react to viewport changes. This tiny module fixes this.
*/!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),i=function(e){var t,i,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=n.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,i=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=i}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)i(t[e])},s=function(){clearTimeout(t),t=setTimeout(r,99)},o=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),o&&o.addListener&&o.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s}())}(window),/*! Picturefill - v3.0.2
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
* License: MIT
*/function(s,o,c){var a,l,u;o.createElement("picture");var f={},d=!1,p=function(){},m=o.createElement("img"),h=m.getAttribute,g=m.setAttribute,A=m.removeAttribute,v=o.documentElement,y={},b={algorithm:""},w=navigator.userAgent,S=/rident/.test(w)||/ecko/.test(w)&&w.match(/rv\:(\d+)/)&&RegExp.$1>35,x="currentSrc",E=/\s+\+?\d+(e\d+)?w/,z=/(\([^)]+\))?\s*(.+)/,P=s.picturefillCFG,T="font-size:100%!important;",C=!0,L={},M={},j=s.devicePixelRatio,R={px:1,in:96},O=o.createElement("a"),W=!1,D=/^[ \t\n\r\u000c]+/,$=/^[, \t\n\r\u000c]+/,k=/^[^ \t\n\r\u000c]+/,I=/[,]+$/,B=/^\d+$/,U=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,N=function(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i||!1):e.attachEvent&&e.attachEvent("on"+t,n)},H=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}};function F(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var Q=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=H(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(n,i){var r;if(!(n in L))if(L[n]=!1,i&&(r=n.match(e)))L[n]=r[1]*R[r[2]];else try{L[n]=new Function("e",t(n))(R)}catch(e){}return L[n]}}(),G=function(e,t){return e.w?(e.cWidth=f.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},_=function(e){if(d){var t,n,i,r=e||{};if(r.elements&&1===r.elements.nodeType&&("IMG"===r.elements.nodeName.toUpperCase()?r.elements=[r.elements]:(r.context=r.elements,r.elements=null)),i=(t=r.elements||f.qsa(r.context||o,r.reevaluate||r.reselect?f.sel:f.selShort)).length){for(f.setupRun(r),W=!0,n=0;n<i;n++)f.fillImg(t[n],r);f.teardownRun(r)}}};function V(e,t,n,i){var r,s,o;return"saveData"===b.algorithm?e>2.7?o=n+1:(s=(t-n)*(r=Math.pow(e-.6,1.5)),i&&(s+=.1*r),o=e+s):o=n>1?Math.sqrt(e*t):e,o>n}function q(e,t){return e.res-t.res}function K(e,t){var n,i,r;if(e&&t)for(r=f.parseSet(t),e=f.makeUrl(e),n=0;n<r.length;n++)if(e===f.makeUrl(r[n].url)){i=r[n];break}return i}s.console&&console.warn,x in m||(x="src"),y["image/jpeg"]=!0,y["image/gif"]=!0,y["image/png"]=!0,y["image/svg+xml"]=o.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),f.ns=("pf"+(new Date).getTime()).substr(0,9),f.supSrcset="srcset"in m,f.supSizes="sizes"in m,f.supPicture=!!s.HTMLPictureElement,f.supSrcset&&f.supPicture&&!f.supSizes&&function(e){m.srcset="data:,a",e.src="data:,a",f.supSrcset=m.complete===e.complete,f.supPicture=f.supSrcset&&f.supPicture}(o.createElement("img")),f.supSrcset&&!f.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=o.createElement("img"),n=function(){2===t.width&&(f.supSizes=!0),l=f.supSrcset&&!f.supSizes,d=!0,setTimeout(_)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():d=!0,f.selShort="picture>img,img[srcset]",f.sel=f.selShort,f.cfg=b,f.DPR=j||1,f.u=R,f.types=y,f.setSize=p,f.makeUrl=H(function(e){return O.href=e,O.href}),f.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},f.matchesMedia=function(){return s.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?f.matchesMedia=function(e){return!e||matchMedia(e).matches}:f.matchesMedia=f.mMQ,f.matchesMedia.apply(this,arguments)},f.mMQ=function(e){return!e||Q(e)},f.calcLength=function(e){var t=Q(e,!0)||!1;return t<0&&(t=!1),t},f.supportsType=function(e){return!e||y[e]},f.parseSize=H(function(e){var t=(e||"").match(z);return{media:t&&t[1],length:t&&t[2]}}),f.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,i=t.exec(e.substring(l));if(i)return n=i[0],l+=n.length,n}var i,r,s,o,c,a=e.length,l=0,u=[];function f(){var e,n,s,o,c,a,l,f,d,p=!1,m={};for(o=0;o<r.length;o++)a=(c=r[o])[c.length-1],l=c.substring(0,c.length-1),f=parseInt(l,10),d=parseFloat(l),B.test(l)&&"w"===a?((e||n)&&(p=!0),0===f?p=!0:e=f):U.test(l)&&"x"===a?((e||n||s)&&(p=!0),d<0?p=!0:n=d):B.test(l)&&"h"===a?((s||n)&&(p=!0),0===f?p=!0:s=f):p=!0;p||(m.url=i,e&&(m.w=e),n&&(m.d=n),s&&(m.h=s),s||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,u.push(m))}function d(){for(n(D),s="",o="in descriptor";;){if(c=e.charAt(l),"in descriptor"===o)if(F(c))s&&(r.push(s),s="",o="after descriptor");else{if(","===c)return l+=1,s&&r.push(s),void f();if("("===c)s+=c,o="in parens";else{if(""===c)return s&&r.push(s),void f();s+=c}}else if("in parens"===o)if(")"===c)s+=c,o="in descriptor";else{if(""===c)return r.push(s),void f();s+=c}else if("after descriptor"===o)if(F(c));else{if(""===c)return void f();o="in descriptor",l-=1}l+=1}}for(;;){if(n($),l>=a)return u;i=n(k),r=[],","===i.slice(-1)?(i=i.replace(I,""),f()):d()}}(e.srcset,e)),e.cands},f.getEmValue=function(){var e;if(!a&&(e=o.body)){var t=o.createElement("div"),n=v.style.cssText,i=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",v.style.cssText=T,e.style.cssText=T,e.appendChild(t),a=t.offsetWidth,e.removeChild(t),a=parseFloat(a,10),v.style.cssText=n,e.style.cssText=i}return a||16},f.calcListLength=function(e){if(!(e in M)||b.uT){var t=f.calcLength(function(e){var t,n,i,r,s,o,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,a=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;function l(e){return!!(c.test(e)&&parseFloat(e)>=0)||!!a.test(e)||"0"===e||"-0"===e||"+0"===e}for(i=(n=function(e){var t,n="",i=[],r=[],s=0,o=0,c=!1;function a(){n&&(i.push(n),n="")}function l(){i[0]&&(r.push(i),i=[])}for(;;){if(""===(t=e.charAt(o)))return a(),l(),r;if(c){if("*"===t&&"/"===e[o+1]){c=!1,o+=2,a();continue}o+=1}else{if(F(t)){if(e.charAt(o-1)&&F(e.charAt(o-1))||!n){o+=1;continue}if(0===s){a(),o+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){a(),l(),o+=1;continue}if("/"===t&&"*"===e.charAt(o+1)){c=!0,o+=2;continue}}n+=t,o+=1}}}(e)).length,t=0;t<i;t++)if(l(s=(r=n[t])[r.length-1])){if(o=s,r.pop(),0===r.length)return o;if(r=r.join(" "),f.matchesMedia(r))return o}return"100vw"}(e));M[e]=t||R.width}return M[e]},f.setRes=function(e){var t;if(e)for(var n=0,i=(t=f.parseSet(e)).length;n<i;n++)G(t[n],e.sizes);return t},f.setRes.res=G,f.applySetCandidate=function(e,t){if(e.length){var n,i,r,s,o,c,a,l,u,d=t[f.ns],p=f.DPR;if(c=d.curSrc||t[x],(a=d.curCan||function(e,t,n){var i;return!n&&t&&(n=(n=e[f.ns].sets)&&n[n.length-1]),(i=K(t,n))&&(t=f.makeUrl(t),e[f.ns].curSrc=t,e[f.ns].curCan=i,i.res||G(i,i.set.sizes)),i}(t,c,e[0].set))&&a.set===e[0].set&&((u=S&&!t.complete&&a.res-.1>p)||(a.cached=!0,a.res>=p&&(o=a))),!o)for(e.sort(q),o=e[(s=e.length)-1],i=0;i<s;i++)if((n=e[i]).res>=p){o=e[r=i-1]&&(u||c!==f.makeUrl(n.url))&&V(e[r].res,n.res,p,e[r].cached)?e[r]:n;break}o&&(l=f.makeUrl(o.url),d.curSrc=l,d.curCan=o,l!==c&&f.setSrc(t,o),f.setSize(t))}},f.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},f.getSet=function(e){var t,n,i,r=!1,s=e[f.ns].sets;for(t=0;t<s.length&&!r;t++)if((n=s[t]).srcset&&f.matchesMedia(n.media)&&(i=f.supportsType(n.type))){"pending"===i&&(n=i),r=n;break}return r},f.parseSets=function(e,t,n){var i,r,s,o,c=t&&"PICTURE"===t.nodeName.toUpperCase(),a=e[f.ns];(void 0===a.src||n.src)&&(a.src=h.call(e,"src"),a.src?g.call(e,"data-pfsrc",a.src):A.call(e,"data-pfsrc")),(void 0===a.srcset||n.srcset||!f.supSrcset||e.srcset)&&(i=h.call(e,"srcset"),a.srcset=i,o=!0),a.sets=[],c&&(a.pic=!0,function(e,t){var n,i,r,s,o=e.getElementsByTagName("source");for(n=0,i=o.length;n<i;n++)(r=o[n])[f.ns]=!0,(s=r.getAttribute("srcset"))&&t.push({srcset:s,media:r.getAttribute("media"),type:r.getAttribute("type"),sizes:r.getAttribute("sizes")})}(t,a.sets)),a.srcset?(r={srcset:a.srcset,sizes:h.call(e,"sizes")},a.sets.push(r),(s=(l||a.src)&&E.test(a.srcset||""))||!a.src||K(a.src,r)||r.has1x||(r.srcset+=", "+a.src,r.cands.push({url:a.src,d:1,set:r}))):a.src&&a.sets.push({srcset:a.src,sizes:null}),a.curCan=null,a.curSrc=void 0,a.supported=!(c||r&&!f.supSrcset||s&&!f.supSizes),o&&f.supSrcset&&!a.supported&&(i?(g.call(e,"data-pfsrcset",i),e.srcset=""):A.call(e,"data-pfsrcset")),a.supported&&!a.srcset&&(!a.src&&e.src||e.src!==f.makeUrl(a.src))&&(null===a.src?e.removeAttribute("src"):e.src=a.src),a.parsed=!0},f.fillImg=function(e,t){var n,i=t.reselect||t.reevaluate;e[f.ns]||(e[f.ns]={}),n=e[f.ns],(i||n.evaled!==u)&&(n.parsed&&!t.reevaluate||f.parseSets(e,e.parentNode,t),n.supported?n.evaled=u:function(e){var t,n=f.getSet(e),i=!1;"pending"!==n&&(i=u,n&&(t=f.setRes(n),f.applySetCandidate(t,e))),e[f.ns].evaled=i}(e))},f.setupRun=function(){W&&!C&&j===s.devicePixelRatio||(C=!1,j=s.devicePixelRatio,L={},M={},f.DPR=j||1,R.width=Math.max(s.innerWidth||0,v.clientWidth),R.height=Math.max(s.innerHeight||0,v.clientHeight),R.vw=R.width/100,R.vh=R.height/100,u=[R.height,R.width,j].join("-"),R.em=f.getEmValue(),R.rem=R.em)},f.supPicture?(_=p,f.fillImg=p):function(){var e,t=s.attachEvent?/d$|^c/:/d$|^c|^i/,n=function n(){var r=o.readyState||"";i=setTimeout(n,"loading"===r?200:999),o.body&&(f.fillImgs(),(e=e||t.test(r))&&clearTimeout(i))},i=setTimeout(n,o.body?9:99),r=v.clientHeight;N(s,"resize",function(e,t){var n,i,r=function r(){var s=new Date-i;s<t?n=setTimeout(r,t-s):(n=null,e())};return function(){i=new Date,n||(n=setTimeout(r,t))}}(function(){C=Math.max(s.innerWidth||0,v.clientWidth)!==R.width||v.clientHeight!==r,r=v.clientHeight,C&&f.fillImgs()},99)),N(o,"readystatechange",n)}(),f.picturefill=_,f.fillImgs=_,f.teardownRun=p,_._=f,s.picturefillCFG={pf:f,push:function(e){var t=e.shift();"function"==typeof f[t]?f[t].apply(f,e):(b[t]=e[0],W&&f.fillImgs({reselect:!0}))}};for(;P&&P.length;)s.picturefillCFG.push(P.shift());s.picturefill=_,"object"===r(e)&&"object"===r(e.exports)?e.exports=_:void 0===(i=function(){return _}.call(t,n,t,e))||(e.exports=i),f.supPicture||(y["image/webp"]=function(e,t){var n=new s.Image;return n.onerror=function(){y[e]=!1,_()},n.onload=function(){y[e]=1===n.width,_()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)}).call(this,n(17)(e))}});