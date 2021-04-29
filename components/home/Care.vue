<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
    )
      v-col(cols="12" md="6").text-center
        h1(:class="{ 'font-l mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }").lh-title Caring for people who care for people
      v-col(cols="12" md="7").text-center
        p(:class="{ 'font-s' : !$isMobile, 'font-xs' : $isMobile }").grey--text.font-open-sans MYCURE is dedicated to help healthcare providers save more lives each day
    v-row
      v-col(
        v-for="(stat, key) in stats"
        :key="key"
        cols="12"
        md="4"
      ).text-center
        h1(:class="{ 'font-l' : !$isMobile, 'font-s' : $isMobile }").primary--text {{ stat.amount }}
        h3(:class="{ 'font-s' : !$isMobile, 'font-12' : $isMobile }").font-weight-regular.grey--text {{ stat.title }}
</template>

<script>
export default {
  data () {
    this.stats = [
      {
        title: 'Medical Records',
        amount: '9,600,000+',
      },
      {
        title: 'Lives Saved',
        amount: '1,800,000+',
      },
      {
        title: 'Partner Providers',
        amount: '2,100+',
      },
    ];
    return {};
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}
</style>
