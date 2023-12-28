import { createApp } from 'vue'
import PrimeVue from 'primevue/config';

import routes from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory('/christmas_2023/'),
    routes
});

createApp(App)
.use(router)
.use(PrimeVue)
.mount('#app');
