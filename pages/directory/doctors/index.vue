<template lang="pug">
div(v-if="!loading").mt-16
  v-row(justify="center")
    v-col(align="center" cols="10" sm="8")
      div.title-card
        h1(:class="titleClasses") MYCURE Doctor
        h1(:class="subheaderClasses") Find doctors in our directory
      v-row(justify="center" align="center").search-bar-container
        v-col(cols="12" md="10")
          //- clinics-org-search-bar(
          doctors-search-bar(
            require-action
            show-suggestions
            @search-doctors="onSearch($event)"
          )
  //-
    v-container
      v-combobox(
        v-model="searchString"
        return-object
        :item-text="(x => x.name.firstName + ' ' + x.name.lastName)"
        :items="doctors"
        @keyup.enter="search"
      )
      doctors-search-bar(
        require-action
        show-suggestions
        @search-organizations="search"
      )
      //- :item-text="(x => x.name.firstName + ' ' + x.name.lastName)"
      //- :items="doctors"
      //- :items="doctors.map(x => x.name.firstName + ' ' + x.name.lastName)" return string of full name
      generic-container#search-control-container
        v-row
          v-col.pa-1
            search-controls(
              :search-string="searchString"
              :search-specialties="searchSpecialties"
              :isLoading="isLoading"
              @search="searchFromControls"
            )
      doctors-table(
        :doctors="doctors"
        :serverItemsLength="doctorsTableTotalItems"
        @paginate="doctorsTablePaginate"
      )#doctors-table
      //- v-card(v-for="doctorName in doctors" :key="doctorName")
      //-   v-list-item
      //-     v-list-item-content
      //-       v-list-item-title.text-wrap {{/*doctorName*/}}
</template>

<script>
// import debounce from 'lodash/debounce';
// import VueScrollTo from 'vue-scrollto';

import headMeta from '~/utils/head-meta';
// import DoctorsTable from '~/components/directory-doctor/doctors-table';
// import GenericContainer from '~/components/commons/generic-container';
// import SearchControls from '~/components/directory-doctor/search-controls';
// import { /* getDoctors */ getFeaturedDoctors, searchDoctors } from '~/utils/axios';
export default {
  components: {
    // DoctorsTable,
    // GenericContainer,
    // SearchControls,
    DoctorsSearchBar: () => import('~/components/directory-doctor/DoctorsSearchBar'),
  },
  layout: 'directory-doctor',
  data () {
    this.titleClasses = ['mc-title-set-1', 'font-weight-bold'];
    this.subheaderClasses = ['mc-title-set-2', 'font-weight-light'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Doctors Directory',
      description: 'Search for doctors and specialties in the MYCURE Doctors Directory',
      socialBanner: require('~/assets/images/banners/OG Patients.png'),
    });
  },
  mounted () {
    this.loading = false;
  },
  methods: {
    onSearch ({ searchText, locationText, suggestion }) {
      this.$nuxt.$router.push({
        name: 'directory-doctors-results',
        params: {
          facilitySearchText: searchText,
          facilityLocationText: locationText,
          facilitySuggestion: suggestion,
        },
      });
    },
  },
  // async asyncData ({ app, router, params, error }) {
  //   try {
  //     const featuredDoctors = await getFeaturedDoctors();
  //     return {
  //       featuredDoctors: featuredDoctors?.data,
  //     };
  //   } catch (e) {
  //     console.error(e);
  //   }
  // },
  // data () {
  //   return {
  //     isLoading: false,
  //     searchObject: {},
  //     searchString: '',
  //     searchSpecialties: [],
  //     doctorsTableTotalItems: 0,
  //     doctorsTablePaginationOptions: {
  //       page: null,
  //       itemsPerPage: null,
  //     },
  //     doctors: [],
  //     featuredDoctors: [],
  //     // debouncedSuggestionsSearch: debounce((event) => {
  //     //   this.handleSuggestions(event);
  //     // }, 500),
  //   };
  // },
  // head () {
  //   // TODO: update meta tags
  //   return headMeta({
  //     title: 'MYCURE - Doctors Directory',
  //     description: 'Search doctors by specialty, and book an appointment',
  //     // socialBanner: this.picURL, TODO: Add banner
  //   });
  // },
  // computed: {
  //   fullNameWithSuffixes () {
  //     return [
  //       this.fullName,
  //       ...this.professions,
  //       this.doctor?.name.academicSuffix,
  //       this.obj.doctor?.name.professionalSuffix,
  //     ].filter(Boolean).join(', ');
  //   },
  // },
  // watch: {
  //   searchString () {
  //     this.search(true);
  //   },
  // },
  // created () {
  //   this.init();
  //   if (process.browser) {
  //     this.isLoading = false;
  //   };
  // },
  // methods: {
  //   search () {
  //     this.$emit('search', this.searchText);
  //   },
  //   init () {
  //     this.isLoading = true;
  //   },
  //   async searchDoctors () {
  //     const { page, itemsPerPage } = this.doctorsTablePaginationOptions;
  //     const query = {
  //       ...this.searchObject,
  //     };
  //     if (page && itemsPerPage) {
  //       query.limit = itemsPerPage;
  //       query.skip = query.limit * (page - 1);
  //     }
  //     const { data, total } = await searchDoctors(query);
  //     this.doctorsTableTotalItems = total;
  //     this.doctors = data;
  //   },
  //   doctorsTablePaginate (doctorsTablePaginationOptions) {
  //     this.doctorsTablePaginationOptions = doctorsTablePaginationOptions;
  //     this.searchDoctors();
  //   },
  //   searchFromControls (searchObject) {
  //     this.isLoading = true;
  //     this.searchObject = searchObject;
  //     this.searchDoctors();
  //     this.isLoading = false;
  //   },
  //   searchFromUSP (searchString) {
  //     this.isLoading = true;
  //     this.searchString = searchString;
  //     VueScrollTo.scrollTo('#search-control-container', 500, { easing: 'ease', offset: -70 });
  //     this.isLoading = false;
  //   },
  //   searchFromQuickSearch ({ filters }) {
  //     this.isLoading = true;
  //     this.searchSpecialties = filters;
  //     VueScrollTo.scrollTo('#search-control-container', 500, { easing: 'ease', offset: -70 });
  //     this.isLoading = false;
  //   },
  //   onBook () {
  //     VueScrollTo.scrollTo('#doctors-table', 500, { easing: 'ease', offset: -70 });
  //   },
  // },
};
</script>

<style scoped>
.mycure-link {
  color: #2e9fdf;
  text-decoration: none;
}
.search-bar-container {
  height: 150px;
}
.title-card {
  color: #0369A5 !important;
}
</style>
