<template lang="pug">
  div
    step-1-individual
</template>

<script>
import Step1Individual from '~/components/signup-individual/step-1';
import headMeta from '~/utils/head-meta';
export default {
  layout: 'user',
  components: {
    Step1Individual,
  },
  head () {
    return headMeta({
      title: 'Start Free EMR Doctor Practice Management System',
      description: 'Create a free MYCURE account today and become a techy doctor in minutes! Better operations, beautiful reports, bye paperworks!',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images -  Home.png'),
    });
  },
};
</script>
