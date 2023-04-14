

# 基于 Vue 3 + Vite 的后台管理系统

> 技术栈
>
> - [Vue 3.2 + setup](https://cn.vuejs.org/)
>
> - [Vite](https://vitejs.dev/guide/)
> - [Element Plus](https://element-plus.gitee.io/zh-CN/)
> - [Windi CSS](https://windicss.org/)
> - [VueUse](https://vueuse.org/)
> - Apifox

# 一、项目创建和配置

## 一、创建项目

```shell
# npm 6.x
npm create vite@latest shop-admin --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest shop-admin -- --template vue

# yarn
yarn create vite shop-admin --template vue

# pnpm
pnpm create vite shop-admin --template vue
```

## 二、引入 Element Plus

1. 添加依赖

```json
"dependencies": {
    "vue": "^3.2.47",
    "element-plus": "^2.3.3"
}
```

2. 添加智能感知插件



3. main.js 引入

```js
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)

app.mount('#app')
```

4. 测试是否生效

```vue
<script setup>
</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>
```

## 三、引入 Windi CSS

1. 添加依赖

```json
"devDependencies": {
    "@vitejs/plugin-vue": "^4.1.0",
    "vite": "^4.2.0",
    "windicss": "^3.5.6",
    "vite-plugin-windicss": "^1.8.10",
}
```

2. 添加智能感知插件



3. 添加配置 vite.config.js

```js
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],
}
```

4. 在 main.js 导入

```js
import 'virtual:windi.css'
```

5. 验证生效

```vue
  <div class="bg-red-600/50">
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
```

6. 使用 @apply 简化样式

```vue
<script setup>
</script>

<template>
  <div>
    <el-row class="mb-4">
      <button class="btn">Default</button>
    </el-row>
  </div>
</template>

<style scoped>
.btn {
  @apply bg-red-500 text-white m-15 px-5 py-2 rounded-full hover:(bg-red-700) focus:(ring-red-300) transition-all duration-500
}
</style>
```

## 四、引入 vue-router4

1. 添加依赖

``` json
"dependencies": {
    "element-plus": "^2.3.3",
    "vue": "^3.2.47",
    "vue-router": "^4.1.6"
},
```

2. src 目录创建 router 文件夹，并且创建 index.js

```js
// index.js


// 引入
import { createRouter, createWebHashHistory } from "vue-router";

// 路由数组
const routes = []

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 导出
export default router
```

3. 配置 src 别名

```js
// vite.config.js

export default defineConfig({
  resolve: {
    alias: {
      // 用 ~ 表示 src 更目录别名
      "~": path.resolve(__dirname, "src")
    }
  }
})
```

4. main.js 引入路由配置文件

```js
import router from './router'

app.use(router)
```

5. 配置基础路由以及404路由

​		新建 pages 目录，准备页面，修改路由配置

```js
// router/index.js


// 引入
import { createRouter, createWebHashHistory } from "vue-router";

import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import NotFound from '~/pages/404.vue'

// 路由数组
const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 导出
export default router
```

# 二、登录页开发和功能实现

## 一、页面实现

1. 新建 login.vue 页面，并且在路由文件中注册页面
2. 简单页面实现

```vue
<template>
    <div>
        <el-row class="box-border w-screen h-screen">
            <el-col :span="16" class="bg-blue-400 text-white col-center">
                <span class="text-5xl font-bold mb-10">管 理 系 统</span>
                <span class="text-3xl">shop-admin</span>
            </el-col>
            <el-col :span="8" class="col-center">
                <h2 class="text-3xl font-bold">登录</h2>
                <div class="text-sm text-gray-500 flex w-full justify-center items-center p-5">
                    <span class="h-[1px] w-1/5 bg-gray-200"></span>
                    <span class="mx-2 ">账号密码登录</span>
                    <span class="h-[1px] w-1/5 bg-gray-200"></span>
                </div>
                <el-form label-width="120px" label-position="left">

                    <el-form-item label="Username">
                        <el-input type="text" placeholder="请输入账号" />
                    </el-form-item>

                    <el-form-item label="Password">
                        <el-input type="password" placeholder="请输入密码" />
                    </el-form-item>

                    <el-button type="primary" class="w-80">登 录</el-button>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>

</script>

<style scoped>
.col-center {
    @apply flex flex-col justify-center items-center
}
</style>
```

3. 全局引入 Element Plus [图标库](https://element-plus.gitee.io/zh-CN/component/icon.html)

```bash
# 添加依赖
pnpm install @element-plus/icons-vue

# main.js 全局引入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
```

4. 在登录表单中使用图标

```vue
<el-form-item label="Username">
    <el-input type="text" placeholder="请输入账号">
        <template #prefix>
            <el-icon>
                <user />
            </el-icon>
        </template>
    </el-input>
</el-form-item>

<el-form-item label="Password">
    <el-input type="password" placeholder="请输入密码">
        <template #prefix>
            <el-icon>
                <lock />
            </el-icon>
        </template>
    </el-input>
</el-form-item>
```

## 二、添加表单校验

1. 添加表单规则

```js
import { reactive, ref } from 'vue';

// 定义表单提交对象
const form = reactive({
    username: '',
    password: ''
})

// 绑定表单规则
const rules = {
    username: [
        { required: true, message: '用户名不能为空', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' }
    ]
}

// 定义表单元素dom
const formRef = ref(null)

// 点击事件
const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            // 校验失败
            return
        }
        console.log('验证通过');
    })
}
```

2. 页面绑定规则

```html
<!-- model 绑定表单内容对象 、 rules 绑定规则 、 ref 绑定表单元素 -->
<el-form :model="form" label-width="120px" label-position="left" ref="formRef" :rules="rules">
    <!-- prop 绑定表单规则对象 -->
    <el-form-item label="Username" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username">
            <template #prefix>
                <el-icon>
                    <user />
                </el-icon>
            </template>
        </el-input>
    </el-form-item>
    <!-- prop 绑定表单规则对象 -->
    <el-form-item label="Password" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password">
            <template #prefix>
                <el-icon>
                    <lock />
                </el-icon>
            </template>
        </el-input>
    </el-form-item>
    <!-- 绑定点击事件 -->
    <el-button type="primary" class="w-80" @click="onSubmit">登 录</el-button>
</el-form>
```

## 三、接口请求

### 一、Apifox 准备 Mock 数据

1. 编写接口文档

![](https://i2.100024.xyz/2023/04/11/p22dd4.webp)

![](https://i2.100024.xyz/2023/04/11/p2r14l.webp)

2. 创建 mock

![](https://i2.100024.xyz/2023/04/11/p8497f.webp)

![](https://i2.100024.xyz/2023/04/11/p8qxrs.webp)

### 二、页面实现请求

1. 安装 axios
2. 实现 axios 工具包，src 下创建 axios.js

```js
import axios from '@/axios'

const service = axios.create({
    baseURL: 'http://127.0.0.1:4523/m1/2571699-0-default/api',

})

export default service
```

3. src 添加 api 文件夹，添加请求接口

```js
//  src/api/admin.js

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

```

4. 页面引入 admin.js 并请求接口

```js
//  login.vue


import { adminLogin } from '~/api/admin'
import { ElNotification } from 'element-plus'
import router from '~/router/index'

const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            // 校验失败
            return
        }
        adminLogin(form.username, form.password).then((res) => {
            if (res.status === 200 && res.data.code === 0) {
                ElNotification({
                    message: res.data.msg,
                    type: 'success',
                    duration: 2000
                })
                router.push('/')
            } else {
                ElNotification({
                    message: res.data.msg || '请求失败',
                    type: 'error',
                    duration: 2000
                })
            }
        }).catch((err) => {
            ElNotification({
                message: err.response.data.msg || '请求失败',
                type: 'error',
                duration: 2000
            })
        })
    })
}
```

### 三、使用 vueuse 保存登录状态

1. 添加 依赖

```json
  "dependencies": {
    "@element-plus/icons-vue": "^2.1.0",
    "@vueuse/core": "^9.13.0",
    "@vueuse/integrations": "^9.13.0",
    "axios": "^1.3.5",
    "element-plus": "^2.3.3",
    "universal-cookie": "^4.0.4",
    "vue": "^3.2.47",
    "vue-router": "^4.1.6"
  },
```

2. login.vue 页面

```vue
<script setup>
import { reactive, ref } from 'vue';
import { adminLogin } from '~/api/admin'
import { ElNotification } from 'element-plus'
import { useCookies } from '@vueuse/integrations/useCookies'
import router from '~/router/index'

const form = reactive({
    username: 'admin',
    password: '123456'
})

const rules = {
    username: [
        { required: true, message: '用户名不能为空', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' }
    ]
}

const formRef = ref(null)

const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            // 校验失败
            return
        }
        adminLogin(form.username, form.password).then((res) => {
            // 判断状态码，是否登录成功
            if (res.status === 200 && res.data.code === 0) {
                // 将登录成功返回 token 存入 cookie
                const cookie = useCookies()
                cookie.set('admin-token', res.data.data.token)
                ElNotification({
                    message: res.data.msg,
                    type: 'success',
                    duration: 2000
                })
                router.push('/')
            } else {
                ElNotification({
                    message: res.data.msg || '登录失败',
                    type: 'error',
                    duration: 2000
                })
            }
        }).catch((err) => {
            ElNotification({
                message: err.response.data.message || '请求失败',
                type: 'error',
                duration: 2000
            })
        })
    })
}
</script>
```

3. index.vue 页面

```vue
<template>
    <div>
        {{ token }}
    </div>
</template>

<script setup>
import { useCookies } from '@vueuse/integrations/useCookies'
import { ref } from 'vue';

const cookie =  useCookies()
const token = ref(cookie.get('admin-token'))
</script>

<style scoped>

</style>
```

## 四、axios 设置请求拦截

1. axios.js 添加请求拦截以及响应拦截

```js
import { useCookies } from '@vueuse/integrations/useCookies'
import { ElNotification } from 'element-plus'

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
```

2. 修改 login.vue 

```vue
<script setup>
import { reactive, ref } from 'vue';
import { adminLogin } from '~/api/admin'
import { ElNotification } from 'element-plus'
import { useCookies } from '@vueuse/integrations/useCookies'
import router from '~/router/index'

const form = reactive({
    username: 'admin',
    password: '123456'
})

const rules = {
    username: [
        { required: true, message: '用户名不能为空', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' }
    ]
}

const formRef = ref(null)
const loading = ref(false)

const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            // 校验失败
            return
        }
        loading.value = true
        adminLogin(form.username, form.password).then((res) => {
            // 判断状态码，是否登录成功
            if (res.code === 0) {
                // 将登录成功返回 token 存入 cookie
                const cookie = useCookies()
                cookie.set('admin-token', res.data.token)
                ElNotification({
                    message: res.msg,
                    type: 'success',
                    duration: 2000
                })
                router.push('/')
            } else {
                ElNotification({
                    message: res.msg || '登录失败',
                    type: 'error',
                    duration: 2000
                })
            }
        }).finally(() => {
            loading.value = false
        })
    })
}
</script>
```

## 五、封装 token & 公共方法

新建 src/composables包

1. 改造token存取移除方法，新建 token.js

```js
// utils.js

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

// ----------------------------------------

// login.vue
import { setToken } from '~/utils/token.js'

const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            // 校验失败
            return
        }
        loading.value = true
        adminLogin(form.username, form.password).then((res) => {
            // 判断状态码，是否登录成功
            if (res.code === 0) {
                // 将登录成功返回 token 存入 cookie
                setToken(res.data.token)
                ElNotification({
                    message: res.msg,
                    type: 'success',
                    duration: 2000
                })
                router.push('/')
            } else {
                ElNotification({
                    message: res.msg || '登录失败',
                    type: 'error',
                    duration: 2000
                })
            }
        }).finally(() => {
            loading.value = false
        })
    })
}


// --------------------------------------
// index.vue
import { getToken } from '~/utils/token.js'

const token = ref(getToken())


// --------------------------------------
// axios.js
import { getToken } from '~/utils/token.js'

// 请求拦截
service.interceptors.request.use(function (config) {
    // 从 cookie 中取出 token
    const token = getToken()

    // 如果不为空，向 header 中添加 token
    if (token) {
        config.headers['token'] = token
    }
    return config
}, function(err) {
    // 对于请求出错
    return Promise.reject(err)
})
```

2. 添加 进度条 依赖，在 main.js 中引入，并且在 app.vue 中设置样式

```json
  "dependencies": {
    "@element-plus/icons-vue": "^2.1.0",
    "@vueuse/integrations": "^9.13.0",
    "axios": "^1.3.5",
    "element-plus": "^2.3.3",
    "universal-cookie": "^4.0.4",
    "vue": "^3.2.47",
    "vue-router": "^4.1.6",
    "nprogress": "^0.2.0"
  },

// -------------------------------
// main.js
import 'nprogress/nprogress.css'


// app.vue
<style>
#nprogress .bar {
  background-color: #3cb6ea !important;
  height: 5px !important;
}
</style>
```

3. 封装 公共 组件，composables包下新建 util.js

```js
// util.js

import { ElNotification, ElMessageBox } from 'element-plus'
import nprogress from 'nprogress'

// 封装 弹窗消息
export function toast(message, type = 'success', duration = 2000) {
    ElNotification({
        message,
        type,
        duration
    })
}

// 封装 全局进度条
// 显示
export function showFullLoading() {
    nprogress.start()
}

// 隐藏
export function hideFullLoading() {
    nprogress.done()
}

// 疯转全局模态提示框
export function showModal(content = "提示内容", type = "warning", title = "") {
    return ElMessageBox.confirm(
        content,
        title,
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type
        }
    )
}


// --------------------------------------
// axios.js
import { toast } from '~/composables/util'

// 响应拦截
service.interceptors.response.use(function(res) {
    // 对于响应数据处理
    return res.data
}, function(err) {
    toast(err.response.data.message || '请求失败', 'error')
    return Promise.reject(err)
})


// --------------------------------------
// login.vue
import { toast } from '~/composables/util'
const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            // 校验失败
            return
        }
        loading.value = true
        adminLogin(form.username, form.password).then((res) => {
            // 判断状态码，是否登录成功
            if (res.code === 0) {
                // 将登录成功返回 token 存入 cookie
                setToken(res.data.token)
                toast(res.msg)
                router.push('/')
            } else {
                toast(res.msg || '登录失败', 'error')
            }
        }).finally(() => {
            loading.value = false
        })
    })
}
```

## 六、全局路由拦截

1. 前置路由守卫，新建 src/permission.js

```js
import router from '~/router'

import { getToken } from '~/composables/token'
import { toast, showFullLoading, hideFullLoading } from '~/composables/util'

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
    // 进度条显示
    showFullLoading()

    // to and from are both route objects. must call `next`.
    const token = getToken()

    // 目标页面不是登录页，且没有token，跳回登录页面
    if (!token && to.path != '/login') {
        toast('请先登录', 'error')
        return next({ path: '/login' })
    }

    // 防止重复登录
    if (to.path == '/login' && token) {
        toast('请勿重复登录', 'error')
        return next({ path: from.path || '/' })
    }

    next()
})


// 路由后置守卫
router.afterEach((to, from) => {
    // 隐藏导航栏
    hideFullLoading()
})
```

2. 全局页面动态标题

```js
// router/index.js
// 路由数组
const routes = [
    {
        path: '/',
        name:"index",
        component: Index,
        meta: {
            title: '后台首页'
        }
    },
    {
        path: '/about',
        name:"about",
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/login',
        name:"login",
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '页面丢失'
        }
    }
]


// ----------------------------------------
// permission.js
// 全局路由前置守卫
router.beforeEach((to, from, next) => {
    // 进度条显示
    showFullLoading()

    // to and from are both route objects. must call `next`.
    const token = getToken()

    // 目标页面不是登录页，且没有token，跳回登录页面
    if (!token && to.path != '/login') {
        toast('请先登录', 'error')
        return next({ path: '/login' })
    }

    // 防止重复登录
    if (to.path == '/login' && token) {
        toast('请勿重复登录', 'error')
        return next({ path: from.path || '/' })
    }

    // 设置页面标题
    let title = `admin - ${to.meta.title || ''}`
    document.title = title

    next()
})
```

## 七、集成 Pinia 状态存储

1. 添加依赖

```json
  "dependencies": {
    "@element-plus/icons-vue": "^2.1.0",
    "@vueuse/integrations": "^9.13.0",
    "axios": "^1.3.5",
    "element-plus": "^2.3.3",
    "pinia": "^2.0.34",
    "universal-cookie": "^4.0.4",
    "vue": "^3.2.47",
    "vue-router": "^4.1.6",
    "nprogress": "^0.2.0"
  },
```

2. 创建 src/store/index.js

```js
import { defineStore } from 'pinia'

export const useAdmin = defineStore('admin', {
    state: () => ({
        token: '',
        admin: {
            id: 0,
            role: '',
            nickname: '',
            avatar: ''
        },
    }),
    actions: {
        setStoreToken(token) {
            this.token = token
        },
        changeAvatar (avatar) {
            this.admin.avatar = avatar
        }
    }
})
```

3. main.js 引入 pinia

```js
import { createPinia } from 'pinia'

app.use(createPinia())
```

4. login.vue 登录时保存token

```js
import { useAdmin } from '~/store'

const store = useAdmin()
const { setStoreToken } = store

const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            // 校验失败
            return
        }
        loading.value = true
        adminLogin(form.username, form.password).then((res) => {
            // 判断状态码，是否登录成功
            if (res.code === 0) {
                // 将登录成功返回 token 存入 cookie
                setToken(res.data.token)
                setStoreToken(res.data.token)
                toast(res.msg)
                router.push('/')
            } else {
                toast(res.msg || '登录失败', 'error')
            }
        }).finally(() => {
            loading.value = false
        })
    })
}
```

5. index.vue 取出 token

```vue
<template>
    <div>
        {{ tokenStr }}
    </div>
    <div>
        {{ token }}
    </div>
</template>

<script setup>

import { getToken } from '~/composables/token.js'
import { ref } from 'vue';

import { useAdmin } from '~/store'
import { storeToRefs } from 'pinia'

const store = useAdmin()
const tokenStr = ref(getToken())

const { token, admin } = storeToRefs(store)
</script>
```

## 八、改造登录，存储管理员信息

1. 新增 获取管理员接口 & 退出登录接口，并且添加成功失败的mock

![](https://i2.100024.xyz/2023/04/13/w5hn0i.webp)

![](https://i2.100024.xyz/2023/04/13/w5hl2t.webp)

2. 改造 api/admin.js

```js
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
```

3. 改造 store/index.js

```js
import { defineStore } from 'pinia'
import { adminLogin, getInfo, logout } from '~/api/admin'
import { setToken, removeToken } from '~/composables/token'

export const useAdminStore = defineStore('admin', {
    state: () => ({
        token: '',
        adminInfo: {},
    }),
    actions: {
        adminLogin(username, password) {
            return new Promise((resolve, reject) => {
                adminLogin(username, password).then((res) => {
                    setToken(res.data.token)
                    resolve(res)
                }).catch(err => reject(err))
            })
        },
        async getInfo() {
            const res = await getInfo()
            console.log(res)
            this.adminInfo = res.data
        },
        async adminLogout() {
            logout()
            // 移除 cookie token
            removeToken()
            // 清空状态
            this.adminInfo = {}
        }
    }
})
```

4. 改造 login.vue 登录方法

```js
import { useAdminStore } from '~/store'

const store = useAdminStore()
const { adminLogin } = store

const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            // 校验失败
            return
        }
        loading.value = true
        // 使用 pinia 中解构的login方法
        adminLogin(form.username, form.password).then((res) => {
            toast(res.msg)
            if (res.code === 0) {
                router.push('/')
            }
            loading.value = false
        })
    })
}

// 监听回车
function onKeyUp(e) {
    if (e.key == 'Enter') onSubmit()
}

// 监听键盘
onMounted(() => {
    document.addEventListener("keyup", onkeyup)
})
// 移除键盘监听
onBeforeMount(() => {
    document.removeEventListener("keyup", onkeyup)
})
```

5. 改造 index.vue 页面

```vue
<template>
    <div class="p-3 flex space-x-5">
        <h2>{{ adminInfo.username }}</h2>
        <img :src="adminInfo.avatar" class="w-32 h-32 rounded-full" alt="">
        <el-button type="primary" @click="handleLogout">退出登录</el-button>
    </div>
</template>

<script setup>
import { showModal, toast } from '../composables/util'
import { storeToRefs } from 'pinia'
import { useAdminStore } from '~/store'
import { useRouter } from 'vue-router';

const store = useAdminStore()
const { getInfo, adminLogout } = store
const { adminInfo } = storeToRefs(store)

const router = useRouter()
// 获取用户信息
getInfo()

const handleLogout = () => {
    showModal("是否要退出登录？").then(() => {
        adminLogout()
        toast("退出登录成功")
        router.push("/login")
    })
}

</script>
```

# 三、后台管理 Layout 布局开发

## 一、配置 404 页面

```vue
<!-- 404.vue -->

<template>
    <div>
        <el-result icon="warning" title="Warning Tip" sub-title="Please follow the instructions">
            <template #extra>
                <el-button type="primary" @click="$router.push('/')">回到首页</el-button>
            </template>
        </el-result>
    </div>
</template>
```

## 二、后台整体布局

1. 新建 src/layout 文件夹，新建 layout/components/FHeader.vue、layout/components/FMenu.vue、layout/components/FTagList.vue 文件以及 layout/admin.vue

```vue
<!-- FHeader.vue 头部内容 -->
<template>
    <div>
头部
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>

<!-- FMenu.vue  菜单内容 -->
<template>
    <div>
菜单
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>

<!-- FTagList.vue 面包屑导航 -->
<template>
    <div>
面包屑
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>

<!-- admin.vue 整体布局 -->
<template>
    <el-header>
        <f-header></f-header>
    </el-header>
    <el-container>
        <el-aside>
            <f-menu></f-menu>
        </el-aside>

        <el-main>
            <f-tag-list></f-tag-list>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTagList from './components/FTagList.vue';

</script>

<style scoped></style>
```

> 预览

![](https://i2.100024.xyz/2023/04/13/xa7pr1.webp)

## 三、头部组件样式

1. 添加公共样式

```vue
<!-- app.vue -->
<style>
#nprogress .bar {
  background-color: #3cb6ea !important;
  height: 5px !important;
}

.f-center {
  @apply flex justify-center items-center
}

.f-around {
  @apply flex justify-around items-center
}

.f-between {
  @apply flex justify-between items-center
}

.v-center {
  @apply flex items-center
}
</style>
```

2. 实现 FHeader.vue

``` vue
<!-- FHeader.vue -->
<template>
    <div class="v-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0 h-16">
        <div class="v-center text-xl w-48 ml-2">
            <el-icon class="mr-1 text-3xl">
                <ElementPlus />
            </el-icon>
            极客空间
        </div>
        <el-icon class="icon-btn">
            <Fold />
        </el-icon>
        <div class="v-center ml-auto">
            <el-icon class="icon-btn">
                <Refresh />
            </el-icon>
            <el-icon class="icon-btn">
                <FullScreen />
            </el-icon>
            <el-icon class="icon-btn">
                <Printer />
            </el-icon>
            <el-icon class="icon-btn">
                <Setting />
            </el-icon>

            <el-dropdown class="f-center mx-5 h-64 cursor-pointer">
                <span class="v-center text-light-50">
                    <el-avatar class="mr-2" :size="25" :src="adminInfo.avatar" />
                    {{ adminInfo.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
              <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { showModal, toast } from '~/composables/util'
import { useAdminStore } from '~/store'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const store = useAdminStore()
const { getInfo, adminLogout } = store
const { adminInfo } = storeToRefs(store)
const router = useRouter()

getInfo()

const handleLogout = () => {
    showModal("是否要退出登录？").then(() => {
        adminLogout()
        toast("退出登录成功")
        router.push("/login")
    })
}

</script>

<style scoped>
.icon-btn {
    @apply flex justify-center items-center mx-1 cursor-pointer
}

.icon-btn:hover {
    @apply bg-indigo-300
}
</style>
```

> 清空 index.vue

![](https://i2.100024.xyz/2023/04/13/xxebit.webp)

## 四、全屏功能实现

1. 添加 vueuse 核心依赖

```json
  "dependencies": {
    "@element-plus/icons-vue": "^2.1.0",
    "@vueuse/integrations": "^9.13.0",
    "axios": "^1.3.5",
    "element-plus": "^2.3.3",
    "pinia": "^2.0.34",
    "universal-cookie": "^4.0.4",
    "vue": "^3.2.47",
    "vue-router": "^4.1.6",
    "nprogress": "^0.2.0",
    "@vueuse/core":"^9.13.0"
  },
```

2. 修改 FHeader.vue 部分页面

```vue
<template>
	<!-- 全屏 / 非全屏 页面按钮变化 -->
    <el-icon class="icon-btn" @click="toggle">
        <FullScreen v-if="!isFullscreen"/>
        <Aim v-else/>
    </el-icon>
</template>

<script setup>
import { useFullscreen } from '@vueuse/core';
    
const { 
    // 是否全屏状态
    isFullscreen,
    // 切换全屏
     toggle 
} = useFullscreen()
</script>
```

## 五、修改密码

### 一、接口mock

![](https://i2.100024.xyz/2023/04/14/dipanr.webp)

### 二、页面布局实现

> 修改 FHeader.vue

```vue
<template>    
	<!-- 抽屉 -->
    <el-drawer title="修改密码" v-model="showDrawer" size="30%" :close-on-press-escape="false">
        <el-form label-width="80px">
          <el-form-item label="旧密码">
            <el-input placeholder="请输入旧密码"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input placeholder="请输入新密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input placeholder="请确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="bg-indigo-500 text-light-50 w-full p-4 rounded-full">提交</el-button>
          </el-form-item>
        </el-form>
    </el-drawer>
</template>

<script setup>
import { ref } from 'vue'

const showDrawer = ref(false)
const rePassword = () => {
    showDrawer.value = true
}
</script>
```

### 三、页面实现修改密码

1. src/api/admin.js 新增接口方法

```js
// 管理员修改密码
export function updatePassword(oldPassword, newPassword) {
    return axios.post(
        '/admin/updatePassword',
        {
            oldPassword,
            newPassword
        }
    )
}
```

2. 改造 FHeader.vue

```vue
<template>  
	<!-- 抽屉 -->
    <el-drawer title="修改密码" v-model="showDrawer" size="30%" :close-on-press-escape="false">
        <el-form label-width="80px" :rules="rules" :model="updatePasswordForm" ref="formRef">
            <el-form-item label="旧密码" prop="oldPassword">
                <el-input v-model="updatePasswordForm.oldPassword" placeholder="请输入旧密码"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
                <el-input v-model="updatePasswordForm.newPassword" placeholder="请输入新密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="rePassword">
                <el-input v-model="updatePasswordForm.rePassword" placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="bg-indigo-500 text-light-50 w-full p-4 rounded-full" @click="update">提交</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<script setup>
import { updatePassword } from '~/api/admin'
    
const formRef = ref(null)
const updatePasswordForm = reactive({
    oldPassword: '',
    newPassword: '',
    rePassword: ''
})
const loading = ref(false)

// 确认密码规则
const rePassRule = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('确认密码不能为空'))
    } else if (value !== updatePasswordForm.newPassword) {
        console.log(updatePasswordForm.newPassword);
        callback(new Error('与新密码不一致'))
    } else {
        callback()
    }
}

// 规则
const rules = {
    oldPassword: [
        { required: true, message: '旧密码不能为空', trigger: 'blur' }
    ],
    newPassword: [
        { required: true, message: '新密码不能为空', trigger: 'blur' },
        { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
    ],
    rePassword: [
        {required: true, validator: rePassRule, trigger: 'blur' }
    ]
}

const update = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            return
        }
        loading.value = true
        updatePassword(
            updatePasswordForm.oldPassword, 
            updatePasswordForm.newPassword).then((res) => {
                console.log(res);
                if (res.code === 0) {
                    toast('修改成功，请重新登录')
                    adminLogout().then(() => router.push('/login'))
                } else {
                    toast(res.msg, 'error')
                }
        }).finally(() => {
            loading.value = false
        })
    })
}
</script>
```



# 四、Dashboard 开发和交互





# 五、模块开发





# 六、部署上线





