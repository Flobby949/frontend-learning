import { useCookies } from '@vueuse/integrations/useCookies'
import axios from 'axios'
import { ElNotification } from 'element-plus'

const service = axios.create({
    baseURL: 'http://127.0.0.1:4523/m1/2571699-0-default/api',

})

// 请求拦截
service.interceptors.request.use(function (config) {
    // 从 cookie 中取出 token
    const cookie = useCookies()
    const token = cookie.get('admin-token')

    // 如果不为空，向 header 中添加 token
    if (token) {
        config.headers['token'] = token
    }
    return config
}, function(err) {
    // 对于请求出错
    return Promise.reject(err)
})

// 响应拦截
service.interceptors.response.use(function(res) {
    // 对于响应数据处理
    return res.data
}, function(err) {
    ElNotification({
        message: err.response.data.message || '请求失败',
        type: 'error',
        duration: 2000
    })
    return Promise.reject(err)
})

export default service