<template lang="pug">
  generic-container
    v-row.mb-10
      v-col.usp-panel.ma-1
        v-row(justify="center" align="center")
          v-col(cols="12").text-center.mb-4.mt-4
            h1.font-weight-bold Hundreds of doctors with different specializations #[br] from amazing clinics all over the country.
          v-col(cols="12" md="8")
            v-text-field(
              append-icon="mdi-magnify"
              background-color="white"
              label="Search doctor name"
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
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 600px;
  background-image: url('../../assets/images/directory-doctor/mycure-doctor-directory-usp-banner-full.png');
  background-position: center bottom;
}
@media screen and (min-width: 1920px) {
  .search-field {
    padding: 0 75px !important;
  }
}
</style>
