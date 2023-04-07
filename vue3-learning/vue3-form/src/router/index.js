import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      redirect: '/simpleForm',
      children: [
        {
          path: '/simpleForm',
          name: 'SimpleFormView',
          component: () => import('../views/SimpleFormView.vue')
        },
        {
          path: 'category',
          name: 'category',
          component: () => import('../views/CategoryView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

export default router
