<template lang="pug">
  generic-media-panel(
    web-image-width="90%"
    custom-image-path="features/"
    center-media
    :header="header"
    :descriptions="descriptions"
    :web-image="image"
  )
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
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-C-telehealth';
    this.descriptions = ['Make the most of advanced technology and start accomodating your patients online. Make quality healthcare accessible with a patient portal for online video and audio consultations, ePrescriptions, releasing diagnostic results, and so much more.'];
    return {};
  },
};
</script>
