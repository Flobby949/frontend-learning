import axios from '@/request'

export function getNav() {
	return axios.get('/sys/menu/nav')
}

export function getAuthority() {
	return axios.get('/sys/menu/authority')
}
