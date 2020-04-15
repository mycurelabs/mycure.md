<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    features
    //- 3rd panel
    //- 4th panel
    //- 5th panel
</template>

<script>
// utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// components
import Usp from '~/components/hippocrates/usp';
export default {
  components: {
    Usp,
    Features: () => import('~/components/hippocrates/features'),
  },
  data () {
    return {};
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
