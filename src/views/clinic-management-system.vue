<template lang="pug">
  div.white#top
    usp(:uspContents="uspContents")
    problems
    product
    div.skyBg
      benefits
      pricing
      finalWords
      filler
        span(v-if="!$isMobile" slot="question").font-40 Does your clinic have more than 3 branches?
        span(v-else slot="question").font-30 Does your clinic have more than 3 branches?        
        span(v-if="!$isMobile" slot="chatWindow" @click="toggleChat").font-40.pointer.font-mc-blue Talk to us.
        span(v-else slot="chatWindow" @click="toggleChat").font-30.pointer.font-mc-blue Talk to us.
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import filler from '@/components/commons/filler';
  import VueScrollTo from 'vue-scrollto';
  import usp from '@/components/commons/usp';
  import problems from '@/components/clinic-management-system/problems';
  import product from '@/components/clinic-management-system/product';
  import benefits from '@/components/clinic-management-system/benefits';
  import pricing from '@/components/clinic-management-system/pricing';
  import finalWords from '@/components/clinic-management-system/final-words';

  export default {
    data () {
      return {
        // FOR USP PANEL
        uspContents: {
          metaTitle: 'MYCURE for Multispecialty Clinics',
          title: 'The ultimate clinic \nsystem that eases the \nprocess flows of your \nmultispecialty clinic.',
          route: 'signup-multispecialty',
          btnId: 'cms-usp-signup-btn',
          btnText: 'Get Started Today',
          img: 'mycure-cms-web-banner-first-panel-doctor-clinic-patients',
        },
      };
    }, 
    components: {
      usp,
      problems,
      product,
      benefits,
      pricing,
      finalWords,
      filler,
      mcToolbarHome,
      mcFooter
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about the Clinic Management System for Multispecialty Clinics.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      }
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  };
</script>

<style scoped>
  .pointer:hover {
    cursor: pointer;
  }
</style>
