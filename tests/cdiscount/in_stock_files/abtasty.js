/* generated_by_abtasty */
var SR=function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(15)),o(n(16)),o(n(17)),o(n(9)),o(n(18))},function(e,t,n){"use strict";function o(e){return e&&t.nodeIndex in e?e[t.nodeIndex]:null}Object.defineProperty(t,"__esModule",{value:!0}),t.nodeIndex="sr-index",t.getNodeIndex=o,t.createGenericLayoutState=function(e,t){return{index:o(e),parent:o(e.parentNode),previous:o(e.previousSibling),next:o(e.nextSibling),source:null,action:null,tag:t}}},function(e,t,n){"use strict";var o=function(e,t,n,o){return new(n||(n=Promise))((function(s,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function r(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?s(e.value):new n((function(t){t(e.value)})).then(a,r)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const s=n(6),i=n(4),a=n(0);let r,c,d=[],u=0,l=0,h=[],p=a.startTimeTS;function f(){Date.now()-p>3e5&&s.teardown()}function g(){f(),c&&clearTimeout(c),c=setTimeout(()=>{a.debug.info("ping@".concat(i.config.uploadUrl)),N("@Ping")},3e4)}function m(e){return a.isNumber(e.ts)||(e.ts=a.getTS()),e.tabId=s.tabId,e}function y(e){m(e),"Pointer"===e.type&&(p=e.ts),f(),r&&clearTimeout(r);const t=JSON.stringify(e),n=u+t.length;return n>=2*i.config.batchLimit?(w(d),d=["".concat(t,"\n")],void(u=t.length)):n>=i.config.batchLimit?(d.push("".concat(t,"\n")),w(d),d=[],void(u=0)):(d.push("".concat(t,"\n")),u+=t.length,void(r=setTimeout(()=>{w(d),d=[],u=0},400)))}t.teardownQueue=function(){r&&clearTimeout(r),c&&clearTimeout(c)},t.addMetas=m,t.addMessage=y;const b=500;function v(e,t,n){const o="string"==typeof e?e:e.join("");g(),N(o).then(e=>{e?(!function(){if(0===h.length)return;a.debug.info("retry failed uploads"),function e(t){if(t.length>0){const n=t.shift(),o=()=>{e(t)};v(n,o,o)}}(h.slice(0)),h=[]}(),t()):(h.push(o),n())})}function w(e){clearTimeout(c),l+=1,a.debug.info("send batch #".concat(l),e),v(e,()=>{a.debug.info("batch #".concat(l," success"))},()=>{a.debug.error("batch #".concat(l," fail"))})}function N(e){return o(this,void 0,void 0,(function*(){let t=!1;try{const[n,o]=yield function(e,t){return new Promise((n,o)=>{const s=new XMLHttpRequest;s.open("POST",e),s.setRequestHeader("content-type","text/plain"),s.onload=()=>{n([s.status,s.responseText])},s.onerror=o,s.send(t)})}("".concat(i.config.uploadUrl,"session/").concat(s.accountId,"/").concat(s.visitorId,"/").concat(s.tabId).concat(s.region?"?r=".concat(s.region):""),e);switch(n){case 204:t=!0;break;case 200:return(t="OK"===o)?a.debug.info("record start",["accountId: ".concat(s.accountId),"visitorId: ".concat(s.visitorId),"tabId: ".concat(s.tabId)]):a.debug.error("record stop: records/minute exceed"),t;default:t=!1}}catch(e){a.debug.error(e),t=!1}return g(),t?a.debug.info("upload success"):a.debug.error("upload fail"),t}))}t.addMultipleMessages=function e(t,n=-1){0!==t.length&&(t.length<100?t.forEach(y):(-1===n&&(n=5e3/(t.length/b)),t.splice(0,b).forEach(y),setTimeout(()=>e(t,n),n)))},t.uploadPayload=v,t.uploadSync=function(e){!function(e,t){const n=new XMLHttpRequest;n.open("POST",e,!1),n.setRequestHeader("content-type","text/plain"),n.send(t)}("".concat(i.config.uploadUrl,"session/").concat(s.accountId,"/").concat(s.visitorId,"/").concat(s.tabId).concat(s.region?"?r=".concat(s.region):""),e)},t.upload=N},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mask=function(e){return e.replace(/\S/gi,"*")},t.getBoundingClientRect=function(e){let t=null;try{t=e.getBoundingClientRect()}catch(e){}return t},t.traverseNodeTree=function(e,t,n=!0){const o=document.createTreeWalker(e);if(n||o.nextNode())do{t(o.currentNode)}while(o.nextNode())}},function(e,t,n){"use strict";var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(n(5));t.config=s.default;const i=n(6),a=n(0),r=n(2);function start(e=window.ab_sr_config){e&&Object.keys(e).forEach(t=>{s.default[t]=e[t]}),1!==i.state&&(a.debug.info("recording: v".concat(s.default.version)),i.launch())}t.start=start,t.stop=function(){a.debug.info("recording: stop"),-1!==s.default.plugins.indexOf("end")&&2!==i.state||4!==i.state?window.dispatchEvent(new Event("sessionRecordingStop")):i.teardown()};const c=[];function tag(...e){1===i.state?(a.debug.info("tag",e),e.forEach(e=>{Array.isArray(e)?(a.debug.warn("tag usage: SR.tag(...labels)"),tag(...e)):(window.dispatchEvent(new CustomEvent("sessionRecordingTag",{detail:e})),r.addMessage({type:"Metadata",data:{event:"tag",data:{label:e}}}))})):c.push(...e)}t.tag=tag;const d=a.bind(window,"sessionRecordingActivated",()=>{for(;c.length>0;)tag(c.shift());a.bindTeardown(d)});window.Ni={addTags:tag},start()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o={environment:"production",plugins:["viewport","layout","pointer","end","page","abtasty"],batchLimit:3e5,uploadUrl:"https://sr-api.abtasty.com/",version:"1.0.16",attributeMaskList:[],debug:!1};t.default=o},function(e,t,n){"use strict";var o=function(e,t,n,o){return new(n||(n=Promise))((function(s,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function r(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?s(e.value):new n((function(t){t(e.value)})).then(a,r)}c((o=o.apply(e,t||[])).next())}))},s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(n(5)),a=s(n(13)),r=n(2),c=n(0);t.state=0,t.tabId=window.sessionStorage.getItem("ab-sr-tabid")||c.uuid(),window.sessionStorage.getItem("ab-sr-tabid")||window.sessionStorage.setItem("ab-sr-tabid",t.tabId);let d=[];function u(){return o(this,void 0,void 0,(function*(){if(c.debug.info("init: core"),window["SR".concat(i.default.version)])return c.debug.error("session-recording already started"),!1;if(window["SR".concat(i.default.version)]=!0,!window.ABTasty)return!1;t.abtasty=Object.assign({},window.ABTasty);const e=function(){let e;if(!t.abtasty)return null;if(t.abtasty.nirror)e=t.abtasty.nirror;else{if(!t.abtasty.accountData||!t.abtasty.accountData.nirror)return null;e=t.abtasty.accountData.nirror}const n=[];for(let t=0;t<e.length;t+=1){const o=e[t],s=o.pattern?o.pattern:o.url;switch(o.method){case 1:case"exact":window.location.href===s&&n.push(o.id);break;case 2:case"substring":window.location.href.indexOf(s)>-1&&n.push(o.id);break;case 3:case"regex":new RegExp(s).test(window.location.href)&&n.push(o.id);break;case 4:case"simplematch":new RegExp("^".concat(s,"\\/?$")).test("".concat(window.location.origin).concat(window.location.pathname))&&n.push(o.id);break}}return 0===n.length?null:n}();if(!e||0===e.length)return c.debug.error("no test on this page"),!1;const n=!!(performance&&performance.navigation&&performance.navigation.type)&&!!performance.navigation.type,o=t.abtasty.getTestsOnPage();let s;try{s="function"==typeof t.abtasty.getGeoloc?yield new Promise(e=>{const n=t.abtasty.getGeoloc();n?e(n):setTimeout(()=>{e(t.abtasty.getGeoloc())},1e3)}):JSON.parse(sessionStorage.getItem("ABTastyGeoloc")||sessionStorage.getItem("DCInfos"))}catch(e){}t.accountId=t.abtasty.accountSettings?t.abtasty.accountSettings.id:t.abtasty.accountData.accountSettings.id,t.region=t.abtasty.accountSettings?t.abtasty.accountSettings.region:t.abtasty.accountData.accountSettings.region,t.visitorId=t.abtasty.visitor.id,s||(s={}),c.startTimeTS=c.getTS();const a={type:"Navigation",data:{event:n?"refresh":"open",url:window.location.href,referrer:document.referrer,tests:Object.keys(o).map(e=>({id:parseInt(e,10),name:o[e].name,masterType:o[e].masterType,type:o[e].type,variationId:o[e].variationID,variationName:o[e].variationName})),date:(new Date).toISOString(),visitor:{id:t.abtasty.visitor.id,ua:window.navigator?window.navigator.userAgent:null,city:s.city,country:s.country_iso_code,region:s.least_specific_subdivision?s.least_specific_subdivision.name:void 0,postalCode:s.postal_code,latitude:s.latitude,longitude:s.longitude},version:i.default.version},ts:c.startTimeTS};delete a.data.visitor.ip,d=[];const u=[a,...e.map(e=>({type:"Metadata",data:{event:"nirror",data:{id:e.toString(10)}},ts:c.startTimeTS+1}))].map(e=>"".concat(JSON.stringify(r.addMetas(e)),"\n")).join("");return c.debug.info("init: payload",[u]),r.upload(u)}))}function l(){if(3===t.state||1===t.state)try{t.state=4,r.teardownQueue(),d.forEach(e=>{e.teardown()}),c.bindTeardown()}catch(e){c.debug.error(e)}finally{t.state=2}}t.init=u,t.launch=function(){return o(this,void 0,void 0,(function*(){if(t.state=3,!(yield u()))return c.debug.error("init failed"),void l();!function(){const e=Object.keys(a.default);c.debug.info("activate plugins",e);for(let t=0;t<e.length;t+=1){const n=new(0,a.default[e[t]]);d.push(n),n.activate()}}(),t.state=1,window.dispatchEvent(new Event("sessionRecordingActivated"))}))},t.teardown=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(8);function s(e){let t=null,n=[];try{const n=e.sheet;t=n?n.cssRules:[]}catch(e){if("SecurityError"!==e.name)throw e}if(null!==t){n=[];for(let e=0;e<t.length;e+=1)n.push(t[e].cssText)}return n}t.createStyleLayoutState=function(e,t){const n=o.createElementLayoutState(e,t);return t.captureCssRules&&(n.cssRules=s(e)),n},t.getCssRules=s,t.shouldCaptureCssRules=function(e){let t=!1;return e.nodeType===Node.ELEMENT_NODE&&"STYLE"===e.tagName&&(t=0===e.textContent.length),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),s=n(1);let i;const a=["value","placeholder","alt","title"];function r(e,t){const n=e.value;return t.mask||"INPUT"===e.tagName?o.mask(n):n}function c(e,t){return t.indexOf(e)>-1}t.createElementLayoutState=function(e,t){const{tagName:n}=e,d=s.createGenericLayoutState(e,n);return"SCRIPT"===n||"METAS"===n?(d.tag="*IGNORE*",d):(d.attributes=function(e){const t=e.attributes,n={};for(let e=0;e<t.length;e+=1){const s=t[e].name,i=t[e].value;n[s]=a.indexOf(s)>-1?o.mask(i):i}return n}(e),d.layout=function(e){let t=null;const n=o.getBoundingClientRect(e),s=document.documentElement;n&&(t={x:Math.floor(n.left)+("pageXOffset"in window?window.pageXOffset:s.scrollLeft),y:Math.floor(n.top)+("pageYOffset"in window?window.pageYOffset:s.scrollTop),width:Math.round(n.width),height:Math.round(n.height)});return t}(e),d.style=d.layout?function(e){const t=window.getComputedStyle(e),n={};0===i.length&&(i=t.color);c(t.visibility,["hidden","collapse"])&&(n.visibility=t.visibility);c(t.overflowX,["auto","scroll","hidden"])&&(n.overflowX=t.overflowX);c(t.overflowY,["auto","scroll","hidden"])&&(n.overflowY=t.overflowY);"none"!==t.backgroundImage&&(n.backgroundImage=t.backgroundImage);c(t.backgroundColor,["rgba(0, 0, 0, 0)","transparent"])||(n.backgroundColor=t.backgroundColor);t.color!==i&&(n.color=t.color);return Object.keys(n).length>0?n:null}(e):null,d.layout&&d.style&&("overflowX"in d.style||"overflowX"in d.style)&&(d.layout.scrollX=Math.round(e.scrollLeft),d.layout.scrollY=Math.round(e.scrollTop)),"string"==typeof e.value&&(d.attributes||(d.attributes={}),d.attributes.value=r(e,t)),d)},t.resetElementStateProvider=function(){i=""},t.getElementValue=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTS=Date.now,t.startTimeTS=t.getTS()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.createIgnoreLayoutState=function(e){const t=o.createGenericLayoutState(e,"*IGNORE*");return t.nodeType=e.nodeType,e.nodeType===Node.ELEMENT_NODE&&(t.elementTag=e.tagName),t},t.shouldIgnoreNode=function(e,t){if(t&&t.ignore)return!0;let n=!1;switch(e.nodeType){case Node.ELEMENT_NODE:{const{tagName:t}=e;"SCRIPT"!==t&&"META"!==t||(n=!0);break}case Node.COMMENT_NODE:n=!0;break;case Node.TEXT_NODE:t&&t.captureCssRules&&(n=!0)}return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),s=n(1);t.createTextLayoutState=function(e,t){const n=s.createGenericLayoutState(e,"*TXT*"),i=!t.isCss&&t.mask;return n.content=i?o.mask(e.nodeValue):e.nodeValue,n},t.isCssText=function(e){let t=!1;if(e.nodeType===Node.TEXT_NODE){const n=e.parentNode;t=n&&n.nodeType===Node.ELEMENT_NODE&&"STYLE"===n.tagName}return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(22),s=n(8),i=n(10),a=n(7),r=n(11);t.createLayoutState=function(e,t){if(t.ignore)return i.createIgnoreLayoutState(e);let n=null;switch(e.nodeType){case Node.DOCUMENT_TYPE_NODE:n=o.createDoctypeLayoutState(e);break;case Node.TEXT_NODE:n=r.createTextLayoutState(e,t);break;case Node.ELEMENT_NODE:{const o=e;switch(o.tagName){case"STYLE":n=a.createStyleLayoutState(o,t);break;default:n=s.createElementLayoutState(o,t)}break}default:n=i.createIgnoreLayoutState(e)}return n},t.resetStateProvider=function(){s.resetElementStateProvider()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(14),s=n(19),i=n(23),a=n(26),r=n(27);t.default={Viewport:o.Viewport,Layout:s.Layout,Pointer:i.Pointer,End:a.End,Transaction:r.Transaction}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),s=n(0);t.Viewport=class{constructor(){this.eventName="Viewport",this.distanceThreshold=20,this.documentElement=document.documentElement}activate(){s.bind(window,"scroll",this.viewportHandler.bind(this)),s.bind(window,"resize",this.viewportHandler.bind(this)),s.bind(window,"pageshow",this.viewportHandler.bind(this)),s.bind(window,"pagehide",this.viewportHandler.bind(this)),s.bind(document,"visibilitychange",this.viewportHandler.bind(this));const e=this.getViewport("discover");this.lastViewportState=e,o.addMessage({type:this.eventName,data:e,ts:s.startTimeTS+1})}teardown(){}viewportHandler(e){const t=this.getViewport(e.type);this.processState(t)}getViewport(e){const t=document.documentElement;return{viewport:{x:"pageXOffset"in window?window.pageXOffset:this.documentElement.scrollLeft,y:"pageYOffset"in window?window.pageYOffset:this.documentElement.scrollTop,width:t&&"clientWidth"in t?t.clientWidth:window.innerWidth,height:t&&"clientHeight"in t?t.clientHeight:window.innerHeight},document:{width:t&&"clientWidth"in t?t.clientWidth:window.innerWidth,height:t&&"clientHeight"in t?t.clientHeight:window.innerHeight},dpi:"devicePixelRatio"in window?window.devicePixelRatio:-1,visibility:"visibilityState"in document?document.visibilityState:"default",event:e}}processState(e){let t=!0;"scroll"!==e.event||null===this.lastViewportState||this.checkDistance(this.lastViewportState,e)||(t=!1),t&&(this.lastViewportState=e,o.addMessage({type:this.eventName,data:e}))}checkDistance(e,t){const n=e.viewport.x-t.viewport.x,o=e.viewport.y-t.viewport.y;return n*n+o*o>this.distanceThreshold*this.distanceThreshold}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o={};t.bind=function(e,t,n){e.addEventListener(t,n);const s={target:e,listener:n};return o[t]?[t,o[t].push(s)-1]:(o[t]=[s],[t,0])},t.bindTeardown=function(e){if(void 0===e)Object.keys(o).forEach(e=>{o[e].forEach(({target:t,listener:n})=>{t.removeEventListener(e,n)}),delete o[e]});else{const[t,n]=e,{target:s,listener:i}=o[t][n];s.removeEventListener(t,i)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),s="font-weight: bold;";function i(e,t){const n=e.toString(10);return n.length>=t?n:new Array(t-n.length+1).join("0")+n}function a(e,t){return(n,a)=>{if(!o.config.debug)return;if(n instanceof Error){const e=n;n="".concat(e.name," - ").concat(e.message),a=[e.stack]}const r=new Date,c="%c".concat(i(r.getHours(),2),":").concat(i(r.getMinutes(),2),":").concat(i(r.getSeconds(),2)),d=["".concat(c," %csession-recording %c").concat(t,": ").concat(n),"color:#7c7c7c;".concat(s),"color:#9f1ff0;".concat(s),"color:".concat(e).concat(s)];a&&a.length>0?(console.groupCollapsed.apply(console,d),a.forEach(e=>console.log(e)),console.groupEnd()):console.log.apply(console,d)}}t.debug={error:a("#dd0000","ERROR"),warn:a("#ffc000","WARN"),info:a("#0079a4","INFO")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNumber=function(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(9);t.uuid=function(){let e=o.getTS();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),s=n(3),i=n(20),a=n(8),r=n(1),c=n(12),d=n(7),u=n(2);t.Layout=class{constructor(){this.eventName="Layout",this.cssTimeoutLength=50,this.distanceThreshold=5,this.distanceThreshold2=this.distanceThreshold*this.distanceThreshold}activate(){if(this.shadowDom=new i.ShadowDom,this.watchList=[],this.cssElementQueue=[],this.observer=window.MutationObserver?new MutationObserver(this.mutation.bind(this)):null,this.insertRule=CSSStyleSheet.prototype.insertRule,this.mutationSequence=0,c.resetStateProvider(),this.discoverDom(),this.observer&&this.observer.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),this.insertRule){const e=this;CSSStyleSheet.prototype.insertRule=function(t,n){const o=e.insertRule.call(this,t,n);return e.queueCss(this.ownerNode),o}}}teardown(){this.observer&&this.observer.disconnect(),this.cssTimeout&&clearTimeout(this.cssTimeout),this.insertRule&&(CSSStyleSheet.prototype.insertRule=this.insertRule),this.insertRule=null;const e=this.shadowDom.shadowDocument;e.node&&delete e.node[r.nodeIndex];const t=this.shadowDom.shadowDocument.querySelectorAll("*");for(let e=0;e<t.length;e+=1){const{node:n}=t[e];n&&delete n[r.nodeIndex]}}discoverDom(){const e=o.startTimeTS+1,t=[];s.traverseNodeTree(document,n=>{const o=this.discoverNode(n);o.state.action=0,o.state.source=0,t.push({type:this.eventName,data:o.state,ts:e})}),u.addMultipleMessages(t)}discoverNode(e){const t=this.shadowDom.insertShadowNode(e,r.getNodeIndex(e.parentNode),r.getNodeIndex(e.nextSibling));return t.computeInfo(),t.computeState(),this.watch(e,t.state),t}watch(e,t){if(e.nodeType!==Node.ELEMENT_NODE||this.watchList[t.index])return;const n=e,s=t;s.layout&&("scrollX"in s.layout||"scrollY"in s.layout)&&(o.bind(n,"scroll",this.layoutHandler.bind(this,n,2)),this.watchList[s.index]=!0),"INPUT"===n.tagName||"SELECT"===n.tagName?(o.bind(n,"change",this.layoutHandler.bind(this,n,3)),this.watchList[s.index]=!0):"TEXTAREA"===n.tagName&&(o.bind(n,"input",this.layoutHandler.bind(this,n,3)),this.watchList[s.index]=!0)}queueCss(e){this.cssTimeout&&clearTimeout(this.cssTimeout),-1===this.cssElementQueue.indexOf(e)&&this.cssElementQueue.push(e),this.cssTimeout=window.setTimeout(this.cssDequeue.bind(this),this.cssTimeoutLength)}cssDequeue(){for(let e=0;e<this.cssElementQueue.length;e+=1)this.layoutHandler(this.cssElementQueue[e],4)}layoutHandler(e,t){const n=r.getNodeIndex(e),o=this.shadowDom.getShadowNode(n);if(o){const n=o.state;switch(t){case 2:{const o=Math.round(e.scrollLeft),s=Math.round(e.scrollTop),i=n.layout.scrollX-o,a=n.layout.scrollY-s;i*i+a*a>this.distanceThreshold2&&(n.source=t,n.action=1,n.layout.scrollX=o,n.layout.scrollY=s,u.addMessage({type:this.eventName,data:n}));break}case 3:{const s=e;n.attributes.value=a.getElementValue(s,o.info),n.source=t,n.action=1,u.addMessage({type:this.eventName,data:n});break}case 4:{const n=o.state;n.cssRules=d.getCssRules(e),n.source=t,n.action=1,u.addMessage({type:this.eventName,data:n});break}}}}mutation(e){const t=o.getTS();try{const n=this.shadowDom.applyMutationBatch(e);this.processMutations(n,t)}catch(e){}}processMutations(e,t){const n=e.newNodes.map(this.processMutation.bind(this,0)),o=e.movedNodes.map(this.processMutation.bind(this,3)),s=e.updatedNodes.map(this.processMutation.bind(this,1)),i=e.removedNodes.map(this.processMutation.bind(this,2)),a=[].concat(n,o,s,i);for(let e=0;e<a.length;e+=1)a[e].ts=t;u.addMultipleMessages(a)}processMutation(e,t){t.computeInfo();const n=t.computeState();return n.action=e,n.source=1,n.mutationSequence=this.mutationSequence,0===e||1===e?this.watch(t.node,n):2===e&&(n.index=parseInt(t.id,10)),{type:this.eventName,data:n}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),s=n(21),i=n(1),a=n(12),r=n(3),c="sr-final",d="sr-new",u="sr-moved",l="sr-updated";t.ShadowDom=class{constructor(){this.doc=document.implementation.createHTMLDocument("ShadowDom"),this.nextIndex=0,this.removedNodes=this.doc.createElement("div"),this.shadowDomRoot=this.doc.createElement("div"),this.classifyNodes=!1,this.nodeMap={},this.doc.documentElement.appendChild(this.shadowDomRoot),this.shadowDocument=document.createElement("div")}getShadowNode(e){return o.isNumber(e)?this.nodeMap[e]:null}insertShadowNode(e,t,n){const o=e===document,i=this.assignNodeIndex(e),r=o?this.shadowDomRoot:this.getShadowNode(t),c=this.getShadowNode(n),u=this.doc.createElement("div");return u.id="".concat(i),u.node=e,u.computeInfo=()=>{const t=u.parentNode;return u.info=s.createNodeInfo(e,t&&t.info),u.info},u.computeState=()=>(u.state=a.createLayoutState(e,u.info),u.state),this.nodeMap[i]=u,o&&(this.shadowDocument=u),this.classifyNodes&&this.setClass(u,d),r&&(c?r.insertBefore(u,c):r.appendChild(u)),u}moveShadowNode(e,t,n){const o=this.getShadowNode(e),s=this.getShadowNode(t),i=this.getShadowNode(n);return s&&o&&(this.classifyNodes&&(this.hasClass(o,d)||this.setClass(o,u)),i?s.insertBefore(o,i):s.appendChild(o)),o}updateShadowNode(e){const t=this.getShadowNode(e);t&&this.classifyNodes&&this.setClass(t,l)}removeShadowNode(e){const t=this.getShadowNode(e);t&&(this.setClass(t,u),this.removedNodes.appendChild(t))}applyMutationBatch(e){const t=this.nextIndex;this.doc.documentElement.appendChild(this.removedNodes),this.classifyNodes=!0;const{length:n}=e;for(let t=0;t<n;t+=1){const n=e[t],{target:o}=n;switch(n.type){case"attributes":case"characterData":this.applyUpdate(o);break;case"childList":{const e=n.addedNodes.length;for(let t=e-1;t>=0;t-=1){let s=n.previousSibling,i=n.nextSibling;t>0&&(s=n.addedNodes[t-1]),t<e-1&&(i=n.addedNodes[t+1]),this.applyInsert(n.addedNodes[t],o,s,i,!1)}const t=n.removedNodes.length;for(let e=0;e<t;e+=1)this.applyRemove(n.removedNodes[e],o);break}}}this.removedNodes.parentElement.removeChild(this.removedNodes);const o=this.getMutationSummary();return this.cleanUp(),this.reIndexNewNodes(o.newNodes,t),o}hasClass(e,t){return!!e&&e.classList.contains(t)}setClass(e,t){e&&e.classList.add(t)}removeClass(e,t){e&&e.classList.remove(t)}removeAllClasses(e){e&&e.removeAttribute("class")}getMutationSummary(){const e={newNodes:[],movedNodes:[],updatedNodes:[],removedNodes:[]},t=Array.prototype.slice.call(this.doc.getElementsByClassName(d));for(let n=0;n<t.length;n+=1){const o=t[n];e.newNodes.push(o),this.removeAllClasses(o)}const n=Array.prototype.slice.call(this.doc.getElementsByClassName(u));for(let t=0;t<n.length;t+=1){const o=n[t];e.movedNodes.push(o),this.removeClass(o,u)}const o=Array.prototype.slice.call(this.doc.getElementsByClassName(l));for(let t=0;t<o.length;t+=1){const n=o[t];e.updatedNodes.push(n),this.removeAllClasses(n)}return r.traverseNodeTree(this.removedNodes,t=>{this.hasClass(t,u)&&!this.hasClass(t,d)&&e.removedNodes.push(t)},!1),e}createIndexJson(e,t){const n=[];return this.writeIndexToJson(e,n,t),n}isConsistent(){return this.isConstentSubtree(document,this.shadowDocument)}cleanUp(){r.traverseNodeTree(this.removedNodes,e=>{const t=i.getNodeIndex(e.node);delete e.node[i.nodeIndex],delete this.nodeMap[t]},!1);const e=Array.prototype.slice.call(this.doc.getElementsByClassName(c));for(let t=0;t<e.length;t+=1)this.removeAllClasses(e[t]);this.removedNodes.innerHTML="",this.classifyNodes=!1}writeIndexToJson(e,t,n){const o=n(e),s=[];let i=e.firstChild;for(t.push(o),i&&t.push(s);i;)this.writeIndexToJson(i,s,n),i=i.nextSibling}isConsistentNode(e,t){const n=i.getNodeIndex(e);return o.isNumber(n)&&t.id===n.toString()&&t.node===e}isConstentSubtree(e,t){let n=this.isConsistentNode(e,t),o=e.firstChild,s=t.firstChild;for(;n;)if(o&&s)n=this.isConstentSubtree(o,s),o=o.nextSibling,s=s.nextSibling;else{if(!o&&!s)break;n=!1}return n}applyInsert(e,t,n,o,s){const a=i.getNodeIndex(e),r=i.getNodeIndex(t),d=i.getNodeIndex(o);if(this.shouldProcessChildListMutation(e,t)||s)if(null===a){const t=this.insertShadowNode(e,r,d);this.setClass(t,c);let n=e.lastChild;for(;n;)this.applyInsert(n,e,n.previousSibling,n.nextSibling,!0),n=n.previousSibling}else this.moveShadowNode(a,r,i.getNodeIndex(o))}applyRemove(e,t){const n=i.getNodeIndex(e);if(null!==n){this.shouldProcessChildListMutation(e,t)&&this.removeShadowNode(n)}}applyUpdate(e){const t=i.getNodeIndex(e);null!=t&&this.updateShadowNode(t)}shouldProcessChildListMutation(e,t){const n=i.getNodeIndex(e),o=i.getNodeIndex(t);let s=null;if(null===n)s=this.getShadowNode(o);else{const e=this.getShadowNode(n);s=e&&e.parentNode}return s&&!this.hasClass(s,c)}reIndexNewNodes(e,t){e.forEach(e=>{const t=i.getNodeIndex(e.node);delete this.nodeMap[t]}),e.forEach(e=>{e.node[i.nodeIndex]=t,e.id="".concat(t),this.nodeMap[t]=e,t+=1}),this.nextIndex=t}assignNodeIndex(e){let t=i.getNodeIndex(e);return null===t&&(t=this.nextIndex,this.nextIndex+=1),e[i.nodeIndex]=t,t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(10),s=n(7),i=n(11);t.maskAttribute="data-ab_disable_record",t.createNodeInfo=function(e,n){return{ignore:o.shouldIgnoreNode(e,n),mask:function(e,n){return n&&n.mask||e&&e.nodeType===Node.ELEMENT_NODE&&("true"===e.getAttribute(t.maskAttribute)||["INPUT","SELECT","TEXTAREA","DATALIST","OUTPUT"].indexOf(e.tagName)>-1)}(e,n),isCss:i.isCssText(e),captureCssRules:s.shouldCaptureCssRules(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.createDoctypeLayoutState=function(e){const t=o.createGenericLayoutState(e,"*DOC*");return t.attributes={name:e.name,publicId:e.publicId,systemId:e.systemId},t}},function(e,t,n){"use strict";var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=n(2),i=n(0),a=o(n(24)),r=o(n(25));t.Pointer=class{constructor(){this.eventName="Pointer",this.distanceThreshold=30,this.timeThreshold=500,this.rageclickDistance=300,this.rageclickTimeThreshold=800,this.lastMoveState=null,this.lastMoveTime=0,this.clickEvents=[],this.lastError=null}activate(){i.bind(document,"mousedown",this.pointerHandler.bind(this,a)),i.bind(document,"mouseup",this.pointerHandler.bind(this,a)),i.bind(document,"mousemove",this.pointerHandler.bind(this,a)),i.bind(document,"mousewheel",this.pointerHandler.bind(this,a)),i.bind(document,"click",this.pointerHandler.bind(this,a)),i.bind(document,"touchstart",this.pointerHandler.bind(this,r)),i.bind(document,"touchend",this.pointerHandler.bind(this,r)),i.bind(document,"touchmove",this.pointerHandler.bind(this,r)),i.bind(document,"touchcancel",this.pointerHandler.bind(this,r)),i.bind(window,"error",this.catchErrors.bind(this))}teardown(){this.clickEvents.length>5&&this.sendRageclick(this.clickEvents)}pointerHandler(e,t){e.transform(t).forEach(e=>{this.processState(e,i.startTimeTS+t.timeStamp)})}processState(e,t){switch(delete e.original,e.event){case"mousemove":case"touchmove":(null===this.lastMoveState||this.checkDistance(this.lastMoveState,e)||t-this.lastMoveTime>this.timeThreshold)&&(this.lastMoveState=e,this.lastMoveTime=t,s.addMessage({type:this.eventName,data:e,ts:t}));break;case"click":{if(this.lastError){const n=Math.abs(i.startTimeTS+this.lastError.timeStamp-t);n<=300&&s.addMessage({type:"Metadata",data:{event:"errorclick",data:{message:this.lastError.message,file:this.lastError.filename,line:this.lastError.lineno,column:this.lastError.colno,trust:0===n?1:1-n/300,x:e.x,y:e.y}},ts:t})}const n={ts:t,state:e},o=this.clickEvents.length>0?this.clickEvents[this.clickEvents.length-1]:null;o&&o.ts+this.rageclickTimeThreshold>=t&&!this.checkDistance(o.state,n.state,this.rageclickDistance)||null===o?(this.clickEvents.push(n),clearTimeout(this.rageclickTimeout),this.rageclickTimeout=setTimeout(()=>{this.clickEvents.length>=3&&this.sendRageclick(Array.from(this.clickEvents)),this.clickEvents=[]},1e3)):(this.clickEvents.length>=3&&this.sendRageclick(Array.from(this.clickEvents)),this.clickEvents=[n]),s.addMessage({type:this.eventName,data:e,ts:t});break}default:s.addMessage({type:this.eventName,data:e,ts:t})}}sendRageclick(e){const t=e[0],n=e[e.length-1];s.addMessage({type:"Metadata",data:{event:"rageclick",data:{radius:Math.sqrt(t.state.x-Math.pow(n.state.x,2)+t.state.y-Math.pow(n.state.y,2)),x:t.state.x,y:t.state.y,duration:n.ts-t.ts}},ts:t.ts})}getDistance(e,t){const n=e.x-t.x,o=e.y-t.y;return Math.sqrt(Math.pow(n,2)+Math.pow(o,2))}checkDistance(e,t,n=this.distanceThreshold){return this.getDistance(e,t)>=n}catchErrors(e){this.lastError=e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.transform=function(e){const t=document.documentElement;return[{original:e,index:1,event:e.type,pointer:"mouse",x:"pageX"in e?Math.round(e.pageX):"clientX"in e?Math.round(e.clientX+t.scrollLeft):null,y:"pageY"in e?Math.round(e.pageY):"clientY"in e?Math.round(e.clientY+t.scrollTop):null,width:1,height:1,pressure:1,tiltX:0,tiltY:0,target:e.target&&o.nodeIndex in e.target?e.target[o.nodeIndex]:null,buttons:e.buttons}]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.transform=function(e){const t=[],n=document.documentElement,s="touchstart"===e.type||"touchmove"===e.type?1:0,i=e.changedTouches||[];for(let a=0;a<i.length;a+=1){const r=i[a];t.push({buttons:s,index:r.identifier+2,event:e.type,pointer:"touch",x:"clientX"in r?Math.round(r.clientX+n.scrollLeft):null,y:"clientY"in r?Math.round(r.clientY+n.scrollTop):null,width:"radiusX"in r?Math.round(r.radiusX):"webkitRadiusX"in r?Math.round(r.webkitRadiusX):0,height:"radiusY"in r?Math.round(r.radiusY):"webkitRadiusY"in r?Math.round(r.webkitRadiusY):0,pressure:"force"in r?r.force:"webkitForce"in r?r.webkitForce:.5,tiltX:0,tiltY:0,target:e.target&&o.nodeIndex in e.target?e.target[o.nodeIndex]:null})}return t}},function(e,t,n){"use strict";var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(2),i=o(n(5)),a=n(6),r=n(0),c="Navigation",d={"Chrome Mobile":79,Chrome:78,Firefox:71,Edge:78,Opera:65};t.End=class{activate(){r.bind(window,"unload",this.endHandler.bind(this)),r.bind(window,"sessionRecordingStop",this.endHandler.bind(this)),r.bind(window,"sessionRecordingTimeout",this.endHandler.bind(this))}teardown(){}endHandler(e){let t;switch(a.teardown(),e.type){case"unload":t={type:c,data:{event:"close",reason:e.isTrusted?"close":"unexpected"},ts:r.getTS()};break;case"sessionRecordingStop":t={type:c,data:{event:"close",reason:"stop"},ts:r.getTS()};break;case"sessionRecordingTimeout":t={type:c,data:{event:"close",reason:"timeout"},ts:r.getTS()};break;default:t={type:c,data:{event:"close",reason:"unexpected"},ts:r.getTS()}}const n=[t];try{const e=JSON.parse(localStorage.getItem("ABTastyData"));n.push(...e.ActionTracking?e.ActionTracking.reduce((e,t)=>{const n=t.time;return t.label=t.name,delete t.name,delete t.time,n>=r.startTimeTS&&e.push({ts:n,type:"Metadata",data:{event:"actiontracking",data:Object.assign({},t)}}),e},[]):[])}catch(e){r.debug.error(e)}let o=JSON.stringify(n.map(e=>s.addMetas(e)));o=o.substring(1,o.length-1).replace(/({.*?,"tabId":"[^"]+"}),?/g,"$1\n");const u="".concat(i.default.uploadUrl,"session/").concat(a.accountId,"/").concat(a.visitorId,"/").concat(a.tabId).concat(a.region?"?r=".concat(a.region):"");"unload"===e.type?!function(){const{browser:e}=a.abtasty.getParsedUserAgent();return void 0!==window.navigator&&"function"==typeof window.navigator.sendBeacon&&e&&e.name&&Object.keys(d).indexOf(e.name)>-1&&parseInt(e.version,10)>=d[e.name]}()?s.uploadSync(o):window.navigator.sendBeacon(u,o):s.uploadPayload(o,()=>{},()=>{})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),s=n(0);t.Transaction=class{constructor(){this.eventName="Metadata"}activate(){window.abtasty.send&&(this.original=window.abtasty.send,window.abtasty.send=(e,t,...n)=>{this.original(e,t,...n),"transaction"===e&&"object"==typeof t&&o.addMessage({ts:s.getTS(),type:this.eventName,data:{event:"transaction",data:{id:t.tid,name:t.ta,quantity:parseInt(t.icn,10),value:parseFloat(t.tr),currency:t.tc}}})})}teardown(){window.abtasty.send&&(window.abtasty.send=this.original)}}}]);