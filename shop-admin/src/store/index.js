import { defineStore } from 'pinia'

export const useAdmin = defineStore('admin', {
    state: () => ({
        token: '',
        admin: {
            id: 0,
            role: '',
            nickname: '',
            avatar: ''
        },
    }),
    actions: {
        setStoreToken(token) {
            this.token = token
        },
        changeAvatar (avatar) {
            this.admin.avatar = avatar
        }
    }
})