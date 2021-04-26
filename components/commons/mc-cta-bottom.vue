<template lang="pug">
  v-container.pt-3
    v-row(v-if="!imageOnly" justify="center").pt-5
      v-col(cols="12").text-center
        h2(:class="ctaTextClasses").lh-title {{ctaText}}
        p(:class="ctaSubTextClasses").font-18.pt-3 {{ctaSubText}}
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
    v-row(v-if="ctaSecondaryBtnText && !imageOnly" justify="center")
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
          v-if="!isMobile"
          :src="require(`~/assets/images/${customPath}${ctaImage}.png`)"
          :alt="ctaImage"
          width="70%"
        )
        img(
          v-else
          :src="require(`~/assets/images/${customPath}${ctaMobileImage}.png`)"
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
    imageOnly: {
      type: Boolean,
      default: false,
    },
    customPath: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      isMobile: true,
    };
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
    ctaTextClasses () {
      const webClasses = ['pre-white-space', 'font-40'];
      const mobileClasses = ['font-36'];
      return this.isMobile
        ? mobileClasses
        : webClasses;
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
    ctaSubTextClasses () {
      return [{ 'pre-white-space': !this.$isMobile }];
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
  methods: {
    handleCtaBtnClick () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.ctaBtnId}`,
        eventLabel: this.ctaBtnId,
      });
      if (this.ctaBtnId !== 'cta-home-btn' && this.ctaBtnId !== 'cta-fight-covid-19-btn') {
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
</style>
