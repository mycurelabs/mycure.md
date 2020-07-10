<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(cols="12" md="4" align-self="center" :class="{ 'ml-6' : !$isMobile }")
        h1.font-30.lh-title.pb-3.font-weight-light {{ fourthPanel.header }}
        p.text-justify.font-16.mt-3.font-gray {{ fourthPanel.description }}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{ fourthPanel.btnTxt }}
          v-icon.primary--text {{ fourthPanel.btnIcon }}
      v-col(cols="12" md="5" offset-md="1" justify="center" align="center")
        picture-source(
          custom-path="enterprise/"
          image-file-extension=".webp"
          :image-width="[ !$isMobile ? '106%' : '100%' ]"
          :class="{ 'ml-n10' : !$isMobile }"
          :image="fourthPanel.image"
          :image-alt="fourthPanel.header"
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
</style>
