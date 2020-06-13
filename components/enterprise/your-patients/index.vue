<template lang="pug">
  v-container.py-12.your-patients-contents
    v-row(justify="center")
      v-col(cols="12" md="8" lg="6" justify="center")
        h1.text-center.font-30.lh-title.pb-3.font-weight-light {{secondPanelHeader.header}}
        p.text-center.font-18.mt-3.font-gray {{secondPanelHeader.description}}
    v-row(justify="center" v-if="!$isMobile")
      v-col(
        cols="12"
        md="4"
        v-for="(data, key) in secondPanelContents"
        :key="key"
      ).text-center.column-container
        div.text-center.img-container
          img(v-lazy="require(`~/assets/images/enterprise/${data.image}`)" :alt="data.header")
        h1.font-25.lh-title.pb-3.font-weight-light.column-head.mt-4 {{data.header}}
        v-btn(text @click="onClick").get-started-btn.mt-4
          strong.text-capitalize.primary--text {{data.btnTxt}}
          v-icon.primary--text {{data.btnIcon}}
    v-row(justify="center" v-if="$isMobile")
      v-col(
        cols="12"
        md="5"
        align="center"
        justify="center"
        v-for="(data, key) in secondPanelContents"
        :key="key"
      )
        h1.font-30.lh-title.pb-3.font-weight-light {{data.header}}
        v-btn(text @click="onClick").my-5
          strong.text-capitalize.primary--text {{data.btnTxt}}
          v-icon.primary--text {{data.btnIcon}}
        img(
          v-lazy="require(`~/assets/images/enterprise/${data.image}`)"
          :alt="data.header"
          width="100%"
        )
</template>

<script>
import { SECOND_PANEL_HEADER, SECOND_PANEL_CONTENTS } from '../enterprise-contents';
export default {
  data () {
    this.secondPanelHeader = SECOND_PANEL_HEADER;
    this.secondPanelContents = SECOND_PANEL_CONTENTS;
    return {};
  },
  methods: {
    onClick () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.column-container {
  position: relative;
  min-height: 200px;
}
.img-container {
  height: 350px;
}
.img-container img {
  height: 100%;
}
.column-head {
  margin-bottom: 20px;
}
.get-started-btn {
  position: absolute;
  margin-left: -19%;
  bottom: 0px;
}
@media screen and (device-width: 1024px) {
  .your-patients-contents {
    margin-top: -85%;
  }
  .img-container {
    height: 250px;
  }
  .img-container img {
    height: 100%;
  }
  .get-started-btn {
    margin-left: -25%;
  }
}
@media screen and (device-width: 1280px) {
  .your-patients-contents {
    margin-top: -10%;
  }
}
@media screen and (device-width: 2304px) {
  .your-patients-contents {
    margin-top: -10%;
  }
  .get-started-btn {
    margin-left: -12%;
  }
}@media screen and (device-width: 2560px) {
  .get-started-btn {
    margin-left: -12%;
  }
}
</style>
