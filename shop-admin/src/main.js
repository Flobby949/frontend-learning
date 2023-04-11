import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)


app.use(ElementPlus).use(router).use(createPinia())
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import './permission'

import 'virtual:windi.css'

app.mount('#app')
