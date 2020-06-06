<template lang="pug">
  div
    client-only
      generic-media-panel(
        content-align-right
        align-left-column="start"
        :header="header"
        :descriptions="descriptions"
        :web-image="mediaImage"
        :custom-image-path="customPath"
        hide-image-mobile
      )
        //- Check list
        template(slot="additional-content")
          template(v-for="item in checkListItems")
            v-row(align="center" dense)
              v-col(cols="1").pr-2.pt-2
                img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
              v-col(shrink)
                span.font-18 {{ item }}
      //- Bottom images
      v-container(v-if="!$isMobile")
        v-row
          v-col(cols="12" md="5")
            img(
              v-lazy="leftBottomImage"
              alt="Print prescription"
              width="100%"
            )
          v-col(cols="12" md="7")
            img(
              v-lazy="rightBottomImage"
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
    this.header = 'Simplified billing, beautiful reports.';
    this.descriptions = [
      'Produce neatly-organized reports in a minute or less.',
    ];
    this.panelImages = [
      'MYCURE-virtual-clinic-healthcare-practice-online-features-E-01-billing-payment.png',
      'MYCURE-virtual-clinic-healthcare-practice-online-features-E-02-charge-slip.png',
      'MYCURE-virtual-clinic-healthcare-practice-online-features-E-03-daily-census.png',
    ];
    this.mobilePanelImages = [
      this.panelImages[0],
      'MYCURE-virtual-clinic-healthcare-practice-online-features-E-02-charge-slip-mobile.png',
      'MYCURE-virtual-clinic-healthcare-practice-online-features-E-03-daily-census-mobile.png',
    ];
    this.checkListItems = [
      'Payment Management & History',
      'Invoice & Receipt Printing',
      'HMO Statements, Collections, & Reports',
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
      return require(`~/assets/images/features/${this.panelImages[1]}`);
    },
    rightBottomImage () {
      return require(`~/assets/images/features/${this.panelImages[2]}`);
    },
  },
};
</script>
