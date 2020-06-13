<template lang="pug">
  v-btn(
    large
    color="primary"
    depressed
    :href="url"
  ).text-none Online Consult
</template>

<script>
export default {
  computed: {
    url () {
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const { id } = this.$route.params;
      return `${pxPortalUrl}/appointment/step-1?doctor=${id}`;
    },
  },
};
</script>
