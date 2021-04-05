<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Compliance. Security. Interoperability."
      meta-title="MYCURE CSI"
      description="Using MYCURE adds more of these to your operations giving you more protection and flexibiity."
    )
    //- 2nd panel
    protect
    //- 3rd panel
    features(
      title="Integration. Interoperability."
      description="MYCURE follows global standards and has open APIs that allow you to integrate your other systems with MYCURE. OR if you just want to boost your existing one, you can choose from a wide array of MYCURE modules to add in your system."
      :items="features"
    )
    //- 4th to 5th panel
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
    //- 6th panel
    think-long-term
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Features from '~/components/commons/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import MycureCsi from '~/components/commons/MycureCsi';
import Protect from '~/components/csi/Protect';
import ThinkLongTerm from '~/components/commons/ThinkLongTerm';
import Usp from '~/components/commons/SevenWondersUsp';

export default {
  components: {
    Features,
    GenericMediaPanel,
    MycureCsi,
    Protect,
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
      title: 'MYCURE CSI',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
    });
  },
};
</script>
