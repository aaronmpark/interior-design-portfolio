import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import Career from '../components/Career.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/career', component: Career },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;