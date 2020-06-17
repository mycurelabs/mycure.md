<template lang="pug">
  div(:class="[...mainContainerClasses]" :style="containerStyleConfig")
    //- Web background
    picture-source(
      v-if="!$isMobile && !loading"
      :customPath="customPath"
      :image="backgroundImage"
      :imageStyles="backgroundImageConfigs"
      imageAlt="MYCURE Media"
      :imageFileExtension="backgroundImageFileExtension"
      :extensionExclusive="backgroundImageFileExtensionExclusive"
    ).source-image
    v-container.content
      slot(name="content")
</template>

<script>
// components
import PictureSource from '~/components/commons/PictureSource';

export default {
  components: { PictureSource },
  props: {
    /**
     * Background image file in web view (without file extension)
     * @type {String}
     */
    backgroundImage: {
      type: String,
      default: null,
    },
    /**
     * File extension of web background image
     * @type {String}
     * @example .webp
     */
    backgroundImageFileExtension: {
      type: String,
      required: true,
    },
    /**
     * If background image file extension will be the only source
     * @type {Boolean}
     */
    backgroundImageFileExtensionExclusive: {
      type: Boolean,
      required: false,
    },
    /**
     * Background image file in mobile view (with file extension)
     * @type {String}
     */
    backgroundImageMobile: {
      type: String,
      default: null,
    },
    /**
     * Custom path of image files from root images folder
     * @type {String}
     * @example features/
     *  - will result to ~/assets/images/features/
     */
    customPath: {
      type: String,
      default: '',
    },
    /**
     * Styles for the background image (web)
     * @type {Object}
     */
    backgroundImageConfigs: {
      type: Object,
      default: () => ({
        width: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
      }),
    },
    /**
     * Styles for the background image (mobile)
     * @type {Object}
     */
    backgroundImageMobileConfigs: {
      type: Object,
      default: () => ({
        'background-size': 'cover',
        'background-position': 'center',
      }),
    },
    /**
     * Styles for the main component node when in web view
     * @type {Object}
     */
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
        : defaultClasses;
    },
    containerStyleConfig () {
      return this.$isMobile
        ? this.mobileStyleConfig
        : this.webContainerStyleConfigs;
    },
    // Sets the mobile background
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
}
.content {
  position: relative;
  height: 100%;
}
</style>
