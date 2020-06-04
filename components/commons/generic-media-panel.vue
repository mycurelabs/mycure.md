<template lang="pug">
  v-container
    v-row(justify="center").py-12
      //- Left column
      v-col(align-self="center" cols="12" :md="contentAlignLeft ? '5' : '6'")
        img(
          v-if="!$isMobile && contentAlignRight"
          v-lazy="webImagePath"
          :alt="header || 'media-image'"
          :width="webImageWidth"
        )
        template(v-if="contentAlignLeft")
          h1.font-30.lh-title.pb-3.font-weight-light {{header}}
          br
          template(v-if="descriptions.length")
            p(v-for="(description, key) in descriptions" :key="key").font-18.mt-3 {{description}}
            br
            br
          slot(name="additional-content")
      //- Right Column
      v-col(align-self="center" cols="12" :md="contentAlignRight ? '5' : '6'" :offset-md="contentAlignLeft ? '1' : '0'")
        img(
          v-if="!$isMobile && contentAlignLeft"
          v-lazy="webImagePath"
          :alt="header || 'media-image'"
          :width="webImageWidth"
        )
        template(v-if="contentAlignRight")
          h1.font-30.lh-title.pb-3.font-weight-light {{header}}
          br
          template(v-if="descriptions.length")
            p(v-for="(description, key) in descriptions" :key="key").font-18.mt-3 {{description}}
            br
            br
          slot(name="additional-content")
      //- Mobile Image
      img(
        v-if="$isMobile"
        v-lazy="mobileImagePath"
        :alt="header || 'media-image'"
        :width="mobileImageWidth"
      )
</template>

<script>
export default {
  props: {
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
  },
  computed: {
    webImagePath () {
      return require(`~/assets/images/${this.customImagePath}${this.webImage}`);
    },
    mobileImagePath () {
      const image = this.mobileImage || this.webImage;
      return require(`~/assets/images/${this.customImagePath}${image}`);
    },
  },
};
</script>
