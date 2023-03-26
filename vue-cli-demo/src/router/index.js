import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutView from '../views/LayoutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ToDoView from '../views/ToDoView.vue'
import ItemDetailView from '../views/ItemDetailView.vue'
import ITView from '../views/ITView.vue'
import BackendView from '../views/BackendView.vue'
import FrontendView from '../views/FrontendView.vue'
import IosView from '../views/IosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/todo',
          name: 'todo',
          component: ToDoView
        },
        {
          // 动态路由
          path: '/items/:id',
          name: 'item-detail',
          props: true,
          component: ItemDetailView
        },
        {
          path: '/it',
          name: 'it',
          component: ITView,
          redirect: '/it/backend',
          children: [
            {
              path: '/it/backend',
              name: 'backend',
              component: BackendView
            },
            {
              path: '/it/frontend',
              name: 'frontend',
              component: FrontendView
            },
            {
              path: '/it/ios',
              name: 'ios',
              component: IosView
            },
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router
