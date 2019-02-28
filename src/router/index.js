import Vue from 'vue'
import Router from 'vue-router';
// import PageRouter from './path/'
// import ViewsRouter from './views/'
//
// const _import = require('./_import');

Vue.use(Router)
// export default new VueRouter({
//   scrollBehavior(to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition
//     } else {
//       if (from.meta.keepAlive) {
//         from.meta.savedPosition = document.body.scrollTop;
//       }
//       return {
//         x: 0,
//         y: to.meta.savedPosition || 0
//       }
//     }
//   },
// });
//
// export const asyncRouterMap = [].concat(PageRouter, ViewsRouter)
// console.log(asyncRouterMap)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      name: 'HelloWorld',
      component: () => import('@/page/login/index.vue')
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



