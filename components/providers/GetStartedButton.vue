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
      // TODO: bring back once onboarding is done
      // const opts = {
      //   name: 'signup-health-facilities',
      // };
      // if (this.email) {
      //   opts.query = {
      //     email: this.email,
      //   };
      // }
      // this.$router.push(opts);
      window.open('https://6rbf27w6k3r.typeform.com/to/V13pJzW9', '_blank', 'noopener noreferrer');
    },
  },
};
</script>
