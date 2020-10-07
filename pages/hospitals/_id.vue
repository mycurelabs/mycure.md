<template lang="pug">
  div
    app-bar(:picURL="picURL" :clinicName="hospitalName")
    v-col.px-0
      img(src="~/assets/images/mycure-homepage-usp-cover.png" width="100%").banner-img
    v-container(v-if="!loading")
      v-row
        search(:hospitalName="hospitalName" :orgId="orgId")
        v-col(cols="12" sm="8")
          v-row
            v-col(cols="12" sm="12")
              v-tabs(v-model="activeTab")
                v-tab Specializations
                v-tab Doctors
                v-tab Departments
              v-tabs-items(v-model="activeTab")
                v-tab-item.main-container.pa-4
                  specializations(:doctors="doctors")
                v-tab-item.main-container.pa-4
                  doctor-cards(:doctors="formattedDoctors")
                v-tab-item.main-container.pa-4.text-center
                  h3 Departments Coming Soon!
          v-row(v-if="hasFrontdesk")
            v-col(cols="12" sm="12")
              chat-now-card(:hospitalName="hospitalName" :orgId="orgId")
        v-col(cols="12" sm="4")
          info(
            :hospitalName="hospitalName"
            :address="address"
            :completeAddress="completeAddress"
            :picURL="picURL"
            :description="description"
          )
      v-row
        v-col(cols="12" sm="8")
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
// services
import { getHospitalWebsite, getMembership, getServices, getFrontdeskMembers } from '~/utils/axios';
// utils
import headMeta from '~/utils/head-meta';
// components
import AppBar from '~/components/clinic-website/app-bar';
import Search from '~/components/clinic-website/search';
import Info from '~/components/clinic-website/info';
import DoctorCards from '~/components/clinic-website/doctor-card';
import Specializations from '~/components/clinic-website/specialization-expansion';
import ChatNowCard from '~/components/clinic-website/chat-now-card';

export default {
  layout: 'clinic-website',
  components: {
    AppBar,
    Info,
    Search,
    DoctorCards,
    Specializations,
    ChatNowCard,
  },
  async asyncData ({ params, error }) {
    try {
      const hospital = await getHospitalWebsite({ username: params.id });
      const hospitalWebsite = hospital[0];
      const members = await getMembership({ organization: params.id });
      const services = await getServices({ facility: params.id });
      const frontdeskMembers = await getFrontdeskMembers({ organization: params.id });
      return {
        hospitalWebsite,
        services,
        members,
        frontdeskMembers,
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
      activeTab: null,
    };
  },
  computed: {
    orgId () {
      return this.$route.params.id;
    },
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
    sortedServices () {
      if (!this.services) return null;
      return [...this.services].sort((a, b) => a.price - b.price);
    },
    minimumServicePrice () {
      return this.sortedServices?.shift()?.price;
    },
    maximumServicePrice () {
      return this.sortedServices?.pop()?.price;
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
      return this.members;
    },
    hasFrontdesk () {
      return this.frontdeskMembers && this.frontdeskMembers.length > 0;
    },
    formattedDoctors () {
      return this.doctors?.map((doctor) => {
        const practicingSince = doctor.personalDetails?.['doc_practicingSince'];
        const yearsPracticing = practicingSince && (new Date().getFullYear() - practicingSince);

        return {
          ...doctor,
          picURL: doctor.personalDetails?.picURL,
          doctorName: `Dr. ${doctor.personalDetails?.name?.firstName} ${doctor.personalDetails?.name?.lastName}`,
          specialties: doctor.personalDetails?.['doc_specialties']?.join(', '),
          yearsPracticing: yearsPracticing && `${yearsPracticing} years`,
        };
      });
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

.banner-img{
  margin-top: 100px;
}

.main-container {
  background-color: #ececec;
  border-radius: 5px;
}
</style>
