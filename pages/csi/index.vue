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
    div.grey-bg.mx-n3
      generic-media-panel(
        :content="fourthPanelContent"
        :center-panel-title-classes="titleClasses"
        :content-classes="descriptionClasses"
        :super-title-classes="subheaderClasses"
        :title-classes="[...titleClasses, 'primary--text']"
        align="center"
        hide-btn
      )
    //- 5th

    //- 6th
    call-to-action(:content="ctaContent")
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction,
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
    this.fourthPanelContent = {
      centerPanelTitle: 'Integration and Interoperability',
      superTitle: 'Choose from a wide array of MYCURE modules to add in your system',
      description: 'MYCURE follows global standards and has open APIs that allow you to integrate or fortify your other systems with MYCURE.',
      contentAlign: 'right',
      imageBindings: {
        image: 'As your practice grows.png',
        imageAlt: 'Hospitals growing and scaling up artwork',
        customPath: 'commons/',
        extensionExclusive: true,
      },
    };
    this.ctaContent = {
      title: 'Time to call for CSI',
      description: [
        'Partner with MYCURE today and see progress in no time.',
      ],
      contentAlign: 'right',
    };
    this.titleClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.buttonClasses = ['mc-button-set-1'];
    this.subheaderClasses = ['mc-subheader-set-2', 'font-open-sans', 'primary--text'];
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE Compliance Security Interoperability',
      description: 'MYCURE offers a customizable clinic management system that allows API integration to ensure a smooth experience for doctors and clinics.',
      socialBanner: require('~/assets/images/banners/homepage-og-banner.png'),
    });
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
