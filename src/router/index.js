import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
];

// 라우터 객체 생성
const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;