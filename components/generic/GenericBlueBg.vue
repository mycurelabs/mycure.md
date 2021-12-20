<template lang="pug">
  div.main-container
    div
      picture-source(
        image-file-extension="png"
        image="dots-left"
        image-alt="dots gradient"
        :image-width="dotsWidth"
        :image-height="dotsHeight"
        :extension-exclusive="true"
        custom-path="commons/"
      ).left-center
      picture-source(
        image-file-extension="png"
        image="dots-right"
        image-alt="dots gradient"
        :image-width="dotsWidth"
        :image-height="dotsHeight"
        :extension-exclusive="true"
        custom-path="commons/"
      ).right-center
    div.content
      slot(name="default")
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  props: {
    largeDots: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dotsWidth () {
      if (this.largeDots) {
        return this.$isMobile ? '155' : this.$isRegularScreen ? '217' : '310';
      } else {
        return this.$isMobile ? '77.5' : this.$isRegularScreen ? '108.5' : '155';
      }
    },
    dotsHeight () {
      if (this.largeDots) {
        return this.$isMobile ? '259.4' : this.$isRegularScreen ? '363.16' : '518.8';
      } else {
        return this.$isMobile ? '129.7' : this.$isRegularScreen ? '181.58' : '259.4';
      }
    },
  },
};
</script>

<style scoped>
.main-container {
  position: relative;
  background: radial-gradient(50% 50% at 50% 50%, #0099CC 0%, #0173C6 100%);
  /* width: 100vw; */
}
.content {
  position: relative;
  z-index: 3;
}
.left-center {
  position: absolute;
  top: 10%;
  left: 0;
  z-index: 2;
}
.right-center {
  position: absolute;
  bottom: 10%;
  right: 0;
  z-index: 2;
}
</style>
