// 引入
import { createRouter, createWebHashHistory } from "vue-router";

import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import Login from '~/pages/login.vue'
import NotFound from '~/pages/404.vue'

// 路由数组
const routes = [
    {
        path: '/',
        name:"index",
        component: Index
    },
    {
        path: '/about',
        name:"about",
        component: About
    },
    {
        path: '/login',
        name:"login",
        component: Login
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 导出
export default router