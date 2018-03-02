import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Login from './components/Login.vue';
import Admin from './components/Admin.vue';
import Dashboard from './components/admin/Dashboard.vue';

export default new Router({
    mode: 'history',
    routes: [
        // { path: '/', component: HomePage }, // doesn't exist yet!
        {
            path: '/admin/login',
            name: 'Login',
            component: Login
        }, {
            path: '/admin/users',
            name: 'Admin',
            component: Admin
        },
        {
            path: '/admin',
            name: 'Dashboard',
            component: Dashboard
        }
    ]
});