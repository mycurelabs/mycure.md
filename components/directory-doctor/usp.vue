<template lang="pug">
  //- v-container
  //-   v-row(justify="center" align="center")
  //-     v-col(cols="12" md="11").pb-0
  //-       v-combobox(
  //-         v-model="orgSuggestionsSearchQuery"
  //-         color="white"
  //-         item-text="name"
  //-         placeholder="Search for clinics"
  //-         return-object
  //-         solo
  //-         rounded
  //-         :height="$isMobile ? '40px' : '60px'"
  //-         :items="orgSuggestions"
  //-         :clear-icon="null"
  //-         @update:search-input="debouncedSuggestionsSearch"
  //-         @keyup.enter="searchFacility"
  //-         @change="onSelectOrganization"
  //-       ).font-14.font-weight-regular
  //-         template(v-slot:append)
  //-           v-row
  //-             //- voice search
  //-               v-btn(
  //-                 icon
  //-                 color="primary"
  //-               ).mx-1.pt-1
  //-                 v-icon mdi-microphone
  //-             v-btn(
  //-               v-if="!$isMobile"
  //-               fab
  //-               small
  //-               color="primary"
  //-               @click="searchFacility(true)"
  //-             ).elevation-0
  //-               v-icon mdi-magnify
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
      orgSuggestions: [],
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
