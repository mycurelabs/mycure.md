<template lang="pug">
  v-container(v-if="!loading").py-0
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
            v-col(cols="12" style="background-color: #ececec; border-radius: 5px; min-height: 110px;").mt-6
              //- UPDATE CONSULTATIONS DATA
              consultations

        //- UPDATE TESTIMONIAL DATA
        v-row
          v-col(cols="12")
            h2 Testimonials
            testimonials(:picURL="picURL" :testimonialDate="testimonialDate" :testimonialDescription="testimonialDescription")

      //- UDPATE DOCTORS DATA
      v-col(cols="12" md="4")
        specializations-chats(:doctors="doctors" :consultIDS="consultIDS")

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
import { getHospitalWebsite, getMembership, getServices } from '~/utils/axios';
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
  async asyncData ({ params, error }) {
    try {
      const hospital = await getHospitalWebsite({ username: params.id });
      const hospitalWebsite = hospital[0];
      const membership = await getMembership({ organization: params.id });
      const member = membership[0];
      console.log(hospitalWebsite);
      const services = await getServices({ facility: params.id });
      return {
        hospitalWebsite,
        services,
        member,
      };
    } catch (error) {
      console.error(error);
    }
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
    servicesOffered () {
      return this.services;
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
    doctors () {
      return { data: this.hospitalWebsite };
    },
    consultIDS () {
      return { docUID: this.member?.uid, clinicID: this.member?.organization };
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
