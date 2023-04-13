import axios from '~/axios'

// 管理员登录
export function adminLogin(username, password) {
    return axios.post(
        '/admin/login',
        {
            username,
            password
        }
    )
}

// 获取用户信息
export function getInfo() {
    return axios.post("/admin/getInfo")
}

// 登出
export function logout () {
    return axios.post("/admin/logout")
}
