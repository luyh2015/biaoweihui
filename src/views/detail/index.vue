<!-- home -->
<template>
  <div class="index-container">
    <div>
        <h1 class="title">{{ title }}</h1>
        <h5 class="tag"><span class="text"> 标签:</span>{{ tag }}</h5>
        
    </div>
    <div id="content" class="content"></div>
    <div class="time">{{ time }}</div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      list: [],
      time: '',
      title: '',
      content: '',
      tag: '',
    }
  },

  computed: {},
  beforeMount() {
    this.articleDetail();
    /*eslint-disable*/
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true, //开启github的markdown
      tables: true, //支持Github表格，必须打开gfm选项
      breaks: true, //支持Github换行符，必须打开gfm选项
      pedantic: false, //只解析符合markdown.pl定义的，不修正markdown的错误
      sanitize: false, //忽略HTML标签
      smartLists: true,//使用新语法
      smartypants: false,//使用新语法，比如在引用语法中加入破折号。
    })
  },
  methods: {
    articleDetail() {
      let id = this.$route.query.id;
      console.log(`id`, id);
      /*eslint-disable*/
      const query = new AV.Query('article');
      query.get(id).then((result) => {
        console.log(`res`, result);
        this.time = result.get('time') ? result.get('time').toLocaleString() : result.createdAt.toLocaleString();
        this.title = result.get('title');
        console.log(marked);
        this.content = marked(result.get('content'));
        document.getElementById('content').innerHTML = this.content
        this.tag = result.get('tag');
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  .tag {
    text-align: right;
    padding-right: 20px;
    opacity: 0.7;

    .text {
      padding-right: 5px;
      font-weight: normal;
      font-size: 12px;
    }
  }

  .title {
    text-align: center;
  }

  .content {
    line-height: 28px;
    margin: 10px;
  }

  .time {
    padding-right: 20px;
    text-align: right;
    opacity: 0.6;
  }

  img {
    overflow: hidden;
  }
}
</style>
