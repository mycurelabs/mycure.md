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
import classBinder from '~/utils/class-binder';
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
     * Content Title
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
     * If content and media should switch positions
     * @type {Boolean}
     */
    contentRight: {
      type: Boolean,
      default: false,
    },
    /**
     * Set column props of whole panel
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
     * Set row props of whole panel
     * @type {Object}
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
  computed: {
    defaultSuperTitleClasses () {
      return this.superTitleClasses
        ? this.superTitleClasses
        : classBinder(this, {
          regular: ['font-xs'],
          wide: ['font-s'],
        });
    },
    defaultTitleClasses () {
      const titleClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
          wide: ['font-2xl'],
        }),
        'font-weight-semibold',
      ];
      return this.titleClasses
        ? this.titleClasses
        : titleClasses;
    },
    defaultCenterPanelTitleClasses () {
      const centerPanelTitleClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'font-weight-semibold',
      ];
      return this.centerPanelTitleClasses
        ? this.centerPanelTitleClasses
        : centerPanelTitleClasses;
    },
    defaultContentClasses () {
      const contentClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return this.contentClasses
        ? this.contentClasses
        : contentClasses;
    },
    contentAlignment () {
      if (this.$isMobile) return false;
      return !this.contentRight;
    },
  },
};
</script>
