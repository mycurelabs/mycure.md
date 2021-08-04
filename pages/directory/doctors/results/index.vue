<template lang="pug">
  div(style="background-color: #fafafa;")
    directory-doctor(:class="{'pb-5': $isMobile}").services
</template>

<script>
import headMeta from '~/utils/head-meta';
export default {
  components: {
    DirectoryDoctor: () => import('~/components/directory-doctor'),
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
      description: 'Search for doctors and specialties in the MYCURE Doctors Directory',
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
