<template lang="pug">
  div(:class="{'white' : whiteBg }")
    div(v-if="!$isMobile").pt-5
      v-container
        v-layout(v-if="introduction" row justify-center).text-xs-center.pb60
          strong.font-40.introText {{ introduction }}
        div(v-if="!horizontal")
          v-layout(v-for="(highlight,index) in storyflow" :key="index" row wrap justify-center).pb60
            v-flex(xs4 align-self-center).pr-5
              img(:src="require(`@/assets/images/${customPath}${highlight.image}`)" :alt="highlight.title").storyflowAsset.right
            v-flex(xs5)
              span(v-if="hasTitle").font-40.lh-title {{ highlight.title }}
              br
              br
              span.font-18 {{ highlight.text }}
          br
          v-layout(v-if="featuresButton" row wrap justify-center).pt-5
            v-btn(
              id="features-page-btn"
              @click.stop="handleFeaturesPageBtn"
              color="#18c551"
              :to="{ name: 'features' }"
              large
            ).mt-3.cta-btn
              strong.font-s.white--text.text-none Explore the Features
        div(v-else)
          v-layout(row justify-center)
            v-flex(
              v-for="(highlight, index) in storyflow"
              :key="index"
              xs4
              align-center
            ).text-xs-center.mx-4
              img(:src="require(`@/assets/images/${customPath}${highlight.image}`)" :alt="highlight.title").storyflowAssetHorizontal
              br
              strong(v-if="hasTitle").font-m {{ highlight.title }}
              br
              p.font-18.pt-3 {{ highlight.text }}
          v-layout(v-if="featuresButton" row wrap justify-center).pt-5
            v-btn(
              id="features-page-btn"
              @click.stop="handleFeaturesPageBtn"
              :color="$mcColors.mcBlue"
              :to="{ name: 'features' }"
              large
            ).mt-3.cta-btn
              strong.font-s.white--text.text-none Explore the Features
              
    div(v-else).pt-5
      v-container
        v-layout(row justify-center).text-xs-center.pb-3
          strong.font-45.introText {{ introduction }}
        v-container(v-for="(highlight,index) in storyflow" :key="index" column justify-center)
          v-layout(row wrap justify-center align-center).pb-2
            img(:src="require(`@/assets/images/${customPath}${highlight.image}`)" :alt="highlight.title").storyflowAsset
          br
          v-layout(align-center row wrap).text-xs-center  
            v-flex(xs12)
              strong(v-if="hasTitle").font-30.lh-title.text-xs-center {{ highlight.title }}
          br
          v-layout(align-center row wrap).px-2
            v-flex(xs12).text-xs-center
              span.font-18 {{ highlight.text }}
          br
        v-layout(v-if="featuresButton" row wrap justify-center)
          v-btn(
            id="features-page-btn"
            @click.stop="handleFeaturesPageBtn"
            :color="$mcColors.mcBlue"
            :to="{ name: 'features' }"
            large
          ).mt-3.cta-btn
            strong.font-s.white--text.text-none Explore the Features
</template>

<script>
  export default {
    props: {
      storyflow: Array,
      hasTitle: {
        type: Boolean,
        default: true
      },
      introduction: {
        type: String,
        default: ''
      },
      featuresButton: {
        type: Boolean,
        default: false
      },
      horizontal: {
        type: Boolean,
        default: false
      },
      customPath: {
        type: String,
        default: ''
      },
      whiteBg: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleFeaturesPageBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-features-page-btn',
          eventLabel: 'features-page-btn'
        });
      }
    }
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


