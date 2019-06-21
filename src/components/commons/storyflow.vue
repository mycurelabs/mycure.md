<template lang="pug">
  v-container
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
          span.font-small {{ highlight.text }}
        v-flex(xs7 v-if="index%2 === 0" align-self-center).pl-5
          span(v-if="hasTitle").font-medium.lh-title {{ highlight.title }}
          br
          br
          span.font-small {{ highlight.text }}
        v-flex(xs5 v-else)
          img(style="max-width: 90%" :src="require(`@/assets/images/${ highlight.image }`)" :alt="highlight.title")
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

