<template lang="pug">
  div(:class="[...mainContainerClasses]" :style="backgroundImageStyleConfig")
    v-container
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
        'background-size': 'cover',
        'background-position': 'top',
      }),
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
      if (!this.backgroundImage && !this.isMobile) {
        return {};
      }
      if (!this.backgroundImageMobile && this.isMobile) {
        return {};
      }
      const image = this.isMobile ? this.backgroundImageMobile : this.backgroundImage;
      const styleConfig = {
        'background-image': `url(${require(`~/assets/images/${this.customPath}${image}`)})`,
        ...this.isMobile && this.backgroundImageMobileConfigs,
        ...!this.isMobile && this.backgroundImageConfigs,
      };
      return styleConfig;
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
  min-height: 110vh !important;
}
</style>
