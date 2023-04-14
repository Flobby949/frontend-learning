import { router, addRoutes } from "~/router"
import { getToken } from "~/composables/auth"
import {
  toast, showFullLoading,
  hideFullLoading
} from "~/composables/util"
import { useAdminStore } from './store'
import { storeToRefs } from 'pinia'


// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 显示loading
  showFullLoading()

  const store = useAdminStore()

  const { getInfo } = store
  const { menuList } = storeToRefs(store)

  const token = getToken()

  // 没有登录，强制跳转回登录页
  if (!token && to.path != "/login") {
    toast("请先登录", "error")
    return next({ path: "/login" })
  }

  // 防止重复登录
  if (token && to.path == "/login") {
    toast("请勿重复登录", "error")
    return next({ path: from.path ? from.path : "/" })
  }

  // 如果用户登录了，则获取用户信息并存储在 pinia 中，并且新增路由菜单
  let hasNewRoutes = false
  if (token) {
    getInfo().then(() => {
      hasNewRoutes = addRoutes(menuList.value)
    })
  }

  // 设置页面标题
  let title = '极客空间 - ' + (to.meta.title ? to.meta.title : '')
  document.title = title
  hasNewRoutes ? next(to.fullPath) : next()
})

// 全局后置守卫
router.afterEach((to, from) => hideFullLoading())