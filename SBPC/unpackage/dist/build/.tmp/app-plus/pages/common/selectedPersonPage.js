(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/selectedPersonPage"],{"2b2b":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"baseView"},e._l(e.selectedList,function(t,s){return n("block",{key:s},[n("view",{staticClass:"cellBaseView_Row"},[n("view",{staticClass:"cellTextView"},[n("text",{staticClass:"titleLabel"},[e._v(e._s(t.name))]),n("text",{staticClass:"subTitleLabel"},[e._v(e._s(t.orgName))])]),n("image",{staticClass:"deleteImg",attrs:{mode:"aspectFit",src:"../../static/assets/delete_gray.png",eventid:"23e0c24e-0-"+s},on:{click:function(t){e.deletePerson(s)}}})]),n("view",{staticClass:"cellLine"})])}))},a=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return a})},"4bd2":function(e,t,n){},"8a73":function(e,t,n){"use strict";n("c6c1");var s=i(n("b0ce")),a=i(n("eb73"));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(a.default))},c9df:function(e,t,n){"use strict";var s=n("4bd2"),a=n.n(s);a.a},d318:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("2f62"),a={computed:(0,s.mapState)(["userInfo"]),components:{},data:function(){return{key:"",selectedList:[]}},onLoad:function(e){this.key=null==e.key?"":e.key,this.selectedList=null==e.selectedList?[]:JSON.parse(e.selectedList)},onNavigationBarButtonTap:function(){e.navigateBack(),this.$fire.fire(this.key,this.selectedList)},methods:{deletePerson:function(e){this.selectedList.splice(e,1)}}};t.default=a}).call(this,n("6e42")["default"])},e3e0:function(e,t,n){"use strict";n.r(t);var s=n("d318"),a=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);t["default"]=a.a},eb73:function(e,t,n){"use strict";n.r(t);var s=n("2b2b"),a=n("e3e0");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("c9df");var c=n("2877"),l=Object(c["a"])(a["default"],s["a"],s["b"],!1,null,null,null);t["default"]=l.exports}},[["8a73","common/runtime","common/vendor"]]]);