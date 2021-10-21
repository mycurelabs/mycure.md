<template lang="pug">
  mc-btn(
    v-bind="$attrs"
    :event-label="eventLabel"
    :href="url"
  ).text-none
    v-icon(v-if="showIcon" left) mdi-calendar
    span {{ btnText }}
</template>

<script>
export default {
  props: {
    // color: {
    //   type: String,
    //   default: null,
    // },
    // outlined: {
    //   type: Boolean,
    //   default: false,
    // },
    // rounded: {
    //   type: Boolean,
    //   default: false,
    // },
    // large: {
    //   type: Boolean,
    //   default: false,
    // },
    // small: {
    //   type: Boolean,
    //   default: true,
    // },
    btnText: {
      type: String,
      default: 'Book Now',
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    eventLabel: {
      type: String,
      default: 'book-doctor',
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
