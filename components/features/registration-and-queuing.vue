<template lang="pug">
  div
    client-only
      generic-media-panel(
        content-align-left
        cols-left="4"
        cols-right="6"
        custom-image-path="features/webp/"
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
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-F-queue.webp';
    this.header = 'Value everyone\'s time more effectively.';
    this.descriptions = [
      'With MYCURE, queueing is easier done than spelled. Patients easily register themselves via kiosks',
      'Display multiple queues through auxilliary monitors or smart TVs waiting for patients. Incoming doctors even get notified in their devices for every new patient in line.',
    ];
    this.mobilePanelImages = [
      'MYCURE-virtual-clinic-healthcare-practice-online-features-F-queue-01-mobile.png',
      'MYCURE-virtual-clinic-healthcare-practice-online-features-F-queue-02-mobile.png',
    ];
    return {};
  },
};
</script>
