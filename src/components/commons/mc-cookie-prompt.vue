<template lang="pug">
  div
    div(v-if="showPrompt")#cookie-nav.pt-1.text-white
      b-container
        b-row(style="width: 100%").pt-2.pb-3.pl-4
          b-col(cols="11").cookie-text
            | We use third-party services to understand web traffic data for us and they may collect cookies during the process. 
            | By continuing to browse our site, you agree to MYCURE's 
            router-link(:to="{name: 'terms', query: { id: 'top'}}").policy-links Terms of Use 
            | & 
            router-link(:to="{name: 'privacy-policy', query: { id: 'top'}}").policy-links Privacy Policy
            | .  
            | Feel free to check out our policies anytime for more info.
          b-col(cols="1").pt-1.text-right.cookie-button
            img(src="../../assets/images/close-white.png" height="30px"  @click="disablePrompt")
</template>

<script>
  import { cookieStore } from '../../vuex'
  export default {
    // props: ['browserID'],
    async created () {
      await this.init();
    },
    // async mounted () {
      
    // },
    data () {
      return {
        scrollTop: 0,
        browserID: null,
        showPrompt: false
      };
    },
    methods: {
      async init () {
        const getID = await cookieStore.dispatch('getID');
        if(!getID){
          this.browserID  = getID;
          this.showPrompt = true;
        }
      },
      disablePrompt() {
        let newBrowserID = Math.random().toString(36).substr(2, 9) ;
        cookieStore.dispatch('storeID', newBrowserID);
        this.showPrompt = false;
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
    background-color: #596d88;
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

  .cookie-button:hover {
    cursor: pointer;
  }

  .policy-links {
    color: white;
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
