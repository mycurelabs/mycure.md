<template lang="pug">
  div#panel9
    div(v-if="!$isMobile")
      v-container.text-xs-center
        b.font-48 What brings you here?
        br
        br
        br
        v-layout(row justify-center)
          v-hover
            v-card(
              slot-scope="{ hover }"
              :to="{ name: cms.link }"
            ).roundedCard.mx-3.cardText
              v-layout(column justify-center)
                v-flex(xs12 align-self-center).pa-3
                  p.font-weight-bold.pb-0.preWrap.font-18 {{ cms.subtxt }}
                  strong(v-if="!hover").font-mc-grey.font-18 {{ cms.subsubtxt }}
                  strong(v-else).font-18 {{ cms.subsubtxt }}
          v-hover
            v-card(
              slot-scope="{ hover }"
              :to="{ name: emr.link }"
            ).roundedCard.mx-3.cardText
              v-layout(column justify-center)
                v-flex(xs12 align-self-center).pa-3
                  p.font-weight-bold.pb-0.preWrap.font-18 {{ emr.subtxt }}
                  strong(v-if="!hover").font-mc-grey.font-18 {{ emr.subsubtxt }}
                  strong(v-else).font-18 {{ emr.subsubtxt }}
          v-hover
            v-card(
              slot-scope="{ hover }"
              :to="{ name: solo.link }"
            ).roundedCard.mx-3.cardText
              v-layout(column justify-center)
                v-flex(xs12 align-self-center).pa-3
                  p.font-weight-bold.pb-0.preWrap.font-18 {{ solo.subtxt }}
                  strong(v-if="!hover").font-mc-grey.font-18 {{ solo.subsubtxt }}
                  strong(v-else).font-18 {{ solo.subsubtxt }}
        br
        v-layout(row justify-center).pt-5
          p.font-30.text-xs-center Unsure where you fit? 
            router-link(:to="{ name: 'calendly' }")
              strong Book a demo
      v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
    div(v-else).showPanel
      v-container.text-xs-center
        b.font-36 What brings you here?
        br
        br
        v-layout(column align-center)
          v-card(
            v-for="(card,i) in productCards"
            :key="i"
            :to="{ name: card.link }"
          ).roundedCard.my-3.cardText
            v-layout(column justify-center)
              v-flex(xs12 align-self-center).pa-3
                strong.preWrap.font-16 {{ card.subtxt }}
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
        // hover: false,
        cms: {
            text: 'Do you run a Multispecialty Clinic with branches around the country?',
            subtxt: 'I manage a \nmultispecialty \nclinic',
            subsubtxt: '(laboratory, imaging, etc.)',
            link: 'cms'
        },
        emr: {
          text: 'Are you a private medical practitioner? Running a clinic on your own or collaborating with others?',
          subtxt: 'I am a \nprivate medical \npractitioner',
          subsubtxt: '(individually or with peers)',
          link: 'emr'
        },
        solo: {
          text: 'Do you want to secure your own client’s EMR? Or live remotely with very scarce internet connectivity?',
          subtxt: 'I need a \nstandalone and \nfree CMS',
          subsubtxt: '(personal data storage)',
          link: 'mycure-solo'          
        } 
      };
    }
  };
</script>

<style scoped>
  .roundedCard {
    border-radius: 20px;
    width: 275px; 
    height: 150px;
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

  .preWrap {
    white-space: pre-wrap;
  }

  .class1 {
    color: white;
  }

  .class2 {
    color: #616161;
  }
</style>
