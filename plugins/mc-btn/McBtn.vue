<template lang="pug">
  v-btn(
    v-bind="$attrs"
    @click="click"
  )
    slot
</template>

<script>
export default {
  props: {
    eventCategory: {
      type: String,
      default: 'click',
    },
    eventAction: {
      type: String,
      default: 'click',
    },
    eventLabel: {
      type: String,
      default: null,
    },
    eventValue: {
      type: String,
      default: null,
    },
  },
  methods: {
    trackEvent () {
      // Amplitude
      window?.$amplitude?.logEvent(this.eventLabel);
      // Google Analytics
      this.$gtag.event(this.eventAction, {
        event_category: this.eventCategory,
        event_label: this.eventLabel,
        value: this.eventValue || this.eventLabel,
      });
    },
    click (e) {
      if (this.eventLabel) this.trackEvent();
      this.$emit('click', e);
    },
  },
};
</script>
