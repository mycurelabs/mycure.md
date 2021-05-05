<template lang="pug">
  v-btn(
    :outlined="outlined"
    :large="large"
    :rounded="rounded"
    :color="color"
    :href="url"
    :class="{ 'font-11' : $isMobile }"
  ).text-none.font-weight-600 {{ btnText }}
    v-icon(v-if="showIcon" small right) mdi-calendar
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: null,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    btnText: {
      type: String,
      default: 'primary',
    },
    large: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: true,
    },
    // - Show icon
    showIcon: {
      type: Boolean,
      default: false,
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
