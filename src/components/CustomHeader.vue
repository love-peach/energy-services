<template>
  <ul class="menu-list">
    <router-link class="menu-list-item" v-for="menu in menuBar" :key="menu.path" tag="li" :to="{ path: menu.path }">{{ menu.name }}</router-link>
  </ul>
</template>

<script>
export default {
  name: 'CustomHeader',
  data () {
    return {
      menuBar: [
        {
          name: '网站首页',
          path: '/'
        },
        {
          name: '智慧用能',
          path: '/use'
        },
        {
          name: '能源数据',
          path: '/data'
        },
        {
          name: '能源金融',
          path: '/finance'
        },
        {
          name: '产业资讯',
          path: '/news'
        },
        {
          name: '专题频道',
          path: '/chanel'
        },
        {
          name: '能源市场',
          path: '/market'
        },
        {
          name: '关于我们',
          path: '/about'
        },
        {
          name: '登录',
          path: '/login'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}
.menu-list-item {
  display: inline-block;
  width: 100px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
</style>
