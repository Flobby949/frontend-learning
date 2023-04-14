import { useCookies } from '@vueuse/integrations/useCookies'
const tokenKey = 'admin-token'
const menuKey = 'admin-menu'
const cookie = useCookies()

// token
export function getToken() {
    return cookie.get(tokenKey)
}

export function setToken(token) {
    cookie.set(tokenKey, token)
}

export function removeToken() {
    cookie.remove(tokenKey)
}

// menu
export function getMenu() {
    return cookie.get(menuKey)
}

export function setMenu(menu) {
    cookie.set(menuKey, menu)
}

export function removeMenu() {
    cookie.remove(menuKey)
}