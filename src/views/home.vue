<template lang="pug">
  //-TODO: Videos are still playing even when dialogs are closed
  div#top.white
    usp
    health-suites
    solutions
    storyflow(
      :storyflow="storyflowItems"
      :introduction="introText"
      :featuresButton="true"
      horizontal
    ).showPanel
    vid
    br
    unique
    hr
    security
    hr
    testimonial
    //- targetMarketMobile(v-if="$isMobile").showPanel
    final-words.pb-5
    //- mcFooter
</template>

<script>
import Usp from '@/components/home/usp';
import HealthSuites from '@/components/home/health-suites';
import Solutions from '@/components/home/solutions';
import Vid from '@/components/home/vid';
import Product from '@/components/home/product';
import Unique from '@/components/home/unique';
import Security from '@/components/home/security';
import Testimonial from '@/components/home/testimonial';
import FinalWords from '@/components/home/final-words';
import TargetMarketMobile from '@/components/home/target-market-mobile';
import Storyflow from '@/components/commons/storyflow';
import VueScrollTo from 'vue-scrollto';

export default {
  components: {
    Usp,
    HealthSuites,
    Solutions,
    Vid,
    Product,
    Unique,
    Security,
    Testimonial,
    FinalWords,
    TargetMarketMobile,
    Storyflow
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  },
  data () {
    return {
      signInURL: process.env.VUE_APP_SIGNIN_URL,
      introText: 'Designed for your health facility',
      storyflowItems: [
        {
          title: 'Secure Electronic Health Records (EHR)',
          text: 'Powerful, robust and proven solution that organize health records based on global health standards.',
          image: 'mycure-homepage-secure.png'
        },
        {
          title: 'Solving Everyday Challenges Efficiently',
          text: 'Duplicate or missing charts, billing mishaps, excess costs, and crazy workflows become the least of your worries.',
          image: 'mycure-homepage-workflow.png'
        },
        {
          title: 'Holistic Patient Care Experience',
          text: 'From registration to billing, evaluate your patient care performance through fast reporting and analytics.',
          image: 'mycure-homepage-holistic.png'
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

