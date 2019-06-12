import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/home.vue';
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
      component: () => import(/* webpackChunkName: 'privacy-policy' */ '@/views/privacy-policy'),
      meta: {
        pageType: 'legal',
        pageName: 'Privacy Policy'
      }
    },
    {
      path: '/terms',
      name: 'terms', 
      component: () => import(/* webpackChunkName: 'terms' */ '@/views/terms'),
      meta: {
        pageType: 'legal',
        pageName: 'Terms'
      }
    },
    {
      path: '/our-story',
      name: 'our-story', 
      component: () => import(/* webpackChunkName: 'our-story' */ '@/views/our-story'),
      meta: {
        pageType: 'about',
        pageName: 'Our Story'
      }
    },
    {
      path: '/electronic-medical-records',
      name: 'emr', 
      component: () => import(/* webpackChunkName: 'electronic-medical-records' */ '@/views/electronic-medical-records'),
      meta: {
        pageType: 'main',
        pageName: 'Private Practice'
      }
    },
    {
      path: '/clinic-management-system',
      name: 'cms', 
      component: () => import(/* webpackChunkName: 'clinic-management-system' */ '@/views/clinic-management-system'),
      meta: {
        pageType: 'main',
        pageName: 'Multispecialty Clinics'
      }
    },
    {
      path: '/pricing',
      name: 'pricing', 
      component: () => import(/* webpackChunkName: 'pricing' */ '@/views/pricing'),
      meta: {
        pageType: 'support',
        pageName: 'Pricing'
      }
    },
    {
      path: '/features',
      name: 'features', 
      component: () => import(/* webpackChunkName: 'features' */ '@/views/features'),
      meta: {
        pageType: 'main',
        pageName: 'Features'
      }
    },
    {
      path: '/blog-link',
      name: 'blog-link',
      beforeEnter (to, from, next) {
        window.open('http://blog.mycure.md/');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/data-privacy-for-physicians',
      name: 'data-privacy-for-physicians',
      beforeEnter (to, from, next) {
        window.open('http://blog.mycure.md/2018/04/26/data-privacy-for-physicians/');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/careers',
      name: 'careers',
      beforeEnter (to, from, next) {
        window.open('https://culture.mycure.md/');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/faqs-link',
      name: 'faqs-link',
      beforeEnter (to, from, next) {
        window.open('http://blog.mycure.md/frequently-asked-questions/');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/facebook-link',
      name: 'facebook-link',
      beforeEnter (to, from, next) {
        window.open('https://www.facebook.com/mycure.md');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/youtube-link',
      name: 'youtube-link',
      beforeEnter (to, from, next) {
        window.open('https://www.youtube.com/channel/UCfQ5QBdFh6f9Tuj2tWkRmvg');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/instagram-link',
      name: 'instagram-link',
      beforeEnter (to, from, next) {
        window.open('https://www.instagram.com/mycure.md/');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/linkedin-link',
      name: 'linkedin-link',
      beforeEnter (to, from, next) {
        window.open('https://www.linkedin.com/company/mycure');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/twitter-link',
      name: 'twitter-link',
      beforeEnter (to, from, next) {
        window.open('https://twitter.com/mycureapp');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/butchukoy',
      name: 'butchukoy',
      beforeEnter (to, from, next) {
        window.open('http://www.butchukoy.com/');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/mighty-minds',
      name: 'mighty-minds',
      beforeEnter (to, from, next) {
        window.open('http://www.mightyminds.org/');
        next({name: from.name || 'home'});
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
