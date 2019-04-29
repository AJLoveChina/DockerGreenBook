let path = require("path");
let assetsPath = path.resolve(__dirname, '../assets');

module.exports = {
    title: 'Docker绿皮书',
    description: 'Docker指南，Docker Guide book，看完这些小栗子让你认识并爱上Docker！',
    base: '/docker/',
    dest: path.resolve(__dirname, "../../docker"),
    head: [
        ['link', {rel: 'shortcut icon', type: "image/x-icon", href: '/nigeerhuox16.ico'}],
        ['script', {async : 'async', src: "/baidu-tongji.js"}],
    ],
    ga: "UA-70087663-3",
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': assetsPath
            }
        }
    },
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        nav: [
            {text: 'Github', link: 'https://github.com/AJLoveChina/DockerGreenBook'},
        ],
        repo: "https://github.com/AJLoveChina/DockerGreenBook",
        repoLabel: '查看源码',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        // 默认为 "Edit this page"
        editLinkText: '在 Github 上编辑此页',
        editLinks: true,
        lastUpdated: "最近一次更新时间",
        sidebar: [
            ["/", "写在前面"],
            ["/install/", "准备/安装"],
        ]
    }
};
