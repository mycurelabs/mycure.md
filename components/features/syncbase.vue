<template lang="pug">
  generic-media-panel(
    content-align-right
    cols-left="4"
    cols-right="4"
    custom-image-path="features/"
    :header="header"
    :descriptions="descriptions"
    :web-image="image"
    web-image-width="70%"
    mobile-image-width="90%"
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
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-I-syncbase';
    this.header = 'Go offline safely and securely';
    this.descriptions = [
      'The holy grail of online-offline technology is here. Work within your local network using multiple devices even if the internet goes down and just sync data when back online.',
      'This feature is available for multispecialty and enterprise clinic setup.',
    ];
    return {};
  },
};
</script>
