<template lang="pug">
  v-container.py-12
    v-row(justify="center").pb-5
      v-col(cols="12").text-center
        h1.font-30.lh-title.font-weight-light Your New Virtual Clinic
      v-col(cols="12" md="10")
        picture-source(
          custom-path="doctors-clinics/"
          :image="panelMainImage"
          image-alt="New virtual clinic"
          image-file-extension=".webp"
          :image-classes="['pt-12']"
        )
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
        p.text-justify.font-16.font-gray.pr-2.pb-12 {{data.description}}
        v-btn(@click="onGetStarted" text).pt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{data.btnTxt}}
          v-icon.primary--text {{data.btnIcon}}
</template>

<script>
// constants
import { SECOND_PANEL_CONTENTS } from '../doctors-clinics-content';
// components
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  data () {
    return {
      secondPanelContents: SECOND_PANEL_CONTENTS,
      panelMainImage: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult',
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
