<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Simply plug and play"
      meta-title="MYCURE CSI"
      description="MYCURE as your partner helps your facility to comply with international standards when it comes to digital information processing. Being HIPAA Compliant, we demonstrate our commitment to industry-leading best practices for your security and privacy of protected health information."
    )
    //- 2nd panel
    generic-media-panel(
      header="Set the bar high"
      :descriptions="['MYCURE as your partner helps your facility to comply with international standards when it comes to digital information processing. Being HIPAA Compliant, we demonstrate our commitment to industry-leading best practices for your security and privacy of protected health information.']"
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
      :dense="$isMobile"
      dummy
    )
    //- 3rd panel
    features(
      title="Protect your medical records with confidence"
      description="Data privacy concerns are the least of your worries. Keeping personal and sensitive information secure such as medical records is our priority."
    )
    //- 4th panel
    features(
      title="Integration. Interoperability."
      description="MYCURE follows global standards and has open APIs that allow you to integrate or fortify your other systems with MYCURE. "
      :items="features"
    )
    //- 5th to 6th panel
    generic-media-panel(
      v-for="(info, key) in infoPanels"
      :key="key"
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
      :dense="$isMobile"
      :header="info.header"
      :descriptions="info.descriptions"
      dummy
    )
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// - components
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    Features,
    GenericMediaPanel,
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
        header: 'Accessibility like never before.',
        descriptions: [
          'Work online and offline across multiple locations with MYCURE Syncbase.',
        ],
      },
      {
        header: 'Time to call for CSI',
        descriptions: [
          'Partner with MYCURE today and see progress in no time.',
        ],
      },
    ];
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE CSI',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/OG Homepage.png'),
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
