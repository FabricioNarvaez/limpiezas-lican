import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@views/HomeView.vue'),
    },
    {
        path: '/servicios',
        name: 'Services',
        component: () => import('@views/ServicesView.vue'),
    },
    {
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