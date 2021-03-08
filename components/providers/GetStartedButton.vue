<template lang="pug">
  v-btn(
    :color="color"
    rounded
    :large="large"
    :x-large="xLarge"
    @click="getStarted"
  ).text-none.font-weight-bold Get Started Free
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
    color: {
      type: String,
      default: 'primary',
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
