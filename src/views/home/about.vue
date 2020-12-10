<!-- home -->
<template>
  <div class="about-container">
    <van-sticky>
      <van-row style="background: #fff">
        <van-col span="12" class="wechat-text">添加微信好友了解详情</van-col>
        <van-col span="12" style="text-align: right">
          <van-button
            type="primary"
            v-clipboard:copy="13938553923"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError">添加微信</van-button>
        </van-col>
      </van-row>
    </van-sticky>
    <van-image src="https://jmy-pic.wejianzhan.com/0/pic/9006d24b19a8025ae4a3e2d010ac2def.gif">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <div class="online-wrap">
      <div class="online-title">在线快速获取取证资料</div>
      <div class="online-cnt">已有{{ submitCnt }}人获取</div>
    </div>
    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field v-model="form.name" name="pattern" placeholder="请输入姓名" :rules="[{ pattern, message: '请输入正确的姓名' }]"/>
      <!-- 通过 validator 进行函数校验 -->
      <van-field v-model="form.phone" name="validator" placeholder="请输入手机号" :rules="[{ validator, message: '请输入正确的手机号' }]"/>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">快速获取资料</van-button>
      </div>
    </van-form>

    <van-notice-bar left-icon="volume-o" :scrollable="false">
      <van-swipe vertical class="notice-swipe" :autoplay="2000" :show-indicators="false">
        <van-swipe-item>
          <van-row>
            <van-col span="8">胡*丹</van-col>
            <van-col span="8">152****0605</van-col>
            <van-col span="8" style="text-align: right">10分钟前</van-col>
          </van-row>
        </van-swipe-item>
        <van-swipe-item>
          <van-row>
            <van-col span="8">王*五</van-col>
            <van-col span="8">152****0605</van-col>
            <van-col span="8" style="text-align: right">20分钟前</van-col>
          </van-row>
        </van-swipe-item>
      </van-swipe>
    </van-notice-bar>
    <van-image src="https://jmy-pic.wejianzhan.com/0/pic/c097bf066ba257c7d9be86d0a8bc15a6.jpg">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>

    <div class="online-wrap">
      <div class="online-title">线上办理优惠名额仅剩50席</div>
      <div class="online-cnt">已有{{ submitCnt }}人提交</div>
    </div>
    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field v-model="form.name" name="pattern" placeholder="请输入姓名" :rules="[{ pattern, message: '请输入正确的姓名' }]"/>
      <!-- 通过 validator 进行函数校验 -->
      <van-field v-model="form.phone" name="validator" placeholder="请输入手机号" :rules="[{ validator, message: '请输入正确的手机号' }]"/>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

    <van-image src="https://jmy-pic.wejianzhan.com/0/pic/dda9ba88db17d6cbb6f1cca422d4bbf8.gif">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <van-button class="phone" icon="phone-o" round plain block type="warning">13938553923</van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Form, Field, Toast, Image as VanImage, Loading, Checkbox, NoticeBar, Swipe, SwipeItem, Col, Row, Sticky, Dialog } from 'vant';
import VueClipboard from 'vue-clipboard2'
Vue.use(Form)
Vue.use(Field)
Vue.use(Toast)
Vue.use(VanImage)
Vue.use(Loading)
Vue.use(Checkbox)
Vue.use(NoticeBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Sticky)
Vue.use(Dialog)
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

export default {
  data() {
    return {
      value1: '',
      value2: '',
      form: {
        name: '',
        phone: ''
      },
      pattern: /^[\u4E00-\u9FA5]{2,4}$/, // 姓名正则校验
      submitCnt: 1200 // 已提交的资料数量
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(val);
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
    onCopy: function(e) {
      // alert('You just copied: ' + e.text)
      Dialog.alert({
        title: '',
        message: '复制成功，添加好友了解产品',
        theme: 'round-button',
        confirmButtonText: '知道了'
      }).then(() => {
        // on close
      })
    },
    onError: function(e) {
      alert('Failed to copy texts')
    }
  }
}
</script>
<style lang="scss">
.about-container {

  .online-wrap {
    text-align: center;
    background-color: #fff;
    padding: 20px 0;
  }

  .online-cnt {
    font-size: 0.2rem;
    font-weight: 400;
    padding: 5px;
    color: #aaa;
  }

  .online-title {
    font-size: 0.5rem;
    font-weight: 600;
  }

  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }

  /deep/ .van-notice-bar__content.van-ellipsis {
    width: 100%;
  }

  .wechat-text {
    line-height: 1.2rem;
    padding-left: 10px;
    color: #333;
    font-size: 0.35rem;
  }

  .phone {
    margin: 20px auto;
    width: 80%;
  }
}
</style>
