import { createRouter, createWebHistory } from 'vue-router'
import ReactiveView from '../views/ReactiveView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/react',
      name: 'reactiveView',
      component: ReactiveView
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/ComponentView.vue')
    }
  ]
})

export default router
