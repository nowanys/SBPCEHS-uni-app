(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/danger/dangerEdit"],{"34a7":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=m(a("8959")),o=m(a("09d6")),n=m(a("d36e")),s=m(a("9fbc")),l=m(a("40bc")),c=m(a("736d")),d=(m(a("fa28")),m(a("bc96"))),r=a("2f62");function m(t){return t&&t.__esModule?t:{default:t}}var u={computed:(0,r.mapState)(["userInfo"]),components:{uniList:i.default,uniListItem:n.default,uniIcon:o.default},data:function(){return{model:{instanceid:"",recordid:"",yhms:"",yhdj:"",yhhg:"",yhlx:"",zgqx:"",yhly:"",zrbm:null},littleImageWidth:0,createImgList:[],changeImgList:[],confirmImgList:[],pageState:1,dangerLevel:l.default.dangerLevel,dangerResult:l.default.dangerResult,dangerType:l.default.dangerType,dangerSource:l.default.dangerSource,changeOpinion:l.default.changeOpinion,dangerReason:l.default.dangerReason,viewTop:null}},onLoad:function(e){this.littleImageWidth=(t.getSystemInfoSync().windowWidth-50)/4,this.model.instanceid=null==e.instanceid?"":e.instanceid,this.model.recordid=null==e.recordid?"":e.recordid,""!=this.model.instanceid||""!=this.model.recordid?this.getDangerDetail():(this.model.fqrid=this.userInfo.userid,this.model.fqrmc=this.userInfo.username)},onNavigationBarButtonTap:function(){null!=this.model.logList?t.navigateTo({url:"dangerLog?logList="+JSON.stringify(this.model.logList)}):t.showToast({icon:"none",title:"暂无日志"})},onUnload:function(){var t=getCurrentPages(),e=t[t.length-2],a=e.$getAppWebview();plus.webview.postMessageToUniNView({refreshCode:"REFRESH"},a.id)},methods:{saveClick:function(e){var a=this;a.model.userid=a.userInfo.userid,a.model.zrbmid=null==a.model.zrbm?"":a.model.zrbm.id,a.model.zrbmmc=null==a.model.zrbm?"":a.model.zrbm.name,c.default.requestLoading(s.default.addDanger,a.model,"保存隐患",function(e){a.model=e,t.showToast({icon:"none",title:"保存成功"}),a.uploadPhoto(!1,function(){})},function(){t.showToast({icon:"none",title:"保存失败"})},function(){})},roamClick:function(e){var a=this;a.model.userid=a.userInfo.userid,a.model.operationname=e.operationname,a.model.nextstatusname=e.nextstatusname,a.model.prestatusname=e.prestatusname,a.model.flowtype=e.flowtype,c.default.requestLoading(s.default.flowDanger,a.model,"正在流转",function(i){if(null!=i.data||"200"!=i.repCode){var o=i.data,n="DANGER_TRANSFER";t.navigateTo({url:"../common/personChoose?key="+n+"&condition="+o+"&mltiple=false"}),a.$fire.once(n,function(t){a.flowDanger(t,e)})}else a.uploadPhoto(!0,function(){t.showToast({icon:"none",title:i.repMsg}),setTimeout(function(){t.navigateBack({delta:1})},1e3)})},function(){t.showToast({icon:"none",title:"流转失败"})},function(){})},flowDanger:function(e,a){var i=this;i.model.receiverid=e.id,c.default.requestLoading(s.default.flowDangerAfterChooseTarget,i.model,"正在流转",function(e){i.uploadPhoto(!0,function(){t.showToast({icon:"none",title:e.repMsg}),setTimeout(function(){t.navigateBack({delta:1})},1e3)})},function(){t.showToast({icon:"none",title:"流转失败"})},function(){})},getDangerDetail:function(){var e=this;c.default.requestLoading(s.default.getDangerDetail,e.model,"正在加载",function(t){e.model=t;var a={name:t.zrbmmc,id:t.zrbmid};e.model.zrbm=a,e.classifyPhotos(e.model.zplist),null!=e.model.controlcode?-1!=e.model.controlcode.indexOf("start")?e.pageState=1:-1!=e.model.controlcode.indexOf("zzzg")?(e.pageState=2,e.model.zgrmc=e.userInfo.username,e.model.zgrid=e.userInfo.userid):-1!=e.model.controlcode.indexOf("yzfj")&&(e.pageState=3,e.model.yzrmc=e.userInfo.username,e.model.yzrid=e.userInfo.userid):e.pageState=0},function(){t.showToast({icon:"none",title:"加载失败"})},function(){})},classifyPhotos:function(t){if(null!=t)for(var e=0;e<t.length;e++){var a=t[e],i={fileid:a.attid,src:s.default.host+s.default.loadImage+"&attid="+a.attid,type:2,yhid:a.zpsgrecordid,attachtype:a.attachtype};"fxwt"==i.attachtype?this.createImgList.push(i):"zzwt"==i.attachtype?this.changeImgList.push(i):"yzwt"==i.attachtype&&this.confirmImgList.push(i)}},jumpInput:function(e,a,i,o){var n=this;this.pageState==o&&(t.navigateTo({url:"../common/inputPage?key="+e+"&placeholder="+a+"&text="+i}),this.$fire.once(e,function(t){n.model[e]=t}))},jumpOrgChoose:function(e,a){var i=this;this.pageState==a&&(t.navigateTo({url:"../common/orgChoose?selected="+JSON.stringify([])+"&key="+e+"&mltiple=false"}),this.$fire.once(e,function(t){console.log(""+JSON.stringify(t)),i.model[e]=t}))},alertSheetShow:function(e,a,i){var o=this;o.pageState==i&&t.showActionSheet({itemList:a,success:function(t){o.model[e]=a[t.tapIndex]},fail:function(t){}})},pickerChange:function(t,e,a){this.pageState==a&&(this.model[e.target.id]=t[e.target.value])},dateChange:function(t,e,a){this.pageState==a&&(console.log("key:"+t+",value:"+e.target.value),this.model[t]=e.target.value)},opinionSheetShow:function(e,a){var i=this;t.showActionSheet({itemList:a,success:function(t){3!=t.tapIndex?i.model[e]=a[t.tapIndex]:i.jumpInput(e,"请输入审批意见",i.model[e],i.pageState)},fail:function(t){}})},addPhoto:function(t){var e=this;d.default.addPhoto(function(a){e[t]=e[t].concat(a)})},deleteImage:function(t,e,a){var i=this;d.default.deletePhoto(i[t],e,a,function(e){i[t]=e})},viewPhoto:function(t){d.default.viewPhoto(this[t])},uploadPhoto:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0,a=this,i=a.getAttachtypeAndPhotoList().type,o=a.getAttachtypeAndPhotoList().photoList;d.default.uploadPhoto(a.userInfo.userid,a.model.recordid,i,o,function(i){i.length>0&&(t.showToast({icon:"none",title:"照片上传成功"}),a.createImgList=[],a.changeImgList=[],a.confirmImgList=[],a.classifyPhotos(i)),e()})},getAttachtypeAndPhotoList:function(){var t={};return 1==this.pageState?(t.type="fxwt",t.photoList=this.createImgList):2==this.pageState?(t.type="zzwt",t.photoList=this.changeImgList):3==this.pageState?(t.type="yzwt",t.photoList=this.confirmImgList):(t.type="",t.photoList=[]),t}}};e.default=u}).call(this,a("6e42")["default"])},"3b88":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"baseView",attrs:{id:"baseView"}},[a("view",{staticClass:"cellTitleView"},[null==t.model.docstatus||""==t.model.docstatus?a("text",{staticClass:"cellTitle"},[t._v("隐患信息")]):t._e(),null!=t.model.docstatus&&""!=t.model.docstatus?a("text",{staticClass:"cellTitle"},[t._v("隐患信息（当前状态："+t._s(t.model.docstatus)+"）")]):t._e()]),a("view",{staticClass:"cellInfoView"},[a("uni-list",{attrs:{mpcomid:"5c0aa864-8"}},[a("uni-list-item",{attrs:{title:"隐患描述",note:t.model.yhms,"show-arrow":1==t.pageState,eventid:"5c0aa864-0",mpcomid:"5c0aa864-0"},on:{click:function(e){t.jumpInput("yhms","请输入隐患描述",t.model.yhms,1)}}}),a("uni-list-item",{attrs:{title:"隐患等级",subnote:t.model.yhdj,"show-arrow":1==t.pageState,eventid:"5c0aa864-1",mpcomid:"5c0aa864-1"},on:{click:function(e){t.alertSheetShow("yhdj",t.dangerLevel,1)}}}),a("uni-list-item",{attrs:{title:"隐患后果",subnote:t.model.yhhg,"show-arrow":1==t.pageState,eventid:"5c0aa864-2",mpcomid:"5c0aa864-2"},on:{click:function(e){t.alertSheetShow("yhhg",t.dangerResult,1)}}}),a("picker",{attrs:{id:"yhlx",range:t.dangerType,disabled:1!=t.pageState,eventid:"5c0aa864-3"},on:{change:function(e){t.pickerChange(t.dangerType,e,1)}}},[a("uni-list-item",{attrs:{title:"隐患类型",subnote:t.model.yhlx,"show-arrow":1==t.pageState,mpcomid:"5c0aa864-3"}})],1),a("picker",{attrs:{mode:"date",value:t.model.zgqx,disabled:1!=t.pageState,eventid:"5c0aa864-4"},on:{change:function(e){t.dateChange("zgqx",e,1)}}},[a("uni-list-item",{attrs:{title:"整改期限",subnote:t.model.zgqx,"show-arrow":1==t.pageState,mpcomid:"5c0aa864-4"}})],1),a("picker",{attrs:{id:"yhly",range:t.dangerSource,disabled:1!=t.pageState,eventid:"5c0aa864-5"},on:{change:function(e){t.pickerChange(t.dangerSource,e,1)}}},[a("uni-list-item",{attrs:{title:"隐患来源",subnote:t.model.yhly,"show-arrow":1==t.pageState,mpcomid:"5c0aa864-5"}})],1),a("uni-list-item",{attrs:{title:"责任部门",subnote:t.model.zrbm?t.model.zrbm.name:"","show-arrow":1==t.pageState,eventid:"5c0aa864-6",mpcomid:"5c0aa864-6"},on:{click:function(e){t.jumpOrgChoose("zrbm",1)}}}),a("uni-list-item",{attrs:{title:"发起人",subnote:t.model.fqrmc,"show-arrow":"false",mpcomid:"5c0aa864-7"}})],1),a("view",{staticClass:"cellImageBaseView"},[a("view",{staticClass:"cellImageTitleView"},[a("text",{staticClass:"leftTextRow"},[t._v("隐患照片")]),a("text",{staticClass:"rightTextRow"},[t._v(t._s(t.createImgList.length))])]),a("view",{staticClass:"imageView",attrs:{id:"imageView"}},[t._l(t.createImgList,function(e,i){return a("block",{key:i},[a("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"}},[a("image",{staticClass:"littleImage",attrs:{id:i,src:e.src,mode:"aspectFit",eventid:"5c0aa864-7-"+i},on:{click:function(e){t.viewPhoto("createImgList")}}}),1==t.pageState?a("image",{staticClass:"littleImageDelete",attrs:{src:"../../static/assets/delete.png",id:i,mode:"aspectFit",eventid:"5c0aa864-8-"+i},on:{click:function(a){t.deleteImage("createImgList",e,i)}}}):t._e()])])}),1==t.pageState?a("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"},attrs:{eventid:"5c0aa864-9"},on:{click:function(e){t.addPhoto("createImgList")}}},[a("image",{staticClass:"littleImage",attrs:{src:"../../static/assets/addImage.png"}})]):t._e()],2)])],1),a("block",[a("view",{staticClass:"cellTitleView"},[a("text",{staticClass:"cellTitle"},[t._v("整改情况")])]),a("view",{staticClass:"cellInfoView"},[a("uni-list",{attrs:{mpcomid:"5c0aa864-14"}},[a("uni-list-item",{attrs:{title:"隐患因素",subnote:t.model.rwhg,"show-arrow":2==t.pageState,eventid:"5c0aa864-10",mpcomid:"5c0aa864-9"},on:{click:function(e){t.alertSheetShow("rwhg",t.dangerReason,2)}}}),a("uni-list-item",{attrs:{title:"原因分析",note:t.model.yyfx,"show-arrow":2==t.pageState,eventid:"5c0aa864-11",mpcomid:"5c0aa864-10"},on:{click:function(e){t.jumpInput("yyfx","请输入原因分析",t.model.yyfx,2)}}}),a("uni-list-item",{attrs:{title:"整改情况",note:t.model.yhzgqk,"show-arrow":2==t.pageState,eventid:"5c0aa864-12",mpcomid:"5c0aa864-11"},on:{click:function(e){t.jumpInput("yhzgqk","请输入原因分析",t.model.yhzgqk,2)}}}),a("picker",{attrs:{mode:"date",value:t.model.zgwcrq,disabled:2!=t.pageState,eventid:"5c0aa864-13"},on:{change:function(e){t.dateChange("zgwcrq",e,2)}}},[a("uni-list-item",{attrs:{title:"完成日期",subnote:t.model.zgwcrq,"show-arrow":2==t.pageState,mpcomid:"5c0aa864-12"}})],1),a("uni-list-item",{attrs:{title:"整改人",subnote:t.model.zgrmc,"show-arrow":"false",mpcomid:"5c0aa864-13"}})],1),a("view",{staticClass:"cellImageBaseView"},[a("view",{staticClass:"cellImageTitleView"},[a("text",{staticClass:"leftTextRow"},[t._v("整改照片")]),a("text",{staticClass:"rightTextRow"},[t._v(t._s(t.changeImgList.length))])]),a("view",{staticClass:"imageView",attrs:{id:"imageView"}},[t._l(t.changeImgList,function(e,i){return a("block",{key:i},[a("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"}},[a("image",{staticClass:"littleImage",attrs:{id:i,src:e.src,mode:"aspectFit",eventid:"5c0aa864-14-"+i},on:{click:function(e){t.viewPhoto("changeImgList")}}}),2==t.pageState?a("image",{staticClass:"littleImageDelete",attrs:{src:"../../static/assets/delete.png",id:i,mode:"aspectFit",eventid:"5c0aa864-15-"+i},on:{click:function(a){t.deleteImage("changeImgList",e,i)}}}):t._e()])])}),2==t.pageState?a("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"},attrs:{eventid:"5c0aa864-16"},on:{click:function(e){t.addPhoto("changeImgList")}}},[a("image",{staticClass:"littleImage",attrs:{src:"../../static/assets/addImage.png"}})]):t._e()],2)])],1)]),a("block",[a("view",{staticClass:"cellTitleView"},[a("text",{staticClass:"cellTitle"},[t._v("整改确认")])]),a("view",{staticClass:"cellInfoView"},[a("uni-list",{attrs:{mpcomid:"5c0aa864-18"}},[a("uni-list-item",{attrs:{title:"完成情况",note:t.model.yzqk,"show-arrow":3==t.pageState,eventid:"5c0aa864-17",mpcomid:"5c0aa864-15"},on:{click:function(e){t.jumpInput("yzqk","请输入完成情况",t.model.yzqk,3)}}}),a("uni-list-item",{attrs:{title:"确认人",subnote:t.model.yzrmc,"show-arrow":"false",mpcomid:"5c0aa864-16"}}),a("picker",{attrs:{mode:"date",value:t.model.yzrtxrq,disabled:3!=t.pageState,eventid:"5c0aa864-18"},on:{change:function(e){t.dateChange("yzrtxrq",e,3)}}},[a("uni-list-item",{attrs:{title:"填报日期",subnote:t.model.yzrtxrq,"show-arrow":3==t.pageState,mpcomid:"5c0aa864-17"}})],1)],1),a("view",{staticClass:"cellImageBaseView"},[a("view",{staticClass:"cellImageTitleView"},[a("text",{staticClass:"leftTextRow"},[t._v("验证照片")]),a("text",{staticClass:"rightTextRow"},[t._v(t._s(t.confirmImgList.length))])]),a("view",{staticClass:"imageView",attrs:{id:"imageView"}},[t._l(t.confirmImgList,function(e,i){return a("block",{key:i},[a("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"}},[a("image",{staticClass:"littleImage",attrs:{id:i,src:e.src,mode:"aspectFit",eventid:"5c0aa864-19-"+i},on:{click:function(e){t.viewPhoto("confirmImgList")}}}),3==t.pageState?a("image",{staticClass:"littleImageDelete",attrs:{src:"../../static/assets/delete.png",id:i,mode:"aspectFit",eventid:"5c0aa864-20-"+i},on:{click:function(a){t.deleteImage("confirmImgList",e,i)}}}):t._e()])])}),3==t.pageState?a("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"},attrs:{eventid:"5c0aa864-21"},on:{click:function(e){t.addPhoto("confirmImgList")}}},[a("image",{staticClass:"littleImage",attrs:{src:"../../static/assets/addImage.png"}})]):t._e()],2)])],1)]),a("view",{staticClass:"cellInfoView"},[a("uni-list",{attrs:{mpcomid:"5c0aa864-20"}},[""!=t.model.signclass&&null!=t.model.signclass?a("uni-list-item",{attrs:{title:"审批意见",subnote:t.model.signature,"show-arrow":!0,eventid:"5c0aa864-22",mpcomid:"5c0aa864-19"},on:{click:function(e){t.opinionSheetShow("signature",t.changeOpinion)}}}):t._e()],1)],1),0!=t.pageState?a("view",{staticClass:"btnView"},[a("button",{staticClass:"saveBtn",attrs:{eventid:"5c0aa864-23"},on:{tap:t.saveClick}},[t._v("保存")]),t._l(t.model.flowbtnchooseflow,function(e,i){return a("block",{key:i},[a("button",{staticClass:"saveBtn",attrs:{eventid:"5c0aa864-24-"+i},on:{tap:function(a){t.roamClick(e)}}},[t._v(t._s(e.operationname))])],1)})],2):t._e()],1)},o=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return o})},4876:function(t,e,a){"use strict";a.r(e);var i=a("3b88"),o=a("c848");for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);a("cfba");var s=a("2877"),l=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=l.exports},b446:function(t,e,a){"use strict";a("c6c1");var i=n(a("b0ce")),o=n(a("4876"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(o.default))},c848:function(t,e,a){"use strict";a.r(e);var i=a("34a7"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},cfba:function(t,e,a){"use strict";var i=a("eb74"),o=a.n(i);o.a},eb74:function(t,e,a){}},[["b446","common/runtime","common/vendor"]]]);