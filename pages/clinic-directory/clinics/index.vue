<template lang="pug">
  v-container(v-if="!loading")
    app-bar(:picURL="picURL" :consultIDS="consultIDS")
    v-row(align="start").main-content

      v-col(cols="12" md="2" align="center")
        about-us(:picURL="picURL" :description="description")

      v-col(cols="12" md="6" :class="{'pl-6': !$isMobile}")
        info(
          :hospitalName="hospitalName"
          :description="description"
          :address="address"
          :completeAddress="completeAddress"
        )
        v-row.mt-3
          v-col(cols="12" sm="6")
            //- UPDATE SERVICES DATA
            services(:servicesOffered="servicesOffered").pa-3
          v-col(cols="12" sm="6")
            schedules(:schedules="schedules").pa-3
            v-col(cols="12" style="background-color: #ececec; border-radius: 5px; min-height: 100px;").mt-6
              //- UPDATE CONSULTATIONS DATA
              consultations

        //- UPDATE TESTIMONIAL DATA
        v-row
          v-col(cols="12")
            h2 Testimonials
            testimonials(:picURL="picURL" :testimonialDate="testimonialDate" :testimonialDescription="testimonialDescription")

      v-col(cols="12" md="4")
        specializations-chats(:doctors="doctors")

    v-divider
    v-footer(color="white").mt-3
      v-row(justify="center" align="center" no-gutters)
        v-col(
          cols="12"
          md="6"
          :align="!$isMobile ? 'start' : 'center'"
          :class="{'d-flex': !$isMobile}"
        )
          img(
            height="45"
            src="~/assets/images/mycure-header-logo.png"
            @click="$nuxt.$router.push({ name: 'index' })"
          )
          p.ml-5.mt-3 &#169;{{new Date().getFullYear()}} All Rights Reserved.
        v-col(cols="12" md="6" :align="!$isMobile ? 'end' : 'center'")
          span Share the love:
          template(v-for="(icon, key) in icons")
            a(
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
            ).pl-3
              v-icon.font-30 {{ icon.icon }}
</template>

<script>
import { getClinicWebsite, getMembership, getServices } from '~/utils/axios';
import headMeta from '~/utils/head-meta';
import AppBar from '~/components/clinic-website/app-bar';
import AboutUs from '~/components/clinic-website/about-us';
import Info from '~/components/clinic-website/info';
import Schedules from '~/components/clinic-website/schedules';
import Services from '~/components/clinic-website/services';
import Consultations from '~/components/clinic-website/consultations';
import Testimonials from '~/components/clinic-website/testimonials';
import SpecializationsChats from '~/components/clinic-website/specializations-chat';
export default {
  layout: 'clinic-website',
  components: {
    AppBar,
    AboutUs,
    Info,
    Schedules,
    Services,
    Consultations,
    Testimonials,
    SpecializationsChats,
  },
  data () {
    this.icons = [
      { icon: 'mdi-facebook', link: 'https://facebook.com/' },
      { icon: 'mdi-twitter', link: 'https://twitter.com/' },
      { icon: 'mdi-email', link: 'mailto:' },
      { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/' },
    ];
    return {
      loading: false,
      clinicWebsite: [],
      member: [],
      services: [],
    };
  },
  computed: {
    picURL () {
      return this.clinicWebsite?.picURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
    },
    description () {
      return this.clinicWebsite?.description ||
      `${this.clinicWebsite?.name} specializes in telehealth services. ${this.clinicWebsite?.name} telemedicine service is committed to provide medical consultation via video conference or phone call to our patient 24 hours a day 7 days a week.`;
    },
    hospitalName () {
      return this.clinicWebsite?.name || 'MYCURE Clinic';
    },
    address () {
      return [
        this.clinicWebsite?.address?.city,
        this.clinicWebsite?.address?.province,
        this.clinicWebsite?.address?.country,
      ].filter(Boolean).join(', ') || 'Address not available';
    },
    completeAddress () {
      return [
        this.clinicWebsite?.address?.street1,
        this.clinicWebsite?.address?.street2,
        this.clinicWebsite?.address?.city,
        this.clinicWebsite?.address?.province,
        this.clinicWebsite?.address?.country,
      ].filter(Boolean).join(', ') || 'Address not available';
    },
    servicesOffered () {
      return this.services;
    },
    schedules () {
      return this.clinicWebsite?.mf_schedule; // eslint-disable-line
    },
    testimonialDate () {
      return this.clinicWebsite?.createdAt;
    },
    testimonialDescription () {
      return this.clinicWebsite?.description;
    },
    doctors () {
      return { data: this.clinicWebsite };
    },
    consultIDS () {
      return { docUID: this.member?.uid, clinicID: this.member?.organization };
    },
  },
  async created () {
    await this.init();
  },
  methods: {
    async init () {
      try {
        const id = localStorage.getItem('organization-id');
        const clinic = await getClinicWebsite(id);
        this.clinicWebsite = clinic[0];
        const membership = await getMembership(id);
        this.member = membership[0];
        const services = await getServices(id);
        return {
          services,
        };
      } catch (error) {
        console.error(error);
      }
    },
  },
  head () {
    return headMeta({
      title: `${this.clinicWebsite?.name || 'Clinic Website'}`,
      description: 'Visit my professional website and schedule an appointment with me today.',
      socialBanner: this.picURL,
    });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.main-content {
  margin-top: 100px;
}
</style>
