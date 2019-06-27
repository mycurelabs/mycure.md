<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5
      v-container
        v-layout(row justify-center).text-xs-center.pb-5
          span.font-40 {{ introduction }}
        br
        v-layout(v-for="(highlight,index) in storyflow" :key="index" row wrap justify-center)
          v-flex(xs5 v-if="index%2 === 0").text-xs-right
            img(style="max-width: 90%; white-space: wrap;" :src="require(`@/assets/images/${ highlight.image }`)" :alt="highlight.title")
          v-flex(xs5 v-else align-self-center).pr-5.text-xs-right
            span(v-if="hasTitle").font-48.lh-title {{ highlight.title }}
            br
            br
            span.font-18 {{ highlight.text }}
          v-flex(xs5 v-if="index%2 === 0" align-self-center).pl-5
            span(v-if="hasTitle").font-48.lh-title {{ highlight.title }}
            br
            br
            span.font-18 {{ highlight.text }}
          v-flex(xs5 v-else).text-xs-left
            img(style="width: auto" :src="require(`@/assets/images/${ highlight.image }`)" :alt="highlight.title")
        br
        v-layout(v-if="featuresButton" row wrap justify-center).pt-5
          v-btn(
            id="features-page-btn"
            @click.stop="handleFeaturesPageBtn"
            color="#18c551"
            :to="{ name: 'features' }"
            large
          ).mt-3.cta-btn
            strong.font-18.white--text.text-none Explore the Features
    div(v-else).pt-5
      v-container
        v-layout(row justify-center).text-xs-center.pb-3
          p.font-40 {{ introduction }}
        v-container(v-for="(highlight,index) in storyflow" :key="index" column justify-center)
          v-layout(row wrap justify-center align-center).pb-2
            img(style="height: 70vw" :src="require(`@/assets/images/${ highlight.image }`)" :alt="highlight.title")
          br
          v-layout(align-center row wrap).text-xs-center  
            v-flex(xs12)
              span(v-if="hasTitle").font-40.lh-title.text-xs-center {{ highlight.title }}
          br
          v-layout(align-center row wrap).px-2
            v-flex(xs12).text-xs-center
              span.font-18 {{ highlight.text }}
          br
        v-layout(v-if="featuresButton" row wrap justify-center)
          v-btn(
            id="features-page-btn"
            @click.stop="handleFeaturesPageBtn"
            color="#18c551"
            :to="{ name: 'features' }"
            large
          ).mt-3.cta-btn
            strong.font-18.white--text.text-none Explore the Features
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

