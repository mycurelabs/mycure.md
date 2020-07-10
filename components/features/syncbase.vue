<template lang="pug">
  generic-media-panel(
    cols-left="5"
    cols-right="4"
    offset-cols-right="1"
    custom-image-path="features/"
    content-align-right
    web-image-width="106%"
    web-image-class="ml-n2"
    :header="header"
    :descriptions="descriptions"
    :web-image="image"
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
    this.image = 'mycure-syncbase-config';
    this.header = 'Go offline safely and securely';
    this.descriptions = [
      'The holy grail of online-offline technology is here. Work within your local network using multiple devices even if the internet goes down and just sync data when back online.',
      'This feature is available for multispecialty and enterprise clinic setup.',
    ];
    return {};
  },
};
</script>
