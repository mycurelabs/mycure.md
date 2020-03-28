<template lang="pug">
  fragment
    loader
</template>

<script>
import headMeta from '~/utils/head-meta';
import Loader from '~/components/commons/loader';
export default {
  layout: 'empty',
  components: {
    Loader,
  },
  created () {
    this.$nuxt.$router.push({ name: 'signup-multispecialty-step-1' });
  },
  head () {
    return headMeta({
      title: 'Book a Free Demo for MYCURE Clinic Management System',
      description: 'Book a free demo with MYCURE Specialists to learn more how the clinic management system can help boost your clinic performance',
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
};
</script>
