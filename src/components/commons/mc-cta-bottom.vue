<template lang="pug">
  v-container.pt-3
    v-layout(row justify-center).pt-5
      v-flex(xs12 md12).text-xs-center
        h2(:class="[{'pre-white-space' : !$isMobile}, $isMobile ? 'font-36' : 'font-40']").lh-title.font-work-sans.cta-text {{ ctaText }}
        p(:class="{'pre-white-space' : !$isMobile}").font-18.font-source-sans.pt-3 {{ ctaSubText }}
        div.text-xs-center.pt-2
          v-btn(
            :color="btnColor"
            large
            dark
            :id="ctaBtnId"
            @click.stop="handleCtaBtnClick"
          ).text-none.font-s.font-weight-bold {{ ctaBtnText }}
    br
    v-layout(row justify-center v-if="ctaSecondaryBtnText")
      v-flex(xs12 md12).text-xs-center
        v-btn(
          flat
          :color="$mcColors.mcBlue"
          :id="ctaSecondaryBtnId"
          :to="{ name: ctaSecondaryBtnLink }"
          @click.stop="handleCtaSecondaryBtnClick"
        ).text-none.font-weight-bold {{ ctaSecondaryBtnText }}
      br
    v-layout(row justify-center).py-5
      v-flex(xs12 md12).text-xs-center
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
    },
    btnColor: {
      type: String,
      default: '#7fad22'
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
      return !this.ctaContent || !this.ctaContent.btnLink ? 'home' : this.ctaContent.btnLink;
    },
    ctaSecondaryBtnLink () {
      return !this.ctaContent || !this.ctaContent.secondaryBtnLink ? 'calendly' : this.ctaContent.secondaryBtnLink;
    }
  },
  methods: {
    handleCtaBtnClick () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.ctaBtnId}`,
        eventLabel: this.ctaBtnId
      });
      if (this.ctaBtnId !== 'cta-home-btn') {
        this.$router.push({ 
          name: this.ctaBtnLink,
          ...( this.ctaBtnLink === 'home') && { params: { scrollHealthSuites: true } }
        });
      }
      this.$emit('btnClick');
    },
    handleCtaSecondaryBtnClick () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.ctaSecondaryBtnId}`,
        eventLabel: this.ctaSecondaryBtnId
      });
    }
  }
};
</script>