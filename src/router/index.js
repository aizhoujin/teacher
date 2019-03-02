import Vue from 'vue'
import Router from 'vue-router';
import PageRouter from './path/'
import ViewsRouter from './views/'

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
  if (window.navigator.onLine) {
    let authAllowTag = judgeAuth();
    if (to.fullPath != '/login') {
      if (authAllowTag) {
        if(to.fullPath == '/'){
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

export default router


