import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/pages/main.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: main,
      children:  [{
        path: 'order',
        name: '订单管理',
        component: () => import('@/pages/order/index')
      }]
    },
    {
      path:'/',
      component: main,
      children: [
        {
          path:'category',
          name:'品类管理',
          component: () => import('@/pages/category/index')
        }
      ]
    },
    {
      path:'/',
      component: main,
      children: [
        {
          path:'brand',
          name:'品牌管理',
          component: () => import('@/pages/brand/index')
        }
      ]
    }
  ]
})
