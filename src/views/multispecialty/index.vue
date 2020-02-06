<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    workflow
    //- 3rd panel
    features
    //- 4th panel
    storyflow(
      :introduction="storyflowIntro"
      :storyflow="storyflowItems"
      horizontal
      :customPath="storyflowCustomPath"
      white-bg
    )
    //- cta
    div.white
      mc-cta-bottom(
        parse-text
        :parseIndicators="['work']"
        :ctaContent="ctaContent"
      )
</template>

<script>
import Usp from '@/components/multispecialty/usp';
import Workflow from '@/components/multispecialty/workflow';
import Features from '@/components/multispecialty/features';
import Storyflow from '@/components/commons/storyflow';
import McCtaBottom from '@/components/commons/mc-cta-bottom';
import VueScrollTo from 'vue-scrollto';
import STORYFLOW_ITEMS from './storyflow-items.json';
import { parseTextWithNewLine } from '@/utils';

export default {
  components: {
    Usp,
    Workflow,
    Features,
    Storyflow,
    McCtaBottom
  },
  data () {
    return {
      storyflowItems: STORYFLOW_ITEMS,
      storyflowCustomPath: 'multispecialty/',
      ctaContent: {
        text: 'Premium clinical services work best with premium technology.',
        subtext: this.parseCtaSubtext(),
        btnText: 'Start Free',
        image: 'mycure-web-footer'
      }
    };
  },
  computed: {
    storyflowIntro () {
      const text = 'Make your patients and your staff become more engaged.';
      return parseTextWithNewLine(text, ['staff']);
    }
  },
  methods: {
    parseCtaSubtext () {
      const text = 'Your multispecialty clinic deserves the most advanced clinic management system around. Do more with MYCURE technology by your side.';
      return parseTextWithNewLine(text, ['around.']);
    }
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  }
};
</script>