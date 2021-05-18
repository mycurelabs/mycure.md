<template lang="pug">
  v-row(justify="center").cta-container
    generic-panel(:row-bindings="{ justify: 'center' }")
      v-col(cols="12" md="8").text-center
        h1(:class="{ 'font-l mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }").title-line-spacing.white--text Join the next generation of&nbsp;
          span.primary--text healthcare providers&nbsp;
          | today.
        mc-btn(
          rounded
          large
          event-label="signup"
          color="success"
          :to="{ name: 'signup-health-facilities' }"
        ).text-none.font-s Get Started
</template>
<style scoped>
.cta-container {
  background-color: #2b2d30;
}
.title-line-spacing {
  line-height: 1.25em;
}
</style>
