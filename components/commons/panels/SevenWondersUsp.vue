<template lang="pug">
  div(:class="{'mx-n3 mt-n5': hasCustomBackground }").main-container
    div(v-if="hasCustomBackground && backgroundImage && !$isMobile")
      img(
        :src="require(`~/assets/images/${customImagePath}${backgroundImage}.png`)"
        :alt="title"
      ).usp-bg
    v-container.content
      v-row(justify="center" align="center" :style="{ height: panelHeight }")
        generic-sub-page-panel(
          :title="uspTitle"
          :title-classes="titleClasses"
          :super-title="superTitle"
          :super-title-classes="superTitleClasses"
          :content="uspDescription"
          :content-classes="descriptionClasses"
          :content-column-bindings="contentColumnBindings"
          :media-column-bindings="mediaColumnBindings"
          :generic-panel-bindings="genericPanelBindings"
        )
          template(v-if="slottedTitle" slot="title")
            slot(name="title")
          template(slot="image" v-if="!hasCustomBackground || $isMobile")
            img(
              :src="require(`~/assets/images/${customImagePath}${image}.png`)"
              :alt="image"
              :width="imageWidth"
            )
          div(slot="cta-button" :class="{'text-center': $isMobile}")
            signup-button(
              depressed
              rounded
              :large="!$isWideScreen"
              :x-large="$isWideScreen"
              :class="btnClasses"
              :color="btnColor"
            ).text-none.letter-spacing-normal {{ btnText }}
</template>

<script>
import classBinder from '~/utils/class-binder';
import { parseTextWithNewLine } from '~/utils/newline';
import GenericSubPagePanel from '~/components/generic/GenericSubPagePanel';
// import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';

export default {
  components: {
    GenericSubPagePanel,
    // PictureSource,
    SignupButton,
  },
  props: {
    slottedTitle: {
      type: Boolean,
      default: false,
    },
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
      default: '100vh',
    },
    mobileHeight: {
      type: String,
      default: 'auto',
    },
    wideHeight: {
      type: String,
      default: '100vh',
    },
    // - Column for Text
    contentColumnBindings: {
      type: Object,
      default: () => ({
        cols: 12,
        md: 4,
        xl: 5,
      }),
    },
    // - Column for Image
    mediaColumnBindings: {
      type: Object,
      default: () => ({
        cols: 12,
        md: 7,
        offsetMd: 1,
        xl: 6,
      }),
    },
    // - Alignment of image
    imageAlign: {
      type: String,
      default: 'left',
    },
    // USP Custom background
    hasCustomBackground: {
      type: Boolean,
      default: false,
    },
    // Image file name without file extension
    backgroundImage: {
      type: String,
      default: null,
    },
  },
  computed: {
    // NOTE: For customizations
    uspTitle () {
      if (!this.toParse(this.parseTitle)) return this.title;
      return parseTextWithNewLine(this.title, this.parseTitleFields);
    },
    superTitle () {
      if (!this.toParse(this.parseMetaTitle)) return this.metaTitle;
      return parseTextWithNewLine(this.metaTitle, this.parseMetaTitleFields);
    },
    uspDescription () {
      return this.description;
    },
    // Classes
    titleClasses () {
      const classes = classBinder(this, {
        mobile: ['font-m', 'text-center'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
      return [
        'lh-title',
        'font-weight-bold',
        'font-usp-primary',
        { 'pre-white-space': this.toParse(this.parseTitle) },
        classes,
      ];
    },
    superTitleClasses () {
      const classes = classBinder(this, {
        mobile: ['font-xs', 'text-center'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
      return [
        'font-open-sans',
        'primary--text',
        { 'pre-white-space': this.toParse(this.parseMetaTitle) },
        classes,
      ];
    },
    descriptionClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
    },
    btnClasses () {
      return [
        classBinder(this, {
          mobile: ['text-center'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
      ];
    },
    panelHeight () {
      if (this.$isMobile) return this.mobileHeight;
      if (this.$isRegularScreen) return this.regularHeight;
      return this.wideHeight;
    },
    imageAlignment () {
      switch (this.imageAlign) {
        case 'left': return 'text-left';
        case 'right': return 'text-right';
        case 'center': return 'text-center';
        default: return 'text-left';
      }
    },
    genericPanelBindings () {
      return {
        justify: 'center',
        align: 'center',
      };
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
.usp-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  object-fit: cover;
}
.main-container {
  position: relative;
}
.content {
  z-index: 2;
  position: relative;
}

@media screen and (max-width: 1080px) {
  .usp-container {
    padding-bottom: 50px;
  }
}
</style>
