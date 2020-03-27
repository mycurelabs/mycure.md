<template lang="pug">
</template>

<script>
import headMeta from '~/utils/head-meta';
export default {
  layout: 'user',
  created () {
    this.$nuxt.$router.push({ name: 'signup-individual-step-1' });
  },
  head () {
    return headMeta({
      title: 'Start Free EMR Doctor Practice Management System',
      description: 'Create a free MYCURE account today and become a techy doctor in minutes! Better operations, beautiful reports, bye paperworks!',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
};
</script>
