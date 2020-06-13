<template lang="pug">
  v-container.py-12.panel-decision
    v-row(justify="center")
      v-col(cols="12" md="7" justify="center")
        h1.text-center.font-30.lh-title.pb-3.font-weight-light {{fifthPanelHeader.header}}
        p.text-center.font-18.mt-3.font-gray {{fifthPanelHeader.description}}
    v-row(justify="center" align="center")
      v-col(
        cols="6"
        md="3"
        justify="center"
        align="center"
        v-for="(data, key) in fifthPanelContent"
        :key="key"
      ).item-container
        v-col(
          cols="6"
          md="4"
        )
          img(v-lazy="require(`~/assets/images/enterprise/${data.image}`)" :alt="data.imageTitle" width="100%")
        v-col(
          cols="6"
          md="8"
        ).item-description
          p.text-center.font-18 {{data.imageTitle}}
</template>

<script>
import { FIFTH_PANEL_HEADER, FIFTH_PANEL_CONTENT } from '../enterprise-contents';
export default {
  data () {
    this.fifthPanelHeader = FIFTH_PANEL_HEADER;
    this.fifthPanelContent = FIFTH_PANEL_CONTENT;
    return {

    };
  },
};
</script>

<style scoped>
.panel-decision {
  position: relative;
  z-index: 2;
}
.item-container {
  position: relative;
  min-height: 175px;
}
.item-description {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 60%;
}
@media screen and (device-width: 360px) {
  .item-container {
    min-height: 250px;
  }
  .item-description {
    top: 30%;
  }
}
@media screen and (device-width: 375px) {
  .item-container {
    min-height: 250px;
  }
  .item-description {
    top: 30%;
  }
}
@media screen and (device-width: 768px) {
  .item-container {
    min-height: 300px;
  }
}
@media screen and (device-width: 2304px) {
  .item-container {
    min-height: 300px;
  }
}
</style>
