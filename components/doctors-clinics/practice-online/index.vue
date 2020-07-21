<template lang="pug">
  v-container.py-12
    v-row(justify="center" align="center")
      v-col(justify="start" cols="12" md="4" :class="{ 'ml-3': !$isMobile }")
        h1.font-30.lh-title.pb-3.font-weight-light {{ panelContent.header }}
        br
        p.text-justify.font-16.mt-3.font-gray {{ panelContent.description }}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4.get-started-btn
          strong.font-18.text-capitalize.primary--text {{ panelContent.btnTxt }}
          v-icon.primary--text {{ panelContent.btnIcon }}
      v-col(cols="12" md="5" offset-md="1")
        picture-source(
          custom-path="doctors-clinics/"
          image-alt="Take your practice online"
          image-file-extension=".webp"
          :image-width="!$isMobile ? '105%' : '100%'"
          :class="{ 'ml-n6' : !$isMobile }"
          :image="panelMainImage"
        )
</template>

<script>
// constants
import { TAKE_PRACTICE_ONLINE } from '../doctors-clinics-content';
// components
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: { PictureSource },
  data () {
    this.panelContent = TAKE_PRACTICE_ONLINE;
    this.panelMainImage = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-C-group-practice';
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
a {
  text-decoration-color: #2e9fdf;
  text-decoration: none;
}
</style>
