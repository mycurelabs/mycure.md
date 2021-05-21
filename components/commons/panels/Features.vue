<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12" :md="titleColSize").text-center
            strong(v-if="metaTitle" :class="metaTitleClasses").primary--text {{ metaTitle }}
            h2(:class="titleClasses").lh-title.font-weight-semibold {{ title }}
          v-col(cols="12" :md="contentColSize").text-center.py-3
            p(:class="descriptionClasses").font-open-sans.font-gray {{ description }}
          v-col(cols="12" :md="iconContainerColSize")
            v-row(justify="center")
              v-col(:cols="iconColSizeMobile" :md="iconColSize" v-for="(item, key) in items" :key="key").text-center
                picture-source(
                  v-if="item.icon"
                  :extension-exclusive="extensionExclusive"
                  :custom-path="imageDir"
                  :image="item.icon"
                  :image-alt="item.title"
                  :image-file-extension="item.iconExtension || '.png'"
                  :image-width="!$isMobile ? imageWidth : imageWidthMobile"
                )
                br
                h3(:class="itemTextClasses").font-open-sans.font-gray {{ item.title }}
                p(v-if="item.description" :class="itemTextClasses") {{ item.description }}
                nuxt-link(v-if="!hideLearnMore && item.route" :to="{ name: item.route }").primary--text.font-weight-bold.learnLink Learn more
          slot(name="additional-content")
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericPanel,
    PictureSource,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    metaTitle: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => ([]),
    },
    imageDir: {
      type: String,
      default: '',
    },
    imageWidth: {
      type: [String, Number],
      default: '40%',
    },
    imageWidthMobile: {
      type: [String, Number],
      default: '60%',
    },
    extensionExclusive: {
      type: Boolean,
      default: false,
    },
    hideLearnMore: {
      type: Boolean,
      default: false,
    },
    // - Space for title
    titleColSize: {
      type: [Number, String],
      default: '8',
    },
    primaryTitle: {
      type: Boolean,
      default: false,
    },
    // - Space for description
    contentColSize: {
      type: [Number, String],
      default: '6',
    },
    // - Space for icons container
    iconContainerColSize: {
      type: [Number, String],
      default: '12',
    },
    // - Space for each icon (web)
    iconColSize: {
      type: [Number, String],
      default: '4',
    },
    // - Space for each icon (mobile)
    iconColSizeMobile: {
      type: [Number, String],
      default: '6',
    },
    // - Height of panel
    panelHeight: {
      type: String,
      default: '50vh',
    },
  },
  computed: {
    titleClasses () {
      return [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        { 'primary--text': this.primaryTitle },
      ];
    },
    metaTitleClasses () {
      return [
        classBinder(this, {
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
      ];
    },
    descriptionClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
      ];
    },
    itemTextClasses () {
      return [
        classBinder(this, {
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
      ];
    },
  },
};
</script>

<style scoped>
.learnLink {
  text-decoration: none;
}
</style>
