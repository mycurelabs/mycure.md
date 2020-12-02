<template lang="pug">
  v-row
    div.text-center
      v-avatar(size="100%")
        img(:src="picURL")
    div.text-left
      h2.py-5.primary--text About
      p {{ description }}
</template>

<script>
export default {
  props: {
    picURL: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  data () {
    return {};
  },
};
</script>

<style scoped>
</style>
