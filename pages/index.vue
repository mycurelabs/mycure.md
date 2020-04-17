<template lang="pug">
  div#top.white
    //- hippocrates
    hippocrates-usp
    //- 1st panel
    usp(@getStarted="getStarted").mt-10
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
      div(slot="extra-content").text-center
        v-btn(
          text
          bottom
          large
          color="primary"
          @click="handleWatchFeatures"
        ).font-21.text-none.video-button
          v-icon mdi-play-circle
          | &nbsp;Watch Our Features In Action

        //- Video
        v-dialog(v-model="featuresVideoDialog" max-width="600")
          v-card(width="600").pt-5
            v-card-text.text-center
              iframe(
                align="middle"
                :height="!$isMobile ? '400' : '175'"
                width="100%"
                src="https://www.youtube.com/embed/YjymFVmKX_U"
                frameborder="0"
                allowfullscreen
              )
    //- 5th panel
    vid
    //- 6th panel
    syncbase
    hr
    //- 7th panel
    privacy
    hr
    //- 8th panel
    apis
    //- 9th panel
    testimonial
    //- final panel
    mc-cta-bottom(
      parse-text
      :parseIndicators="['for']"
      :ctaContent="ctaContent"
      @btnClick="getStarted"
    )
</template>

<script>
// - utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// - components
import HippocratesUsp from '~/components/hippocrates/usp';
import Usp from '~/components/home/usp';

export default {
  components: {
    HippocratesUsp,
    Usp,
    HealthSuites: () => import('~/components/home/health-suites'),
    Solutions: () => import('~/components/home/solutions'),
    Storyflow: () => import('~/components/commons/storyflow'),
    Vid: () => import('~/components/home/vid'),
    Syncbase: () => import('~/components/home/syncbase'),
    Privacy: () => import('~/components/home/privacy'),
    Apis: () => import('~/components/home/apis'),
    Testimonial: () => import('~/components/home/testimonial'),
    McCtaBottom: () => import('~/components/commons/mc-cta-bottom'),
  },
  data () {
    this.ctaContent = {
      text: 'Find the best solution for your health facility',
      btnText: 'Get Started',
      image: 'mycure-web-footer',
      mobileImage: 'mycure-web-footer-mobile',
    };
    this.storyflowItems = [
      {
        title: 'Secure Electronic Health Records (EHR)',
        text: 'Powerful, robust and proven solution that organizes health records based on global health standards.',
        image: 'mycure-homepage-secure.png',
      },
      {
        title: 'Solving Everyday Challenges Efficiently',
        text: 'Duplicate or missing charts, billing mishaps, excess costs, and crazy workflows become the least of your worries.',
        image: 'mycure-homepage-workflow.png',
      },
      {
        title: 'Holistic Patient Care Experience',
        text: 'From registration to billing, evaluate your patient care performance through fast reporting and analytics.',
        image: 'mycure-homepage-holistic.png',
      },
    ];
    this.introText = 'Designed for your health facility';
    return {
      featuresVideoDialog: false,
    };
  },
  mounted () {
    this.$nuxt.$route.params.scrollHealthSuites ? this.getStarted()
      : VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    window.$crisp.push(['safe', true]);
  },
  methods: {
    getStarted () {
      VueScrollTo.scrollTo('#health-suites', 500, { easing: 'ease' });
    },
    handleWatchFeatures () {
      this.$ga.event({
        eventCategory: 'button',
        eventLabel: 'home-watch-features-btn',
        eventAction: 'click-home-watch-features-btn',
      });

      this.featuresVideoDialog = true;
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE Advanced Complete Clinic Management System',
      description: 'MYCURE is an advanced clinic management system that optimizes workflows, gives real-time EMR and business insights — loved by doctors and medical staff.',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
};
</script>

<style scoped>
hr {
  border: 1px solid #2e9fdf;
  margin: auto;
  width: 10%;
}
.video-button {
  letter-spacing: normal;
}
</style>
