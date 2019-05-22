<template lang="pug">
  div.panel-1
    v-container
      v-flex(xs12 md12).pt-5
        center 
          strong.font-xl.text-xs-center.white--text Your best CMS investment yet
          br
          strong.font-m.white--text Quality clinic technology made more affordable. Only pay for what you need.
          br
          br
</template>

<script>
import panel2  from './panel-2';

export default {
  components: {
    panel2
  }
};
</script>

<style scoped>
.panel-1{
  height: 300px;
  background-image: url("../../assets/images/mycure-pricing-background.png");
}


</style>
