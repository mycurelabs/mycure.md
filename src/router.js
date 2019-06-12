import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/home.vue';
import ourStory from '@/views/our-story.vue';
import emr from '@/components/electronic-medical-records';
import cms from '@/components/clinic-management-system';
import pricing from '@/components/pricing';
import features from '@/components/features';
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
      component: () => import(/* webpackChunkName: 'privacy-policy' */ '@/components/privacy-policy'),
      meta: {
        pageType: 'legal',
        pageName: 'Privacy Policy'
      }
    },
    {
      path: '/terms',
      name: 'terms', 
      component: () => import(/* webpackChunkName: 'terms' */ '@/components/terms'),
      meta: {
        pageType: 'legal',
        pageName: 'Terms'
      }
    },
    {
      path: '/our-story',
      name: 'our-story', 
      // TODO: lazy load this
      component: ourStory,
      meta: {
        pageType: 'about',
        pageName: 'Our Story'
      }
    },
    {
      path: '/electronic-medical-records',
      name: 'emr', 
      // TODO: lazy load this
      component: emr,
      meta: {
        pageType: 'main',
        pageName: 'Private Practice'
      }
    },
    {
      path: '/clinic-management-system',
      name: 'cms', 
      // TODO: lazy load this
      component: cms,
      meta: {
        pageType: 'main',
        pageName: 'Multyspecialty Clinics'
      }
    },
    {
      path: '/pricing',
      name: 'pricing', 
      // TODO: lazy load this
      component: pricing,
      meta: {
        pageType: 'support',
        pageName: 'Pricing'
      }
    },
    {
      path: '/features',
      name: 'features', 
      // TODO: lazy load this
      component: features,
      meta: {
        pageType: 'main',
        pageName: 'Features'
      }
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
            pageType: 'campaign-link-click',
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
