import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSSE from 'vue-sse';
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueSSE);

app.mount('#app')
