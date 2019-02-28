/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 老项目域名地址
 * khglUrl: 客户管理域名地址
 * dicUrl : 字典服务器地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * welUrl :默认欢迎页
 *
 */


let baseUrl = '';
let base_baseUrl = '';
let iconfontVersion = ['567566_r22zi6t8noas8aor'];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
let codeUrl = `${baseUrl}/code`;
const env = process.env;
//
// // 开发环境
baseUrl = `http://localhost:8080/wechat`;
base_baseUrl = `http://localhost:80/base`;

//测试环境
// baseUrl = `http://172.19.204.32/xxs`;
// base_baseUrl = `http://172.19.204.32/base`;

//正式环境
// baseUrl = `http://103.241.165.246:8600/xxs`;
// base_baseUrl = `http://103.241.165.246:8600/base`;
export {
  baseUrl,
  base_baseUrl,
  iconfontUrl,
  iconfontVersion,
  codeUrl,
  env
}
