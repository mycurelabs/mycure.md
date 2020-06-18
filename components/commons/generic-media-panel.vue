<template lang="pug">
  v-container
    //- COLUMN VIEW
    v-row(v-if="!centerMedia" justify="center").py-10
      //- Left column
      v-col(:align-self="alignLeftColumn" cols="12" :md="colsLeft" :offset-md="offsetColsLeft")
        picture(v-if="!$isMobile && contentAlignRight")
          source(
            :srcset="getSrcsetValue('.webp')"
            :alt="header || 'media-image'"
            :width="webImageWidth"
            type="image/webp"
          )
          source(
            :srcset="getSrcsetValue('.png')"
            :alt="header || 'media-image'"
            :width="webImageWidth"
            type="image/png"
          )
          img(
            v-lazy="webImagePath"
            :alt="header || 'media-image'"
            :width="webImageWidth"
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
        picture(v-if="!$isMobile && contentAlignLeft")
          source(
            :srcset="getSrcsetValue('.webp')"
            :alt="header || 'media-image'"
            :width="webImageWidth"
            type="image/webp"
          )
          source(
            :srcset="getSrcsetValue('.png')"
            :alt="header || 'media-image'"
            :width="webImageWidth"
            type="image/png"
          )
          img(
            v-lazy="webImagePath"
            :alt="header || 'media-image'"
            :width="webImageWidth"
          )
        template(v-if="contentAlignRight")
          h1.font-30.lh-title.pb-3.font-weight-light {{header}}
          br
          template(v-if="descriptions.length")
            p(v-for="(description, key) in descriptions" :key="key").font-16.mt-3.font-gray.text-justify {{description}}
            br
          slot(name="additional-content")
      //- Mobile Image
      picture(v-if="$isMobile && !hideImageMobile")
        source(
          :srcset="getSrcsetValue('.webp')"
          :alt="header || 'media-image'"
          :width="webImageWidth"
          type="image/webp"
        )
        source(
          :srcset="getSrcsetValue('.png')"
          :alt="header || 'media-image'"
          :width="mobileImageWidth"
          type="image/png"
        )
        img(
          v-lazy="mobileImagePath"
          :alt="header || 'media-image'"
          :width="mobileImageWidth"
        )
    //- CENTER VIEW
    v-row(v-else justify="center").py-10
      v-col(cols="12" md="10" :class="{'text-center': !$isMobile}")
        h1.font-30.lh-title.pb-3.font-weight-light {{header}}
        picture(v-if="!$isMobile")
          source(
            :srcset="getSrcsetValue('.webp')"
            :alt="header || 'media-image'"
            :width="webImageWidth"
            type="image/webp"
          )
          source(
            :srcset="getSrcsetValue('.png')"
            :alt="header || 'media-image'"
            :width="webImageWidth"
            type="image/png"
          )
          img(
            v-lazy="webImagePath"
            :alt="header || 'media-image'"
            :width="webImageWidth"
          )
        br
        template(v-if="descriptions.length")
          p(v-for="(description, key) in descriptions" :key="key").font-16.mt-3.font-gray {{description}}
          br
        slot(name="additional-content")
        picture(v-if="$isMobile && !hideImageMobile")
          source(
            :srcset="getSrcsetValue('.webp')"
            :alt="header || 'media-image'"
            :width="mobileImageWidth"
            type="image/webp"
          )
          source(
            :srcset="getSrcsetValue('.png')"
            :alt="header || 'media-image'"
            :width="mobileImageWidth"
            type="image/png"
          )
          img(
            v-lazy="mobileImagePath"
            :alt="header || 'media-image'"
            :width="mobileImageWidth"
          )
</template>

<script>
export default {
  props: {
    alignLeftColumn: {
      type: String,
      default: 'center',
    },
    alignRightColumn: {
      type: String,
      default: 'center',
    },
    centerMedia: {
      type: Boolean,
      default: false,
    },
    colsLeft: {
      type: String,
      default: '5',
    },
    colsRight: {
      type: String,
      default: '6',
    },
    offsetColsLeft: {
      type: String,
      default: '0',
    },
    offsetColsRight: {
      type: String,
      default: '0',
    },
    contentAlignLeft: {
      type: Boolean,
      default: false,
    },
    contentAlignRight: {
      type: Boolean,
      default: false,
    },
    customImagePath: {
      type: String,
      default: '',
    },
    descriptions: {
      type: Array,
      default: () => ([]),
    },
    header: {
      type: String,
      default: '',
    },
    webImage: {
      type: String,
      required: true,
    },
    webImageWidth: {
      type: String,
      default: '100%',
    },
    mobileImage: {
      type: String,
      default: undefined,
    },
    mobileImageWidth: {
      type: String,
      default: '100%',
    },
    hideImageMobile: {
      type: Boolean,
      default: false,
    },
    fileExtension: {
      type: String,
      default: '.webp',
    },
  },
  computed: {
    webImagePath () {
      return require(`~/assets/images/${this.customImagePath}${this.webImage}${this.fileExtension}`);
    },
    mobileImagePath () {
      const image = this.mobileImage || this.webImage;
      return require(`~/assets/images/${this.customImagePath}${image}${this.fileExtension}`);
    },
  },
  methods: {
    getSrcsetValue (fileExtension) {
      return require(`~/assets/images/${this.customPath}${this.webImage}${fileExtension}`);
    },
  },
};
</script>
