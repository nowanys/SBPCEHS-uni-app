(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/other/pointRank"],{"2e44":function(t,n,e){"use strict";(function(t){e("c6c1"),e("921b");i(e("66fd"));var n=i(e("35d1"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"35d1":function(t,n,e){"use strict";e.r(n);var i=e("62a9"),u=e("872f");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("9477");var a=e("2877"),c=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,null,null);n["default"]=c.exports},"56fa":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("9fbc")),u=(a(e("40bc")),a(e("736d"))),o=(a(e("fa28")),e("2f62"));function a(t){return t&&t.__esModule?t:{default:t}}var c=function(){return e.e("components/list/uni-list/uni-list").then(e.bind(null,"8959"))},r=function(){return e.e("components/list/uni-icon/uni-icon").then(e.bind(null,"09d6"))},s=function(){return e.e("components/list/uni-list-item/uni-list-item").then(e.bind(null,"d36e"))},f={computed:(0,o.mapState)(["userInfo"]),components:{uniList:c,uniListItem:s,uniIcon:r},data:function(){return{ggList:[]}},onLoad:function(){this.getGgList()},onNavigationBarButtonTap:function(){},methods:{getGgList:function(n){var e=this,o={userid:e.userInfo.userid};u.default.requestLoading(i.default.getPointList,o,"正在获取排名",function(t){e.formatData(t.data)},function(){t.showToast({icon:"none",title:"获取失败"})},function(){})},formatData:function(t){this.ggList=[];for(var n=0;n<t.length;n++){var e={},i=t[n];e["title"]=i.username,e["source"]=i.bm,e["datetime"]=i.jf+"分",e["instanceid"]=i.instanceid,e["recordid"]=i.recordid,e["article_type"]=0,e["comment_count"]="",e["src"]=i.src,this.ggList.push(e)}}}};n.default=f}).call(this,e("6e42")["default"])},"581c":function(t,n,e){},"62a9":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})},"872f":function(t,n,e){"use strict";e.r(n);var i=e("56fa"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=u.a},9477:function(t,n,e){"use strict";var i=e("581c"),u=e.n(i);u.a}},[["2e44","common/runtime","common/vendor"]]]);