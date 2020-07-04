<template lang="pug">
  generic-container
    v-row(justify="center" align="center").mb-10
      v-col(cols="12").text-center.pa-1
        h1.font-weight-bold Hundreds of doctors with different specializations #[br] from amazing clinics all over the country.
      v-col(cols="12" md="8").pa-1
        v-text-field(
          append-icon="mdi-magnify"
          background-color="white"
          label="Search doctor name, or specialization"
          clearable
          hide-details
          outlined
          :loading="isLoading"
          @click:append="searchDoctorSpecialization"
          @keydown.enter="searchDoctorSpecialization"
          @click:clear="isSearching = false"
        )
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: {
    GenericContainer,
  },
  data () {
    return {
      searchItem: '',
      isSearching: false,
      isLoading: false,
    };
  },
  methods: {
    async searchDoctorSpecialization () {
      this.isLoading = true;
      await setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.usp-panel {
  background-image: url('../../assets/images/directory-doctor/MYCURE-Doctor-Directory-Left-First-Panel-Image.png'), url('../../assets/images/directory-doctor/MYCURE-Doctor-Directory-Right-First-Panel-Image.png');
  background-position: left bottom, right bottom;
}
@media screen and (min-width: 1920px) {
  .search-field {
    padding: 0 75px !important;
  }
}
</style>
