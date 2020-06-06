<template lang="pug">
  div
    client-only
      generic-media-panel(
        content-align-right
        align-left-column="start"
        :header="header"
        :descriptions="descriptions"
        :web-image="panelImages.mediaImage"
        :custom-image-path="customPath"
        hide-image-mobile
      )
        div(slot="additional-content")
          v-btn(text @click="onGetStarted").text-none.get-started-btn
            strong.primary--text Get Started
            v-icon.primary--text mdi-arrow-right
      //- Bottom images
      v-container(v-if="!$isMobile")
        v-row
          v-col(cols="12" md="5")
            img(
              v-lazy="panelImages.leftBottomImage"
              alt="Print prescription"
              width="100%"
            )
          v-col(cols="12" md="7")
            img(
              v-lazy="panelImages.rightBottomImage"
              alt="Charting"
              width="100%"
            )
      v-container(v-else)
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
    this.header = 'Designed for doctors, by doctors.';
    this.descriptions = [
      'Record full medical history, vitals, and physical exam records according to SOAP charting. Eliminate the haste of scribbling with Rx printing, ICD-10 database, multiple image uploads, and more.',
    ];
    this.panelImages = {
      mediaImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-01-emr.png',
      leftBottomImage: require('~/assets/images/features/MYCURE-virtual-clinic-healthcare-practice-online-features-B-02-print-prescription.png'),
      rightBottomImage: require('~/assets/images/features/MYCURE-virtual-clinic-healthcare-practice-online-features-B-03-charting.png'),
    };
    this.mobilePanelImages = {
      mediaImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-01-emr.png',
      leftBottomImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-02-print-prescription-mobile.png',
      rightBottomImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-03-charting-mobile.png',
    };
    this.customPath = 'features/';
    return {};
  },
  methods: {
    onGetStarted () {
      // TODO: Go to signup
    },
  },
};
</script>

<style scoped>
.get-started-btn {
  margin-left: -3%;
}
</style>
