<template lang="pug">
  div#top.white
    //- 1st panel
    usp
</template>

<script>
// utils
import headMeta from '~/utils/head-meta';
// components
import Usp from '~/components/mycure-heart/usp';
export default {
  components: {
    Usp,
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
