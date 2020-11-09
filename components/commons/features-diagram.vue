<template lang="pug">
  fragment
    v-container
      v-row(align="center")
        v-col(cols="12").text-center
          h1(:class="[{'pre-white-space': !$isMobile}, $isMobile ? 'font-36' : 'font-40']").text-xs-center.lh-title {{title}}
          p(:class="{'pre-white-space': !$isMobile}").font-s.text-xs-center.my-5 {{description}}
            slot(name="add-content")
      div(v-if="image").pt-5.text-center.justify-center.center
        picture-source(
          :customPath="customPath"
          :image="image"
          :imageAlt="image"
          :imageWidth="imageWidth"
          :imageFileExtension="imageExtension"
          :extension-exclusive="extensionExclusive"
        )
    slot(name="diagram-content")
</template>

<script>
import PictureSource from './PictureSource';

export default {
  components: { PictureSource },
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    imageExtension: {
      type: String,
      default: '.png',
    },
    imageWidth: {
      type: String,
      default: '90%',
    },
    customPath: {
      type: String,
      default: '',
    },
    extensionExclusive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
