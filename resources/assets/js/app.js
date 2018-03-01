
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

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('app-header', require('./components/Header.vue'));

import VueProgressBar from 'vue-progressbar'
import router from './router'

Vue.use(VueProgressBar, {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.7s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
})

const app = new Vue({
    el: '#app',
    router
});
