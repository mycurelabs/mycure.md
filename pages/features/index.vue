<template lang="pug">
  div#top.white
    usp
</template>

<script>
import VueScrollTo from 'vue-scrollto';
// - components
import Usp from '~/components/features/usp';
// - utils
import { parseTextWithNewLine } from '~/utils/newline';
import headMeta from '~/utils/head-meta';

export default {
  components: {
    Usp,
  },
  data () {
    return {
      ctaContent: {
        text: 'Embrace a new habit',
        subtext: this.parseCtaSubText(),
        btnText: 'Get Started Today',
        image: 'mycure-web-footer',
      },
    };
  },
  computed: {
    uspTitle () {
      const { title } = this.uspContents;
      return parseTextWithNewLine(title, ['time', 'more']);
    },
  },
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
  },
  methods: {
    parseCtaSubText () {
      const subtext = 'Let your patients experience top-of-the-line services with the help of MYCURE.';
      return subtext;
    },
  },
  head () {
    return headMeta({
      title: 'Clinic Management System and EMR Features',
      description: 'MYCURE Clinic Management System includes modularized features that are customizable, user-friendly and efficient for a more patient-centric care.',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Features.png?alt=media&token=6bac1cce-cd24-4af2-b3d8-b0cf3005ec91',
    });
  },
};
</script>
