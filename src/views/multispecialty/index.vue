<template lang="pug">
  div#top
    //- 1st panel
    usp
    

</template>

<script>
import Usp from '@/components/multispecialty/usp';
import VueScrollTo from 'vue-scrollto';

export default {
  components: {
    Usp
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  }
};
</script>