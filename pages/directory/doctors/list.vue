<template lang="pug">
  fragment
    v-app-bar(
      fixed
      elevate-on-scroll
    )
      generic-container
        v-row(align="center" justify="center")
          v-col.col-auto
            img(src="~/assets/images/sign-in/mycure-sso-sign-in-logo.svg" height="45").mt-2
          v-col
            search-controls.mb-2
    trivia-carousel(
      :slide-content="triviaSlideContent"
    ).mt-10
    v-container
      doctors-table(
        :doctors="doctors"
        :is-loading="isLoading"
        :is-header="true"
        :current-page="'1'"
        :total-pages="'42'"
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
  TRIVIA_SLIDE_CONTENT,
} from './directory-content';

import headMeta from '~/utils/head-meta';
import AboutClinic from '~/components/directory-doctor/about-clinic';
import AppBar from '~/components/directory-doctor/app-bar';
import Cta from '~/components/directory-doctor/final-cta';
import DoctorsTable from '~/components/directory-doctor/doctors-table';
import GenericContainer from '~/components/commons/generic-container.vue';
import SearchControls from '~/components/directory-doctor/search-controls';
import Social from '~/components/directory-doctor/social';
import TriviaCarousel from '~/components/directory-doctor/trivia-carousel';
export default {
  components: {
    AboutClinic,
    AppBar,
    Cta,
    DoctorsTable,
    GenericContainer,
    SearchControls,
    Social,
    TriviaCarousel,
  },
  layout: 'directory-doctor',
  data () {
    this.doctors = DOCTORS_LIST;
    this.socialItem = SOCIAL_ITEM;
    this.aboutInfo = ABOUT_INFO;
    this.filterItems = FILTER_ITEMS;
    this.sortItems = SORT_ITEMS;
    this.triviaSlideContent = TRIVIA_SLIDE_CONTENT;
    return {
      isLoading: false,
    };
  },
  head () {
    // TODO: update meta tags
    return headMeta({
      title: `${this.fullNameWithSuffixes}`,
      description: `${this.bio || 'Visit my professional website and schedule an appointment with me today.'}`,
      socialBanner: this.picURL,
    });
  },
  methods: {
    async mockLoading () {
      this.isLoading = true;
      await setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.mycure-link {
  color: #2e9fdf;
  text-decoration: none;
}
</style>
