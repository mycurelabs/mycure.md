<template lang="pug">
  div
    div(v-if="!$isMobile").px-5.white
      v-container.px-5
        v-layout(row justify-center).text-xs-center
          h1.font-xl.pa-5.text-xs-center.font-work-sans {{ title }}
        v-layout(row wrap justify-center)
          v-flex(xs12 md4)
            v-list(two-line).check-list.white
              v-list-tile(v-for="(problem,index) in clinicProblems" :key="index" v-if="index<=2")
                v-list-tile-action
                  img(:src="require(`@/assets/images/${checkIcon}.png`)" alt="Check icon")
                v-list-tile-content
                  span.font-21 {{ problem }}
          v-flex(xs12 md4)
            v-list(two-line).check-list.white
              v-list-tile(v-for="(problem,index) in clinicProblems" :key="index" v-if="index>2")
                v-list-tile-action
                  img(:src="require(`@/assets/images/${checkIcon}.png`)" alt="Check icon")
                v-list-tile-content
                  span.font-21 {{ problem }}
    div(v-else).white.pt-5
      v-container
        v-layout(row justify-center)
          h1.font-xl.text-xs-center.font-work-sans {{ title }}
      v-container
        v-layout(row justify-center)
          v-list(two-line).white
            v-list-tile(v-for="(problem,index) in clinicProblems" :key="index")
              v-list-tile-action
                img(:src="require(`@/assets/images/${checkIcon}.png`)" alt="Check icon") 
              v-list-tile-content
                span.font-18 {{ problem }}
</template>

<script>
import CLINIC_PROBLEMS from './constants.json';
export default {
  data () {
    return {
      title: 'Why do doctors use MYCURE',
      checkIcon: 'mycure-web-bullet-check',
      clinicProblems: CLINIC_PROBLEMS
    };
  }
};
</script>

<style scoped>
  .check-list {
    background-color: #f6f6f6;
  }
</style>

