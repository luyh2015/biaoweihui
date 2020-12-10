<!-- home -->
<template>
  <div class="index-container">
    <van-tabs  v-model="activeTab" class="tabs-wrap" sticky swipeable animated>
      <van-tab v-for="(tab, index) in tabList" :title="tab" :key="index">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
        <van-list class="list-wrap" v-model="loading" :finished="finished" finished-text="~我是有底线的~" @load="articleList">
          <van-cell value="内容" is-link v-for="(item,index) in list" :key="index" :title="item.title"  @click="articleDetail(item.id)">
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
              <span class="custom-title">{{ item.title }}</span><br />
              <span class="content-title">{{ item.content }}</span>
            </template>
            <van-tag type="danger">置顶</van-tag>
          </van-cell>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import _ from 'lodash'
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload, Tag, Tab, Tabs } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Tag)
Vue.use(Tab)
Vue.use(Tabs)
export default {

  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      images: [
        'https://zfcenter.oss-cn-beijing.aliyuncs.com/static/biaoweihui/img/1.jpg',
        'https://zfcenter.oss-cn-beijing.aliyuncs.com/static/biaoweihui/img/2.jpg'
      ],
      tabList: ['简介', '食字', '妆字', '健字', '知识', '消字', '械字', '药字', '特字', '商标', '专利', '品牌'],
      activeTab: ''
    }
  },

  computed: {},

  mounted() {
    // this.articleList()
  },

  methods: {
    articleList() {
      // 异步更新数据
      /*eslint-disable*/
      const query = new AV.Query('article')
      query.addDescending('createdAt')
      query.find().then((res) => {
        console.log(`res`, res);
        this.list = []
        _.forEach(res, element => {
          element.attributes['id'] = element.id;
          element.attributes.content = element.attributes.content.replaceAll('&ensp;', '');
          this.list.push(element.attributes)
        })
        this.loading = false;
        this.finished = true;
      })
    },
    articleDetail(id) {
      this.$router.push({path: `/detail?id=${id}`})
    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  .warpper {
    padding: 12px;
    background: #fff;
    .demo-home__title {
      margin: 0 0 6px;
      font-size: 32px;
      .demo-home__title img,
      .demo-home__title span {
        display: inline-block;
        vertical-align: middle;
      }
      img {
        width: 32px;
      }
      span {
        margin-left: 16px;
        font-weight: 500;
      }
    }
    .demo-home__desc {
      margin: 0 0 20px;
      color: rgba(69, 90, 100, 0.6);
      font-size: 14px;
    }
  }

  .van-swipe-item img {
    width: 100vw;
    max-height: 187.5px;
  }

  // .list-wrap {
  //   min-height: calc(100vh - 200px);
  // }

  .custom-title {
    font-size: 0.4rem;
    font-weight: 600;
  }

  .content-title {
    font-size: 0.3rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  /deep/ .van-cell__title {
    width: 80%;
  }

  /deep/ .van-cell__title {
    flex: none;
  }

  .tabs-wrap {
    margin: 2px;
  }
}
</style>
