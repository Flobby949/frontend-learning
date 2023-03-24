import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyView from '../views/ToDoView.vue'
import ItemDetailView from '../views/ItemDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo',
      name: 'todo',
      component: MyView
    },
    {
      // 动态路由
      path: '/items/:id',
      name: 'item-detail',
      props: true,
      component: ItemDetailView
    }
  ]
})

export default router
