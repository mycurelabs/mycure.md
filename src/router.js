import Vue from 'vue';
import Router from 'vue-router';
import { core } from '@mycure/sdk';

import csr from '@/views/csr.vue';
import notFound from '@/views/404.vue';
import ourStory from '@/views/our-story.vue';
import privacyPolicy from '@/views/privacy-policy.vue';
import signupIndividualStep1 from '@/components/signup-individual/step-1.vue';
import signupIndividualStep2 from '@/components/signup-individual/step-2.vue';
import signupMultispecialtyStep1 from '@/components/signup-multispecialty/step-1.vue';
import signupMultispecialtyStep2 from '@/components/signup-multispecialty/step-2.vue';
import signupMultispecialtyStep3 from '@/components/signup-multispecialty/step-3.vue';
import signupSpecializedStep2 from '@/components/signup-specialized/step-2.vue';
import signupSpecializedStep3 from '@/components/signup-specialized/step-3.vue';
import paymentSuccesss from '@/views/payment/success.vue';
import paymentError from '@/views/payment/error.vue';
import terms from '@/views/terms.vue';

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
      component: () => import(/* webpackChunkName: 'home' */ '@/views/home')
    },
    {
      path: '/signin',
      name: 'signin', 
      component: () => import(/* webpackChunkName: 'signin' */ '@/views/signin'),
      meta: {
        pageType: 'signin',
        pageName: 'Signin Page',
        account: true
      }
    },
    {
      path: '/forgot-password',
      name: 'forgot-password', 
      component: () => import(/* webpackChunkName: 'forgot-password' */ '@/views/forgot-password'),
      meta: {
        pageType: 'forgot-password',
        pageName: 'Forgot Password Page',
        account: true
      }
    },
    {
      path: '/signup/choose',
      name: 'signup-choose',
      component: () => import(/* webpackChunkName: 'signup-choose' */ '@/views/signup-choose'),
      meta: {
        pageType: 'signup-choose',
        pageName: 'Signup Choose',
        account: true
      }
    },
    {
      path: '/signup/multispecialty',
      name: 'signup-multispecialty', 
      component: () => import(/* webpackChunkName: 'signup-multispecialty' */  '@/views/signup-multispecialty'),
      redirect: '/signup/multispecialty/step-1',
      meta: {
        pageType: 'signup-multispecialty',
        pageName: 'Signup Miltispecialty',
        account: true
      },
      children: [
        {
          path: 'step-1',
          name: 'signup-multispecialty-step-1',
          component: signupMultispecialtyStep1,
          meta: {
            account: true
          }
        },
        {
          path: 'step-2',
          name: 'signup-multispecialty-step-2',
          component: signupMultispecialtyStep2,
          meta: {
            account: true
          }
        },
        {
          path: 'step-3',
          name: 'signup-multispecialty-step-3',
          component: signupMultispecialtyStep3,
          meta: {
            account: true
          }
        },
      ]
    },
    {
      path: '/signup/individual',
      name: 'signup-individual', 
      component: () => import (/* webpackChunkName */ '@/views/signup-individual'),
      redirect: '/signup/individual/step-1',
      meta: {
        pageType: 'signup-individual',
        pageName: 'Signup Individual',
        account: true
      },
      children: [
        {
          path: 'step-1',
          name: 'signup-individual-step-1',
          component: signupIndividualStep1,
          meta: {
            pageType: 'signup-individual',
            account: true
          }
        },
        {
          path: 'step-2',
          name: 'signup-individual-step-2',
          component: signupIndividualStep2,
          meta: {
            pageType: 'signup-individual',
            account: true
          }
        }
      ]
    },
    {
      path: '/signup/specialized',
      name: 'signup-specialized', 
      component: () => import (/* webpackChunkName */ '@/views/signup-specialized'),
      redirect: '/signup/specialized/step-1',
      meta: {
        pageType: 'signup-specialized',
        pageName: 'Signup Specialized',
        account: true
      },
      children: [
        {
          path: 'step-1',
          name: 'signup-specialized-step-1',
          component: signupIndividualStep1,
          meta: {
            pageType: 'signup-specialized',
            account: true
          }
        },
        {
          path: 'step-2',
          name: 'signup-specialized-step-2',
          component: signupSpecializedStep2,
          meta: {
            pageType: 'signup-specialized',
            account: true
          }
        },
        {
          path: 'step-3',
          name: 'signup-specialized-step-3',
          component: signupSpecializedStep3,
          meta: {
            pageType: 'signup-specialized',
            account: true
          }
        }
        // {
        //   path: 'step-4',
        //   name: 'signup-specialized-step-4',
        //   component: signupSpecializedStep4,
        //   meta: {
        //     pageType: 'signup-specialized',
        //     account: true
        //   }
        // }
      ]
    },
    {
      path: '/payment/success',
      name: 'payment-success',
      component: paymentSuccesss,
      meta: {
        pageType: 'payment',
        pageName: 'Payment Successful',
        account: true
      }
    },
    {
      path: '/payment/error',
      name: 'payment-error',
      component: paymentError,
      meta: {
        pageType: 'payment',
        pageName: 'Payment Error',
        account: true
      }
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
      path: '/doctors-clinics',
      name: 'doctors-clinics',
      id: 'nav-doctors-clinics',
      component: () => import(/* webpackChunkName: 'doctors-clinics' */ '@/views/doctors-clinics'),
      meta: {
        pageType: 'clinic-solutions',
        pageName: 'Doctors Clinics'
      }
    },
    {
      path: '/multispecialty-clinics',
      name: 'multispecialty-clinics',
      id: 'nav-multispecialty-btn',
      component: () => import(/* webpackChunkName: 'multispecialty' */ '@/views/multispecialty'),
      meta: {
        pageType: 'clinic-solutions',
        pageName: 'Multispecialty Clinics'
      }
    },
    {
      path: '/specialized-clinics',
      name: 'specialized-clinics',
      id: 'nav-specialized-btn',
      component: () => import(/* webpackChunkName: 'specialized' */ '@/views/specialized'),
      meta: {
        pageType: 'clinic-solutions',
        pageName: 'Specialized Clinics'
      }
    },
    {
      path: '/pricing',
      name: 'pricing', 
      component: () => import(/* webpackChunkName */ '@/views/pricing.vue'),
      meta: {
        pageType: 'support',
        pageName: 'Pricing'
      }
    },
    {
      path: '/corporate-social-responsibility',
      name: 'csr',
      id: 'toolbar-csr-btn', 
      component: csr,
      meta: {
        pageType: '',
        pageName: 'CSR'
      }
    },
    {
      path: '/features',
      name: 'features',
      id: 'toolbar-features-btn', 
      component: () => import(/* webpackChunkName */ '@/views/features'),
      meta: {
        pageType: '',
        pageName: 'Features'
      }
    },
    {
      path: '/solo',
      name: 'solo',
      beforeEnter (to, from, next) {
        window.open('https://solo.mycure.md/');
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
          window.location.href = to.query.link;
        }
      }
    }
  ]
});
