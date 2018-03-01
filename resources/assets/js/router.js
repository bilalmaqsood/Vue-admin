import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Login from './components/Login.vue';

export default new Router({
    mode: 'history',
    routes: [
        // { path: '/', component: HomePage }, // doesn't exist yet!
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
});