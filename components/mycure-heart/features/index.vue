<template lang="pug">
  div
    div(v-if="isMobile")
      v-container.pt-10
        h1.font-work-sans.font-30.pre-white-space.text-center.lh-title {{ title }}
        br
        p.font-s.text-center.pt-3 {{ panelContent.description }}
        mobile-diagram-carousel(
          :slides="slides"
          :items="solutions"
          :slideImageExtension="imageExtension"
          :customSlidePath="customPath"
        )
    features-diagram(
      v-else
      :title="title"
      :description="description"
      :image="panelContent.image"
      :imageExtension="imageExtension"
      :customPath="customPath"
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
    this.imageExtension = '.webp';
    this.customPath = 'mycure-heart/';
    return {
      isMobile: true,
    };
  },
  computed: {
    title () {
      const title = CONTENT.title;
      return !this.$isMobile
        ? parseTextWithNewLine(title, ['Produce'])
        : parseTextWithNewLine(title, ['organize', 'Produce', 'Make']);
    },
    description () {
      const description = CONTENT.description;
      return parseTextWithNewLine(description, ['modules']);
    },
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
};
</script>
