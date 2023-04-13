import { useCookies } from '@vueuse/integrations/useCookies'
const tokenKey = 'admin-token'
const cookie = useCookies()

// 获取token
export function getToken() {
    return cookie.get(tokenKey)
}

// 设置token
export function setToken(token) {
    cookie.set(tokenKey, token)
}

export function removeToken() {
    cookie.remove(tokenKey)
}
