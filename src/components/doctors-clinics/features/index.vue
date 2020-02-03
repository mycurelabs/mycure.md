<template lang="pug">
  div.pt-5.white
    features-diagram(
      :title="title"
      :image="image"
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
      image: 'mycure-home-web-individual-clinic-diagram-banner'
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