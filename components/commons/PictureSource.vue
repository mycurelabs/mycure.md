<template lang="pug">
  picture
    source(
      v-for="(source, key) in imageSources"
      :key="key"
      :srcset="getSrcSetValue(source, image)"
      :type="`image/${source}`"
    )
    img(
      v-lazy="require(`~/assets/images/${this.customPath}${this.image}${this.imageFileExtension}`)"
      :width="imageWidth"
      :alt="imageAlt"
      :class="imageClasses"
    )
</template>

<script>
// utils
import parseSrcSet from '~/utils/image-src-set';

export default {
  props: {
    imageSources: {
      type: Array,
      default: () => (['webp', 'png']),
    },
    customPath: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
    imageWidth: {
      type: String,
      default: '100%',
    },
    imageAlt: {
      type: String,
      default: 'Content image',
    },
    imageFileExtension: {
      type: String,
      required: true,
    },
    imageClasses: {
      type: Array,
      default: () => ([]),
    },
  },
  methods: {
    getSrcSetValue (source, image) {
      return parseSrcSet(source, image, this.customPath);
    },
  },
};
</script>