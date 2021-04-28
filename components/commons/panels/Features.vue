<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" :md="titleColSize" :class="{'text-center': !$isMobile }")
        strong(v-if="metaTitle").font-xs.primary--text {{ metaTitle }}
        h1(:class="titleClasses").lh-title {{ title }}
      v-col(cols="12" :md="contentColSize" :class="{'text-center': !$isMobile}")
        p(:class="descriptionClasses").grey--text.font-open-sans {{ description }}
      v-col(cols="12" md="8")
        v-row(justify="center" align="center")
          v-col(cols="12" md="4" v-for="(item, key) in items" :key="key").text-center
            picture-source(
              v-if="item.icon"
              :extension-exclusive="extensionExclusive"
              :custom-path="imageDir"
              :image="item.icon"
              :image-alt="item.title"
              :image-file-extension="item.iconExtension || '.png'"
              image-width="45%"
            )
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
    extensionExclusive: {
      type: Boolean,
      default: false,
    },
    hideLearnMore: {
      type: Boolean,
      default: false,
    },
    titleColSize: {
      type: [Number, String],
      default: '8',
    },
    contentColSize: {
      type: [Number, String],
      default: '6',
    },
  },
  computed: {
    titleClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
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
</style>
