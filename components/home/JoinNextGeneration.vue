<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
    )
      v-col(cols="12" md="8").text-center
        h1(:class="{ 'font-l mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }").title-line-spacing.white--text Join the next generation of healthcare providers today.
        mc-btn(
          event-label="signup"
          color="success"
          small
          tile
          :to="{ name: 'signup-health-facilities' }"
        ).text-none Get Started
</template>
<style scoped>
.usp-container {
  padding-bottom: 60px;
}
.title-line-spacing {
  line-height: 1.25em;
}
</style>
