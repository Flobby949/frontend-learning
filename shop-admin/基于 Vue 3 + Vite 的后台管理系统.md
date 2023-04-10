

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





## 三、后台管理 Layout 布局开发





## 四、Dashboard 开发和交互





## 五、模块开发





## 六、部署上线





