export default [{
  path: '/index',
  name: '老师端',
  component: () => import('@/views/index.vue'),
  redirect: '/index/home',
  children: [{
    path: "/index/home",
    name: '主页',
    component: () => import('@/views/home/index.vue')
  }, {
    path: "/index/user",
    name: '我的',
    component: () => import('@/views/user/index.vue')
  }]
}, {
  path: "/index/chat",
  name: '微聊',
  component: () => import('@/views/chat/index.vue'),
  redirect: '/index/chat/chatList',
  children: [{
    path: "/index/chat/chatList",
    name: "会话列表",
    component: () => import('@/views/chat/components/chatList')
  }, {
    path: "/index/chat/addressList",
    name: "联系人",
    component: () => import('@/views/chat/components/addressList')
  }, {
    path: "/index/chat/groupChat",
    name: "群聊",
    component: () => import('@/views/chat/components/groupChat')
  }, {
    path: "/index/chat/chatDetail",
    name: "聊天",
    component: () => import('@/views/chat/components/chatDetail')
  }]
}, {
  path: '/bulletin',
  name: '公告列表',
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
}, {
  path: '/phone',
  name: '班级电话簿',
  component: () => import('@/views/phone/index.vue')
}, {
  path: '/remark',
  name: '上课点评',
  component: () => import('@/views/remark/index.vue')
}, {
  path: '/transcript',
  name: '录入成绩单',
  component: () => import('@/views/transcript/index.vue')
}, {
  path: '/scheduling',
  name: '临时排课信息编辑',
  component: () => import('@/views/checkroll/components/scheduling.vue')
}, {
  path: '/clash',
  name: '检查冲突',
  component: () => import('@/views/checkroll/components/clash.vue')
}, {
  path: '/checkName',
  name: '上课点名',
  component: () => import('@/views/checkroll/components/checkroll.vue')
}]
