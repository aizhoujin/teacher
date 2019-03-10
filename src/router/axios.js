/**
 *
 * http配置
 *
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import store from '../store'
import router from '../router/index'

axios.defaults.timeout = 10000;
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.post['from'] = 'TEAW';
let cfg, msg;
msg = '服务器君开小差了，请稍后再试';
//HTTPrequest拦截
axios.interceptors.request.use(config => {
  // if (store.getters.token) {
  // 	config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  if (config.method === 'post') {
    // config.data = qs.stringify(config.data);
  }
  return config
}, error => {
  console.log('err' + error)// for debug
  return Promise.reject(error)
})
//HTTPresponse拦截
axios.interceptors.response.use(data => {
  console.log(data)
  return data
}, error => {
  if (error.response.status == 500) {
    window.localStorage.clear();
    window.reload();
  }
  return Promise.reject(new Error(msg));

})

export default axios
