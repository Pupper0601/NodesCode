// 软件测试导航
module.exports = {
    text: '测试', link: '/test/',
    items: [
        {
            text: '软件测试',
            items: [
                { text: '自动化测试', link: '/interface/' },
                { text: '测试开发', link: '/exploit/' },
                { text: '性能测试', link: '/performance/' },
                { text: '安全测试', link: '/secure/' },
            ]
        },
        {
            text: '测试技术',
            items: [
                { text: '文件相关', link: '/files/' },
                { text: '日志相关', link: '/logs/' },
                { text: '服务相关', link: '/servers/' },
            ]
        }
    ]
}