<template lang="pug">
  v-container.py-12
    v-row(justify="center" align="center")
      v-col(justify="start" v-if="!$isMobile" cols="12" md="5")
        picture-source(
          custom-path="doctors-clinics/"
          image-alt="Safekeep your important medical data"
          image-width="105%"
          image-file-extension=".webp"
          :image="panelMainImage"
        )
      v-col(align-self="center" cols="12" md="4" offset-md="1")
        h1.font-30.lh-title.pb-3.font-weight-light {{SAFEKEEP_MEDICAL_DATA.header}}
        br
        p.text-justify.font-16.mt-3.font-gray {{SAFEKEEP_MEDICAL_DATA.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4.get-started-btn
          strong.font-18.text-capitalize.primary--text {{SAFEKEEP_MEDICAL_DATA.btnTxt}}
          v-icon.primary--text {{SAFEKEEP_MEDICAL_DATA.btnIcon}}
      picture-source(
        v-if="$isMobile"
        custom-path="doctors-clinics/"
        image-alt="Safekeep your important medical data"
        image-file-extension=".webp"
        :image="panelMainImage"
      )
</template>

<script>
// constants
import { SAFEKEEP_MEDICAL_DATA } from '../doctors-clinics-content';
// components
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: { PictureSource },
  data () {
    this.SAFEKEEP_MEDICAL_DATA = SAFEKEEP_MEDICAL_DATA;
    this.panelMainImage = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-B-secure-data';
    return {};
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>
<style scoped>
</style>
