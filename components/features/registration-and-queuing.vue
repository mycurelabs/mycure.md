<template lang="pug">
  div
    generic-media-panel(
      v-if="!$isMobile"
      align-left-column="center"
      cols-left="4"
      cols-right="5"
      offset-cols-right="1"
      custom-image-path="features/"
      web-image-width="104%"
      web-image-class="ml-n3"
      hide-image-mobile
      :content-align-left="true"
      :header="header"
      :descriptions="descriptions"
      :web-image="image"
    )
    template(v-if="$isMobile")
      generic-media-panel(
        align-left-column="center"
        custom-image-path="features/"
        hide-image-mobile
        :content-align-left="true"
        :header="header"
        :web-image="image"
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
          v-row(justify="center")
            img(v-lazy="require(`~/assets/images/features/${image}`)" alt="Medical records" width="90%")
      generic-media-panel(
        custom-image-path="features/"
        hide-image-mobile
        :content-align-left="true"
        :descriptions="descriptions"
        :web-image="image"
      ).mb-n10
</template>

<script>
// components
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-F-queue';
    this.header = 'Value everyone\'s time more effectively.';
    this.descriptions = [
      'With MYCURE, queueing is easier done than spelled. Your patients can now easily register themselves via kiosks.',
      'Display multiple queues through auxiliary monitors or smart TVs waiting for patients. Incoming doctors even get notified in their devices for every new patient in line.',
    ];
    this.mobilePanelImages = [
      'MYCURE-virtual-clinic-healthcare-practice-online-features-F-queue-01-mobile.png',
      'MYCURE-virtual-clinic-healthcare-practice-online-features-F-queue-02-mobile.png',
    ];
    return {};
  },
};
</script>

<style scoped>
.mobile-carousel {
  margin: -35% 0 -30% 0;
}
@media screen and (device-width: 768px) {
  .mobile-carousel {
      margin: -15% 0 -10% 0;
  }
}
</style>
