(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22207536"],{"0abc":function(t,e,n){"use strict";n("d99a")},8248:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-container"},[n("div",[n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),n("h5",{staticClass:"tag"},[n("span",{staticClass:"text"},[t._v(" 标签:")]),t._v(t._s(t.tag))])]),n("div",{staticClass:"content",attrs:{id:"content"}}),n("div",{staticClass:"time"},[t._v(t._s(t.time))])])},a=[],s=(n("a14a"),{data:function(){return{list:[],time:"",title:"",content:"",tag:""}},computed:{},beforeMount:function(){this.articleDetail(),marked.setOptions({renderer:new marked.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1})},methods:{articleDetail:function(){var t=this,e=this.$route.query.id,n=new AV.Query("article");n.get(e).then((function(e){t.time=e.get("time")?e.get("time").toLocaleString():e.createdAt.toLocaleString(),t.title=e.get("title"),t.content=marked(e.get("content")),document.getElementById("content").innerHTML=t.content,t.tag=e.get("tag")}))}}}),c=s,r=(n("0abc"),n("c701")),o=Object(r["a"])(c,i,a,!1,null,"c28b5b92",null);e["default"]=o.exports},d99a:function(t,e,n){}}]);