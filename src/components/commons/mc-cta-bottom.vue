<template lang="pug">
  v-container.pt-5
    v-layout(row justify-center).pt-5
      v-flex(xs12 md12).text-xs-center
        h2(:class="{'pre-white-space' : !$isMobile}").font-xl.lh-title.font-work-sans.cta-text {{ ctaText }}
        p(:class="{'pre-white-space' : !$isMobile}").font-18.font-source-sans.pt-3 {{ ctaSubText }}
        div.text-xs-center.pt-2
          v-btn(
            :color="btnColor"
            large
            dark
          ).text-none.font-weight-bold {{ ctaBtnText }}
    br
    v-layout(row justify-center v-if="ctaSecondaryBtnText")
      v-flex(xs12 md12).text-xs-center
        v-btn(
          flat
          :color="$mcColors.mcBlue"
        ).text-none.font-weight-bold {{ ctaSecondaryBtnText }}
      br
    v-layout(row justify-center).py-5
      v-flex(xs12 md12).text-xs-center
        img(
          :src="require(`@/assets/images/${ctaImage}.png`)"
          :alt="ctaImage"
          :width="!$isMobile ? '70%' : '90%'"
        )
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
    },
    btnColor: {
      type: String,
      default: '#2e9fdf'
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
    ctaSubText () {
      if (!this.ctaContent) return '';
      if (!this.ctaContent.subtext) return '';
      return this.ctaContent.subtext;
    },
    ctaBtnText () {
      return !this.ctaContent ? 'Get Started' : this.ctaContent.btnText;
    },
    ctaImage () {
      return !this.ctaContent || !this.ctaContent.image ? 'mycure-web-footer' : this.ctaContent.image;
    },
    ctaSecondaryBtnText () {
      return !this.ctaContent ? '' : this.ctaContent.secondaryBtnText;
    }
  }
};
</script>