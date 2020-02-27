<template lang="pug">
  div
    features-diagram(
      v-if="!$isMobile"
      :title="title"
      :description="panelContent.description"
      :image="panelContent.image"
    )
    div(v-else)
      v-container
        v-layout(row justify-center)
          h1.font-40.text-xs-center.lh-title {{ title }}
        br
        p.font-s.text-xs-center.pt-3 {{ panelContent.description }}
        mobile-diagram-carousel(
          :slides="slides"
          :items="solutions"
        )

</template>

<script>
// utils
import { parseTextWithNewLine } from '@/utils';
// constants
import {
  CONTENT,
  SLIDES,
  SOLUTIONS
} from './constants';
// components
import FeaturesDiagram from '@/components/commons/features-diagram';
import MobileDiagramCarousel from '@/components/commons/mobile-diagram-carousel';

export default {
  components: {
    FeaturesDiagram,
    MobileDiagramCarousel
  },
  data () {
    return {
      panelContent: CONTENT,
      slides: SLIDES,
      solutions: SOLUTIONS
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