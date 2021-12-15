<template lang="pug">
  div(v-if="!loading.page").main-container
    v-snackbar(v-model="clipSuccess" timeout="2000" color="success") Copied link to clipboard
    main-panel(
      ref="top"
      :pic-url="picURL"
      :clinic-name="clinicName"
      :formatted-address="formattedAddress"
      :clinic-phone="clinicPhone"
      :style="{ height: $isMobile ? '130vh' : '120vh' }"
      :is-bookable="isVerified && isAvailable"
      @book="onBook"
      @redirect="onRedirect($event)"
      @clipSuccess="clipSuccess = true"
    )
    //- insert panels here
    //- insert search panel
    //- Workflow area
    v-container(ref="tabs").pb-16
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
                a(@click="onRedirect(tabSelect)").mc-b2 {{ tabSelect }}
              v-tab(
                v-for="(tab, key) in tabsList"
                :key="key"
                :href="`#${tab}`"
                :class="{'ml-4': !$isMobile}"
                dense
              ).mc-hyp2.font-weight-semibold.text-none {{ tab }}
              v-tab-item(value="Services")
                div.grey-bg.pt-8
                  h3 hello
              v-tab-item(value="Our Doctors")
                div.grey-bg.pt-8
                  h3 hello
              v-tab-item(value="About Clinic")
                div.grey-bg.pt-8
                  about-clinic(
                    :pic-url="picURL"
                    :clinic-name="clinicName"
                    :description="description"
                  )
              v-tab-item(value="Contact Us")
                div.grey-bg.pt-8
                  contact-us(
                    :address="clinic.address"
                    :clinic-phone="clinicPhone"
                    :schedule="clinic.mf_schedule"
                  )

</template>

<script>
import isEmpty from 'lodash/isEmpty';
// services
import { fetchServices } from '~/services/services';
// utils
import { getOrganization } from '~/utils/axios/organizations';
import { initLogger } from '~/utils/logger';
import { formatAddress } from '~/utils/formats';
// components
import MainPanel from '~/components/clinic-website/new/MainPanel';
import AboutClinic from '~/components/clinic-website/new/AboutClinic';
import ContactUs from '~/components/clinic-website/new/ContactUs';
import GenericPanel from '~/components/generic/GenericPanel';

const log = initLogger('Facilities');

export default {
  components: {
    MainPanel,
    GenericPanel,
    AboutClinic,
    ContactUs,
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
    this.tabsList = ['Services', 'Our Doctors', 'About Clinic', 'Contact Us'];
    return {
      loading: {
        page: false,
      },
      itemsLimit: 10,
      itemsTotal: {
        services: 0,
        doctors: 0,
      },
      tabSelect: 'Services',
      clipSuccess: false,
    };
  },
  head () {
    return {
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
    isVerified () {
      return !!this.clinic?.websiteId;
    },
    isAvailable () {
      // return this.hasItemsToBook && (this.isBookingEnabled || this.isTelehealthEnabled);
      return this.isBookingEnabled || this.isTelehealthEnabled;
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
      const { phone, phones } = this.clinic;
      if (phones?.length) return phones.join(', ');
      return phone || '';
    },
    description () {
      return this.clinic?.description ||
      `${this.name || 'This facility'} specializes in telehealth services. ${this.name || 'It'} is committed to provide medical consultation via video conference or phone call to our patient 24 hours a day 7 days a week.`;
    },
  },
  mounted () {
    this.fetchServices();
  },
  methods: {
    /** Fetches all services of facility
     *
     * @param {Object} serviceArgs
     * @param {Object} serviceArgs.serviceProps - specific service fields
     * @param {String} serviceArgs.searchText - search text to match services name
     *
     * @param {Number} page - for computing pagination
     */
    async fetchServices ({
      /**
       * @type {String} serviceProps.type - matches with Service#type
       * @type {String} serviceProps.subtype  - matched with Service#subtype
       * @type {String} serviceProps.insurer  - insurer id
       * @type {Array} serviceProps.tags - matches with Service#tags
       */
      serviceProps = {},
      searchText,
    } = {}, page = 1) {
      try {
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
        this.itemsTotal.services = total;
      } catch (error) {
        console.error(error);
      }
    },
    // Event handlers
    onRedirect (type) {
      this.tabSelect = type;
      const element = this.$refs.tabs;
      const top = element.offsetTop;

      window.scrollTo(0, top);
    },
    onHome () {
      const element = this.$refs.top;
      const top = element.offsetTop;

      window.scrollTo(0, top);
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
