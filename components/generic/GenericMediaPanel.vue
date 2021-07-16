<template lang="pug">
  v-container
    v-row(justify="center")
      generic-sub-page-panel(
        v-bind="getPanelBindings(content)"
        :hide-btn="hideBtn"
        :disable-parent-padding="disableParentPadding"
      )
        template(slot="content")
          div
            slot(name="content")
              p(:class="contentClasses || defaultContentClasses") {{ content.description }}
          slot(name="additional-content")
        template(slot="image" v-if="content.imageBindings")
          picture-source(
            v-bind="getImageBindings(content.imageBindings)"
          )
        template(slot="cta-button")
          slot(name="cta-button")
</template>

<script>
import GenericSubPagePanel from '~/components/generic/GenericSubPagePanel';
import PictureSource from '~/components/commons/PictureSource';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GenericSubPagePanel,
    PictureSource,
  },
  props: {
    /**
     * Content to display
     * @type {Object}
     * @param centerPanelTitle - short statement for the content placed at the top-center
     * @param superTitle - subheader or pre-title
     * @param {String} title - panel main title
     * @param {String} description - panel content
     * @param {String} contentAlign - which side to put the content
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
     * List of center panel title classes
     * @type {Array, Object}
     */
    centerPanelTitleClasses: {
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
     * List of super title classes
     * @type {Array, Object}
     */
    superTitleClasses: {
      type: [Array, Object],
      default: undefined,
    },
    /**
     * Adjusts alignment of elements in regards to the y-axis
     * @type {String}
     */
    align: {
      type: String,
      default: undefined,
    },
    /**
     * Adjusts alignment of elements in regards to the x-axis
     * @type {String}
     */
    justify: {
      type: String,
      default: 'center',
    },
    /**
     * Number of columns specified for generic sub page panel
     * @type {Number | String}
     *
     */
    containerColumn: {
      type: [Number, String],
      default: '10',
    },
  },
  data () {
    this.defaultTitleClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.defaultContentClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    return {};
  },
  computed: {
    defaultSuperTitleClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
        'font-open-sans',
        'font-weight-bold',
        'primary--text',
      ];
    },
  },
  methods: {
    getPanelBindings (content) {
      const contentColumnBindings = {
        cols: 12,
        md: 5,
        // alignSelf: 'center',
        ...content.contentAlign === 'right' && { offsetMd: 1 },
      };
      const mediaColumnBindings = {
        cols: 12,
        md: 6,
        ...content.contentAlign === 'left' && { offsetMd: 1 },
      };
      const panelBindings = {
        centerPanelTitleClasses: this.centerPanelTitleClasses,
        titleClasses: this.titleClasses ? this.titleClasses : this.defaultTitleClasses,
        contentClasses: this.contentClasses ? this.contentClasses : this.defaultContentClasses,
        superTitleClasses: this.superTitleClasses ? this.superTitleClasses : this.defaultSuperTitleClasses,
        contentColumnBindings,
        mediaColumnBindings,
        centerPanelTitle: content.centerPanelTitle,
        title: content.title,
        superTitle: content.superTitle,
        description: content.description,
        contentRight: content.contentAlign === 'right',
        genericPanelBindings: {
          justify: this.justify,
          align: this.align,
        },
      };
      return panelBindings;
    },
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
      };
      return bindings;
    },
  },
};
</script>
