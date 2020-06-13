<template lang="pug">
  v-container.py-12.increase-revenue-content
    v-row(justify="center")
      v-col(
        justify="center"
        cols="12"
        md="5"
        v-for="(data, key) in secondPanelContents"
        :key="key"
      ).pt-12.content-container.pl-6
        h1.font-30.lh-title.pb-6.font-weight-light {{data.header}}
        br
        p.text-justify.font-18.font-gray.pr-2 {{data.description}}
        br
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{data.btnTxt}}
          v-icon.primary--text {{data.btnIcon}}
      v-col(cols="12" md="10" v-if="!$isMobile")
        img(
          v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.webp')"
          width="100%"
          alt="Medical records"
        ).pt-12
      img(
        v-if="$isMobile"
        v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.webp')"
        width="100%"
        alt="Medical records"
      ).pr-2.pl-2.pt-12
</template>

<script>
import { SECOND_PANEL_CONTENTS } from '../doctors-clinics-content';
export default {
  data () {
    return {
      secondPanelContents: SECOND_PANEL_CONTENTS,
    };
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
a {
  text-decoration-color: #2e9fdf;
  text-decoration: none;
}
.content-container {
  position: relative;
}
.get-started-btn {
  margin-left: -3%;
  position: absolute;
  bottom: 0;
}
@media screen
  and (min-device-width: 320px)
  and (max-device-height: 812px)
  and (orientation: portrait) {
    .content-container {
      margin-left: -24px;
    }
}
@media screen and (device-width: 1024px) {
  .increase-revenue-content {
    margin-top: -70%;
  }
}
@media screen and (min-width: 1366px) {
  .increase-revenue-content {
   margin-top: 8%;
  }
}
</style>
