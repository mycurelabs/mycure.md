import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/home.vue';
import ourStory from '@/views/our-story.vue';
import { core } from '@mycure/sdk';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy', 
      component: () => import(/* webpackChunkName: 'privacy-policy' */ '@/components/privacy-policy')
    },
    {
      path: '/terms',
      name: 'terms', 
      component: () => import(/* webpackChunkName: 'terms' */ '@/components/terms')
    },
    {
      path: '/our-story',
      name: 'our-story', 
      component: ourStory
    },
    {
      path: '/electronic-medical-records',
      name: 'electronic-medical-records', 
      component: () => import(/* webpackChunkName: 'electronic-medical-records' */ '@/components/electronic-medical-records')
    },
    {
      path: '/clinic-management-system',
      name: 'clinic-management-system', 
      component: () => import(/* webpackChunkName: 'clinic-management-system' */ '@/components/clinic-management-system')
    },
    {
      path: '/pricing',
      name: 'pricing', 
      component: () => import(/* webpackChunkName: 'pricing' */ '@/components/pricing')
    },
    {
      path: '/features',
      name: 'features', 
      component: () => import(/* webpackChunkName: 'features' */ '@/components/features')
    },
    {
      path: '/calendly',
      name: 'calendly',
      beforeEnter (to, from, next) {
        window.open('https://calendly.com/mycure');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/ctm-redirect-link',
      name: 'ctm-counter',
      async beforeEnter (to) {
        try {
          const { link, src, ctm } = to.query;

          if (!link || !src || !ctm) {
            window.location.href = 'https://mycure.md';
            return;
          }

          const campaign = {
            type: 'campaign-link-click',
            source: to.query.src,
            campaign: to.query.ctm
          };

          await core.system.counters().create(campaign);

          window.location.href = to.query.link;
        } catch (e) {
          console.error('CTM Counter Error:', e);
          window.location.href = to.query.link;
        }
      }
    }
    
  ]
});
