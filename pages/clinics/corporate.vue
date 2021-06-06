<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Organize your employee health records like a breeze"
      meta-title="MYCURE for Corporate Clinics"
      description="Get the most affordable software for corporate clinics today."
      btn-text="Start Free"
    )
    //- 2nd panel
    features(
      title="Newest tools for the newest generation."
      description="Everyone in your workplace is online. MYCURE helps you monitor their health and safety conveniently through the cloud."
      :items="features"
      hide-learn-more
    )
    //- 3rd panel
    generic-media-panel(
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      header="Know the health status of your employees stat"
      :header-classes="headerClasses"
      :descriptions="['Easily access and share medical records with them through the MYCURE health portal.']"
      :description-classes="descriptionClasses"
    )

    //- 4th panel
    multiple-branches

    //- 5th panel
    call-to-action

    //- 6th panel
    generic-media-panel(
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      header="Start easy. Take the first step today"
      :header-classes="headerClasses"
      :dense="$isMobile"
    )
      template(slot="additional-content")
        v-row(justify="center")
          v-col(cols="4").text-center
            mc-btn(
              color="primary"
              large
              depressed
            ).text-none.font-xs Get Started
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import MultipleBranches from '~/components/enterprise/multiple-branches';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel,
    MultipleBranches,
    Usp,
  },
  middleware: ['disable-route'],
  data () {
    this.features = [
      {
        title: 'Online Health Records',
      },
      {
        title: 'Medical Certificates',
      },
      {
        title: 'Annual Checkups',
      },
      {
        title: 'COVID-19 Test and Vaccine Tracker',
      },
    ];
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE LIS for Mobile Labs',
      description: 'Discover the simplest and most affordable laboratory information software designed for mobile labs. It’s cloud-based and works offline.',
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
