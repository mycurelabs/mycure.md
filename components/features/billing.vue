<template lang="pug">
  div
    template(v-if="!$isMobile")
      generic-media-panel(
        cols-left="5"
        cols-right="4"
        offset-cols-right="1"
        custom-image-path="features/"
        web-image-class="ml-n1"
        web-image-width="105%"
        hide-image-mobile
        content-align-right
        :header="header"
        :descriptions="descriptions"
        :web-image="panelImages.mediaImage"
      )
        //- Check list
        template(slot="additional-content")
          template(v-for="(item, i) in checkListItems")
            v-row(:align="i === 2 ? 'center' : 'start'" dense)
              v-col(cols="1").pr-2.pt-2
                img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
              v-col
                span(:class="i === 2 && 'pre-white-space'").font-16.font-gray {{ item }}
      //- Bottom images
      v-container.mt-n8.pb-12
        v-row
          v-col(cols="12" md="5" offset-md="1")
            picture-source(
              image-file-extension=".webp"
              image-alt="Charge slip"
              image-width="105%"
              :custom-path="customPath"
              :image="panelImages.leftBottomImage"
            ).ml-n1
          v-col(cols="12" md="5").mt-n4
            picture-source(
              image-file-extension=".webp"
              image-alt="Daily census"
              image-width="100%"
              :custom-path="customPath"
              :image="panelImages.rightBottomImage"
            ).ml-2
    //- MOBILE
    template(v-if="$isMobile")
      generic-media-panel(
        custom-image-path="features/"
        hide-image-mobile
        content-align-right
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
        ).pa-1
          v-row(justify="center").ml-6
            picture-source(
              image-width="90%"
              image-alt="Billing"
              extension-exclusive
              :custom-path="customPath",
              :image="image"
              :image-file-extension="index === 0 ? '.webp' : '.png'"
            )
      generic-media-panel(
        custom-image-path="features/"
        hide-image-mobile
        content-align-right
        :descriptions="descriptions"
        :web-image="panelImages.mediaImage"
      )
        //- Check list
        template(slot="additional-content")
          template(v-for="(item, i) in checkListItems")
            v-row(:align="i === 2 ? 'center' : 'start'" dense)
              v-col(cols="1").pr-2.pt-2
                img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
              v-col
                span(:class="i === 2 && 'pre-white-space'").font-16.font-gray {{ item }}
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
    this.header = 'Simplified billing, beautiful reports.';
    this.descriptions = ['Produce neatly-organized reports in a minute or less.'];
    this.panelImages = {
      mediaImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-E-01-billing-payment',
      leftBottomImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-E-02-charge-slip',
      rightBottomImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-E-03-daily-census',
    };
    this.mobilePanelImages = [
      'MYCURE-virtual-clinic-healthcare-practice-online-features-E-01-billing-payment',
      'MYCURE-virtual-clinic-healthcare-practice-online-features-E-02-charge-slip-mobile',
      'MYCURE-virtual-clinic-healthcare-practice-online-features-E-03-daily-census-mobile',
    ];
    this.checkListItems = [
      'Payment Management & History',
      'Invoice & Receipt Printing',
      'HMO Statements, Collections\n& Reports',
      'Interface with Materials Management',
    ];
    this.customPath = 'features/';
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
