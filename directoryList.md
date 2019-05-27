|-- teacher
    |-- index.html // 源html
    |-- package-lock.json // webpack配置项目
    |-- package.json // webpack配置项目
    |-- README.md
    |-- build // webpack打包配置
    |   |-- build.js
    |   |-- check-versions.js
    |   |-- logo.png
    |   |-- utils.js
    |   |-- vue-loader.conf.js
    |   |-- webpack.base.conf.js
    |   |-- webpack.dev.conf.js
    |   |-- webpack.prod.conf.js
    |-- config // webpack-dev(serve)配置
    |   |-- dev.env.js
    |   |-- index.js
    |   |-- prod.env.js
    |   |-- test.env.js
    |-- dist // 打包输入文件夹
    |   |-- index.html
    |   |-- static
    |-- src // 本地目录
    |   |-- App.vue // 根节点
    |   |-- main.js
    |   |-- package.json
    |   |-- api // 接口管理
    |   |   |-- common.js
    |   |   |-- home.js
    |   |   |-- jdkFun.js
    |   |   |-- notice.js
    |   |   |-- seatwork.js
    |   |   |-- timeTable.js
    |   |   |-- user.js
    |   |-- assets // 图片资源
    |   |-- components // 公共组件目录
    |   |   |-- chatFun.vue
    |   |   |-- funCombo.vue
    |   |   |-- jdkFunction.vue
    |   |   |-- personList.vue
    |   |-- page // 登录页 404 等不需要验证即可查看的页面
    |   |   |-- login
    |   |       |-- index.vue
    |   |       |-- components
    |   |           |-- userlogin.vue
    |   |-- router
    |   |   |-- axios.js // axios请求封装
    |   |   |-- index.js // 路由封装
    |   |   |-- path
    |   |   |   |-- index.js
    |   |   |-- views
    |   |       |-- index.js
    |   |-- store // vuex
    |   |   |-- index.js
    |   |   |-- modules // 模块化vuex
    |   |       |-- checkroll.js
    |   |       |-- common.js
    |   |       |-- fun.js
    |   |       |-- person.js
    |   |       |-- user.js
    |   |-- style // 全局的scss
    |   |   |-- index.scss
    |   |   |-- timeTable.scss
    |   |-- util
    |   |   |-- util.js
    |   |-- views // 主要页面
    |       |-- index.vue
    |       |-- bulletin
    |       |   |-- index.vue
    |       |   |-- components
    |       |       |-- bulletinDetail.vue
    |       |-- chat
    |       |   |-- index.vue
    |       |   |-- components
    |       |       |-- addressList.vue
    |       |       |-- chatDetail.vue
    |       |       |-- chatList.vue
    |       |       |-- groupChat.vue
    |       |-- checkroll
    |       |   |-- index.vue
    |       |   |-- components
    |       |       |-- checkroll.vue
    |       |       |-- clash.vue
    |       |       |-- scheduling.vue
    |       |       |-- temporary.vue
    |       |-- home
    |       |   |-- index.vue
    |       |-- notice
    |       |   |-- index.vue
    |       |   |-- components
    |       |       |-- linkman.vue
    |       |       |-- noticeDetail.vue
    |       |       |-- written.vue
    |       |-- phone
    |       |   |-- index.vue
    |       |-- remark
    |       |   |-- index.vue
    |       |   |-- components
    |       |       |-- classRemark.vue
    |       |       |-- grade.vue
    |       |-- seatwork
    |       |   |-- index.vue
    |       |-- student
    |       |   |-- index.vue
    |       |   |-- components
    |       |       |-- addStudent.vue
    |       |       |-- addVisit.vue
    |       |       |-- myStudent.vue
    |       |       |-- visit.vue
    |       |-- timeTable
    |       |   |-- index.vue
    |       |   |-- src
    |       |       |-- calendar.js
    |       |       |-- calendar.vue
    |       |       |-- index.js
    |       |-- transcript
    |       |   |-- index.vue
    |       |   |-- components
    |       |       |-- chart.vue
    |       |       |-- report.vue
    |       |       |-- selectClass.vue
    |       |-- upload
    |       |   |-- index.vue
    |       |-- user
    |           |-- index.vue
    |           |-- components
    |               |-- changePassword.vue
    |               |-- payroll.vue
    |-- static // 一些资源，此目录下的资源不会被压缩
    |   |-- .gitkeep
    |   |-- config.js // base_url 配置
    |   |-- favicon.ico
    |   |-- js
    |       |-- aliyun-oss-sdk.min.js
