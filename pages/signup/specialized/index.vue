<template lang="pug">
</template>

<script>
import headMeta from '~/utils/head-meta';
export default {
  layout: 'user',
  created () {
    this.$nuxt.$router.push({ name: 'signup-specialized-step-1' });
  },
  head () {
    return headMeta({
      title: 'Start Free Trial: MYCURE Clinic Management System for Specialized Clinics',
      description: 'Customize your clinic system for skin and aesthetics, maternity care, pediatrics, dentistry, or diagnostics. Start your 14-day trial now!',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
};
</script>
