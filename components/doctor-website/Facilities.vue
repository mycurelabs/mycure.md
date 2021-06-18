<template lang="pug">
  v-row#clinics-list-top
    v-col(v-if="!clinics.length" cols="12")
      p.font-open-sans.font-gray.mt-1 This doctor has no listed organizations. Please come and check another time!
    template(v-else)
      v-col(
        v-for="(clinic, key) in clinics"
        :key="key"
        cols="12"
        md="6"
      )
        facility-item(:clinic="clinic" :doctor-id="doctorId" :is-preview-mode="isPreviewMode")
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
    isPreviewMode: {
      type: Boolean,
      default: false,
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

<style scoped>
#clinics-list-top {
  height: 800px;
  overflow-y: scroll;
}
</style>
