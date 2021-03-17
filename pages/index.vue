<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    seven-wonders
    care
    simple
    patients
    //- usp(@getStarted="goToSignupIndividual")
    //- start-easy
    //- features
    //- syncbase
    //- hipaa
    //- plans
</template>

<script>
// - utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// - components
import Care from '~/components/home/Care';
import SevenWonders from '~/components/home/SevenWonders';
import Simple from '~/components/home/Simple';
import Patients from '~/components/home/Patients';

export default {
  components: {
    Care,
    Patients,
    SevenWonders,
    Simple,
  },
  data () {
    return {
      loading: true,
    };
  },
  mounted () {
    this.loading = false;
    const panel = this.scrollPanel || '#app';
    setTimeout(() => {
      VueScrollTo.scrollTo(panel, 500, { easing: 'ease', offset: -100 });
    }, 0);

    this.$nuxt.$route.params.scrollHealthSuites ? this.getStarted()
      : VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    window.$crisp.push(['safe', true]);
    this.loading = false;
  },
  head () {
    return headMeta({
      title: 'MYCURE Healthcare Service Booking Management Software',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
    });
  },
};
</script>
