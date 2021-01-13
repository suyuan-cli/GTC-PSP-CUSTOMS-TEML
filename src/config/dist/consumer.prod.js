"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var routerList=[{path:"/consumerPage",component:function(e){return require(["../components/page/todo.vue"],e)},meta:{title:"消费者首页",auth:!(exports.default=void 0)},key:-1},{path:"/riskWarning",component:function(e){return require(["../components/page/todo.vue"],e)},meta:{title:"风险预警",auth:!0},key:-1},{path:"/commodityList",component:function(e){return require(["../components/page/todo.vue"],e)},meta:{title:"商品榜单",auth:!0},key:-1},{path:"/traceabilityInfo",component:function(e){return require(["../components/page/todo.vue"],e)},meta:{title:"溯源资讯",auth:!0},key:-1},{path:"/helpcenter",component:function(e){return require(["../components/page/todo.vue"],e)},meta:{title:"帮助中心",auth:!0},key:-1},{path:"/usercenter",component:function(e){return require(["../components/page/todo.vue"],e)},meta:{title:"个人中心",auth:!0},key:-1},{path:"/complaint",component:function(e){return require(["../components/page/consumer/Complaint.vue"],e)},meta:{title:"投诉页面",auth:!0},key:-1},{path:"/complaintconsultinfo",component:function(e){return require(["../components/page/consumer/ComplaintConsultInfo.vue"],e)},meta:{title:"投诉咨询信息",auth:!0},key:-1},{path:"/complaintconsultdetail/:cumcompconsicode",component:function(e){return require(["../components/page/consumer/ComplaintConsultDetail.vue"],e)},meta:{title:"投诉咨询详情",auth:!0},key:-1}],menuList=[{icon:"iconfont icon3_icon_home",index:"consumerPage",title:"首页"},{icon:"iconfont iconicon_qiye",index:"complaintconsultquery",title:"我的投诉咨询"},{icon:"iconfont iconicon_qiye",index:"riskWarning",title:"风险预警"},{icon:"iconfont iconicon_qiye",index:"commodityList",title:"商品榜单"},{icon:"iconfont iconicon_qiye",index:"traceabilityInfo",title:"溯源资讯"},{icon:"iconfont iconicon_qiye",index:"helpcenter",title:"帮助中心"},{icon:"iconfont iconicon_qiye",index:"usercenter",title:"个人中心"},{index:"complaint",title:"消费者投诉咨询处理"},{index:"complaintconsultinfo",title:"消费者投诉咨询信息"}],_default={routerList:routerList,menuList:menuList};exports.default=_default;