<template lang="pug">
  div
    referral-code
</template>

<script>
import ReferralCode from '~/components/signup-individual/referral-code';
import headMeta from '~/utils/head-meta';
export default {
  layout: 'user',
  components: {
    ReferralCode,
  },
  head () {
    return headMeta({
      title: 'Start Free EMR Doctor Practice Management System',
      description: 'Create a free MYCURE account today and become a techy doctor in minutes! Better operations, beautiful reports, bye paperworks!',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images -  Homepage.png'),
    });
  },
};
</script>
