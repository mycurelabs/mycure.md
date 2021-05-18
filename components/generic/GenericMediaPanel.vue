<template lang="pug">
  v-container
    v-row(justify="center")
      generic-sub-page-panel(v-bind="getPanelBindings(content)" :hide-btn="hideBtn")
        template(slot="content")
          p(v-if="typeof(content.description) === 'string'" :class="descriptionClasses") {{ content.description }}
          template(v-else)
            p(v-for="(description, key) in content.description" :key="key" :class="descriptionClasses") {{ content.description }}
        template(slot="image" v-if="content.imageBindings")
          picture-source(
            v-bind="getImageBindings(content.imageBindings)"
          )
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
  },
  computed: {
    titleClasses () {
      const titleClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'lh-title',
        'primary--text',
        'font-weight-medium',
      ];
      return titleClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
  },
  methods: {
    getPanelBindings (content) {
      const contentColumnBindings = {
        cols: 12,
        md: 5,
        alignSelf: 'center',
        ...content.contentAlign === 'right' && { offsetMd: 1 },
      };
      const mediaColumnBindings = {
        cols: 10,
        md: 6,
        ...content.contentAlign === 'left' && { offsetMd: 1 },
      };
      const panelBindings = {
        titleClasses: this.titleClasses,
        contentClasses: this.descriptionClasses,
        contentColumnBindings,
        mediaColumnBindings,
        title: content.title,
        description: content.description,
        contentRight: content.contentAlign === 'right',
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
        imageAlt: imageBindings.alt || this.content.title,
        extensionExclusive: imageBindings.mobileImage && this.$isMobile,
      };
      console.log('bindings', bindings);
      return bindings;
    },
  },
};
</script>
