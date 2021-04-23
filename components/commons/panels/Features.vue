<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" :md="titleColSize" :class="{'text-center': !$isMobile }")
        strong(v-if="metaTitle").font-xs.primary--text {{ metaTitle }}
        h1(:class="titleClasses").lh-title {{ title }}
      v-col(cols="12" :md="contentColSize" :class="{'text-center': !$isMobile}")
        p(:class="descriptionClasses").grey--text.font-open-sans {{ description }}
      v-col(cols="12")
        v-row(justify="center" align="center")
          v-col(cols="12" md="4" v-for="(item, key) in items" :key="key").text-center
            h3.font-s.grey--text {{ item.title }}
            p(v-if="item.description").font-xs.grey--text {{ item.description }}
            nuxt-link(v-if="!hideLearnMore && item.route" :to="{ name: item.route }").primary--text.font-weight-bold.learnLink Learn more
</template>

<script>
import classBinder from '~/utils/class-binder';
export default {
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
