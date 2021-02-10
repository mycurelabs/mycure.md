<template lang="pug">
  v-btn(
    :outlined="outlined"
    large
    :rounded="rounded"
    :color="btnColor"
    :href="url"
  ).text-none Book Appointment
</template>

<script>
export default {
  props: {
    btnColor: {
      type: String,
      default: 'primary',
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    url () {
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const { id } = this.$route.params;
      return `${pxPortalUrl}/appointment/step-1?doctor=${id}`;
    },
  },
};
</script>
