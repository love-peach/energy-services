import Vue from 'vue'
import Router from 'vue-router'
import CustomLayout from '@/components/CustomLayout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: CustomLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue')
        },
        {
          path: '/use',
          name: '智慧用能',
          component: () => import(/* webpackChunkName: "Use" */ './views/Use.vue')
        },
        {
          path: '/data',
          name: '能源数据',
          component: () => import(/* webpackChunkName: "Data" */ './views/data/Data.vue'),
          redirect: '/data/identity',
          children: [
            {
              path: '/data/identity',
              name: '用能特性分析',
              component: () => import(/* webpackChunkName: "DataIdentity" */ './views/data/analysis/Identity.vue')
            },
            {
              path: '/data/change',
              name: '产业变化分析',
              component: () => import(/* webpackChunkName: "DataChange" */ './views/data/analysis/Change.vue')
            },
            {
              path: '/data/right',
              name: '能效对标分析',
              component: () => import(/* webpackChunkName: "DataRight" */ './views/data/analysis/Right.vue')
            },
            {
              path: '/data/savings',
              name: '节能减排分析',
              component: () => import(/* webpackChunkName: "DataSavings" */ './views/data/analysis/Savings.vue')
            },
            {
              path: '/data/unit',
              name: '用能单元分析',
              component: () => import(/* webpackChunkName: "DataUnit" */ './views/data/analysis/Unit.vue')
            }
          ]
        },
        {
          path: '/finance',
          name: '能源金融',
          component: () => import(/* webpackChunkName: "Finance" */ './views/Finance.vue')
        },
        {
          path: '/news',
          name: '产业资讯',
          component: () => import(/* webpackChunkName: "News" */ './views/News.vue')
        },
        {
          path: '/chanel',
          name: '专题频道',
          component: () => import(/* webpackChunkName: "Chanel" */ './views/Chanel.vue')
        },
        {
          path: '/market',
          name: '能源市场',
          component: () => import(/* webpackChunkName: "Market" */ './views/Market.vue')
        },
        {
          path: '/about',
          name: '关于我们',
          component: () => import(/* webpackChunkName: "About" */ './views/About.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "Login" */ './views/Login.vue')
    }
  ]
})
