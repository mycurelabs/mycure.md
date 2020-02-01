<template lang="pug">
  div.white#top
    usp(:uspContents="uspContents")
    problems
    product
    div.skyBg
      storyflow(
        :storyflow="storyflowItems"
        :introduction="introText"
      )
      privatePrac
      finalWords
      pricing.padding-top-100
      filler
        //- //- //- span(v-if="!$isMobile" slot="question").font-40 Are you part of a group clinic?
        //- //- //- span(v-else slot="question").font-30 Are you part of a group clinic?        
        //- //- span(v-if="!$isMobile" slot="chatWindow" @click="toggleChat").font-40.pointer.font-mc-blue Ask us how it works.
        //- span(v-else slot="chatWindow" @click="toggleChat").font-30.pointer.font-mc-blue Ask us how it works.
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import usp from '@/components/commons/usp';
  import problems from '@/components/electronic-medical-records/problems';
  import product from '@/components/electronic-medical-records/product';
  import pricing from '@/components/electronic-medical-records/pricing';
  import storyflow from '@/components/commons/storyflow';
  import privatePrac from '@/components/electronic-medical-records/private-prac';
  import finalWords from '@/components/electronic-medical-records/final-words';
  import filler from '@/components/commons/filler';
  import VueScrollTo from 'vue-scrollto';

  export default {
    data () {
      return {
        // FOR USP PANEL
        signInURL: process.env.VUE_APP_SIGNIN_URL,
        uspContents: {
          metaTitle: 'MYCURE for Individual Practice',
          title: 'The smartest clinical \ntool for doctors that \nmakes writing a thing \nof the past.',
          btn: `private/step-1`,
          btnId: 'emr-usp-signup-btn',
          btnText: 'Sign Up Now',
          img: 'mycure-emr-web-banner-first-panel-doctor-clinic-patients',
        },
        introText: 'How It Works',
        storyflowItems: [
          {
            title: 'Manage on the Go',
            text: 'Review your charts while on the way to your clinic, while doing your rounds, or while you’re at home because MYCURE is cloud-based.',
            image: 'mycure-web-banner-circles-private-01-on-the-go.png'
          },
          {
            title: 'Oversee Security',
            text: 'Personally secure and control access to your records. MYCURE adheres to the international data privacy standards.',
            image: 'mycure-web-banner-circles-private-02-security.png'
          },
          {
            title: 'Online Profile',
            text: 'New and regular patients may reach you easily by activating your own personal website that comes free with your clinic management system.',
            image: 'mycure-web-banner-circles-private-03-online-profile.png'
          }
        ]
      };
    }, 
    components: {
      mcToolbarHome,
      mcFooter,
      usp,
      problems,
      product,
      pricing,
      storyflow,
      privatePrac,
      finalWords,
      filler
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about the Electronic Medical Records for Individual Practice.`;
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

