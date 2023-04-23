import axios from '@/request'

export function getInfo() {
	return axios.post('/sys/user/info')
}

export function rePassword(data) {
	return axios.post('/sys/user/password', data)
}

export function getLogs(page, limit, username, address, status) {
	let url = `/sys/log/page?page=${page}&limit=${limit}&username=${username}&address=${address}`
	if (status != null) {
		url = `${url}&status=${status}`
	}
	return axios.get(url)
}