import { createApp } from 'vue'
import PrimeVue from 'primevue/config';

import { createWebHistory } from 'vue-router'
import createRouter from './routes.js'
// import './style.css'
import './index.css'
// import 'primevue/resources/themes/lara-light-green/theme.css'

import App from './App.vue'

const router = createRouter(createWebHistory())

createApp(App).use(router).use(PrimeVue).mount('#app');
