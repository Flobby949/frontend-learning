const TokenKey = 'accessToken'
const tabListKey = 'tabList'

// 获取token
export function getToken() {
	return localStorage.getItem(TokenKey)
}

// 设置token
export function setToken(token) {
	localStorage.setItem(TokenKey, token)
}

// 清除token
export function removeToken() {
	localStorage.removeItem(TokenKey)
}

// 获取tabList
export function getTabList() {
	return JSON.parse(localStorage.getItem(tabListKey))
}

// 设置tabList
export function setTabList(list) {
	localStorage.setItem(tabListKey, JSON.stringify(list))
}

// 清除tabList
export function removeTabList() {
	localStorage.removeItem(tabListKey)
}

export function setKey(key, value) {
	localStorage.setItem(key, JSON.stringify(value))
}

export function getKey(key) {
	return JSON.parse(localStorage.getItem(key))
}

export function removeKey(key) {
	localStorage.removeItem(key)
}