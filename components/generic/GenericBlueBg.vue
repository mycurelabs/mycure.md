<template lang="pug">
  div.main-container
    div
      picture-source(
        v-if="!hideDots"
        image-file-extension="png"
        image="dots-left"
        image-alt="dots gradient"
        :image-width="dotsWidth"
        :image-height="dotsHeight"
        :extension-exclusive="true"
        custom-path="commons/"
        :class="largeDots ? 'left-center-large' : 'left-center'"
      )
      picture-source(
        v-if="!hideDots"
        image-file-extension="png"
        image="dots-right"
        image-alt="dots gradient"
        :image-width="dotsWidth"
        :image-height="dotsHeight"
        :extension-exclusive="true"
        custom-path="commons/"
        :class="largeDots ? 'right-center-large' : 'right-center'"
      )
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
    hideDots: Boolean,
  },
  computed: {
    dotsWidth () {
      if (this.largeDots) {
        return this.$isMobile ? '139.5' : this.$isRegularScreen ? '195.3' : '279';
      } else {
        return this.$isMobile ? '77.5' : this.$isRegularScreen ? '108.5' : '155';
      }
    },
    dotsHeight () {
      if (this.largeDots) {
        return this.$isMobile ? '233.46' : this.$isRegularScreen ? '326.844' : '466.92';
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

.left-center-large {
  position: absolute;
  top: 15%;
  left: 0;
  z-index: 2;
}
.right-center-large {
  position: absolute;
  bottom: 15%;
  right: 0;
  z-index: 2;
}
.holiday-bg-png {
  background-size: cover;
  background-image: url('../../assets/images/special/Homepage-herobg-std.png');
}

.holiday-bg-webp {
  background-size: cover;
  background-image: url('../../assets/images/special/Homepage-herobg-std.webp');
}

@media screen and (min-width: 1920px) {
  .holiday-bg-png {
    background-image: url('../../assets/images/special/Homepage-herobg-wid.png');
  }
  .holiday-bg-webp {
    background-image: url('../../assets/images/special/Homepage-herobg-wid.webp');
  }
}
</style>
