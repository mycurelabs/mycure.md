<template lang="pug">
  v-container.py-10.increase-revenue-content
    v-row(justify="center")
      v-col(cols="12").text-center
        h1.font-30.lh-title.font-weight-light Your New Virtual Clinic
      v-col(cols="12" md="10")
        picture(v-if="!$isMobile")
          source(
            srcset="~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.webp"
            width="100%"
            alt="Medical records"
            type="image/webp"
          )
          source(
            srcset="~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.png"
            width="100%"
            alt="Medical records"
            type="image/png"
          )
          img(
          v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.webp')"
            width="100%"
            alt="Medical records"
          ).pt-12
        picture(v-if="$isMobile")
          source(
            srcset="~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.webp"
            width="100%"
            alt="Medical records"
            type="image/webp"
          )
          source(
            srcset="~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.png"
            width="100%"
            alt="Medical records"
            type="image/png"
          )
          img(
          v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.webp')"
            width="100%"
            alt="Medical records"
          ).pt-12
      v-col(
        justify="center"
        cols="12"
        md="5"
        v-for="(data, key) in secondPanelContents"
        :key="key"
      ).pt-12.content-container.pl-6
        div.header-icon-text
          img(v-lazy="require(`~/assets/images/doctors-clinics/${data.headerIcon}`)" height="30%" :class="{'pt-3': $isMobile}")
          h1.font-30.lh-title.pb-6.mt-3.ml-3.font-weight-light {{data.header}}
        br
        p.text-justify.font-16.font-gray.pr-2.mb-1 {{data.description}}
        br
        v-btn(@click="onGetStarted" text).ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{data.btnTxt}}
          v-icon.primary--text {{data.btnIcon}}
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
.header-icon-text{
  display: flex;
  align-content: flex-end;
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
@media screen and (min-width: 1260px) {
  .increase-revenue-content {
    margin-top: 8%;
  }
}
@media screen and (min-width: 1600px) {
  .increase-revenue-content {
    margin-top: 5%;
  }
}
</style>
