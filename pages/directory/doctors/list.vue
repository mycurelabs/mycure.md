<template lang="pug">
  fragment
    v-container
      filter-options(
        :specializations="filterItems"
        :sort-by="sortItems"
        v-on:mock-load="mockLoading"
        :is-header="true"
      )
    trivia-carousel(
      :slide-content="triviaSlideContent"
    )
    v-container
      doctors-list(
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
import AppBar from '~/components/directory-doctor/app-bar';
import FilterOptions from '~/components/directory-doctor/filter-options';
import TriviaCarousel from '~/components/directory-doctor/trivia-carousel';
import DoctorsList from '~/components/directory-doctor/doctors-list';
import Cta from '~/components/clinic-website/final-cta';
import Social from '~/components/clinic-website/social';
import AboutClinic from '~/components/clinic-website/about-clinic';
export default {
  layout: 'directory-doctor',
  components: {
    AppBar,
    FilterOptions,
    TriviaCarousel,
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
    this.triviaSlideContent = TRIVIA_SLIDE_CONTENT;
    return {
      isLoading: false,
    };
  },
  methods: {
    async mockLoading () {
      this.isLoading = true;
      await setTimeout(() => {
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
