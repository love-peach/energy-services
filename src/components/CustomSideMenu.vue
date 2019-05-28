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
          name: '用能特性分析',
          path: '/data/identity'
        },
        {
          name: '产业变化分析',
          path: '/data/change'
        },
        {
          name: '能效对标分析',
          path: '/data/right'
        },
        {
          name: '节能减排分析',
          path: '/data/savings'
        },
        {
          name: '用能单元分析',
          path: '/data/unit'
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
  text-align: center;
  // line-height: 60px;
  cursor: pointer;
}
</style>
