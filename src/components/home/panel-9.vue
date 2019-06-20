<template lang="pug">
  div#panel9
    div(v-if="!$isMobile")
      v-container
        v-layout(row justify-center)
          v-card(
            v-for="(card,i) in productCards"
            :key="i"
            style="width: 200px; height: 250px"
          ).roundedCard.mx-3
            v-card-text {{ card.text }}
        br
        v-layout(row justify-center).pt-4
          p.font-small.text-xs-center Unsure where you fit? 
            a
              strong Book a demo
      v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
    div(v-else)
</template>

<script>
  export default {
    data () {
      return {
        productCards: [
          {
            text: 'test1'
          },
          {
            text: 'test2'
          },
          {
            text: 'test3'
          }
        ] 
      };
    }
  };
</script>

<style scoped>
.roundedCard {
  border-radius: 20px;
}
</style>
