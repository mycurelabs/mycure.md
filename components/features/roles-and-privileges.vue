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
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-A-role.png';
    this.header = 'Everybody\'s got a special role to play.';
    this.descriptions = [
      'Collaborate with your clinic staff more efficiently using a clinic system that\'s so user-friendly, you wouldn\'t even feel that you\'re working.',
    ];
    return {};
  },
};
</script>

<style scoped>

.mobile-container {
  background-image: url('../../assets/images/features/mycure-web-features-gradient-background.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.add-spacing {
  padding-top: 32px;
}
</style>
