<template lang="pug">
  v-container.py-12
    v-row(justify="center" align="center")
      v-col(
        cols="12"
        md="4"
        align-self="center"
        :class="{ 'ml-6' : !$isMobile }"
      )
        p.font-16.mt-3.font-gray.primary--text {{ ninthPanel.subHeader }}
        h1.font-30.lh-title.pb-3.font-weight-light {{ ninthPanel.header }}
        //- MOBILE IMAGE
        div(v-if="$isMobile").text-center
          br
          picture-source(
            custom-path="enterprise/"
            image-file-extension=".webp"
            :image="ninthPanel.image"
            :image-alt="ninthPanel.header"
          )
        br
        //- DESCRIPTION
        p.text-justify.font-16.mt-3.font-gray {{ ninthPanel.description }}
          a(@click="goToFeatures" style="color: gray;").font-16.font-weight-bold {{ ninthPanel.descriptionLink }}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.font-18.text-capitalize.primary--text {{ ninthPanel.btnTxt }}
          v-icon.primary--text {{ ninthPanel.btnIcon }}
      //- IMAGE
      v-col(
        v-if="!$isMobile"
        cols="12"
        md="5"
        offset-md="1"
        justify="center"
        align="center"
      )
        picture-source(
          custom-path="enterprise/"
          image-file-extension=".webp"
          :class="{ 'ml-n10' : !$isMobile }"
          :image="ninthPanel.image"
          :image-alt="ninthPanel.header"
        )
</template>

<script>
// constants
import { NINTH_PANEL } from '../enterprise-contents';
// components
import PictureSource from '~/components/commons/PictureSource';

export default {
  components: { PictureSource },
  data () {
    this.ninthPanel = NINTH_PANEL;
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
