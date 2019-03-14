<template lang="pug">
  div#top
    panel-1#panel-1
    mycure-for-hospitals#his
    mycure-for-clinics#cms
    mycure-for-individuals#docs
    panel-5#panel-5
    mc-footer
      
</template>

<script>
  import panel1 from './panel-1';
  import mycureForHospitals from './hospital';
  import mycureForClinics from './clinic';
  import mycureForIndividuals from './individual';
  import dental from './dental';
  import panel5 from './panel-5';
  import mcFooter from '../commons/mc-footer';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      'panel-1': panel1,
      mycureForHospitals,
      mycureForClinics,
      mycureForIndividuals,
      dental,
      'panel-5': panel5,
      mcFooter
    },
    created() { 
      this.scroll(this.$route.query.id, 500, 500);
    },
    methods: {
      scroll(id, timeout = 1000, duration = 500) {
        setTimeout(() => {
          VueScrollTo.scrollTo(`#${id}`, duration, { easing: 'ease' } );
        }, timeout);
      }
    },
    watch: {
      $route(to, from) {
        const { query } = to;
        this.scroll(query.id, 0, 500);
      }
    }
  }
</script>
