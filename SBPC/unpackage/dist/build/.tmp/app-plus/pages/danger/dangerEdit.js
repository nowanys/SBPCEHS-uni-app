(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/danger/dangerEdit"],{"08ba":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"346bda0d-0"},on:{click:function(e){t.onClick()}}})},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"09d6":function(t,e,i){"use strict";i.r(e);var n=i("08ba"),a=i("f505");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("4e52");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"1b79":function(t,e,i){"use strict";var n=i("b9cb"),a=i.n(n);a.a},"34a7":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=d(i("8959")),a=d(i("09d6")),o=d(i("d36e")),s=d(i("9fbc")),c=d(i("40bc")),l=d(i("736d")),r=(d(i("fa28")),d(i("bc96"))),u=i("2f62");function d(t){return t&&t.__esModule?t:{default:t}}var f={computed:(0,u.mapState)(["userInfo"]),components:{uniList:n.default,uniListItem:o.default,uniIcon:a.default},data:function(){return{model:{instanceid:"",recordid:"",yhms:"",yhdj:"",yhhg:"",yhlx:"",zgqx:"",yhly:"",zrbm:null},littleImageWidth:0,createImgList:[],changeImgList:[],confirmImgList:[],pageState:1,dangerLevel:c.default.dangerLevel,dangerResult:c.default.dangerResult,dangerType:c.default.dangerType,dangerSource:c.default.dangerSource}},onLoad:function(e){this.littleImageWidth=(t.getSystemInfoSync().windowWidth-50)/4,this.model.instanceid=null==e.instanceid?"":e.instanceid,this.model.recordid=null==e.recordid?"":e.recordid,""==this.model.instanceid&&""==this.model.recordid||this.getDangerDetail()},methods:{saveClick:function(e){var i=this;i.model.userid=i.userInfo.userid,i.model.fqrid=i.userInfo.userid,i.model.fqrmc=i.userInfo.username,i.model.zrbmid=null==i.model.zrbm?"":i.model.zrbm.id,i.model.zrbmmc=null==i.model.zrbm?"":i.model.zrbm.name,l.default.requestLoading(s.default.addDanger,i.model,"添加隐患",function(t){i.model=t},function(){t.showToast({icon:"none",title:"添加失败"})},function(){})},roamClick:function(e){var i=this;i.model.userid=i.userInfo.userid,i.model.operationname=e.operationname,i.model.nextstatusname=e.nextstatusname,i.model.prestatusname=e.prestatusname,i.model.flowtype=e.flowtype,l.default.requestLoading(s.default.flowDanger,i.model,"正在流转",function(n){var a=n.data,o="DANGER_TRANSFER";t.navigateTo({url:"../common/personChoose?key="+o+"&condition="+a+"&mltiple=false"}),i.$fire.once(o,function(t){i.flowDanger(t,e)})},function(){t.showToast({icon:"none",title:"流转失败"})},function(){})},flowDanger:function(e,i){var n=this;n.model.receiverid=e.id,l.default.requestLoading(s.default.flowDangerAfterChooseTarget,n.model,"正在流转",function(e){t.showToast({icon:"none",title:e.repMsg}),setTimeout(function(){t.navigateBack({delta:1})},1e3)},function(){t.showToast({icon:"none",title:"流转失败"})},function(){})},getDangerDetail:function(){var e=this;l.default.requestLoading(s.default.getDangerDetail,e.model,"正在加载",function(t){e.model=t,-1!=e.model.controlcode.indexOf("start")?e.pageState=1:-1!=e.model.controlcode.indexOf("zzzg")?e.pageState=2:-1!=e.model.controlcode.indexOf("zzyz")&&(e.pageState=3)},function(){t.showToast({icon:"none",title:"加载失败"})},function(){})},jumpInput:function(e,i,n){var a=this;t.navigateTo({url:"../common/inputPage?key="+e+"&placeholder="+i+"&text="+n}),this.$fire.once(e,function(t){a.model[e]=t,console.log(""+JSON.stringify(a.model))})},jumpOrgChoose:function(e){var i=this;t.navigateTo({url:"../common/orgChoose?selected="+JSON.stringify([])+"&key="+e+"&mltiple=false"}),this.$fire.once(e,function(t){console.log(""+JSON.stringify(t)),i.model[e]=t})},alertSheetShow:function(e,i){var n=this;t.showActionSheet({itemList:i,success:function(t){n.model[e]=i[t.tapIndex]},fail:function(t){}})},pickerChange:function(t,e){this.model[e.target.id]=t[e.target.value]},dateChange:function(t,e){this.model[t]=e.target.value},addPhoto:function(t){var e=this;r.default.addPhoto(function(i){e[t]=e[t].concat(i)})},deleteImage:function(t,e,i){var n=this;r.default.deletePhoto(n[t],e,i,function(e){n[t]=e})},viewPhoto:function(t){r.default.viewPhoto(this[t])}}};e.default=f}).call(this,i("649d")["default"])},"39f9":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-list-cell",class:[!0===t.disabled||"true"===t.disabled?"uni-list-cell--disabled":""],attrs:{"hover-class":!0===t.disabled||"true"===t.disabled||!0===t.showSwitch||"true"===t.showSwitch?"":"uni-list-cell--hover",eventid:"30c48a99-1"},on:{click:t.onClick}},[i("view",{staticClass:"uni-list-cell__container"},[t.thumb?i("view",{staticClass:"uni-list-cell__icon"},[i("image",{staticClass:"uni-list-cell__icon-img",attrs:{src:t.thumb}})]):!0===t.showExtraIcon||"true"===t.showExtraIcon?i("view",{staticClass:"uni-list-cell__icon"},[i("uni-icon",{attrs:{color:t.extraIcon.color,size:t.extraIcon.size,type:t.extraIcon.type,mpcomid:"30c48a99-0"}})],1):t._e(),i("view",{staticClass:"uni-list-cell__content"},[i("view",{staticClass:"uni-list-cell__content-title"},[t._v(t._s(t.title))]),t.note?i("view",{staticClass:"uni-list-cell__content-note"},[t._v(t._s(t.note))]):t._e()]),t.subnote||!0===t.showBadge||"true"===t.showBadge||!0===t.showArrow||"true"===t.showArrow||!0===t.showSwitch||"true"===t.showSwitch?i("view",{staticClass:"uni-list-cell__extra"},[t.subnote?i("view",{staticClass:"uni-list-cell__content-note"},[t._v(t._s(t.subnote))]):t._e(),!0===t.showBadge||"true"===t.showBadge?i("uni-badge",{attrs:{type:t.badgeType,text:t.badgeText,mpcomid:"30c48a99-1"}}):t._e(),!0===t.showSwitch||"true"===t.showSwitch?i("switch",{attrs:{disabled:t.disabled,checked:t.switchChecked,eventid:"30c48a99-0"},on:{change:t.onSwitchChange}}):t._e(),!0===t.showArrow||"true"===t.showArrow?i("uni-icon",{attrs:{color:"#bbb",size:"20",type:"arrowright",mpcomid:"30c48a99-2"}}):t._e()],1):t._e()])])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"3dec":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-list"};e.default=n},"40bc":function(t,e,i){"use strict";var n={dangerLevel:["一般隐患","重大隐患"],dangerResult:["死亡","重伤","轻伤","行政处罚"],dangerType:["消防安全","行走及工作面","化学品管理","热/冷表面","一般废物管理","登高作业及坠落防护","废弃排放","电气安全/挂牌上锁","起吊安全","特种设备","机械安全","危险废物管理","职业健康及个人防护","承包商管理","工具安全","环境保护","应急响应","培训","废水处理","电气安全","消防","食品安全","高处作业","人机工程","非机械性伤害"],dangerSource:["企业自查","集团检查","政府检查","第三方审核","相关方"]};t.exports=n},"40cb":function(t,e,i){},4876:function(t,e,i){"use strict";i.r(e);var n=i("82df"),a=i("c848");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("cfba");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"4e52":function(t,e,i){"use strict";var n=i("8946"),a=i.n(n);a.a},"52f8":function(t,e,i){"use strict";var n=i("40cb"),a=i.n(n);a.a},"548e":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-badge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},computed:{setClass:function(){var t=["uni-badge-"+this.type,"uni-badge--"+this.size];return!0===this.inverted&&t.push("uni-badge-inverted"),t.join(" ")}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},5513:function(t,e,i){"use strict";i.r(e);var n=i("b806"),a=i("5888");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("cbd5");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"579e":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-icon",props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},5888:function(t,e,i){"use strict";i.r(e);var n=i("548e"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"72fa":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("09d6")),a=o(i("5513"));function o(t){return t&&t.__esModule?t:{default:t}}var s={name:"uni-list-item",components:{uniIcon:n.default,uniBadge:a.default},data:function(){return{}},props:{title:String,note:String,subnote:String,disabled:{type:[Boolean,String],default:!1},showArrow:{type:[Boolean,String],default:!0},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:String,badgeType:{type:String,default:"success"},thumb:String,showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:function(){return{type:"contact",color:"#000000",size:"20"}}}},methods:{onClick:function(){this.$emit("click")},onSwitchChange:function(t){this.$emit("switchChange",t.detail)}}};e.default=s},"816d":function(t,e,i){"use strict";i.r(e);var n=i("3dec"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"82df":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"baseView"},[t._m(0),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"5c0aa864-8"}},[i("uni-list-item",{attrs:{title:"隐患描述",note:t.model.yhms,"show-arrow":"true",eventid:"5c0aa864-0",mpcomid:"5c0aa864-0"},on:{click:function(e){t.jumpInput("yhms","请输入隐患描述",t.model.yhms)}}}),i("uni-list-item",{attrs:{title:"隐患等级",subnote:t.model.yhdj,"show-arrow":"true",eventid:"5c0aa864-1",mpcomid:"5c0aa864-1"},on:{click:function(e){t.alertSheetShow("yhdj",t.dangerLevel)}}}),i("uni-list-item",{attrs:{title:"隐患后果",subnote:t.model.yhhg,"show-arrow":"true",eventid:"5c0aa864-2",mpcomid:"5c0aa864-2"},on:{click:function(e){t.alertSheetShow("yhhg",t.dangerResult)}}}),i("picker",{attrs:{id:"yhlx",range:t.dangerType,eventid:"5c0aa864-3"},on:{change:function(e){t.pickerChange(t.dangerType,e)}}},[i("uni-list-item",{attrs:{title:"隐患类型",subnote:t.model.yhlx,"show-arrow":"true",mpcomid:"5c0aa864-3"}})],1),i("picker",{attrs:{mode:"date",value:t.model.zgqx,eventid:"5c0aa864-4"},on:{change:function(e){t.dateChange("zgqx",e)}}},[i("uni-list-item",{attrs:{title:"整改期限",subnote:t.model.zgqx,"show-arrow":"true",mpcomid:"5c0aa864-4"}})],1),i("picker",{attrs:{id:"yhly",range:t.dangerSource,eventid:"5c0aa864-5"},on:{change:function(e){t.pickerChange(t.dangerSource,e)}}},[i("uni-list-item",{attrs:{title:"隐患来源",subnote:t.model.yhly,"show-arrow":"true",mpcomid:"5c0aa864-5"}})],1),i("uni-list-item",{attrs:{title:"责任部门",subnote:t.model.zrbm?t.model.zrbm.name:"","show-arrow":"true",eventid:"5c0aa864-6",mpcomid:"5c0aa864-6"},on:{click:function(e){t.jumpOrgChoose("zrbm")}}}),i("uni-list-item",{attrs:{title:"发起人",subnote:this.userInfo.username,"show-arrow":"false",mpcomid:"5c0aa864-7"}})],1),i("view",{staticClass:"cellImageBaseView"},[i("view",{staticClass:"cellImageTitleView"},[i("text",{staticClass:"leftTextRow"},[t._v("隐患照片")]),i("text",{staticClass:"rightTextRow"},[t._v(t._s(t.createImgList.length))])]),i("view",{staticClass:"imageView",attrs:{id:"imageView"}},[t._l(t.createImgList,function(e,n){return i("block",{key:n},[i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"}},[i("image",{staticClass:"littleImage",attrs:{id:n,src:e.src,mode:"aspectFit",eventid:"5c0aa864-7-"+n},on:{click:function(e){t.viewPhoto("createImgList")}}}),i("image",{staticClass:"littleImageDelete",attrs:{src:"../../static/assets/delete.png",id:n,mode:"aspectFit",eventid:"5c0aa864-8-"+n},on:{click:function(i){t.deleteImage("createImgList",e,n)}}})])])}),i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"},attrs:{eventid:"5c0aa864-9"},on:{click:function(e){t.addPhoto("createImgList")}}},[i("image",{staticClass:"littleImage",attrs:{src:"../../static/assets/addImage.png"}})])],2)])],1),1!=t.pageState?i("block",[i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("整改情况")])]),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"5c0aa864-14"}},[i("uni-list-item",{attrs:{title:"隐患因素",note:t.model.rwhg,"show-arrow":"true",eventid:"5c0aa864-10",mpcomid:"5c0aa864-9"},on:{click:function(e){t.alertSheetShow("rwhg",t.dangerLevel)}}}),i("uni-list-item",{attrs:{title:"原因分析",subnote:t.model.yyfx,"show-arrow":"true",eventid:"5c0aa864-11",mpcomid:"5c0aa864-10"},on:{click:function(e){t.jumpInput("yyfx","请输入原因分析",t.model.yyfx)}}}),i("uni-list-item",{attrs:{title:"整改情况",subnote:t.model.yhzgqk,"show-arrow":"true",eventid:"5c0aa864-12",mpcomid:"5c0aa864-11"},on:{click:function(e){t.jumpInput("yhzgqk","请输入原因分析",t.model.yhzgqk)}}}),i("picker",{attrs:{mode:"date",value:t.model.zgwcrq,eventid:"5c0aa864-13"},on:{change:function(e){t.dateChange("zgwcrq",e)}}},[i("uni-list-item",{attrs:{title:"完成日期",subnote:t.model.zgwcrq,"show-arrow":"true",mpcomid:"5c0aa864-12"}})],1),i("uni-list-item",{attrs:{title:"整改人",subnote:this.userInfo.username,"show-arrow":"false",mpcomid:"5c0aa864-13"}})],1),i("view",{staticClass:"cellImageBaseView"},[i("view",{staticClass:"cellImageTitleView"},[i("text",{staticClass:"leftTextRow"},[t._v("整改照片")]),i("text",{staticClass:"rightTextRow"},[t._v(t._s(t.changeImgList.length))])]),i("view",{staticClass:"imageView",attrs:{id:"imageView"}},[t._l(t.changeImgList,function(e,n){return i("block",{key:n},[i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"}},[i("image",{staticClass:"littleImage",attrs:{id:n,src:e.src,mode:"aspectFit",eventid:"5c0aa864-14-"+n},on:{click:function(e){t.viewPhoto("changeImgList")}}}),i("image",{staticClass:"littleImageDelete",attrs:{src:"../../static/assets/delete.png",id:n,mode:"aspectFit",eventid:"5c0aa864-15-"+n},on:{click:function(i){t.deleteImage("changeImgList",e,n)}}})])])}),i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"},attrs:{eventid:"5c0aa864-16"},on:{click:function(e){t.addPhoto("changeImgList")}}},[i("image",{staticClass:"littleImage",attrs:{src:"../../static/assets/addImage.png"}})])],2)])],1)]):t._e(),i("view",{staticClass:"btnView"},[i("button",{staticClass:"saveBtn",attrs:{eventid:"5c0aa864-17"},on:{tap:t.saveClick}},[t._v("保存")]),t._l(t.model.flowbtnchooseflow,function(e,n){return i("block",{key:n},[i("button",{staticClass:"saveBtn",attrs:{eventid:"5c0aa864-18-"+n},on:{tap:function(i){t.roamClick(e)}}},[t._v(t._s(e.operationname))])],1)})],2)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("隐患信息")])])}];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},8946:function(t,e,i){},8959:function(t,e,i){"use strict";i.r(e);var n=i("b81f"),a=i("816d");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("52f8");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},b446:function(t,e,i){"use strict";i("c6c1");var n=o(i("b0ce")),a=o(i("4876"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},b806:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("text",{staticClass:"uni-badge",class:t.setClass,attrs:{eventid:"68dcfa4a-0"},on:{click:function(e){t.onClick()}}},[t._v(t._s(t.text))]):t._e()},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},b81f:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-list"},[t._t("default",null,{mpcomid:"3b6bb3ad-0"})],2)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},b9cb:function(t,e,i){},bc96:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("9fbc"),a=i("736d"),o=function(e){var i=[];t.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){for(var n=0;n<t.tempFilePaths.length;n++){var a={fileid:"",src:t.tempFilePaths[n],type:1};i.push(a)}e(i)}})},s=function(e,i,o,s){if(i.src.startsWith("http:")){var c={from:"jc",yyid:"",fileid:i.fileid,userid:""};a.requestLoading(n.deleteImage,c,"正在删除图片",function(t){e.splice(o,1),s(e)},function(){t.showToast({icon:"none",title:"删除失败"})},function(){})}else e.splice(o,1),s(e)},c=function(e){for(var i=[],n=0;n<e.length;n++){var a=e[n];i.push(a.src)}t.previewImage({urls:i})},l={addPhoto:o,deletePhoto:s,viewPhoto:c};e.default=l}).call(this,i("649d")["default"])},c848:function(t,e,i){"use strict";i.r(e);var n=i("34a7"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},cbd5:function(t,e,i){"use strict";var n=i("f912"),a=i.n(n);a.a},cc40:function(t,e,i){"use strict";i.r(e);var n=i("72fa"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},cfba:function(t,e,i){"use strict";var n=i("eb74"),a=i.n(n);a.a},d36e:function(t,e,i){"use strict";i.r(e);var n=i("39f9"),a=i("cc40");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("1b79");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},eb74:function(t,e,i){},f505:function(t,e,i){"use strict";i.r(e);var n=i("579e"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},f912:function(t,e,i){}},[["b446","common/runtime","common/vendor"]]]);