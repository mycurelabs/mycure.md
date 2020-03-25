<template lang="pug">
  v-container.pt-3
    v-row(justify="center").pt-5
      v-col(cols="12").text-center
        h2(:class="[{'pre-white-space' : !$isMobile}, $isMobile ? 'font-36' : 'font-40']").lh-title.cta-text {{ctaText}}
        p(:class="{'pre-white-space' : !$isMobile}").font-18.pt-3 {{ctaSubText}}
        div.text-xs-center.pt-2
          v-btn(
            :color="btnColor"
            large
            depressed
            dark
            :id="ctaBtnId"
            @click.stop="handleCtaBtnClick"
          ).text-none.font-s.font-weight-bold.cta-btn {{ctaBtnText}}
    br
    v-row(v-if="ctaSecondaryBtnText" justify="center")
      v-col(cols="12").text-center
        v-btn(
          text
          color="primary"
          :id="ctaSecondaryBtnId"
          :to="{ name: ctaSecondaryBtnLink }"
          @click.stop="handleCtaSecondaryBtnClick"
        ).text-none.font-weight-bold {{ctaSecondaryBtnText}}
      br
    v-row(justify="center").py-5
      v-col(cols="12").text-center
        img(
          v-if="!$isMobile"
          :src="require(`@/assets/images/${ctaImage}.png`)"
          :alt="ctaImage"
          width="70%"
        )
        img(
          v-else
          :src="require(`@/assets/images/${ctaMobileImage}.png`)"
          :alt="ctaMobileImage"
          width="95%"
        )
</template>

<script>
// - utils
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  props: {
    ctaContent: {
      type: Object,
      default: undefined,
    },
    parseText: {
      type: Boolean,
      default: false,
    },
    parseIndicators: {
      type: Array,
      default: () => [],
    },
    btnColor: {
      type: String,
      default: '#7fad22',
    },
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
      return !this.ctaContent ? ''
        : !this.ctaContent.subtext ? ''
          : this.ctaContent.subtext;
    },
    ctaBtnText () {
      return !this.ctaContent ? 'Get Started' : this.ctaContent.btnText;
    },
    ctaImage () {
      return !this.ctaContent || !this.ctaContent.image ? 'mycure-web-footer' : this.ctaContent.image;
    },
    ctaMobileImage () {
      return !this.ctaContent || !this.ctaContent.mobileImage ? 'mycure-web-footer-mobile' : this.ctaContent.mobileImage;
    },
    ctaSecondaryBtnText () {
      return !this.ctaContent ? 'Request A Demo' : this.ctaContent.secondaryBtnText;
    },
    ctaBtnId () {
      return `cta-${this.$route.name}-btn`;
    },
    ctaSecondaryBtnId () {
      return `cta-${this.$route.name}-secondary-btn`;
    },
    ctaBtnLink () {
      return !this.ctaContent || !this.ctaContent.btnLink ? 'index' : this.ctaContent.btnLink;
    },
    ctaSecondaryBtnLink () {
      return !this.ctaContent || !this.ctaContent.secondaryBtnLink ? 'calendly' : this.ctaContent.secondaryBtnLink;
    },
  },
  methods: {
    handleCtaBtnClick () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.ctaBtnId}`,
        eventLabel: this.ctaBtnId,
      });
      if (this.ctaBtnId !== 'cta-home-btn') {
        this.$nuxt.$router.push({
          name: this.ctaBtnLink,
          ...(this.ctaBtnLink === 'index') && { params: { scrollHealthSuites: true } },
        });
      }
      this.$emit('btnClick');
    },
    handleCtaSecondaryBtnClick () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.ctaSecondaryBtnId}`,
        eventLabel: this.ctaSecondaryBtnId,
      });
    },
  },
};
</script>

<style>
.cta-btn {
  letter-spacing: normal;
}
.cta-text {
  font-family: 'Work Sans', 'Source Sans Pro', sans-serif;
}
</style>
