<template lang="pug">
  generic-media-panel(
    align-left-column="center"
    cols-left="4"
    cols-right="5"
    offset-cols-right="1"
    custom-image-path="features/"
    file-extension=".png"
    web-image-width="103%"
    web-image-class="ml-n3"
    mobile-image-width="95%"
    mobile-image-class="text-center"
    extension-exclusive
    :content-align-left="true"
    :header="header"
    :descriptions="descriptions"
    :web-image="image"
    :class="{ 'mb-n10': $isMobile }"
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
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-A-role';
    this.header = 'Everybody\'s got a special role to play.';
    this.descriptions = ['Collaborate with your clinic staff more efficiently using a clinic system that\'s so user-friendly, you wouldn\'t even feel that you\'re working.'];
    return {};
  },
};
</script>
