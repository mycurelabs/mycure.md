<template lang="pug">
  fragment
    v-container
      v-layout(row align-center)
        v-flex(xs12 md12).text-xs-center
          h1(:class="{'pre-white-space': !$isMobile}").text-xs-center.font-work-sans.lh-title.font-xl {{ title }}
          p(:class="{'pre-white-space': !$isMobile}").font-16.text-xs-center.pt-3 {{ description }}
      div.pt-5
        v-img(
          v-if="image !== ''"
          :src="require(`@/assets/images/${customPath}${image}.png`)"
          :alt="image"
        )
    slot(name="diagram-content")

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    customPath: {
      type: String,
      default: ''
    }
  }
};
</script>

