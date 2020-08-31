<template lang="pug">
  v-container(v-if="!loading")
    app-bar(:picURL="picURL")
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
            services(style="background-color: #ececec; border-radius: 5px; min-height: 400px;").pa-3
          v-col(cols="12" sm="6")
            schedules(:schedules="schedules" style="background-color: #ececec; border-radius: 5px; min-height: 250px;").pa-3
            v-col(cols="12" style="background-color: #ececec; border-radius: 5px; min-height: 126px;").mt-6
              consultations

        v-row
          v-col(cols="12")
            h2 Testimonials
            testimonials(:picURL="picURL" :testimonialDate="testimonialDate" :testimonialDescription="testimonialDescription")

    v-divider
    v-footer(color="white").mt-3
      v-row(justify="center" align="center" no-gutters)
        v-col(cols="12" md="6" :align="!$isMobile ? 'start' : 'center'" :class="{'d-flex': !$isMobile}")
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
import { getHospitalWebsite, getServices } from '~/utils/axios';
import headMeta from '~/utils/head-meta';
import AppBar from '~/components/hospital-website/app-bar';
import AboutUs from '~/components/hospital-website/about-us';
import Info from '~/components/hospital-website/info';
import Schedules from '~/components/hospital-website/schedules';
import Services from '~/components/hospital-website/services';
import Consultations from '~/components/hospital-website/consultations';
import Testimonials from '~/components/hospital-website/testimonials';
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
      hospitalWebsite: [],
      services: [],
    };
  },
  computed: {
    picURL () {
      return this.hospitalWebsite?.picURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
    },
    description () {
      return this.hospitalWebsite?.description ||
      `${this.hospitalWebsite?.name} specializes in telehealth services. ${this.hospitalWebsite?.name} telemedicine service is committed to provide medical consultation via video conference or phone call to our patient 24 hours a day 7 days a week.`;
    },
    hospitalName () {
      return this.hospitalWebsite?.name || 'MYCURE Hospital';
    },
    address () {
      return [
        this.hospitalWebsite?.address?.city,
        this.hospitalWebsite?.address?.province,
        this.hospitalWebsite?.address?.country,
      ].filter(Boolean).join(', ') || 'Address not available';
    },
    completeAddress () {
      return [
        this.hospitalWebsite?.address?.street1,
        this.hospitalWebsite?.address?.street2,
        this.hospitalWebsite?.address?.city,
        this.hospitalWebsite?.address?.province,
        this.hospitalWebsite?.address?.country,
      ].filter(Boolean).join(', ') || 'Address not available';
    },
    schedules () {
      return this.hospitalWebsite?.mf_schedule; // eslint-disable-line
    },
    testimonialDate () {
      return this.hospitalWebsite?.createdAt;
    },
    testimonialDescription () {
      return this.hospitalWebsite?.description;
    },
  },
  async created () {
    await this.init();
  },
  methods: {
    async init () {
      try {
        const hospital = await getHospitalWebsite(localStorage.getItem('hospital-id'));
        this.hospitalWebsite = hospital[0];
        const services = await getServices(localStorage.getItem('hospital-id'));
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
      title: `${this.hospitalWebsite?.name || 'Hospital Website'}`,
      description: `${this.bio || 'Visit my professional website and schedule an appointment with me today.'}`,
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
