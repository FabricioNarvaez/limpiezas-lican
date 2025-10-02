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
    routes,
});

export default router;