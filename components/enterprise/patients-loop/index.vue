<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(cols="12" md="5" align-self="center")
        h1.font-30.lh-title.pb-3.font-weight-light {{fourthPanel.header}}
        p.text-justify.font-16.mt-3.font-gray {{fourthPanel.description}}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{fourthPanel.btnTxt}}
          v-icon.primary--text {{fourthPanel.btnIcon}}
      v-col(cols="12" md="6" justify="center" align="center").panel-image
        picture-source(
          customPath="enterprise/"
          :image="fourthPanel.image"
          :imageAlt="fourthPanel.header"
          imageFileExtension=".webp"
        )
</template>

<script>
// constants
import { FOURTH_PANEL } from '../enterprise-contents';
// components
import PictureSource from '~/components/commons/PictureSource';

export default {
  components: { PictureSource },
  data () {
    this.fourthPanel = FOURTH_PANEL;
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
@media screen and (min-width: 1024px) {
  .panel-image {
    margin-left: 4%;
  }
}
@media screen and (min-width: 1920px) {
  .panel-image {
    margin-left: 5%;
  }
}
</style>
