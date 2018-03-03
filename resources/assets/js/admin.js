
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

require("babel-polyfill");


window.Vue = require('vue');

import Vuetify from 'vuetify';

Vue.use(Vuetify);

// import Toastr
import Toastr from 'vue-toastr';
// import toastr less file: need webpack less-loader
// Register plugin
Vue.use(Toastr);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('admin-nav', require('./components/admin/_nav.vue'));


import Admin from './components/Admin.vue';
import Dashboard from './components/admin/Dashboard.vue';
import router from './router'


const app = new Vue({
    base: '/admin',
    router,
    render: h => h(Dashboard)
}).$mount('#admin');

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response && (error.response.status === 422 || error.response.status === 400 )) {
        $.each(error.response.data, function (k, v) {
            this.$root.$refs.toastr.e(k.toCapitalizeCase());
        });
    }
    return Promise.reject(error);
});
