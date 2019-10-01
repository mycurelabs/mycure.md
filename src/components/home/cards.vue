<template lang="pug">
  div#panel9
    div(v-if="!$isMobile")
      v-container.text-xs-center
        b.font-40 What brings you here?
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
                  v-flex(xs12).cardAssetPadding.pb-3
                    img(
                      src='../../assets/images/mycure-cms-web-solo-comparison-multispecialty.png' 
                      height="100"
                    )
                  p.subtxtLineHeight.font-weight-bold.font-18 I manage a 
                    br
                    | multispecialty 
                    br
                    | clinic.
                  strong(v-if="!hover").font-mc-grey.font-14.font-italic {{ cms.subsubtxt }}
                  strong(v-else).font-14.font-italic {{ cms.subsubtxt }}
          v-hover
            v-card(
              slot-scope="{ hover }"
              :to="{ name: group.link }"
            ).roundedCard.mx-3.cardText
              v-layout(column justify-center)
                v-flex(xs12 align-self-center).pa-3
                  v-flex(xs12).cardAssetPadding.pb-3
                    img(
                      src='../../assets/images/mycure-cms-web-solo-comparison-private.png' 
                      height="100"
                    )
                  p.subtxtLineHeight.font-weight-bold.pb-0.font-18 I need a 
                    br
                    | system for my 
                    br
                    | group clinic.
                  strong(v-if="!hover").font-mc-grey.font-14.font-italic {{ group.subsubtxt }}
                  strong(v-else).font-14.font-italic {{ group.subsubtxt }}
          v-hover
            v-card(
              slot-scope="{ hover }"
              :to="{ name: emr.link }"
            ).roundedCard.mx-3.cardText
              v-layout(column justify-center)
                v-flex(xs12 align-self-center).pa-3
                  v-flex(xs12).cardAssetPadding.pb-3
                    img(
                      src='../../assets/images/mycure-cms-web-solo-comparison-solo.png' 
                      height="100"
                    )
                  p.subtxtLineHeight.font-weight-bold.pb-0.preWrap.font-18 I am an
                    br
                    | individual medical 
                    br 
                    | practitioner.
                  strong(v-if="!hover").font-mc-grey.font-14.font-italic {{ emr.subsubtxt }}
                  strong(v-else).font-14.font-italic {{ emr.subsubtxt }}
        br
        v-layout(row justify-center).pt-5
          p.font-30.text-xs-center Unsure where you fit? 
            br
            |
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
          v-hover
            v-card(
              slot-scope="{ hover }"
              :to="{ name: cms.link }"
            ).roundedCard.mx-3.cardText.my-2
              v-layout(column justify-center)
                v-flex(xs12 align-self-center).pa-3
                  v-flex(xs12).cardAssetPadding.pb-3
                    img(
                      src='../../assets/images/mycure-cms-web-solo-comparison-multispecialty.png' 
                      height="100"
                    )
                  p.font-weight-bold.pb-0.preWrap.font-16 {{ cms.subtxt }}
                  strong(v-if="!hover").font-mc-grey.font-14.font-italic {{ cms.subsubtxt }}
                  strong(v-else).font-14.font-italic {{ cms.subsubtxt }}
          v-hover
            v-card(
              slot-scope="{ hover }"
              :to="{ name: group.link }"
            ).roundedCard.mx-3.cardText.my-2
              v-layout(column justify-center)
                v-flex(xs12 align-self-center).pa-3
                  v-flex(xs12).cardAssetPadding.pb-3
                    img(
                      src='../../assets/images/mycure-cms-web-solo-comparison-private.png' 
                      height="100"
                    )
                  p.font-weight-bold.pb-0.preWrap.font-16 {{ group.subtxt }}
                  strong(v-if="!hover").font-mc-grey.font-14.font-italic {{ group.subsubtxt }}
                  strong(v-else).font-14.font-italic {{ group.subsubtxt }}
          v-hover
            v-card(
              slot-scope="{ hover }"
              :to="{ name: emr.link }"
            ).roundedCard.mx-3.cardText.my-2
              v-layout(column justify-center)
                v-flex(xs12 align-self-center).pa-3
                  v-flex(xs12).cardAssetPadding.pb-3
                    img(
                      src='../../assets/images/mycure-cms-web-solo-comparison-solo.png' 
                      height="100"
                    )
                  p.font-weight-bold.pb-0.preWrap.font-16 {{ emr.subtxt }}
                  strong(v-if="!hover").font-mc-grey.font-14.font-italic {{ emr.subsubtxt }}
                  strong(v-else).font-14.font-italic {{ emr.subsubtxt }}
          //- v-hover
            v-card(
              slot-scope="{ hover }"
              :to="{ name: solo.link }"
            ).roundedCard.mx-3.cardText.my-2
              v-layout(column justify-center)
                v-flex(xs12 align-self-center).pa-3
                  v-flex(xs12).cardAssetPadding.pb-3
                    img(
                      src='../../assets/images/mycure-cms-web-solo-comparison-solo.png' 
                      height="100"
                    )
                  p.font-weight-bold.pb-0.preWrap.font-16 {{ solo.subtxt }}
                  strong(v-if="!hover").font-mc-grey.font-14.font-italic {{ solo.subsubtxt }}
                  strong(v-else).font-14.font-italic {{ solo.subsubtxt }}
        v-layout(row justify-center).pt-5
          p.font-18.text-xs-center Unsure where you fit? 
            br
            |
            router-link(:to="{ name: 'calendly' }")
              strong Book a demo
      v-layout(row justify-center)
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community-mobile.png" alt="Health community")
</template>

<script>
  export default {
    data () {
      return {
        cms: {
            text: 'Do you run a Multispecialty Clinic with branches around the country?',
            subtxt: 'I manage a \nmultispecialty \nclinic.',
            subsubtxt: '(one-stop, multi-staff center)',
            link: 'cms'
        },
        group: {
            text: 'Do you run a Multispecialty Clinic with branches around the country?',
            subtxt: 'I need a \n system for my \ngroup clincic.',
            subsubtxt: '(shared, collaborative clinic)',
            link: 'group'
        },
        emr: {
          text: 'Are you a private medical practitioner? Running a clinic on your own or collaborating with others?',
          subtxt: 'I am a \nprivate medical \npractitioner.',
          subsubtxt: '(individual practice)',
          link: 'emr'
        },
        solo: {
          text: 'Do you want to secure your own client’s EMR? Or live remotely with very scarce internet connectivity?',
          subtxt: 'I need a \nstandalone and \nfree CMS.',
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
    height: 320px;
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
    line-height: auto;
  }
  .cardAssetPadding {
    padding-top: 30px;
  }
  .subtxtLineHeight {
    line-height: 24px;
  }
</style>
