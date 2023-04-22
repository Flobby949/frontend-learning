import { useCookies } from '@vueuse/integrations/useCookies'
const TokenKey = 'accessToken'
const cookie = useCookies()

// 获取token
export function getToken() {
	return cookie.get(TokenKey)
}

// 设置token
export function setToken(token) {
	return cookie.set(TokenKey, token, { path: '/' })
}

// 清除token
export function removeToken() {
	return cookie.remove(TokenKey)
}

export function setKey(key, value) {
	cookie.set(key, value, { path: '/' })
}

// 设置token
export function getKey(key) {
	return cookie.get(key)
}

// 清除token
export function removeKey(key) {
	return cookie.remove(key)
}