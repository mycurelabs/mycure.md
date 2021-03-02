<template lang="pug">
  v-btn(
    :outlined="outlined"
    :large="!$isMobile"
    :rounded="rounded"
    :color="btnColor"
    :href="url"
    :class="{ 'font-11' : $isMobile }"
  ).text-none.font-weight-600 Book Appointment
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
