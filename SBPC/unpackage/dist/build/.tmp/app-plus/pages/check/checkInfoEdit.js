(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/check/checkInfoEdit"],{"1fdd":function(t,e,i){},"20be":function(t,e,i){"use strict";i.r(e);var a=i("a84f"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},4333:function(t,e,i){"use strict";var a=i("1fdd"),n=i.n(a);n.a},a84f:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("8959")),n=r(i("d36e")),s=(r(i("9fbc")),r(i("736d")),r(i("bc96"))),c=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){o(t,e,i[e])})}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={computed:(0,c.mapState)(["inputPageText","key","userInfo"]),components:{uniList:a.default,uniListItem:n.default},data:function(){return{key:"",typeArray:["正常","未检","异常"],rectifyTypes:["立即整改","整改通知","整改中"],item:{zplist:[]},itemIndex:0,imageViewHeight:100,littleImageWidth:0}},onLoad:function(e){var i=this;i.key=e.key,i.itemIndex=JSON.parse(e.index),i.littleImageWidth=(t.getSystemInfoSync().windowWidth-50)/4,t.getStorage({key:"LOCAL_ITEM",success:function(t){i.item=t.data}})},onShow:function(){},methods:l({},(0,c.mapMutations)(["setSublistItem"]),{pickerChange:function(t,e){this.item[e.target.id]=parseInt(e.target.value)+1},jumpInput:function(e,i,a){var n=this;t.navigateTo({url:"../common/inputPage?key="+e+"&placeholder="+i+"&text="+a}),this.$fire.once(e,function(t){n.item[e]=t})},resultPickerChange:function(e,i){var a=this;"0"==i.target.value&&(""!=this.item.wtms||""!=this.item.zgqk||this.item.zplist.length>0)?t.showModal({content:"选择[正常]将要清除问题描述、检查方式、检查照片，是否确认？",success:function(t){t.confirm&&(a.item.wtms="",a.item.zgqk="",a.item.zplist=[],a.item[i.target.id]=parseInt(i.target.value)+1)}}):this.item[i.target.id]=parseInt(i.target.value)+1},saveItem:function(){var e=this,i={item:e.item,index:e.itemIndex};e.$fire.fire(e.key,i),t.navigateBack()},addPhoto:function(t){var e=this;s.default.addPhoto(function(i){e.item[t]=e.item[t].concat(i)})},deleteImage:function(t,e,i){var a=this;s.default.deletePhoto(a.item[t],e,i,function(e){a.item[t]=e})},viewPhoto:function(t){s.default.viewPhoto(this.item[t])}})};e.default=u}).call(this,i("6e42")["default"])},b65b:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"baseView"},[i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v(t._s(t.item.jcbz))])]),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"77ae7fa4-3"}},[i("picker",{attrs:{id:"ifwt",range:t.typeArray,eventid:"77ae7fa4-0"},on:{change:function(e){t.resultPickerChange(t.typeArray,e)}}},[i("uni-list-item",{attrs:{title:"检查结论",subnote:t.typeArray[parseInt(t.item.ifwt)-1],"show-arrow":!0,mpcomid:"77ae7fa4-0"}})],1),"1"!=t.item.ifwt?i("uni-list-item",{attrs:{id:"wtms",title:"问题描述",note:t.item.wtms,"show-arrow":!0,eventid:"77ae7fa4-1",mpcomid:"77ae7fa4-1"},on:{click:function(e){t.jumpInput("wtms","请输入问题描述",t.item.wtms)}}}):t._e(),"1"!=t.item.ifwt?i("picker",{attrs:{id:"zgqk",range:t.rectifyTypes,eventid:"77ae7fa4-2"},on:{change:function(e){t.pickerChange(t.rectifyTypes,e)}}},[i("uni-list-item",{attrs:{title:"检查方式",subnote:t.rectifyTypes[parseInt(t.item.zgqk)-1],"show-arrow":!0,mpcomid:"77ae7fa4-2"}})],1):t._e()],1),"1"!=t.item.ifwt?i("view",{staticClass:"cellImageBaseView"},[i("view",{staticClass:"cellImageTitleView"},[i("text",{staticClass:"leftTextRow"},[t._v("检查照片")]),i("text",{staticClass:"rightTextRow"},[t._v(t._s(t.item.zplist.length))])]),i("view",{staticClass:"imageView",attrs:{id:"imageView"}},[t._l(t.item.zplist,function(e,a){return i("block",{key:a},[i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"}},[i("image",{staticClass:"littleImage",attrs:{id:a,src:e.src,mode:"aspectFit",eventid:"77ae7fa4-3-"+a},on:{click:function(e){t.viewPhoto("zplist")}}}),i("image",{staticClass:"littleImageDelete",attrs:{src:"../../static/assets/delete.png",id:a,mode:"aspectFit",eventid:"77ae7fa4-4-"+a},on:{click:function(i){t.deleteImage("zplist",e,a)}}})])])}),i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"},attrs:{eventid:"77ae7fa4-5"},on:{click:function(e){t.addPhoto("zplist")}}},[i("image",{staticClass:"littleImage",attrs:{src:"../../static/assets/addImage.png"}})])],2)]):t._e()],1),i("view",{staticClass:"btn-row"},[i("button",{staticClass:"primary",attrs:{type:"primary",eventid:"77ae7fa4-6"},on:{tap:t.saveItem}},[t._v("确定")])],1)])},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},d8bc:function(t,e,i){"use strict";i("c6c1");var a=s(i("b0ce")),n=s(i("f2c5"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},f2c5:function(t,e,i){"use strict";i.r(e);var a=i("b65b"),n=i("20be");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("4333");var c=i("2877"),r=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports}},[["d8bc","common/runtime","common/vendor"]]]);