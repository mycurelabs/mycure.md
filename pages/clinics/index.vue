<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="The Most Complete Clinic Management System"
      meta-title="MYCURE CLINIC"
      description="Designed for small to large sized modern clinics with complex operations. This platform makes your clinic much more efficient, increases revenue and builds more patient loyalty."
    )
    //- 2nd panel
    features(
      title="Covers every step of your patient journey."
      description="MYCURE provides the right tools making your patient experience flawless from booking to consults to billing."
      :items="features"
    )
    //- 3rd panel
    features(
      title="Customized for Your Specialty"
      description="MYCURE has already built in workflows and processes for different setups."
      :items="features"
    )
    //- 4th panel
    generic-media-panel(
      content-align-right
      cols-left="5"
      cols-right="4"
      offset-cols-right="1"
      :header="infoPanels[0].header"
      :descriptions="infoPanels[0].descriptions"
    )
    //- 5th panel
    mycure-csi
    //- 6th panel
    generic-media-panel(
      content-align-right
      cols-left="5"
      cols-right="4"
      offset-cols-right="1"
      :header="infoPanels[1].header"
      :descriptions="infoPanels[1].descriptions"
    )
    //- 7th panel
    think-long-term
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Features from '~/components/commons/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import MycureCsi from '~/components/commons/MycureCsi';
import ThinkLongTerm from '~/components/commons/ThinkLongTerm';
import Usp from '~/components/commons/SevenWondersUsp';

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
        header: 'Expand your Reach',
        descriptions: [
          'Using MYCURE allows you to be part of MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find you and book an appointment.',
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
      title: 'MYCURE CLINIC',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
    });
  },
};
</script>
