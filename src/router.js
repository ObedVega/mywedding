import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeComponent.vue';
import Boda from './views/BodaComponent.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/w/:names', component: Boda },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;

