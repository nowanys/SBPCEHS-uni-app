(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/selectedPersonPage"],{"2b2b":function(e,t,n){"use strict";var c=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u})},"8a73":function(e,t,n){"use strict";(function(e){n("c6c1"),n("921b");c(n("66fd"));var t=c(n("eb73"));function c(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c9df:function(e,t,n){"use strict";var c=n("dfcc"),u=n.n(c);u.a},cb0d:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n("2f62"),u={computed:(0,c.mapState)(["userInfo"]),components:{},data:function(){return{key:"",selectedList:[]}},onLoad:function(e){this.key=null==e.key?"":e.key,this.selectedList=null==e.selectedList?[]:JSON.parse(e.selectedList)},onNavigationBarButtonTap:function(){e.navigateBack(),this.$fire.fire(this.key,this.selectedList)},methods:{deletePerson:function(e){this.selectedList.splice(e,1)}}};t.default=u}).call(this,n("6e42")["default"])},dfcc:function(e,t,n){},e3e0:function(e,t,n){"use strict";n.r(t);var c=n("cb0d"),u=n.n(c);for(var i in c)"default"!==i&&function(e){n.d(t,e,function(){return c[e]})}(i);t["default"]=u.a},eb73:function(e,t,n){"use strict";n.r(t);var c=n("2b2b"),u=n("e3e0");for(var i in u)"default"!==i&&function(e){n.d(t,e,function(){return u[e]})}(i);n("c9df");var a=n("2877"),o=Object(a["a"])(u["default"],c["a"],c["b"],!1,null,null,null);t["default"]=o.exports}},[["8a73","common/runtime","common/vendor"]]]);