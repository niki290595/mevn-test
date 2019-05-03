import Vue from 'vue'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import colors from 'vuetify/es5/util/colors'
import App from './App.vue'
import store from './store/index'
import router from './router'

import './js/common'
import './css/main.css'
import './scss/main.scss'

//Vue.component('example-component', require('./components/Example.vue').default);
import DefaultLayout from './components/layouts/DefaultLayout.vue'
import AuthLayout from './components/layouts/AuthLayout.vue'

Vue.component('default-layout', DefaultLayout);
Vue.component('auth-layout', AuthLayout);

window.Vue = Vue;
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken4,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.deepPurple.darken4
  }
});
Vue.use(VeeValidate, {
  locale: 'ru',
  dictionary: {
    ru: {
      custom: {
        email: {
          required: 'Введите E-mail',
          email: 'Введите корректный E-mail'
        },
        password: {
          required: 'Введите пароль',
        },
        passconf: {
          required: 'Повторите пароль',
          confirmed: 'Пароли не совпадают',
        },
      },
    }
  }
});

// const app = new Vue({
//   store,
//   router,
//   el: '#app'
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');