import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/page/login/index.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index/index.vue'),
    }
  ]
})
