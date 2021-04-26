<template lang="pug">
  generic-container
    v-row.mb-10
      v-col.usp-panel.ma-1
        v-row(justify="center" align="center")
          v-col(cols="12").text-center.mb-4.mt-4
            h1.font-weight-bold Hundreds of doctors with different specializations #[br] from amazing clinics all over the country.
          v-col(cols="12" md="10").pa-1
            v-text-field(
              v-model="searchText"
              background-color="white"
              label="Search doctor name"
              clearable
              hide-details
              outlined
            )
              template(slot="append")
                v-btn(
                  fab
                  small
                  color="primary"
                  @click="search"
                ).elevation-0.mt-n2
                  v-icon(small) mdi-magnify
          //- v-col(cols="12" md="2").pa-1
          //-   v-btn(
          //-     style="height: 55px; margin-bottom: 1px"
          //-     block
          //-     depressed
          //-     large
          //-     outlined
          //-     :disabled="!searchText"
          //-     @click="search"
          //-   ).text-none Search
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: {
    GenericContainer,
  },
  data () {
    return {
      searchText: '',
    };
  },
  methods: {
    search () {
      this.$emit('search', this.searchText);
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
