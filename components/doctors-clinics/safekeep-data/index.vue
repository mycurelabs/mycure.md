<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(align-self="center" cols="12" md="6" v-if="!$isMobile")
        picture-source(
          customPath="doctors-clinics/"
          :image="panelMainImage"
          imageAlt="Safekeep your important medical data"
          imageFileExtension=".webp"
        )
      v-col(align-self="center" cols="12" md="5")
        h1.font-30.lh-title.pb-3.font-weight-light {{SAFEKEEP_MEDICAL_DATA.header}}
        br
        p.text-justify.font-16.mt-3.font-gray {{SAFEKEEP_MEDICAL_DATA.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{SAFEKEEP_MEDICAL_DATA.btnTxt}}
          v-icon.primary--text {{SAFEKEEP_MEDICAL_DATA.btnIcon}}
      picture-source(
        v-if="$isMobile"
        customPath="doctors-clinics/"
        :image="panelMainImage"
        imageAlt="Safekeep your important medical data"
        imageFileExtension=".webp"
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
