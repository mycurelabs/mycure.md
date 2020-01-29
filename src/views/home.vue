<template lang="pug">
  //-TODO: Videos are still playing even when dialogs are closed
  div#top.white
    usp
    health-suites
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
    //- mcFooter
</template>

<script>
import Usp from '@/components/commons/usp';
import HealthSuites from '@/components/home/health-suites'
import Vid from '@/components/home/vid';
import Product from '@/components/home/product';
import Unique from '@/components/home/unique';
import Security from '@/components/home/security';
import TargetMarket from '@/components/home/target-market';
import TargetMarketMobile from '@/components/home/target-market-mobile';
import Storyflow from '@/components/commons/storyflow';
import VueScrollTo from 'vue-scrollto';

export default {
  components: {
    Usp,
    HealthSuites,
    Vid,
    Product,
    Unique,
    Security,
    TargetMarket,
    TargetMarketMobile,
    Storyflow
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  },
  data () {
    return {
      signInURL: process.env.VUE_APP_SIGNIN_URL,
      introText: 'The Ultimate Clinicware for Smart Clinics',
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

