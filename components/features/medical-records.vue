<template lang="pug">
  div
    client-only
      generic-media-panel(
        content-align-right
        cols-left="6"
        cols-right="4"
        align-left-column="start"
        :header="header"
        :descriptions="descriptions"
        :web-image="panelImages.mediaImage"
        :custom-image-path="customPath"
        hide-image-mobile
      )
        div(slot="additional-content")
          v-btn(text :to="{ name: 'signup-individual' }").text-none.get-started-btn
            strong.primary--text Get Started
            v-icon.primary--text mdi-arrow-right
      //- Bottom images
      v-container(v-if="!$isMobile").py-10.mb-n3
        v-row
          v-col(cols="12" md="6")
            picture-source(
              :customPath="customPath"
              :image="panelImages.leftBottomImage"
              imageFileExtension=".webp"
              imageAlt="Print prescription"
              imageWidth="100%"
            )
          v-col(cols="12" md="6")
            picture-source(
              :customPath="customPath"
              :image="panelImages.rightBottomImage"
              imageFileExtension=".webp"
              imageAlt="Charting"
              imageWidth="100%"
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
                picture-source(
                  :customPath="customPath",
                  :image="image"
                  :imageFileExtension="index === 0 ? '.webp' : '.png'"
                  imageWidth="90%"
                  imageAlt="Medical records"
                  extension-exclusive
                )
</template>

<script>
// components
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericMediaPanel,
    PictureSource,
  },
  data () {
    this.header = 'Designed for doctors, by doctors.';
    this.descriptions = [
      'Record full medical history, vitals, and physical exam records according to SOAP charting. Eliminate the haste of scribbling with Rx printing, ICD-10 database, multiple image uploads, and more.',
    ];
    this.panelImages = {
      // mediaImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-01-emr.webp',
      mediaImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-01-emr',
      leftBottomImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-02-print-prescription',
      rightBottomImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-03-charting',
    };
    this.mobilePanelImages = {
      mediaImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-01-emr',
      leftBottomImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-02-print-prescription-mobile',
      rightBottomImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-03-charting-mobile',
    };
    this.customPath = 'features/';
    return {};
  },
};
</script>

<style scoped>
.get-started-btn {
  margin-left: -3%;
}
</style>
