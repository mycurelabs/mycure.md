<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number Flip
    div.panel-3.pt-5
      b-container
        b-row.align-items-center
          b-col(xs="12" md="12").text-center
            vue-flip(:active-hover="true" width="200px" height="50px" class="simple-test")
              div(slot="front") test
              div(slot="back") test
</template>

<script>
import VueFlip from 'vue-flip';
export default {
  components: {
    VueFlip
  }
}
</script>


<style scoped>
  .front {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #673AB7;
    color: white;
  }

  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFC107;
    color: white
  }
</style>
