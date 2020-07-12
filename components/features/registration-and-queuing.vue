<template lang="pug">
  div
    client-only
      generic-media-panel(
        cols-left="4"
        cols-right="5"
        offset-cols-right="1"
        custom-image-path="features/"
        web-image-width="106%"
        web-image-class="ml-n5"
        content-align-left
        hide-image-mobile
        :header="header"
        :descriptions="descriptions"
        :web-image="image"
      )
      v-container(v-if="$isMobile")
        v-row(justify="center").mt-n12
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
    // this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-F-queue.webp';
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-F-queue';
    this.header = 'Value everyone\'s time more effectively.';
    this.descriptions = [
      'With MYCURE, queueing is easier done than spelled. Patients easily register themselves via kiosks.',
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
