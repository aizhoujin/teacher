import Vue from 'vue'
import Router from 'vue-router';
import PageRouter from './path/'
import ViewsRouter from './views/'
import setTitle from '../util/util'

Vue.use(Router)

let router = new Router({
  routes: [].concat(PageRouter, ViewsRouter),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  },
})

function judgeAuth() {
  let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  if (userInfo && userInfo.userId) {
    return true
  } else {
    return false
  }
}

router.beforeEach((to, from, next) => {
  // next();
  if (window.navigator.onLine) {
    let authAllowTag = judgeAuth();
    if (to.fullPath != '/login') {
      if (authAllowTag) {
        if (to.fullPath == '/') {
          next({path: '/index'})
          return false
        }
        next();
      } else {
        next({
          path: '/login'
        })
        return false
      }
    } else {
      next()
    }
  } else {
    window.location.reload()
  }
})

router.afterEach((to, from) => {
  setTimeout(() => {
    console.log(to.name)
    window.document.title = to.name
  }, 0)
})

export default router


