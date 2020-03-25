<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    workflow
    //- 3rd panel
    features
    //- 4th panel
    pricing
</template>

<script>
// components
import Usp from '~/components/doctors-clinics/usp';
import Workflow from '~/components/doctors-clinics/workflow';
import Features from '~/components/doctors-clinics/features';
import Pricing from '~/components/doctors-clinics/pricing';
// utils
import headMeta from '~/utils/head-meta';
export default {
  components: {
    Usp,
    Workflow,
    Features,
    Pricing,
  },
  head () {
    return headMeta({
      title: 'EMR Practice Management Solution for Doctors',
      description: 'MYCURE is the best EMR clinic practice management system that helps doctors doing solo or group practice manage their daily clinical needs. Start FREE today!',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Doctors-Clinic.png?alt=media&token=a4c57fe8-8ac7-479c-a959-949930299ca5',
    });
  },
};
</script>
