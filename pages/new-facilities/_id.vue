<template lang="pug">
  div(v-if="!loading.page").main-container
    //- insert panels here

</template>

<script>
import isEmpty from 'lodash/isEmpty';
// services
import { fetchServices } from '~/services/services';
// utils
import { getOrganization } from '~/utils/axios/organizations';
import { initLogger } from '~/utils/logger';
// components
// Insert components from '~/compononets/clinic-website/new'

const log = initLogger('Facilities');

export default {
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
    return {
      loading: {
        page: false,
      },
      itemsLimit: 10,
      itemsTotal: {
        services: 0,
        doctors: 0,
      },
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
</style>
