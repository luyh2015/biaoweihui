/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/code',
        name: 'Code',
        component: () => import('@/views/code/index'),
        meta: { title: '批号', keepAlive: false }
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import('@/views/product/index'),
        meta: { title: '生产', keepAlive: false }
      },
      {
        path: '/seal',
        name: 'Seal',
        component: () => import('@/views/seal/index'),
        meta: { title: '营销', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/home/about'),
        meta: { title: '咨询', keepAlive: false }
      }
    ]
  }
]
