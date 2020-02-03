<template lang="pug">
  div.pt-5
    features-diagram(
      :title="title"
      :description="panelContent.description"
      :image="panelContent.image"
    )
</template>

<script>
// utils
import { parseTextWithNewLine } from '@/utils';
// constants
import { CONTENT } from './constants';
// components
import FeaturesDiagram from '@/components/commons/features-diagram';
export default {
  components: {
    FeaturesDiagram
  },
  data () {
    return {
      panelContent: CONTENT,
    };
  },
  computed: {
    title () {
      const title = CONTENT.title;
      return !this.$isMobile ? parseTextWithNewLine(title, ['better']) : title;
    },
  }
};
</script>