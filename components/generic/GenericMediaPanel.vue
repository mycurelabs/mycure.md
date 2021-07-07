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
    content: {
      type: Object,
      default: () => ({}),
    },
    hideBtn: {
      type: Boolean,
      default: false,
    },
    disableParentPadding: {
      type: Boolean,
      default: false,
    },
    centerPanelTitleClasses: {
      type: [Array, Object],
      default: undefined,
    },
    titleClasses: {
      type: [Array, Object],
      default: undefined,
    },
    contentClasses: {
      type: [Array, Object],
      default: undefined,
    },
    superTitleClasses: {
      type: [Array, Object],
      default: undefined,
    },
    align: {
      type: String,
      default: undefined,
    },
    justify: {
      type: String,
      default: 'center',
    },
  },
  computed: {
    defaultTitleClasses () {
      const titleClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'lh-title',
        'font-weight-semibold',
      ];
      return titleClasses;
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
      return contentClasses;
    },
    defaultSuperTitleClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs'],
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
