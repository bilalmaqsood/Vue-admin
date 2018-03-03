import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Login from './components/Login.vue';
import usersIndex from './components/admin/users/index.vue';
import Dashboard from './components/admin/Dashboard.vue';

export default new Router({
    mode: 'history',
    routes: [
        // { path: '/', component: HomePage }, // doesn't exist yet!
        {
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/admin/users',
            name: 'users.index',
            component: usersIndex
        },
        {
            path: '/admin',
            name: 'Dashboard',
            component: Dashboard
        }
    ]
});