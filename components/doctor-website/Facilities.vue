<template lang="pug">
  v-container
    v-row(justify="center" align="center" no-gutters)
      v-col(cols="12" md="10")
        v-row(justify="center").text-center#clinics-list-top
          v-col(cols="12").text-center
            h2
              v-icon(color="error" large left) mdi-hospital-marker
              | {{ firstName ? `${firstName}'s ` : '' }}Clinics
          v-col(
            v-for="(clinic, key) in clinics"
            :key="key"
            cols="6"
            md="4"
          )
            facility-item(:clinic="clinic" :doctor-id="doctorId")
          v-col(cols="12")
            v-pagination(
              v-model="page"
              :length="length"
            )
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import FacilityItem from './FacilityItem';
export default {
  components: {
    FacilityItem,
  },
  props: {
    doctorId: {
      type: String,
      defaut: '',
    },
    firstName: {
      type: String,
      default: '',
    },
    clinics: {
      type: Array,
      default: () => ([]),
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 6,
    },
  },
  data () {
    return {
      page: 1,
    };
  },
  computed: {
    length () {
      return Math.ceil(this.total / this.limit) || 0;
    },
  },
  watch: {
    page (val) {
      VueScrollTo.scrollTo('#clinics-list-top', 500, { easing: 'ease' });
      this.$emit('onUpdatePage', val);
      return val;
    },
  },
};
</script>
