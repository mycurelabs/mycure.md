<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    workflow
    //- 3rd panel
    features
    //- 4th panel
    storyflow(
      :introduction="storyflowIntro"
      :storyflow="storyflowItems"
      horizontal
      :customPath="storyflowCustomPath"
      white-bg
    )
    //- cta
    mc-cta-bottom(
      parse-text
      :parseIndicators="['work']"
      :ctaContent="ctaContent"
    ).mt-10
</template>

<script>
import VueScrollTo from 'vue-scrollto';
// - constants
import STORYFLOW_ITEMS from './storyflow-items.json';
// - components
import Usp from '~/components/multispecialty-clinics/usp';
// - utils
import headMeta from '~/utils/head-meta';
import { parseTextWithNewLine } from '~/utils/newline';

export default {
  components: {
    Usp,
    Workflow: () => import('~/components/multispecialty-clinics/workflow'),
    Features: () => import('~/components/multispecialty-clinics/features'),
    Storyflow: () => import('~/components/commons/storyflow'),
    McCtaBottom: () => import('~/components/commons/mc-cta-bottom'),
  },
  data () {
    this.storyflowItems = STORYFLOW_ITEMS;
    this.storyflowCustomPath = 'multispecialty/';
    return {
      ctaContent: {
        text: 'Premium clinical services work best with premium technology',
        subtext: this.parseCtaSubtext(),
        btnText: 'Book A Free Demo',
        btnLink: 'signup-multispecialty',
        image: 'mycure-web-footer',
      },
    };
  },
  computed: {
    storyflowIntro () {
      const text = 'Make your patients and your staff become more engaged';
      return parseTextWithNewLine(text, ['staff']);
    },
  },
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
  },
  methods: {
    parseCtaSubtext () {
      const text = 'Your multispecialty clinic deserves the most advanced clinic management system around. Do more with MYCURE technology by your side.';
      return parseTextWithNewLine(text, ['around.']);
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE Clinic Management System for Multispecialty Clinics',
      description: 'MYCURE is the best EMR clinic management system for multispecialty clinics with its simplified workflows and faster performance. Book a free demo now!',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Multispecialty.png?alt=media&token=771bd2f8-fd7b-47fd-9bb9-0f495f1e94f8',
    });
  },
};
</script>
