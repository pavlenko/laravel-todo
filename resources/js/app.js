require('./bootstrap');

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

import App from './components/App'

const app = new Vue({
    el: '#app',
    components: {App},
    template: '<app></app>'
});
