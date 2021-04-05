<template lang="pug">
  div.pt-10
    div(v-if="isMobile")
      v-container.pt-10
        h1.font-30.pre-white-space.text-center.lh-title {{ title }}
        br
        p.font-s.text-center.pt-3 {{ panelContent.description }}
        mobile-diagram-carousel(
          :slides="slides"
          :items="solutions"
          :slideImageExtension="imageExtension"
          :customSlidePath="customPath"
        )
    div(v-else).hearts.pt-10
      features-diagram(
        imageWidth="60%"
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
        ? parseTextWithNewLine(title, ['data.', 'reports.'])
        : parseTextWithNewLine(title, ['organize', 'Produce', 'Make']);
    },
    description () {
      const description = CONTENT.description;
      return parseTextWithNewLine(description, ['EMR.', 'daily']);
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

<style scoped>
.hearts {
  background-image: url('../../../assets/images/mycure-heart/heart-decor-right.webp'), url('../../../assets/images/mycure-heart/heart-decor-left.webp');
  background-position: top right, center left;
}
</style>
