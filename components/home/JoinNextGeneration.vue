<template lang="pug">
  v-row(justify="center")
    generic-panel(:row-bindings="{ justify: 'center' }")
      v-col(cols="12" md="8" xl="6").text-center
        h2.mc-title-set-1.lh-title.white--text Join the next generation of healthcare providers today.
        br
        mc-btn(
          depressed
          event-label="signup"
          color="success"
          class="rounded-pill"
          :width="!$isWideScreen ? '228px' : '300'"
          :height="!$isWideScreen ? '59px' : '73.68'"
          @click="handleClick"
        ).text-none
          span.generic-button-text Contact Us
</template>

<script>
export default {
  methods: {
    handleClick () {
      globalThis.open('https://calendly.com/mycure/demo', '_blank');
    },
  },
};
</script>
