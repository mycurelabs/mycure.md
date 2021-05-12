<template lang="pug">
  v-container(fluid :class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      :style="{ height: panelHeight }"
    )
      v-col(cols="10" :md="imageCol" :offset-md="imageColOffset" :class="{ 'order-last' : !$isMobile }" :align-self="$isMobile ? 'end' : 'center'")
        //- picture-source(
        //-   extension-exclusive
        //-   :image="image"
        //-   :image-alt="image"
        //-   image-file-extension=".png"
        //-   :custom-path="customImagePath"
        //-   :image-width="imageWidth"
        //- )
        img(
          :src="require(`~/assets/images/${customImagePath}${image}.png`)"
          :alt="image"
          :width="imageWidth"
        )
      v-col(cols="12" :md="textCol" offset-md="1" :class="{ 'text-center' : $isMobile }" :align-self="$isMobile ? 'start' : 'center'")
        p(v-if="metaTitle" :class="metaTitleClasses").font-weight-bold.primary--text {{ uspMetaTitle }}
        h1(:class="titleClasses") {{ uspTitle }}
        p(:class="descriptionClasses").grey--text.font-open-sans {{ uspDescription }}
        br
        template(v-if="slottedBtn")
          slot(name="usp btn")
        mc-btn(
          v-else-if="!hideBtn"
          depressed
          rounded
          :class="descriptionClasses"
          :large="!$isMobile"
          :color="btnColor"
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
    hideBtn: {
      type: Boolean,
      default: false,
    },
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
    // - USP Image width
    imageWidth: {
      type: String,
      default: '100%',
    },
    // - Custom directory
    customImagePath: {
      type: String,
      default: '',
    },
    // - Panel height
    regularHeight: {
      type: String,
      default: '650px',
    },
    mobileHeight: {
      type: String,
      default: '700px',
    },
    wideHeight: {
      type: String,
      default: '900px',
    },
    // - Column for Image
    imageCol: {
      type: [String, Number],
      default: '8',
    },
    imageColOffset: {
      type: [String, Number],
      default: '0',
    },
    // - Column for Text
    // - Note: This column is offsetted by 1
    textCol: {
      type: [String, Number],
      default: '3',
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
        regular: ['font-l'],
        wide: ['font-xl'],
      });
      return [
        'mb-8',
        'lh-title',
        { 'pre-white-space': this.toParse(this.parseTitle) },
        classes,
      ];
    },
    metaTitleClasses () {
      const classes = classBinder(this, {
        mobile: ['font-xs'],
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
        mobile: ['text-center'],
        regular: ['font-xs', 'text-justify'],
        wide: ['font-s', 'text-left'],
      });
    },
    panelHeight () {
      if (this.$isMobile) return this.mobileHeight;
      if (this.$isRegularScreen) return this.regularHeight;
      return this.wideHeight;
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
@media screen and (max-width: 1080px) {
  .usp-container {
    padding-bottom: 50px;
  }
}
</style>
