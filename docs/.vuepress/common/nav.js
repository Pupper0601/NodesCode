// nav
const javaNav = require("../nav/javaNav");
const pythonNav = require("../nav/pythonNav");

const buildNav = require("../nav/buildNav");

const databaseNav = require("../nav/databaseNav");

const linuxNav = require("../nav/linuxNav");
const softwareNav = require("../nav/softwareNav");

const tipsNav = require("../nav/tipsNav");

const toolNav = require("../nav/toolNav");
const frontEnd = require("../nav/frontEnd");
const indexNav = require("../nav/indexNav");
const moreNav = require("../nav/moreNav");
module.exports = [
  {
    text: '首页', link: '/'
  },
  javaNav,   //Java导航
  pythonNav,  // python 导航
  buildNav,   // 开发 导航
  databaseNav,  // 数据库导航

  linuxNav, // linux导航
  softwareNav,  // 软件测试

  tipsNav, // 零散小知识
  frontEnd,  // 前端导航
  toolNav,  // 工具导航 
  moreNav,   // 更多导航
  indexNav,   //索引导航
  {
    text: '留言区', link: '/message-area/'
  },
]
