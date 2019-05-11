import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy', 
      component: () => import('./components/privacy-policy')
    },
    {
      path: '/terms',
      name: 'terms', 
      component: () => import('./components/terms')
    },
    {
      path: '/our-story',
      name: 'our-story', 
      component: () => import('./components/our-story')
    },
    {
      path: '/electronic-medical-records',
      name: 'electronic-medical-records', 
      component: () => import('./components/electronic-medical-records')
    },
    {
      path: '/clinic-management-system',
      name: 'clinic-management-system', 
      component: () => import('./components/clinic-management-system')
    }
    
  ]
});
