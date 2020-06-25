<template lang="pug">
  v-container.py-12.panel-decision
    v-row(justify="center")
      v-col(cols="12" md="7" justify="center")
        h1.text-center.font-30.lh-title.pb-3.font-weight-light {{fifthPanelHeader.header}}
        p.text-center.font-16.mt-3.font-gray {{fifthPanelHeader.description}}
    v-row(justify="center" align="center")
      v-col(
        cols="12"
        md="4"
        justify="center"
        align="center"
        v-for="(data, key) in fifthPanelContent"
        :key="key"
        offset-md="1"
      ).d-inline-flex.item-container
        img(:src="require(`~/assets/images/${data.image}`)" :alt="data.imageTitle" height="30").items
        v-col(align="start").items.mt-n2
          span.font-16 {{data.imageTitle}}
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
  min-height: 80px;
}
.items {
  top: 0;
}
</style>
