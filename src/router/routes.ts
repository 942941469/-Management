// 常量路由
export const constantRoute = [
  {
    // 登录
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue'),
  },
  {
    // 首页
    path: '/',
    name: 'layout',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    // 404
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue'),
  },
  {
    // 任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
  },
]
