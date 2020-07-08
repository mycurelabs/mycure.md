<template lang="pug">
  div
    client-only
      generic-media-panel(
        cols-left="5"
        cols-right="4"
        offset-cols-right="1"
        content-align-right
        hide-image-mobile
        :header="header"
        :descriptions="descriptions"
        :web-image="panelImages.mediaImage"
        :custom-image-path="customPath"
      )
        div(slot="additional-content")
          v-btn(text :to="{ name: 'signup-individual' }").text-none.get-started-btn
            strong.primary--text Get Started
            v-icon.primary--text mdi-arrow-right
      //- Bottom images
      v-container(v-if="!$isMobile").mt-n8.pb-12
        v-row(no-gutters)
          v-col(cols="12" md="5" offset-md="1")
            picture-source(
              image-file-extension=".webp"
              image-alt="Print prescription"
              image-width="102%"
              :custom-path="customPath"
              :image="panelImages.leftBottomImage"
            ).ml-n2
          v-col(cols="12" md="5")
            picture-source(
              image-file-extension=".webp"
              image-alt="Charting"
              image-width="102%"
              :custom-path="customPath"
              :image="panelImages.rightBottomImage"
            ).mr-n2
      v-container(v-else)
        v-row(justify="center")
          carousel(
            paginationActiveColor="#3498db"
            paginationColor="#808080"
            autoplay
            loop
            :per-page="1"
          )
            slide(
              v-for="(image,index) in mobilePanelImages"
              :key="index"
              :data-index="index+1"
            )
              v-row(justify="center").ml-6
                picture-source(
                  image-width="90%"
                  image-alt="Medical records"
                  extension-exclusive
                  :custom-path="customPath",
                  :image="image"
                  :image-file-extension="index === 0 ? '.webp' : '.png'"
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
