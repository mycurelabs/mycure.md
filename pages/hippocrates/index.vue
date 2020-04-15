<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    features
    //- 3rd panel
    workflow
    //- 4th panel
    storyflow(
      :storyflow="storyflowItems"
      :introduction="introduction"
      :customPath="customPath"
      horizontal
      highlightTitleSize="28"
    ).mt-10
    //- CTA
    mc-cta-bottom(
      parse-text
      :parseIndicators="['patients', 'from the']"
      :ctaContent="ctaContent"
    ).mt-10
</template>

<script>
// utils
import VueScrollTo from 'vue-scrollto';
import { parseTextWithNewLine } from '../../utils/newline';
import headMeta from '~/utils/head-meta';
// components
import Usp from '~/components/hippocrates/usp';
export default {
  components: {
    Usp,
    Features: () => import('~/components/hippocrates/features'),
    Workflow: () => import('~/components/hippocrates/workflow'),
    Storyflow: () => import('~/components/commons/storyflow'),
    McCtaBottom: () => import('~/components/commons/mc-cta-bottom'),
  },
  data () {
    this.storyflowItems = [
      {
        title: 'Value for Safety',
        text: 'Accept physical consultations only as needed. Significantly reduce the COVID-19 risk exposure for both your patients and your health workers by accommodating patients virtually.',
        image: 'mycure-hippocrates-feature-icon-safety.png',
      },
      {
        title: 'Consistency and Accessibility',
        text: 'Your doctors can continue their practices online while your patients can continue to consult with their physicians under the hospital brand they trust.',
        image: 'mycure-hippocrates-feature-icon-consistent.png',
      },
      {
        title: 'A Complete Clinic System',
        text: 'Hippocrates integrates with MYCURE’s holistic clinic management system to accommodate all of your operations—from patient transactions to consultations and even diagnostic services.',
        image: 'mycure-hippocrates-feature-icon-complete.png',
      },
    ];
    this.introText = 'Take care of both your doctors and your patients.';
    this.customPath = 'hippocrates/';
    return {
      ctaContent: {
        text: 'Continue to provide your patients with the best of care from the safety of their homes',
        subtext: 'Take your Medical Arts Center online with the most advanced clinic management solution around.',
        btnText: 'Book A Free Demo',
        btnLink: 'signup-multispecialty',
        image: 'mycure-web-footer',
      },
    };
  },
  computed: {
    introduction () {
      return this.$isMobile
        ? this.introText
        : parseTextWithNewLine(this.introText, ['both']);
    },
  },
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
  },
  head () {
    return headMeta({
      title: 'Hippocrates by MYCURE',
      description: 'A Complete Clinic Management Solution for your Medical Arts Center',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
};
</script>
