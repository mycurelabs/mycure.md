<template lang="pug">
  generic-container
    v-row
      v-col(cols="12").mb-5
        h2 Clinics ({{ clinicsLength }})
      template(v-for="clinic in clinics")
        featured-clinics-grid(:clinic="clinic")
</template>

<script>
import FeaturedClinicsGrid from './featured-clinics-grid';
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: { GenericContainer, FeaturedClinicsGrid },
  props: {
    clinics: {
      type: Array,
      default: () => ([]),
    },
    clinicsLength: {
      type: Number,
      default: 0,
    },
  },
  data () {
    return {};
  },
};
</script>
