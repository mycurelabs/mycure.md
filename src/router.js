import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/home.vue';
import notFound from '@/views/404.vue';
import privacyPolicy from '@/views/privacy-policy.vue';
import terms from '@/views/terms.vue';
import ourStory from '@/views/our-story.vue';
import emr from '@/views/electronic-medical-records.vue';
import cms from '@/views/clinic-management-system.vue';
import pricing from '@/views/pricing.vue';
import features from '@/views/features.vue';
import solo from '@/views/solo.vue';
import { core } from '@mycure/sdk';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/not-found'
    },
    {
      path: '/not-found',
      component: notFound
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy', 
      component: privacyPolicy,
      meta: {
        pageType: 'legal',
        pageName: 'Privacy Policy'
      }
    },
    {
      path: '/terms',
      name: 'terms', 
      component: terms,
      meta: {
        pageType: 'legal',
        pageName: 'Terms'
      }
    },
    {
      path: '/our-story',
      name: 'our-story', 
      component: ourStory,
      meta: {
        pageType: 'about',
        pageName: 'Our Story'
      }
    },
    {
      path: '/clinic-management-system',
      name: 'cms',
      id: 'toolbar-multispecialty-btn',
      component: cms,
      meta: {
        pageType: 'main',
        pageName: 'Multispecialty Clinics'
      }
    },
    {
      path: '/electronic-medical-records',
      name: 'emr', 
      id: 'toolbar-private-practice-btn',
      // function: 'foo',
      component: emr,
      meta: {
        pageType: 'main',
        pageName: 'Private Practice'
      }
    },
    {
      path: '/pricing',
      name: 'pricing', 
      component: pricing,
      meta: {
        pageType: 'support',
        pageName: 'Pricing'
      }
    },
    {
      path: '/mycure-solo',
      name: 'mycure-solo',
      id: 'toolbar-mycure-solo-btn', 
      component: solo,
      meta: {
        pageType: 'main',
        pageName: 'Solo by MYCURE'
      }
    },
    {
      path: '/features',
      name: 'features',
      id: 'toolbar-features-btn', 
      component: features,
      meta: {
        pageType: '',
        pageName: 'Features'
      }
    },
    {
      path: '/solo',
      name: 'solo',
      beforeEnter (to, from, next) {
        window.open('https://solo.health/');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/solo-early-access',
      name: 'solo-early-access',
      beforeEnter (to, from, next) {
        window.open('https://solo732284.typeform.com/to/EWQfst/');
        next({name: from.name || 'home'});
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
