<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12" md="10").pb-0
        v-toolbar(
          height="84"
          color="white"
        ).toolbar
          v-col(cols="10" md="11").d-flex.mt-2.justify-space-between
            v-col(cols="6" md="8").search-fields
              v-toolbar-title.font-14.ml-4.text-left.font-weight-bold Facility
                v-text-field(
                  v-model="orgSearchQuery"
                  placeholder="Search for a health facility"
                  clearable
                  @click:clear="clearTextfield"
                  @keyup.enter="searchFacility(orgSearchQuery, orgSearchLocation)"
                ).font-14.font-weight-regular
            v-divider(inset vertical).mt-6.mb-8
            v-col(cols="4" md="4").search-fields
              v-toolbar-title.font-14.ml-4.text-left.font-weight-bold Location
                v-autocomplete(
                  placeholder="Municipality"
                  v-model="orgSearchLocation"
                  clearable
                  :items="provinces"
                  @keyup.enter="searchFacility(orgSearchQuery, orgSearchLocation)"
                ).font-14.font-weight-regular
          v-spacer
          v-btn(
            v-if="!icon"
            depressed
            large
            rounded
            color="primary"
          ) #[b Search Now]
          v-btn(
            v-else
            large
            fab
            color="primary"
            @click="searchFacility(orgSearchQuery, orgSearchLocation)"
          )
            v-icon mdi-magnify
</template>
<script>
export default {
  props: {
    icon: {
      type: Boolean,
      default: false,
    },
    provinces: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      orgSearchQuery: null,
      orgSearchLocation: '',
    };
  },
  watch: {
    orgSearchQuery (val) {
      (val === null || val === undefined) && this.$emit('clear-organizations');
    },
  },
  methods: {
    searchFacility (searchText, locationText) {
      this.$emit('search-organizations', { searchText, locationText });
    },
    clearTextfield () {
      this.orgSearchLocation = '';
      this.$emit('clear-organizations');
    },
  },
};
</script>

<style scoped>
.toolbar{
  border-radius: 50px;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.18);
}

.filter-menu {
  flex-wrap: nowrap !important;
  font-weight: 600;
}

.filter >>> .v-input__slot {
  box-shadow: none !important;
  background-color: #0369A5 !important;
  border: none !important;
}

.filter >>> label {
  font-size: 14px;
  color: #FFFFFF;
}

.filter >>> i {
  color: #FFFFFF;
}

.search-fields >>> .v-input__slot::before {
  border-style: none !important;
}

.search-select >>> .v-select__selection--comma {
  color: #FFFFFF !important;
}

.suggestion-item {
  flex: auto;
}
</style>
