import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import ourStory from '@/components/our-story'

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
    }
  ]
});
