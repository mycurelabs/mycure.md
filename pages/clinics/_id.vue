<template lang="pug">
  v-container
    app-bar
    usp(:content="uspInfo")
    services(
      header-text="We offer this healthcare services for you."
      :services="services"
    )
    v-divider
    clinic-info(:info="clinicInformation")
    v-divider
    doctors(
      :doctors="doctors"
      :specializations="sortItems"
      :sort-by="filterItems"
    )
    //- About panel
    about(:about="aboutInfo")
    v-divider

    //- Social Panel
    social(:social="socialItem")
    v-divider

    //- CTA
    cta
      template(slot="action")
        book-appointment-clinic-btn(
          content="Book Appointment"
          :extra-bindings="{ block: true, color: 'primary' }"
        )
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
  CLINIC_INFORMATION,
  USP_INFO,
  DOCTORS_LIST,
  SOCIAL_ITEM,
  ABOUT_INFO,
  FILTER_ITEMS,
  SORT_ITEMS,
} from './clinic-content';

import headMeta from '~/utils/head-meta';
import AppBar from '~/components/clinic-website/app-bar';
import Usp from '~/components/clinic-website/usp';
import Services from '~/components/commons/generic-services-panel';
import ClinicInfo from '~/components/clinic-website/clinic-info';
import Doctors from '~/components/clinic-website/doctors';
import Cta from '~/components/commons/generic-final-cta';
import Social from '~/components/commons/generic-social-panel';
import About from '~/components/commons/generic-about-panel';
import BookAppointmentClinicBtn from '~/components/commons/book-appointment-clinic-btn';
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
    About,
    BookAppointmentClinicBtn,
  },
  data () {
    this.services = SERVICES_LIST;
    this.clinicInformation = CLINIC_INFORMATION;
    this.doctors = DOCTORS_LIST;
    this.socialItem = SOCIAL_ITEM;
    this.aboutInfo = ABOUT_INFO;
    this.filterItems = FILTER_ITEMS;
    this.sortItems = SORT_ITEMS;
    this.uspInfo = USP_INFO;
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
