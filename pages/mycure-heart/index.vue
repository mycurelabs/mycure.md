<template lang="pug">
  div#top.white
    //- 1st panel
    usp
    //- 2nd panel
    features.mt-10
    //- 3rd panel
    storyflow(
      :storyflow="storyflowItems"
      :metaTitle="storyflowMetaTitle"
      :introduction="introText"
      :customPath="customPath"
      horizontal
      highlight-title-size="25"
      parse-titles
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
  },
  data () {
    this.storyflowItems = [
      {
        title: 'Real-time Analytics',
        parseIndicators: ['Real-time'],
        text: 'How many are sick in a particular area? Do we have enough medicines? MYCURE Guardian provides critical answers to what is happening on the ground.',
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
    return {};
  },
  computed: {
    introText () {
      const text = 'MYCURE Heart promotes good governance, transparency, and accountability.';
      return parseTextWithNewLine(text, ['governance,']);
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE Heart: Free EMR for LGUs',
      description: 'Securely manage  your community’s health data with an enterprise-grade Electronic Medical Records (EMR) System that runs on your own cloud server.',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
};
</script>
