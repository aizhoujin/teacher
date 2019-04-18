export default [{
  path: '/index',
  name: 'index',
  component: () => import('@/views/index.vue'),
  redirect: '/index/home',
  children: [{
    path: "/index/home",
    name: 'home',
    component: () => import('@/views/home/index.vue')
  }, {
    path: "/index/chat",
    name: 'chat',
    component: () => import('@/views/chat/index.vue')
  }, {
    path: "/index/user",
    name: 'user',
    component: () => import('@/views/user/index.vue')
  }]
}, {
  path: '/bulletin',
  name: 'bulletin',
  component: () => import('@/views/bulletin/index.vue')
}, {
  path: '/bulletinDetail/:id',
  name: '公告详情',
  component: () => import('@/views/bulletin/components/bulletinDetail.vue')
}, {
  path: '/notice',
  name: '通知列表',
  component: () => import('@/views/notice/index.vue')
}, {
  path: '/noticeDetail/:id',
  name: '通知详情',
  component: () => import('@/views/notice/components/noticeDetail.vue')
}, {
  path: '/written',
  name: '撰写通知',
  component: () => import('@/views/notice/components/written.vue')
}, {
  path: '/linkman',
  name: '添加通知对象',
  component: () => import('@/views/notice/components/linkman.vue')
}, {
  path: '/seatwork',
  name: '布置作业',
  component: () => import('@/views/seatwork/index.vue')
}, {
  path: '/upload',
  name: '上传',
  component: () => import('@/views/upload/index.vue')
}, {
  path: '/student',
  name: '意向学员',
  component: () => import('@/views/student/index.vue')
}, {
  path: '/addStudent',
  name: '新增意向学员',
  component: () => import('@/views/student/components/addStudent.vue')
}, {
  path: '/changePassword',
  name: '修改密码',
  component: () => import('@/views/user/components/changePassword.vue')
}, {
  path: '/payroll',
  name: '工资单',
  component: () => import('@/views/user/components/payroll.vue')
}, {
  path: '/timeTable',
  name: '我的课表',
  component: () => import('@/views/timeTable/index.vue')
}, {
  path: '/checkroll',
  name: '上课点名',
  component: () => import('@/views/checkroll/index.vue')
}, {
  path: '/temporary',
  name: '临时排课',
  component: () => import('@/views/checkroll/components/temporary.vue')
}]
