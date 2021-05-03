<template lang="pug">
  mc-btn(
    color="success"
    tile
    depressed
    :large="large"
    :x-large="xLarge"
    :small="small"
    :block="block"
    @click="getStarted"
  ).text-none.font-weight-bold.letter-spacing-normal Get Started
</template>

<script>
export default {
  props: {
    large: Boolean,
    xLarge: Boolean,
    small: Boolean,
    block: Boolean,
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
