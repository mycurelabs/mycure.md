<template lang="pug">
  v-container
    app-bar
    quick-search
    usp
    featured-doctor(:doctors="featuredDoctors")
    generic-container
      v-row
        v-col.pa-1
          search-controls(
            @search="searchFromControls"
          )
    doctors-list(
      :doctors="doctors"
      :is-loading="isLoading"
      @viewMore="viewMore"
    )
    //- Sign Up
    sign-me-up(:signUpInfo="signMeUp")

    //- Category
    //- category(:cardItems="categoryItems")

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
import {
  SOCIAL_ITEM,
  ABOUT_INFO,
  FILTER_ITEMS,
  SORT_ITEMS,
  USP,
  SPECIALIZATIONS,
  SIGN_ME_UP,
  CATEGORY,
} from './directory-content';

import headMeta from '~/utils/head-meta';
import AboutClinic from '~/components/directory-doctor/about-clinic';
import AppBar from '~/components/directory-doctor/app-bar';
import Category from '~/components/directory-doctor/category';
import Cta from '~/components/directory-doctor/final-cta';
import DoctorsList from '~/components/directory-doctor/doctors-list';
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
    DoctorsList,
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
    this.filterItems = FILTER_ITEMS;
    this.sortItems = SORT_ITEMS;
    this.usp = USP;
    this.specializations = SPECIALIZATIONS;
    this.signMeUp = SIGN_ME_UP;
    this.categoryItems = CATEGORY;
    this.aboutInfo = ABOUT_INFO;
    this.socialItem = SOCIAL_ITEM;
    return {
      isLoading: false,
      doctors: [],
      featuredDoctors: [],
    };
  },
  created () {
    this.searchDoctors();
  },
  methods: {
    async searchDoctors (searchOpts) {
      const { data } = await searchDoctors(searchOpts);
      this.doctors = data;
    },
    searchFromControls (searchObject) {
      this.searchDoctors(searchObject);
    },
    // REMOVE LATER
    async mockLoading () {
      this.isLoading = true;
      await setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    viewMore () {
      this.$router.push({ name: 'directory-doctors-list' });
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
