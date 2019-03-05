// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import store from './store'
import axios from './router/axios'
import VueAxios from 'vue-axios'
import './style/index.scss'
import * as urls from '../static/config';
import {iconfontUrl, iconfontVersion} from "../static/config";
import {loadStyle} from "./util/util";

Vue.config.productionTip = false;

Vue.use(MintUI);
Vue.use(ElementUI, {size: 'small'});
Vue.use(VueAxios, axios);

Object.keys(urls).forEach(key => {
  Vue.prototype[key] = urls[key];
})

iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele));
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
// export function createApp() {
//   const app = new Vue({
//     router,
//     store,
//     render: h => h(App)
//   })
//   return {
//     app,
//     router,
//     store
//   }
// }
