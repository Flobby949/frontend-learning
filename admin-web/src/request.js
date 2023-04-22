import axios from 'axios'

const service = axios.create({
	baseURL: import.meta.env.VITE_API_URL
})

// 添加请求拦截器
service.interceptors.request.use(
	config => {
		// 往header头自动添加token
		const token = getToken()
		if (token) {
			config.headers['Authorization'] = token
		}
		console.log('########### 请求信息 开始 ###########')
		console.log(config)
		console.log('########### 请求信息 结束 ###########')
		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	res => {
		console.log('########### 响应体 开始 ###########')
		console.log(res.data)
		console.log('########### 响应体 结束 ###########')
		return res.data
	},
	error => {
		toast(error.response.data.msg || '请求失败', 'error')
		return Promise.reject(error)
	}
)

export default service
