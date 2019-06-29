<template lang="pug">
  div
    div(v-if="!$isMobile").panel1.mb-5
      v-container
        v-layout(row wrap align-center).panel-1-row
          v-flex(xs12 md12)
            h1.font-60.text-xs-center Terms and Conditions
    div(v-else).panel1.mb-5
      v-layout(row wrap justify-center)
        v-flex(xs12 md12 align-self-center).my-5
          h1.font-60.text-xs-center Terms &amp; Conditions
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
  .panel1 {
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
