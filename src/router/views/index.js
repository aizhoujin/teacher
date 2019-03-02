export default [{
  path: '/index',
  name: 'index',
  component: () => import('@/views/index.vue'),
  redirect: '/index/home',
  children: [{
    path: "/index/home",
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },{
    path: "/index/chat",
    name: 'chat',
    component: () => import('@/views/chat/index.vue')
  },{
    path: "/index/user",
    name: 'user',
    component: () => import('@/views/user/index.vue')
  },]
}]
