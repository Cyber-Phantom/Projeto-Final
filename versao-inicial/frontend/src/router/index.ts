import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'adminPages',
      component: () => import('@/components/admin/AdminPages.vue')
    }
  ]
})

export default router
