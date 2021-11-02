<template lang="pug">
  div(style="background-color: #fafafa;")
    directory(v-if="!loading" :class="{'pb-5': $isMobile}").services
</template>

<script>
import headMeta from '~/utils/head-meta';
export default {
  components: {
    Directory: () => import('~/components/directory'),
  },
  layout: 'results',
  // middleware: ['disable-route'],
  data () {
    return {
      loading: true,
    };
  },
  head () {
    return {
      ...headMeta({
        title: 'Results in MYCURE Directory',
        description: 'Search for doctors and clinics in the MYCURE Directory',
        socialBanner: require('~/assets/images/banners/patients-og-banner.png'),
      }),
      script: [
        {
          hid: 'google',
          src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCpEuK4K_sSRKLy_wLqymgQPT8aJpsns0g&libraries=places&v=weekly',
          defer: true,
        },
      ],
    };
  },
  created () {
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
