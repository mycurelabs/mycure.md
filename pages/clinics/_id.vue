<template lang="pug">
  v-container(fluid)
    app-bar
    usp(
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
    //- About panel
    about-clinic(:about="aboutInfo")
    v-divider

    //- Social Panel
    social(:social="socialItem")
    v-divider

    //- CTA
    cta
    v-divider
    //- Footer

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
  SOCIAL_ITEM,
  ABOUT_INFO,
  FILTER_ITEMS,
  SORT_ITEMS,
} from './clinic-content';

import headMeta from '~/utils/head-meta';
import AppBar from '~/components/clinic-website/app-bar';
import Usp from '~/components/clinic-website/usp';
import Services from '~/components/clinic-website/services';
import ClinicInfo from '~/components/clinic-website/clinic-info';
import Doctors from '~/components/clinic-website/doctors';
import Cta from '~/components/clinic-website/final-cta';
import Social from '~/components/clinic-website/social';
import AboutClinic from '~/components/clinic-website/about-clinic';
export default {
  layout: 'clinic-website',
  components: {
    AppBar,
    Usp,
    Services,
    ClinicInfo,
    Doctors,
    Cta,
    Social,
    AboutClinic,
  },
  data () {
    this.services = SERVICES_LIST;
    this.schedules = SCHEDULES_LIST;
    this.rates = RATES;
    this.doctors = DOCTORS_LIST;
    this.socialItem = SOCIAL_ITEM;
    this.aboutInfo = ABOUT_INFO;
    this.filterItems = FILTER_ITEMS;
    this.sortItems = SORT_ITEMS;
    return {};
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
