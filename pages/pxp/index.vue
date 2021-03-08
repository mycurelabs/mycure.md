<template lang="pug">
  div(v-if="!loading")
    v-content
      usp
      locations
</template>

<script>
import Locations from '~/components/pxp/Locations';
import Usp from '~/components/pxp/Usp';
import headMeta from '~/utils/head-meta';

export default {
  layout: 'pxp',
  components: {
    Locations,
    Usp,
  },
  data () {
    return {
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
    });
  },
};
</script>
