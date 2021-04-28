<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
    )
      v-col(cols="12" md="8").text-center
        h1(:class="{ 'font-l mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }").title-line-spacing Join the next generation of healthcare providers today.
        mc-btn(
          event-label="signup"
          color="primary"
          x-large
          depressed
          :to="{ name: 'signup-health-facilities' }"
        ).text-none.font-xs Get Started
</template>
<style scoped>
.usp-container {
  padding-bottom: 70px;
}
.title-line-spacing {
  line-height: 1.25em;
}
</style>
