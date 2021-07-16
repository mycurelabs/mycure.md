<template lang="pug">
  generic-panel(
    :column="containerColumn"
    :row-bindings="genericPanelBindings"
    :disable-parent-padding="disableParentPadding"
  )
    v-col(v-if="centerPanelTitle" cols="12").text-center
      div.mb-10
        slot(name="center-panel-title")
          h2(:class="defaultCenterPanelTitleClasses") {{ centerPanelTitle }}
    v-col(v-bind="mediaColumnBindings" :class=" { 'order-last': contentAlignment }").text-center
      slot(name="image")
        img(:width="width" :src="image")
    v-col(v-bind="contentColumnBindings")
      div.mb-3
        slot(name="super-title")
          h3(:class="defaultSuperTitleClasses") {{superTitle}}
      div.mb-10
        slot(name="title")
          h2(:class="defaultTitleClasses") {{ title }}
      div.mb-10
        slot(name="content")
          p(v-if="content" :class="defaultContentClasses") {{ content }}
      div(v-if="!hideBtn")
        slot(name="cta-button")
          v-btn {{ ctaButtonText }}
    slot(name="additional-content")
</template>

<script>
import GenericPanel from './GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericPanel,
    PictureSource,
  },
  props: {
    /**
     * Short statement for the content placed at the top-center
     * @type {String}
     */
    centerPanelTitle: {
      type: String,
      default: undefined,
    },
    /**
     * Subheader or Pre-title
     * @type {String}
     */
    superTitle: {
      type: String,
      default: undefined,
    },
    /**
     * Main Title of content
     * @type {String}
     */
    title: {
      type: String,
      default: undefined,
    },
    /**
     * Paragraph with content
     * @type {String}
     */
    content: {
      type: String,
      default: undefined,
    },
    /**
     * Call to action text
     * @type {String}
     */
    ctaButtonText: {
      type: String,
      default: 'Get Started',
    },
    /**
     * If content should be in the right and media should be in the left
     * @type {Boolean}
     */
    contentRight: {
      type: Boolean,
      default: false,
    },
    /**
     * Number of columns of whole panel
     * @type {Number, String}
     */
    containerColumn: {
      type: [Number, String],
      default: '10',
    },
    /**
     * Set column props of content column
     * @type {Object}
     */
    contentColumnBindings: {
      type: Object,
      default: () => ({
        cols: 12,
        md: 6,
      }),
    },
    /**
     * Set column props of media column
     * @type {Object}
     */
    mediaColumnBindings: {
      type: Object,
      default: () => ({
        cols: 12,
        md: 6,
      }),
    },
    /**
     * Set props of whole panel
     * @type {Object}
     * @example {justify: 'center'}
     */
    genericPanelBindings: {
      type: Object,
      default: () => ({
        justify: 'center',
      }),
    },
    /**
     * Path to image source
     * @type {String}
     * @example "../../assets/images/logo.png"
     */
    image: {
      type: String,
      default: undefined,
    },
    /**
     * Image width
     * @type {String}
     */
    width: {
      type: String,
      default: '100%',
    },
    /**
     * If there should be no button
     * @type {Boolean}
     */
    hideBtn: {
      type: Boolean,
      default: false,
    },
    /**
     * If panel should have no padding in the y-axis
     * @type {Boolean}
     */
    disableParentPadding: {
      type: Boolean,
      default: false,
    },
    /**
     * List of super title classes
     * @type {Array, Object}
     */
    superTitleClasses: {
      type: [Array, Object],
      default: undefined,
    },
    /**
     * List of title classes
     * @type {Array, Object}
     */
    titleClasses: {
      type: [Array, Object],
      default: undefined,
    },
    /**
     * List of content classes
     * @type {Array, Object}
     */
    contentClasses: {
      type: [Array, Object],
      default: undefined,
    },
    /**
     * List of center panel title classes
     * @type {Array, Object}
     */
    centerPanelTitleClasses: {
      type: [Array, Object],
      default: undefined,
    },
  },
  data () {
    this.defaultTitleClasses = this.titleClasses ? this.titleClasses : ['mc-title-set-3', 'font-weight-semibold'];
    this.defaultSuperTitleClasses = this.superTitleClasses ? this.superTitleClasses : ['mc-metatitle-set-1'];
    this.defaultCenterPanelTitleClasses = this.centerPanelTitleClasses ? this.centerPanelTitleClasses : ['mc-title-set-1', 'font-weight-semibold'];
    this.defaultContentClasses = this.contentClasses ? this.contentClasses : ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.btnClasses = ['mc-button-set-1'];
    return {};
  },
  computed: {
    contentAlignment () {
      if (this.$isMobile) return false;
      return !this.contentRight;
    },
  },
};
</script>
