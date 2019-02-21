import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/pages/main'
import test from '@/pages/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: main,
      children:  [{
        path: '/test',
        name: 'test',
        component: test
      }]
    },{
      path: '/ttt',
      name: 'ttt',
      component: HelloWorld,
    }
  ]
})
