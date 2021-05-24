<template lang="pug">
  v-container
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
        template(slot="image")
          img(
            :src="require(`~/assets/images/${customImagePath}${image}.png`)"
            :alt="image"
            :width="imageWidth"
          )
        div(slot="cta-button" :class="{'text-center': $isMobile}")
          signup-button(
            depressed
            rounded
            large
            :class="btnClasses"
            :color="btnColor"
          ).text-none.letter-spacing-normal {{ btnText }}

        //- v-col(
        //-   cols="10"
        //-   :md="imageCol"
        //-   :offset-md="imageColOffset"
        //-   :class="[{ 'order-last' : !$isMobile }, imageAlignment]"
        //-   :align-self="$isMobile ? 'end' : 'center'"
        //- )
        //-   //- picture-source(
        //-   //-   extension-exclusive
        //-   //-   :image="image"
        //-   //-   :image-alt="image"
        //-   //-   image-file-extension=".png"
        //-   //-   :custom-path="customImagePath"
        //-   //-   :image-width="imageWidth"
        //-   //- )
        //-   img(
        //-     :src="require(`~/assets/images/${customImagePath}${image}.png`)"
        //-     :alt="image"
        //-     :width="imageWidth"
        //-   )
        //- v-col(cols="12" :md="textCol" offset-md="1" :class="{ 'text-center' : $isMobile }" :align-self="$isMobile ? 'start' : 'center'")
        //-   h1(v-if="metaTitle" :class="superTitleClasses").font-weight-bold.primary--text {{ superTitle }}
        //-   p(:class="titleClasses") {{ uspTitle }}
        //-   p(:class="descriptionClasses").font-gray.font-open-sans {{ uspDescription }}
        //-   br
        //-   template(v-if="slottedBtn")
        //-     slot(name="usp btn")
        //-   signup-button(
        //-     v-else-if="!hideBtn"
        //-     depressed
        //-     rounded
        //-     :class="descriptionClasses"
        //-     :large="!$isMobile"
        //-     :color="btnColor"
        //-   ).text-none.letter-spacing-normal {{ btnText }}
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
      default: '650px',
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
          regular: ['font-xs', 'text-justify'],
          wide: ['font-s', 'text-justify'],
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
@media screen and (max-width: 1080px) {
  .usp-container {
    padding-bottom: 50px;
  }
}
</style>
