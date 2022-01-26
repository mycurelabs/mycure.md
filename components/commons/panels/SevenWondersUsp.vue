<template lang="pug">
  div(:class="{'mx-n3 mt-n5': hasCustomBackground }").main-container
    div(v-if="hasCustomBackground && backgroundImage && !$isMobile")
      picture-source(
        image-file-extension="png"
        :image="image"
        :image-alt="imageAlt || title"
        :image-styles="backgroundStyle"
        :extension-exclusive="extensionExclusive"
        :custom-path="customImagePath"
      )
    v-container.content
      v-row(justify="center" :style="{ height: panelHeight }" :class="[{'py-16': !$isMobile}, {'mt-16': $isWideScreen}]")
        generic-sub-page-panel(
          :content="uspDescription"
          :content-classes="descriptionClasses"
          :content-column-bindings="contentColumnBindings"
          :media-column-bindings="mediaColumnBindings"
          :generic-panel-bindings="genericPanelBindings"
        )
          template(slot="title")
            h2(:class="titleClasses") {{ uspTitle }}
          template(slot="super-title")
            h1(:class="superTitleClasses") {{ superTitle }}
          template(slot="image" v-if="!hasCustomBackground || $isMobile")
            img(
              :src="require(`~/assets/images/${customImagePath}${image}.png`)"
              :alt="image"
              :width="imageWidth"
            ).mb-4
          template(slot="cta-button")
            div(:class="{'text-center': $isMobile}")
              slot(name="cta-button")
                signup-button(
                  depressed
                  class="rounded-md"
                  :width="!$isWideScreen ? '228px' : '300'"
                  :height="!$isWideScreen ? '59px' : '73.68'"
                  :color="btnColor"
                ).text-none
                  span.mc-btn1 {{ btnText }}
</template>

<script>
import { parseTextWithNewLine } from '~/utils/newline';
import GenericSubPagePanel from '~/components/generic/GenericSubPagePanel';
import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';
export default {
  components: {
    GenericSubPagePanel,
    PictureSource,
    SignupButton,
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
      default: 'primary',
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
    extensionExclusive: {
      type: Boolean,
      default: false,
    },
    backgroundImageFileExtension: {
      type: String,
      default: '.png',
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
        md: 5,
        xl: 6,
      }),
    },
    // - Column for Image
    mediaColumnBindings: {
      type: Object,
      default: () => ({
        cols: 12,
        md: 6,
        offsetMd: 1,
        xl: 5,
      }),
    },
    // - Alignment of image
    imageAlign: {
      type: String,
      default: 'left',
    },
    // - Custom alt of image
    imageAlt: {
      type: String,
      default: null,
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
    backgroundImgPos: {
      type: String,
      default: '47%',
    },
    backgroundImgWidth: {
      type: String,
      default: '47%',
    },
  },
  data () {
    this.btnClasses = ['mc-btn1'];
    return {};
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
      return [
        'mc-h1',
        'lh-title',
        'font-weight-bold',
        { 'pre-white-space': this.toParse(this.parseTitle) },
        { 'text-center': this.$isMobile },
      ];
    },
    superTitleClasses () {
      return [
        'mc-h6',
        'font-open-sans',
        { 'pre-white-space': this.toParse(this.parseMetaTitle) },
        { 'text-center': this.$isMobile },
      ];
    },
    descriptionClasses () {
      return [
        'mc-b1',
        'font-open-sans',
        'font-gray',
        { 'text-center': this.$isMobile },
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
    backgroundStyle () {
      return {
        width: this.backgroundImgWidth,
        height: '100%',
        position: 'absolute',
        left: this.backgroundImgPos,
        top: '0',
        zIndex: '1',
        objectFit: 'contain',
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
.main-container {
  position: relative;
}
.content {
  z-index: 2;
  position: relative;
}
</style>
