<template lang="pug">
  div(style="overflow: hidden; background: #fafafa")
    //- CHOOSE SERVICE DIALOG
    choose-service(
      v-model="chooseServiceDialog"
      :service-types="serviceTypes"
      :has-doctors="hasDoctors"
      @select="activeTab = $event"
    )
    //- APP BAR
    app-bar
    //- PANEL 1
    div(
      :class="background"
      :style="{ height: isVerified ? '150vh' : '175vh', paddingTop: $isMobile ? '60px' : '100px' }"
    ).panel-bg
      v-row(justify="center")
        v-col(cols="10").text-center
          v-avatar(:size="$isMobile ? '150' : '200'").mb-5
            img(:src="picURL")
          h1(:class="clinicNameClasses").mb-5.font-usp-primary {{clinicName}}
          template(v-if="isVerified")
            div.white.btn-banner
              strong(slot="badge").font-18.warning--text We're Open!
            v-hover(
              v-slot="{ hover }"
              open-delay="100"
            )
              v-btn(
                large
                rounded
                dark
                :color="hover ? 'info' : 'warning'"
                :href="bookURL"
              ).text-none.custom-clinic-button
                h2 {{ hover ? 'Choose a schedule' : 'Book an Appointment' }}
    template(v-if="isVerified")
      //- PANEL 1 FOOTER
      div(:class="{'d-flex': !$isMobile}" :style="{ height: !$isMobile ? '55px' : 'auto'}").panel-1-footer
        span(v-if="formattedAddress")
          v-icon.red--text mdi-map-marker
          span {{formattedAddress}}
        v-spacer(v-if="!$isMobile")
        br(v-else)
        span(v-if="clinicPhone")
          v-icon.green--text mdi-phone
          span {{clinicPhone}}
      //- MAIN PANELS
      main-workflow(
        v-model="activeTab"
        :is-preview-mode="isPreviewMode"
        :search-results-mode="searchResultsMode"
        :search-results="searchResults"
        :service-types="serviceTypes"
        :has-doctors="hasDoctors"
        :items="listItems"
        :items-pagination-length="itemsPaginationLength"
        :organization="clinic"
        :loading="loading.list"
        :has-next-page="hasNextPage"
        :has-previous-page="hasPreviousPage"
        @back="searchResultsMode = false"
        @search="onServiceSearch"
        @paginate="onPaginate($event)"
        @filter:date="filterByDate"
      )
      //- ABOUT US
      about-us(
        :picURL="picURL"
        :name="clinicName"
        :description="description"
        :phone="clinicPhone"
        :address="formattedAddress"
        :schedules="compressedSchedules"
      )
      //- QUICK BOOK
      quick-book(
        :is-preview-mode="isPreviewMode"
        :service-types="serviceTypes"
        :service-schedules="serviceSchedules"
        :organization-schedules="groupedSchedules"
        :organization="orgId"
      )
    div(v-else).mx-n3.mb-n3.info
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12" md="10").text-center
              h2.mc-title-set-1.mb-10.white--text Do you own this business?
              mc-btn(
                depressed
                color="success"
                :large="$isRegularScreen"
                :x-large="$isWideScreen"
                :to="{ name: 'signup-health-facilities' }"
              ).font-s.text-none Claim for free now!
    //- FOOTER
    app-footer
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import intersection from 'lodash/intersection';
import uniq from 'lodash/uniq';
import VueScrollTo from 'vue-scrollto';
// - utils
import { getServices } from '~/utils/axios';
import { getOrganization } from '~/utils/axios/organizations';
import { formatAddress } from '~/utils/formats';
import canUseWebp from '~/utils/can-use-webp';
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// - services
import { fetchClinicWebsiteDoctors } from '~/services/organization-members';
import {
  fetchClinicServices,
  fetchClinicServiceTypes,
} from '~/services/services';
// - components
import AboutUs from '~/components/clinic-website/AboutUs';
import AppBar from '~/components/clinic-website/new/AppBar';
import AppFooter from '~/components/clinic-website/AppFooter';
import ChooseService from '~/components/clinic-website/ChooseService';
import GenericPanel from '~/components/generic/GenericPanel';
import SearchPanel from '~/components/clinic-website/SearchPanel';
import MainWorkflow from '~/components/clinic-website/MainWorkflow';
import QuickBook from '~/components/clinic-website/QuickBook';

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
    AboutUs,
    AppBar,
    AppFooter,
    ChooseService,
    GenericPanel,
    SearchPanel,
    MainWorkflow,
    QuickBook,
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
      servicesDialog: false,
      chooseServiceDialog: false,
      activeTab: null,
      // Pagination
      page: 1,
      pageCount: 2,
      // Data Models
      orgDoctors: [],
      filteredServices: [],
      serviceTypes: [],
      serviceSchedules: [],
      canUseWebp: null,
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
      title: `${this.clinic?.name || 'Facility Website'}`,
      description: 'Visit my professional website and schedule an appointment with me today.',
      socialBanner: this.picURL,
    });
  },
  computed: {
    bookURL () {
      if (this.isPreviewMode) return null;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      return `${pxPortalUrl}/appointments/step-1?organization=${this.orgId}&type=physical`;
    },
    formattedAddress () {
      if (!this.clinic?.address) return '';
      return formatAddress(this.clinic.address, 'street1, street2, city, province, country');
    },
    clinicPhone () {
      const { phone, phones } = this.clinic;
      if (phones?.length) return phones.join(', ');
      return phone || '';
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
      return this.clinic?.picURL || require('~/assets/images/facility-placeholder.jpg');
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
    // - Schedules simplified to get overall time period instead of multiple periods
    compressedSchedules () {
      const schedules = [...this.groupedSchedules];
      const compressedSchedules = [];
      schedules.forEach((schedule) => {
        const existing = compressedSchedules.find(sched => sched.day === schedule.day && sched.closing < schedule.closing);
        if (!existing) {
          compressedSchedules.push(schedule);
          return;
        }
        const index = compressedSchedules.indexOf(existing);
        compressedSchedules[index].closing = schedule.closing;
      });
      return compressedSchedules;
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
    description () {
      return this.clinic?.description ||
      `${this.name || 'This facility'} specializes in telehealth services. ${this.name || 'It'} is committed to provide medical consultation via video conference or phone call to our patient 24 hours a day 7 days a week.`;
    },
    background () {
      if (this.isVerified && this.canUseWebp) return 'bg-webp';
      if (this.isVerified && !this.canUseWebp) return 'bg-png';
      if (!this.isVerified && this.canUseWebp) return 'construct-bg-webp';
      if (!this.isVerified && !this.canUseWebp) return 'construct-bg-png';
      return 'bg-png';
    },
    // Classes
    clinicNameClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
    },
  },
  async mounted () {
    // Initial window setups
    this.$vuetify.theme.dark = false;
    if (this.isPreviewMode) window.$crisp.push(['do', 'chat:hide']);

    this.loading.page = false;
    await this.fetchServiceTypes();
    await this.fetchDoctorMembers();
    this.canUseWebp = await canUseWebp();
    this.listItems = [...this.filteredServices];
    this.itemsTotal = this.servicesTotal;
  },
  methods: {
    // - Fetches all doctors of facility
    async fetchDoctorMembers (searchText, page = 1) {
      try {
        const skip = this.itemsLimit * (page - 1);
        const { items, total } = await fetchClinicWebsiteDoctors(this.$sdk, {
          organization: this.orgId,
          searchText,
          limit: this.itemsLimit,
          skip,
        });
        this.doctorsTotal = total;
        this.orgDoctors = items || [];
        return { items: this.orgDoctors, total: this.doctorsTotal };
      } catch (error) {
        console.error(error);
      }
    },
    // - Fetches all services of facility
    async fetchServices (service = {}, searchText, page = 1) {
      try {
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
        return { items: this.filteredServices, total: this.servicesTotal };
      } catch (error) {
        console.error(error);
      }
    },
    // - Fetches all service types of facility
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
    // - When pagination or tab changes, all services and doctors are refetched
    async refetchListItems ({ tab, page = 1 }) {
      try {
        this.loading.list = true;
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
      } catch (e) {
        console.error(e);
      } finally {
        this.loading.list = false;
      }
    },
    async onServiceSearch ({ searchText, searchFilters }) {
      try {
        this.loading.list = true;
        if (!this.searchResultsMode) this.searchResultsMode = true;

        this.searchText = searchText;
        this.searchFilters = searchFilters;

        await this.fetchDoctorMembers(searchText);
        await this.fetchServices(searchFilters, searchText);
        this.searchResults = [...this.formattedDoctors, ...this.filteredServices];
        VueScrollTo.scrollTo('#services-panel', 500, { offset: -100, easing: 'ease' });
      } catch (e) {
        console.error(e);
      } finally {
        this.loading.list = false;
      }
    },
    async onPaginate (payload) {
      await this.refetchListItems(payload);
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
  background-position: center center;
  background-size: cover;
}

.bg-png {
  background-image: url('../../assets/images/clinics-website/Clinic Website BG.png');
}

.bg-webp {
  background-image: url('../../assets/images/clinics-website/Clinic Website BG.webp');
}
.construct-bg-png {
  background-image: url('../../assets/images/clinics-website/MYCURE - Construction.png');
}
.construct-bg-webp {
  background-image: url('../../assets/images/clinics-website/MYCURE - Construction.webp');
}
.custom-clinic-button {
  height: 70px !important;
  width: 300px;
}
.panel-1-footer {
  margin-top: -55px;
  width: 100vw;
  padding: 17px 10px 0px 10px;
  z-index: 99;
  position: fixed;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
}
.search-container {
  height: 400px;
}
.btn-banner {
  width: 25%;
  margin: auto;
}

@media screen and (max-width: 500px) {
  .btn-banner {
    width: 50%;
  }
}

@media screen and (min-width: 1300px) {
  .btn-banner {
    width: 150px;
  }
}
</style>
