import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/pages/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: main,
      children:  [{
        path: '/',
        name: 'test',
        component: HelloWorld
      }]
    }
  ]
})
