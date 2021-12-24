<template lang="pug">
  div(v-if="!loading.page").main-container
    //- CHOOSE APPOINTMENT TYPE
    choose-appointment(
      is-clinic
      v-model="dialogs.appointment"
      :has-doctors="isTelehealthEnabled"
      :has-physical-services="isBookingEnabled"
      @select="onSelectAppointment($event)"
    )
    //- CHOOSE SERVICE DIALOG
    choose-service(
      v-model="dialogs.serviceType"
      :service-types="[...serviceTypes].filter(type => type !== 'telehealth')"
      @select="onSelectServiceType($event)"
    )
    v-snackbar(v-model="clipSuccess" timeout="2000" color="success") Copied link to clipboard
    main-panel(
      :tabs="normalTabsList"
      :pic-url="picURL"
      :clinic-name="clinicName"
      :formatted-address="formattedAddress"
      :clinic-phone="clinicPhone"
      :style="{ height: $isMobile ? '110vh' : '110vh' }"
      :is-bookable="isVerified && isOnline"
      @book="dialogs.appointment = true"
      @redirect="onRedirect($event)"
      @clipSuccess="clipSuccess = true"
    )#top
    //- Search panel
    search-panel(
      v-model="searchText"
      :clinic="clinic"
      @search="search"
    )
    //- NORMAL MODE - Workflow area
    v-container(v-if="!searchMode")#tabs.pb-16
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center' }" disable-parent-padding).mt-6
          v-col(cols="12")
            v-tabs(
              show-arrows
              hide-slider
              :right="!$isMobile"
              :next-icon="mdiChevronRight"
              :prev-icon="mdiChevronLeft"
              v-model="tabSelect"
              background-color="transparent"
              active-class="black--text"
              style="color: #A2A5AE;"
            ).mb-6
              v-row(v-if="!$isMobile" align="center" :style="$isMobile ? 'margin-bottom: 10px' : ''").pa-3
                img(
                  src="~/assets/images/MYCURE-icon.png"
                  width=" 20"
                  alt="MYCURE icon"
                  @click="onHome"
                ).mr-2
                a(@click="onHome" style="color: #72727D;").mc-b2 Home /&nbsp;
                a(@click="onRedirect(tabSelect)").mc-b2 {{ tabSelect | format-bread-crumbs }}
              v-tab(
                v-for="(tab, key) in normalTabsList"
                :key="key"
                :href="`#${tab.value}`"
                :class="{'ml-4': !$isMobile}"
                dense
              ).mc-hyp2.font-weight-semibold.text-none {{ tab.text }}

              //- NORMAL VIEW TABS
              //- SERVICES
              v-tab-item(value="services")
                div.grey-bg.pt-8
                  services-list(
                    v-model="activeServiceType"
                    :loading="loading.services"
                    :items="items.services"
                    :items-total="itemsTotal.services"
                    :items-limit="itemsLimit"
                    :service-types="serviceTypes"
                    :organization="clinicId"
                    :is-preview-mode="isPreviewMode"
                    @paginate="onPaginate({ type: 'services' }, $event)"
                  )
              //- DOCTORS
              v-tab-item(value="doctors")
                div.grey-bg.pt-8
                  doctors-list(
                    :loading="loading.doctors"
                    :items="items.doctors"
                    :items-total="itemsTotal.doctors"
                    :items-limit="itemsLimit"
                    :organization="clinicId"
                    :is-preview-mode="isPreviewMode"
                    @paginate="onPaginate({ type: 'doctors' }, $event)"
                    @filter="(specs) => onFilterDoctor({ specializations: specs }, 1)"
                  )
              //- ABOUT CLINIC
              v-tab-item(value="about")
                div.grey-bg.pt-8
                  about-clinic(
                    :pic-url="picURL"
                    :clinic-name="clinicName"
                    :description="description"
                    :items="items.services"
                    :insurers="items.insurers"
                  )
              //- CONTACT US
              v-tab-item(value="contact")
                div.grey-bg.pt-8
                  contact-us(
                    :address="clinic.address"
                    :clinic-phone="clinicPhone"
                    :schedule="clinic.mf_schedule"
                  )
    //- SEARCH MODE: Search results
    v-container(v-else)#search-tabs.pb-16
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center' }" disable-parent-padding).mt-6
          v-col(cols="12")
            v-btn(v-if="$isMobile" @click="onHome" text).mb-5
              v-icon {{ mdiChevronLeft }}
              | Back
            v-tabs(
              hide-slider
              :right="!$isMobile"
              v-model="searchTabSelect"
              background-color="transparent"
              slider-color="primary"
              active-class="black--text"
            ).mb-6
              v-row(v-if="!$isMobile" align="center" :style="$isMobile ? 'margin-bottom: 10px' : ''").pa-3
                v-btn(@click="onHome" text).text-none.font-16
                  v-icon {{ mdiChevronLeft }}
                  | Back
              //-   img(
              //-     src="~/assets/images/MYCURE-icon.png"
              //-     width=" 20"
              //-     alt="MYCURE icon"
              //-     @click="onHome"
              //-   ).mr-2
              //-   a(@click="onHome" style="color: #72727D;").mc-b2 Home /&nbsp;
              //-   a(@click="onRedirect(tabSelect)").mc-b2 {{ tabSelect | format-bread-crumbs }}
              v-tab(
                v-for="(tab, key) in searchTabsList"
                :key="key"
                :href="`#${tab.value}`"
                :class="{'ml-4': !$isMobile}"
                dense
              ).mc-hyp2.font-weight-semibold.text-none {{ tab.text }}
          //- FILTERS
          v-col(cols="12" md="4" xl="3")
            v-card(color="white" flat)
              template(v-if="showResults('services')")
                v-toolbar(flat).pa-1
                  v-spacer
                  h2.mc-h4.black--text Services
                  v-spacer
                v-divider.my-3
                v-card-text
                  v-select(
                    v-model="serviceSearchTypeFilter"
                    placeholder="Select Service Type (All)"
                    item-text="text"
                    dense
                    clearable
                    outlined
                    :disabled="loading.search"
                    :prepend-inner-icon="mdiAccountWrenchOutline"
                    :append-icon="mdiMenuDown"
                    :clear-icon="mdiClose"
                    :items="serviceTypeOptions"
                    return-object
                    @change="onServiceTypeFilter"
                  )
                  //- We limit this to the Services Tab only to avoid confusion that it may also be applied to Doctors
                  search-insurers(
                    v-if="searchTabSelect === 'search-services'"
                    avatar
                    outlined
                    clearable
                    :disabled="isPreviewMode"
                    @select="onInsuranceSelect"
                    @clear="clearInsuranceFilter"
                  )
                  date-picker-menu(
                    v-model="dateFilter"
                    outlined
                    :disabled="isPreviewMode || loading"
                    @clear="clearDateFilter"
                    @change="onDateFilter($event)"
                  )
              template(v-if="showResults('doctors')")
                v-toolbar(flat).pa-1
                  v-spacer
                  h2.mc-h4.black--text Doctors
                  v-spacer
                v-divider.my-3
                v-card-text
                  specialization-filter(
                    v-model="specializationFiltersArray"
                    @filter="(specs) => onFilterDoctor({ specializations: specs }, 1)"
                  )
          //- RESULTS
          v-col(cols="12" md="8" xl="9")
            services-paginated(
              v-if="showResults('services')"
              :loading="loading.services.list"
              :items="items.services"
              :items-total="itemsTotal.services"
              :items-limit="itemsLimit"
              :itemsPage.sync="itemsPage.services"
              :organization="clinicId"
              :is-preview-mode="isPreviewMode"
              @update:itemsPage="onPaginate({ type: 'services' }, $event)"
            )
            v-divider(v-if="searchTabSelect === 'search-all'").my-10
            doctors-paginated(
              v-if="showResults('doctors')"
              :loading="loading.doctors.list"
              :items="items.doctors"
              :items-total="itemsTotal.doctors"
              :items-limit="itemsLimit"
              :itemsPage.sync="itemsPage.doctors"
              :organization="clinicId"
              :is-preview-mode="isPreviewMode"
              @update:itemsPage="onPaginate({ type: 'doctors' }, $event)"
            )
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import intersection from 'lodash/intersection';
import omit from 'lodash/omit';
import { mdiMenuDown, mdiClose, mdiChevronRight, mdiChevronLeft, mdiAccountWrenchOutline } from '@mdi/js';
// services
import { fetchServices, fetchClinicServiceTypes, fetchClinicInsurers } from '~/services/services';
import { fetchClinicWebsiteDoctors } from '~/services/organization-members';
// utils
import { getOrganization } from '~/utils/axios/organizations';
import { initLogger } from '~/utils/logger';
import { formatAddress } from '~/utils/formats';
import headMeta from '~/utils/head-meta';
// components
import MainPanel from '~/components/clinic-website/new/MainPanel';
import AboutClinic from '~/components/clinic-website/new/AboutClinic';
import ChooseAppointment from '~/components/doctor-website/ChooseAppointment';
import ChooseService from '~/components/clinic-website/ChooseService';
import ContactUs from '~/components/clinic-website/new/ContactUs';
import DatePickerMenu from '~/components/commons/date-picker-menu';
import DoctorsList from '~/components/clinic-website/new/doctors/DoctorsList';
import DoctorsPaginated from '~/components/clinic-website/new/doctors/DoctorsPaginated';
import SearchInsurers from '~/components/clinic-website/new/services/SearchInsurers';
import SearchPanel from '~/components/clinic-website/new/SearchPanel';
import ServicesList from '~/components/clinic-website/new/services/ServicesList';
import ServicesPaginated from '~/components/clinic-website/new/services/ServicesPaginated';
import SpecializationFilter from '~/components/clinic-website/new/doctors/SpecializationFilter';
import GenericPanel from '~/components/generic/GenericPanel';

const log = initLogger('Facilities');

const ALLOWED_SERVICE_TYPES = [
  'clinical-consultation',
  'clinical-procedure',
  'dental',
  'pe',
  'lab',
  'imaging',
];

const DIAGNOSTIC_SERVICE_TYPES = ['lab', 'imaging'];
const TABS_LIST = [
  { text: 'Services', value: 'services', type: 'normal' },
  { text: 'Our Doctors', value: 'doctors', type: 'normal' },
  { text: 'About Clinic', value: 'about', type: 'normal' },
  { text: 'Contact Us', value: 'contact', type: 'normal' },
  // - Search Tabs
  // { text: 'All', value: 'search-all', type: 'search' },
  { text: 'Services', value: 'search-services', type: 'search' },
  { text: 'Doctors', value: 'search-doctors', type: 'search' },
];

export default {
  components: {
    MainPanel,
    GenericPanel,
    AboutClinic,
    ContactUs,
    ChooseAppointment,
    ChooseService,
    DatePickerMenu,
    DoctorsList,
    DoctorsPaginated,
    SearchInsurers,
    SearchPanel,
    ServicesList,
    ServicesPaginated,
    SpecializationFilter,
  },
  filters: {
    formatBreadCrumbs (crumb) {
      const tab = TABS_LIST.find(tab => tab.value === crumb);
      return tab ? tab.text : 'Section';
    },
  },
  layout: 'clinic-website',
  async asyncData ({ params, $sdk, redirect, error }) {
    try {
      const clinic = await getOrganization({ id: params.id }, true) || {};
      // Show 404 if no clinic found, or if clinic is existing, but has not setup its website yet
      // Will not redirect if it's a 'diagnostic-center' since these are the orgs we have up for claiming
      if (isEmpty(clinic) ||
        (!clinic?.websiteId && clinic?.type !== 'diagnostic-center') ||
        !clinic?.publicFields?.length) {
        return error({ statusCode: 404, message: 'clinic-not-found' });
      }
      return {
        clinic,
      };
    } catch (error) {
      console.error(error);
    }
  },
  data () {
    // - ENUM
    this.serviceTypeOptions = [
      // - TODO: Currently we cannot query with Service#tags and a $search operator, so both F2F and Telehealth consults were put
      // - in one category. To follow up with Nad.
      { text: 'Consultations', type: 'clinical-consultation' },
      // { text: 'Teleconsults', type: 'clinical-consultation', tags: 'telehealth' },
      { text: 'Procedures', type: 'clinical-procedure' },
      { text: 'Dental', type: 'dental' },
      { text: 'Physical Exam', type: 'pe' },
      { text: 'Laboratory', type: 'diagnostic', subtype: 'lab' },
      { text: 'Imaging', type: 'diagnostic', subtype: 'imaging' },
    ];
    return {
      loading: {
        page: false,
        services: {
          section: false,
          list: false,
        },
        doctors: {
          section: false,
          list: false,
        },
        search: false,
        insurers: false,
      },
      dialogs: {
        appointment: false,
        service: false,
      },
      items: {
        services: [],
        doctors: [],
        insurers: [],
      },
      itemsLimit: 4,
      itemsTotal: {
        services: 0,
        doctors: 0,
      },
      serviceTypes: [],
      // search models
      searchText: null, // search text
      searchMode: false, // show search results view
      // filters
      specializationFiltersArray: [],
      serviceSearchTypeFilter: {}, // dropdown filter for service type
      dateFilter: null,
      // tab models
      tabSelect: 'services',
      searchTabSelect: 'search-all',
      activeServiceType: null,
      clipSuccess: false,
      // save current service query to use in refetch on pagination
      currentServicePropsQuery: null,
      currentDoctorPropsQuery: null,
      // pagination models
      itemsPage: {
        services: 1,
        doctors: 1,
      },
      // icons,
      mdiMenuDown,
      mdiClose,
      mdiChevronRight,
      mdiChevronLeft,
      mdiAccountWrenchOutline,
    };
  },
  head () {
    return {
      ...headMeta({
        title: `${this.clinicName || 'Facility Website'}`,
        description: this.description,
        socialBanner: this.picURL,
      }),
      script: [
        {
          hid: 'google',
          src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCpEuK4K_sSRKLy_wLqymgQPT8aJpsns0g&libraries=places&v=weekly',
          defer: true,
          // callback: () => { this.loading.page = false; },
        },
      ],
    };
  },
  computed: {
    clinicId () {
      return this.clinic.id;
    },
    isBookingEnabled () {
      return this.clinic?.types?.includes('clinic-booking');
    },
    isTelehealthEnabled () {
      return this.clinic?.types.includes('clinic-telehealth');
    },
    isOnline () {
      // return this.hasItemsToBook && (this.isBookingEnabled || this.isTelehealthEnabled);
      return this.isBookingEnabled || this.isTelehealthEnabled;
    },
    isVerified () {
      return !!this.clinic?.websiteId;
    },
    mode () {
      return this.$route.query.mode;
    },
    isPreviewMode () {
      return this.mode === 'preview';
    },
    picURL () {
      return this.clinic?.picURL || require('~/assets/images/facility-placeholder.jpg');
    },
    clinicName () {
      return this.clinic?.name || 'MYCURE Clinic';
    },
    formattedAddress () {
      if (!this.clinic?.address) return '';
      return formatAddress(this.clinic.address, 'street1, street2, city, province, country');
    },
    clinicPhone () {
      if (!this.clinic) return '';
      const { phone, phones } = this.clinic;
      if (phones?.length) return phones.join(', ');
      return phone || '';
    },
    description () {
      return this.clinic?.description ||
      `${this.name || 'This facility'} is committed to provide medical consultation via video conference or phone call to our patients. You can also schedule a physical visit with us.`;
    },
    // - Tabs shown in normal view of clinic
    normalTabsList () {
      return TABS_LIST.filter(tab => tab.type === 'normal');
    },
    // - Tabs shown in search mode of clinic
    searchTabsList () {
      return TABS_LIST.filter(tab => tab.type === 'search');
    },
  },
  watch: {
    activeServiceType: {
      async handler (val) {
        if (!val) return;
        await this.fetchServices({
          serviceProps: this.getServiceQuery(this.activeServiceType),
        }, 1);
      },
    },
    tabSelect: {
      async handler (val) {
        if (val === 'services' && isEmpty(this.items.services)) {
          return await this.fetchServices({
            serviceProps: this.getServiceQuery(this.activeServiceType),
          }, 1);
        }
        if (val === 'doctors' && isEmpty(this.items.doctors)) {
          return await this.fetchDoctors();
        }
      },
    },
    searchMode: {
      async handler (val) {
        if (val) {
          this.searchAll();
          return;
        }
        await this.fetchServices({
          serviceProps: this.getServiceQuery(this.activeServiceType),
          ...this.searchText && { searchText: this.searchText },
        }, 1);
      },
    },
  },
  mounted () {
    if (this.isOnline) {
      this.init();
    }
  },
  methods: {
    async init () {
      this.loading.services.section = true;
      await this.fetchServiceTypes();
      await this.fetchClinicInsurers();
      this.loading.services.section = false;
    },
    /** Fetches all services of facility
     *
     * @param {Object} serviceOpts
     * @param {Object} serviceOpts.serviceProps - specific service fields
     * @param {String} serviceOpts.serviceProps.type - matches with Service#type
     * @param {String} serviceOpts.serviceProps.subtype  - matched with Service#subtype
     * @param {String} serviceOpts.serviceProps.insurer  - insurer id
     * @param {Array} serviceOpts.serviceProps.tags - matches with Service#tags
     * @param {String} serviceOpts.searchText - search text to match services name
     *
     * @param {Number} page - for computing pagination
     */
    async fetchServices ({
      serviceProps = {},
      searchText,
    } = {}, page = 1) {
      try {
        this.loading.services.list = true;
        // save current service query to use in refetch on pagination
        this.currentServicePropsQuery = serviceProps;
        const { type, subtype, insurer, tags } = serviceProps;
        const skip = this.itemsLimit * (page - 1);
        const query = {
          facility: this.clinicId,
          type,
          subtype,
          insurer,
          searchText,
          limit: this.itemsLimit,
          skip,
          tags,
        };
        const { items, total } = await fetchServices(query, true);
        log('fetchServices#items: %O', items);
        this.items.services = items;
        this.itemsTotal.services = total;

        // - NOTE: This is just front-end filtering, the best solution would be done in backend
        if (this.dateFilter) {
          this.filterByDate(this.dateFilter);
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.services.list = false;
      }
    },
    /**
     * Fetches the available service types of the clinic
     */
    async fetchServiceTypes () {
      try {
        const { items } = await fetchClinicServiceTypes(this.$sdk, { facility: this.clinicId });
        if (this.isBookingEnabled) {
          this.serviceTypes = intersection(ALLOWED_SERVICE_TYPES, items) || [];
        }
        if (this.isTelehealthEnabled) {
          this.serviceTypes.push('telehealth');
        }
        if (!isEmpty(this.serviceTypes)) this.activeServiceType = this.serviceTypes[0];
      } catch (e) {
        console.error(e);
      }
    },
    /**
     * Fetches all doctors of facility
     *
     * @param {Object} doctorOpts
     * @param {Object} doctorOpts.doctorProps.specializations - specialization filter
     * @param {String} doctorOpts.searchText - search text for doctors
     *
     * @param {Number} page - page number
     *
     */
    async fetchDoctors ({
      doctorProps = {},
      searchText,
    } = {}, page = 1) {
      try {
        this.loading.doctors.list = true;
        const skip = this.itemsLimit * (page - 1);
        const { specializations } = doctorProps;
        const { items, total } = await fetchClinicWebsiteDoctors({
          ...searchText && { searchText },
          ...specializations?.length && { specializations },
          organization: this.clinicId,
          limit: this.itemsLimit,
          skip,
        });
        this.itemsTotal.doctors = total;
        this.items.doctors = items || [];
        console.log('fetchDoctors#items: %O', items);
      } catch (e) {
        console.error(e);
      } finally {
        this.loading.doctors.list = false;
      }
    },
    async fetchClinicInsurers () {
      try {
        this.loading.insurers = true;
        const query = {
          insured: this.clinicId,
        };
        const { items } = await fetchClinicInsurers(query);
        log('fetchClinicInsurers#items: %O', items);
        this.items.insurers = items;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.services.list = false;
      }
    },
    search () {
      if (!this.searchMode) {
        this.currentServicePropsQuery = {};
        this.searchMode = true;
        this.searchTabSelect = 'search-all';
        VueScrollTo.scrollTo('#search-tabs', 500, { offset: -100, easing: 'ease' });
        return;
      }
      // Invoke searches when already in search mode
      this.searchAll();
    },
    async searchAll () {
      await Promise.all([
        this.fetchServices({
          serviceProps: this.currentServicePropsQuery,
          ...this.searchText && { searchText: this.searchText },
        }, 1),
        this.fetchDoctors({
          ...this.searchText && { searchText: this.searchText },
        }, 1),
      ]);
    },
    // utils
    /** For getting actual service type and subtype value of the current tab
    * Usually used for mapping query for fetching of services
    */
    getServiceQuery (activeServiceType) {
      if (DIAGNOSTIC_SERVICE_TYPES.includes(activeServiceType)) {
        return { type: 'diagnostic', subtype: activeServiceType };
      } else if (activeServiceType === 'telehealth') {
        return { type: 'clinical-consultation', tags: { $in: ['telehealth'] } };
      } else if (activeServiceType === 'clinical-consultation') {
        return { type: 'clinical-consultation', tags: { $nin: ['telehealth'] } };
      } else {
        return { type: activeServiceType };
      }
    },
    // - Determine if set of results should be visible
    showResults (type) {
      if (type === 'services') {
        return this.searchTabSelect === 'search-services' || this.searchTabSelect === 'search-all';
      } else if (type === 'doctors') {
        return this.searchTabSelect === 'search-doctors' || this.searchTabSelect === 'search-all';
      }
      return false;
    },
    // Event handlers
    onPaginate ({
      type, // services or doctors
    }, page = 1) {
      if (!type) return;
      if (type === 'services') {
        return this.fetchServices({
          serviceProps: this.currentServicePropsQuery,
          ...this.searchText && { searchText: this.searchText },
        }, page);
      }
      // else, return doctors
      return this.fetchDoctors({
        ...this.searchText && { searchText: this.searchText },
      }, page);
    },
    onFilterDoctor ({
      specializations,
    }, page = 1) {
      const specializationsMapped = specializations.map((spec) => {
        let finArray = spec.split(' ');
        finArray = finArray.map(x => `${x.charAt(0).toLowerCase()}${x.slice(1)}`);
        const finStr = finArray.join('-');
        return {
          code: finStr,
          name: spec,
        };
      });
      return this.fetchDoctors({
        doctorProps: { specializations: specializationsMapped },
        ...this.searchText && { searchText: this.searchText },
      }, page);
    },
    onServiceTypeFilter () {
      const serviceProps = omit(this.serviceSearchTypeFilter, 'text');
      return this.fetchServices({
        serviceProps,
        ...this.searchText && { searchText: this.searchText },
      }, 1);
    },
    onInsuranceSelect (insurer) {
      // - NOTE: According to Nad, you can't filter by insurers and have search text, thus we set the searchtext to null
      this.searchText = null;
      const serviceProps = {
        ...this.currentServicePropsQuery,
        insurer,
      };
      return this.fetchServices({ serviceProps }, 1);
    },
    clearInsuranceFilter () {
      const serviceProps = omit(this.currentServicePropsQuery, 'insurer');
      return this.fetchServices({
        serviceProps,
        ...this.searchText && { searchText: this.searchText },
      }, 1);
    },
    onDateFilter () {
      return this.fetchServices({
        serviceProps: this.currentServicePropsQuery,
        ...this.searchText && { searchText: this.searchText },
      }, 1);
    },
    filterByDate (unixDate) {
      if (!unixDate) return;
      const date = new Date(unixDate);
      let day = date.getDay();
      if (day === 0) day = 7;
      this.items.services = this.items.services.filter((result) => {
        const schedules = result.schedulesData;
        const matchDay = schedules?.find(schedule => schedule.day === day);
        return !isNil(matchDay);
      }) || [];
    },
    clearDateFilter () {
      this.dateFilter = null;
      this.onDateFilter();
    },
    onRedirect (type) {
      // Make sure it is normal mode first before scrolling
      if (this.searchMode) {
        this.searchMode = false;
        this.onRedirect(type);
      }
      this.tabSelect = type;
      VueScrollTo.scrollTo('#tabs', 500, { offset: -100, easing: 'ease' });
    },
    onHome () {
      // If showing search results, simply return to normal view
      if (this.searchMode) {
        this.searchText = null;
        this.searchMode = false;
        return;
      }
      VueScrollTo.scrollTo('#top', 500, { offset: -100, easing: 'ease' });
    },
    onSelectAppointment (type) {
      this.dialogs.appointment = false;
      if (type === 'physical') {
        this.dialogs.serviceType = true;
        return;
      }
      if (type === 'telehealth') {
        this.tabSelect = 'doctors';
        // - scroll down to doctors list
        VueScrollTo.scrollTo('#tabs', 500, { offset: -100, easing: 'ease' });
      }
    },
    onSelectServiceType (serviceType) {
      this.dialogs.serviceType = false;
      if (serviceType !== 'close') {
        this.tabSelect = 'services';
        VueScrollTo.scrollTo('#tabs', 500, { offset: -100, easing: 'ease' });
      }
      this.activeServiceType = serviceType;
    },
  },
};
</script>

<style scoped>
.main-container {
  background-color: #f9f9f9;
  width: 100vw;
  margin: 0;
  padding: 0;
}
.grey-bg {
  background-color: #f9f9f9;
}
</style>
