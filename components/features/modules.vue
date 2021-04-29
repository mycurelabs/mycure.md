<template lang="pug">
  div(:class="mainDivClasses")
    v-container(
      v-for="(panel, key) in moduleGroup"
      :key="key"
    ).py-10
      v-row(justify="center" v-if="key === 0 ? 'mb-n3' : 'mb-n4'")
        v-col(cols="10").text-center
          span(:class="panelGroupClasses") {{ panel.group }}
          br
          span(:class="panelDescriptionClasses").module-group-description {{ panel.description }}
      br
      v-row(justify="center")
        v-col(
          v-for="(moduleItem, index) in panel.modules"
          align="center"
          cols="12"
          md="4"
          :key="index"
        ).pa-10.module-item
          module-item(:moduleItem="moduleItem")
</template>

<script>
import FeatureModules from './constants';
import ModuleItem from './module-item.vue';

export default {
  components: {
    ModuleItem,
  },
  data () {
    this.moduleGroup = FeatureModules();
    return {};
  },
  computed: {
    mainDivClasses () {
      return [{ 'pt-5': this.$isMobile }];
    },
    panelGroupClasses () {
      return [this.$isMobile ? 'font-30' : 'font-40'];
    },
    panelDescriptionClasses () {
      return [this.$isMobile ? 'font-18' : 'font-21'];
    },
  },
};
</script>

<style scoped>
.modulesPanel {
  position: relative;
  z-index: 5;
}
.module-group-description {
  color: #a7a7a7;
}

.module-item {
  text-align: center;
}
</style>
