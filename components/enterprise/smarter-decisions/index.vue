<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(cols="12" md="7" justify="center")
        h1.text-center.font-30.lh-title.pb-3.font-weight-light {{fourthPanelHeader.header}}
        p.text-center.font-18.mt-3.font-gray {{fourthPanelHeader.description}}
    v-row(justify="center")
      v-col(
        cols="6"
        md="3"
        align="center"
        justify="center"
        v-for="(data, key) in fourthPanelContent"
        :key="key"
      ).py-12
        img(v-lazy="require(`~/assets/images/enterprise/${data.image}`)" :alt="data.imageTitle")
        p.text-center.font-18.mt-3 {{data.imageTitle}}
</template>

<script>
import { FOURTH_PANEL_HEADER, FOURTH_PANEL_CONTENT } from '../enterprise-contents';
export default {
  data () {
    this.fourthPanelHeader = FOURTH_PANEL_HEADER;
    this.fourthPanelContent = FOURTH_PANEL_CONTENT;
    return {

    };
  },
};
</script>
