<template lang="pug">
  services
</template>

<script>
import Services from '~/components/services';
import headMeta from '~/utils/head-meta';
export default {
  layout: 'pxp',
  // middleware: ['disable-route'],
  components: {
    Services,
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
