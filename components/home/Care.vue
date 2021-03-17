<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
    )
      v-col(cols="12" md="6").text-center
        h1(:class="{ 'font-50 mb-8' : !$isMobile, 'font-35 mb-6' : $isMobile }") Caring for people who care for people
        p(:class="{ 'font-18' : !$isMobile, 'font-14' : $isMobile }").grey--text MYCURE is dedicated to help healthcare providers save more lives each day
    v-row
      v-col(
        v-for="(stat, key) in stats"
        :key="key"
        cols="12"
        md="4"
      ).text-center
        h1.primary--text {{ stat.amount }}
        h3.font-weight-regular.grey--text {{ stat.title }}
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
        amount: '2100+',
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
