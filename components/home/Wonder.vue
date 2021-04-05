<template lang="pug">
  v-card(flat color="#fafafa")
    v-card-text.text-center
      h1.font-s {{ wonder.title }}
      p {{ wonder.description }}
    v-card-actions
      v-btn(text small :to="{ name: wonder.infoLink }").text-none
        | Learn More
        v-icon(right small) mdi-chevron-right
      v-spacer
      v-btn(text small color="primary").text-none
        | Buy Now
        v-icon(right small) mdi-chevron-right
</template>

<script>
export default {
  props: {
    wonder: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
