import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

import './styles/index.css'

app.use(router)
app.use(createPinia())

app.mount('#app')
