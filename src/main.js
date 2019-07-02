import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueRouterMiddleware from 'vue-router-middleware';
import axios from 'axios';

import 'vuetify/dist/vuetify.min.css';
// import store from './store';
import router from './router';
import app from './pages/App/App';

import Default from './Layouts/Default';
import Blank from './Layouts/Blank';

Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.component('default-layout', Default);
Vue.component('blank-layout', Blank);
Vue.use(VueRouterMiddleware, {
  router,
  events: {
    onCancelMiddleware(middlewareName, to, from, next) {
      console.log(`next(false) has called in ${middlewareName}`);
    } },
});

const base = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://delia.ovh:6867' : 'http://localhost:8080',
});

Vue.prototype.$http = base;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  // store,
  router,
  render: h => h(app),
});
