(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22105ba4"],{4130:function(t,e,n){},"47a5":function(t,e,n){"use strict";n("4130")},e6e2:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-container"},[t._m(0),t._l(t.list,(function(t){return n("van-cell",{key:t,attrs:{icon:"success",title:t}})}))],2)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"warpper"},[n("h1",{staticClass:"demo-home__title"},[n("img",{attrs:{src:"https://www.sunniejs.cn/static/weapp/logo.png"}}),n("span",[t._v(" VUE H5开发模板1")])]),n("h2",{staticClass:"demo-home__desc"},[t._v(" A vue h5 template with Vant UI ")])])}],a=(n("7db0"),n("4160"),n("159b"),n("2ef0")),c=n.n(a),u={data:function(){return{list:["Vue-cli4","配置多环境变量","VantUI 组件按需加载","Sass 全局样式","Webpack 4","Vuex 状态管理","Axios 封装及接口管理","Vue-router","Webpack 4 vue.config.js 基础配置","配置 proxy 跨域","配置 alias 别名","配置 打包分析","配置 externals 引入 cdn 资源","去掉 console.log","splitChunks 单独打包第三方模块","添加 IE 兼容","Eslint+Pettier 统一开发规范"]}},computed:{},mounted:function(){this.testQuery()},methods:{testQuery:function(){var t=this,e=new AV.Query("article");e.addDescending("createdAt"),e.find().then((function(e){t.list=[],c.a.forEach(e,(function(e){t.list.push(e.attributes.content)}))}))}}},o=u,r=(n("47a5"),n("2877")),l=Object(r["a"])(o,s,i,!1,null,"2d6709ba",null);e["default"]=l.exports}}]);