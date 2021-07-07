<template lang="pug">
  div(v-if="!loading")#top.white
    //- 1st panel
    usp
    //- 2nd panel
    features.mt-10
    //- 3rd panel
    div(:class="{'hearts': !$isMobile}")
      storyflow(
        :storyflow="storyflowItems"
        :metaTitle="storyflowMetaTitle"
        :introduction="introText"
        :description="storyflowDescription"
        :customPath="customPath"
        horizontal
        highlight-title-size="25"
        parse-titles
      )
    //-4th panel
    banner
    //- 5th panel
    privacy
    //- 6th panel
    syncbase
    //- 7th panel
    apis
    //- final panel
    div(:class="{'hearts-cta': !$isMobile}")
      mc-cta-bottom(
        parse-text
        :parseIndicators="['health', 'advanced']"
        :ctaContent="ctaContent"
        customPath="mycure-heart/"
        @btnClick="getStarted"
      )
</template>

<script>
// utils
import headMeta from '~/utils/head-meta';
import { parseTextWithNewLine } from '~/utils/newline';
// components
import Usp from '~/components/mycure-heart/usp';
export default {
  components: {
    Usp,
    Features: () => import('~/components/mycure-heart/features'),
    Storyflow: () => import('~/components/commons/storyflow'),
    Banner: () => import('~/components/mycure-heart/banner'),
    Privacy: () => import('~/components/mycure-heart/privacy'),
    Syncbase: () => import('~/components/mycure-heart/syncbase'),
    Apis: () => import('~/components/mycure-heart/apis'),
    McCtaBottom: () => import('~/components/commons/mc-cta-bottom'),
  },
  middleware: ['disable-route'],
  data () {
    this.storyflowItems = [
      {
        title: 'Real-time Analytics',
        parseIndicators: ['Real-time'],
        text: 'How many are sick in a particular area? Do we have enough medicines? MYCURE Heart provides critical answers to what is happening on the ground.',
        image: 'mycure-heart-benefit-analytics.png',
      },
      {
        title: 'Data from the Ground Up',
        parseIndicators: ['the'],
        text: 'Consolidate data from all levels of the local government so you can provide faster and more accurate reports to the national government.',
        image: 'mycure-heart-benefit-data-portability.png',
      },
      {
        title: 'Secure Electronic Health Records (EHR)',
        parseIndicators: ['Health'],
        text: 'Use powerful, robust and proven healthcare solutions that organize community health records while being compliant to data privacy standards.',
        image: 'mycure-heart-benefit-data-secure.png',
      },
    ];
    this.storyflowMetaTitle = 'ADVANTAGES';
    this.customPath = 'mycure-heart/';
    return {
      ctaContent: {
        text: 'Strengthen your public healthcare systems with MYCURE Heart advanced cloud-based technology.',
        subtext: this.parseCtaSubText(),
        btnText: 'Get Started',
        image: 'mycure-heart-footer-image',
        mobileImage: 'mycure-heart-footer-mobile',
      },
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'Fight COVID-19: Free EMR System for LGUs and NGOs',
      description: 'MYCURE Heart securely manages  your community’s health data with an enterprise-grade Electronic Medical Records (EMR) System that runs on your own cloud server.',
      // - TODO: Replace with local if applicable
      socialBanner: require('~/assets/images/mycure-heart/MYCURE_HEART_Open_Graph_Images.png'),
    });
  },
  computed: {
    introText () {
      const text = 'MYCURE Heart promotes good governance, transparency, and accountability.';
      return parseTextWithNewLine(text, ['governance,']);
    },
    storyflowDescription () {
      const text = 'Overcoming many difficult obstacles while following protocols can become a challenge. Having an effective system helps you automate processes so you can focus on more important matters.';
      return parseTextWithNewLine(text, ['challenge.']);
    },
  },
  mounted () {
    this.loading = false;
  },
  methods: {
    parseCtaSubText () {
      const text = 'MYCURE Heart is an initiative to help fight against COVID-19. Together let’s help flatten the curve!';
      return parseTextWithNewLine(text, ['COVID-19.']);
    },
    getStarted () {
      if (process.browser) {
        window.open('https://forms.gle/y4qpv7ajERaGE5Lr7', '_blank');
      }
    },
  },
};
</script>

<style scoped>
#top {
  margin-top: 12vh;
}

.hearts {
  background-image: url('../../assets/images/mycure-heart/heart-decor-right.webp');
  background-position: top right;
}

.hearts-cta {
  background-image: url('../../assets/images/mycure-heart/heart-decor-left.webp'), url('../../assets/images/mycure-heart/heart-decor-right.webp');
  background-position: top left, center right;
}
</style>
