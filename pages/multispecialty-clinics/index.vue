<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    workflow
    //- 3rd panel
    features
</template>

<script>
import Usp from '~/components/multispecialty-clinics/usp';
import Workflow from '~/components/multispecialty-clinics/workflow';
import Features from '~/components/multispecialty-clinics/features';
import headMeta from '~/utils/head-meta';
export default {
  components: {
    Usp,
    Workflow,
    Features,
  },
  head () {
    return headMeta({
      title: 'Clinic Management System for Multispecialty Clinics',
      description: 'MYCURE is the best EMR clinic management system for multispecialty clinics with its simplified workflows and faster performance. Book a free demo now!',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Multispecialty.png?alt=media&token=771bd2f8-fd7b-47fd-9bb9-0f495f1e94f8',
    });
  },
};
</script>
