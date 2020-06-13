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
/* Pixel 2/XL */
@media only screen
  and (device-width: 411px)
  and (device-height: 731px)
  and (-webkit-min-device-pixel-ratio: 2) {
  .item-container {
    min-height: 250px;
  }
  .item-description {
    top: 35%;
  }
}
@media only screen
  and (device-width: 411px)
  and (device-height: 823px)
  and (-webkit-min-device-pixel-ratio: 2) {
  .item-container {
    min-height: 260px;
  }
  .item-description {
    top: 35%;
  }
}
/* iphone 5/SE */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
  .item-container {
    min-height: 225px;
  }
  .item-description {
    top: 30%;
  }
}
/* iphone 6/7/8 */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {
  .item-container {
    min-height: 240px;
  }
  .item-description {
    top: 35%;
  }
}
@media screen and (device-width: 768px) {
  .item-container {
    min-height: 300px;
  }
}
@media screen and (device-width: 1920px) {
  .item-container {
    min-height: 300px;
  }
}
@media screen and (device-width: 2304px) {
  .item-container {
    min-height: 300px;
  }
}
@media screen and (device-width: 2560px) {
  .item-container {
    min-height: 300px;
  }
}
</style>
