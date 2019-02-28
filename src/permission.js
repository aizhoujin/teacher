import router from './router/index'
import store from './store'

import setTitle from '@/util/util'
import {asyncRouterMap} from './router/index'

router.addRoutes(asyncRouterMap)
console.log(asyncRouterMap)

router.beforeEach((to, from, next) => {
  console.log(to,from)
})
router.afterEach((to, from) => {
  setTimeout(() => {
  }, 0);
})
