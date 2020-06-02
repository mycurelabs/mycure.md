<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10" v-if="!isMobile")
        img(
          v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.png')"
          width="95%"
          alt="Medical records"
        )#increase-revenue.pt-12
      img(
        v-if="isMobile"
        v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.png')"
        width="100%"
        alt="Medical records"
      )#increase-revenue
      v-col(justify="center" cols="12" md="5").pt-12
        h1.font-30.lh-title.pb-3.font-weight-light {{INCREASE_YOUR_REVENUE.header}}
        br
        span.font-18.mt-3 {{INCREASE_YOUR_REVENUE.description}}
        br
        br
        br
        v-btn(text @click="onGetStarted")
          strong.text-capitalize.primary--text {{INCREASE_YOUR_REVENUE.btnTxt}}
          v-icon.primary--text {{INCREASE_YOUR_REVENUE.btnIcon}}
      v-col(justify="center" cols="12" md="5").pt-12
        h1.font-30.lh-title.pb-3.font-weight-light {{BUILD_YOUR_CLIENTELE.header}}
        br
        span.font-18.mt-3 {{BUILD_YOUR_CLIENTELE.description}}
        br
        br
        v-btn(text @click="onGetStarted")
          strong.text-capitalize.primary--text {{BUILD_YOUR_CLIENTELE.btnTxt}}
          v-icon.primary--text {{BUILD_YOUR_CLIENTELE.btnIcon}}
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import {
  INCREASE_YOUR_REVENUE,
  BUILD_YOUR_CLIENTELE,
} from '../doctors-clinics-content';
export default {
  data () {
    this.INCREASE_YOUR_REVENUE = INCREASE_YOUR_REVENUE;
    this.BUILD_YOUR_CLIENTELE = BUILD_YOUR_CLIENTELE;
    return {
      isMobile: true,
    };
  },
  watch: {
    $isMobile (val) {
      this.isMobile = val;
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
  methods: {
    onGetStarted () {
      VueScrollTo.scrollTo('#increase-revenue', 500, { easing: 'ease' });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration-color: #2e9fdf;
  text-decoration: none;
}
</style>
