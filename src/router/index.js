import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import ourStory from '@/components/our-story';
import modules from '@/components/modules';
import pricing from '@/components/pricing';
import printDemo from '@/components/print-demo';
import directory from '@/components/directory';
import terms from '@/components/terms';
import privacy from '@/components/privacy-policy';
import ctmPage from '@/components/ctm-page';
import { core } from '@mycure/sdk';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/our-story',
      name: 'our-story',
      component: ourStory
    },
    {
      path: '/modules',
      name: 'modules',
      component: modules
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: pricing
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
      path: '/login',
      name: 'login',
      beforeEnter() { window.open('https://accounts-v4.mycure.md') }
    },
    {
      path: '/join-today',
      name: 'join-today',
      beforeEnter() { window.open('https://accounts-v4.mycure.md/signup/') }
    },
    {
      path: '/join-today-doctors',
      name: 'join-today-doctors',
      beforeEnter() { window.open('https://accounts-v4.mycure.md/choose-plan?type=individual') }
    },
    {
      path: '/npc-website',
      name: 'npc-website',
      beforeEnter() { window.open('https://privacy.gov.ph/') }
    },
    {
      path: '/fb-link',
      name: 'fb-link',
      beforeEnter() { window.open('https://www.facebook.com/mycure.md') }
    },
    {
      path: '/twitter-link',
      name: 'twitter-link',
      beforeEnter() { window.open('https://twitter.com/mycureapp') }
    },
    {
      path: '/youtube-link',
      name: 'youtube-link',
      beforeEnter() { window.open('https://www.youtube.com/channel/UCfQ5QBdFh6f9Tuj2tWkRmvg') }
    },
    {
      path: '/ig-link',
      name: 'ig-link',
      beforeEnter() { window.open('https://www.instagram.com/lifeatmycure/') }
    },
    {
      path: '/linkedin-link',
      name: 'linkedin-link',
      beforeEnter() { window.open('https://www.linkedin.com/company/mycure/?originalSubdomain=ph') }
    },
    {
      path: '/request-demo-link',
      name: 'request-demo-link',
      beforeEnter() { window.open('https://docs.google.com/forms/d/e/1FAIpQLSfjshsDWT8gfL_ktnuYJVZI50d14i4_2pUT-wBXJGRcdmB83w/viewform?c=0&w=1&usp=send_form') }
    },
    {
      path: '/blog-link',
      name: 'blog-link',
      beforeEnter() { window.open('http://blog.mycure.md/') }
    },
    {
      path: '/home-vid',
      name: 'home-vid',
      beforeEnter() { window.open('https://www.youtube.com/watch?v=r7oewF5qDz4') }
    },
    {
      path: '/careers',
      name: 'careers',
      beforeEnter() { window.open('https://culture.mycure.md/awesome/') }
    },
    {
      path: '/signup-individual',
      name: 'signup-individual',
      beforeEnter() { window.open('https://accounts-v4.mycure.md/choose-plan?type=individual') }
    },
    {
      path: '/signup-group',
      name: 'signup-group',
      beforeEnter() { window.open('https://accounts-v4.mycure.md/create-account-group?type=group') }
    },
    {
      path: '/signup-multi',
      name: 'signup-multi',
      beforeEnter() { window.open('https://accounts-v4.mycure.md/create-account-multi?type=multi') }
    },
    {
      path: '/faqs-link',
      name: 'faqs-link',
      beforeEnter() { window.open('https://tutorials.mycure.md/frequently-asked-questions-faqs/') }
    },
    {
      path: '/arabica-link',
      name: 'arabica-link',
      beforeEnter() { window.open('https://accounts-v4.mycure.md/create-account-individual?type=individual&plan=arabica') }
    },
    {
      path: '/robusta-link',
      name: 'robusta-link',
      beforeEnter() { window.open('https://accounts-v4.mycure.md/create-account-individual?type=individual&plan=robusta') }
    },
    {
      path: '/liberica-link',
      name: 'liberica-link',
      beforeEnter() { window.open('https://accounts-v4.mycure.md/create-account-individual?type=individual&plan=liberica') }
    },
    {
      path: '/data-privacy-for-physicians',
      name: 'data-privacy-for-physicians',
      beforeEnter() { window.open('http://blog.mycure.md/2018/04/26/data-privacy-for-physicians/') }
    },
    {
      path: '/ctm-redirect-link',
      name: 'ctm-counter',
      component: ctmPage,
      async beforeEnter(to, from, next) {
        next();

        const { link, src, ctm } = to.query;

        if(!link || !src || !ctm) {
          location.href = 'https://mycure.md';
          return;
        }

        const campaign = {
          type: 'campaign-link-click',
          source: to.query.src,
          campaign: to.query.ctm
        }

        await core.system.counters().create(campaign);

        location.href = to.query.link;
      }
    }
  ]
});