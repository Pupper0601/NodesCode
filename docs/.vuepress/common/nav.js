// nav
const javaNav = require("../nav/javaNav");
const pythonNav = require("../nav/pythonNav");
const databaseNav = require("../nav/databaseNav");

const linuxNav = require("../nav/linuxNav");
const softwareNav = require("../nav/softwareNav");

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
  databaseNav,  // 数据库导航

  linuxNav, // linux导航
  softwareNav,  // 软件测试

  frontEnd,  // 前端导航
  toolNav,  // 工具导航 
  moreNav,   // 更多导航
  indexNav,   //索引导航
  {
    text: '留言区', link: '/message-area/'
  },
]
