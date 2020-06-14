<template lang="pug">
  generic-media-panel(
    center-media
    :header="header"
    :descriptions="descriptions"
    :web-image="mediaImage"
    web-image-width="90%"
    :custom-image-path="customPath"
  ).mt-n1.mb-1
    div(slot="additional-content" :class="{'text-center': !$isMobile}")
      v-btn(text :to="{ name: 'signup-individual' }").text-none
        strong.primary--text Get Started
        v-icon.primary--text mdi-arrow-right
</template>

<script>
// components
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.header = 'Build your virtual practice';
    this.mediaImage = 'MYCURE-virtual-clinic-healthcare-practice-online-features-C-telehealth.webp';
    this.descriptions = [
      'Make the most of advanced technology and start accomodating your patients online. Make quality healthcare accessible with a patient portal for online video and audio consultations, ePrescriptions, releasing diagnostic results, and so much more.',
    ];
    this.customPath = 'features/webp/';
    return {};
  },
};
</script>
