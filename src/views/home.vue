<template lang="pug">
  //-TODO: Videos are still playing even when dialogs are closed
  div#top.white
    mcToolbarHome
    usp(:uspContents="uspContents")
    storyflow(
      :storyflow="storyflowItems"
      :introduction="introText"
      :featuresButton="true"
    ).showPanel
    vid
    br
    product
    unique
    hr
    security
    hr
    targetMarket
    targetMarketMobile(v-if="$isMobile").showPanel
    mcFooter
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import usp from '@/components/commons/usp';
  import vid from '@/components/home/vid';
  import product from '@/components/home/product';
  import unique from '@/components/home/unique';
  import security from '@/components/home/security';
  import targetMarket from '@/components/home/target-market';
  import targetMarketMobile from '@/components/home/target-market-mobile';
  import storyflow from '@/components/commons/storyflow';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      mcToolbarHome,
      mcFooter,
      usp,
      vid,
      product,
      unique,
      security,
      targetMarket,
      targetMarketMobile,
      storyflow
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    },
    data () {
      return {
        // FOR USP PANEL
        signInURL: process.env.VUE_APP_SIGNIN_URL,
        uspContents: {
          metaTitle: 'MYCURE Complete Clinic Practice Management System',
          title: 'The first complete clinic \nsolution designed for \nmodern clinics that works \noffline and syncs online.',
          btn: `/choose`,
          btnId: 'home-usp-signup-btn',
          btnText: 'Sign Up Now',
          img: 'mycure-web-banner-first-panel-doctor-clinic-patients',
        },
        introText: 'The Ultimate Clinicware for Modern Clinics',
        storyflowItems: [
          {
            title: 'A Versatile Electronic Health Records (EHR)',
            text: 'Powerful, robust and proven solution to organize and secure patients’ medical records.',
            image: 'mycure-web-banner-circles-home-01-ehr.png'
          },
          {
            title: 'Solving Everyday Challenges Efficiently',
            text: 'Data privacy issues, duplicate or missing patient charts, billing & collection discrepancies, cutting down unnecessary costs, and having unreliable internet connection should be the least of the worries.',
            image: 'mycure-web-banner-circles-home-02-solve.png'
          },
          {
            title: 'Integrating the Whole Patient Journey',
            text: 'Accessible, integrated, and complete clinic management system that simplifies and automates workflow from queuing to charting to billing.',
            image: 'mycure-web-banner-circles-home-03-px-journey.png'
          }
        ]
      };
    }
  };
</script>

<style scoped>
  hr {
    border: 1px solid #2e9fdf;
    margin: auto;
    width: 10%;
  }
</style>

