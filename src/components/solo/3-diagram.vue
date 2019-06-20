<template lang="pug">
  div#diagramPanel
    v-container.px-5
      v-layout(row justify-center)
        v-flex(xs10).text-xs-center
          span.font-m {{ MYCURE_SOLO_description }}
      br
      br
      v-layout(row justify-center)
        v-flex(xs12)
          v-card(
            flat 
            color="primary"
            min-height="70vh"
            style="border-radius: 30px"
          )
            v-card-title.white--text.justify-center.font-medium Diagram
      br
      br
      v-layout(row wrap justify-center).pt-5
        v-btn(
          id="emr-signup-btn"
          @click.stop="handleEmrSignupBtn"
          color="#18c551"
          :href="`${siginURL}/signup/private/step-1`"
          style="height: 60px; width: 250px"
        ).mt-3
          strong.font-small.white--text.text-none Sign Up
      br
      p.text-xs-center.py-4.font-small Wanna know the difference? 
        a(@click.stop="popUp = true")
          strong.font-mc-blue Compare here.
    v-layout(row justify-center)
        img(width="100%" height="100%" src="@/assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
    compareDialog(
      :dialog="popUp"
      @close=" v => popUp = v"
    )
</template>

<script>
  import compareDialog from './compareDialog';
  export default {
    components: {
      compareDialog
    },
    data () {
      return {
        MYCURE_SOLO_description: 'MYCURE SOLO is a free version of MYCURE Cloud ' +
          'for those who want to store their data in their own devices (one device per ' +
          'program) and in their personal cloud (in-app purchase). It can be used by ' +
          'Med students who want to get the hang of using a holistic clinic management ' +
          'system or those who are in remote areas and do not have access to the internet.',
        siginURL: process.env.VUE_APP_SIGNIN_URL,
        popUp: false,
      };
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
</style>

