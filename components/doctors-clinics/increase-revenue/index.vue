<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10" v-if="!$isMobile")
        img(
          v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.png')"
          width="95%"
          alt="Medical records"
        ).pt-12
      img(
        v-if="$isMobile"
        v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.png')"
        width="100%"
        alt="Medical records"
      ).pt-12
      v-col(
        justify="center"
        cols="12"
        md="5"
        v-for="(data, key) in increase_revenue"
        :key="key"
      ).pt-12
        h1.font-30.lh-title.pb-3.font-weight-light {{data.header}}
        br
        span.font-18.mt-3 {{data.description}}
        br
        br
        br
        v-btn(text)
          strong.text-capitalize.primary--text {{data.btnTxt}}
          v-icon.primary--text {{data.btnIcon}}
</template>

<script>
import { INCREASE_YOUR_REVENUE } from '../doctors-clinics-content';
export default {
  data () {
    return {
      increase_revenue: INCREASE_YOUR_REVENUE,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration-color: #2e9fdf;
  text-decoration: none;
}
</style>
