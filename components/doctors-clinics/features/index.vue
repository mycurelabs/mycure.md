<template lang="pug">
  div.pt-5.white
    //- WEB
    features-diagram(
      v-if="!$isMobile"
      :title="title"
      :image="image"
      :customPath="customPath"
      :image-width="$isMobile ? '100%' : '80%'"
    )
    //- MOBILE
    div(v-else)
      v-container
        v-row(justify="center")
          h1.font-40.pre-white-space.text-center.lh-title.font-work-sans {{ title }}
        br
        mobile-diagram-carousel(
          :slides="slides"
          :customSlidePath="customPath"
          :customItemPath="customPath"
          :items="doctorsFeatures"
        )
</template>

<script>
// utils
import { parseTextWithNewLine } from '~/utils/newline';
// components
import FeaturesDiagram from '~/components/commons/features-diagram';
import MobileDiagramCarousel from '~/components/commons/mobile-diagram-carousel';
export default {
  components: {
    FeaturesDiagram,
    MobileDiagramCarousel,
  },
  data () {
    this.image = 'mycure-group-clinic-diagram';
    this.customPath = 'doctors-clinics/';
    this.slides = [
      'mycure-group-clinic-diagram-mobile-01',
      'mycure-group-clinic-diagram-mobile-02',
      'mycure-group-clinic-diagram-mobile-03',
    ];
    this.doctorsFeatures = [
      {
        title: 'SOAP Charting',
        description: 'Quickly store and retrieve your charts anytime, anywhere.',
        icon: 'mycure-group-clinic-diagram-mobile-icon-soap-charting',
      },
      {
        title: 'Secretary Account',
        description: 'Queuing and billing can be managed by your secretary.',
        icon: 'mycure-group-clinic-diagram-mobile-icon-secretary',
      },
      {
        title: 'Syncbase Technology',
        description: 'Work offline and sync data online!',
        icon: 'mycure-group-clinic-diagram-mobile-icon-syncbase',
      },
      {
        title: 'Diagnostic Orders',
        description: 'Laboratory and imaging test requests in a few clicks',
        icon: 'mycure-group-clinic-diagram-mobile-icon-diagx',
      },
      {
        title: 'Custom Forms',
        description: 'Create medical certificates, questionnaires, and waivers.',
        icon: 'mycure-group-clinic-diagram-mobile-icon-forms',
      },
      {
        title: 'Daily Census',
        description: 'Manage your group\'s daily performance & income with ease.',
        icon: 'mycure-group-clinic-diagram-mobile-icon-census',
      },
      {
        title: 'Print Records Anytime',
        description: 'Printable medical records for you and your patients',
        icon: 'mycure-group-clinic-diagram-mobile-icon-print',
      },
    ];
    return {};
  },
  computed: {
    title () {
      const title = 'Your buddy from medical school to clinical practice';
      return !this.$isMobile
        ? parseTextWithNewLine(title, ['school'])
        : parseTextWithNewLine(title, ['buddy', 'medical', 'to']);
    },
  },
};
</script>
