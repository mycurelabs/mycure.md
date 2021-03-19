<template lang="pug">
  v-btn(
    :outlined="outlined"
    :large="!$isMobile"
    :rounded="rounded"
    :color="color"
    :href="url"
    :class="{ 'font-11' : $isMobile }"
  ).text-none.font-weight-600 {{ btnText }}
</template>

<script>
export default {
  props: {
    color: {
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
    btnText: {
      type: String,
      default: 'Book Appointment',
    },
  },
  computed: {
    url () {
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const { id } = this.$route.params;
      return `${pxPortalUrl}/appointments/step-1?doctor=${id}`;
    },
  },
};
</script>
