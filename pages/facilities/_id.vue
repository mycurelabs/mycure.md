<template lang="pug">
  div.main-container
    pre {{clinic}}
    //- div(v-if="!loading.page")
    //-   //- CHOOSE APPOINTMENT TYPE
    //-   choose-appointment(
    //-     is-clinic
    //-     v-model="dialogs.appointment"
    //-     :has-doctors="isTelehealthEnabled"
    //-     :has-physical-services="isBookingEnabled"
    //-     @select="onSelectAppointment($event)"
    //-   )
    //-   //- CHOOSE SERVICE DIALOG
    //-   choose-service(
    //-     v-model="dialogs.serviceType"
    //-     :service-types="[...serviceTypes].filter(type => type !== 'telehealth')"
    //-     @select="onSelectServiceType($event)"
    //-   )
    //-   v-snackbar(v-model="clipSuccess" timeout="2000" color="success") Copied link to clipboard
    //-   main-panel(
    //-     :tabs="normalTabsList"
    //-     :pic-url="picURL"
    //-     :clinic-name="clinicName"
    //-     :formatted-address="formattedAddress"
    //-     :clinic-phone="clinicPhone"
    //-     :style="{ height: $isMobile ? '110vh' : '110vh' }"
    //-     :is-bookable="isVerified && isOnline"
    //-     @book="dialogs.appointment = true"
    //-     @redirect="onRedirect($event)"
    //-     @clipSuccess="clipSuccess = true"
    //-   )#top
    //-   //- Search panel
    //-   search-panel(
    //-     v-model="searchText"
    //-     :clinic="clinic"
    //-     @search="search"
    //-   )
    //-   //- NORMAL MODE - Workflow area
    //-   v-container(v-if="!searchMode")#tabs.pb-16
    //-     v-row(justify="center")
    //-       generic-panel(:row-bindings="{ justify: 'center' }" disable-parent-padding).mt-6
    //-         v-col(cols="12" :class="{'px-0': $isMobile}")
    //-           v-tabs(
    //-             show-arrows
    //-             hide-slider
    //-             :right="!$isMobile"
    //-             :next-icon="mdiChevronRight"
    //-             :prev-icon="mdiChevronLeft"
    //-             v-model="tabSelect"
    //-             background-color="transparent"
    //-             :active-class="$isMobile ? 'primary--text' : 'black--text'"
    //-             style="color: #A2A5AE;"
    //-           ).mb-6
    //-             v-row(v-if="!$isMobile" align="center" :style="$isMobile ? 'margin-bottom: 10px' : ''").pa-3
    //-               img(
    //-                 src="~/assets/images/MYCURE-icon.png"
    //-                 width=" 20"
    //-                 alt="MYCURE icon"
    //-                 @click="onHome"
    //-               ).mr-1
    //-               v-btn(@click="onHome" text dense).text-none.px-1
    //-                 span.mc-b2.primary--text Home
    //-               span(style="color: #72727D;") &nbsp;/&nbsp;
    //-               v-btn(@click="onRedirect(tabSelect)" text dense style="color: #72727D").px-2.text-none
    //-                 span.mc-b2.font-weight-bold {{ tabSelect | format-bread-crumbs }}
    //-             v-tab(
    //-               v-for="(tab, key) in normalTabsList"
    //-               :key="key"
    //-               :href="`#${tab.value}`"
    //-               :class="{'ml-4': !$isMobile}"
    //-               dense
    //-             ).text-none
    //-               span.mc-hyp2.font-weight-semibold {{ tab.text }}

    //-             //- NORMAL VIEW TABS
    //-             //- SERVICES
    //-             v-tab-item(value="services")
    //-               div.grey-bg.pt-8
    //-                 services-list(
    //-                   v-model="activeServiceType"
    //-                   :loading="loading.services"
    //-                   :items="items.services"
    //-                   :items-total="itemsTotal.services"
    //-                   :items-limit="itemsLimit"
    //-                   :service-types="serviceTypes"
    //-                   :organization="clinicId"
    //-                   :is-preview-mode="isPreviewMode"
    //-                   @paginate="onPaginate({ type: 'services' }, $event)"
    //-                   @filter="onServiceTypeFilterEvent($event)"
    //-                 )
    //-             //- DOCTORS
    //-             v-tab-item(value="doctors")
    //-               div.grey-bg.pt-8
    //-                 doctors-list(
    //-                   :loading="loading.doctors"
    //-                   :items="items.doctors"
    //-                   :items-total="itemsTotal.doctors"
    //-                   :items-limit="itemsLimit"
    //-                   :organization="clinicId"
    //-                   :is-preview-mode="isPreviewMode"
    //-                   @paginate="onPaginate({ type: 'doctors' }, $event)"
    //-                   @filter="(specs) => onFilterDoctor({ specializations: specs }, 1)"
    //-                 )
    //-             //- ABOUT CLINIC
    //-             v-tab-item(value="about")
    //-               div.grey-bg.pt-8
    //-                 about-clinic(
    //-                   :pic-url="picURL"
    //-                   :clinic-name="clinicName"
    //-                   :description="description"
    //-                   :items="items.services"
    //-                   :insurers="items.insurers"
    //-                 )
    //-             //- CONTACT US
    //-             v-tab-item(value="contact")
    //-               div.grey-bg.pt-8
    //-                 contact-us(
    //-                   :address="clinic.address"
    //-                   :clinic-phone="clinicPhone"
    //-                   :schedule="clinic.mf_schedule"
    //-                 )
    //-   //- SEARCH MODE: Search results
    //-   v-container(v-else)#search-tabs.pb-16
    //-     v-row(justify="center")
    //-       generic-panel(:row-bindings="{ justify: 'center' }" disable-parent-padding).mt-6
    //-         v-col(cols="12" :class="{'px-0': $isMobile}")
    //-           v-btn(v-if="$isMobile" @click="onHome" text).mb-5
    //-             v-icon {{ mdiChevronLeft }}
    //-             | Back
    //-           v-tabs(
    //-             hide-slider
    //-             :right="!$isMobile"
    //-             v-model="searchTabSelect"
    //-             background-color="transparent"
    //-             slider-color="primary"
    //-             active-class="black--text"
    //-           ).mb-6
    //-             v-row(v-if="!$isMobile" align="center" :style="$isMobile ? 'margin-bottom: 10px' : ''").pa-3
    //-               v-btn(@click="onHome" text).text-none.font-16
    //-                 v-icon {{ mdiChevronLeft }}
    //-                 | Back
    //-             //-   img(
    //-             //-     src="~/assets/images/MYCURE-icon.png"
    //-             //-     width=" 20"
    //-             //-     alt="MYCURE icon"
    //-             //-     @click="onHome"
    //-             //-   ).mr-2
    //-             //-   a(@click="onHome" style="color: #72727D;").mc-b2 Home /&nbsp;
    //-             //-   a(@click="onRedirect(tabSelect)").mc-b2 {{ tabSelect | format-bread-crumbs }}
    //-             v-tab(
    //-               v-for="(tab, key) in searchTabsList"
    //-               :key="key"
    //-               :href="`#${tab.value}`"
    //-               :class="{'ml-4': !$isMobile}"
    //-               dense
    //-             ).mc-hyp2.font-weight-semibold.text-none {{ tab.text }}
    //-         //- FILTERS
    //-         v-col(cols="12" md="4" xl="3" :class="{'px-0': $isMobile}")
    //-           v-card(color="white" flat)
    //-             template(v-if="showResults('services')")
    //-               v-toolbar(v-if="!$isMobile" flat).pa-1
    //-                 v-spacer
    //-                 h2.mc-h4.black--text Services
    //-                 v-spacer
    //-               v-divider(v-if="!$isMobile").my-3
    //-               v-card-text
    //-                 v-select(
    //-                   v-model="serviceSearchTypeFilter"
    //-                   placeholder="Select Service Type (All)"
    //-                   item-text="text"
    //-                   dense
    //-                   clearable
    //-                   outlined
    //-                   :disabled="loading.search"
    //-                   :append-icon="mdiMenuDown"
    //-                   :clear-icon="mdiClose"
    //-                   :items="serviceTypeOptions"
    //-                   return-object
    //-                   @change="onServiceTypeFilter"
    //-                 )
    //-                   template(slot="prepend-inner")
    //-                     v-icon.mr-2 {{ mdiAccountWrenchOutline }}
    //-                 //- We limit this to the Services Tab only to avoid confusion that it may also be applied to Doctors
    //-                 search-insurers(
    //-                   v-if="searchTabSelect === 'search-services'"
    //-                   avatar
    //-                   outlined
    //-                   clearable
    //-                   :disabled="isPreviewMode"
    //-                   @select="onInsuranceSelect"
    //-                   @clear="clearInsuranceFilter"
    //-                 )
    //-                 date-picker-menu(
    //-                   v-model="dateFilter"
    //-                   outlined
    //-                   :disabled="isPreviewMode || loading"
    //-                   @clear="clearDateFilter"
    //-                   @change="onDateFilter($event)"
    //-                 )
    //-             template(v-if="showResults('doctors')")
    //-               v-toolbar(v-if="!$isMobile" flat).pa-1
    //-                 v-spacer
    //-                 h2.mc-h4.black--text Doctors
    //-                 v-spacer
    //-               v-divider(v-if="!$isMobile").my-3
    //-               v-card-text
    //-                 specialization-filter(
    //-                   v-model="specializationFiltersArray"
    //-                   @filter="(specs) => onFilterDoctor({ specializations: specs }, 1)"
    //-                 )
    //-         //- RESULTS
    //-         v-col(cols="12" md="8" xl="9" :class="{'px-0': $isMobile}")
    //-           services-paginated(
    //-             v-if="showResults('services')"
    //-             :loading="loading.services.list"
    //-             :items="items.services"
    //-             :items-total="itemsTotal.services"
    //-             :items-limit="itemsLimit"
    //-             :itemsPage.sync="itemsPage.services"
    //-             :organization="clinicId"
    //-             :is-preview-mode="isPreviewMode"
    //-             :search-mode="searchMode"
    //-             @update:itemsPage="onPaginate({ type: 'services' }, $event)"
    //-           )
    //-           v-divider(v-if="searchTabSelect === 'search-all'").my-10
    //-           doctors-paginated(
    //-             v-if="showResults('doctors')"
    //-             :loading="loading.doctors.list"
    //-             :items="items.doctors"
    //-             :items-total="itemsTotal.doctors"
    //-             :items-limit="itemsLimit"
    //-             :itemsPage.sync="itemsPage.doctors"
    //-             :organization="clinicId"
    //-             :is-preview-mode="isPreviewMode"
    //-             @update:itemsPage="onPaginate({ type: 'doctors' }, $event)"
    //-           )
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
// import MainPanel from '~/components/clinic-website/MainPanel';
// import AboutClinic from '~/components/clinic-website/AboutClinic';
// import ChooseAppointment from '~/components/doctor-website/ChooseAppointment';
// import ChooseService from '~/components/clinic-website/ChooseService';
// import ContactUs from '~/components/clinic-website/ContactUs';
// import DatePickerMenu from '~/components/commons/date-picker-menu';
// import DoctorsList from '~/components/clinic-website/doctors/DoctorsList';
// import DoctorsPaginated from '~/components/clinic-website/doctors/DoctorsPaginated';
// import SearchInsurers from '~/components/clinic-website/services/SearchInsurers';
// import SearchPanel from '~/components/clinic-website/SearchPanel';
// import ServicesList from '~/components/clinic-website/services/ServicesList';
// import ServicesPaginated from '~/components/clinic-website/services/ServicesPaginated';
// import SpecializationFilter from '~/components/clinic-website/doctors/SpecializationFilter';
// import GenericPanel from '~/components/generic/GenericPanel';

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
// const TABS_LIST = [
//   { text: 'Services', value: 'services', type: 'normal' },
//   { text: 'Our Doctors', value: 'doctors', type: 'normal' },
//   { text: 'About Clinic', value: 'about', type: 'normal' },
//   { text: 'Contact Us', value: 'contact', type: 'normal' },
//   // - Search Tabs
//   // { text: 'All', value: 'search-all', type: 'search' },
//   { text: 'Services', value: 'search-services', type: 'search' },
//   { text: 'Doctors', value: 'search-doctors', type: 'search' },
// ];
export default {
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
      `${this.clinicName || 'This facility'} is committed to provide medical consultation via video conference or phone call to our patients. You can also schedule a physical visit with us.`;
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
