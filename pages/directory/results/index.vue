<template lang="pug">
  div(style="background-color: #fafafa;")
    services.services
    results-footer(v-if="!loading" absolute)
</template>

<script>
import ResultsFooter from '~/components/services/ResultsFooter';
import Services from '~/components/services';
import headMeta from '~/utils/head-meta';
export default {
  components: {
    ResultsFooter,
    Services,
  },
  layout: 'results',
  // middleware: ['disable-route'],
  data () {
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Healthcare Service Booking Management Software',
      description: 'Search for facilities and services in the MYCURE Healthcare Directory',
      socialBanner: require('~/assets/images/banners/OG Patients.png'),
    });
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped>
.services {
  padding-bottom: 220px;
}

@media screen and (min-width: 1044px) {
  .services {
    padding-bottom: 125px;
  }
}
</style>
