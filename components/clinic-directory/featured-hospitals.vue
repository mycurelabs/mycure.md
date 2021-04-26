<template lang="pug">
  generic-container
    v-row
      v-col(cols="12").mb-5
        h2 Hospitals ({{ hospitalsLength }})
      template(v-for="hospital in hospitals")
        featured-hospitals-grid(:hospital="hospital")
</template>

<script>
import FeaturedHospitalsGrid from './featured-hospitals-grid';
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: {
    GenericContainer,
    FeaturedHospitalsGrid,
  },
  props: {
    hospitals: {
      type: Array,
      default: () => ([]),
    },
    hospitalsLength: {
      type: Number,
      default: 0,
    },
  },
  data () {
    return {};
  },
};
</script>
