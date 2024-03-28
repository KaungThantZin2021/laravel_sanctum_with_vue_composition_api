import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('../pages/auth/Login.vue'),
        },
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('../pages/auth/Register.vue'),
        },
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/Home.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../pages/Dashboard.vue'),
        },
    ],
});

export default router;
