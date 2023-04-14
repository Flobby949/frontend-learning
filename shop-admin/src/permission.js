import router from '~/router'

import { getToken } from '~/composables/token'
import { toast, showFullLoading, hideFullLoading } from '~/composables/util'
import { useAdminStore } from '~/store'

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
    // 进度条显示
    showFullLoading()

    const token = getToken()

    // 目标页面不是登录页，且没有token，跳回登录页面
    if (!token && to.path != '/login') {
        toast('请先登录', 'error')
        return next({ path: '/login' })
    }

    // 防止重复登录
    if (to.path == '/login' && token) {
        toast('请勿重复登录', 'error')
        return next({ path: from.path || '/' })
    }

    // 如果当前用户有token，获取用户信息，保存在 pinia
    const store = useAdminStore()
    const { getInfo } = store
    if (token) {
        getInfo()
    }

    // 设置页面标题
    let title = `admin - ${to.meta.title || ''}`
    document.title = title

    next()
})


// 路由后置守卫
router.afterEach((to, from) => {
    // 隐藏导航栏
    hideFullLoading()
})