import { createApp } from 'vue'
import PrimeVue from 'primevue/config';

import { createWebHistory } from 'vue-router'
import createRouter from './routes.js'
import './index.css'

import App from './App.vue'

const router = createRouter(createWebHistory());

createApp(App).use(router).use(PrimeVue).mount('#app');
