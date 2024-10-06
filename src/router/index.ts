import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Retrieve',
      component: () => import('@/views/RetrievewFileView.vue')
    },
    {
      path: '/send',
      name: 'Send',
      // 直接使用动态导入，不再包裹在 defineAsyncComponent 中
      component: () => import('@/views/SendFileView.vue')
    }
  ]
})

// 预加载 SendFileView 组件
import('../views/SendFileView.vue')

export default router
