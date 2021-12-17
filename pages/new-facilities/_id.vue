<template lang="pug">
  div(v-if="!loading.page").main-container
    v-snackbar(v-model="clipSuccess" timeout="2000" color="success") Copied link to clipboard
    main-panel(
      :pic-url="picURL"
      :clinic-name="clinicName"
      :formatted-address="formattedAddress"
      :clinic-phone="clinicPhone"
      :style="{ height: $isMobile ? '130vh' : '120vh' }"
      :is-bookable="isVerified && isOnline"
      @book="onBook"
      @redirect="onRedirect($event)"
      @clipSuccess="clipSuccess = true"
    )#top
    //- insert panels here
    //- insert search panel
    //- Workflow area
    v-container#tabs.pb-16
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center' }" disable-parent-padding).mt-6
          v-col(cols="12")
            v-tabs(
              right
              v-model="tabSelect"
              background-color="transparent"
              slider-color="primary"
              active-class="black--text"
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
                v-for="(tab, key) in tabsList"
                :key="key"
                :href="`#${tab.value}`"
                :class="{'ml-4': !$isMobile}"
                dense
              ).mc-hyp2.font-weight-semibold.text-none {{ tab.text }}

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
                  )
              //- ABOUT CLINIC
              v-tab-item(value="about")
                div.grey-bg.pt-8
                  about-clinic(
                    :pic-url="picURL"
                    :clinic-name="clinicName"
                    :description="description"
                  )
              //- CONTACT US
              v-tab-item(value="contact")
                div.grey-bg.pt-8
                  contact-us(
                    :address="clinic.address"
                    :clinic-phone="clinicPhone"
                    :schedule="clinic.mf_schedule"
                  )

</template>

<script>
import VueScrollTo from 'vue-scrollto';
import isEmpty from 'lodash/isEmpty';
import intersection from 'lodash/intersection';
// services
import { fetchServices, fetchClinicServiceTypes } from '~/services/services';
import { fetchClinicWebsiteDoctors } from '~/services/organization-members';
// utils
import { getOrganization } from '~/utils/axios/organizations';
import { initLogger } from '~/utils/logger';
import { formatAddress } from '~/utils/formats';
import headMeta from '~/utils/head-meta';
// components
import MainPanel from '~/components/clinic-website/new/MainPanel';
import AboutClinic from '~/components/clinic-website/new/AboutClinic';
import ContactUs from '~/components/clinic-website/new/ContactUs';
import DoctorsList from '~/components/clinic-website/new/doctors/DoctorsList';
import ServicesList from '~/components/clinic-website/new/services/ServicesList';
import GenericPanel from '~/components/generic/GenericPanel';

const log = initLogger('Facilities');

const SERVICE_TYPES = [
  'clinical-consultation',
  'clinical-procedure',
  'dental',
  'pe',
  'lab',
  'imaging',
];

const DIAGNOSTIC_SERVICE_TYPES = ['lab', 'imaging'];
const TABS_LIST = [
  { text: 'Services', value: 'services' },
  { text: 'Our Doctors', value: 'doctors' },
  { text: 'About Clinic', value: 'about' },
  { text: 'Contact Us', value: 'contact' },
];

export default {
  components: {
    MainPanel,
    GenericPanel,
    AboutClinic,
    ContactUs,
    DoctorsList,
    ServicesList,
  },
  filters: {
    formatBreadCrumbs (crumb) {
      const tab = TABS_LIST.find(tab => tab.value === crumb);
      return tab ? tab.text : 'Section';
    },
  },
  layout: 'empty',
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
    this.tabsList = TABS_LIST;
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
      },
      items: {
        services: [],
        doctors: [],
      },
      itemsLimit: 5,
      itemsTotal: {
        services: 0,
        doctors: 0,
      },
      serviceTypes: [],
      activeServiceType: null,
      tabSelect: 'Services',
      clipSuccess: false,
      // save current service query to use in refetch on pagination
      currentServicePropsQuery: null,
      currentDoctorPropsQuery: null,
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
        console.log('changed', val);
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
          this.serviceTypes = intersection(SERVICE_TYPES, items) || [];
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
      // doctorProps = {},
      searchText,
    } = {}, page = 1) {
      try {
        this.loading.doctors.list = true;
        const skip = this.itemsLimit * (page - 1);
        const { items, total } = await fetchClinicWebsiteDoctors({
          ...searchText && { searchText },
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
    // Event handlers
    onPaginate ({
      type, // services or doctors
      searchText, // search Text
    }, page = 1) {
      if (!type) return;
      if (type === 'services') {
        return this.fetchServices({
          serviceProps: this.currentServicePropsQuery,
          searchText,
        }, page);
      }
      // else, return doctors
      return this.fetchDoctors({
        searchText,
      }, page);
    },
    onRedirect (type) {
      this.tabSelect = type;
      VueScrollTo.scrollTo('#tabs', 500, { offset: -100, easing: 'ease' });
    },
    onHome () {
      VueScrollTo.scrollTo('#top', 500, { offset: -100, easing: 'ease' });
    },
    onBook () {
      // insert booking code
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
