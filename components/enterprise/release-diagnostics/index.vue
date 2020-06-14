<template lang="pug">
  v-container#diagnostic-centers.py-12
    v-row(justify="center" align="center")
      v-col(cols="12" md="5" align-self="center" v-if="$isMobile").tenthPanel-description
        p.font-16.mt-3.font-gray.primary--text {{tenthPanel.subHeader}}
        h1.font-30.lh-title.pb-3.font-weight-light {{tenthPanel.header}}
        p.text-justify.font-16.mt-3.font-gray {{tenthPanel.description}}
          a(@click="goToFeatures").font-16.font-weight-bold {{tenthPanel.descriptionLink}}
        div(v-for="(data, key) in tenthPanel.list" :key="key")
          img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
          span.font-16.font-gray.pl-3 {{data.description}}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{tenthPanel.btnTxt}}
          v-icon.primary--text {{tenthPanel.btnIcon}}
      v-col(cols="12" md="6" justify="center" align="center")
        img(v-lazy="require(`~/assets/images/enterprise/${tenthPanel.image}`)" width="100%" :alt="tenthPanel.header").tenthPanel-image
      v-col(cols="12" md="5" align-self="center" v-if="!$isMobile").tenthPanel-description
        p.font-16.mt-3.font-gray.primary--text {{tenthPanel.subHeader}}
        h1.font-30.lh-title.pb-3.font-weight-light {{tenthPanel.header}}
        p.text-justify.font-16.mt-3.font-gray {{tenthPanel.description}}
          a(@click="goToFeatures").font-16.font-weight-bold {{tenthPanel.descriptionLink}}
        div(v-for="(data, key) in tenthPanel.list" :key="key")
          img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
          span.font-16.font-gray.pl-3 {{data.description}}
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{tenthPanel.btnTxt}}
          v-icon.primary--text {{tenthPanel.btnIcon}}
</template>

<script>
import { TENTH_PANEL } from '../enterprise-contents';
export default {
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
@media screen and (device-width: 1024px) {
  .tenthPanel-image {
    margin-left: -20%;
    width: 100%;
  }
}
@media screen and (min-width: 1366px) {
  .tenthPanel-description {
    margin-left: 55px;
  }
}
</style>
