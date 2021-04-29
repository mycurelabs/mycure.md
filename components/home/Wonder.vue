<template lang="pug">
  v-card(flat color="#fafafa" height="100%")
    v-card-text.text-center
      h1.font-s {{ wonder.title }}
      p {{ wonder.description }}
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
