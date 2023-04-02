import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/react',
      name: 'react',
      component: () => import('../views/ReactiveView.vue')
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/ComponentView.vue')
    },
    {
      path: '/slot',
      name: 'SlotComponent',
      component: () => import('../views/SlotComponent.vue')
    },
    {
      path: '/refAndReactive',
      name: 'reactiveView',
      component: () => import('../views/RefAndReactive.vue')
    },
    {
      path: '/computed',
      name: 'ComputedView',
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: '/toRef',
      name: 'ToRefAndMore',
      component: () => import('../views/ToRefAndMore.vue')
    },
    {
      path: '/vueuse',
      name: 'VueUseView',
      component: () => import('../views/VueUseView.vue')
    },
    {
      path: '/watch',
      name: 'WatchView',
      component: () => import('../views/WatchView.vue')
    },
    {
      path: '/model',
      name: 'ModelView',
      component: () => import('../views/ModelView.vue')
    },
  ]
})

export default router
