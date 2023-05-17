// 常量路由
export const constantRoute = [
  {
    // 登录
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    // 首页
    path: '/',
    name: 'layout',
    component: () => import('@/views/Home.vue'),
  },
  {
    // 404
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
  {
    // 任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
  },
]
