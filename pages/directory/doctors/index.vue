<template lang="pug">
  v-container
    app-bar(
      :doctor-sign-up-url="'https://www.mycure.md/'"
      :patient-sign-up-url="'https://www.mycure.md/'"
    )
    featured-doctor(
      :doctors="doctors.slice(0,6)"
      :doctor-sign-up-url="'https://www.mycure.md/'"
    )
    filter-options(
      :specializations="filterItems"
      :sort-by="sortItems"
      v-on:mock-load="mockLoading"
    )
    doctors-list(
      :doctors="doctors"
      :is-loading="isLoading"
    )
    //- About panel
    about-clinic(:about="aboutInfo")
    v-divider
    social(:social="socialItem")
    v-divider
    cta
    v-divider
    v-footer(
      height="auto"
      color="white"
    )
      v-row
        v-col.text-center
          span.black--text Copyright {{new Date().getFullYear()}} | All Rights Reserved | Powered by #[a(href="https://mycure.md" target="_blank").mycure-link.font-weight-bold MYCURE]
    //- pre {{doctor}}
</template>

<script>
import {
  DOCTORS_LIST,
  SOCIAL_ITEM,
  ABOUT_INFO,
  FILTER_ITEMS,
  SORT_ITEMS,
} from './directory-content';

import headMeta from '~/utils/head-meta';
import AppBar from '~/components/directory-doctor/app-bar';
import Panel1 from '~/components/clinic-website/panel-1';
import FeaturedDoctor from '~/components/directory-doctor/featured-doctor';
import FilterOptions from '~/components/directory-doctor/filter-options';
import DoctorsList from '~/components/directory-doctor/doctors-list';
import Cta from '~/components/clinic-website/final-cta';
import Social from '~/components/clinic-website/social';
import AboutClinic from '~/components/clinic-website/about-clinic';
export default {
  layout: 'directory-doctor',
  components: {
    AppBar,
    Panel1,
    FeaturedDoctor,
    FilterOptions,
    DoctorsList,
    Cta,
    Social,
    AboutClinic,
  },
  data () {
    this.doctors = DOCTORS_LIST;
    this.socialItem = SOCIAL_ITEM;
    this.aboutInfo = ABOUT_INFO;
    this.filterItems = FILTER_ITEMS;
    this.sortItems = SORT_ITEMS;
    return {
      isLoading: false,
    };
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
