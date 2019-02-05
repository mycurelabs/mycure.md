import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import cms from '@/components/cms';
import dental from '@/components/dental';
import his from '@/components/his';
import ourStory from '@/components/our-story';
// import modules from '@/components/modules';
import signup from '@/components/signup';
import printDemo from '@/components/print-demo';
import downloadExecutable from '@/components/download-executable';
import terms from '@/components/terms';
import privacy from '@/components/privacy-policy';
import ctmPage from '@/components/ctm-page';
import notFound from '@/components/not-found';
import { core } from '@mycure/sdk';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/cms',
      name: 'cms',
      component: cms
    },
    {
      path: '/his',
      name: 'his',
      component: his
    },
    {
      path: '/dental',
      name: 'dental',
      component: dental
    },
    {
      path: '/our-story',
      name: 'our-story',
      component: ourStory
    },
    // {
    //   path: '/modules',
    //   name: 'modules',
    //   component: modules
    // },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/terms',
      name: 'terms',
      component: terms
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: privacy
    },
    // {
    //   path: '/directory',
    //   name: 'directory',
    //   component: directory
    // },
    {
      path: '/print-demo',
      name: 'print-demo',
      component: printDemo
    },
    {
      path: '/download-executable',
      name: 'download-executable',
      component: downloadExecutable
    },
    {
      path: '*',
      component: notFound
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter (to, from, next) {
        window.open('https://accounts-v4.mycure.md');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/join-today',
      name: 'join-today',
      beforeEnter (to, from, next) {
        window.open('https://accounts-v4.mycure.md/signup/');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/join-today-doctors',
      name: 'join-today-doctors',
      beforeEnter (to, from, next) {
        window.open('https://accounts-v4.mycure.md/choose-plan?type=individual');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/npc-website',
      name: 'npc-website',
      beforeEnter (to, from, next) {
        window.open('https://privacy.gov.ph/');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/fb-link',
      name: 'fb-link',
      beforeEnter (to, from, next) {
        window.open('https://www.facebook.com/mycure.md');
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
      path: '/youtube-link',
      name: 'youtube-link',
      beforeEnter (to, from, next) {
        window.open('https://www.youtube.com/channel/UCfQ5QBdFh6f9Tuj2tWkRmvg');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/ig-link',
      name: 'ig-link',
      beforeEnter (to, from, next) {
        window.open('https://www.instagram.com/lifeatmycure/');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/linkedin-link',
      name: 'linkedin-link',
      beforeEnter (to, from, next) {
        window.open('https://www.linkedin.com/company/mycure/?originalSubdomain=ph');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/request-demo-link',
      name: 'request-demo-link',
      beforeEnter (to, from, next) {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfjshsDWT8gfL_ktnuYJVZI50d14i4_2pUT-wBXJGRcdmB83w/viewform?c=0&w=1&usp=send_form');
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
      path: '/home-vid',
      name: 'home-vid',
      beforeEnter (to, from, next) {
        window.open('https://www.youtube.com/watch?v=r7oewF5qDz4');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/careers',
      name: 'careers',
      beforeEnter (to, from, next) {
        window.open('https://culture.mycure.md/awesome/');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/signup-individual',
      name: 'signup-individual',
      beforeEnter (to, from, next) {
        window.open('https://accounts-v4.mycure.md/choose-plan?type=individual');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/signup-group',
      name: 'signup-group',
      beforeEnter (to, from, next) {
        window.open('https://accounts-v4.mycure.md/create-account-group?type=group');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/signup-multi',
      name: 'signup-multi',
      beforeEnter (to, from, next) {
        window.open('https://accounts-v4.mycure.md/create-account-multi?type=multi');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/faqs-link',
      name: 'faqs-link',
      beforeEnter (to, from, next) {
        window.open('https://tutorials.mycure.md/frequently-asked-questions-faqs/');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/arabica-link',
      name: 'arabica-link',
      beforeEnter (to, from, next) {
        window.open('https://accounts-v4.mycure.md/create-account-individual?type=individual&plan=arabica');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/robusta-link',
      name: 'robusta-link',
      beforeEnter (to, from, next) {
        window.open('https://accounts-v4.mycure.md/create-account-individual?type=individual&plan=robusta');
        next({name: from.name || 'home'});
      }
    },
    {
      path: '/liberica-link',
      name: 'liberica-link',
      beforeEnter (to, from, next) {
        window.open('https://accounts-v4.mycure.md/create-account-individual?type=individual&plan=liberica');
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
      path: '/ctm-redirect-link',
      name: 'ctm-counter',
      component: ctmPage,
      async beforeEnter (to, from, next) {
        try {
          next();

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
          window.location.href = to.query.link;
        }
      }
    }
  ]
});
