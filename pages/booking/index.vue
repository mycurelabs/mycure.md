<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(@getStarted="goToSignupIndividual")
    start-easy
    features
    syncbase
    hipaa
    plans
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Usp from '~/components/booking/Usp';
import StartEasy from '~/components/booking/StartEasy';
import Features from '~/components/booking/Features';
import Syncbase from '~/components/booking/Syncbase';
import Hipaa from '~/components/booking/Hipaa';
import Plans from '~/components/booking/Plans';

export default {
  components: {
    Usp,
    StartEasy,
    Features,
    Syncbase,
    Hipaa,
    Plans,
  },
  data () {
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Healthcare Service Booking Management Software',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
    });
  },
  mounted () {
    window.$crisp.push(['safe', true]);
    this.loading = false;
  },
  methods: {
    getStarted () {
      this.$router.push({ name: 'signup-individual' });
    },
    goToSignupIndividual (email) {
      this.$router.push({ name: 'signup-individual' });
    },
  },
};
</script>
