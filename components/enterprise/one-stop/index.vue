<template lang="pug">
  v-container#multispecialty-clinics.py-12
    v-row(justify="center" align="center")
      v-col(cols="12" md="5" align-self="center").seventhPanel-description
        p.font-18.mt-3.font-gray.primary--text {{seventhPanel.subHeader}}
        h1.font-30.lh-title.pb-3.font-weight-light {{seventhPanel.header}}
        p.text-justify.font-18.mt-3.font-gray {{seventhPanel.description}} <span class="font-18 font-weight-bold"><a @click="goToFeatures">{{seventhPanel.descriptionLink}}</a></span>
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{seventhPanel.btnTxt}}
          v-icon.primary--text {{seventhPanel.btnIcon}}
      v-col(cols="12" md="6" justify="center" align="center")
        img(v-lazy="require(`~/assets/images/enterprise/${seventhPanel.image}`)" width="100%" :alt="seventhPanel.header").seventhPanel-image
</template>

<script>
import { SEVENTH_PANEL } from '../enterprise-contents';
export default {
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
@media screen and (device-width: 1024px) {
  .seventhPanel-image {
    width: 110%;
    margin-left: 50px;
  }
  .seventhPanel-description {
    margin-left: -10%;
  }
}
@media screen and (min-width: 1366px) {
  .seventhPanel-description {
    margin-left: 55px;
  }
}
</style>
