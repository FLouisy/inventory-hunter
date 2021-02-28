/*!
* jQuery Form Plugin
* version: 2.52 (07-DEC-2010)
* @requires jQuery v1.3.2 or later
*
* Examples and documentation at: http://malsup.com/jquery/form/
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/
(function(n){function t(){if(n.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}n.fn.ajaxSubmit=function(i){function p(){function k(){var f=r.attr("target"),o=r.attr("action"),t,i;e.setAttribute("target",l);e.getAttribute("method")!="POST"&&e.setAttribute("method","POST");e.getAttribute("action")!=u.url&&e.setAttribute("action",u.url);u.skipEncodingOverride||r.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});u.timeout&&setTimeout(function(){b=!0;p()},u.timeout);t=[];try{if(u.extraData)for(i in u.extraData)t.push(n('<input type="hidden" name="'+i+'" value="'+u.extraData[i]+'" />').appendTo(e)[0]);s.appendTo("body");s.data("form-plugin-onload",p);e.submit()}finally{e.setAttribute("action",o);f?e.setAttribute("target",f):r.removeAttr("target");n(t).remove()}}function p(){var i,r,e,l,a,v;if(!w){s.removeData("form-plugin-onload");i=!0;try{if(b)throw"timeout";if(o=h.contentWindow?h.contentWindow.document:h.contentDocument?h.contentDocument:h.document,r=u.dataType=="xml"||o.XMLDocument||n.isXMLDoc(o),t("isXml="+r),!r&&window.opera&&(o.body==null||o.body.innerHTML=="")&&--g){t("requeing onLoad callback, DOM not available");setTimeout(p,250);return}w=!0;f.responseText=o.documentElement?o.documentElement.innerHTML:null;f.responseXML=o.XMLDocument?o.XMLDocument:o;f.getResponseHeader=function(n){var t={"content-type":u.dataType};return t[n]};e=/(json|script)/.test(u.dataType);e||u.textarea?(l=o.getElementsByTagName("textarea")[0],l?f.responseText=l.value:e&&(a=o.getElementsByTagName("pre")[0],v=o.getElementsByTagName("body")[0],a?f.responseText=a.textContent:v&&(f.responseText=v.innerHTML))):u.dataType!="xml"||f.responseXML||f.responseText==null||(f.responseXML=nt(f.responseText));d=n.httpData(f,u.dataType)}catch(y){t("error caught:",y);i=!1;f.error=y;n.handleError(u,f,"error",y)}f.aborted&&(t("upload aborted"),i=!1);i&&(u.success.call(u.context,d,"success",f),c&&n.event.trigger("ajaxSuccess",[f,u]));c&&n.event.trigger("ajaxComplete",[f,u]);c&&!--n.active&&n.event.trigger("ajaxStop");u.complete&&u.complete.call(u.context,f,i?"success":"error");setTimeout(function(){s.removeData("form-plugin-onload");s.remove();f.responseXML=null},100)}}function nt(n,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(n)):t=(new DOMParser).parseFromString(n,"text/xml"),t&&t.documentElement&&t.documentElement.tagName!="parsererror"?t:null}var e=r[0],u,l,y,s,h,f,c,v,d,o,g;if(n(":input[name=submit],:input[id=submit]",e).length){alert('Error: Form elements must not have name or id of "submit".');return}if(u=n.extend(!0,{},n.ajaxSettings,i),u.context=u.context||u,l="jqFormIO"+(new Date).getTime(),y="_"+l,window[y]=function(){var n=s.data("form-plugin-onload");if(n){n();window[y]=undefined;try{delete window[y]}catch(t){}}},s=n('<iframe id="'+l+'" name="'+l+'" src="'+u.iframeSrc+'" onload="window[\'_\'+this.id]()" />'),h=s[0],s.css({position:"absolute",top:"-1000px",left:"-1000px"}),f={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;s.attr("src",u.iframeSrc)}},c=u.global,c&&!n.active++&&n.event.trigger("ajaxStart"),c&&n.event.trigger("ajaxSend",[f,u]),u.beforeSend&&u.beforeSend.call(u.context,f,u)===!1){u.global&&n.active--;return}if(!f.aborted){var w=!1,b=0,a=e.clk;a&&(v=a.name,v&&!a.disabled&&(u.extraData=u.extraData||{},u.extraData[v]=a.value,a.type=="image"&&(u.extraData[v+".x"]=e.clk_x,u.extraData[v+".y"]=e.clk_y)));u.forceSync?k():setTimeout(k,10);g=50}}var c,u,h,f,o,s,a,l,r,e,v;if(!this.length)return t("ajaxSubmit: skipping submit process - no element selected"),this;if(typeof i=="function"&&(i={success:i}),c=this.attr("action"),u=typeof c=="string"?n.trim(c):"",u&&(u=(u.match(/^([^#]+)/)||[])[1]),u=u||window.location.href||"",i=n.extend(!0,{url:u,type:this.attr("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},i),h={},this.trigger("form-pre-serialize",[this,i,h]),h.veto)return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(i.beforeSerialize&&i.beforeSerialize(this,i)===!1)return t("ajaxSubmit: submit aborted via beforeSerialize callback"),this;if(s=this.formToArray(i.semantic),i.data){i.extraData=i.data;for(f in i.data)if(i.data[f]instanceof Array)for(a in i.data[f])s.push({name:f,value:i.data[f][a]});else o=i.data[f],o=n.isFunction(o)?o():o,s.push({name:f,value:o})}if(i.beforeSubmit&&i.beforeSubmit(s,this,i)===!1)return t("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[s,this,i,h]),h.veto)return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;l=n.param(s);i.type.toUpperCase()=="GET"?(i.url+=(i.url.indexOf("?")>=0?"&":"?")+l,i.data=null):i.data=l;r=this;e=[];i.resetForm&&e.push(function(){r.resetForm()});i.clearForm&&e.push(function(){r.clearForm()});!i.dataType&&i.target?(v=i.success||function(){},e.push(function(t){var r=i.replaceTarget?"replaceWith":"html";n(i.target)[r](t).each(v,arguments)})):i.success&&e.push(i.success);i.success=function(n,t,u){for(var o=i.context||i,f=0,s=e.length;f<s;f++)e[f].apply(o,[n,t,u||r,r])};var w=n("input:file",this).length>0,y="multipart/form-data",b=r.attr("enctype")==y||r.attr("encoding")==y;return i.iframe!==!1&&(w||i.iframe||b)?i.closeKeepAlive?n.get(i.closeKeepAlive,p):p():n.ajax(i),this.trigger("form-submit-notify",[this,i]),this};n.fn.ajaxForm=function(i){if(this.length===0){var r={s:this.selector,c:this.context};return!n.isReady&&r.s?(t("DOM not ready, queuing ajaxForm"),n(function(){n(r.s,r.c).ajaxForm(i)}),this):(t("terminating; zero elements found by selector"+(n.isReady?"":" (DOM not ready)")),this)}return this.ajaxFormUnbind().bind("submit.form-plugin",function(t){t.isDefaultPrevented()||(t.preventDefault(),n(this).ajaxSubmit(i))}).bind("click.form-plugin",function(t){var r=t.target,u=n(r),f,i,e;if(!u.is(":submit,input:image")){if(f=u.closest(":submit"),f.length==0)return;r=f[0]}i=this;i.clk=r;r.type=="image"&&(t.offsetX!=undefined?(i.clk_x=t.offsetX,i.clk_y=t.offsetY):typeof n.fn.offset=="function"?(e=u.offset(),i.clk_x=t.pageX-e.left,i.clk_y=t.pageY-e.top):(i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop));setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)})};n.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};n.fn.formToArray=function(t){var u=[],r,o,s,h,i,f,e,a,v,l,c;if(this.length===0||(r=this[0],o=t?r.getElementsByTagName("*"):r.elements,!o))return u;for(s=0,a=o.length;s<a;s++)if(e=o[s],i=e.name,i){if(t&&r.clk&&e.type=="image"){e.disabled||r.clk!=e||(u.push({name:i,value:n(e).val()}),u.push({name:i+".x",value:r.clk_x},{name:i+".y",value:r.clk_y}));continue}if(f=n.fieldValue(e,!0),f&&f.constructor==Array)for(h=0,v=f.length;h<v;h++)u.push({name:i,value:f[h]});else f!==null&&typeof f!="undefined"&&u.push({name:i,value:f})}return!t&&r.clk&&(l=n(r.clk),c=l[0],i=c.name,i&&!c.disabled&&c.type=="image"&&(u.push({name:i,value:l.val()}),u.push({name:i+".x",value:r.clk_x},{name:i+".y",value:r.clk_y}))),u};n.fn.formSerialize=function(t){return n.param(this.formToArray(t))};n.fn.fieldSerialize=function(t){var i=[];return this.each(function(){var f=this.name,r,u,e;if(f)if(r=n.fieldValue(this,t),r&&r.constructor==Array)for(u=0,e=r.length;u<e;u++)i.push({name:f,value:r[u]});else r!==null&&typeof r!="undefined"&&i.push({name:this.name,value:r})}),n.param(i)};n.fn.fieldValue=function(t){for(var f,i,r=[],u=0,e=this.length;u<e;u++)(f=this[u],i=n.fieldValue(f,t),i!==null&&typeof i!="undefined"&&(i.constructor!=Array||i.length))&&(i.constructor==Array?n.merge(r,i):r.push(i));return r};n.fieldValue=function(t,i){var a=t.name,u=t.type,h=t.tagName.toLowerCase(),e,o,r,f;if(i===undefined&&(i=!0),i&&(!a||t.disabled||u=="reset"||u=="button"||(u=="checkbox"||u=="radio")&&!t.checked||(u=="submit"||u=="image")&&t.form&&t.form.clk!=t||h=="select"&&t.selectedIndex==-1))return null;if(h=="select"){if(e=t.selectedIndex,e<0)return null;var c=[],l=t.options,s=u=="select-one",v=s?e+1:l.length;for(o=s?e:0;o<v;o++)if(r=l[o],r.selected){if(f=r.value,f||(f=r.attributes&&r.attributes.value&&!r.attributes.value.specified?r.text:r.value),s)return f;c.push(f)}return c}return n(t).val()};n.fn.clearForm=function(){return this.each(function(){n("input,select,textarea",this).clearFields()})};n.fn.clearFields=n.fn.clearInputs=function(){return this.each(function(){var n=this.type,t=this.tagName.toLowerCase();n=="text"||n=="password"||t=="textarea"?this.value="":n=="checkbox"||n=="radio"?this.checked=!1:t=="select"&&(this.selectedIndex=-1)})};n.fn.resetForm=function(){return this.each(function(){typeof this.reset!="function"&&(typeof this.reset!="object"||this.reset.nodeType)||this.reset()})};n.fn.enable=function(n){return n===undefined&&(n=!0),this.each(function(){this.disabled=!n})};n.fn.selected=function(t){return t===undefined&&(t=!0),this.each(function(){var r=this.type,i;r=="checkbox"||r=="radio"?this.checked=t:this.tagName.toLowerCase()=="option"&&(i=n(this).parent("select"),t&&i[0]&&i[0].type=="select-one"&&i.find("option").selected(!1),this.selected=t)})}})(jQuery);
//# sourceMappingURL=jquery.form.js.map

//# sourceMappingURL=jquery.form.js.map
