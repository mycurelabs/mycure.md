<template lang="pug">
  v-container#medical-arts-centers.py-12.panel-enriching-hearts
    v-row(justify="center" align="center")
      v-col(cols="12" md="5" align-self="center").ninthPanel-description
        p.font-18.mt-3.font-gray.primary--text {{ninthPanel.subHeader}}
        h1.font-30.lh-title.pb-3.font-weight-light {{ninthPanel.header}}
        p.font-18.mt-3.font-gray {{ninthPanel.description}} <span class="font-18 font-weight-bold"><a @click="goToFeatures">{{ninthPanel.descriptionLink}}</a></span>
        v-btn(text @click="onGetStarted").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{ninthPanel.btnTxt}}
          v-icon.primary--text {{ninthPanel.btnIcon}}
      v-col(cols="12" md="6" justify="center" align="center")
        img(v-lazy="require(`~/assets/images/enterprise/${ninthPanel.image}`)" width="90%" :alt="ninthPanel.header").ninthPanel-image
</template>

<script>
import { NINTH_PANEL } from '../enterprise-contents';
export default {
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

<style scoped>
a {
  color:gray;
}
.panel-enriching-hearts {
  position: relative;
  z-index: 2;
}
@media screen and (device-width: 1024px) {
  .ninthPanel-image {
    width: 110%;
    margin-left: 50px;
  }
  .ninthPanel-description {
    margin-left: -10%;
  }
}
@media screen and (min-width: 1366px) {
  .ninthPanel-description {
    margin-left: 55px;
  }
}
</style>
