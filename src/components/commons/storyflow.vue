<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5
      v-container
        span.font-l {{ introduction }}
        br
        br
        v-layout(v-for="(highlight,index) in storyflow" :key="index" row wrap justify-center)
          v-flex(xs5 v-if="index%2 === 0")
            img(style="max-width: 90%" :src="require(`@/assets/images/${ highlight.image }`)" :alt="highlight.title")
          v-flex(xs7 v-else align-self-center).pr-5.text-xs-right
            span(v-if="hasTitle").font-medium.lh-title {{ highlight.title }}
            br
            br
            span(style="white-space: pre;").font-small {{ highlight.text }}
          v-flex(xs7 v-if="index%2 === 0" align-self-center).pl-5
            span(v-if="hasTitle").font-medium.lh-title {{ highlight.title }}
            br
            br
            span.font-small {{ highlight.text }}
          v-flex(xs5 v-else)
            img(style="max-width: 90%" :src="require(`@/assets/images/${ highlight.image }`)" :alt="highlight.title")
    div(v-else).pt-4
      v-container(v-for="(highlight,index) in storyflow" :key="index" column justify-center)
        v-layout(justify-center).pb-2
          img(style="height: 70vw" :src="require(`@/assets/images/${ highlight.image }`)" :alt="highlight.title")
        v-layout(justify-center)  
          span(v-if="hasTitle").font-l.lh-title.text-xs-center {{ highlight.title }}
        v-layout(justify-center).pb-4  
          span(style="white-space: pre;").font-m.text-xs-center {{ highlight.text }}
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
      }
    }, 
  };
</script>

