<template lang="pug">
  v-container.py-12.panel-decision
    v-row(justify="center")
      v-col(cols="12" md="7" justify="center")
        h1.text-center.font-30.lh-title.pb-3.font-weight-light {{fifthPanelHeader.header}}
        p.text-center.font-18.mt-3.font-gray {{fifthPanelHeader.description}}
    v-row(justify="center")
      v-col(
        cols="6"
        md="3"
        align="center"
        justify="center"
        v-for="(data, key) in fifthPanelContent"
        :key="key"
      ).py-12
        img(v-lazy="require(`~/assets/images/enterprise/${data.image}`)" :alt="data.imageTitle")
        p.text-center.font-18.mt-3 {{data.imageTitle}}
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
</style>
