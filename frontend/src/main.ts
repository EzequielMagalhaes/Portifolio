import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from './i18n';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes'; // Assuming you have a routes file

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');