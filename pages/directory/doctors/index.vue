<template lang="pug">
  v-container(fluid)
    app-bar
    panel-1(
      pic-url="MYCURE-virtual-clinic-healthcare-practice-online-enterprise-F-multi-specialty"
      pic-extension=".webp"
      pic-alt="Clinic Image"
      pic-custom-path="enterprise/"
      clinic-copy="Copy of the clinic. Ex. The best clinic since 1945"
      clinic-tagline="Up to 50 characters plus a tagline up to well 60 characters."
    )
    services(
      header-text="We offer this healthcare services for you."
      :services="services"
    )
    v-divider
    clinic-info(
      :schedules="schedules"
      :rates="rates"
      clinic-name="MYCURE Virtual Clinic"
      clinic-address="1036, Delos Santos STI Medical Center 201 E. Rodriguez Avenue Quezon City"
    )
    v-divider
    doctors(
      :doctors="doctors"
      :specializations="sortItems"
      :sort-by="filterItems"
    )
    //- Usp
    usp(:uspInfo="usp")

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
          span.black--text Copyright {{new Date().getFullYear()}} | All Rights Reserved | Powered by #[a(href="https://mycure.md" target="_blank").mycure-link.font-weight-bold MYCURE]
    //- pre {{doctor}}
</template>

<script>
import {
  SERVICES_LIST,
  SCHEDULES_LIST,
  RATES,
  DOCTORS_LIST,
  USP,
  ABOUT_INFO,
  SOCIAL_ITEM,
  FILTER_ITEMS,
  SORT_ITEMS,
} from './directory-content';

import headMeta from '~/utils/head-meta';
import AppBar from '~/components/clinic-website/app-bar';
import Panel1 from '~/components/clinic-website/panel-1';
import Services from '~/components/clinic-website/services';
import ClinicInfo from '~/components/clinic-website/clinic-info';
import Doctors from '~/components/clinic-website/doctors';
import Usp from '~/components/directory-doctor/usp';
import AboutClinic from '~/components/directory-doctor/about-clinic';
import Social from '~/components/directory-doctor/social';
import Cta from '~/components/directory-doctor/final-cta';
export default {
  layout: 'directory-doctor',
  components: {
    AppBar,
    Panel1,
    Services,
    ClinicInfo,
    Doctors,
    Usp,
    AboutClinic,
    Social,
    Cta,
  },
  data () {
    this.services = SERVICES_LIST;
    this.schedules = SCHEDULES_LIST;
    this.rates = RATES;
    this.doctors = DOCTORS_LIST;
    this.usp = USP;
    this.aboutInfo = ABOUT_INFO;
    this.socialItem = SOCIAL_ITEM;
    this.filterItems = FILTER_ITEMS;
    this.sortItems = SORT_ITEMS;
    return {};
  },
  mounted () {
    console.log(this.$route);
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
