<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Your Patients. For Life."
      meta-title="MYCURE PRM"
      description="Designed for..."
    )
    //- 2nd panel
    features(
      title="Engage Patients. Build Loyalty"
      description="MYCURE PRM allows you..."
      :items="features"
    )
    //- 3rd panel
    generic-media-panel(
      header="Integrates with Your Existing EMR"
      cols-left="5"
      cols-right="4"
      content-align-right
      offset-cols-right="1"
      :descriptions="['If you already have an existing Medical Records system, MYCURE PRM comes with open APIs that allows your provider to integrate with it.']"
    )
    //- 4th panel
    mycure-csi
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Features from '~/components/commons/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import MycureCsi from '~/components/commons/MycureCsi';
import Usp from '~/components/commons/SevenWondersUsp';

export default {
  components: {
    Features,
    GenericMediaPanel,
    MycureCsi,
    Usp,
  },
  data () {
    // - TODO: Update info
    this.features = [
      {
        title: 'Digital Records',
      },
      {
        title: 'Telehealth',
      },
      {
        title: 'Daily Reports',
      },
      {
        title: 'Professional Website',
      },
      {
        title: 'Appointment Booking',
      },
    ];
    return {
      loading: true,
    };
  },
  mounted () {
    this.loading = false;
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE Patients',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
    });
  },
};
</script>
