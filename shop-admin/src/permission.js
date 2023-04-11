import router from '~/router'

import { getToken } from '~/utils/token'
import { toast } from '~/utils/toast'

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
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

    // 设置页面标题
    let title = `admin - ${to.meta.title || ''}`
    document.title = title

    next()
})