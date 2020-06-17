<template lang="pug">
  v-container
    //- COLUMN VIEW
    v-row(v-if="!centerMedia" justify="center").py-10
      //- Left column
      v-col(:align-self="alignLeftColumn" cols="12" :md="colsLeft" :offset-md="offsetColsLeft")
        picture-source(
          v-if="!$isMobile && contentAlignRight"
          :customPath="customImagePath"
          :extensionExclusive="extensionExclusive"
          :image="webImage"
          :imageAlt="header || 'media-image'"
          :imageFileExtension="fileExtension"
          :imageWidth="webImageWidth"
        )
        template(v-if="contentAlignLeft")
          h1.font-30.lh-title.pb-3.font-weight-light {{header}}
          br
          template(v-if="descriptions.length")
            p(v-for="(description, key) in descriptions" :key="key").font-16.mt-3.font-gray.text-justify {{description}}
            br
          slot(name="additional-content")
      //- Right Column
      v-col(:align-self="alignRightColumn" cols="12" :md="colsRight" :offset-md="offsetColsRight")
        picture-source(
          v-if="!$isMobile && contentAlignLeft"
          :customPath="customImagePath"
          :extensionExclusive="extensionExclusive"
          :image="webImage"
          :imageAlt="header || 'media-image'"
          :imageFileExtension="fileExtension"
          :imageWidth="webImageWidth"
        )
        template(v-if="contentAlignRight")
          h1.font-30.lh-title.pb-3.font-weight-light {{header}}
          br
          template(v-if="descriptions.length")
            p(v-for="(description, key) in descriptions" :key="key").font-16.mt-3.font-gray.text-justify {{description}}
            br
          slot(name="additional-content")
      //- Mobile Image
      picture-source(
        v-if="$isMobile && !hideImageMobile"
        :customPath="customImagePath"
        :extensionExclusive="extensionExclusive"
        :image="mobileImage || webImage"
        :imageAlt="header || 'media-image'"
        :imageFileExtension="mobileFileExtension || fileExtension"
        :imageWidth="mobileImageWidth"
      )
    //- CENTER VIEW
    v-row(v-else justify="center").py-10
      v-col(cols="12" md="10" :class="{'text-center': !$isMobile}")
        h1.font-30.lh-title.pb-3.font-weight-light {{header}}
        //- Mobile image
        picture-source(
          v-if="$isMobile && !hideImageMobile"
          :customPath="customImagePath"
          :extensionExclusive="extensionExclusive"
          :image="mobileImage || webImage"
          :imageAlt="header || 'media-image'"
          :imageFileExtension="mobileFileExtension || fileExtension"
          :imageWidth="mobileImageWidth"
        )
        br
        template(v-if="descriptions.length")
          p(v-for="(description, key) in descriptions" :key="key").font-16.mt-3.font-gray {{description}}
          br
        slot(name="additional-content")
        picture-source(
          v-if="!$isMobile"
          :customPath="customImagePath"
          :extensionExclusive="extensionExclusive"
          :image="webImage"
          :imageAlt="header || 'media-image'"
          :imageFileExtension="fileExtension"
          :imageWidth="webImageWidth"
        )
</template>

<script>
// components
import PictureSource from './PictureSource';

export default {
  components: { PictureSource },
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
     * @type {String}
     */
    colsLeft: {
      type: String,
      default: '5',
    },
    /**
     * Number of cols of the right column
     * @type {String}
     */
    colsRight: {
      type: String,
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
      type: String,
      default: '',
    },
    /**
     * File name of image for web view (without file extension)
     * @type {String}
     */
    webImage: {
      type: String,
      required: true,
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
      default: '.webp',
    },
  },
};
</script>
