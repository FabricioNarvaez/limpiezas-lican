import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import router from '@router/index.js'
import '@assets/main.css'
import '@formkit/themes/genesis' 


createApp(App)
.use(router)
.use(plugin, defaultConfig({
    theme: 'genesis'
}))
.component('Icon', Icon)
.use(createPinia())
.mount('#app')
