<template lang="pug">
  generic-media-panel(
    cols-left="4"
    cols-right="5"
    offsetColsRight="1"
    fileExtension=".png"
    extension-exclusive
    mobile-image-width="90%"
    custom-image-path="features/"
    web-image-class="ml-n1"
    content-align-left
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
    // this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-A-role.png';
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-A-role';
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
  margin-top: 17%;
}
@media screen and (max-width: 1038px){
  .roles-and-privileges {
    margin-top: 0%;
  }
}
@media screen and (device-width: 768px) and (orientation: portrait) {
  .roles-and-privileges {
    margin-top: 5%;
  }
}
@media screen and (device-height: 768px) and (orientation: landscape) {
  .roles-and-privileges {
    margin-top: 2%;
  }
}
@media screen and (device-width: 1024px) and (orientation: portrait) {
  .roles-and-privileges {
    margin-top: 2%;
  }
}
@media screen and (device-height: 1024px) and (orientation: landscape) {
  .roles-and-privileges {
    margin-top: 0%;
  }
}
@media screen and (device-width: 1366px){
  .roles-and-privileges {
    padding-top: 15%;
  }
}
</style>
