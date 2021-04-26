<template lang="pug">
  v-container.py-12.panel-decision
    v-row(justify="center")
      v-col(cols="12" md="7" justify="center")
        h1.text-center.font-30.lh-title.pb-3.font-weight-light {{fifthPanelHeader.header}}
        p.text-center.font-16.mt-3.font-gray {{fifthPanelHeader.description}}
    v-row.pb-2
      v-col(
        v-for="(data, key) in fifthPanelContent"
        :key="key"
        justify="center"
        cols="12"
        md="4"
        :offset-md="key === 0 || key === 2 ? '3' : ''"
        :class="itemPaddingClass"
      ).d-inline-flex
        img(:src="require(`~/assets/images/${data.image}`)" :alt="data.imageTitle" height="30").items
        v-col().items.mt-n2
          span.font-gray.font-16 {{data.imageTitle}}
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
  computed: {
    itemPaddingClass () {
      return [this.$isMobile ? 'item-mobile' : 'item-web'];
    },
  },
};
</script>

<style scoped>
.item-web {
  min-height: 85px;
  margin-bottom: -3%;
}
.item-mobile {
  margin-left: 10%;
  min-height: 50px;
  margin-bottom: -3%;
}
</style>
