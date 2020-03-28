<template lang="pug">
  fragment
    v-container
      v-row(align="center")
        v-col(cols="12").text-center
          h1(:class="[{'pre-white-space': !$isMobile}, $isMobile ? 'font-36' : 'font-40']").text-xs-center.font-work-sans.lh-title {{title}}
          p(:class="{'pre-white-space': !$isMobile}").font-s.text-xs-center.pt-3 {{description}}
            slot(name="add-content")
      div(v-if="image").pt-5.text-center.justify-center.center
        img(
          v-lazy="require(`@/assets/images/${customPath}${image}.png`)"
          :alt="image"
          :width="imageWidth"
        )
    slot(name="diagram-content")
</template>

<script>
export default {
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
    imageWidth: {
      type: String,
      default: '100%',
    },
    customPath: {
      type: String,
      default: '',
    },
  },
};
</script>
