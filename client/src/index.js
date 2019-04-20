import './js/common'
import './css/main.css'
import './scss/main.scss'

window.Vue = require('vue');
import store from './store/index';
import router from './router';

//Vue.component('example-component', require('./components/Example.vue').default);

const app = new Vue({
    store,
    router,
    el: '#app'
});