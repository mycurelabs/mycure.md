<template lang="pug">
  div
    template(v-if="!$isMobile")
      generic-media-panel(
        cols-left="5"
        cols-right="4"
        offset-cols-right="1"
        custom-image-path="features/"
        hide-image-mobile
        :content-align-right="true"
        :header="header"
        :descriptions="descriptions"
        :web-image="panelImages.mediaImage"
      )
        //- div(slot="additional-content")
        //-   v-btn(text :to="{ name: 'signup-individual' }").ml-n4.text-none
        //-     strong.font-18.primary--text Request An Invite
        //-     v-icon.primary--text mdi-arrow-right
      //- Bottom images
      v-container.mt-n8.mb-12
        v-row(no-gutters)
          v-col(cols="12" md="5" offset-md="1")
            picture-source(
              image-file-extension=".webp"
              image-alt="Print prescription"
              image-width="102%"
              custom-path="features/"
              :image="panelImages.leftBottomImage"
            ).ml-n2
          v-col(cols="12" md="5")
            picture-source(
              image-file-extension=".webp"
              image-alt="Charting"
              image-width="102%"
              custom-path="features/"
              :image="panelImages.rightBottomImage"
            ).mr-n2
    //- MOBILE
    template(v-if="$isMobile")
      generic-media-panel(
        custom-image-path="features/"
        hide-image-mobile
        :content-align-right="true"
        :header="header"
        :web-image="panelImages.mediaImage"
      )
      carousel(
        paginationActiveColor="#3498db"
        paginationColor="#808080"
        autoplay
        loop
        :per-page="1"
      ).mobile-carousel
        slide(
          v-for="(image,index) in mobilePanelImages"
          :key="index"
          :data-index="index+1"
        )
          v-row(justify="center").ml-6
            picture-source(
              image-width="90%"
              image-alt="Medical records"
              custom-path="features/"
              extension-exclusive
              :image="image"
              :image-file-extension="index === 0 ? '.webp' : '.png'"
            )
      generic-media-panel(
        custom-image-path="features/"
        hide-image-mobile
        :content-align-right="true"
        :descriptions="descriptions"
        :web-image="panelImages.mediaImage"
      ).mb-n8
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
    this.descriptions = ['Record full medical history, vitals, and physical exam records according to SOAP charting. Eliminate the haste of scribbling with Rx printing, ICD-10 database, multiple image uploads, and more.'];
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
    return {};
  },
};
</script>

<style scoped>
.mobile-carousel {
  margin: -25% 0 -35% 0;
}
@media screen and (device-width: 768px) {
  .mobile-carousel {
      margin: -10% 0 -15% 0;
  }
}
</style>
