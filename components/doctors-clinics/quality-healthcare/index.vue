<template lang="pug">
  v-container.py-12.quality-healthcare-contents
    v-row(justify="center")
      v-col(align-self="center" cols="12" md="6" v-if="!$isMobile").panel-image
        picture-source(
          custom-path="doctors-clinics/"
          :image="panelMainImage"
          image-alt="Access quality healthcare"
          image-file-extension=".webp"
        )
      v-col(align-self="center" cols="12" md="5")
        h1(:class="{'pre-white-space': !$isMobile}").font-30.lh-title.pb-3.font-weight-light {{ title }}
        br
        p.text-justify.font-16.mt-3.font-gray {{panelContent.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{panelContent.btnTxt}}
          v-icon.primary--text {{panelContent.btnIcon}}
      picture-source(
        v-if="$isMobile"
        custom-path="doctors-clinics/"
        :image="panelMainImage"
        image-alt="Access quality healthcare"
        image-file-extension=".webp"
      )
</template>

<script>
// constants
import { ACCESS_QUALITY_HEALTHCARE } from '../doctors-clinics-content';
// components
import PictureSource from '~/components/commons/PictureSource';
// utils
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  components: { PictureSource },
  data () {
    this.panelContent = ACCESS_QUALITY_HEALTHCARE;
    this.panelMainImage = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-E-patient-portal';
    return {};
  },
  computed: {
    title () {
      return this.$isMobile
        ? this.panelContent.header
        : parseTextWithNewLine(this.panelContent.header, ['healthcare ']);
    },
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .quality-healthcare-contents {
    position: relative;
    z-index: 2;
  }
  .panel-image {
    margin-right: 4%;
  }
}
</style>
