<template lang="pug">
  div(:class="{'white' : whiteBg }")
    div(v-if="!isMobile").pt-10.mt-10
      v-container
        v-row(v-if="introduction" justify="center").text-center.pb60
          strong.font-40.introText.pre-white-space {{introduction}}
        div(v-if="!horizontal")
          v-row(v-for="(highlight,index) in storyflow" :key="index" justify="center").pb60
            v-col(cols="4" align-self="center").pr-5
              img(:src="require(`@/assets/images/${customPath}${highlight.image}`)" :alt="highlight.title").storyflowAsset.right
            v-col(cols="5")
              span(v-if="hasTitle").font-40.lh-title {{highlight.title}}
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
              :key="index"
              cols="4"
              align="center"
            ).text-center
              img(:src="require(`@/assets/images/${customPath}${highlight.image}`)" :alt="highlight.title").storyflowAssetHorizontal
              br
              strong(v-if="hasTitle").font-l {{highlight.title}}
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
      v-container
        v-row(justify="center").text-center.pb-3
          strong.font-36.introText.lh-title {{introduction}}
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
    introduction: {
      type: String,
      default: '',
    },
    featuresButton: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    customPath: {
      type: String,
      default: '',
    },
    whiteBg: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isMobile: true,
    };
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
.pb60 {
  padding-bottom: 60px;
}
.storyflowAssetHorizontal {
  width: 85%;
  font-family: 'Work Sans', 'Poppins', sans-serif !important;
}
</style>
