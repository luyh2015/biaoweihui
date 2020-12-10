const APP_ID = 'bHcPmqNDLL7lUoSs8F4E67t1-gzGzoHsz'
const APP_KEY = 'wDeBQy6hO43xoQFhqWehwL2W'
window.AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
    serverURLs: {
        push: 'https://avoscloud.com',
        stats: 'https://avoscloud.com',
        engine: 'https://avoscloud.com',
        api: 'https://avoscloud.com',
    },
});
//标签
const tagStr = '首页,GitHub,Node.js,Web,iOS,ReactNative,Swift,MongoDB,Vue,HTML,JavaScript,日常踩坑,动漫,工具,编程疑问,游戏,翻译,算法,书,非技术文章,我'
