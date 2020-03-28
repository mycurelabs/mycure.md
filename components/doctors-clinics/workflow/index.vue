<template lang="pug">
  fragment
    div(v-if="!isMobile").px-5.white.workFlow.py-10
      v-container.px-5
        v-row(justify="center").text-center
          h1.font-40.pa-5.text-center.font-work-sans {{ title }}
        v-row(justify="center")
          v-col(cols="12" md="4")
            v-list(two-line).check-list.white
              template(v-for="(problem, index) in clinicProblems")
                v-list-item(v-if="index<=2")
                  v-list-item-action
                    img(:src="require(`~/assets/images/${checkIcon}.png`)" alt="Check icon")
                  v-list-item-content
                    span.font-21 {{ problem }}
          v-col(cols="12" md="4")
            v-list(two-line).check-list.white
              template(v-for="(problem, index) in clinicProblems")
                v-list-item(v-if="index>2")
                  v-list-item-action
                    img(:src="require(`~/assets/images/${checkIcon}.png`)" alt="Check icon")
                  v-list-item-content
                    span.font-21 {{ problem }}
    div(v-else).white.mt-10.pt-10
      v-container
        v-row(justify="center")
          h1.font-40.text-center.font-work-sans {{ title }}
      v-container
        v-row(justify="center")
          v-list(two-line).white
            v-list-item(v-for="(problem,index) in clinicProblems" :key="index")
              v-list-item-action
                img(:src="require(`~/assets/images/${checkIcon}.png`)" alt="Check icon")
              v-list-item-content
                span.font-18 {{ problem }}
</template>

<script>
import CLINIC_PROBLEMS from './constants.json';
export default {
  data () {
    this.title = 'Why do doctors use MYCURE?';
    this.checkIcon = 'mycure-web-bullet-check';
    this.clinicProblems = CLINIC_PROBLEMS;
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
};
</script>

<style scoped>
.check-list {
  background-color: #f6f6f6;
}
@media screen and (min-height: 1080px) {
  .workFlow {
    padding: 250px 0px 250px 0px !important;
  }
}
</style>
