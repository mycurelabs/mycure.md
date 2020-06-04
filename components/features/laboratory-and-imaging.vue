<template lang="pug">
  generic-media-panel(
    content-align-right
    custom-image-path="features/"
    :header="header"
    :descriptions="descriptions"
    :web-image="image"
    mobile-image-width="90%"
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
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-G-diagnostic-results.png';
    this.header = 'Record and retrieve diagnostic results right where you need them.';
    this.descriptions = [
      'MYCURE can communicate with modern diagnostic machines through HL7 interfacing and PACS configurations.',
      'Doctors can view DICOM images remotely or within clinic premises, while patients can view their lab & imaging results through an online portal.',
    ];
    return {};
  },
};
</script>
