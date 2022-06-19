<template lang="pug">
div(:style="customStyle").timeline-content.q-px-sm
  div(v-if="showTopLine" :style="{height: `${topLine}px`}").timeline-content-horizontal-line
  slot(name="default")
  div(v-if="showBottomLine" :style="{height: `${bottomLine}px`}").timeline-content-horizontal-line
</template>

<script>
import { computed, ref } from 'vue';
export default {
  props: {
    width: {
      type: [String, Number],
      default: 200,
    },
    marginTop: {
      type: [String, Number],
      default: 0,
    },
    bottomLine: {
      type: [String, Number],
      default: null,
    },
    topLine: {
      type: [String, Number],
      default: null,
    },
  },
  setup (props) {
    const customStyle = ref({});
    const showBottomLine = computed(() => !!props.bottomLine);
    const showTopLine = computed(() => !!props.topLine);
    customStyle.value.width = `${props.width}px`;
    customStyle.value.marginTop = `${props.marginTop}px`;
    return {
      customStyle,
      showBottomLine,
      showTopLine,
    };
  },
};
</script>

<style scoped>
.timeline-content {
  padding: 20 0 20 0;
}

.timeline-content-horizontal-line {
  width: 1px;
  border-left: 2px dotted #0099cc;
  margin: 0px auto;
}
</style>
