<template lang="pug">
  div(v-if="!loading.page").py-0
    app-bar(
      :picURL="picURL"
      :clinicName="clinicName"
      :is-verified="isVerified"
      :is-preview-mode="isPreviewMode"
    )
    usp(
      v-model="searchText"
      :search-results-mode="searchResultsMode"
      :name="clinicName"
      :org-id="orgId"
      :coverURL="coverURL"
      :is-preview-mode="isPreviewMode"
      :hide-search-bars="$isMobile"
      :service-types="serviceTypes"
      @search="onServiceSearch"
      @filter:date="filterByDate"
    )
    v-container(fluid)
      v-row(justify="center")
        v-col(cols="12" md="3")
          clinic-info(
            :clinic="clinicWebsite"
            :is-dummy-org="isDummyOrg"
            :is-preview-mode="isPreviewMode"
          )
          schedules(:schedules="groupedSchedules").mt-2
          usp(
            v-if="$isMobile && searchResultsMode"
            v-model="searchText"
            hide-banner
            no-gutters
            search-results-mode
            :name="clinicName"
            :org-id="orgId"
            :coverURL="coverURL"
            :is-preview-mode="isPreviewMode"
            :service-types="serviceTypes"
            @search="onServiceSearch"
            @filter:date="filterByDate"
          )
        v-col(cols="12" md="8")#services
          services-tabs(
            v-if="!searchResultsMode && !$isMobile"
            v-model="activeTab"
            :items="listItems"
            :organization="orgId"
            :loading="loading.list"
            :has-next-page="hasNextPage"
            :has-previous-page="hasPreviousPage"
            :is-preview-mode="isPreviewMode"
            :service-types="serviceTypes"
            :has-doctors="hasDoctors"
            @next="refetchListItems(activeTab, page + 1)"
            @previous="refetchListItems(activeTab, page - 1)"
          )
          services-search-results(
            v-else-if="searchResultsMode"
            :organization="orgId"
            :loading="loading.list"
            :items="searchResults"
            :is-preview-mode="isPreviewMode"
          )
    v-divider
    v-footer(v-if="!$isMobile" color="white").mt-3
      v-row(justify="center" align="center" no-gutters)
        v-col(
          cols="12"
          md="4"
          align="start"
        )
          div.d-flexDirectory
            p.ml-5.mt-1 #[b Powered by]
            img(
              height="30"
              src="~/assets/images/MYCURE-logo.png"
              alt="MYCURE"
              @click="$nuxt.$router.push({ name: 'index' })"
            ).ml-2
          div
            p.ml-5 &#169;{{new Date().getFullYear()}} All Rights Reserved.
        v-col(cols="12" md="4" align="center")
          v-row
            nuxt-link(to="/terms") Terms of Use
            | &nbsp;&nbsp;|&nbsp;&nbsp;
            nuxt-link(to="/privacy-policy") Privacy Policy
            | &nbsp;&nbsp;|&nbsp;&nbsp;
            a(
              :href="feedbackLink"
              target="_blank"
              rel="noopener noreferrer"
            ) Send us your feedback
        v-col(cols="12" md="4" align="end")
          nuxt-link(to="/signup/health-facilities") Create my own Health Facility Website
    v-footer(v-else color="primary")
      v-row(justify="center" align="center")
        v-col(cols="12" align="center")
          div.d-flex.justify-center.white--text
            nuxt-link(to="/terms").white--text Terms of Use
            | &nbsp;&nbsp;|&nbsp;&nbsp;
            nuxt-link(to="/privacy-policy").white--text Privacy Policy
            | &nbsp;&nbsp;|&nbsp;&nbsp;
            a(
              :href="feedbackLink"
              target="_blank"
              rel="noopener noreferrer"
            ).white--text Send us your feedback
        v-col(cols="10" align="center")
          nuxt-link(to="/signup/health-facilities").white--text Create my own Health Facility Website
        v-col(cols="10" align="center")
          div.d-flex.justify-center
            img(
              height="26"
              src="~/assets/images/MYCURE-logo-white.png"
              alt="MYCURE"
              @click="$nuxt.$router.push({ name: 'index' })"
            )
            p.white--text.font-14.ml-4.mt-1 &#169;{{new Date().getFullYear()}} All Rights Reserved.
</template>

<script>
import { isEmpty } from 'lodash';
import VueScrollTo from 'vue-scrollto';
// - utils
import { getServices } from '~/utils/axios';
import { getOrganization } from '~/utils/axios/organizations';
import headMeta from '~/utils/head-meta';
// - services
import { fetchClinicWebsiteDoctors } from '~/services/organization-members';
import {
  fetchClinicServices,
  fetchClinicServiceTypes,
} from '~/services/services';
// - components
import AboutUs from '~/components/clinic-website/about-us';
import AppBar from '~/components/clinic-website/app-bar';
import ClinicInfo from '~/components/clinic-website/clinic-info';
import Schedules from '~/components/clinic-website/schedules';
import ServicesSearchResults from '~/components/clinic-website/services/search-results';
import ServicesTabs from '~/components/clinic-website/services/tabs';
import Usp from '~/components/clinic-website/usp';
export default {
  layout: 'clinic-website',
  components: {
    AboutUs,
    AppBar,
    ClinicInfo,
    Schedules,
    ServicesSearchResults,
    ServicesTabs,
    Usp,
  },
  async asyncData ({ params, $sdk, redirect }) {
    try {
      const clinicWebsite = await getOrganization({ id: params.id }, true) || {};
      if (isEmpty(clinicWebsite)) redirect('/');
      const services = await getServices({ facility: params.id });
      return {
        clinicWebsite,
        services,
      };
    } catch (error) {
      console.error(error);
    }
  },
  data () {
    this.feedbackLink = 'https://airtable.com/shrgkdR8ASEdbQ1Pa';
    this.icons = [
      { icon: 'mdi-facebook', link: 'https://facebook.com/' },
      { icon: 'mdi-twitter', link: 'https://twitter.com/' },
      { icon: 'mdi-email', link: 'mailto:' },
      { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/' },
    ];
    this.days = [
      {
        order: 1,
        day: 'mon',
        dayName: 'Monday',
      },
      {
        order: 2,
        day: 'tue',
        dayName: 'Tuesday',
      },
      {
        order: 3,
        day: 'wed',
        dayName: 'Wednesday',
      },
      {
        order: 4,
        day: 'thu',
        dayName: 'Thursday',
      },
      {
        order: 5,
        day: 'fri',
        dayName: 'Friday',
      },
      {
        order: 6,
        day: 'sat',
        dayName: 'Saturday',
      },
      {
        order: 7,
        day: 'sun',
        dayName: 'Sunday',
      },
    ];
    this.itemsLimit = 7;
    return {
      loading: {
        page: true,
        list: false,
      },
      page: 1,
      pageCount: 2,
      // Data Models
      orgDoctors: [],
      clinicWebsite: {},
      activeTab: 'lab',
      filteredServices: [],
      serviceTypes: [],
      // Items to show in tab list
      listItems: [],
      // total items
      itemsTotal: 0,
      doctorsTotal: 0,
      servicesTotal: 0,
      // search
      searchResultsMode: false,
      searchResults: [],
      searchText: null,
      searchFilters: {},
    };
  },
  computed: {
    mode () {
      return this.$route.query.mode;
    },
    isPreviewMode () {
      return this.mode === 'preview';
    },
    orgId () {
      return this.clinicWebsite.id;
    },
    isVerified () {
      return !!this.clinicWebsite?.websiteId;
    },
    isDummyOrg () {
      const { tags } = this.clinicWebsite;
      if (!tags?.length) return false;
      return tags.includes('dummy');
    },
    picURL () {
      return this.clinicWebsite?.picURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
    },
    coverURL () {
      return this.clinicWebsite?.coverURL || require('~/assets/images/clinics-website/usp-background.png');
    },
    clinicName () {
      return this.clinicWebsite?.name || 'MYCURE Clinic';
    },
    servicesOffered () {
      return this.services;
    },
    schedules () {
      return this.clinicWebsite?.mf_schedule || []; // eslint-disable-line
    },
    groupedSchedules () {
      const groupedSchedules = this.schedules
        .map((schedule) => {
          const { order } = this.days.find(day => day.day === schedule.day);
          return {
            order,
            ...schedule,
          };
        })
        .sort((a, b) => a.day !== b.day ? a.order - b.order : a.opening - b.opening) || [];
      return groupedSchedules;
    },
    testimonialDate () {
      return this.clinicWebsite?.createdAt;
    },
    testimonialDescription () {
      return this.clinicWebsite?.description;
    },
    formattedDoctors () {
      return this.orgDoctors?.map((doctor) => {
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
    hasDoctors () {
      return !isEmpty(this.orgDoctors);
    },
    hasNextPage () {
      const nextSkip = this.itemsLimit * (this.page);
      return nextSkip < this.itemsTotal;
    },
    hasPreviousPage () {
      const previousSkip = this.itemsLimit * (this.page - 1);
      return previousSkip > 0;
    },
  },
  watch: {
    activeTab: {
      async handler (val) {
        await this.refetchListItems(val);
      },
    },
  },
  async mounted () {
    this.$vuetify.theme.dark = false;
    await this.fetchServiceTypes();
    this.loading.page = false;
    await this.fetchServices({ type: 'diagnostic', subtype: 'lab' });
    await this.fetchDoctorMembers();
    this.listItems = this.filteredServices;
    this.itemsTotal = this.servicesTotal;
  },
  methods: {
    async fetchDoctorMembers (searchText, page = 1) {
      try {
        this.loading.list = true;
        const skip = this.itemsLimit * (page - 1);
        const { items, total } = await fetchClinicWebsiteDoctors(this.$sdk, {
          organization: this.orgId,
          searchText,
          limit: this.itemsLimit,
          skip,
        });
        this.doctorsTotal = total;
        this.orgDoctors = items || [];
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.list = false;
      }
    },
    async fetchServices (service = {}, searchText, page = 1) {
      try {
        this.loading.list = true;
        const { type, subtype, insurer } = service;
        const skip = this.itemsLimit * (page - 1);
        const { items, total } = await fetchClinicServices(this.$sdk, {
          facility: this.orgId,
          type,
          subtype,
          insurer,
          searchText,
          limit: this.itemsLimit,
          skip,
        });
        this.servicesTotal = total;
        // - TODO: Confirm if there are specified schedules for services. Right now the clinic schedule is assigned
        this.filteredServices = items.map(item => ({ ...item, schedules: this.groupedSchedules }));
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.list = false;
      }
    },
    async fetchServiceTypes () {
      try {
        const { items } = await fetchClinicServiceTypes(this.$sdk, { facility: this.orgId });
        this.serviceTypes = items || [];
      } catch (error) {
        console.error(error);
      }
    },
    async refetchListItems (tab, page = 1) {
      this.page = page;
      if (tab === 'doctors') {
        await this.fetchDoctorMembers({ page: this.page });
        this.listItems = [...this.formattedDoctors];
        this.itemsTotal = this.doctorsTotal;
        return;
      }
      const subtype = tab === 'lab' || tab === 'imaging' ? tab : null;
      await this.fetchServices({ type: subtype ? 'diagnostic' : tab, ...subtype && { subtype } }, null, this.page);
      this.listItems = [...this.filteredServices];
      this.itemsTotal = this.servicesTotal;
    },
    async onServiceSearch ({ searchText, searchFilters }) {
      if (!this.searchResultsMode) this.searchResultsMode = true;
      this.searchFilters = searchFilters;
      await this.fetchDoctorMembers(searchText);
      await this.fetchServices(searchFilters, searchText);
      this.searchResults = [...this.formattedDoctors, ...this.filteredServices];
      VueScrollTo.scrollTo('#services', 500, { offset: -100, easing: 'ease' });
    },
    filterByDate (unixDate) {
      if (!unixDate) {
        this.onServiceSearch({ searchText: this.searchText, searchFilters: this.searchFilters });
        return;
      }
      const date = new Date(unixDate);
      let day = date.getDay();
      if (day === 0) day = 7;

      if (!this.searchResults?.length) return;
      this.searchResults = this.searchResults.filter((result) => {
        const schedules = result.scheduleData || result.schedules;
        const matchDay = schedules?.find(schedule => schedule.order === day);
        return matchDay;
      });
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
.doctors-container {
  background-color: #F2F2F2;
}
</style>
