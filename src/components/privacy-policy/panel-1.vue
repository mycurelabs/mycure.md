<template lang="pug">
  div.panel-1.mb-5
    v-container
      v-layout(row wrap align-center).panel-1-row
        v-flex(xs12 md12).text-xs-center 
          h5.font-medium.mb-1 Last Updated | March 6, 2018
          div.hr-blue
          br
          br
          h1(v-if="!$isMobile").font-xl Privacy Policy
          h1(v-else).font-large Privacy Policy
</template>

<script>
  export default {
    data () {
      return {
        //
      };
    }
  };
</script>

<style scoped>
  .panel-1 {
    background-image: url('../../assets/images/mycure-clinic-background.png');
    background-position: center center;
    background-size: cover;
  }

  .panel-1-row {
    height: 420px;
  }
</style>
