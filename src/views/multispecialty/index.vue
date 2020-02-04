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
import Usp from '@/components/multispecialty/usp';
import Workflow from '@/components/multispecialty/workflow';
import Features from '@/components/multispecialty/features';
import VueScrollTo from 'vue-scrollto';

export default {
  components: {
    Usp,
    Workflow,
    Features
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  }
};
</script>