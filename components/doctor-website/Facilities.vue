<template lang="pug">
  v-row#clinics-list-top
    v-col(
      v-for="(clinic, key) in clinics"
      :key="key"
      cols="12"
      md="6"
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
      default: null,
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
