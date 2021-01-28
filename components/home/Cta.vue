<template lang="pug">
  div(:class="{ 'mobile-container' : $isMobile }")
    v-container
      v-row(
        justify="center"
        align="center"
        :class="{ 'main-container' : !$isMobile }"
      )
        v-col(cols="10" md="5").white--text.mr-4
          h1(:class="{ 'font-25' : $isMobile, 'font-36' : !$isMobile }").mt-4 Doc, get everything you need to start your virtual practice with MYCURE
          p(:class="{ 'font-16' : $isMobile, 'font-18' : !$isMobile }").font-18.mt-4 Manage and monitor your daily operations using MYCURE, an advanced clinic management system that gives real-time medical and business insights.
          v-btn(
            x-large
            depressed
            color="success"
          ).mt-8.mb-6 #[b Start Free Today]
        v-col(cols="10" md="5" :class="{ 'order-first' : $isMobile }")
          v-img(
            :src="require('~/assets/images/home/mycure-home-final-cta.png')"
            alt="Doctor Patient Consultation"
            width="100%"
          ).mt-10.mb-8
</template>

<style scoped>
.main-container {
  background-color: #00455C;
  border-radius: 60px;
}
.mobile-container{
  background-color: #00455C;
}
</style>
