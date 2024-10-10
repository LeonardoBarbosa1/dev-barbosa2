import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import SobreMim from './components/SobreMim.vue';
import Contato from './components/Contato.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/sobre', name: 'SobreMim', component: SobreMim },
    { path: '/contato', name: 'Contato', component: Contato },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;