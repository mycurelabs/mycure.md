<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    workflow
</template>

<script>
import Usp from '@/components/doctors-clinics/usp';
import Workflow from '@/components/doctors-clinics/workflow';
import VueScrollTo from 'vue-scrollto';
export default {
  components: {
    Usp,
    Workflow
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  }
};
</script>