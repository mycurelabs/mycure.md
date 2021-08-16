<template lang="pug">
  v-row(justify="center")
    generic-panel(:row-bindings="{ justify: 'center' }")
      v-col(cols="12" md="8" xl="6").text-center
        h2.mc-title-set-1.lh-title.white--text Join the next generation of healthcare providers today.
        br
        mc-btn(
          rounded
          depressed
          event-label="signup"
          color="success"
          height="59px"
          width="228px"
          :to="{ name: 'signup-health-facilities' }"
        ).text-none
          span.generic-button-text Get Started
</template>
