<template lang="pug">
  v-container.usp-container
    v-row(justify="center" align="center" :style="{ height: $isMobile ? 'auto' : '40vh' }")
      v-col(cols="12" md="10")
        v-row(
          justify="center"
          align="center"
        )
          v-col(cols="12" md="10" xl="12").text-center
            h1(:class="headerClasses").lh-title.font-weight-medium.primary--text Caring for people who care for people
          v-col(cols="12" xl="6").text-center
            p(:class="descriptionClasses").grey--text.font-open-sans MYCURE is dedicated to help healthcare providers save more lives each day.
        v-row(justify="center" align="center")
          v-col(
            v-for="(stat, key) in stats"
            :key="key"
            cols="12"
            md="4"
          ).text-center
            h1(:class="{ 'font-xl': $isWideScreen, 'font-l': $isRegularScreen, 'font-m' : $isMobile }").primary--text.font-weight-medium {{ stat.amount }}
            h3(:class="{ 'font-m': $isWideScreen, 'font-s' : $isRegularScreen, 'font-xs' : $isMobile }").font-weight-regular.grey--text {{ stat.title }}
</template>

<script>
import classBinder from '~/utils/class-binder';
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
  computed: {
    headerClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
    },
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 125px;
  padding-top: 10px;
}
</style>
