import { defineStore } from 'pinia'
import { adminLogin, getInfo, logout } from '~/api/admin'
import { setToken, removeToken } from '~/composables/token'

export const useAdminStore = defineStore('admin', {
    state: () => ({
        adminInfo: {},
        asideWidth: '220px',
        isShrink: false
    }),
    actions: {
        adminLogin(username, password) {
            return new Promise((resolve, reject) => {
                adminLogin(username, password).then((res) => {
                    setToken(res.data.token)
                    resolve(res)
                }).catch(err => reject(err))
            })
        },
        async getInfo() {
            const res = await getInfo()
            this.adminInfo = res.data
        },
        async adminLogout() {
            await logout()
            // 移除 cookie token
            removeToken()
            // 清空状态
            this.adminInfo = {}
        },
        // 切换 侧边栏菜单宽度
        handleAsideWidth() {
            this.asideWidth = this.asideWidth === '220px' ? '80px' : '220px'
            this.isShrink = !this.isShrink
        }
    }
})