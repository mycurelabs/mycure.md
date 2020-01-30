<template lang="pug">
  //-TODO: Videos are still playing even when dialogs are closed
  div#top.white
    //- 1st panel
    usp
    //- 2nd panel
    health-suites
    //- 3rd panel
    solutions
    //- 4th panel
    storyflow(
      :storyflow="storyflowItems"
      :introduction="introText"
      :featuresButton="true"
      horizontal
    ).showPanel
    //- 5th panel
    vid
    br
    //- 6th panel
    syncbase
    hr
    //- 7th panel
    security
    hr
    //- 8th panel
    testimonial
    //- final panel
    final-words.pb-5
    //- mcFooter
</template>

<script>
import STORYFLOW_ITEMS from './storyflow-items.json';
import Usp from '@/components/home/usp';
import HealthSuites from '@/components/home/health-suites';
import Solutions from '@/components/home/solutions';
import Vid from '@/components/home/vid';
import Product from '@/components/home/product';
import Syncbase from '@/components/home/syncbase';
import Security from '@/components/home/security';
import Testimonial from '@/components/home/testimonial';
import FinalWords from '@/components/home/final-words';
import Storyflow from '@/components/commons/storyflow';
import VueScrollTo from 'vue-scrollto';

export default {
  components: {
    Usp,
    HealthSuites,
    Solutions,
    Vid,
    Product,
    Syncbase,
    Security,
    Testimonial,
    FinalWords,
    Storyflow
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  },
  data () {
    return {
      signInURL: process.env.VUE_APP_SIGNIN_URL,
      introText: 'Designed for your health facility',
      storyflowItems: STORYFLOW_ITEMS
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

