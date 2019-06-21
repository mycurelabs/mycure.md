<template lang="pug">
  div
    div(v-if="!$isMobile")#diagramPanel
      v-container.px-5
        v-flex(xs12 md10 offset-md1)
          br
          v-layout(row justify-center)
            v-card(height="508px" flat).elevation-10.image-rounded-corner
              v-layout(row justify-center)
                v-flex(xs5)
                  img(width="100%" height="508vh" src="@/assets/images/mycure-web-banner-pricing-panel-solo.png" alt="Solo features")
                v-flex(xs8).text-xs-left.pa-5
                  strong(style="font-size: 30px").pb-2 MYCURE SOLO
                  br
                  br
                  span.font-s {{ MYCURE_SOLO_description }}
                  br
                  br
                  div(v-for="(feature,index) in soloFeatures" :key="index")
                    span.font-s &#10003 &nbsp {{ feature }}
                    br
        br
        br
        br
        p.text-xs-center.py-4.font-small Wanna know the difference? 
          a(@click.stop="dialog = true")
            strong.font-mc-blue Click here
          span &nbsp;or&nbsp;
          a(@click.stop="toggleChat()")
            strong.font-mc-blue chat us.
      v-dialog(
        v-model="dialog" 
        width="1100"
        attach="#app"
      ).mt-5.image-rounded-corner
        v-card(style="border-radius: 20px")
          v-img(:src="require('@/assets/images/mycure-cms-web-solo-comparison-diagram.png')")
      v-layout(row justify-center)
          img(width="100%" height="100%" src="@/assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community") 
    div(v-else)
      v-container.px-3
        v-layout(row wrap)
          v-flex(xs12).pa-2
              img(
                width="100%" 
                height="40%"  
                style="border-radius: 20px"
                src="@/assets/images/mycure-web-banner-pricing-panel-solo.png" alt="Solo features")
              br
              br
              v-layout(row justify-center)
                strong.font-l.pb-2 MYCURE SOLO
              p.font-s.text-xs-center {{ MYCURE_SOLO_description }}
              br
              
              v-layout(row v-for="(feature,index) in soloFeatures" :key="index").pl-3
                p.font-s &#10003; &nbsp;
                p.font-s {{ feature }}
              br
              br
              p.text-xs-center.py-4.font-small Wanna know the difference? 
                a(@click.stop="dialog = true")
                  strong.font-mc-blue Click here
                span &nbsp;or&nbsp;
                a(@click.stop="toggleChat()")
                  strong.font-mc-blue chat us.
      v-dialog(
        v-model="dialog" 
        width="800"
        hide-overlay
      )
        v-card(style="border-radius: 10px")
          v-card-actions
            v-btn(flat icon @click="dialog = false")
              v-icon mdi-chevron-left
          v-img(:src="require('@/assets/images/mycure-cms-web-solo-comparison-diagram.png')")
</template>

<script>
  // import compareDialog from './compareDialog';
  export default {
    // components: {
    //   compareDialog
    // },
    data () {
      return {
        dialog: false,
        MYCURE_SOLO_description: 'MYCURE SOLO is a free version of MYCURE Cloud ' +
          'for those who want to store their data in their own devices (one device per ' +
          'program) and in their personal cloud (in-app purchase). It can be used by ' +
          'Med students who want to get the hang of using a holistic clinic management ' +
          'system or those who are in remote areas and do not have access to the internet.',
        siginURL: process.env.VUE_APP_SIGNIN_URL,
        popUp: false,

        soloFeatures: [
          'Not Internet dependent',
          'You can secure your own patients record',
          'No need to spend anything',
          'Option: Back your medical records in your own cloud'
        ]
      };
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about MYCURE Solo`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      },
    }
  };
</script>

<style scoped>
  #diagramPanel {
    background-image: url('../../assets/images/mycure-home-web-sky-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .image-rounded-corner {
    border-radius: 10px !important;
  }

  .v-dialog {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>

