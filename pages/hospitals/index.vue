<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Advanced Patient-centric hospital software"
      meta-title="MYCURE Hospital Information System"
      description="MYCURE smoothly handles the critical process flows inside hospitals that enables healthcare professionals to focus more on patient care."
    )
    //- 2nd panel
    features(
      title="Easy to implement. Easy to maintain"
      description="Work seamlessly from one station to another.  With its open APIs, MYCURE can integrate with your other existing systems."
      :items="features"
    )
    //- 3rd panel
    syncbase
    //- 4th panel
    mycure-csi
    //- 5th to 6th panel
    generic-media-panel(
      v-for="(info, key) in infoPanels"
      :key="key"
      content-align-right
      cols-left="6"
      cols-right="6"
      :header="info.header"
      :descriptions="info.descriptions"
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
    )
    //- 7th panel
    call-to-action(:version="2")
    //- 8th panel
    generic-media-panel(
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      :header="bookDemoPanel.header"
      :header-classes="headerClasses"
      :descriptions="bookDemoPanel.descriptions"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
    )
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import MycureCsi from '~/components/commons/panels/MycureCsi';
import Syncbase from '~/components/commons/panels/Syncbase';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel,
    MycureCsi,
    Syncbase,
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
          'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find and book an appointment anytime.',
        ],
      },
    ];
    this.bookDemoPanel = {
      header: 'Book a Demo Today',
      descriptions: [
        'Know how MYCURE works straight from the experts. The newest technologies are just within your reach.',
      ],
    };
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE for Hospitals',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
    });
  },
  computed: {
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
        }),
        'lh-title',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>
