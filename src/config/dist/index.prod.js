"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.routerList=exports.menuList=void 0;var routerList=[{path:"/dashboard",component:function(e){return require(["../components/page/Dashboard.vue"],e)},meta:{title:"系统首页",auth:!0},key:1},{path:"/icon",component:function(e){return require(["../components/page/Icon.vue"],e)},meta:{title:"自定义图标",auth:!0},key:5},{path:"/table",component:function(e){return require(["../components/page/BaseTable.vue"],e)},meta:{title:"基础表格",auth:!0},key:1},{path:"/tabs",component:function(e){return require(["../components/page/Tabs.vue"],e)},meta:{title:"tab选项卡",auth:!0},key:1},{path:"/form",component:function(e){return require(["../components/page/BaseForm.vue"],e)},meta:{title:"基本表单",auth:!0},key:1},{path:"/ogsignapply",component:function(e){return require(["../components/page/ogsign/OgSignApply.vue"],e)},meta:{title:"标识申请",auth:!0},key:1},{path:"/ogsigndisable",component:function(e){return require(["../components/page/ogsign/OgSignDisable.vue"],e)},meta:{title:"标识处置"},key:1},{path:"/ogsignstopdetail",component:function(e){return require(["../components/page/ogsign/OgSignStopDetail.vue"],e)},meta:{title:"标识处置详情"},key:1},{path:"/ogsignstandingbook",component:function(e){return require(["../components/page/ogsign/OgSignStandingBook.vue"],e)},meta:{title:"溯源标识台账",auth:!0},key:1},{path:"/goodsregister",component:function(e){return require(["../components/page/goodsregister/GoodsRegister.vue"],e)},meta:{title:"商品登记",auth:!0},key:1},{path:"/creategoodsregister",component:function(e){return require(["../components/page/goodsregister/CreateGoodsRegister.vue"],e)},meta:{title:"商品登记新增",auth:!0},key:1},{path:"/goodsregisterdetail",component:function(e){return require(["../components/page/goodsregister/GoodsRegisterDetail.vue"],e)},meta:{title:"商品登记详情",auth:!0},key:1},{path:"/tree1",component:function(e){return require(["../components/page/tree1.vue"],e)},meta:{title:"基本树",auth:!0},key:1},{path:"/tree2",component:function(e){return require(["../components/page/tree2.vue"],e)},meta:{title:"可选择树",auth:!0},key:1},{path:"/tree3",component:function(e){return require(["../components/page/tree3.vue"],e)},meta:{title:"可编辑树",auth:!0},key:1},{path:"/editor",component:function(e){return require(["../components/page/VueEditor.vue"],e)},meta:{title:"富文本编辑器",auth:!0},key:1},{path:"/markdown",component:function(e){return require(["../components/page/Markdown.vue"],e)},meta:{title:"markdown编辑器",auth:!0},key:1},{path:"/upload",component:function(e){return require(["../components/page/Upload.vue"],e)},meta:{title:"文件上传",auth:!0},key:1},{path:"/charts",component:function(e){return require(["../components/page/BaseCharts.vue"],e)},meta:{title:"schart图表",auth:!0},key:1},{path:"/drag",component:function(e){return require(["../components/page/DragList.vue"],e)},meta:{title:"拖拽列表",auth:!0},key:1},{path:"/dialog",component:function(e){return require(["../components/page/DragDialog.vue"],e)},meta:{title:"拖拽弹框",auth:!0},key:1},{path:"/permission",component:function(e){return require(["../components/page/Permission.vue"],e)},meta:{title:"权限测试",permission:!0,auth:!0},key:1},{path:"/admin",component:function(e){return require(["../components/page/admin.vue"],e)},meta:{title:"用户信息",auth:!0},key:1},{path:"/404",component:function(e){return require(["../components/page/404.vue"],e)},meta:{title:"404"}},{path:"/403",component:function(e){return require(["../components/page/403.vue"],e)},meta:{title:"403"}},{path:"/ogsignused",component:function(e){return require(["../components/page/ogsign/OgSignUsed.vue"],e)},meta:{title:"溯源标识使用",auth:!0},key:1},{path:"/createogsignused/:ogcodebindicode",component:function(e){return require(["../components/page/ogsign/CreateOgSignUsed.vue"],e)},meta:{title:"新增溯源标识使用",auth:!0},key:1},{path:"/createogsignused",component:function(e){return require(["../components/page/ogsign/CreateOgSignUsed.vue"],e)},meta:{title:"新增溯源标识使用",auth:!0},key:1},{path:"/ogsignuseddetail/:ogcodebindicode",component:function(e){return require(["../components/page/ogsign/OgSignUsedDetail.vue"],e)},meta:{title:"溯源标识使用详情",auth:!0},key:1},{path:"/ogsignapplydetail/:ogcodeapplyicode",name:"ogsignapplydetail",component:function(e){return require(["../components/page/ogsign/OgSignApplyDetail.vue"],e)},meta:{title:"标识申请详情",auth:!0},key:1},{path:"/ogsignmanage",component:function(e){return require(["../components/page/ogsign/OgSignManage.vue"],e)},meta:{title:"溯源标识管理",auth:!0},key:1},{path:"/dataissue",component:function(e){return require(["../components/page/DataIssue.vue"],e)},meta:{title:"溯源数据数据管理",auth:!0},key:1},{path:"/tracesourceaddindex",component:function(e){return require(["../components/page/traceSourceAdd/Index.vue"],e)},meta:{title:"新增溯源数据",auth:!0},key:1},{path:"/tracesourcedetails/:cargomticode",name:"tracesourcedetails",component:function(e){return require(["../components/page/traceSourceAdd/DetailsPage.vue"],e)},meta:{title:"溯源数据详情",auth:!0},key:1},{path:"/dataprepare",component:function(e){return require(["../components/page/DataPrepare.vue"],e)},meta:{title:"商品溯源数据准备",auth:!0},key:1},{path:"/dataprepareinfo",component:function(e){return require(["../components/page/DataPrepareInfo.vue"],e)},meta:{title:"商品溯源数据准备详情",auth:!0},key:1},{path:"/impartialList",component:function(e){return require(["../components/page/impartial/impartialList.vue"],e)},meta:{title:"公证办理",auth:!0},key:1},{path:"/impartialSearch",name:"impartialSearch",component:function(e){return require(["../components/page/impartial/impartialSearch.vue"],e)},meta:{title:"公证信息查询",auth:!0},key:1},{path:"/impartialDetail",component:function(e){return require(["../components/page/impartial/impartialDetail.vue"],e)},meta:{title:"公证信息详情",auth:!0},key:1},{path:"/impartialCreate",component:function(e){return require(["../components/page/impartial/Index.vue"],e)},meta:{title:"公证办理新增",auth:!0},key:1},{path:"/impartialFirst",component:function(e){return require(["../components/page/impartial/impartialFirst.vue"],e)},meta:{title:"公证办理第一步",auth:!0},key:1},{path:"/impartialSecond",component:function(e){return require(["../components/page/impartial/impartialSecond.vue"],e)},meta:{title:"公证办理第二步",auth:!0},key:1},{path:"/impartialThird",component:function(e){return require(["../components/page/impartial/impartialThird.vue"],e)},meta:{title:"公证办理第三步",auth:!0},key:1},{path:"/dropdown",component:function(e){return require(["../components/common/CodeDropDown.vue"],e)},meta:{title:"下拉框组件",auth:!0},key:1},{path:"/myCustom",component:function(e){return require(["../components/page/custom/myCustom.vue"],e)},meta:{title:"我的定制",auth:!0},key:1},{path:"/commontabledemo",component:function(e){return require(["../components/common/common-table/Demo.vue"],e)},meta:{title:"通用表格",auth:!0},key:1},{path:"/commonformdemo",component:function(e){return require(["../components/common/common-form/Demo.vue"],e)},meta:{title:"通用表单",auth:!0},key:1},{path:"/complaint",component:function(e){return require(["../components/page/consumer/Complaint.vue"],e)},meta:{title:"投诉页面",auth:!0},key:1},{path:"/complaintconsultinfo",component:function(e){return require(["../components/page/consumer/ComplaintConsultInfo.vue"],e)},meta:{title:"投诉咨询信息",auth:!0},key:1},{path:"/complaintconsultdetail/:cumcompconsicode",component:function(e){return require(["../components/page/consumer/ComplaintConsultDetail.vue"],e)},meta:{title:"投诉咨询详情",auth:!0},key:1},{path:"/getMessage",component:function(e){return require(["../components/page/infringementAndReporting/GetMessage.vue"],e)},meta:{title:"我收到的消息",auth:!0},key:1},{path:"/getMessage/:cargono",component:function(e){return require(["../components/page/infringementAndReporting/GetMessageDetail.vue"],e)},meta:{title:"我收到的消息详情",auth:!0},key:1},{path:"/createReport",component:function(e){return require(["../components/page/infringementAndReporting/CreateReport.vue"],e)},meta:{title:"发起举报",auth:!0},key:1},{path:"/createDemand",component:function(e){return require(["../components/page/infringementAndReporting/CreateDemand.vue"],e)},meta:{title:"发起需求",auth:!0},key:1},{path:"/myReport",component:function(e){return require(["../components/page/infringementAndReporting/MyReport.vue"],e)},meta:{title:"我的举报",auth:!0},key:1},{path:"/myReportDetail/:reportId",component:function(e){return require(["../components/page/infringementAndReporting/MyReportDetail.vue"],e)},meta:{title:"举报详情",auth:!0},key:1},{path:"/reportInSupervise/:reportId",component:function(e){return require(["../components/page/infringementAndReporting/ReportInSupervise.vue"],e)},meta:{title:"举报处理",auth:!0},key:1},{path:"/getMessageChooseService/:id",component:function(e){return require(["../components/page/infringementAndReporting/GetMessageChooseService.vue"],e)},meta:{title:"选择服务商",auth:!0},key:1},{path:"/myDemand",component:function(e){return require(["../components/page/infringementAndReporting/MyDemand.vue"],e)},meta:{title:"我的需求",auth:!0},key:1},{path:"/myDemandDetail/:demandId",component:function(e){return require(["../components/page/infringementAndReporting/MyDemandDetail.vue"],e)},meta:{title:"需求详情",auth:!0},key:1},{path:"/evaluate/:demandId",component:function(e){return require(["../components/page/infringementAndReporting/Evaluate.vue"],e)},meta:{title:"评价",auth:!0},key:1},{path:"/ogsignapplyunused",component:function(e){return require(["../components/page/ogsign/OgSignApplyUnused.vue"],e)},meta:{title:"未使用标识查询",auth:!0},key:1},{path:"/enterpriseregistration",component:function(e){return require(["../components/page/enterprise/EnterpriseRegistration.vue"],e)},meta:{title:"企业登记",auth:!0},key:1}];exports.routerList=routerList;var menuList=[{icon:"iconfont icon3_icon_home",index:"dashboard",title:"可视化中心"},{icon:"iconfont iconicon_su",index:"dataissue",title:"数据发布",subs:[{index:"ogsignapply",title:"标识申请"},{index:"ogsignused",title:"标识使用"},{index:"ogsigndisable",title:"标识处置"},{index:"ogsignstandingbook",title:"溯源标识台账"},{index:"ogsignmanage",title:"溯源标识管理"},{index:"goodsregister",title:"商品登记"},{index:"1",title:"商品资料",subs:[{index:"dataprepare",title:"商品溯源数据准备"},{index:"linkmessageupload",title:"环节信息上传"}]},{index:"11",title:"公证办理",subs:[{index:"impartialList",title:"公证办理"},{index:"impartialSearch",title:"公证信息查询"}]},{index:"myCustom",title:"我的定制"},{index:"enterpriseregistration",title:"企业登记"}]},{icon:"iconfont icon10_icon_yingyong",index:"2",title:"数据回声",subs:[{index:"form",title:"基本表单"},{index:"3",title:"编辑器",subs:[{index:"editor",title:"富文本编辑器"},{index:"markdown",title:"markdown编辑器"}]},{index:"upload",title:"文件上传"},{index:"getMessage",title:"我收到的信息"}]},{icon:"iconfont icon7_icon_tongji",index:"4",title:"数据收益",subs:[{index:"tree1",title:"基本树"},{index:"tree2",title:"可选择树"},{index:"tree3",title:"可编辑树"}]},{icon:"iconfont icon9_icon_guanli",index:"icon",title:"产业服务"},{icon:"",index:"5",title:"账号管理",subs:[{index:"drag",title:"拖拽列表"},{index:"dialog",title:"拖拽弹框"}]},{icon:"",index:"6",title:"消费者",subs:[{index:"complaint",title:"投诉"},{index:"complaintconsultinfo",title:"投诉咨询信息"}]},{icon:"",index:"7",title:"溯源行业服务",subs:[{index:"44",title:"投诉咨询",subs:[{index:"myReport",title:"我的举报"}]},{index:"createReport",title:"我要举报"}]}];function setKey(e){e.forEach(function(t){var e=routerList.find(function(e){if(e.path.substring(1)==t.index)return!0});e?(t.key=e.key,t.subs&&0<t.subs.length&&setKey(t.subs)):t.index<=100&&t.subs&&(t.key=-1,setKey(t.subs))})}setKey(exports.menuList=menuList);