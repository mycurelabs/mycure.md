<template lang="pug">
  div
    div(v-if="!browserID")#cookie-nav.pt-1
      b-container.cookie-prompt
        b-row(style="width: 100%").pt-2.pb-3.pl-4
          b-col(xs="12" sm="10" md="10" lg="11").cookie-text
            | We use third-party services to understand web traffic data for us and they may collect cookies during the process. 
            | By continuing to browse our site, you agree to MYCURE's 
            router-link(:to="{name: 'terms', query: { id: 'top'}}").policy-links Terms of Use 
            | & 
            router-link(:to="{name: 'privacy-policy', query: { id: 'top'}}").policy-links Privacy Policy
            | .  
            | Feel free to check out our policies anytime for more info.
          b-col(xs="12" offset-sm="0" sm="2" md="2" lg="1").accept-button-container
            b-button(variant="warning" size="lg" @click="disablePrompt")#cookie-accept-button 
              b CONTINUE
</template>

<script>
  import { cookieStore } from '../../vuex'
  export default {
    
    props: ['browserID'],
    data: () => ({
      scrollTop: 0,
      browserID: null
    }),

    methods: {
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
    padding: 0px 20px 0px 0px;
  }

  .accept-button-container {
    padding: 5px 0px 0px 0px;
    /* opacity: 0.8; */
  }

  .policy-links {
    color: black;
    font-size: 13px; 
    font-weight: bold
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
      padding: 0px 8px 0px 9px;
    } 
    .accept-button-container {
      padding: 5px 0px 0px 0px;
    }
  }

</style>
