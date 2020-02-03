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
import Usp from '@/components/doctors-clinics/usp';
import Workflow from '@/components/doctors-clinics/workflow';
import Features from '@/components/doctors-clinics/features';
import Pricing from '@/components/doctors-clinics/pricing';
import VueScrollTo from 'vue-scrollto';
export default {
  components: {
    Usp,
    Workflow,
    Features,
    Pricing
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  }
};
</script>