import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/Home.vue';
import privacyPolicy from '@/components/privacy-policy';
import terms from '@/components/terms';
import ourStory from '@/components/our-story';
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
      component: privacyPolicy
    },
    {
      path: '/terms',
      name: 'terms', 
      component: terms
    },
    {
      path: '/our-story',
      name: 'our-story', 
      component: ourStory
    },
    {
      path: '/electronic-medical-records',
      name: 'electronic-medical-records', 
      // TODO: temporary change only revert back to component: () => emr for prerendering
      // component: () => emr
      component: emr
    },
    {
      path: '/clinic-management-system',
      name: 'clinic-management-system', 
      component: cms
    },
    {
      path: '/pricing',
      name: 'pricing', 
      component: pricing
    },
    {
      path: '/features',
      name: 'feature', 
      component: features
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

          // TODO: inspect error
          await core.system.counters().create(campaign);

          window.location.href = to.query.link;
        } catch (e) {
          console.error(e);
          window.location.href = to.query.link;
        }
      }
    }
    
  ]
});
