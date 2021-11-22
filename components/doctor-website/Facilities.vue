<template lang="pug">
  v-row(style="max-height:700px; overflow-y: auto;")
    v-col(v-if="!clinics.length" cols="12")
      v-skeleton-loader(v-if="loading" type="article, actions")
      p(v-else).font-open-sans.font-gray.mt-1 This doctor has no listed organizations. Please come and check another time!
    template(v-else)
      v-col(
        v-for="(clinic, key) in clinics"
        :key="key"
        cols="12"
      )
        facility-item(
          :clinic="clinic"
          :doctor-id="doctorId"
          :is-preview-mode="isPreviewMode"
        )
      v-col(cols="12")
        v-pagination(
          v-model="page"
          :length="length"
        )
</template>

<script>
// import VueScrollTo from 'vue-scrollto';
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
    loading: {
      type: Boolean,
      default: true,
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
      this.scrollToTop();
      this.$emit('onUpdatePage', val);
      return val;
    },
  },
};
</script>

<style scoped>
/* #clinics-list-top {
  height: 700px;
  width: 100%;
  overflow-y: scroll;
} */

#clinics-list-top::-webkit-scrollbar {
  width: 11px;
}

#clinics-list-top::-webkit-scrollbar-thumb {
  background-color: #04B1E7;
  border-radius: 6px;
  border: 3px solid #f3f0dd;
}
</style>
