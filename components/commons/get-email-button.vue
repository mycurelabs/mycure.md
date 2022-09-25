<template lang="pug">
v-text-field(
  background-color="white"
  placeholder="Email Address"
  color="primary"
  outlined
  hide-details
).elevation-2
  template(slot="append")
    v-btn(
      style="margin-top: -11px; margin-right: -6px;"
      depressed
      large
      :color="buttonColor"
    ).text-none Get Started
</template>

<script>
export default {
  props: {
    buttonColor: {
      type: String,
      default: 'primary',
    },
  },
};
</script>
