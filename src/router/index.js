import VueRouter from 'vue-router';
import { createMiddleware, middleware } from 'vue-router-middleware';


import App from '../pages/App/App';
import Login from '../pages/Login';
import User from '../pages/App/User';
import Device from '../pages/App/Device';
import Connect from '../pages/App/Connect';

const routes = [
  ...middleware('require-auth', [{
    path: '/',
    component: App,
    children: [
      // Active middlewares in sequence ['require-auth', 'check-permission']
      // Childrens inherits middleware from parent route
      {
        component: User,
        path: '/user',
        name: 'home.user',
      },
      {
        component: Device,
        path: '/device',
        name: 'home.device',
      },
      {
        component: Connect,
        path: '/connect',
        name: 'home.connect',
      },
    ],
  }]),
  { path: '/login', component: Login, meta: { layout: 'blank' } },
];

const FakeAuth = {
  isAuthenticated() {
    return true;
  },
};

const router = new VueRouter({
  routes, // short for `routes: routes`
});

// Pass middleware name and callback function
createMiddleware('require-auth', (args, to, from, next) => {
  if (FakeAuth.isAuthenticated()) {
    next();
  } else {
    router.replace('/login');
    next(false);
  }
});

export default router;
