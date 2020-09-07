<template lang="pug">
  generic-media-panel(
    align-right-column="center"
    cols-left="5"
    cols-right="4"
    offset-cols-right="1"
    custom-image-path="features/"
    web-image-width="106%"
    web-image-class="ml-n1"
    mobile-image-width="95%"
    mobile-image-class="text-center"
    :content-align-right="true"
    :header="header"
    :descriptions="descriptions"
    :web-image="image"
    :class="{ 'mb-n8': $isMobile }"
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
    this.header = { text: 'Go offline safely and securely', parseFields: ['safely '] };
    this.descriptions = [
      'The holy grail of online-offline technology is here. Work within your local network using multiple devices even if the internet goes down and just sync data when back online.',
      'This feature is available for multispecialty and enterprise clinic setup.',
      // {
      //   text: 'This feature is available for multispecialty and enterprise clinic setup.',
      //   parseFields: ['multispecialty '],
      // },
    ];
    return {};
  },
};
</script>
