<template lang="pug">
  div(:class="mainDiv")
    v-container(
      v-for="(panel, key) in moduleGroup"
      :key="key"
    ).py-10
      v-row(justify="center" v-if="key === 0 ? 'mb-n3' : 'mb-n4'")
        v-col(cols="10").text-center
          span(:class="panelGroup") {{ panel.group }}
          br
          span(:class="panelDescription").module-group-description {{ panel.description }}
      br
      v-row
        v-col(
          v-for="(moduleItem, index) in panel.modules"
          :key="index"
          cols="12"
          md="4"
          :class="!$isMobile && moduleItem.offset ? 'offset-md-2' : 'offset-md-0'"
        ).pa-10.module-item
          module-item(:moduleItem="moduleItem")
</template>

<script>
import { FEATURE_MODULE_GROUPS } from './constants';
import ModuleItem from './module-item.vue';

export default {
  components: {
    ModuleItem,
  },
  data () {
    this.moduleGroup = FEATURE_MODULE_GROUPS;
    return {};
  },
  computed: {
    mainDiv () {
      return [this.$isMobile ? 'pt-5' : ''];
    },
    panelGroup () {
      return [this.$isMobile ? 'font-30' : 'font-40'];
    },
    panelDescription () {
      return [this.$isMobile ? 'font-18' : 'font-21'];
    },
  },
};
</script>

<style scoped>
.module-group-description {
  color: #a7a7a7;
}

.module-item {
  text-align: center;
}
</style>
