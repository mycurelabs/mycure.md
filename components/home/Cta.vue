<template lang="pug">
  v-container
    v-row(justify="center" align="center").main-container
      v-col(cols="12" md="5")
        h1.font-36.mt-4 Doc, get everything you need to start your virtual practice with MYCURE
        p.font-18.mt-4 Manage and monitor your daily operations using MYCURE, an advanced clinic management system that gives real-time medical and business insights.
        v-btn(
          x-large
          depressed
          color="success"
        ).mt-8 #[b Start Free Today]
      v-col(cols="12" md="5")
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
</style>
