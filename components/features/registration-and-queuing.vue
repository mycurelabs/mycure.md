<template lang="pug">
  generic-media-panel(
    content-align-left
    custom-image-path="features/"
    :header="header"
    :descriptions="descriptions"
    :web-image="image"
    mobile-image-width="90%"
  )
</template>

<script>
// components
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-F-queue.png';
    this.header = 'Value everyone\'s time more effectively.';
    this.descriptions = [
      'With MYCURE, queueing is easier done than spelled. Patients easily register themselves via kiosks',
      'Display multiple queues through auxilliary monitors or smart TVs waiting for patients. Incoming doctors even get notified in their devices for every new patient in line.',
    ];
    return {};
  },
};
</script>
