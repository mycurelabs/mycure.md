<template lang="pug">
  picture
    source(
      v-for="(source, key) in sourceTypes"
      :key="key"
      :srcset="getSrcSetValue(source, image)"
      :type="`image/${source}`"
    )
    img(
      v-lazy="require(`~/assets/images/${this.customPath}${this.image}.png`)"
      :width="imageWidth"
      :height="imageHeight"
      :alt="imageAlt"
      :class="imageClasses"
      :style="imageStyles"
      @load="onLoad"
    )
</template>

<script>
// utils
import parseSrcSet from '~/utils/image-src-set';

export default {
  props: {
    /**
     * Path from root images folder
     * @type {String}
     * @example features/  (~/assets/images/features/)
     */
    customPath: {
      type: String,
      default: '',
    },
    /**
     * If the passed file extension is the only source type to include
     * @type {Boolean}
     */
    extensionExclusive: {
      type: Boolean,
      default: false,
    },
    /**
     * List of source types
     * @type {Array}
     */
    imageSources: {
      type: Array,
      default: () => (['webp', 'png']),
    },
    /**
     * Image file name (without extension)
     * @type {String}
     */
    image: {
      type: [String, Number],
      required: true,
    },
    /**
     * Image css styles
     * @type {Object}
     */
    imageStyles: {
      type: Object,
      default: () => ({}),
    },
    /**
     * Width of image
     * @type {String, Number}
     */
    imageWidth: {
      type: [String, Number],
      default: '100%',
    },
    /**
     * Height of image
     * @type {String, Number}
     */
    imageHeight: {
      type: [String, Number],
      default: 'auto',
    },
    /**
     * Alt value of image
     * @type {String}
     */
    imageAlt: {
      type: String,
      default: 'MYCURE image',
    },
    /**
     * File extension of image
     * @type {String}
     * @example .webp
     */
    imageFileExtension: {
      type: String,
      required: true,
    },
    /**
     * List of classes to apply to image
     * @type {Array}
     * @example ['ma-1', 'pt-2']
     */
    imageClasses: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    sourceTypes () {
      return this.extensionExclusive
        ? this.imageSources.filter(source => source === this.imageFileExtension)
        : this.imageSources;
    },
  },
  methods: {
    getSrcSetValue (source, image) {
      return parseSrcSet(source, image, this.customPath);
    },
    onLoad () {
      this.$emit('load');
    },
  },
};
</script>
