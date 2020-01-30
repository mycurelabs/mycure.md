<template lang="pug">
  v-container
    v-layout(row justify-center)
      v-flex(xs12 md12).text-xs-center
        h2.font-40.lh-title.font-work-sans.cta-text.pre-white-space {{ ctaText }}
        br
        div.text-xs-center.pt-3
          v-btn(
            :color="$mcColors.mcBlue"
            large
            dark
          ).text-none.font-weight-bold {{ ctaBtnText }}
    v-layout(row justify-center).py-5
      v-flex(xs12 md12).text-xs-center
        img(:src="require(`@/assets/images/${ctaImage}.png`)")
</template>

<script>
import { parseTextWithNewLine } from '@/utils';
export default {
  props: {
    ctaContent: {
      type: Object,
      default: undefined
    },
    parseText: {
      type: Boolean,
      default: false
    },
    parseIndicators: {
      type: Array,
      default: () => [],
      required: () => this.parseText ? true : false
    }
  },
  computed: {
    ctaText () {
      if (!this.ctaContent) {
        const text = 'Find the perfect solution for your health facility';
        return parseTextWithNewLine(text, ['for']);
      } else {
        return this.parseText
          ? parseTextWithNewLine(this.ctaContent.text, this.parseIndicators)
          : this.ctaContent.text;
      }
    },
    ctaBtnText () {
      return !this.ctaContent ? 'Get Started' : this.ctaContent.btnText;
    },
    ctaImage () {
      return !this.ctaContent ? 'mycure-web-footer' : this.ctaContent.image;
    }
  }
};
</script>