(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/peixun/peixun"],{"15d3":function(t,n,e){"use strict";e.r(n);var i=e("6be5"),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=s.a},"3a14":function(t,n,e){"use strict";(function(t){e("c6c1"),e("921b");i(e("66fd"));var n=i(e("3e11"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"3e11":function(t,n,e){"use strict";e.r(n);var i=e("df90"),s=e("15d3");for(var o in s)"default"!==o&&function(t){e.d(n,t,function(){return s[t]})}(o);e("a673");var c=e("2877"),r=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},"6be5":function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=u(e("9fbc")),o=(u(e("40bc")),u(e("736d"))),c=(u(e("fa28")),u(e("bc96"))),r=e("2f62");function u(t){return t&&t.__esModule?t:{default:t}}var a=function(){return e.e("components/list/uni-list/uni-list").then(e.bind(null,"8959"))},l=function(){return e.e("components/list/uni-icon/uni-icon").then(e.bind(null,"09d6"))},d=function(){return e.e("components/list/uni-list-item/uni-list-item").then(e.bind(null,"d36e"))},h=function(){return e.e("components/prompt/prompt").then(e.bind(null,"d869"))},f={computed:(0,r.mapState)(["userInfo"]),components:{uniList:a,uniListItem:d,uniIcon:l,prompt:h},data:function(){return{model:{bt:"",recordid:""},currentIndex:0,maxReadIndex:0,classList:[],timer:null,nextPage:"下一页",seconds:0,isCountFinish:!1,backPressFlag:!0}},onLoad:function(t){var n=this;this.$fire.on("APP_HIDE",function(t){n.pauseTimer()}),this.$fire.on("APP_SHOW",function(t){n.pauseTimer(),n.startCount()}),this.model.recordid=null==t.recordid?"":t.recordid,this.getDetail()},onBackPress:function(){var n=this;if(1==n.backPressFlag)return console.log(t(n.backPressFlag," at pages/peixun/peixun.vue:75")),i.showModal({title:"提示",content:"是否确认退出培训？",confirmText:"确认",cancelText:"取消",success:function(t){t.confirm?(n.backPressFlag=!1,i.navigateBack({delta:1})):t.cancel&&(n.backPressFlag=!0)}}),n.backPressFlag},onUnload:function(){this.timer&&this.clearTimer()},methods:{getDetail:function(){var t=this;t.currentIndex=0,t.maxReadIndex=0;var n={userid:t.userInfo.userid,recordid:t.model.recordid};o.default.requestLoading(s.default.getClassDetail,n,"正在加载课件",function(n){t.model=n,t.classifyPhotos(n.kjList),t.seconds=t.minuteToSecond(t.classList[t.currentIndex].bfsc),t.startCount()},function(){i.showToast({icon:"none",title:"网络异常，请重试"})},function(){})},classifyPhotos:function(t){if(null!=t){this.classList=[];for(var n=0;n<t.length;n++){var e=t[n],i={fileid:e.attid,src:s.default.host+s.default.loadImage+"&attid="+e.attid,bfsc:e.bfsc};this.classList.push(i)}}},viewPhoto:function(t){c.default.viewPhoto([t])},provClick:function(t){this.clearTimer(),this.currentIndex-=1,this.currentIndex<this.maxReadIndex?this.isCountFinish=!0:this.isCountFinish=!1},nextClick:function(t){0!=this.isCountFinish&&(this.currentIndex==this.classList.length-1?i.navigateTo({url:"../ceshi/ceshi?recordid="+this.model.ksapid}):(this.currentIndex+=1,this.currentIndex>=this.maxReadIndex&&(this.maxReadIndex=this.currentIndex,this.seconds=this.minuteToSecond(this.classList[this.currentIndex].bfsc),this.startCount())))},gotoCeshi:function(t){i.navigateTo({url:"../ceshi/ceshi?recordid="+this.model.ksapid})},startCount:function(){var t=this;this.isCountFinish=!1,this.currentIndex==this.classList.length-1?this.nextPage="("+this.seconds+")去参加考试":this.nextPage="("+this.seconds+")下一页",this.timer=setInterval(function(){0===t.seconds?(t.timer&&t.clearTimer(),t.isCountFinish=!0):t.isCountFinish=!1,t.loading()},1e3)},loading:function(){0==this.seconds?this.currentIndex==this.classList.length-1?this.nextPage="去参加考试":this.nextPage="下一页":(this.seconds-=1,this.currentIndex==this.classList.length-1?this.nextPage="("+this.seconds+")去参加考试":this.nextPage="("+this.seconds+")下一页")},clearTimer:function(){clearInterval(this.timer),this.timer=null,this.seconds=0,this.loading()},pauseTimer:function(){console.log(t("时间暂停，清除Timer"," at pages/peixun/peixun.vue:232")),clearInterval(this.timer),this.timer=null},minuteToSecond:function(t){return parseInt(t)}}};n.default=f}).call(this,e("0de9")["default"],e("6e42")["default"])},a673:function(t,n,e){"use strict";var i=e("f00e"),s=e.n(i);s.a},df90:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return s})},f00e:function(t,n,e){}},[["3a14","common/runtime","common/vendor"]]]);