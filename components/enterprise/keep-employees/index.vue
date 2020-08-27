<template lang="pug">
  v-container.py-12
    v-row(justify="center" align="center")
      //- IMAGE
      v-col(
        v-if="!$isMobile"
        cols="12"
        md="5"
        align="center"
      )
        picture-source(
          custom-path="enterprise/"
          image-file-extension=".webp"
          image-width="105%"
          :image="eightPanel.image"
          :image-alt="eightPanel.header"
        )
      v-col(
        cols="12"
        md="4"
        offset-md="1"
        align-self="center"
      )
        p.font-16.mt-3.font-gray.primary--text {{ eightPanel.subHeader }}
        h1.font-30.lh-title.pb-3.font-weight-light {{ eightPanel.header }}
        //- MOBILE IMAGE
        div(v-if="$isMobile").text-center
          br
          picture-source(
            custom-path="enterprise/"
            image-file-extension=".webp"
            :image="eightPanel.image"
            :image-alt="eightPanel.header"
          )
        br
        //- DESCRIPTION
        p.text-justify.font-16.mt-3.font-gray {{ eightPanel.description }}
          a(@click="goToFeatures" style="color: gray;").font-16.font-weight-bold {{ eightPanel.descriptionLink }}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.font-18.text-capitalize.primary--text {{ eightPanel.btnTxt }}
          v-icon.primary--text {{ eightPanel.btnIcon }}
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
