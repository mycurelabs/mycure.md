<template lang="pug">
<<<<<<< HEAD
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
=======
  v-container
    cookie-law(
      position="top" 
      transitionName="fade"
    ).Cookie--mcCookie.white--text.pa-2
      div(slot-scope="props" style="width: 100%")
        v-container(style="width: 100%").py-1
          v-layout(row v-if="!$isMobile").px-4
            v-flex(xs11).pt-2
              | We use third-party services to understand web traffic data for us and they may collect cookies during the process.
              | By continuing to browse our site, you agree to MYCURE's 
              router-link(:to="{name: 'terms'}").policy-links Terms of Use 
              | & 
              router-link(:to="{name: 'privacy-policy'}").policy-links Privacy Policy
              | .  
              | Feel free to check out our policies anytime for more info. 
            v-spacer
            v-btn(flat icon color="white" @click="props.accept")
              v-icon mdi-close
          v-layout(row v-else).pl-3
            v-flex(xs10)
              | We use third-party services to understand web traffic data for us and they may collect cookies during the process.
              | By continuing to browse our site, you agree to MYCURE's 
              router-link(:to="{name: 'terms'}").policy-links Terms of Use 
              | & 
              router-link(:to="{name: 'privacy-policy'}").policy-links Privacy Policy
              | .  
              | Feel free to check out our policies anytime for more info. 
            v-flex(xs1).pl-2
              v-btn(flat icon left color="white" @click="props.accept")
                v-icon mdi-close   
>>>>>>> refactor/upgrade
</template>

<script>
  import CookieLaw from 'vue-cookie-law';
  export default {
<<<<<<< HEAD
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
=======
    components: {
      CookieLaw
>>>>>>> refactor/upgrade
    }
  };
</script>

<style scoped>
<<<<<<< HEAD
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
=======
  .Cookie--mcCookie {
    margin-top: 11%;
    background-color: #596d88;
>>>>>>> refactor/upgrade
    font-size: 13px;
  }

<<<<<<< HEAD
  .cookie-button:hover {
    cursor: pointer;
  }

=======
>>>>>>> refactor/upgrade
  .policy-links {
    color: white;
    font-size: 13px; 
    font-weight: bold
  }

  @media (min-width: 576px) {
    .Cookie--mcCookie {
      margin-top: 6.5%;
    }
  }

  @media (min-width: 768px){
   .Cookie--mcCookie {
     margin-top: 5%;
   }
  }
  
  @media (min-width: 992px) {
   .Cookie--mcCookie {
      margin-top: 4.5%;
   }
  }
</style>


