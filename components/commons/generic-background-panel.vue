<template lang="pug">
  div(:class="[...mainContainerClasses]" :style="containerStyleConfig")
    img(v-if="!$isMobile && !loading" :src="imageSrc" alt="Usp background" :style="webStyleConfig").source-image
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
    backgroundImageConfigs: {
      type: Object,
      default: () => ({
        width: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
      }),
    },
    backgroundImageMobileConfigs: {
      type: Object,
      default: () => ({
        'background-size': 'cover',
        'background-position': 'center',
      }),
    },
    webContainerStyleConfigs: {
      type: Object,
      default: () => ({}),
    },
  },
  data () {
    return {
      loading: true,
    };
  },
  computed: {
    mainContainerClasses () {
      const defaultClasses = ['main-container', 'white'];
      return this.$isMobile
        ? defaultClasses.push('pt-10', 'mt-10')
        : defaultClasses.concat(this.customContainerClasses);
    },
    containerStyleConfig () {
      return this.$isMobile
        ? this.mobileStyleConfig
        : this.webContainerStyleConfigs;
    },
    webStyleConfig () {
      if (!this.backgroundImage) {
        return;
      }
      return this.backgroundImageConfigs;
    },
    mobileStyleConfig () {
      if ((!this.backgroundImageMobile && this.$isMobile) || this.loading) {
        return {};
      }
      const styleConfig = {
        'background-image': `url(${require(`~/assets/images/${this.customPath}${this.backgroundImageMobile}`)})`,
        ...this.backgroundImageMobileConfigs,
      };
      return styleConfig;
    },
    imageSrc () {
      return require(`~/assets/images/${this.customPath}${this.backgroundImage}`);
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped>
.main-container {
  width: 100vw;
  min-height: 100vh;
}
.content {
  position: relative;
}
</style>
