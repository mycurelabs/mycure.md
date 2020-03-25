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
        h1.font-work-sans.font-30.pre-white-space.text-center.lh-title {{ title }}
        br
        p.font-s.text-center.pt-3 {{ panelContent.description }}
        mobile-diagram-carousel(
          :slides="slides"
          :items="solutions"
        )
</template>

<script>
// constants
import {
  CONTENT,
  SLIDES,
  SOLUTIONS,
} from './constants';
// utils
import { parseTextWithNewLine } from '~/utils/newline';
// components
import FeaturesDiagram from '~/components/commons/features-diagram';
import MobileDiagramCarousel from '~/components/commons/mobile-diagram-carousel';

export default {
  components: {
    FeaturesDiagram,
    MobileDiagramCarousel,
  },
  data () {
    this.panelContent = CONTENT;
    this.slides = SLIDES;
    this.solutions = SOLUTIONS;
    return {};
  },
  computed: {
    title () {
      const title = CONTENT.title;
      return !this.$isMobile
        ? parseTextWithNewLine(title, ['better'])
        : parseTextWithNewLine(title, ['solutions', 'better']);
    },
  },
};
</script>
