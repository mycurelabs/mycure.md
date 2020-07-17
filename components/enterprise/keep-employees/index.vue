<template lang="pug">
  v-container#corporate-clinics.py-12.panel-keep-employees
    v-row(justify="center" align="center")
      //- IMAGE
      v-col(v-if="!$isMobile" cols="12" md="5" align="center")
        picture-source(
          custom-path="enterprise/"
          image-file-extension=".webp"
          image-width="105%"
          :image="eightPanel.image"
          :image-alt="eightPanel.header"
        )
      //- DESCRIPTION
      v-col(cols="12" md="4" offset-md="1" align-self="center")
        p.font-16.mt-3.font-gray.primary--text {{ eightPanel.subHeader }}
        h1.font-30.lh-title.pb-3.font-weight-light {{ eightPanel.header }}
        //- p(:class="{'pre-white-space': $isRegularScreen}").text-justify.font-16.mt-3.font-gray {{ eightPanel.description }}
        p.text-justify.font-16.mt-3.font-gray {{ eightPanel.description }}
          a(@click="goToFeatures").font-16.font-weight-bold {{ eightPanel.descriptionLink }}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.font-18.text-capitalize.primary--text {{ eightPanel.btnTxt }}
          v-icon.primary--text {{ eightPanel.btnIcon }}
      //- MOBILE IMAGE
      v-col(v-if="$isMobile" cols="12" md="5" justify="center" align="center")
        picture-source(
          custom-path="enterprise/"
          image-file-extension=".webp"
          :image="eightPanel.image"
          :image-alt="eightPanel.header"
        )
</template>

<script>
// constants
import { EIGHT_PANEL } from '../enterprise-contents';
// components
import PictureSource from '~/components/commons/PictureSource';
// utils
// import { parseTextWithNewLine } from '~/utils/newline';

export default {
  components: { PictureSource },
  data () {
    this.eightPanel = EIGHT_PANEL;
    // this.eightPanel = {
    //   ...EIGHT_PANEL,
    //   description: parseTextWithNewLine(EIGHT_PANEL.description, [
    //     'mental health ',
    //     'sure your ',
    //     'medical ',
    //     'Level up ',
    //     'clinics ',
    //     'human ',
    //   ]),
    // };
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
</style>
