<template lang="pug">
  div(v-if="!loading.page").main-container
    //- insert panels here

</template>

<script>
import isEmpty from 'lodash/isEmpty';
// utils
import { getOrganization } from '~/utils/axios/organizations';
// components
// Insert components from '~/compononets/clinic-website/new'
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
    };
  },
  created () {
    //
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
