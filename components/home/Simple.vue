<template lang="pug">
  //- USP
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? 'auto' : '520px' }"
    )
      v-col(cols="8" md="6" :class="{ 'order-last' : !$isMobile }")
      v-col(cols="12" md="6" :class="{ 'text-center' : $isMobile }")
        h1(:class="{ 'font-xl mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }").lh-title Simple and powerful
        p.font-s.grey--text Say goodbye to paperwork and hello to an easy, compact database.
        p.font-xs.font-open-sans MYCURE is infused with advanced user experience that you can never compare with another medical software. Experience smooth transitions from one workflow
          | to another -- you probably won't even consider using pen and paper ever again.
</template>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}
</style>
