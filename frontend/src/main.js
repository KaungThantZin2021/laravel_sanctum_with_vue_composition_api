import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router';

import axios from 'axios';

axios.defaults.baseURL= 'http://localhost:8000';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

import useAuth from './auth/useAuth';

const { attempt } = useAuth();

const app = createApp(App);
app.use(router);

attempt().then(() => {
    app.mount('#app');
});
