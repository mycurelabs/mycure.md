<template lang="pug">
  v-btn(
    color="primary"
    rounded
    :large="large"
    :x-large="xLarge"
    href="https://6rbf27w6k3r.typeform.com/to/V13pJzW9"
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
  },
  // methods: {
  //   getStarted () {
  //     const opts = {
  //       name: 'signup-health-facilities',
  //     };
  //     if (this.email) {
  //       opts.query = {
  //         email: this.email,
  //       };
  //     }
  //     this.$router.push(opts);
  //   },
  // },
};
</script>
