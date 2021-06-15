<template lang="pug">
  div(style="overflow: hidden; background: #fafafa")
    new-app-bar
    //- PANEL 1
    div(:style="{ height: '100vh', paddingTop: $isMobile ? '60px' : '100px' }").panel-bg
      v-row(justify="center")
        v-col(cols="10").text-center
          v-avatar(size="200").mb-5
            img(:src="picURL")
          h1.mb-5 {{clinicName}}
          v-btn(
            large
            rounded
            color="#05386E"
            dark
            @click="servicesDialog = true"
          ).text-none.custom-clinic-button
            h2 Schedule a visit today
          v-dialog(v-model="servicesDialog" width="900" persistent scrollable)
            v-card
              v-toolbar(flat)
                h2 Select a service
                v-spacer
                v-btn(icon @click="servicesDialog = false")
                  v-icon mdi-close
              v-divider
              v-card-text.pt-5
                v-row(justify="center")
                  v-col(cols="10")
                    v-col(v-if="$isMobile && searchResultsMode")
                      v-btn(
                        tile
                        outlined
                        color="primary"
                        @click="searchResultsMode = false"
                      ).text-none
                        v-icon(small left) mdi-arrow-left
                        | Go back to Main Page
                    v-row(justify="center")
                      //- Mobil
                      v-col(
                        v-if="!searchResultsMode"
                        cols="12"
                        md="8"
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
                      v-col(cols="12" md="4")
                        service-types-selection(
                          v-if="!$isMobile && !searchResultsMode"
                          v-model="activeTab"
                          :service-types="serviceTypes"
                          :has-doctors="hasDoctors"
                          :is-preview-mode="isPreviewMode"
                          @select="activeTab = $event"
                        )
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
                      v-col(cols="12" md="8" v-if="searchResultsMode")#services
                        services-search-results(
                          :organization="orgId"
                          :loading="loading.list"
                          :items="searchResults"
                          :is-preview-mode="isPreviewMode"
                        )
    //- PANEL 1 FOOTER
    div(v-if="!$isMobile").d-flex.panel-1-footer
      span(v-if="formattedAddress")
        v-icon.red--text mdi-map-marker
        span {{formattedAddress}}
      v-spacer
      span(v-if="clinicPhone")
        v-icon.green--text mdi-phone
        span {{clinicPhone}}
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
      style="margin-top: 12px;"
    )
    div#services-panel.mt-10
      v-container
        v-row(justify="center")
          v-col(cols="10")
            v-row(justify="center")
              //- Mobile
              v-col(
                v-if="!searchResultsMode"
                cols="12"
                md="8"
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
              v-col(cols="12" md="4")
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
              v-col(cols="12" md="8" v-if="searchResultsMode")#services
                services-search-results(
                  :organization="orgId"
                  :loading="loading.list"
                  :items="searchResults"
                  :is-preview-mode="isPreviewMode"
                )
    div#about-us-panel.white
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center', align: 'center' }")
            //- v-col(cols="12")
              h1 About Us
              div(style="width: 160px; height: 3px; background: #0099cc")
            v-col(cols="12" md="4").px-10.text-center
              h1 About Us
              center
                div(style="width: 160px; height: 3px; background: #0099cc")
              br
              h1.primary--text At MYCURE we always care for the extra mile
            v-col(cols="12" md="4").py-10
              div.text-center
                v-avatar(size="200").mb-5
                  img(:src="picURL")
              p {{description}}
              br
              media(v-if="formattedAddress" align="top")
                template(slot="media-image")
                  v-icon.red--text mdi-map-marker
                template(slot="media-content")
                  p {{formattedAddress}}
              media(v-if="clinicPhone" align="top")
                template(slot="media-image")
                  v-icon.green--text mdi-phone
                template(slot="media-content")
                  p {{clinicPhone}}
            v-col(cols="12" md="4").py-10
              schedules(:schedules="groupedSchedules")
            //- v-col(cols="12" md="10")
              v-row(justify="center")
                v-col(cols="12" md="4")
                  v-row(justify="center" align="center").d-flex
                    v-col.shrink
                      v-avatar(size="100")
                        img(src="https://dummyimage.com/150x150/f2f2f2/121212")
                    v-col.text-start
                      h3.primary--text CEO
                      h3.primary--text Dr. Jean Rivera
                v-col(cols="12" md="8")
                  p
                    i "Anim et est excepteur culpa do incididunt adipisicing ut ipsum. Esse in ipsum culpa id cillum ad elit laboris qui commodo laboris qui cillum veniam. Fugiat officia ut esse pariatur id elit occaecat ipsum ipsum. Ad non id quis elit labore do dolor esse adipisicing esse commodo. Quis elit aliquip mollit dolor."
    //- GALLERY
    //- div.white
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
    //- QUICK BOOK
    div(style="background: #0369A5")
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12")
              h1.mb-5.white--text Get An Appointment
            v-col(cols="12" md="6").pa-10
              template(v-for="item in quickAppointmentsContent")
                media
                  template(slot="media-image")
                    v-avatar(size="45" color="#add35b")
                      v-icon.white--text {{item.icon}}
                  template(slot="media-content")
                    br
                    h5.white--text {{item.title}}
                    p.white--text {{item.content}}
            v-col(cols="12" md="6").pa-10
              v-card(style="border-radius: 10px;")
                v-card-text.pa-10
                  h3.mb-5 Choose a service
                  v-text-field(
                    outlined
                    label="Types"
                  )
                  v-text-field(
                    outlined
                    label="Services"
                  )
                  div.d-flex
                    v-spacer
                    v-btn(
                      color="#0369A5"
                      unelevated
                      large
                      dark
                    ).text-none Continue
    //- FOOTER
    v-footer(v-if="!$isMobile" dark color="#343A40").pa-5
      v-row.d-flex
        v-col.font-14
          div.d-flex
            p.ml-5.mt-1 #[b Powered by]
            img(
              height="30"
              src="~/assets/images/mycure-footer-logo.png"
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
    v-footer(v-else dark color="#343A40").pa-5
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
import { formatAddress } from '~/utils/formats';
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
import GenericPanel from '~/components/generic/GenericPanel';
import Media from '~/components/commons/media';
import NewAppBar from '~/components/clinic-website/new/AppBar';

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
    GenericPanel,
    Media,
    //
    NewAppBar,
  },
  layout: 'clinic-website',
  async asyncData ({ params, $sdk, redirect }) {
    try {
      const clinic = await getOrganization({ id: params.id }, true) || {};
      if (isEmpty(clinic)) redirect('/');
      const services = await getServices({ facility: params.id });
      return {
        clinic,
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
    this.quickAppointmentsContent = [
      {
        icon: 'mdi-microscope',
        title: 'Choose a service',
        content: 'Select from among the healthcare services available for you.',
      },
      {
        icon: 'mdi-calendar-blank',
        title: 'Book a schedule',
        content: 'Choose your best time and fill in the appointment form.',
      },
      {
        icon: 'mdi-clock-outline',
        title: 'Show up on time',
        content: 'Our friendly healthcare professionals will be there to see you.',
      },
    ];
    return {
      // UI State
      loading: {
        page: true,
        list: false,
      },
      servicesDialog: false,
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
    formattedAddress () {
      if (!this.clinic?.address) return '';
      return formatAddress(this.clinic.address, 'street1, street2, city, province, country');
    },
    clinicPhone () {
      return this.clinic?.phone;
    },
    // old
    mode () {
      return this.$route.query.mode;
    },
    isPreviewMode () {
      return this.mode === 'preview';
    },
    orgId () {
      return this.clinic?.id;
    },
    isVerified () {
      return !!this.clinic?.websiteId;
    },
    isDummyOrg () {
      const { tags } = this.clinic;
      if (!tags?.length) return false;
      return tags.includes('dummy');
    },
    picURL () {
      return this.clinic?.picURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
    },
    coverURL () {
      return this.clinic?.coverURL || require('~/assets/images/clinics-website/usp-background.png');
    },
    clinicName () {
      return this.clinic?.name || 'MYCURE Clinic';
    },
    servicesOffered () {
      return this.services;
    },
    schedules () {
      return this.clinic?.mf_schedule || []; // eslint-disable-line
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
    description () {
      return this.clinic?.description ||
      `${this.name || 'This facility'} specializes in telehealth services. ${this.name || 'It'} is committed to provide medical consultation via video conference or phone call to our patient 24 hours a day 7 days a week.`;
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
.panel-bg {
  background-image: url('../../assets/images/clinics-website/clinic-background.png');
  background-position: center center;
  background-size: cover;
}
.custom-clinic-button {
  height: 90px !important;
  width: 300px;
}
.panel-1-footer {
  margin-top: -55px;
  height: 55px;
  padding: 17px 10px 0px 10px;
  background-color: rgba(255, 255, 255, 0.8);
}
.search-container {
  height: 400px;
}
</style>
