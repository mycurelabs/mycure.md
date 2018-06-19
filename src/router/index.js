import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import ourStory from '@/components/our-story';
import modules from '@/components/modules';
import pricing from '@/components/pricing';
import printDemo from '@/components/print-demo';
import directory from '@/components/directory';

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
      path: '/directory',
      name: 'directory',
      component: directory
    },
    {
      path: '/print-demo',
      name: 'print-demo',
      component: printDemo
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter() { window.open('https://login.mycure.md') }
    },
    {
      path: '/join-today',
      name: 'join-today',
      beforeEnter() { window.open('https://login.mycure.md/signup') }
    },
    {
      path: '/join-today-doctors',
      name: 'join-today-doctors',
      beforeEnter() { window.open('https://login.mycure.md/signup/medical-professional') }
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
      path: '/request-demo-link',
      name: 'request-demo-link',
      beforeEnter() { window.open('https://docs.google.com/forms/d/e/1FAIpQLSfjshsDWT8gfL_ktnuYJVZI50d14i4_2pUT-wBXJGRcdmB83w/viewform?c=0&w=1&usp=send_form') }
    },
    {
      path: '/blog-link',
      name: 'blog-link',
      beforeEnter() { window.open('http://blog.mycure.md/') }
    }
  ]
});
