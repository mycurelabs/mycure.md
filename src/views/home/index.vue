<template lang="pug">
  //-TODO: Videos are still playing even when dialogs are closed
  div#top.white
    //- 1st panel
    usp(@getStarted="getStarted")
    //- 2nd panel
    health-suites#health-suites
    //- 3rd panel
    solutions
    //- 4th panel
    storyflow(
      :storyflow="storyflowItems"
      :introduction="introText"
      featuresButton
      horizontal
    ).showPanel
    //- 5th panel
    vid
    br
    //- 6th panel
    syncbase
    hr
    //- 7th panel
    privacy
    //- 8th panel
    testimonial
    //- final panel
    mc-cta-bottom(
      parse-text
      :parseIndicators="['for']"
      :ctaContent="ctaContent"
      @btnClick="getStarted"
    )
    //- mcFooter
</template>

<script>
import STORYFLOW_ITEMS from './storyflow-items.json';
import CTA_CONTENT from './cta-contents.json';
import Usp from '@/components/home/usp';
import HealthSuites from '@/components/home/health-suites';
import Solutions from '@/components/home/solutions';
import Vid from '@/components/home/vid';
import Syncbase from '@/components/home/syncbase';
import Privacy from '@/components/home/privacy';
import Testimonial from '@/components/home/testimonial';
import McCtaBottom from '@/components/commons/mc-cta-bottom';
import Storyflow from '@/components/commons/storyflow';
import VueScrollTo from 'vue-scrollto';

export default {
  components: {
    Usp,
    HealthSuites,
    Solutions,
    Vid,
    Syncbase,
    Privacy,
    Testimonial,
    McCtaBottom,
    Storyflow
  },
  mounted () {
    this.$route.params.scrollHealthSuites ? this.getStarted()
      : VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  },
  data () {
    return {
      signInURL: process.env.VUE_APP_SIGNIN_URL,
      introText: 'Designed for your health facility',
      storyflowItems: STORYFLOW_ITEMS,
      ctaContent: CTA_CONTENT
    };
  },
  methods: {
    getStarted () {
      VueScrollTo.scrollTo(`#health-suites`, 500, { easing: 'ease' });
    }
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

