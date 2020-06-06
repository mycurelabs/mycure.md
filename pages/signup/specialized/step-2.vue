<template lang="pug">
  div
    step-2-specialized
</template>

<script>
import Step2Specialized from '~/components/signup-specialized/step-2';
import headMeta from '~/utils/head-meta';
export default {
  layout: 'user',
  components: {
    Step2Specialized,
  },
  head () {
    return headMeta({
      title: 'Start Free Trial: MYCURE Clinic Management System for Specialized Clinics',
      description: 'Customize your clinic system for skin and aesthetics, maternity care, pediatrics, dentistry, or diagnostics. Start your 14-day trial now!',
      // - TODO: Replace with local if applicable
    });
  },
};
</script>
