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
      content-align-right
      header="Integrates with Your Existing EMR"
      cols-left="5"
      cols-right="4"
      offset-cols-right="1"
      :descriptions="['If you already have an existing Medical Records system, MYCURE PRM comes with open APIs that allows your provider to integrate with it.']"
    )
    //- 4th panel
    mycure-csi
    //- 5th to 7th panel
    generic-media-panel(
      v-for="(info, key) in infoPanels"
      :key="key"
      content-align-right
      cols-left="5"
      cols-right="4"
      offset-cols-right="1"
      :header="info.header"
      :descriptions="info.descriptions"
    )
    //- 8th panel
    think-long-term
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import MycureCsi from '~/components/commons/panels/MycureCsi';
import ThinkLongTerm from '~/components/commons/panels/ThinkLongTerm';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    Features,
    GenericMediaPanel,
    MycureCsi,
    ThinkLongTerm,
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
    this.infoPanels = [
      {
        header: 'Patients and You. Perfect Match.',
        descriptions: [
          'MYCURE Hospital works ideally with MYCURE PRM (Patient Relationship Management System). Communication is easier, booking is a breeze, sharing campaigns is fun.',
        ],
      },
      {
        header: 'Expand your Reach',
        descriptions: [
          'Using MYCURE allows you to be part of MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find you and order online.',
          'Your profile in MYCURE ONE links to your professional website that is likewise provided to you by MYCURE.',
        ],
      },
      {
        header: 'Worrying about upgrading your system? We got you covered!',
        descriptions: [
          'We understand that it may be difficult to change what you’re used to doing. That’s why we have happiness agents that would give you the right guidance when you sign up for MYCURE.',
        ],
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
