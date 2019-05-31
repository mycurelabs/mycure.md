<template lang="pug">
  div.panel-1.mb-5.red
    v-container
      v-layout(row wrap align-center).panel-1-row
        v-flex(xs12 md12).text-xs-center
          h1(v-if="!$isMobile").font-large Terms and Conditions
          h1(v-else).font-large Terms and Conditions
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
    background-image: url('../../assets/images/mycure-clinic-background-terms.png');
    background-position: center center;
    background-size: cover;
  }

  .panel-1-row {
    height: 420px;
  }

  hr {
  height: 2px;
  border-color: blue;
  border: none;
  width: 150px;
  padding: 0;
  margin: 0 auto;
  }
</style>
