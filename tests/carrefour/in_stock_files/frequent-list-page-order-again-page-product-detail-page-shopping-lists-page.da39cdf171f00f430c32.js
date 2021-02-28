(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{B1Mo:function(t,n,e){"use strict";e("rGqo"),e("yt8O"),e("RW0V");var i=e("GG0Y"),o=e.n(i),r=e("L2JU"),l=(e("Z2Ku"),e("L9s1"),e("a1Th"),e("lBY2")),a=e("ugd9"),s=e("rVGs"),c=e("TPQ+"),u=e("x2J8");function d(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var f=function(t){return new URL(t).searchParams.has("innit")},m=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=new URL(t);return n?e.searchParams.set("innit",""):e.searchParams.delete("innit"),e.toString()},h={name:"InnitProfileInsert",components:{DsTitle:a.default,DsBodyText:s.default,Icon:c.default,VueModal:l.default,PlButton:u.default},watch:{mode:{immediate:!0,handler:function(t){"function"==typeof this.trackEventOnMounted&&this.trackEventOnMounted(t)}}},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},i=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(n){d(t,n,e[n])})}return t}({},Object(r.c)({globalLinks:"links"}),{link:function(){return"loggedInNoInnitProfile"===this.mode?this.globalLinks.innitOnboarding:this.globalLinks.login},wording:function(){return{title:"innit.profile-insert.title.".concat(this.mode),body:"innit.profile-insert.body.".concat(this.mode),link:"innit.profile-insert.link.".concat(this.mode)}}}),methods:{close:function(){"function"==typeof this.trackEventOnClose&&this.trackEventOnClose(this.mode),this.$emit("close")},onClickLink:function(t){var n=t.target.closest("a").href;this.trackLinkToIam&&!f(window.location.href)&&window.history.replaceState(null,document.title,m(window.location.href)),"function"==typeof this.trackEventOnClickLink&&this.trackEventOnClickLink(this.mode),window.location.assign(n)}},mounted:function(){f(window.location.href)&&(this.$emit("redirected-from-iam"),window.history.replaceState(null,document.title,m(window.location.href,!1)))},props:{mode:{type:String,validator:function(t){return["guest","loggedInNoInnitProfile"].includes(t)},default:"guest"},trackLinkToIam:{type:Boolean,default:!1},trackEventOnClose:{type:Function,default:null},trackEventOnClickLink:{type:Function,default:null},trackEventOnMounted:{type:Function,default:null}}},p=e("KHd+"),k=Object(p.a)(h,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("vue-modal",{staticClass:"innit-profile-insert__modal",attrs:{"with-close":"","with-header":"","with-body":"","with-action":"","light-mode":"","is-loading":!1},on:{close:t.close},scopedSlots:t._u([{key:"header",fn:function(){return[e("img",{staticClass:"innit-profile-insert_modal__header__toast-image",attrs:{src:"/images/innit/visuel_toaste.png"}}),t._v(" "),e("ds-title",{staticClass:"innit-profile-insert_modal__header__title",attrs:{size:"s"}},[t._v("\n      "+t._s(t._f("trans")(t.wording.title))+"\n    ")]),t._v(" "),e("ds-body-text",{attrs:{tag:"p",size:"s"}},[t._v("\n      "+t._s(t._f("trans")(t.wording.body))+"\n    ")])]},proxy:!0},{key:"action",fn:function(){return[e("pl-button",{staticClass:"link",attrs:{variation:"tertiary",link:t.link,"data-testid":"init-profile-insert-action"},on:{clicked:function(n){return n.preventDefault(),t.onClickLink(n)}}},[t._v("\n      "+t._s(t._f("trans")(t.wording.link))+"\n      "),e("icon",{attrs:{name:"04",size:"xs","margin-side":"right"}})],1)]},proxy:!0}])})},[],!1,null,null,null).exports;function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var v=function(){return"1"!==sessionStorage.getItem("INNIT_PROFILE_INSERT_CLOSED")},O=function(){sessionStorage.setItem("INNIT_PROFILE_INSERT_CLOSED","1")},y={name:"InnitProfileInsertSmart",components:{InnitProfileInsert:k},props:{trackEventOnClose:{type:Function,default:null},trackEventOnClickLink:{type:Function,default:null},trackEventOnMounted:{type:Function,default:null}},data:function(){return{open:v(),animateScrollTimeout:null}},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},i=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(n){g(t,n,e[n])})}return t}({},Object(r.c)({getUser:"manage/getUser"}),{isLoggedIn:function(){return Boolean(this.getUser)},mode:function(){return this.isLoggedIn&&!this.getUser.innit.hasProfile?"loggedInNoInnitProfile":this.isLoggedIn?null:"guest"},isOpen:function(){return Boolean(this.open&&this.mode)}}),methods:{close:function(){O(),this.open=!this.open},onRedirectedFromIam:function(){var t=this;window.addEventListener("load",function(){t.animateScrollTimeout=setTimeout(function(){o()(t.$refs.root.$el,{offset:-400})},500)})}},beforeDestroy:function(){this.animateScrollTimeout&&clearTimeout(this.animateScrollTimeout)}},w=Object(p.a)(y,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isOpen?e("innit-profile-insert",{ref:"root",attrs:{mode:t.mode,"track-event-on-close":t.trackEventOnClose,"track-event-on-click-link":t.trackEventOnClickLink,"track-event-on-mounted":t.trackEventOnMounted,"track-link-to-iam":""},on:{close:function(n){return t.close()},"redirected-from-iam":t.onRedirectedFromIam}}):t._e()},[],!1,null,null,null);n.a=w.exports}}]);