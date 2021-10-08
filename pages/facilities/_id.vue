<template lang="pug">
  div(style="overflow: hidden; background: #fafafa")
    //- CHOOSE APPOINTMENT TYPE
    choose-appointment(
      is-clinic
      v-model="dialogs.appointment"
      :has-doctors="hasDoctors"
      @select="onSelectAppointment($event)"
    )
    //- CHOOSE SERVICE DIALOG
    choose-service(
      v-model="dialogs.serviceType"
      :service-types="serviceTypes"
      @select="activeTab = $event"
    )
    //- APP BAR
    app-bar
    //- PANEL 1
    div(
      :class="background"
      :style="{ height: isVerified ? $isMobile ? '120vh' : '130vh' : '175vh', paddingTop: $isMobile ? '60px' : '100px' }"
    ).panel-bg
      v-row(justify="center")
        v-col(cols="10").text-center
          v-avatar(:size="$isMobile ? '150' : '200'").mb-5
            img(:src="picURL")
          h1(:class="clinicNameClasses").mb-5.font-usp-primary {{clinicName}}
          template(v-if="isVerified && isAvailable")
            v-hover(
              v-slot="{ hover }"
              open-delay="100"
            )
              v-btn(
                large
                rounded
                dark
                :color="hover ? 'info' : 'warning'"
                @click="dialogs.appointment = true"
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
        v-if="!loading.page"
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
      //- Only show this panel, if booking is enabled
      quick-book(
        v-if="isBookingEnabled"
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
import { format } from 'date-fns';
import isEmpty from 'lodash/isEmpty';
import intersection from 'lodash/intersection';
// import uniq from 'lodash/uniq';
import VueScrollTo from 'vue-scrollto';
// - utils
import { getOrganization } from '~/utils/axios/organizations';
import { formatAddress } from '~/utils/formats';
import canUseWebp from '~/utils/can-use-webp';
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// - services
import { fetchClinicWebsiteDoctors } from '~/services/organization-members';
import { fetchScheduleSlots } from '~/services/schedule-slots';
import {
  fetchClinicServices,
  fetchClinicServiceTypes,
} from '~/services/services';
// - components
import AboutUs from '~/components/clinic-website/AboutUs';
import AppBar from '~/components/clinic-website/new/AppBar';
import AppFooter from '~/components/clinic-website/AppFooter';
import ChooseAppointment from '~/components/doctor-website/ChooseAppointment';
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
    ChooseAppointment,
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
      // Redirect to home if no clinic found, or if clinic is existing, but has not setup its website yet
      // Will not redirect if it's a 'diagnostic-center' since these are the orgs we have up for claiming
      if (isEmpty(clinic) ||
        (!clinic?.websiteId && clinic?.type !== 'diagnostic-center')) redirect('/');
      return {
        clinic,
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
    this.itemsLimit = 5;
    return {
      // UI State
      loading: {
        page: true,
        list: false,
      },
      dialogs: {
        serviceType: false,
        appointment: false,
      },
      activeTab: null, // - possible values: all service type values, and 'doctors'
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
    isBookingEnabled () {
      return this.clinic?.types?.includes('clinic-booking');
    },
    isTelehealthEnabled () {
      return this.clinic?.types?.includes('clinic-telehealth');
    },
    bookURL () {
      if (this.isPreviewMode) return null;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      return `${pxPortalUrl}/create-appointment/step-1?clinic=${this.orgId}&type=physical`;
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
    // Clinic is available if it has booking / telehealth services
    isAvailable () {
      return (this.servicesTotal || this.doctorsTotal) && (this.isBookingEnabled || this.isTelehealthEnabled);
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
    schedules () {
      return this.clinic?.mf_schedule || []; // eslint-disable-line
    },
    // - Grouped General clinic schedules
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
      const sched = this.groupedSchedules;
      const formatSched = sched.map(x => ({ day: x.day, time: `${this.formatTime(x.opening)} - ${this.formatTime(x.closing)}` }));
      const finalSched = [{ day: '', time: '' }];
      formatSched.map((x) => {
        if (finalSched.find(sched => sched.time === x.time)) {
          const index = finalSched.indexOf(finalSched.find(sched => sched.time === x.time));
          if (typeof finalSched[index].day === 'string') {
            finalSched[index].day = [finalSched[index].day, x.day];
          } else {
            finalSched[index].day = [...finalSched[index].day, x.day];
          }
        } else if (finalSched.find(sched => sched.day === x.day)) {
          const index = finalSched.indexOf(finalSched.find(sched => sched.day === x.day));
          finalSched[index].time = [finalSched[index].time, x.time];
        } else {
          finalSched.push(x);
          if (finalSched.find(sched => sched.day === '')) finalSched.shift();
        }
        return 0;
      });
      return finalSched;
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
      // if (this.isVerified && this.canUseWebp) return 'bg-webp';
      // if (this.isVerified && !this.canUseWebp) return 'bg-png';
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
    this.canUseWebp = await canUseWebp();
    if (this.isPreviewMode) window.$crisp.push(['do', 'chat:hide']);

    if (this.isBookingEnabled) {
      await Promise.all([
        this.fetchServiceTypes(),
        this.fetchServices()]);
    }
    await this.fetchDoctorMembers();
    this.listItems = [...this.filteredServices];
    this.itemsTotal = this.servicesTotal;
    this.loading.page = false;
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
        const query = {
          facility: this.orgId,
          type,
          subtype,
          insurer,
          searchText,
          limit: this.itemsLimit,
          skip,
          /**
           * Don't put a telehealth service on display at clinic website
           *
           * We have identified that doctor should be a starting point in booking a telehealth appointment
           * Picking a telehealth service will be done at PxP
           */
          ...type === 'clinical-consultation' && { tags: { $nin: ['telehealth'] } },
        };
        const { items, total } = await fetchClinicServices(this.$sdk, query);
        this.servicesTotal = total;

        /*
          Checks if there is a specific schedule for the service type
        */
        if (this.serviceTypes?.length && !this.serviceSchedules?.length) {
          await this.fetchServiceTypes();
        }
        this.filteredServices = items.map((item) => {
          const { type, subtype } = item;
          const primaryType = subtype || type;
          const schedules = this.serviceSchedules.find(schedule => schedule.type === primaryType);

          // Filter schedules according to section
          if (item.refSection) {
            return {
              ...item,
              schedules: schedules?.items?.filter(slot => slot.meta?.testSection === item.refSection) || [],
            };
          }
          return {
            ...item,
            // nonMfSchedule: !!schedules,
            schedules: schedules?.items || [],
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
            meta: {
              serviceType: ['lab', 'imaging'].includes(type) ? 'diagnostic' : type,
              ...['lab', 'imaging'].includes(type) && { serviceSubtype: type },
              ...type === 'clinical-consultation' && { serviceSubtype: { $nin: ['telehealth'] } },
            },
            $populate: {
              providers: {
                service: 'personal-details',
                localKey: 'meta.providers',
                method: 'find',
                foreignKey: 'id',
                foreignOps: '$in',
              },
            },
          };
          const data = await fetchScheduleSlots(this.$sdk, serviceScheduleQuery);
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
        if (this.isBookingEnabled) {
          await this.fetchServices(searchFilters, searchText);
        }
        // Append doctors only if it is consult or no service type filter
        if ((!this.searchFilters?.type) ||
          (this.searchFilters?.type && this.searchFilters?.type === 'clinical-consultation')) {
          this.searchResults = [...this.formattedDoctors, ...this.filteredServices];
        } else {
          this.searchResults = [...this.filteredServices];
        }
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
    async filterByDate (unixDate) {
      await this.onServiceSearch({ searchText: this.searchText, searchFilters: this.searchFilters });
      if (!unixDate) return;
      const date = new Date(unixDate);
      let day = date.getDay();
      if (day === 0) day = 7;
      if (!this.searchResults?.length) return;
      this.searchResults = this.searchResults.filter((result) => {
        const schedules = result.scheduleData || result.schedules;
        const matchDay = schedules?.find(schedule => schedule.order || schedule.day === day);
        return !!matchDay;
      }) || [];
    },
    onSelectAppointment (type) {
      this.dialogs.appointment = false;
      if (type === 'physical') {
        this.dialogs.serviceType = true;
        return;
      }
      if (type === 'telehealth') {
        this.activeTab = 'doctors';
        // - scroll down to doctors list
        VueScrollTo.scrollTo('#services-panel', 500, { offset: -100, easing: 'ease' });
      }
    },
    formatTime (time) {
      return format(time, 'hh:mm A');
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

/* .bg-webp {
  background-image: url('../../assets/images/clinics-website/Clinic Website BG.webp');
} */
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
