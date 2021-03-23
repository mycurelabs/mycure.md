<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Patient Centric Hospital System"
      meta-title="MYCURE Hospital"
      description="Designed for small to medium sized hospitals. MYCURE Hospital provides a flawless patient journey. This helps you focus more on patient care and less of your system."
    )
    //- 2nd panel
    features(
      title="Everything Your Hospital Needs. Plus More."
      description="All the tools and solutions to run your hospital. It just works seamlessly from one station to another.  With its open APIs, MYCURE can integrate with your other existing system."
      :items="features"
    )
    //- 3rd panel
    generic-media-panel(
      content-align-right
      header="Enjoy the best of both worlds. MYCURE works online and offline"
      cols-left="5"
      cols-right="4"
      offset-cols-right="1"
      :descriptions="['Work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.']"
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
      title: 'MYCURE Hospital',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
    });
  },
};
</script>
