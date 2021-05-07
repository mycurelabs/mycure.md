<template lang="pug">
  v-container.usp-container
    v-row(justify="center" align="center" :style="{ height: $isMobile ? 'auto' : '40vh' }")
      v-col(cols="12" md="10")
        v-row(
          justify="center"
          align="center"
        )
          v-col(cols="12").text-center
            h1(:class="{ 'font-l' : !$isMobile, 'font-m' : $isMobile }").lh-title Caring for people who care for people
          v-col(cols="12").text-center
            p(:class="{ 'font-s' : !$isMobile, 'font-xs' : $isMobile }").grey--text.font-open-sans MYCURE is dedicated to help healthcare providers save more lives each day.
          v-col(
            v-for="(stat, key) in stats"
            :key="key"
            cols="12"
            md="4"
          ).text-center
            h1(:class="{ 'font-l' : !$isMobile, 'font-m' : $isMobile }").primary--text {{ stat.amount }}
            h3(:class="{ 'font-s' : !$isMobile, 'font-12' : $isMobile }").font-weight-regular.grey--text {{ stat.title }}
</template>

<script>
export default {
  data () {
    this.stats = [
      {
        title: 'Medical Records',
        amount: '2,700,000+',
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
  padding-bottom: 125px;
  padding-top: 10px;
}
</style>
