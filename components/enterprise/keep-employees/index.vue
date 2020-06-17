<template lang="pug">
  v-container#corporate-clinics.py-12.panel-keep-employees
    v-row(justify="center" align="center")
      v-col(cols="12" md="5" align-self="center" v-if="$isMobile").eightPanel-description
        p.font-16.mt-3.font-gray.primary--text {{eightPanel.subHeader}}
        h1.font-30.lh-title.pb-3.font-weight-light {{eightPanel.header}}
        p.text-justify.font-16.mt-3.font-gray {{eightPanel.description}}
          a(@click="goToFeatures").font-16.font-weight-bold {{eightPanel.descriptionLink}}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{eightPanel.btnTxt}}
          v-icon.primary--text {{eightPanel.btnIcon}}
      v-col(cols="12" md="6" justify="center" align="center")
        picture-source(
          customPath="enterprise/"
          :image="eightPanel.image"
          :imageAlt="eightPanel.header"
          imageFileExtension=".webp"
        ).eightPanel-image
      v-col(cols="12" md="5" align-self="center" v-if="!$isMobile").eightPanel-description
        p.font-16.mt-3.font-gray.primary--text {{eightPanel.subHeader}}
        h1.font-30.lh-title.pb-3.font-weight-light {{eightPanel.header}}
        p.text-justify.font-16.mt-3.font-gray {{eightPanel.description}}
          a(@click="goToFeatures").font-16.font-weight-bold {{eightPanel.descriptionLink}}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{eightPanel.btnTxt}}
          v-icon.primary--text {{eightPanel.btnIcon}}
</template>

<script>
// constants
import { EIGHT_PANEL } from '../enterprise-contents';
// components
import PictureSource from '~/components/commons/PictureSource';

export default {
  components: { PictureSource },
  data () {
    this.eightPanel = EIGHT_PANEL;
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
  color: gray;
}
.panel-keep-employees {
  position: relative;
  z-index: 2;
}
@media screen and (device-width: 1024px) {
  .eightPanel-image {
    margin-left: -20%;
    width: 100%;
  }
}
@media screen and (min-width: 1366px) {
  .eightPanel-description {
    margin-left: 55px;
  }
}
</style>
