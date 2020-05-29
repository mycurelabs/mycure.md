<template lang="pug">
  div(:class="[...mainContainerClasses]" :style="backgroundImageStyleConfig")
    img(v-if="!isMobile" :src="imageSrc").source-image
    v-container.content
      slot(name="content")
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: null,
    },
    backgroundImageMobile: {
      type: String,
      default: null,
    },
    customPath: {
      type: String,
      default: '',
    },
    backgroundImageMobileConfigs: {
      type: Object,
      default: () => ({
        'background-size': 'cover',
        'background-position': 'center',
      }),
    },
  },
  data () {
    return {
      isMobile: true,
    };
  },
  computed: {
    mainContainerClasses () {
      const defaultClasses = ['main-container', 'white'];
      return this.isMobile
        ? defaultClasses.push('pt-10', 'mt-10')
        : defaultClasses;
    },
    backgroundImageStyleConfig () {
      if (!this.isMobile) {
        return;
      }
      if (!this.backgroundImageMobile && this.isMobile) {
        return {};
      }
      const styleConfig = {
        'background-image': `url(${require(`~/assets/images/${this.customPath}${this.backgroundImageMobile}`)})`,
        ...this.backgroundImageMobileConfigs,
      };
      return styleConfig;
    },
    imageSrc () {
      return require(`~/assets/images/${this.backgroundImage}`);
    },
  },
  watch: {
    $isMobile (val) {
      this.isMobile = val;
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
};
</script>

<style scoped>
.main-container {
  width: 100vw;
  min-height: 100vh;
}
.source-image {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.content {
  position: relative;
}
</style>
