import axios from '@/axios'

export function getNav() {
	return axios.get('/sys/menu/nav')
}
