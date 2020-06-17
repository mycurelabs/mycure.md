<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(cols="12" md="5" align-self="center").fourthPanel-description
        h1.font-30.lh-title.pb-3.font-weight-light {{fourthPanel.header}}
        p.text-justify.font-16.mt-3.font-gray {{fourthPanel.description}}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{fourthPanel.btnTxt}}
          v-icon.primary--text {{fourthPanel.btnIcon}}
      v-col(cols="12" md="6" justify="center" align="center")
        picture
          source(
            :srcset="fourthPanel.image"
            :alt="fourthPanel.header"
            width="100%"
            type="image/webp"
          )
          source(
            :srcset="fourthPanel.imagePng"
            :alt="fourthPanel.header"
            width="100%"
            type="image/png"
          )
          img(v-lazy="fourthPanel.image" width="100%" :alt="fourthPanel.header").fourthPanel-image
</template>

<script>
import { FOURTH_PANEL } from '../enterprise-contents';
export default {
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
@media screen and (device-width: 1024px) {
  .fourthPanel-image {
    width: 110%;
    margin-left: 50px;
  }
  .fourthPanel-description {
    margin-left: -10%;
  }
}
@media screen and (min-width: 1366px) {
  .fourthPanel-description {
    margin-left: 55px;
  }
}
</style>
