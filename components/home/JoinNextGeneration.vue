<template lang="pug">
  v-row(justify="center")
    generic-panel(:row-bindings="{ justify: 'center' }")
      v-col(cols="12" md="8" xl="6").text-center
        h1(:class="{ 'font-l mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }").title-line-spacing.white--text Join the next generation of healthcare providers today.
        mc-btn(
          rounded
          depressed
          event-label="signup"
          color="success"
          :large="$isRegularScreen"
          :x-large="$isWideScreen"
          :to="{ name: 'signup-health-facilities' }"
        ).text-none.font-s Get Started
</template>

<style scoped>
.title-line-spacing {
  line-height: 1.25em;
}
</style>
