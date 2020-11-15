<template lang="pug">
  v-col(cols="12" sm="12")
    v-row(v-if="searchLoading")
      v-col(cols="12" sm="12")
        p Loading...
    v-row(v-if="searchResult.length && searchText")
      v-col(cols="12" sm="12")
        p Search results for
          i.font-weight-bold "{{ searchText }}"
        doctor-cards(v-if="formattedSearchedDoctors" :doctors="formattedSearchedDoctors")
    v-row(v-if="!searchResult.length && searchText && !searchLoading").pa-1
      v-col(cols="12" sm="12")
        p No results for&nbsp;
          i.font-weight-bold "{{ searchText }}"
    v-divider
</template>

<script>
// utils
import _ from 'lodash';
import { searchClinicDoctors } from '~/utils/axios';
// components
import DoctorCards from '~/components/clinic-website/doctor-card';

export default {
  components: {
    DoctorCards,
  },
  props: {
    hospitalName: {
      type: String,
      default: '',
    },
    orgId: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      searchText: '',
      searchLoading: false,
      searchResult: [],
      debouncedSearch: _.debounce(this.onSearch, 600),
    };
  },
  computed: {
    searchPlaceholder () {
      return `Search ${this.hospitalName}'s doctors, specializations, etc.`;
    },
    formattedSearchedDoctors () {
      return this.searchResult?.map((doctor) => {
        const practicingSince = doctor.doc_practicingSince; // eslint-disable-line
        const yearsPracticing = practicingSince && (new Date().getFullYear() - practicingSince);

        return {
          ...doctor,
          picURL: doctor.picURL,
          doctorName: `Dr. ${doctor.name?.firstName} ${doctor.name?.lastName}`,
          specialties: doctor.doc_specialties?.join(', '), // eslint-disable-line
          yearsPracticing: yearsPracticing && `${yearsPracticing} years`,
        };
      });
    },
    xlBelow () {
      return this.$vuetify.breakpoint.lgAndDown;
    },
    xlOnly () {
      return this.$vuetify.breakpoint.xlOnly;
    },
  },
  watch: {
    searchText: {
      handler () {
        this.debouncedSearch();
      },
    },
  },
  methods: {
    async onSearch () {
      if (!this.searchText) return;

      this.searchResult = [];
      this.searchLoading = true;
      const query = {
        organization: this.orgId,
        searchString: this.searchText,
      };
      const results = await searchClinicDoctors(query);

      this.searchResult = results;
      this.searchLoading = false;
    },
    goToConsult (doctor) {
      if (!doctor) return;
      const docUID = doctor.uid;
      const clinicID = doctor.organization;
      return `${process.env.PX_PORTAL_URL}/clinic-appointment/step-1?doctor=${docUID}&organization=${clinicID}`;
    },
  },
};
</script>
