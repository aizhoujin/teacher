export default [{
  path: '/',
  redirect: '/index',
  name: 'HelloWorld',
  component: () => import('@/views/index/index.vue')
},{
  path: '/index',
  name: 'index',
  component: () => import('@/views/index/index.vue')
}]
