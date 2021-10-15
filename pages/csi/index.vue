<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      has-custom-background
      extension-exclusive
      background-image="MYCURE-CSI-Landing Page"
      title="Simply plug and play"
      meta-title="MYCURE CSI"
      image="MYCURE-CSI-Landing Page-Mobile"
      image-col-offset="1"
      custom-image-path="csi/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
    //- 2nd panel
    div.grey-bg.mx-n3
      features(
        title="Set the bar high"
        description="MYCURE as your partner helps your facility to comply with international standards when it comes to digital information processing. Being HIPAA Compliant, we demonstrate our commitment to industry-leading best practices for your security and privacy of protected health information."
        image-dir="clinics/module-icons/"
        content-col-size="10"
        :icon-container-col-size="$isWideScreen ? '8' : '10'"
        :items="secondPanelItems"
      )
    //- 3rd panel
    features(
      title="Secure cloud-based software with the benefits of an on-premise system"
      title-col-size="10"
      image-dir="syncbase/"
      :items="features"
    )
    //- 4th panel
    //- features(
    //-   title="Integration. Interoperability."
    //-   description="MYCURE follows global standards and has open APIs that allow you to integrate or fortify your other systems with MYCURE. "
    //-   :items="features"
    //- )
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
  middleware: ['disable-route'],
  data () {
    this.secondPanelItems = [
      {
        title: 'Quick Calls and Chats',
        icon: 'Chat',
        iconExtension: '.webp',
      },
      {
        title: 'Appointment Schedule',
        icon: 'Appointments',
        iconExtension: '.webp',
      },
      {
        title: 'SMS and In-app Reminders',
        icon: 'SMS',
        iconExtension: '.webp',
      },
    ];
    // - TODO: Update info
    this.features = [
      {
        title: 'Grade A+ SSL',
        icon: 'Grade A+ SSL',
        iconExtension: '.webp',
      },
      {
        title: 'Data Encryption',
        icon: 'Data Encryption',
        iconExtension: '.webp',
      },
      {
        title: 'User Designated Access',
        icon: 'User Designated Access',
        iconExtension: '.webp',
      },
      {
        title: 'Secure Cloud Hosting',
        icon: 'Secure Cloud Hosting',
        iconExtension: '.webp',
      },
      {
        title: 'Data Privacy Standards',
        icon: 'Data Privacy standards',
        iconExtension: '.webp',
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
      title: 'MYCURE Compliance Security Interoperability',
      description: 'MYCURE offers a customizable clinic management system that allows API integration to ensure a smooth experience for doctors and clinics.',
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

<style scoped>
.grey-bg {
  background-color: #fafafa;
}
</style>
