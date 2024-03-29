import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeComponent.vue';
import Boda from './views/BodaComponent.vue';
import ErrorPage from './views/ErrorPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/w/:names', component: Boda },
  { path: '/error404', component: ErrorPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;

