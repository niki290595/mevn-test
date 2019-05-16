import Vue from 'vue';
import Router from 'vue-router';
import store from './store/index';

import Home from './components/views/Home.vue';
import Signup from './components/views/Signup.vue';
import Login from './components/views/Login.vue';
import Dashboard from './components/views/Dashboard.vue';

Vue.use(Router);

function loggedInRedirectDashboard(to, from, next) {
  if (store.getters.isLoggedIn) {
    next('/dashboard');
  } else {
    next();
  }
}

function isLoggedIn(to, from, next) {
  if (store.getters.isLoggedIn) {
    next();
  } else {
    next('/login');
  }
}


export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/signup',
    name: 'signup',
    component: Signup,
    meta: {
      layout: 'auth-layout'
    },
    beforeEnter: loggedInRedirectDashboard,
  }, {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      layout: 'auth-layout'
    },
    beforeEnter: loggedInRedirectDashboard,
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: isLoggedIn,
  }]
});