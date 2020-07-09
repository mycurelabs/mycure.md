<template lang="pug">
  div
    template(v-if="!$isMobile")
      v-row(justify="center" align="end")
        v-col
          v-text-field(
            v-model="searchObject.searchString"
            append-icon="mdi-magnify"
            label="Search Doctor"
            type="text"
            clearable
            dense
            hide-details
            outlined
          ).input-field
        v-col
          v-autocomplete(
            v-model="searchObject.specialties"
            color="primary"
            label="Specialization"
            clearable
            dense
            hide-details
            outlined
            multiple
            small-chips
            :items="specialties"
          ).input-field
        v-col
          v-select(
            v-model="searchObject.sortBy"
            label="Sort By"
            item-text="text"
            clearable
            dense
            hide-details
            outlined
            return-object
            :items="sortBy"
          ).input-field
        v-col.col-auto
          div.d-flex.justify-end
            v-btn(tile icon)
              v-icon(
                size="28"
                color="grey"
              ) mdi-view-grid
            v-btn(tile icon)
              v-icon(
                size="36"
                color="primary"
              ) mdi-view-list
    template(v-else)
      v-row.mb-2
        v-text-field(
          v-model="searchObject.searchString"
          label="Search Doctor"
          type="text"
          append-icon="mdi-magnify"
          outlined
          clearable
          dense
        ).align-baseline
          template(v-slot:append-outer)
            div
              v-btn(icon @click="isOptionDialogOpen = !isOptionDialogOpen")
                v-icon(color="primary") mdi-cog
        doctor-filter-dialog-mobile(
          :option-dialog="isOptionDialogOpen"
          :mobile-view-type="mobileViewType"
          :specializations="specializations"
          :sort-by="sortBy"
          @apply-filters-mobile="$emit('mock-load')"
          @close-dialog="closeDialog"
          @update-mobile-view="updateMobileView"
        )
</template>

<script>
import _ from 'lodash';
import specialties from '~/assets/fixtures/specialties';
import GenericContainer from '~/components/commons/generic-container';
import DoctorFilterDialogMobile from '~/components/commons/generic-doctor-filter-dialog-mobile';
export default {
  components: {
    DoctorFilterDialogMobile,
    GenericContainer,
  },
  data () {
    this.specialties = specialties;
    this.sortBy = [
      {
        text: 'Specialization Ascending',
        field: 'doc_specialties',
        sort: 1,
      },
      {
        text: 'Specialization Descending',
        field: 'doc_specialties',
        sort: -1,
      },
      {
        text: 'First Name Ascending',
        field: 'name.firstName',
        sort: 1,
      },
      {
        text: 'First Name Descending',
        field: 'name.firstName',
        sort: -1,
      },
      {
        text: 'Last Name Ascending',
        field: 'name.lastName',
        sort: 1,
      },
      {
        text: 'Last Name Descending',
        field: 'name.lastName',
        sort: -1,
      },
    ];
    return {
      searchObject: {
        searchString: '',
        specialties: [],
        sortBy: {},
      },
      debouncedFetch: _.debounce(this.onSearch, 1000),
      //
      viewType: 'grid',
      mobileViewType: 'grid',
      searchTerm: '',
      isLoading: false,
      isOptionDialogOpen: false,
      selectedSpecialization: 'default',
      selectedSort: 'default',
    };
  },
  computed: {
    doctorsLength () {
      return this.doctors?.length || 0;
    },
    isGridView () {
      return this.viewType === 'grid';
    },
  },
  watch: {
    'searchObject.searchString': {
      handler () {
        this.debouncedFetch();
      },
    },
    'searchObject.specialties': {
      handler () {
        this.onSearch();
      },
      deep: true,
    },
    'searchObject.sortBy': {
      handler () {
        this.onSearch();
      },
      deep: true,
    },
  },
  methods: {
    onSearch () {
      this.$emit('search', this.searchObject);
    },
    // Review below
    async mockLoading () {
      this.isLoading = true;
      await setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    toggleView (type) {
      this.mobileViewType = type;
      this.viewType = type;
      this.selectedSpecialization = 'default';
      this.selectedSort = 'default';
    },
    searchDoctor () {
      this.mockLoading();
    },
    specFilterDoctor () {
      this.mockLoading();
    },
    sortDoctor () {
      this.mockLoading();
    },
    applyFiltersMobile () {
      this.mockLoading();
      this.toggleView(this.mobileViewType);
      this.closeDialog();
    },
    closeDialog () {
      this.isOptionDialogOpen = false;
    },
    updateMobileView (type) {
      this.mobileViewType = type;
    },
  },
};
</script>

<style scoped>
.input-field {
  height: 40px;
}
</style>
