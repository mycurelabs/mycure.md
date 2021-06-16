<template lang="pug">
  div(v-if="!loading.page").py-0.main-container
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
        //- Mobile
        v-col(
          v-if="!searchResultsMode"
          cols="12"
          md="7"
          :class="{ 'order-first': $isMobile, 'order-last': !$isMobile }"
        )
          service-types-mobile-selection(
            v-if="!mobileServicesListView && $isMobile"
            :service-types="serviceTypes"
            :has-doctors="hasDoctors"
            :is-preview-mode="isPreviewMode"
            @select="activeTab = $event; mobileServicesListView = true"
          )
          services-tabs(
            v-else-if="showServiceTabs"
            v-model="activeTab"
            hide-tabs
            :show-back-button="$isMobile"
            :items="listItems"
            :items-pagination-length="itemsPaginationLength"
            :organization="orgId"
            :loading="loading.list"
            :has-next-page="hasNextPage"
            :has-previous-page="hasPreviousPage"
            :has-doctors="hasDoctors"
            :is-preview-mode="isPreviewMode"
            :service-types="serviceTypes"
            @back="mobileServicesListView = false"
            @paginate="refetchListItems(activeTab, $event)"
          )
        v-col(cols="12" md="3")
          service-types-selection(
            v-if="!$isMobile && !searchResultsMode"
            v-model="activeTab"
            :service-types="serviceTypes"
            :has-doctors="hasDoctors"
            :is-preview-mode="isPreviewMode"
            @select="activeTab = $event"
          )
          v-btn(
            v-if="searchResultsMode && !$isMobile"
            tile
            outlined
            color="primary"
            @click="searchResultsMode = false"
          ).text-none
            v-icon(small left) mdi-arrow-left
            | Go back to Main Page
          clinic-info(
            :clinic="clinicWebsite"
            :is-dummy-org="isDummyOrg"
            :is-preview-mode="isPreviewMode"
          )
          schedules(:schedules="groupedSchedules").mt-2
          //- Show on mobile
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
        v-col(cols="12" md="7" v-if="searchResultsMode")#services
          services-search-results(
            :organization="orgId"
            :loading="loading.list"
            :items="searchResults"
            :is-preview-mode="isPreviewMode"
          )

    //- Footer
    v-divider
    v-footer(v-if="!$isMobile" color="white").mt-3
      v-row.d-flex
        v-col.font-14
          div.d-flex
            p.ml-5.mt-1 #[b Powered by]
            img(
              height="30"
              src="~/assets/images/MYCURE-logo.png"
              alt="MYCURE"
              @click="$nuxt.$router.push({ name: 'index' })"
            ).ml-2
          p.ml-5 Copyright &#169;{{new Date().getFullYear()}} All Rights Reserved.
        v-col.d-flex
          nuxt-link(to="/terms").font-14 Terms of Use
          | &nbsp;|&nbsp;
          nuxt-link(to="/privacy-policy").font-14 Privacy Policy
          | &nbsp;|&nbsp;
          a(
            :href="feedbackLink"
            target="_blank"
            rel="noopener noreferrer"
          ).font-14 Send us your feedback
        v-col.d-flex.text-center
          nuxt-link(to="/directory/results").font-14 See more Health Facilities
          | &nbsp;|&nbsp;
          nuxt-link(to="/signup/health-facilities").font-14 Create my own Health Facility Website
    v-footer(v-else color="primary")
      v-row(justify="center" align="center")
        v-col(cols="12" align="center")
          div.d-flex.justify-center.white--text
            nuxt-link(to="/terms").white--text.font-14 Terms of Use
            | &nbsp;&nbsp;|&nbsp;&nbsp;
            nuxt-link(to="/privacy-policy").white--text.font-14 Privacy Policy
            | &nbsp;&nbsp;|&nbsp;&nbsp;
            a(
              :href="feedbackLink"
              target="_blank"
              rel="noopener noreferrer"
            ).white--text.font-14 Send us your feedback
        v-col(cols="10" align="center")
          div.d-flex.white--text
            nuxt-link(to="/directory/results").white--text.font-14 See more Health Facilities
            | &nbsp;&nbsp;|&nbsp;&nbsp;
            nuxt-link(to="/signup/health-facilities").white--text.font-14 Create my own Health Facility Website
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
import { isEmpty, intersection, uniq } from 'lodash';
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
import AppBar from '~/components/clinic-website/app-bar';
import ClinicInfo from '~/components/clinic-website/clinic-info';
import Schedules from '~/components/clinic-website/schedules';
import ServicesSearchResults from '~/components/clinic-website/services/search-results';
import ServicesTabs from '~/components/clinic-website/services/tabs';
import ServiceTypesMobileSelection from '~/components/clinic-website/services/service-types-mobile-selection';
import ServiceTypesSelection from '~/components/clinic-website/services/service-types-selection';
import Usp from '~/components/clinic-website/usp';

const SERVICE_TYPES = [
  'clinical-consultation',
  'clinical-procedure',
  'dental',
  'pe',
  'lab',
  'imaging',
];

export default {
  components: {
    AppBar,
    ClinicInfo,
    Schedules,
    ServicesSearchResults,
    ServicesTabs,
    ServiceTypesMobileSelection,
    ServiceTypesSelection,
    Usp,
  },
  layout: 'clinic-website',
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
    this.itemsLimit = 10;
    return {
      // UI State
      loading: {
        page: true,
        list: false,
      },
      mobileServicesListView: false,
      // Pagination
      page: 1,
      pageCount: 2,
      // Data Models
      orgDoctors: [],
      clinicWebsite: {},
      activeTab: 'lab',
      filteredServices: [],
      serviceTypes: [],
      serviceSchedules: [],
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
  head () {
    return headMeta({
      title: `${this.clinicWebsite?.name || 'Facility Website'}`,
      description: 'Visit my professional website and schedule an appointment with me today.',
      socialBanner: this.picURL,
    });
  },
  computed: {
    mode () {
      return this.$route.query.mode;
    },
    isPreviewMode () {
      return this.mode === 'preview';
    },
    orgId () {
      return this.clinicWebsite?.id;
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
      if (!this.orgDoctors?.length) return [];
      return this.orgDoctors.map((doctor) => {
        const practicingSince = doctor.personalDetails?.doc_practicingSince; // eslint-disable-line
        const yearsPracticing = practicingSince && (new Date().getFullYear() - practicingSince);

        return {
          ...doctor,
          picURL: doctor.personalDetails?.picURL,
          doctorName: `Dr. ${doctor.personalDetails?.name?.firstName} ${doctor.personalDetails?.name?.lastName}`,
          specialties: doctor.personalDetails?.doc_specialties?.join(', '), // eslint-disable-line
          yearsPracticing: yearsPracticing && `${yearsPracticing} years`,
        };
      }) || [];
    },
    itemsPaginationLength () {
      return Math.ceil(this.itemsTotal / this.itemsLimit) || 0;
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
    showServiceTabs () {
      if (this.$isMobile && this.mobileServicesListView) return true;
      if (!this.$isMobile && !this.searchResultsMode) return true;
      return false;
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
    // Initial window setups
    this.$vuetify.theme.dark = false;
    if (this.isPreviewMode) window.$crisp.push(['do', 'chat:hide']);

    this.loading.page = false;
    await this.fetchServiceTypes();
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

        /*
          Checks if there is a specific schedule for the service type, if not then it assigns the clinic's schedule.
          A flag for mf_schedule formatting is also included for rendering purposes.
        */
        this.filteredServices = items.map((item) => {
          const { type, subtype } = item;
          const primaryType = subtype || type;
          const schedules = this.serviceSchedules.find(schedule => schedule.type === primaryType);
          return {
            ...item,
            nonMfSchedule: !!schedules,
            schedules: schedules?.items || this.groupedSchedules,
          };
        }) || [];
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.list = false;
      }
    },
    async fetchServiceTypes () {
      try {
        const { items } = await fetchClinicServiceTypes(this.$sdk, { facility: this.orgId });
        this.serviceTypes = intersection(SERVICE_TYPES, items) || [];
        const typeSchedulesPromises = this.serviceTypes.map(async (type) => {
          const serviceScheduleQuery = {
            organization: this.orgId,
          };
          const serviceTags = [];
          serviceTags.push(type);
          if (!isEmpty(serviceTags)) {
            serviceScheduleQuery.tags = { $in: uniq(serviceTags) };
          }
          const data = await this.$sdk.service('schedule-slots').find(serviceScheduleQuery);
          return {
            type,
            items: data.items,
          };
        });
        this.serviceSchedules = await Promise.all(typeSchedulesPromises) || [];
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
      }) || [];
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.main-container {
  background-color: #fafafa;
}
</style>
