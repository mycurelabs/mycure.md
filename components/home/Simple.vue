<template lang="pug">
  //- USP
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? 'auto' : '520px' }"
    )
      v-col(cols="8" md="5" :class="{ 'order-last' : !$isMobile }")
      v-col(cols="12" md="6" :class="{ 'text-center' : $isMobile }")
        h1(:class="{ 'font-50 mb-8' : !$isMobile, 'font-35 mb-6' : $isMobile }") Simple and powerful.
        p(:class="{ 'font-21' : !$isMobile, 'font-18' : $isMobile }").grey--text Say goodbye to paperwork and hello to an easy, compact database.
        p(:class="{ 'font-18' : !$isMobile, 'font-14' : $isMobile }") MYCURE is infused with advanced user experience that you can never compare with another medical software. Experience smooth transitions from one workflow
          | to another -- you probably won't even consider using pen and paper ever again.
</template>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}
</style>
