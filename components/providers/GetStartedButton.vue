<template lang="pug">
  v-btn(
    color="success"
    rounded
    :large="large"
    :x-large="xLarge"
    @click="getStarted"
  ).text-none.font-weight-bold Get started for free
</template>

<script>
export default {
  props: {
    large: Boolean,
    xLarge: Boolean,
  },
  methods: {
    getStarted () {
      // TODO: get started
    },
  },
};
</script>
