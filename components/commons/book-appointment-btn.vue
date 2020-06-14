<template lang="pug">
  v-btn(
    outlined
    large
    color="primary"
    :href="url"
  ).text-none Book Appointment
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
