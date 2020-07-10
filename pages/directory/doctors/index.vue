<template lang="pug">
  v-container
    app-bar
    quick-search(
      @search="searchFromQuickSearch"
    )
    usp(
      @search="searchFromUSP"
    )
    featured-doctor(:doctors="featuredDoctors")
    generic-container#search-control-container
      v-row
        v-col.pa-1
          search-controls(
            :search-string="searchString"
            :search-specialties="searchSpecialties"
            @search="searchFromControls"
          )
    doctors-table(
      :doctors="doctors"
      :serverItemsLength="doctorsTableTotalItems"
      @paginate="doctorsTablePaginate"
    )
    //- Sign Up
    sign-me-up(:signUpInfo="signMeUp")

    //- About panel
    about-clinic(:about="aboutInfo")
    v-divider

    //- Social panel
    social(:social="socialItem")
    v-divider

    //- Cta
    cta
    v-divider

    v-footer(
      height="auto"
      color="white"
    )
      v-row
        v-col.text-center
          span.black--text Copyright {{new Date().getFullYear()}} | All Rights Reserved | Powered by #[a(href="https://mycure.md" target="_blank" rel="noopener noreferrer").mycure-link.font-weight-bold MYCURE]
    //- pre {{doctor}}
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import {
  SOCIAL_ITEM,
  ABOUT_INFO,
  SIGN_ME_UP,
} from './directory-content';

import headMeta from '~/utils/head-meta';
import AboutClinic from '~/components/directory-doctor/about-clinic';
import AppBar from '~/components/directory-doctor/app-bar';
import Category from '~/components/directory-doctor/category';
import Cta from '~/components/directory-doctor/final-cta';
import DoctorsTable from '~/components/directory-doctor/doctors-table';
import FeaturedDoctor from '~/components/directory-doctor/featured-doctor';
import GenericContainer from '~/components/commons/generic-container';
import QuickSearch from '~/components/directory-doctor/quick-search';
import SearchControls from '~/components/directory-doctor/search-controls';
import SignMeUp from '~/components/directory-doctor/sign-me-up';
import Social from '~/components/directory-doctor/social';
import Usp from '~/components/directory-doctor/usp';
import { /* getDoctors */ getFeaturedDoctors, searchDoctors } from '~/utils/axios';
export default {
  layout: 'directory-doctor',
  components: {
    AboutClinic,
    AppBar,
    Category,
    Cta,
    DoctorsTable,
    FeaturedDoctor,
    GenericContainer,
    QuickSearch,
    SearchControls,
    SignMeUp,
    Social,
    Usp,
  },
  async asyncData ({ app, router, params, error }) {
    try {
      const featuredDoctors = await getFeaturedDoctors();
      return {
        featuredDoctors: featuredDoctors?.data,
      };
    } catch (e) {
      console.error(e);
    }
  },
  data () {
    this.socialItem = SOCIAL_ITEM;
    this.aboutInfo = ABOUT_INFO;
    this.signMeUp = SIGN_ME_UP;
    return {
      isLoading: false,
      searchObject: {},
      searchString: '',
      searchSpecialties: [],
      doctorsTableTotalItems: 0,
      doctorsTablePaginationOptions: {
        page: null,
        itemsPerPage: null,
      },
      doctors: [],
      featuredDoctors: [],
    };
  },
  methods: {
    async searchDoctors () {
      const { page, itemsPerPage } = this.doctorsTablePaginationOptions;
      const query = {
        ...this.searchObject,
      };
      if (page && itemsPerPage) {
        query.limit = itemsPerPage;
        query.skip = query.limit * (page - 1);
      }
      const { data, total } = await searchDoctors(query);
      this.doctorsTableTotalItems = total;
      this.doctors = data;
    },
    doctorsTablePaginate (doctorsTablePaginationOptions) {
      this.doctorsTablePaginationOptions = doctorsTablePaginationOptions;
      this.searchDoctors();
    },
    searchFromControls (searchObject) {
      this.searchObject = searchObject;
      this.searchDoctors();
    },
    searchFromUSP (searchString) {
      this.searchString = searchString;
      VueScrollTo.scrollTo('#search-control-container', 500, { easing: 'ease', offset: -70 });
    },
    searchFromQuickSearch ({ filters }) {
      this.searchSpecialties = filters;
      VueScrollTo.scrollTo('#search-control-container', 500, { easing: 'ease', offset: -70 });
    },
  },
  head () {
    // TODO: update meta tags
    return headMeta({
      title: 'MYCURE - Doctor Directory',
      description: 'Search doctors in your area.',
      // socialBanner: this.picURL, TODO: Add banner
    });
  },
};
</script>

<style scoped>
.mycure-link {
  color: #2e9fdf;
  text-decoration: none;
}
</style>
