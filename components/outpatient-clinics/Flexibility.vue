<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
    )
      v-col(cols="12" md="8").text-center
        h1(:class="{ 'font-l mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }") Flexible. Scalable.
        p.font-s.grey--text Customizable based on what you need
        p.font-xs.font-open-sans MYCURE is modularized and provides APIs for each so you are able to build from scratch, add missing modules while making your system secure and compliant.
</template>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}
</style>
