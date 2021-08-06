<template lang="pug">
  div
    v-container
      v-row(justify="center")
        generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
          v-container
            v-row(justify="end" align="center")
              v-col(cols="12" sm="5" :class="{'pt-0': $isMobile}").mb-2
                v-text-field(
                  v-model="searchObject.searchString"
                  append-icon="mdi-magnify"
                  placeholder="Search Doctor"
                  background-color="#d0e8f5"
                  type="text"
                  clearable
                  rounded
                  filled
                  hide-details
                  :loading="isLoading"
                ).input-field
              v-col(cols="6" sm="5" :class="{'py-0': $isMobile}").mb-2
                v-autocomplete(
                  v-model="searchObject.specialty"
                  label="Specialization"
                  background-color="#d0e8f5"
                  height="56px"
                  clearable
                  hide-details
                  filled
                  small-chips
                  rounded
                  :search-input.sync="search"
                  :items="specialties"
                  :loading="isLoading"
                  @click:clear="clearSpecialties"
                ).input-field.no-line
              v-col(v-if="$isMobile" cols="1" :class="{'py-0': $isMobile}")
              v-col(cols="5" sm="2" :class="{'py-0': $isMobile}").mb-2
                v-select(
                  v-model="searchObject.sortBy"
                  placeholder="Sort By"
                  item-text="text"
                  background-color="#d0e8f5"
                  clearable
                  filled
                  hide-details
                  return-object
                  rounded
                  :items="sortBy"
                  :loading="isLoading"
                ).input-field.no-line
            v-row.mt-4
              v-col.py-0
                template(v-for="(specialy, index) in searchObject.specialties")
                  v-chip(
                    clearable
                    close
                    small
                    color="primary"
                    @click:close="removeSpecialty(index)"
                  ).ma-1 {{specialy}}
                v-chip(
                  v-if="searchObject.specialties.length >= 3"
                  clearable
                  close
                  small
                  color="error"
                  @click:close="clearSpecialties"
                ).ma-1 Clear filters
</template>

<script>
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
import specialties from '~/assets/fixtures/specialties';
import GenericContainer from '~/components/commons/generic-container';
import DoctorFilterDialogMobile from '~/components/commons/generic-doctor-filter-dialog-mobile';
export default {
  components: {
    DoctorFilterDialogMobile,
    GenericContainer,
    GenericPanel: () => import('~/components/generic/GenericPanel'),
  },
  props: {
    searchString: {
      type: String,
      default: '',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    loaded: {
      type: Boolean,
      default: true,
    },
    searchSpecialties: {
      type: Array,
      default: () => ([]),
    },
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
        specialty: '',
        specialties: [],
        sortBy: {},
      },
      debouncedFetch: debounce(this.onSearch, 1000),
      //
      viewType: 'grid',
      mobileViewType: 'grid',
      searchTerm: '',
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
    searchString (val) {
      if (!val) return;
      this.searchObject.searchString = val;
    },
    searchSpecialties (val) {
      if (isEmpty(val)) return;
      this.searchObject.specialties = val;
    },
    'searchObject.searchString': {
      handler () {
        this.debouncedFetch();
      },
    },
    'searchObject.specialty': {
      handler (val) {
        if (!val) return;
        this.searchObject.specialties.push(val);
        this.onSearch();
      },
      deep: true,
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
    removeSpecialty (index) {
      this.searchObject.specialties.splice(index, 1);
      this.searchObject.specialty = '';
    },
    // Review below
    toggleView (type) {
      this.mobileViewType = type;
      this.viewType = type;
      this.selectedSpecialization = 'default';
      this.selectedSort = 'default';
    },
    closeDialog () {
      this.isOptionDialogOpen = false;
    },
    updateMobileView (type) {
      this.mobileViewType = type;
    },
    clearSpecialties () {
      this.searchObject.specialties = [];
      this.searchObject.specialty = '';
    },
  },
};
</script>

<style scoped>
.input-field {
  height: 40px;
}
.no-line::v-deep .v-input__slot::before {
  border-style: none !important;
}
</style>
