<template lang="pug">
  v-container
    //- COLUMN VIEW
    v-row(v-if="!centerMedia" justify="center").py-10
      //- Left column
      v-col(:align-self="alignLeftColumn" cols="12" :md="colsLeft" :offset-md="offsetColsLeft")
        picture-source(
          v-if="!$isMobile && contentAlignRight && webImage"
          :customPath="customImagePath"
          :extensionExclusive="extensionExclusive"
          :image="webImage"
          :imageAlt="imageAltValue"
          :imageFileExtension="fileExtension"
          :imageWidth="webImageWidth"
          :class="webImageClass"
        )
        template(v-if="contentAlignLeft")
          p(:v-show="withSubheader" :class="subHeaderClass").font-16.primary--text {{ subHeader }}
          h1(v-if="typeof(header) === 'string'" :class="panelHeaderClasses") {{ header }}
          h1(
            v-else-if="typeof(header) === 'object'"
            :class="[{'pre-white-space': $isRegularScreen}, ...panelHeaderClasses]"
          )
            | {{ header | parse-text }}
          //- MOBILE IMAGE
          br(v-if="$isMobile")
          div.text-center
            picture-source(
              v-if="$isMobile && !hideImageMobile && webImage"
              :customPath="customImagePath"
              :extensionExclusive="extensionExclusive"
              :image="mobileImage || webImage"
              :imageAlt="imageAltValue"
              :imageFileExtension="mobileFileExtension || fileExtension"
              :imageWidth="mobileImageWidth"
              :class="mobileImageClass"
            )
          br
          template(v-if="descriptions.length")
            template(v-for="description in descriptions")
              p(v-if="typeof(description) === 'string'").font-16.mt-3.font-gray.text-justify {{ description }}
              p(
                v-else-if="typeof(description) === 'object'"
                :class="{'pre-white-space': $isRegularScreen }"
              ).font-16.mt-3.font-gray.text-justify
                | {{ description | parse-text }}
            br
          slot(name="additional-content")
      //- Right Column
      v-col(:align-self="alignRightColumn" cols="12" :md="colsRight" :offset-md="offsetColsRight")
        picture-source(
          v-if="!$isMobile && contentAlignLeft && webImage"
          :customPath="customImagePath"
          :extensionExclusive="extensionExclusive"
          :image="webImage"
          :imageAlt="imageAltValue"
          :imageFileExtension="fileExtension"
          :imageWidth="webImageWidth"
          :class="webImageClass"
        )
        template(v-if="contentAlignRight")
          p(:v-show="withSubheader" :class="subHeaderClass").font-16.primary--text {{ subHeader }}
          h1(v-if="typeof(header) === 'string'" :class="panelHeaderClasses") {{ header }}
          h1(
            v-else-if="typeof(header) === 'object'"
            :class="[{'pre-white-space': $isRegularScreen}, ...panelHeaderClasses]"
          )
            | {{ header | parse-text }}
          //- MOBILE IMAGE
          br(v-if="$isMobile")
          div.text-center
            picture-source(
              v-if="$isMobile && !hideImageMobile && webImage"
              :customPath="customImagePath"
              :extensionExclusive="extensionExclusive"
              :image="mobileImage || webImage"
              :imageAlt="imageAltValue"
              :imageFileExtension="mobileFileExtension || fileExtension"
              :imageWidth="mobileImageWidth"
              :class="mobileImageClass"
            )
          br
          template(v-if="descriptions.length")
            template(v-for="description in descriptions")
              p(v-if="typeof(description) === 'string'").font-16.mt-3.font-gray.text-justify {{ description }}
              p(
                v-else-if="typeof(description) === 'object'"
                :class="{'pre-white-space': $isRegularScreen }"
              ).font-16.mt-3.font-gray.text-justify
                | {{ description | parse-text }}
            br
          slot(name="additional-content")
      //- ** DO NOT DELETE THIS YET **
      //- Mobile Image
      //- picture-source(
      //-   v-if="$isMobile && !hideImageMobile"
      //-   :customPath="customImagePath"
      //-   :extensionExclusive="extensionExclusive"
      //-   :image="mobileImage || webImage"
      //-   :imageAlt="imageAltValue"
      //-   :imageFileExtension="mobileFileExtension || fileExtension"
      //-   :imageWidth="mobileImageWidth"
      //-   :class="mobileImageClass"
      //- )
    //- CENTER VIEW
    v-row(v-else justify="center").py-10
      v-col(cols="12" md="10" :class="{'text-center': !$isMobile}")
        p(:v-show="withSubheader" :class="subHeaderClass").font-16.primary--text {{ subHeader }}
        h1(v-if="typeof(header) === 'string'" :class="panelHeaderClasses") {{ header }}
        h1(
          v-else-if="typeof(header) === 'object'"
          :class="[{'pre-white-space': $isRegularScreen}, ...panelHeaderClasses]"
        )
          | {{ header | parse-text }}
        //- Mobile image
        picture-source(
          v-if="$isMobile && !hideImageMobile && webImage"
          :customPath="customImagePath"
          :extensionExclusive="extensionExclusive"
          :image="mobileImage || webImage"
          :imageAlt="imageAltValue"
          :imageFileExtension="mobileFileExtension || fileExtension"
          :imageWidth="mobileImageWidth"
          :class="mobileImageClass"
        )
        br
        template(v-if="descriptions.length")
          template(v-for="description in descriptions")
            p(v-if="typeof(description) === 'string'").font-16.mt-3.font-gray.text-center {{ description }}
            p(
              v-else-if="typeof(description) === 'object'"
              :class="{'pre-white-space': $isRegularScreen }"
            ).font-16.mt-3.font-gray.text-center
              | {{ description | parse-text }}
          br
        slot(name="additional-content")
        picture-source(
          v-if="!$isMobile && webImage"
          :customPath="customImagePath"
          :extensionExclusive="extensionExclusive"
          :image="webImage"
          :imageAlt="imageAltValue"
          :imageFileExtension="fileExtension"
          :imageWidth="webImageWidth"
          :class="webImageClass"
        )
</template>

<script>
// components
import PictureSource from './PictureSource';
import { parseTextWithNewLine } from '~/utils/newline';

export default {
  components: { PictureSource },
  filters: {
    parseText (item) {
      return parseTextWithNewLine(item.text, item.parseFields);
    },
  },
  props: {
    /**
     * Alignment of left column
     * @type {String}
     */
    alignLeftColumn: {
      type: String,
      default: 'center',
    },
    /**
     * Alignment of right column
     * @type {String}
     */
    alignRightColumn: {
      type: String,
      default: 'center',
    },
    /**
     * Panel will have media centered instead of two columns
     * @type {Boolean}
     */
    centerMedia: {
      type: Boolean,
      default: false,
    },
    /**
     * Number of cols of the left column
     * @type {String, Number}
     */
    colsLeft: {
      type: [String, Number],
      default: '5',
    },
    /**
     * Number of cols of the right column
     * @type {String}
     */
    colsRight: {
      type: [String, Number],
      default: '6',
    },
    /**
     * If passed file extension is the only source to use
     * @type {Boolean}
     */
    extensionExclusive: {
      type: Boolean,
      default: false,
    },
    /**
     * Number of offset-cols of the left column
     * @type {String}
     */
    offsetColsLeft: {
      type: String,
      default: '0',
    },
    /**
     * Number of offset-cols of the right column
     */
    offsetColsRight: {
      type: String,
      default: '0',
    },
    /**
     * Text will be at the left side
     * @type {Boolean}
     */
    contentAlignLeft: {
      type: Boolean,
      default: false,
    },
    /**
     * Text will be at the right side
     * @type {Boolean}
     */
    contentAlignRight: {
      type: Boolean,
      default: false,
    },
    /**
     * Custom path from the root images folder
     * @type {String}
     * @example features/
     *  - will become ~/assets/images/features/
     */
    customImagePath: {
      type: String,
      default: '',
    },
    /**
     * Content paragraphs
     * @type {string []}
     */
    descriptions: {
      type: Array,
      default: () => ([]),
    },
    /**
     * Panel header
     * @type {String}
     */
    header: {
      type: [String, Object],
      default: '',
    },
    /**
     * Panel sub-header
     * @type {String}
     */
    subHeader: {
      type: [String, Object],
      default: '',
    },
    /**
     * Panel sub-header state
     * @type {Boolean}
     */
    withSubheader: {
      type: Boolean,
      default: false,
    },
    /**
     * File name of image for web view (without file extension)
     * @type {String}
     */
    webImage: {
      type: String,
      default: null,
    },
    /**
     * Width of web image
     * @type {String}
     */
    webImageWidth: {
      type: String,
      default: '100%',
    },
    /**
     * Classes of web image
     * @type {String}
     */
    webImageClass: {
      type: String,
      default: '',
    },
    /**
     * File name of image for mobile view (without file extension)
     * @type {String}
     */
    mobileImage: {
      type: String,
      default: undefined,
    },
    /**
     * Width of mobile image
     * @type {String}
     */
    mobileImageWidth: {
      type: String,
      default: '100%',
    },
    /**
     * Classes of mobile image
     * @type {String}
     */
    mobileImageClass: {
      type: String,
      default: '',
    },
    /**
    /**
     * Hides image in mobile view
     * @type {Boolean}
     */
    hideImageMobile: {
      type: Boolean,
      default: false,
    },
    /**
     * File extension of the image file
     * @type {String}
     * @example .webp
     */
    fileExtension: {
      type: String,
      default: '.webp',
    },
    /**
     * File extension of the mobile image file
     * @type {String}
     * @example .webp
     */
    mobileFileExtension: {
      type: String,
      default: null,
    },
  },
  computed: {
    imageAltValue () {
      if (!this.header) {
        return 'mycure-media-image';
      }
      if (typeof (this.header) === 'string') {
        return this.header;
      }
      if (typeof (this.header) === 'object') {
        return this.header.text;
      }
      return 'mycure-media-image';
    },
    subHeaderClass () {
      return [{ 'mb-n1': !this.withSubheader }];
    },
    panelHeaderClasses () {
      const defaultClasses = ['font-30', 'lh-title', 'pb-3', 'font-weight-light'];
      return defaultClasses;
    },
  },
};
</script>
