require('./bootstrap');

import Vue from "vue";
import Vuex from 'vuex';
import VueRouter from "vue-router/dist/vue-router.min";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.min";
//import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
//Vue.use(CKEditor);

import App from './components/App';
import Page404 from './components/Page404';
import PageLogin from './components/PageLogin';
import PageRegister from './components/PageRegister';
import Home from "./components/Home";
import Desks from './components/Desks';
import Lists from './components/Lists';

// TODO color styles for bg and other bootstrap components
const colors = {
    'primary': '#007bff',
    'secondary': '#6c757d',
    'info': '#17a2b8',
    'success': '#28a745',
    'warning': '#ffc107',
    'danger': '#dc3545',
};

import store from './store/desks';

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
            name: 'lists',
            component: Lists
        },
        {
            path: '/user/login',
            name: 'user_login',
            component: PageLogin
        },
        {
            path: '/user/register',
            name: 'user_register',
            component: PageRegister
        },
        {path: "*", component: Page404}
    ]
});

router.beforeEach(function (to, from, next) {
    console.log(to);
    next();
    /*if ((to.path !== '/login' && to.path !== 'login') && !auth.user.authenticated) {
        next({path: '/login'});
    } else if ((to.path === '/login' || to.path === 'login') && auth.user.authenticated) {
        next({path: '/'});
    } else {
        next();
    }*/
})

const app = new Vue({
    el: '#app',
    store: new Vuex.Store(store),
    router,
    components: {App},
    template: '<app></app>'
});
