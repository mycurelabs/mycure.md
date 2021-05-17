<template lang="pug">
  generic-panel
    v-col(sm="12" md="6")
      div
        slot(name="super-title")
          h3(v-if="superTitle") {{superTitle}}
      div.mb-10
        slot(name="title")
          h1(v-if="title") {{title}}
      div.mb-10
        slot(name="content")
          p(v-if="content") {{content}}
      div
        slot(name="cta-button")
          v-btn {{ctaButtonText}}
    v-col(sm="12" md="6").text-center
      slot(name="image")
        img(:width="width" :src="image")
</template>

<script>
import GenericPanel from './GenericPanel';
export default {
  components: {
    GenericPanel,
  },
  props: {
    superTitle: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    content: {
      type: String,
      default: undefined,
    },
    ctaButtonText: {
      type: String,
      default: 'Get Started',
    },
    width: {
      type: String,
      default: '100%',
    },
    image: {
      type: String,
      default: undefined,
    },
  },
};
</script>
