"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _axios=_interopRequireDefault(require("./axios")),_config=require("./config.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default={upload:function(e){_axios.default.post("/access/".concat(_config.modulename,"//GTCCOMMATTACH10"),e,{"Content-Type":"multipart/form-data"})},loginFormat:function(e){return _axios.default.post("/access/".concat(_config.modulename,"/FRONTCOMMLOGIN010"),e)},logoutFormat:function(e){return _axios.default.get("/access/".concat(_config.modulename,"/FRONTCOMMLOGIN020"),e)},isLogout:function(e){return _axios.default.get("/access/".concat(_config.modulename,"/FRONTCOMMLOGIN030"),e)},getUserMenus:function(e){return _axios.default.get("/access/".concat(_config.modulename,"/FRONTCOMMMENU010"),e)},getUserInfo:function(e){return _axios.default.get("/access/".concat(_config.modulename,"/FRONTCOMMUSER010"),e)},modifyPwd:function(e){return _axios.default.post("/access/".concat(_config.modulename,"/FRONTCOMMUSER020"),e)},getBackPwd:function(e){return _axios.default.post("/access/".concat(_config.modulename,"/FRONTCOMMUSER030"),e)},sendPhoneCode:function(e){return _axios.default.post("/access/".concat(_config.modulename,"/FRONTCOMMAUTHCODE020"),e)},sendEmail:function(e){return _axios.default.post("/access/".concat(_config.modulename,"/FRONTCOMMAUTHCODE030"),e)},checkCode:function(e){return _axios.default.post("/access/".concat(_config.modulename,"/FRONTCOMMAUTHCODE040"),e)},generateCode:function(e){return _axios.default.post("/access/".concat(_config.modulename,"/FRONTCOMMCAPTHA010"),e)},channelList:function(e){return _axios.default.post("/access/".concat(_config.modulename,"/FRONTCOMMCMS010"),e)},columnList:function(e){return _axios.default.post("/access/".concat(_config.modulename,"/FRONTCOMMCMS020"),e)},generateCode2:function(e){return _axios.default.post("/access/".concat(_config.modulename,"/FRONTCOMMAUTHCODE010"),e)},getIdentificationList:function(){return _axios.default.post("/access/".concat(_config.modulename,"/FRONTCOMMAUTHCODE010"),params)},getCodeList:function(e){return _axios.default.post("/access/FRONT-COMM/FRONTCOMMCODE010",e)},getDictionaryList:function(e){return _axios.default.post("/access/FRONT-COMM/FRONTCOMMDICT010",e)}};exports.default=_default;