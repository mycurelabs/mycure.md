<template lang="pug">
  div
    client-only
      generic-media-panel(
        content-align-right
        custom-image-path="features/"
        :header="header"
        :descriptions="descriptions"
        :web-image="image"
        hide-image-mobile
      )
      v-container(v-if="$isMobile")
        v-row(justify="center")
          carousel(
            :per-page="1"
            autoplay
            loop
            paginationActiveColor="#3498db"
            paginationColor="#808080"
          )
            slide(
              v-for="(image,index) in mobilePanelImages"
              :key="index"
              :data-index="index+1"
            ).pa-1
              v-row(justify="center")
                img(v-lazy="require(`~/assets/images/features/${image}`)" alt="Medical records" width="90%")
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
    this.mobilePanelImages = [
      'MYCURE-virtual-clinic-healthcare-practice-online-features-G-diagnostic-results-01-mobile.png',
      'MYCURE-virtual-clinic-healthcare-practice-online-features-G-diagnostic-results-02-mobile.png',
    ];
    return {};
  },
};
</script>
