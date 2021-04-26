<template lang="pug">
  div
    app-bar(:picURL="picURL" :clinicName="hospitalName")
    usp(
      :background-pic="bannerPicUrl"
      :name="hospitalName"
      :org-id="orgId"
      @searchLoading="searchLoading"
      @searchResultsLoaded="searchResultsLoaded"
    )
    v-container#doctorSearchResult
      v-row(v-if="loadingSearch")
        v-col(cols="12" sm="12")
          p Loading...
      v-row(v-if="searchResults.length && searchText")
        v-col(cols="12" sm="12").pt-9.mt-9
          p Search results for
            i.font-weight-bold "{{ searchText }}"
          doctor-cards(v-if="formattedSearchedDoctors" :doctors="formattedSearchedDoctors")
      v-row(v-if="!searchResults.length && searchText && !loadingSearch").pa-1
        v-col(cols="12" sm="12").pt-9.mt-9
          p No results for&nbsp;
            i.font-weight-bold "{{ searchText }}"
      v-divider(v-if="searchText && !loadingSearch")
      v-row
        v-col(cols="12" sm="8")
          v-row
            v-col(cols="12" sm="12")
              v-tabs(v-model="activeTab")
                v-tab Specializations
                v-tab Doctors ({{ formattedDoctors.length }})
              v-tabs-items(v-model="activeTab")
                v-tab-item.main-container.pa-4
                  specializations(:doctors="doctors")
                v-tab-item.main-container.pa-4
                  doctor-cards(:doctors="formattedDoctors")
          v-row(v-if="hasFrontdesk")
            v-col(cols="12" sm="12")
              chat-now-card(:hospitalName="hospitalName" :orgId="orgId")
        v-col(cols="12" sm="4").service-sched
          v-row
            v-col(cols="12" sm="12")
              hospital-schedules(:schedules="clinicSchedules")
          v-row
            v-col(cols="12" sm="12")
              hospital-services(:services-offered="sortedServices")
      v-row
        v-col(cols="12" sm="12")
          clinic-info(
            :hospitalName="hospitalName"
            :address="address"
            :completeAddress="completeAddress"
            :picURL="picURL"
            :description="description"
          )
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
// utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// services
// - NOTE: Commented out for disabling purposes
import { getHospitalWebsite, getMembership, getServices, getFrontdeskMembers } from '~/utils/axios';
// components
import AppBar from '~/components/clinic-website/app-bar';
import Usp from '~/components/hospital/usp';
import Search from '~/components/clinic-website/search';
import ClinicInfo from '~/components/clinic-website/clinic-info';
import DoctorCards from '~/components/clinic-website/doctor-card';
import Specializations from '~/components/clinic-website/specialization-expansion';
import ChatNowCard from '~/components/clinic-website/chat-now-card';
import HospitalServices from '~/components/clinic-website/services';
import HospitalSchedules from '~/components/clinic-website/schedules';

export default {
  layout: 'clinic-website',
  components: {
    AppBar,
    Usp,
    ClinicInfo,
    Search,
    DoctorCards,
    Specializations,
    ChatNowCard,
    HospitalServices,
    HospitalSchedules,
  },
  async asyncData ({ redirect, params, error }) {
    // - NOTE: For disabling purposes
    // return redirect('/');
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
      activeTab: null,
      loadingSearch: false,
      searchResults: [],
      searchText: null,
    };
  },
  computed: {
    orgId () {
      return this.$route.params.id;
    },
    picURL () {
      return this.hospitalWebsite?.picURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
    },
    bannerPicUrl () {
      // TODO: fetch banner pic url from service
      return require('~/assets/images/clinic-website-default-cover.jpg');
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
    clinicSchedules () {
      if (!this.schedules) return; // eslint-disable-line

      const groupedSched = [...this.schedules].reduce((prev, current) => { // eslint-disable-line
        const sameDay = prev.find(prev => prev.day === current.day);
        const { opening, closing } = current;
        const currentOpeningClosing = { opening, closing };

        if (sameDay && Array.isArray(sameDay.hours)) {
          sameDay.day = current.day;
          sameDay.hours.push(currentOpeningClosing);
        } else if (sameDay && !Array.isArray(sameDay.hours)) {
          sameDay.day = current.day;
          sameDay.hours = [currentOpeningClosing];
        } else {
          prev.push({
            day: current.day,
            hours: [currentOpeningClosing],
          });
        }
        return prev;
      }, []);
      return groupedSched;
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
    formattedSearchedDoctors () {
      return this.searchResults?.map((doctor) => {
        const practicingSince = doctor.doc_practicingSince; // eslint-disable-line
        const yearsPracticing = practicingSince && (new Date().getFullYear() - practicingSince);

        return {
          ...doctor,
          picURL: doctor.picURL,
          doctorName: `Dr. ${doctor.name?.firstName} ${doctor.name?.lastName}`,
          specialties: doctor.doc_specialties?.join(', '), // eslint-disable-line
          yearsPracticing: yearsPracticing && `${yearsPracticing} years`,
        };
      });
    },
  },
  methods: {
    searchLoading (isLoading) {
      this.loadingSearch = isLoading;
    },
    searchResultsLoaded (search) {
      const { results, text } = search;

      if (results && results.length && text) {
        VueScrollTo.scrollTo('#doctorSearchResult', 500, { easing: 'ease' });
      }

      this.searchResults = results;
      this.searchText = text;
    },
  },
  head () {
    return headMeta({
      title: `${this.hospitalName || 'Hospital Website'}`,
      description: this.description,
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
  margin-top: 70px;
}

.main-container {
  background-color: #ececec;
  border-radius: 5px;
}

.service-sched {
  padding-top: 60px;
}
</style>
