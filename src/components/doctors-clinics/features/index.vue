<template lang="pug">
  div.pt-5.white
    features-diagram(
      :title="title"
      :image="image"
      :image-width="$isMobile ? '100%' : '80%'"
    )
</template>

<script>
// utils
import { parseTextWithNewLine } from '@/utils';
// components
import FeaturesDiagram from '@/components/commons/features-diagram';
export default {
  components: {
    FeaturesDiagram
  },
  data () {
    return {
      image: 'mycure-group-clinic-diagram'
    };
  },
  computed: {
    title () {
      const title = 'Your buddy from medical school to clinical practice';
      return parseTextWithNewLine(title, ['school']);
    }
  }
};
</script>