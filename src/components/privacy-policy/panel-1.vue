<template lang="pug">
  div
    div(v-if="!$isMobile").panel1.mb-5
      v-container
        v-layout(row wrap align-center).panel-1-row
          v-flex(xs12 md12)
            h1.font-large.text-xs-center  Privacy Policy
    div(v-else).panel1.mb-5
      v-layout(row wrap justify-center style="height: 100%")
        v-flex(xs12 md12 align-self-center).my-5
          h1.font-xl.text-xs-center Privacy Policy
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
    background-image: url('../../assets/images/mycure-clinic-background-privacy-policy.png');
    background-position: center center;
    background-size: cover;
  }

  .panel-1-row {
    height: 420px;
  }
</style>
