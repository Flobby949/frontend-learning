// 引入
import { createRouter, createWebHashHistory } from "vue-router";

import Index from '~/pages/index.vue'
import Admin from '~/layout/admin.vue'
import Login from '~/pages/login.vue'
import NotFound from '~/pages/404.vue'
import sysAdmin from '~/pages/system/admin.vue'

// 路由数组
const routes = [
    {
        path: '/',
        name: 'admin',
        component: Admin,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: "index",
                component: Index,
                meta: {
                    title: '首页'
                }
            }
        ]
    },
    {
        path: '/login',
        name: "/login",
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: '/NotFound',
        component: NotFound,
        meta: {
            title: '页面丢失'
        }
    }
]

// 动态路由
const asyncRoutes = [
    {
        name: "/system/admin",
        path: "/system/admin",
        component: sysAdmin,
        meta: {
            title: '管理员管理',
        },
    },
    {
        name: "/system/role",
        path: "/system/role",
        component: () => import(`~/pages/system/role.vue`),
        meta: {
            title: '角色管理',
        },
    },
    {
        name: "/system/menu",
        path: "/system/menu",
        component: () => import(`~/pages/system/menu.vue`),
        meta: {
            title: '菜单管理',
        },
    },
    {
        name: "/resource/swipers",
        path: "/resource/swipers",
        component: () => import(`~/pages/resource/swipers.vue`),
        meta: {
            title: '轮播管理',
        },
    },
    {
        name: "/resource/news",
        path: "/resource/news",
        component: () => import(`~/pages/resource/news.vue`),
        meta: {
            title: '资讯管理',
        },
    },
    {
        name: "/resource/files",
        path: "/resource/files",
        component: () => import(`~/pages/resource/files.vue`),
        meta: {
            title: '文件管理',
        },
    }
]

// 创建路由对象
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 动态添加路由
export function addRoutes(menus) {
    // 是否有新的路由
    let hasNewRoutes = false

    const findAddRoutesByMenus = (arr) => {
        arr.forEach(element => {
            if (element.child && element.child.length > 0) {
                findAddRoutesByMenus(element.child)
            }
            let item = asyncRoutes.find(obj => obj.path == element.frontpath)
            if (item && !router.hasRoute(item.path)) {
                router.addRoute('admin', item)
                hasNewRoutes = true
            }
        });
    }

    findAddRoutesByMenus(menus)
    return hasNewRoutes;
}
