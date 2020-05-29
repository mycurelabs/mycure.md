<template lang="pug">
  div(:class="{'white' : whiteBg }")
    div(v-if="!isMobile").pt-10.mt-10
      v-container
        v-row(v-if="metaTitle" justify="center").text-center
          strong.font-21.primary--text {{ metaTitle }}
        v-row(v-if="introduction" justify="center").text-center.pb50
          strong.font-40.introText.pre-white-space {{introduction}}
        v-row(v-if="description" justify="center").text-center.pb60
          span.font-18.pre-white-space {{ description }}
        div(v-if="!horizontal")
          v-row(v-for="(highlight,index) in storyflow" :key="index" justify="center").pb60
            v-col(cols="4" align-self="center").pr-5
              img(v-lazy="require(`@/assets/images/${customPath}${highlight.image}`)" :alt="highlight.title").storyflowAsset.right
            v-col(cols="5")
              span(v-if="hasTitle"  :style="highlightTitleFontStyle").lh-title {{highlight.title}}
              br
              br
              span.font-18 {{highlight.text}}
          br
          v-row(v-if="featuresButton" justify="center").pt-5
            v-btn(
              id="features-page-btn"
              @click.stop="handleFeaturesPageBtn"
              color="#18c551"
              :to="{ name: 'features' }"
              large
            ).mt-3.cta-btn
              strong.font-s.white--text.text-none Explore the Features
        div(v-else)
          v-row(justify="center")
            v-col(
              v-for="(highlight, index) in storyflow"
              align="center"
              :key="index"
              cols="4"
            ).text-center
              img(
                v-lazy="require(`@/assets/images/${customPath}${highlight.image}`)"
                :alt="highlight.title"
                :style="storyflowAssetHorizontal"
              )
              br
              strong(
                v-if="hasTitle"
                :style="highlightTitleFontStyle"
                :class="{'pre-white-space': parseTitles}"
              ) {{ parseTitle(highlight) }}
              br
              p.font-18.pt-3.mx-2 {{highlight.text}}
          v-row(v-if="featuresButton" justify="center" align="center").pt-10
            v-col(cols="4").text-center
              v-btn(
                id="features-page-btn"
                @click.stop="handleFeaturesPageBtn"
                color="primary"
                :to="{ name: 'features' }"
                large
              ).mt-3.cta-btn
                strong.font-s.white--text.text-none Explore the Features
    div(v-else).pt-5
      v-container.mx-1
        v-row(v-if="metaTitle" justify="center").text-center.pb-10
          strong.font-18.primary--text {{ metaTitle }}
        v-row(justify="center").text-center.pb-10
          strong.font-36.introText.lh-title {{introduction}}
        v-row(v-if="description" justify="center").text-center.pb-10
          span.font-18 {{ description }}
        v-col(v-for="(highlight,index) in storyflow" :key="index" justify="center")
          v-row(justify="center" align="center").pb-2
            img(v-lazy="require(`@/assets/images/${customPath}${highlight.image}`)" :alt="highlight.title").storyflowAsset
          br
          v-row(align="center").text-center
            v-col(cols="12")
              strong(v-if="hasTitle").font-30.lh-title.text-center {{highlight.title}}
          br
          v-row(align="center").px-2
            v-col(cols="12").text-center
              span.font-18 {{highlight.text}}
          br
        v-row(v-if="featuresButton" justify="center")
          v-btn(
            id="features-page-btn"
            @click.stop="handleFeaturesPageBtn"
            color="primary"
            :to="{ name: 'features' }"
            large
          ).mt-3.cta-btn
            strong.font-s.white--text.text-none Explore the Features
    slot(name="extra-content")
</template>

<script>
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  props: {
    storyflow: {
      type: Array,
      default: () => [],
    },
    hasTitle: {
      type: Boolean,
      default: true,
    },
    metaTitle: {
      type: String,
      default: undefined,
    },
    introduction: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: undefined,
    },
    featuresButton: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    horizontalImageSize: {
      type: String,
      default: '65%',
    },
    customPath: {
      type: String,
      default: '',
    },
    whiteBg: {
      type: Boolean,
      default: false,
    },
    highlightTitleSize: {
      type: String,
      default: '30',
    },
    parseTitles: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.highlightTitleFontStyle = {
      'font-size': `${this.highlightTitleSize}px`,
    };
    return {
      isMobile: true,
    };
  },
  computed: {
    storyflowAssetHorizontal () {
      return {
        width: this.horizontalImageSize,
      };
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
    parseTitle (highlight) {
      return this.parseTitles
        ? parseTextWithNewLine(highlight.title, highlight.parseIndicators)
        : highlight.title;
    },
    handleFeaturesPageBtn () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: 'click-features-page-btn',
        eventLabel: 'features-page-btn',
      });
    },
  },
};
</script>

<style scoped>
.introText {
  font-family: 'Work Sans', 'Poppins', sans-serif !important;
}
.storyflowAsset {
  width: 275px;
}
.pb50 {
  padding-bottom: 50px;
}
.pb60 {
  padding-bottom: 60px;
}
</style>
