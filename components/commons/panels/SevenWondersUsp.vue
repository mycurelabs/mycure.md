<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      no-gutters
      :style="{ height: $isMobile ? mobileHeight : webHeight }"
    )
      v-col(cols="10" md="4" offset-md="1" :class="{ 'order-last' : !$isMobile }" :align-self="$isMobile ? 'end' : 'center'")
        picture-source(
          v-if="image"
          extension-exclusive
          :image="image"
          :image-alt="image"
          image-file-extension=".png"
          :custom-path="customImagePath"
        )
      v-col(cols="12" md="5" :class="{ 'text-center' : $isMobile }" :align-self="$isMobile ? 'start' : 'center'")
        p(:class="metaTitleClasses").font-weight-bold.primary--text {{ uspMetaTitle }}
        h1(:class="titleClasses") {{ uspTitle }}
        p(:class="descriptionClasses").grey--text.font-open-sans {{ uspDescription }}
        br
        template(v-if="slottedBtn")
          slot(name="usp btn")
        mc-btn(
          v-else
          depressed
          :color="btnColor"
          small
          tile
          :event-label="`${title} USP button`"
          @click="$emit('click')"
        ).text-none.letter-spacing-normal {{ btnText }}
</template>

<script>
import classBinder from '~/utils/class-binder';
import { parseTextWithNewLine } from '~/utils/newline';
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
    parseTitle: {
      type: [Boolean, String],
      default: false,
    },
    parseTitleFields: {
      type: Array,
      default: () => ([]),
    },
    /**
     * Meta title
     * @type {Boolean | String}
     * 'mobile | regular | wide'
     */
    parseMetaTitle: {
      type: [Boolean, String],
      default: false,
    },
    parseMetaTitleFields: {
      type: Array,
      default: () => ([]),
    },
    // - Button options
    btnText: {
      type: String,
      default: 'Get Started',
    },
    btnColor: {
      type: String,
      default: 'success',
    },
    // - If custom btn
    slottedBtn: {
      type: Boolean,
      default: false,
    },
    // - USP Image (Name without file extension)
    image: {
      type: String,
      default: null,
    },
    // - Custom directory
    customImagePath: {
      type: String,
      default: '',
    },
    // - Panel height
    webHeight: {
      type: String,
      default: '650px',
    },
    mobileHeight: {
      type: String,
      default: '700px',
    },
  },
  computed: {
    // NOTE: For customizations
    uspTitle () {
      if (!this.toParse(this.parseTitle)) return this.title;
      return parseTextWithNewLine(this.title, this.parseTitleFields);
    },
    uspMetaTitle () {
      if (!this.toParse(this.parseMetaTitle)) return this.metaTitle;
      return parseTextWithNewLine(this.metaTitle, this.parseMetaTitleFields);
    },
    uspDescription () {
      return this.description;
    },
    // Classes
    titleClasses () {
      const classes = classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-xl'],
      });
      return [
        'mb-8',
        { 'pre-white-space': this.toParse(this.parseTitle) },
        classes,
      ];
    },
    metaTitleClasses () {
      const classes = classBinder(this, {
        mobile: ['font-s'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
      return [
        'font-open-sans',
        { 'pre-white-space': this.toParse(this.parseMetaTitle) },
        classes,
      ];
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs', 'text-center'],
        regular: ['font-s', 'text-justify'],
      });
    },
  },
  methods: {
    toParse (parseFlag) {
      if (typeof (parseFlag) === 'string') {
        switch (parseFlag) {
          case 'mobile': return this.$isMobile;
          case 'regular': return this.$isRegularScreen;
          case 'wide': return this.$isWideScreen;
          default: return !this.$isMobile;
        }
      }
      return parseFlag && !this.$isMobile;
    },
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}
</style>
