<template lang="pug">
  div#panel9
    div(v-if="!$isMobile")
      v-container.text-xs-center
        b.font-48 What brings you here?
        br
        br
        br
        v-layout(row justify-center)
          v-card(
            v-for="(card,i) in productCards"
            :to="{ name: card.link }"
            :key="i"
            style="width: 275px; height: 150px;"
          ).roundedCard.mx-3.cardText
            v-layout(column justify-center)
              v-flex(xs12 align-self-center).pa-3
                strong(style="white-space: pre-wrap;").font-18 {{ card.subtxt }}
        br
        v-layout(row justify-center).pt-5
          p.font-18.text-xs-center Unsure where you fit? 
            router-link(:to="{ name: 'calendly' }")
              strong Book a demo
      v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
    div(v-else).showPanel
      v-container.text-xs-center
        b(style="font-size: 36px") What brings you here?
        br
        br
        v-layout(column align-center)
          v-card(
            v-for="(card,i) in productCards"
            :key="i"
            :to="{ name: card.link }"
            style="width: 250px; height: 130px"
          ).roundedCard.my-3.cardText
            v-layout(column justify-center)
              v-flex(xs12 align-self-center).pa-3
                strong(style="white-space: pre-wrap;").font-16 {{ card.subtxt }}
        v-layout(row justify-center).pt-5
          p.font-18.text-xs-center Unsure where you fit? 
            router-link(:to="{ name: 'calendly' }")
              strong Book a demo
      v-layout(row justify-center)
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community-mobile.png" alt="Health community")
</template>

<script>
  export default {
    data () {
      return {
        productCards: [
          {
            text: 'Do you run a Multispecialty Clinic with branches around the country?',
            subtxt: 'I manage a \nmultispecialty \nclinic \n(laboratory, imaging, etc.)',
            link: 'cms'
          },
          {
            text: 'Are you a private medical practitioner? Running a clinic on your own or collaborating with others?',
            subtxt: 'I am a \nprivate medical \npractitioner \n(individually or with peers)',
            link: 'emr'
          },
          {
            text: 'Do you want to secure your own client’s EMR? Or live remotely with very scarce internet connectivity?',
            subtxt: 'I need a \nstandalone and \nfree CMS \n(personal data storage)',
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

.roundedCard:hover {
  color: white;
  background-color: #2e9fdf;
}

.cardText {
  color: #2e9fdf;
}

.cardText:hover {
  color: white;
}
</style>
