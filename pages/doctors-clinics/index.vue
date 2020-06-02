<template lang="pug">
  div#top
    //- 1st panel
    Usp
    //- 2nd panel
    IncreaseRevenue
    //- 3rd panel
    SafekeepData
    //- 4th panel
    PracticeOnline
    //- 5th panel
    SpecializedPlans
    //- 6th panel
    QualityHealthcare
    //- 7th panel
    div.cta-container
      Cta
    //- )
</template>

<script>
// utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// components
import Usp from '~/components/doctors-clinics/usp';
import IncreaseRevenue from '~/components/doctors-clinics/increase-revenue';
import SafekeepData from '~/components/doctors-clinics/safekeep-data';
import PracticeOnline from '~/components/doctors-clinics/practice-online';
import SpecializedPlans from '~/components/doctors-clinics/specialized-plans';
import QualityHealthcare from '~/components/doctors-clinics/quality-healthcare';
import Cta from '~/components/doctors-clinics/cta';

export default {
  components: {
    Usp,
    IncreaseRevenue,
    SafekeepData,
    PracticeOnline,
    SpecializedPlans,
    QualityHealthcare,
    Cta,
  },
  data () {
    return {
      loading: true,
    };
  },
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    this.loading = false;
  },
  head () {
    return headMeta({
      title: 'MYCURE EMR Practice Management Solution for Doctors',
      description: 'MYCURE is the best EMR clinic practice management system that helps doctors doing solo or group practice manage their daily clinical needs. Start FREE today!',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Doctors-Clinic.png?alt=media&token=a4c57fe8-8ac7-479c-a959-949930299ca5',
    });
  },
};
</script>

<style scoped>
#top {
  margin-top: 12vh;
}
.cta-container {
    position: relative;
    margin-bottom: -30px;
    z-index: 1;
}
</style>
