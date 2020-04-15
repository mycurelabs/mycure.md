<template lang="pug">
  div.pt-5.white
    //- WEB
    features-diagram(
      v-if="!$isMobile"
      :title="title"
      :description="description"
      :image="image"
      :customPath="customPath"
      :image-width="$isMobile ? '100%' : '80%'"
    )
    //- //- MOBILE
    //- div(v-else)
    //-   v-container
    //-     v-row(justify="center")
    //-       h1.font-40.pre-white-space.text-center.lh-title.font-work-sans {{ title }}
    //-     br
    //-     mobile-diagram-carousel(
    //-       :slides="slides"
    //-       :customSlidePath="customPath"
    //-       :customItemPath="customPath"
    //-       :items="doctorsFeatures"
    //-     )
</template>

<script>
// utils
import { parseTextWithNewLine } from '~/utils/newline';
// components
import FeaturesDiagram from '~/components/commons/features-diagram';
export default {
  components: {
    FeaturesDiagram,
  },
  data () {
    this.image = 'mycure-hippocrates-diagram-steps';
    this.customPath = 'hippocrates/';
    // this.doctorsFeatures = [
    //   {
    //     title: 'SOAP Charting',
    //     description: 'Quickly store and retrieve your charts anytime, anywhere.',
    //     icon: 'mycure-group-clinic-diagram-mobile-icon-soap-charting',
    //   },
    //   {
    //     title: 'Secretary Account',
    //     description: 'Queuing and billing can be managed by your secretary.',
    //     icon: 'mycure-group-clinic-diagram-mobile-icon-secretary',
    //   },
    //   {
    //     title: 'Syncbase Technology',
    //     description: 'Work offline and sync data online!',
    //     icon: 'mycure-group-clinic-diagram-mobile-icon-syncbase',
    //   },
    //   {
    //     title: 'Diagnostic Orders',
    //     description: 'Laboratory and imaging test requests in a few clicks',
    //     icon: 'mycure-group-clinic-diagram-mobile-icon-diagx',
    //   },
    //   {
    //     title: 'Custom Forms',
    //     description: 'Create medical certificates, questionnaires, and waivers.',
    //     icon: 'mycure-group-clinic-diagram-mobile-icon-forms',
    //   },
    //   {
    //     title: 'Daily Census',
    //     description: 'Manage your group\'s daily performance & income with ease.',
    //     icon: 'mycure-group-clinic-diagram-mobile-icon-census',
    //   },
    //   {
    //     title: 'Print Records Anytime',
    //     description: 'Printable medical records for you and your patients',
    //     icon: 'mycure-group-clinic-diagram-mobile-icon-print',
    //   },
    // ];
    return {};
  },
  computed: {
    title () {
      const title = 'Imagine your Medical Arts Center Going Online';
      return !this.$isMobile
        ? parseTextWithNewLine(title, ['Arts'])
        : parseTextWithNewLine(title, ['your', 'Arts']);
    },
    description () {
      const description = 'Continue your outpatient services with online video chat consultations bundled with an advanced EMR system that your physicians can access anytime.';
      return !this.$isMobile
        ? parseTextWithNewLine(description, ['advanced'])
        : description;
    },
  },
};
</script>
