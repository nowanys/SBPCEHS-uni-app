(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/other/gonggaoList"],{"3cac":function(t,e,n){"use strict";var c=n("3cc5"),i=n.n(c);i.a},"3cc5":function(t,e,n){},4133:function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"baseView"},[n("view",{staticClass:"cellInfoView"},[n("uni-list",{attrs:{mpcomid:"f40cc204-1"}},t._l(t.ggList,function(e,c){return n("block",{key:c},[n("uni-list-item",{attrs:{title:e.title,note:e.source,"show-arrow":!0,eventid:"f40cc204-0-"+c,mpcomid:"f40cc204-0-"+c},on:{click:function(n){t.getDetail(e)}}})],1)}))],1)])},i=[];n.d(e,"a",function(){return c}),n.d(e,"b",function(){return i})},b0c1:function(t,e,n){"use strict";n.r(e);var c=n("4133"),i=n("d261");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("3cac");var o=n("2877"),a=Object(o["a"])(i["default"],c["a"],c["b"],!1,null,null,null);e["default"]=a.exports},c428:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=s(n("8959")),i=s(n("09d6")),u=s(n("d36e")),o=s(n("9fbc")),a=(s(n("40bc")),s(n("736d"))),r=(s(n("fa28")),n("2f62"));function s(t){return t&&t.__esModule?t:{default:t}}var f={computed:(0,r.mapState)(["userInfo"]),components:{uniList:c.default,uniListItem:u.default,uniIcon:i.default},data:function(){return{ggList:[]}},onLoad:function(){this.getGgList()},onNavigationBarButtonTap:function(){},methods:{getGgList:function(e){var n=this,c={userid:n.userInfo.userid};a.default.requestLoading(o.default.getGgList,c,"正在获取通知公告",function(t){n.formatData(t.data)},function(){t.showToast({icon:"none",title:"获取失败"})},function(){})},getDetail:function(e){t.navigateTo({url:"../common/webView?src="+o.default.host+e.src})},formatData:function(t){this.ggList=[];for(var e=0;e<t.length;e++){var n={},c=t[e];n["title"]=c.notesubject,n["source"]=c.createtime,n["datetime"]="",n["instanceid"]=c.instanceid,n["recordid"]=c.recordid,n["article_type"]=0,n["comment_count"]="",n["src"]=c.src,this.ggList.push(n)}}}};e.default=f}).call(this,n("6e42")["default"])},d261:function(t,e,n){"use strict";n.r(e);var c=n("c428"),i=n.n(c);for(var u in c)"default"!==u&&function(t){n.d(e,t,function(){return c[t]})}(u);e["default"]=i.a},fcd0:function(t,e,n){"use strict";n("c6c1");var c=u(n("b0ce")),i=u(n("b0c1"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,c.default)(i.default))}},[["fcd0","common/runtime","common/vendor"]]]);