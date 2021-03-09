<template lang="pug">
  div
    services(@results:filled="absoluteFooter = !$event")
    results-footer(v-if="!loading" :absolute="absoluteFooter")
</template>

<script>
import ResultsFooter from '~/components/services/ResultsFooter';
import Services from '~/components/services';
import headMeta from '~/utils/head-meta';
export default {
  layout: 'results',
  // middleware: ['disable-route'],
  components: {
    ResultsFooter,
    Services,
  },
  data () {
    return {
      absoluteFooter: false,
      loading: true,
    };
  },
  mounted () {
    this.loading = false;
  },
  head () {
    return headMeta({
      title: 'MYCURE Healthcare Service Booking Management Software',
      description: 'Search for facilities and services in the MYCURE Healthcare Directory',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Patients.jpg'),
    });
  },
};
</script>
