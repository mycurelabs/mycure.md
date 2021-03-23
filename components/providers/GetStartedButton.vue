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
