import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from '@router/index.js'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '@assets/main.css'
import '@formkit/themes/genesis' 


createApp(App)
.use(createHead())
.use(router)
.use(plugin, defaultConfig({
    theme: 'genesis'
}))
.component('Icon', Icon)
.use(createPinia())
.mount('#app')

AOS.init({
    duration: 800,
    offset: 120,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});
