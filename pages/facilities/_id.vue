<template lang="pug">
  pre Under maintenance
</template>

<script>
// import VueScrollTo from 'vue-scrollto';
import isEmpty from 'lodash/isEmpty';
// import isNil from 'lodash/isNil';
// import intersection from 'lodash/intersection';
// import omit from 'lodash/omit';
// import { mdiMenuDown, mdiClose, mdiChevronRight, mdiChevronLeft, mdiAccountWrenchOutline } from '@mdi/js';
// services
// import { fetchServices, fetchClinicServiceTypes } from '~/services/services';
// import { fetchClinicInsurers } from '~/services/insurance-contracts';
// import { fetchClinicWebsiteDoctors } from '~/services/organization-members';
// utils
import { getOrganization } from '~/utils/axios/organizations';
// import { initLogger } from '~/utils/logger';
// import { formatAddress } from '~/utils/formats';
import headMeta from '~/utils/head-meta';
// components
import MainPanel from '~/components/clinic-website/MainPanel';
import AboutClinic from '~/components/clinic-website/AboutClinic';
import ChooseAppointment from '~/components/doctor-website/ChooseAppointment';
import ChooseService from '~/components/clinic-website/ChooseService';
import ContactUs from '~/components/clinic-website/ContactUs';
import DatePickerMenu from '~/components/commons/date-picker-menu';
import DoctorsList from '~/components/clinic-website/doctors/DoctorsList';
import DoctorsPaginated from '~/components/clinic-website/doctors/DoctorsPaginated';
import SearchInsurers from '~/components/clinic-website/services/SearchInsurers';
import SearchPanel from '~/components/clinic-website/SearchPanel';
import ServicesList from '~/components/clinic-website/services/ServicesList';
import ServicesPaginated from '~/components/clinic-website/services/ServicesPaginated';
import SpecializationFilter from '~/components/clinic-website/doctors/SpecializationFilter';
import GenericPanel from '~/components/generic/GenericPanel';

// const log = initLogger('Facilities');

// const ALLOWED_SERVICE_TYPES = [
//   'clinical-consultation',
//   'clinical-procedure',
//   'dental',
//   'pe',
//   'lab',
//   'imaging',
// ];

// const DIAGNOSTIC_SERVICE_TYPES = ['lab', 'imaging'];
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
      console.warn('clinic', clinic);
      return {
        clinic,
      };
    } catch (error) {
      console.error('asyncData', error);
    }
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
    picURL () {
      return this.clinic?.picURL || require('~/assets/images/facility-placeholder.jpg');
    },
    clinicName () {
      return this.clinic?.name || 'MYCURE Clinic';
    },
    description () {
      return this.clinic?.description ||
      `${this.name || 'This facility'} is committed to provide medical consultation via video conference or phone call to our patients. You can also schedule a physical visit with us.`;
    },
  },
};
</script>
