<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
    )
      v-col(cols="12" md="8").text-center
        h1(:class="{ 'font-l mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }") Flexible. Scalable.
        p.font-s.grey--text Customizable based on what you need
        p.font-xs.font-open-sans MYCURE is modularized and provides APIs for each so you are able to build from scratch, add missing modules while making your system secure and compliant.
    v-row(justify="center")
      v-col(cols="12" md="8")
        v-row(justify="center")
          v-col(
            v-for="(tool, key) in tools"
            :key="key"
            cols="6"
            md="4"
          ).text-center
            picture-source(
              extension-exclusive
              custom-path="home/"
              :image="tool.icon"
              :image-alt="tool.name"
              :image-width="!$isMobile ? '50%' : '60%'"
              image-file-extension=".png"
            )
            h3.font-xs.font-open-sans.grey--text {{ tool.name }}
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  data () {
    this.tools = [
      { name: 'Privacy Standards', icon: 'Privacy Standards' },
      { name: 'Interoperable Systems', icon: 'Interoperable' },
      { name: 'Customizable Features', icon: 'Customizable Features' },
    ];
    return {};
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}
</style>
