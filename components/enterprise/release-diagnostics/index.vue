<template lang="pug">
  v-container#diagnostic-centers.py-12.diagnostic-centers
    v-row(justify="center" align="center")
      v-col(cols="12" md="5" align-self="center" v-if="$isMobile")
        p.font-16.mt-3.font-gray.primary--text {{tenthPanel.subHeader}}
        h1.font-30.lh-title.pb-3.font-weight-light {{tenthPanel.header}}
        p.text-justify.font-16.mt-3.font-gray {{tenthPanel.description}}
          a(@click="goToFeatures").font-16.font-weight-bold {{tenthPanel.descriptionLink}}
        div(v-for="(data, key) in tenthPanel.list" :key="key").d-flex.align-center.mb-2
          img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
          span.font-16.font-gray.pl-3 {{data.description}}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{tenthPanel.btnTxt}}
          v-icon.primary--text {{tenthPanel.btnIcon}}
      v-col(cols="12" md="6" justify="center" align="center").panel-image
        picture-source(
          customPath="enterprise/"
          :image="tenthPanel.image"
          :imageAlt="tenthPanel.header"
          imageFileExtension=".webp"
        )
      v-col(cols="12" md="5" align-self="center" v-if="!$isMobile")
        p.font-16.mt-3.font-gray.primary--text {{tenthPanel.subHeader}}
        h1.font-30.lh-title.pb-3.font-weight-light {{tenthPanel.header}}
        p.text-justify.font-16.mt-3.font-gray {{tenthPanel.description}}
          a(@click="goToFeatures").font-16.font-weight-bold {{tenthPanel.descriptionLink}}
        div(v-for="(data, key) in tenthPanel.list" :key="key").d-flex.align-center.mb-3
          img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
          span.font-16.font-gray.pl-3 {{data.description}}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{tenthPanel.btnTxt}}
          v-icon.primary--text {{tenthPanel.btnIcon}}
</template>

<script>
// constants
import { TENTH_PANEL } from '../enterprise-contents';
// components
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: { PictureSource },
  data () {
    this.tenthPanel = TENTH_PANEL;
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
.diagnostic-centers {
  position: relative;
  z-index: 5;
}
@media screen and (min-width: 1024px) {
  .panel-image {
    margin-right: 5%;
  }
}
</style>
