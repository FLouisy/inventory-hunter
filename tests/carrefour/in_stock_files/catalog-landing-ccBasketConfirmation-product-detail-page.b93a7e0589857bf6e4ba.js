(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{ZUcm:function(n,e,t){"use strict";var o=t("+hws"),s={name:"StoreOpening",props:{store:{type:Object,required:!0},showIcon:{type:Boolean,default:!0}},computed:{getTodayOpenings:function(){return this.store.todayOpening?this.store.todayOpening.map(function(n){return Object(o.e)(n,"h")}):[]},getExtraOpenings:function(){return this.getTodayOpenings.filter(function(n,e){return e})}}},i=t("KHd+"),a=Object(i.a)(s,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"store-opening"},[n.store.isOpenToday?t("div",[n.showIcon?t("div",{staticClass:"store-opening__icon store-opening__icon--open"}):n._e(),n._v(" "),t("p",{staticClass:"store-opening__text"},[n._v("\n      "+n._s(n._f("trans")("product.availability.open"))+"\n      "),n.store.todayOpening&&n.getTodayOpenings.length?t("span",[n._v("\n        "+n._s(n._f("trans")("common.label.from"))+"\n        "+n._s(n.getTodayOpenings[0].startTime)+"\n        "+n._s(n._f("trans")("common.label.to"))+"\n        "+n._s(n.getTodayOpenings[0].endTime)+"\n        "),n._l(n.getExtraOpenings,function(e,o){return t("span",{key:o},[n._v("\n          "+n._s(n._f("trans")("common.label.and"))+"\n          "+n._s(n._f("trans")("common.label.from"))+"\n          "+n._s(e.startTime)+"\n          "+n._s(n._f("trans")("common.label.to"))+"\n          "+n._s(e.endTime)+"\n        ")])})],2):n._e()])]):t("div",[n.showIcon?t("div",{staticClass:"store-opening__icon store-opening__icon--close"}):n._e(),n._v(" "),t("p",{staticClass:"store-opening__text"},[n._v("\n      "+n._s(n._f("trans")("store.locator.closetoday"))+"\n    ")])])])},[],!1,null,null,null);e.a=a.exports}}]);