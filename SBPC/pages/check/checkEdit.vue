<template>
	<view class="baseView">
		<scroll-view class="scrollView" scroll-y="true">
			<view class="cellTitleView">
				<text class="cellTitle">基础信息</text>
			</view>
			<view class="cellInfoView">
				<uni-list>
					<picker id="jclx" @change="typePickerChange(checkTypes, $event)" v-bind:range="checkTypes" range-key="dvalue" :disabled="!editable">
						<uni-list-item title="检查类型" :subnote="model.jclx" :show-arrow="editable"></uni-list-item>
					</picker>
					<uni-list-item title="检查人" :subnote="model.llrmc" show-arrow="false"></uni-list-item>
					<picker mode="date" :value="model.jcrq" @change="dateChange('jcrq', $event)" :disabled="!editable">
						<uni-list-item title="检查日期" :subnote="model.jcrq" :show-arrow="editable"></uni-list-item>
					</picker>
					<uni-list-item title="检查组成员" :subnote="model.qtcy" :show-arrow="editable" @click="jumpPersonChoose"></uni-list-item>
					<picker id="mb" @change="mbChange(selectedModule, $event)" v-bind:range="selectedModule" range-key="mbmc" :disabled="!editable">
						<uni-list-item title="检查模板" :subnote="model.mb" :show-arrow="editable"></uni-list-item>
					</picker>
				</uni-list>
			</view>
			
			<block v-if="model.jcjlList.length > 0">
				<view class="cellTitleView">
					<text class="cellTitle">检查内容</text>
					<text class="cellTitle">正常-</text>
					<uni-icon type="checkbox-filled" size="22" color="#24BE41"></uni-icon>
					<text class="cellTitle">未检-</text>
					<uni-icon type="info-filled" size="22" color="#FFDE52"></uni-icon>
					<text class="cellTitle">异常-</text>
					<uni-icon type="clear" size="22" color="#C11E1E"></uni-icon>
				</view>
				<view class="cellInfoView">
					<uni-list>
						<uni-list-item  v-for="(item,index) in model.jcjlList" :key="index" :title="item.jcbz" :note="item.wtms" show-extra-icon="true" :show-arrow="editable" :extra-icon="getIcon(item)" @click="jumpEdit(item, index)"></uni-list-item>
					</uni-list>
				</view>
				<image class="addCheck" mode="aspectFit" src="../../static/assets/addCheck.png" @click="addCheck"></image>
			</block>
		</scroll-view>
		<view class="bottomView">
			<view class="buttonStyle" @click="saveClick">保存</view>
			<view class="buttonStyle" @click="completeClick">完成检查</view>
		</view>
		
		<prompt v-if="promptVisible"
		  title="添加检查内容"
		  placeholder="请输入检查标题"
		  defaultValue=""
		  mainColor="#3296FA"
		  @cancel="clickCancel"
		  @confirm="clickPromptConfirm"
		>
		  <!-- 这里放入slot内容-->
		  <!-- <text>我是slot内容</text> -->
		</prompt>
	</view>
</template>

<script>
	import uniList from '@/components/list/uni-list/uni-list.vue'
	import uniIcon from '@/components/list/uni-icon/uni-icon.vue'
	import uniListItem from '@/components/list/uni-list-item/uni-list-item.vue'
	import prompt from '@/components/prompt/prompt.vue'
	import config from '../../util/config.js';
	import dataConfig from '../../util/dataConfig.js';
	import request from '../../util/request.js';
	import service from '../../service.js';
	import photo from '../../util/photoUtil.js';
	
	import {
	    mapState
	} from 'vuex'
	export default {
		computed: mapState(['userInfo']),
		components: {uniList,uniListItem,uniIcon,prompt},
		data() {
			return {
				model: {
					recordid: '',	// 主键，有值更新，没值插入
					userid: '',
					jcdzt: '1',		// 状态：1-新建，5-完成，其他时候就按后台传的来
					jclx: '',
					llrid: '',
					llrmc: '',
					jcrq: '',
					qtcyid: '',
					qtcy: '',
					mb: '',
					jcjlList: [],
				},
				
				// 选中的模板
				currentModule: null,
				
				// 数据源
				checkTypes:[],
				// 选中的成员对象集合
				selectedPersons: [],
				// 选择的模板内容
				selectedModule: [],
				
				// 是否可编辑
				editable: true,
				
				// 控制弹框输入框显示, 在需要的地方调用this.promptVisible = true
				promptVisible: false,
				// 图标
				normal: {// 正常图标
					color: '#24BE41',
					size: '22',
					type: 'checkbox-filled'
				},
				undetected: {// 未检图标
					color: '#FFDE52',
					size: '22',
					type: 'info-filled'
				},
				abnormal: {// 异常图标
					color: '#C11E1E',
					size: '22',
					type: 'clear'
				},
				
				// 备用的照片List
				zplists: [],
			}
		},
		onLoad(option) {
			let recordid = option.recordid == null ? "" : option.recordid;
			
			if (recordid == "") {// 新建
				this.model.llrid = this.userInfo.userid;
				this.model.llrmc = this.userInfo.username;
			}else {// 获取详情
				this.model.recordid = recordid;
				this.getDetail();
			}
			
			// 获取检查类型
			this.getCheckTypes();
			// 获取检查模板
			this.getCheckModule();
		},
		onNavigationBarButtonTap() {
			uni.showModal({
			    content: '选择[一键正常]将要清除所有问题描述、检查方式、检查照片，是否确认？',
			    success: (res) => {
			        if (res.confirm) {
			            this.setAllOk();
			        }else {
						return;
					}
			    }
			})
		},
		onUnload() {
			
		},
		methods: {
			// 设置一键正常
			setAllOk: function(e) {
				for (var i = 0; i < this.model.jcjlList.length; i++) {
					this.model.jcjlList[i].wtms = "";
					this.model.jcjlList[i].zgqk = "";
					this.model.jcjlList[i].zplist = [];
					this.model.jcjlList[i].ifwt = "1";
				}
			},
			// 获取检查类型
			getCheckTypes: function(e) {
				var that = this;
				let param = {
					userid: that.userInfo.userid
				}
				request.requestLoading(config.getCheckTypes, param, '正在获取检查类型', 
					function(res){
						that.checkTypes = res.data;
					},function(){
						uni.showToast({
							icon: 'none',
							title: '获取失败'
						});
					}, function(){
						
					}
				);
			},
			// 获取检查模板
			getCheckModule: function(e) {
				var that = this;
				let param = {
					userid: that.userInfo.userid
				}
				request.requestLoading(config.getCheckModule, param, '正在获取检查模板', 
					function(res){
						that.selectedModule = res.data;
					},function(){
						uni.showToast({
							icon: 'none',
							title: '获取失败'
						});
					}, function(){
						
					}
				);
			},
			// 获取检查详情
			getDetail: function(e) {
				var that = this;
				let param = {
					userid: that.userInfo.userid,
					recordid: that.model.recordid
				}
				request.requestLoading(config.getCheckDetail, param, '正在获取检查详情', 
					function(res){
						that.model = res;
						if (that.model.jcdzt == "5") {
							editable = false;
						}
						// 处理照片
						var zplists = [];
						for (var i = 0; i < res.jcjlList.length; i++) {
							zplists = zplists.concat(res.jcjlList[i].zplist);
						}
						// console.log('zplists' + JSON.stringify(zplists));
						that.classifyPhotos(zplists);
					},function(){
						uni.showToast({
							icon: 'none',
							title: '获取失败'
						});
					}, function(){
						
					}
				);
			},
			// 保存
			saveClick: function(e) {
				this.doSave(1)
			},
			// 完成检查
			completeClick: function(e) {
				this.doSave(5)
			},
			// 保存接口,保存的时候state为1，完成检查的时候state为5
			doSave: function(state) {
				var that = this;
				// 先清除zplists
				that.zplists = [];
				that.model.userid = that.userInfo.userid;
				that.model.jcdzt = state;
				var param = that.model;
				// 抽出模型jcjlList里的所有zplist备用，因为保存成功后替换模型会把zplist置空
				for (var i = 0; i < that.model.jcjlList.length; i++) {
					let item = that.model.jcjlList[i];
					that.zplists.push(item.zplist);
				}
				
				request.requestLoading(config.saveCheck, param, '正在保存检查', 
					function(res){
						that.model = res;
						// 把抽出的zplist放回去
						for (var i = 0; i < that.model.jcjlList.length; i++) {
							let item = that.model.jcjlList[i];
							item.zplist = that.zplists[i];
						}
						that.uploadPhoto(false, function(){
							uni.showToast({
								icon: 'none',
								title: '保存成功'
							});
						});
					},function(){
						uni.showToast({
							icon: 'none',
							title: '保存失败'
						});
					}, function(){
						
					}
				);
			},
			// 上传照片
			uploadPhoto (needBack = false, complete) {
				var that = this;
				for(var i = 0; i<that.model.jcjlList.length; i++) {
					let item = that.model.jcjlList[i];
					console.log('item:' + JSON.stringify(item));
					let recordid = item.jcjlrecordid;
					let photoList = item.zplist;
					photo.uploadPhoto(that.userInfo.userid, recordid, "", photoList, function(photoListOnServer){
						if(photoListOnServer.length > 0) {
							uni.showToast({
								icon: 'none',
								title: '照片上传成功',
							});
							that.classifyPhotos(photoListOnServer);
						}
						complete();
					});
				}
			},
			// 加载完隐患详情后把照片加到对应的List中
			classifyPhotos: function(photoList) {
				if (photoList == null) {
					return;
				}
				// 1、先把模型里的zplist全部清空。。。
				for (var i = 0 ; i < this.model.jcjlList.length; i++) {
					this.model.jcjlList[i].zplist = [];
				}
				
				// 2、再循环返回的photoList，把zpsgrecordid对应jcjlrecordid的照片加入zplist。。。
				for(var i = 0 ; i < photoList.length; i++) {
					let item = photoList[i];

					let photoModel = {
						fileid: item.attid,
						src: config.host + config.loadImage + '&attid=' + item.attid,
						type: 2,
						yhid: item.zpsgrecordid,
						attachtype: item.attachtype
					};
					
					for (var j = 0 ; j < this.model.jcjlList.length; j++) {
						let mod = this.model.jcjlList[j];
						if (mod.jcjlrecordid == item.zpsgrecordid) {
							this.model.jcjlList[j].zplist.push(photoModel);
						}
					}
				}
				
				// console.log("jcjlList:" + JSON.stringify(this.model.jcjlList))
			},
			typePickerChange: function(data, e) {// 目前只有检查类型用
				this.model[e.target.id] = data[e.target.value].dvalue;
				this.model['jclxbm'] = data[e.target.value].dvalue;
			},
			dateChange: function(key, e) {
				this.model[key] = e.target.value
			},
			// 多选成员
			jumpPersonChoose: function(e) {
				var that = this;
				let key = "CHECK_PERSONS"
				uni.navigateTo({
					url: "../common/personChoose?key=" + key + "&mltiple=true" + "&selected=" + JSON.stringify(this.selectedPersons)
				})
				that.$fire.once(key, personList=>{
					that.selectedPersons = personList;
					that.formatPersons();
				});
			},
			// 选择模板
			mbChange: function(data, e) {
				this.currentModule = data[e.target.value]
				this.model[e.target.id] = data[e.target.value].mbmc;
				this.getCheckInfoByMb();
			},
			// 根据模板获取检查项
			getCheckInfoByMb: function() {
				var that = this;
				let param = {
					userid: that.userInfo.userid,
					mbid: that.currentModule.mbid,
				}
				request.requestLoading(config.getCheckInfo, param, '正在获取检查项', 
					function(res){
						that.model.jcjlList = res.data;
					},function(){
						uni.showToast({
							icon: 'none',
							title: '获取失败'
						});
					}, function(){
						
					}
				);
			},
			// 跳转检查项编辑
			jumpEdit: function(item, index) {
				var that = this;
				if (that.editable == false) {
					return;
				}
				// item太长，只能存本地，不能放入URL，到下个页面再取出来
				uni.setStorage({
						key: "LOCAL_ITEM",
						data: item,
						success: function () {
							let key = "INFO_EDIT"
							uni.navigateTo({
								url: 'checkInfoEdit?index=' + index + '&key=' + key
							});
							that.$fire.once(key, result=>{
								// 替换personList中的元素为未选中
								that.model.jcjlList.splice(result.index, 1, result.item);
							});
						}
				});
			},
			// 添加自定义检查项
			addCheck: function(e) {
				this.promptVisible = true;
			},
			// 点击弹出输入框确定
			clickPromptConfirm: function(val) {
			  // console.log(val)
			  if (val == "") {
				  uni.showToast({
					icon: 'none',
					title: '请输入检查标题内容'
				  })
				  return;
			  }
			  var newItem = {
				  bzlx: '',
				  idx: '',
				  ifwt: '',
				  jcbz: val,
				  jcbzid: '',
				  jcjlrecordid: '',
				  precordid: '',
				  wtms: '',
				  xmhfl: '',
				  xmhflid: '',
				  zgqk: '',
				  zgtzdid: '',
				  zgtzdmoduleid: '',
				  zgzt: '',
				  zplist: [],
			  }
			  this.model.jcjlList.push(newItem);
			  // 滚动到底部，效果不好
// 			  uni.pageScrollTo({
// 				scrollTop: 100,
// 				duration: 100
// 			});
			  this.promptVisible = false;
			},
			// 点击弹出输入框取消
			clickCancel: function(e) {
				this.promptVisible = false;
			},
			// 格式化检查组成员，变成接口需要的用；隔开的字符串
			formatPersons: function() {
				var qtcyid = "";
				var qtcy = "";
				for(var i = 0 ; i < this.selectedPersons.length; i++) {
					let person = this.selectedPersons[i];
					qtcyid = person.id + ";" + qtcyid;
					qtcy = person.name + ";" + qtcy;
				}
				this.model.qtcy = qtcy;
				this.model.qtcyid = qtcyid;
			},
			// 获取检查项状态图标
			getIcon(item) {
				if (item.ifwt == '1') {// 正常图标
					return this.normal;
				}else if (item.ifwt == '3') {// 异常图标
					return this.abnormal;
				}else {// 未检图标
					return this.undetected;
				}
			},
		}
	}
</script>

<style>
	@import url("../../css/common.css");
	.scrollView {
		width: 100%;
		margin-bottom: 110upx;
	}
	.bottomView {
		width: 100%;
		height: 110upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0upx;
		overflow: hidden;
		text-align: center;
		line-height: 110upx;
		color: #FFFFFF;
		font-size: 32upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.addCheck {
		background-color: #FFFFFF;
		width: 100%;
		height: 80upx;
		padding-top: 20upx;
		padding-bottom: 20upx;
		flex-shrink: 0; /*等比例不压缩*/
	}
</style>
