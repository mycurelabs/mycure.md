<template lang="pug">
  v-container.py-16
    v-row(justify="center").py-16
      generic-panel(
        hide-btn
        disable-parent-padding
      )
        v-row(justify="center" align="center")
          v-col(cols="12" sm="5" :class="{'order-last': $isMobile}")
            h2(v-if="content.title" :class="{'white--text': !notWhite}").mc-h2.mb-5 {{ content.title }}
            slot(name="description")
              p(v-if="content.description" :class="{'white--text': !notWhite}").mc-b2 {{ content.description }}
            div(v-if="!hideBtn" :class="{ 'text-center': $isMobile }")
              slot(name="button")
                signup-button(
                  depressed
                  :color="notWhite ? 'primary' : 'success'"
                  class="rounded-md"
                  :width="!$isWideScreen ? '228px' : '300'"
                  :height="!$isWideScreen ? '59px' : '73.68'"
                ).text-none
                  span.mc-btn1.white--text Get Started Free
          v-spacer(v-if="!$isMobile")
          v-col(cols="12" md="6" :class="{'text-center': $isMobile}")
            slot(name="video")
              picture-source(
                v-if="!showVideo"
                v-bind="getImageBindings(content.imageBindings)"
                @click="showVideo = true"
              )
              iframe(
                v-else
                :width="$isMobile ? '300': '560'"
                :height="$isMobile ? '168.75': '315'"
                :src="`${content.video}?autoplay=1`"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay;"
                allowfullscreen
              )
              //- v-skeleton-loader(type="image" height="100%")
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';
export default {
  components: {
    GenericPanel,
    PictureSource,
    SignupButton,
  },
  props: {
    /**
     * Content to display
     * @type {Object}
     * @param {String} title - panel main title
     * @param {String} description - panel content
     * @param {Object} imageBindings - description of image to display with content
     *   @param {String} customPath - path to folder of image
     *   @param {String} image - image name with extension
     *   @param {String} mobileImage -image name with extension for display on mobile devices
     *   @param {String} imageAlt - alt message of image
     */
    content: {
      type: Object,
      default: () => ({}),
    },
    hideBtn: {
      type: Boolean,
      default: false,
    },
    notWhite: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      showVideo: false,
    };
  },
  methods: {
    getImageBindings (imageBindings) {
      const [image, extension] = imageBindings.mobileImage && this.$isMobile
        ? imageBindings.mobileImage.split('.')
        : imageBindings.image.split('.');
      const bindings = {
        ...imageBindings,
        image,
        imageFileExtension: `.${extension}`,
        imageAlt: imageBindings.imageAlt || imageBindings.alt || this.content.title,
        extensionExclusive: imageBindings.extensionExclusive || (imageBindings.mobileImage && this.$isMobile),
        imageWidth: imageBindings.width,
        imageHeight: imageBindings.height,
      };
      return bindings;
    },
  },
};
</script>

<style scoped>
</style>
