import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@views/HomeView.vue';
import ServicesView from '@views/ServicesView.vue';
import ContactView from '@views/ContactView.vue';
import AboutUsView from '@views/AboutUsView.vue';
import PrivacyView from '@views/PrivacyView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/servicios',
        name: 'Services',
        component: ServicesView,
    },
    {
        path: '/contacto',
        name: 'Contact',
        component: ContactView,
    },
    {
        path: '/nosotros',
        name: 'About',
        component: AboutUsView,
    },
    {
        path: '/legal/privacidad',
        name: 'PrivacyPolicy',
        component: PrivacyView,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 100
            };
        }else if (savedPosition) {
            return savedPosition;
        }else {
            return { top: 0, behavior: 'smooth' };
        }
    },
    routes,
});

export default router;