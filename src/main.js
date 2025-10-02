import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'
import { plugin, defaultConfig } from '@formkit/vue'
import '@assets/main.css'
import App from './App.vue'
import router from '@router/index.js'


createApp(App)
.use(router)
.use(plugin, defaultConfig({
    theme: 'genesis'
}))
.component('Icon', Icon)
.use(createPinia())
.mount('#app')
