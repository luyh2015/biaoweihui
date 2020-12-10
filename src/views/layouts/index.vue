<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="copy-right"> &copy {{ new Date().getFullYear() }} 国医互联中医药科技成果转化平台 版权所有</div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '批号',
          to: {
            name: 'Code'
          },
          icon: 'cluster-o'
        },
        {
          title: '生产',
          to: {
            name: 'Product'
          },
          icon: 'logistics'
        },
        {
          title: '营销',
          to: {
            name: 'Seal'
          },
          icon: 'new-arrival-o'
        },
        {
          title: '咨询',
          to: {
            name: 'About'
          },
          icon: 'user-o'
        }
      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>
<style lang="scss" scoped>
  .copy-right {
    font-size: 12px;
    color: rgba(195, 198, 202, 0.45);
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    height: 20px;
    line-height: 20px;
    // padding-left: 1.15rem;
    text-align: center;
    background-repeat: no-repeat;
    background-position: 0.9rem center;
    background-size: auto 18px;
  }
</style>
