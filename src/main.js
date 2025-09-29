import { createApp } from 'vue'
import '@assets/main.css'
import App from './App.vue'
import router from '@router/index.js'
import { createPinia } from 'pinia'

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
