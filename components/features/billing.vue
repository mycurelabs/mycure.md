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
        :web-image="mediaImage"
        custom-image-path="features/"
        hide-image-mobile
      ).mt-n1
        //- Check list
        template(slot="additional-content")
          template(v-for="(item, i) in checkListItems")
            v-row(:align="i === 2 ? 'center' : 'start'" dense)
              v-col(cols="1").pr-2.pt-2
                img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
              v-col
                span(:class="i === 2 && 'pre-white-space'").font-16.font-gray {{ item }}
      //- Bottom images
      v-container(v-if="!$isMobile").py-10.mb-n1
        v-row
          v-col(cols="12" md="6").mt-3
            picture-source(
              :customPath="customPath"
              :image="leftBottomImage"
              imageFileExtension=".webp"
              imageAlt="Charge slip"
              imageWidth="100%"
            )
          v-col(cols="12" md="6")
            picture-source(
              :customPath="customPath"
              :image="rightBottomImage"
              imageFileExtension=".webp"
              imageAlt="Daily census"
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
                  imageAlt="Billing"
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
    this.header = 'Simplified billing, beautiful reports.';
    this.descriptions = [
      'Produce neatly-organized reports in a minute or less.',
    ];
    this.panelImages = [
      'MYCURE-virtual-clinic-healthcare-practice-online-features-E-01-billing-payment',
      'MYCURE-virtual-clinic-healthcare-practice-online-features-E-02-charge-slip',
      'MYCURE-virtual-clinic-healthcare-practice-online-features-E-03-daily-census',
    ];
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
  computed: {
    mediaImage () {
      return this.panelImages[0];
    },
    leftBottomImage () {
      return this.panelImages[1];
    },
    rightBottomImage () {
      return this.panelImages[2];
    },
  },
};
</script>
