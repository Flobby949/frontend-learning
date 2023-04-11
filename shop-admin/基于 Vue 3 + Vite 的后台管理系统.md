

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

## 一、项目创建和配置

### 一、创建项目

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

### 二、引入 Element Plus

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

### 三、引入 Windi CSS

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

### 四、引入 vue-router4

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

## 二、登录页开发和功能实现

#### 一、页面实现

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

#### 二、添加表单校验

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

#### 三、接口请求

##### 一、Apifox 准备 Mock 数据

1. 编写接口文档

![](https://i2.100024.xyz/2023/04/11/p22dd4.webp)

![](https://i2.100024.xyz/2023/04/11/p2r14l.webp)

2. 创建 mock

![](https://i2.100024.xyz/2023/04/11/p8497f.webp)

![](https://i2.100024.xyz/2023/04/11/p8qxrs.webp)

##### 二、页面实现请求

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

## 三、后台管理 Layout 布局开发





## 四、Dashboard 开发和交互





## 五、模块开发





## 六、部署上线





