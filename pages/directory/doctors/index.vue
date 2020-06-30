<template lang="pug">
  v-container
    app-bar(
      :doctor-sign-up-url="'https://www.mycure.md/signup/individual/'"
      :patient-sign-up-url="patientSignUpUrl"
    )
    //- Usp
    usp(:uspInfo="usp" :specialization-items="specializations")
    featured-doctor(
      :doctors="doctors.slice(0,6)"
      :doctor-sign-up-url="'https://www.mycure.md/signup/individual/'"
    )
    filter-options(
      :specializations="filterItems"
      :sort-by="sortItems"
      v-on:mock-load="mockLoading"
    )
    doctors-list(
      :doctors="doctors"
      :is-loading="isLoading"
      @viewMore="viewMore"
    )
    //- Sign Up
    sign-me-up(:signUpInfo="signMeUp")

    //- Category
    category(:cardItems="categoryItems")

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
  DOCTORS_LIST,
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
import AppBar from '~/components/directory-doctor/app-bar';
import FeaturedDoctor from '~/components/directory-doctor/featured-doctor';
import FilterOptions from '~/components/directory-doctor/filter-options';
import DoctorsList from '~/components/directory-doctor/doctors-list';
import Usp from '~/components/directory-doctor/usp';
import Category from '~/components/directory-doctor/category';
import SignMeUp from '~/components/directory-doctor/sign-me-up';
import AboutClinic from '~/components/directory-doctor/about-clinic';
import Social from '~/components/directory-doctor/social';
import Cta from '~/components/directory-doctor/final-cta';
export default {
  layout: 'directory-doctor',
  components: {
    AppBar,
    Usp,
    SignMeUp,
    Category,
    FeaturedDoctor,
    FilterOptions,
    DoctorsList,
    AboutClinic,
    Social,
    Cta,
  },
  data () {
    this.doctors = DOCTORS_LIST;
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
    };
  },
  computed: {
    patientSignUpUrl () {
      return `${process.env.PX_PORTAL_URL}/signup`;
    },
  },
  mounted () {
    console.log(this.$route);
  },
  methods: {
    mockLoading () {
      this.isLoading = true;
      setTimeout(() => {
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
      title: `${this.fullNameWithSuffixes}`,
      description: `${this.bio || 'Visit my professional website and schedule an appointment with me today.'}`,
      socialBanner: this.picURL,
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
