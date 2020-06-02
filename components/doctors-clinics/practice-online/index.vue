<template lang="pug">
  v-container
    v-row(justify="center").py-12
      v-col(align-self="center" cols="12" md="6")
        h1.font-30.lh-title.pb-3.font-weight-light {{TAKE_PRACTICE_ONLINE.header}}
        br
        span.font-18.mt-3 {{TAKE_PRACTICE_ONLINE.description}}
        br
        br
        v-btn(text @click="onGetStarted")
          strong.text-capitalize.primary--text {{TAKE_PRACTICE_ONLINE.btnTxt}}
          v-icon.primary--text {{TAKE_PRACTICE_ONLINE.btnIcon}}
      v-col(align-self="center" cols="12" md="6" v-if="!isMobile")
        img(v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-C-group-practice.png')"
          alt="Safekeep your important medical data"
        ).pl-10
      img(v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-C-group-practice.png')"
        alt="Safekeep your important medical data" v-if="isMobile"
        width="100%"
      )
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import {
  TAKE_PRACTICE_ONLINE,
} from '../doctors-clinics-content';
export default {
  data () {
    this.TAKE_PRACTICE_ONLINE = TAKE_PRACTICE_ONLINE;
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
