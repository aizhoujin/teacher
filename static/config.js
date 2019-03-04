
let baseUrl = '';
let base_baseUrl = '';
let iconfontVersion = ['567566_r22zi6t8noas8aor'];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
let codeUrl = `${baseUrl}/code`;
const env = process.env;
// 开发环境
// baseUrl = `http://localhost:8080/wechat`;

//测试环境
baseUrl = `http://tea.ngrok.eanfang.net:89/wechat`;
// baseUrl = `http://api.xiaoxunbang.com/wechat`;

export {
  baseUrl,
  base_baseUrl,
  iconfontUrl,
  iconfontVersion,
  codeUrl,
  env
}
