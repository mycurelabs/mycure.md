<template lang="pug">
  v-container#multispecialty-clinics.py-12
    v-row(justify="center" align="center")
      v-col(cols="12" md="4" align-self="center" :class="{ 'ml-6' : !$isMobile }")
        p.font-16.mt-3.font-gray.primary--text {{ seventhPanel.subHeader }}
        h1.font-30.lh-title.pb-3.font-weight-light {{ seventhPanel.header }}
        p.text-justify.font-16.mt-3.font-gray {{ seventhPanel.description }}
          a(@click="goToFeatures").font-16.font-weight-bold {{ seventhPanel.descriptionLink }}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.font-18.text-capitalize.primary--text {{ seventhPanel.btnTxt }}
          v-icon.primary--text {{ seventhPanel.btnIcon }}
      v-col(cols="12" md="5" offset-md="1" justify="center" align="center")
        picture-source(
          custom-path="enterprise/"
          image-file-extension=".webp"
          :image-width="!$isMobile ? '109%' : '100%'"
          :class="{ 'ml-n10' : !$isMobile }"
          :image="seventhPanel.image"
          :image-alt="seventhPanel.header"
        )
</template>

<script>
// constants
import { SEVENTH_PANEL } from '../enterprise-contents';
// components
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: { PictureSource },
  data () {
    this.seventhPanel = SEVENTH_PANEL;
    return {};
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
    goToFeatures () {
      this.$emit('goToFeatures');
    },
  },
};
</script>

<style scoped>
a {
  color:gray;
}
</style>
