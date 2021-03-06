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

import App from "./components/App";
import Page404 from './components/Page404';
import PageLogin from './components/PageLogin';
import PageRegister from './components/PageRegister';
import PageHome from "./components/PageHome";
import Desks from './components/Desks';
import Lists from './components/Lists';

import Modal from './components/Modal';
Vue.component('modal', Modal);

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
            component: PageHome,
            meta: {
                auth: true
            }
        },
        {
            path: '/desks',
            name: 'desks',
            component: Desks,
            meta: {
                auth: true
            }
        },
        {
            path: '/desks/:id',
            name: 'lists',
            component: Lists,
            meta: {
                auth: true
            },
            children: [
                {
                    path: 'cards/:cardID',//TODO try create root route as /desks/:id/cards/:cardID + maybe add cards & tasks store
                    name: 'card',
                    meta: {
                        auth: true
                    },
                    components: {
                        default: Lists,
                        modal: {template: '<modal @close="$router.push({name: \'lists\', id: $route.params.id})">TODO here opened modal markup</modal>'}
                    },
                }
            ]
        },
        {
            path: '/user/login',
            name: 'user_login',
            component: PageLogin,
            meta: {
                auth: false
            }
        },
        {
            path: '/user/register',
            name: 'user_register',
            component: PageRegister,
            meta: {
                auth: false
            }
        },
        {path: "*", component: Page404}
    ]
});

import auth from '@websanova/vue-auth/dist/v2/vue-auth.esm';
import driverAuth from '@websanova/vue-auth/dist/drivers/auth/bearer.esm';
import driverHttp from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm';
import driverRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm';

Vue.use(auth, {
    plugins: {
        http:   axios,
        router: router,
    },
    drivers: {
        auth:   driverAuth,
        http:   driverHttp,
        router: driverRouter
    },
    options: {
        authRedirect: {name: 'user_login'},
        notFoundRedirect: {name: 'home'},
        loginData: {url: __baseURL + '/api/V1/auth/login', redirect: {name: 'home'}},
        fetchUser: true,
        fetchData: {url: __baseURL + '/api/V1/auth/user'},
        logoutData: {url: __baseURL + '/api/V1/auth/logout', redirect: {name: 'user_login'}, makeRequest: true},
        refreshData: {url: __baseURL + '/api/V1/auth/refresh'}
    }
});

router.beforeEach((to, from, next) => {
    let PushMenu = $('[data-widget=pushmenu]').PushMenu;
    if (PushMenu && $('body').hasClass('sidebar-open')) {
        PushMenu('collapse');
    }
    next();
})

new Vue({
    el: '#app',
    store: new Vuex.Store(store),
    router,
    components: {App},
    template: '<app></app>'
});
