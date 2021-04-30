<template lang="pug">
  v-container.usp-container
    v-row(justify="center" align="center" :style="{ height: panelHeight }")
      v-col(cols="12" md="10")
        v-row(
          justify="center"
          align="center"
        )
          v-col(cols="12" md="8").text-center
            h1(:class="{ 'font-l' : !$isMobile, 'font-m' : $isMobile }") Flexible. Scalable.
          v-col(cols="12" md="10").text-center
            p.font-s.grey--text Customizable based on what you need
          v-col(cols="12" md="10" lg="8").text-center
            p.font-xs.font-open-sans MYCURE is modularized and provides APIs for each so you are able to build from scratch, add missing modules while making your system secure and compliant.
        v-row(justify="center").pt-5
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
                  :image-width="!$isMobile ? '65%' : '60%'"
                  image-file-extension=".png"
                )
                br
                br
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
  computed: {
    panelHeight () {
      if (this.$isMobile) return 'auto';
      if (this.$isRegularScreen) return '475px';
      return '800px';
    },
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 100px;
}
</style>
