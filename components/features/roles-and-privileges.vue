<template lang="pug">
  generic-media-panel(
    content-align-left
    cols-left="4"
    cols-right="6"
    custom-image-path="features/"
    :header="header"
    :descriptions="descriptions"
    :web-image="image"
    mobile-image-width="90%"
  ).roles-and-privileges
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
.roles-and-privileges {
  margin-top: 12%;
}
</style>
