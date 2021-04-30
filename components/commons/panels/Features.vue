<template lang="pug">
  v-container.container
    v-row(justify="center" align="center" :style="{ height: $isMobile ? 'auto' : panelHeight }")
      v-col(cols="12" md="10")
        v-row(justify="center")
          v-col(cols="12" :md="titleColSize").text-center
            strong(v-if="metaTitle").font-xs.primary--text {{ metaTitle }}
            h1(:class="titleClasses").lh-title {{ title }}
          v-col(cols="12" :md="contentColSize").text-center.py-3
            p(:class="descriptionClasses").grey--text.font-open-sans {{ description }}
          v-col(cols="12" :md="iconContainerColSize")
            v-row(justify="center")
              v-col(cols="6" :md="iconColSize" v-for="(item, key) in items" :key="key").text-center
                picture-source(
                  v-if="item.icon"
                  :extension-exclusive="extensionExclusive"
                  :custom-path="imageDir"
                  :image="item.icon"
                  :image-alt="item.title"
                  :image-file-extension="item.iconExtension || '.png'"
                  :image-width="!$isMobile ? imageWidth : '60%'"
                )
                br
                h3.font-xs.font-open-sans.grey--text {{ item.title }}
                p(v-if="item.description").font-xs.grey--text {{ item.description }}
                nuxt-link(v-if="!hideLearnMore && item.route" :to="{ name: item.route }").primary--text.font-weight-bold.learnLink Learn more
        slot(name="additional-content")
</template>

<script>
import classBinder from '~/utils/class-binder';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
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
    // - Space for each icon
    iconColSize: {
      type: [Number, String],
      default: '4',
    },
    // - Height of panel
    panelHeight: {
      type: String,
      default: '50vh',
    },
  },
  computed: {
    titleClasses () {
      return classBinder(this, {
        mobile: ['font-s'],
        regular: ['font-l'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
      });
    },
  },
};
</script>

<style scoped>
.learnLink {
  text-decoration: none;
}
.container {
  padding-bottom: 100px;
  padding-top: 10px;
}
</style>
