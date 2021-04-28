<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="The holy grail of online-offline technology."
      meta-title="MYCURE Syncbase"
      btn-text="Watch"
    )
    //- 2nd panel
    generic-media-panel(
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      header="Which is best for your health facility?"
      :header-classes="headerClasses"
      :descriptions="['Download our comparative analysis on the different healthcare software setups.']"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
      dummy
    )
    //- 3rd panel
    generic-media-panel(
      content-align-right
      cols-left="5"
      cols-right="4"
      offset-cols-right="1"
      header="Accessibility like no other"
      :descriptions="['Work in your local network with multiple devices even if the internet goes down and just automatically sync data back when online.']"
      :header-classes="headerClasses"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
      dummy
    )
    //- 4th panel
    features(
      title="Secure cloud-based software with the benefits of an on-premise system"
      title-col-size="10"
      image-dir="syncbase/"
      hide-learn-more
      :items="features"
    )
    //- 5th panel
    generic-media-panel(
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      header="See it in action. Book a demo today"
      :header-classes="headerClasses"
      :dense="$isMobile"
      dummy
    )
</template>

<script>
// - utils
import classBinder from '~/utils/class-binder';
import headMeta from '~/utils/head-meta';
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
    this.features = [
      {
        title: 'Grade A+ SSL',
        icon: 'Grade A+ SSL',
        iconExtension: '.png',
      },
      {
        title: 'Data Encryption',
        icon: 'Data Encryption',
        iconExtension: '.png',
      },
      {
        title: 'User Designated Access',
        icon: 'User Designated Access',
        iconExtension: '.png',
      },
      {
        title: 'Secure Cloud Hosting',
        icon: 'Secure Cloud Hosting',
        iconExtension: '.png',
      },
      {
        title: 'Data Privacy Standards',
        icon: 'Data Privacy standards',
        iconExtension: '.png',
      },
    ];
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE Syncbase',
      description: 'Digitally process your medical records in your local network using multiple devices, even if the internet goes down. Then once back online, it automatically synchronizes data back in the cloud. It’s like getting the best of both worlds — reliability of an on-premise server, and affordability of the cloud. Like magic, but scientifically-blended. ',
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
