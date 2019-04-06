<template lang="pug">
  div(v-if="!browserID")#cookie-nav.pt-1
    b-container.cookie-prompt
      b-row(style="width: 100%").pt-1.pb-2
        b-col(xs="4" offset="4" offset-sm="0" sm="1" md="2" lg="1")
          // img(src="../../assets/images/v4/mycure-emr-offline-online-website-cookie-prompt-icon.png")
        b-col(xs="4" sm="9" md="8" lg="10" style="padding: 0px 5px 0px 0px").cookie-text
          b Thank you for visiting! 
          span To help improve your browsing experience, this site may use cookies, web beacons, tracking pixels and other tracking technologies while you access the site.
        b-col(xs="4" offset="4" offset-sm="0" sm="2" md="2" lg="1").accept-button-container
          b-button(variant="warning" size="lg" @click="disablePrompt")#cookie-accept-button I ACCEPT.
</template>

<script>
  import { cookieStore } from '../../vuex'
  export default {
    computed: {
      browserID (){
        return cookieStore.state.browserID;
      }
    },

    data: () => ({
      scrollTop: 0,
    }),

    methods: {
      toggleChat() {
        $crisp.push(['do', 'chat:toggle'])
      },
      disablePrompt() {
        let newBrowserID = Math.random().toString(36).substr(2, 9) ;
        cookieStore.dispatch('storeID', newBrowserID);
      }
    }
  }
</script>

<style scoped>
  #cookie-nav {
    padding-left: 0px;
    padding-right: 0px;
    margin: 50px 0px 10px 0px;
    position: fixed;
    width: 100vw;
    background: rgba(239,239,98,0.9);
    z-index: 999999;
  }

  #cookie-accept-button {
    font-size: 11px;
    padding: 8px 0px 10px 0px !important;
    min-width: 100px !important;
    height: 32px !important;
    background-color: #cea800;
  }

  .cookie-prompt {
    padding: 0px 0px 10px 30px;
    
  }

  .cookie-text {
    font-size: 13px;
  }

  .accept-button-container {
    padding: 5px 0px 0px 0px;
    /* opacity: 0.8; */
  }

  @media (min-width: 576px) {
    .cookie-prompt {
      padding: 0px 0px 0px 0px;
    } 
    .accept-button-container {
      padding: 10px 0px 0px 0px;
    }
  }

  @media (min-width: 768px){
    .cookie-prompt {
      padding: 0px 0px 0px 0px;
    } 
    .accept-button-container {
      padding: 10px 30px 0px 0px;
    }
  }
  
  @media (min-width: 992px) {
    .cookie-prompt {
      padding: 0px 5px 0px 0px;
    } 
    .accept-button-container {
      padding: 5px 0px 0px 0px;
    }
  }

</style>
