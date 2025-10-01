import { createApp } from 'vue'
import '@assets/main.css'
import App from './App.vue'
import router from '@router/index.js'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue';

createApp(App)
.use(router)
.component('Icon', Icon)
.use(createPinia())
.mount('#app')
