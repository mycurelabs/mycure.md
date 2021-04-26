<template lang="pug">
  v-card(flat color="#fafafa" height="100%")
    v-card-text.text-center
      h1.font-s {{ wonder.title }}
      p {{ wonder.description }}
    v-card-actions
      v-spacer
      v-chip(v-if="wonder.comingSoon" color="warning" small) COMING SOON!
      mc-btn(
        v-else
        text
        small
        :to="{ name: wonder.infoLink }"
        color="primary"
        event-category="Homepage Carousel"
        :event-label="`click-${wonder.infoLink}`"
      ).text-none.font-weight-bold
        | Learn More
        v-icon(right small) mdi-chevron-right
      v-spacer
      //- v-btn(text small color="primary").text-none
      //-   | Buy Now
      //-   v-icon(right small) mdi-chevron-right
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
