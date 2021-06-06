<template lang="pug">
  mc-btn(
    color="success"
    depressed
    :rounded="rounded"
    :large="large"
    :x-large="xLarge"
    :small="small"
    :block="block"
    @click="getStarted"
  ).text-none.letter-spacing-normal Get Started
</template>

<script>
export default {
  props: {
    large: Boolean,
    xLarge: Boolean,
    small: Boolean,
    block: Boolean,
    rounded: Boolean,
    email: {
      type: String,
      default: '',
    },
  },
  methods: {
    getStarted () {
      const opts = {
        name: 'signup-health-facilities',
      };
      if (this.email) {
        opts.query = {
          email: this.email,
        };
      }
      this.$router.push(opts);
    },
  },
};
</script>
