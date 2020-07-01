<template lang="pug">
  v-container#multispecialty-clinics.py-12
    v-row(justify="center" align="center")
      v-col(cols="12" md="5" align-self="center")
        p.font-16.mt-3.font-gray.primary--text {{seventhPanel.subHeader}}
        h1.font-30.lh-title.pb-3.font-weight-light {{seventhPanel.header}}
        p.text-justify.font-16.mt-3.font-gray {{seventhPanel.description}}
          a(@click="goToFeatures").font-16.font-weight-bold {{seventhPanel.descriptionLink}}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{seventhPanel.btnTxt}}
          v-icon.primary--text {{seventhPanel.btnIcon}}
      v-col(cols="12" md="6" justify="center" align="center").panel-image
        picture-source(
          customPath="enterprise/"
          :image="seventhPanel.image"
          :imageAlt="seventhPanel.header"
          imageFileExtension=".webp"
        ).seventhPanel-image
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
@media screen and (min-width: 1024px) {
  .panel-image {
    margin-left: 4%;
  }
}
</style>
