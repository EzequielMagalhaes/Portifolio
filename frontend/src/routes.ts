import type { RouteRecordRaw } from 'vue-router';
import Home from './App.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Add other routes here
];

export default routes;
