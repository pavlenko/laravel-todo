require('./bootstrap');

import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

import App from './components/App';
import Home from "./components/Home";
import Desks from './components/Desks';
import Lists from './components/Lists';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/desks',
            name: 'desks',
            component: Desks
        },
        {
            path: '/desks/:id',
            name: 'desks',
            component: Lists
        }
    ]
});

const app = new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<app></app>'
});
