<template lang="pug">
  div
    div(v-if="!$isMobile")#diagramPanel
      v-container.px-5
        v-flex(xs12 md10 offset-md1)
          br
          v-layout(row justify-center)
            v-card(height="508px" flat).elevation-10.rounded-corner
              v-layout(row justify-center)
                v-flex(xs5)
                  img(width="100%" height="508vh" src="@/assets/images/mycure-web-banner-pricing-panel-solo.png" alt="Solo features")
                v-flex(xs8).text-xs-left.pa-5
                  strong.font-30.pb-2 SOLO by MYCURE
                  br
                  br
                  span.font-18 {{ MYCURE_SOLO_description }}
                  br
                  br
                  div(v-for="(feature,index) in soloFeatures" :key="index")
                    span.font-18 &#10003 &nbsp {{ feature }}
                    br
        br
        br
        br
        p.text-xs-center.py-4.font-30 To learn more, visit 
          //- a(@click.stop="dialog = true")
          //-   strong.font-mc-blue Click here
          //- span &nbsp;or&nbsp;
          //- a(@click.stop="toggleChat()")
          //-   strong.font-mc-blue chat us.
          router-link(:to="{name:'solo'}").visit solo.health
      v-dialog(
        v-model="dialog"
        max-width="100vh"
      ).mt-5.rounded-corner
        v-card.rounded-corner
          v-layout(justify-center align-center)
            img(width="100%" :src="require('@/assets/images/mycure-cms-web-solo-comparison-diagram.png')" alt="Solo diagram")
      v-layout(row justify-center)
          img(width="100%" height="100%" src="@/assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community") 
    div(v-else)
      v-container.px-3
        v-layout(row wrap)
          v-flex(xs12).pa-2
              img(
                width="100%" 
                height="40%"
                src="@/assets/images/mycure-web-banner-pricing-panel-solo.png" alt="Solo features"
              ).rounded-corner
              br
              br
              v-layout(row justify-center)
                strong.font-40.pb-2 SOLO by MYCURE
              p.font-16.text-xs-center {{ MYCURE_SOLO_description }}
              br
              
              v-layout(row v-for="(feature,index) in soloFeatures" :key="index").pl-3
                p.font-16 &#10003; &nbsp;
                p.font-16 {{ feature }}
              br
              br
              p.text-xs-center.py-4.font-18 Wanna know the difference? 
                br
                |
                a(@click.stop="dialog = true")
                  strong.font-mc-blue Click here
                span &nbsp;or&nbsp;
                a(@click.stop="toggleChat()")
                  strong.font-mc-blue chat us.
      v-dialog(
        v-model="dialog" 
        width="800"
        hide-overlay
      ).dialogIndex
        v-card.rounded-corner
          v-card-actions
            v-btn(flat icon @click="dialog = false")
              v-icon mdi-chevron-left
          v-img(:src="require('@/assets/images/mycure-cms-web-solo-comparison-diagram.png')" alt="Comparison diagram")
      //- v-layout(row justify-center)
      //-   img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community-mobile.png" alt="Health community")
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        MYCURE_SOLO_description: 'Solo is a free-forever version of MYCURE CMS — a standalone clinic management system for those who want to store their data in their own device, with the option to sync and back-up data in their personal cloud.',
        popUp: false,

        soloFeatures: [
          'Full Access to the CMS Core Modules',
          'Records are stored in your own database',
          'No internet needed',
          'No monthly fees'
        ]
      };
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about SOLO by MYCURE`;
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

  .rounded-corner {
    border-radius: 10px !important;
  }

  .dialogIndex {
    z-index: 999;
  }

  .visit {
    text-decoration: none;
  }
</style>

