<template lang="pug">
  div#panel9
    div(v-if="!$isMobile")
      v-container
        v-layout(row justify-center)
          v-card(
            v-for="(card,i) in productCards"
            :to="{ name: card.link }"
            :key="i"
            style="width: 250px; height: 350px"
          ).roundedCard.mx-3
            v-layout(column justify-center)
              v-flex(xs12 align-baseline).pa-3
                p.font-small {{ card.text }}
              br
              br
              br
              v-flex(xs12 align-self-end).pa-3
                strong.font-mc-blue.font-small {{ card.subtxt }}
        br
        v-layout(row justify-center).pt-5
          p.font-small.text-xs-center Unsure where you fit? 
            a
              strong Book a demo
      v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
    div(v-else)
      v-container
        v-layout(column align-center)
          v-card(
            v-for="(card,i) in productCards"
            :key="i"
            style="width: 225px; height: 300px"
          ).roundedCard.my-3
            v-layout(column justify-center)
              v-flex(xs12 align-baseline).pa-3
                p.font-s {{ card.text }}
              br
              v-flex(xs12 align-self-end).pa-3
                strong.font-mc-blue.font-s {{ card.subtxt }}
        v-layout(row justify-center).pt-5
          p.font-small.text-xs-center Unsure where you fit? 
            a
              strong Book a demo
      v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
</template>

<script>
  export default {
    data () {
      return {
        productCards: [
          {
            text: 'Do you run a Multispecialty Clinic with branches around the country?',
            subtxt: 'Maybe you’re fit to use MYCURE: Multispecialty Clinics',
            link: 'cms'
          },
          {
            text: 'Are you a private medical practitioner? Running a clinic on your own or collaborating with others?',
            subtxt: 'Try MYCURE Private Practice',
            link: 'emr'
          },
          {
            text: 'Do you want to secure your own client’s EMR? Or live remotely with very scarce internet connectivity?',
            subtxt: 'You should download MYCURE Solo',
            link: 'mycure-solo'          
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
