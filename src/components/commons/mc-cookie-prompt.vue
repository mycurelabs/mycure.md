<template lang="pug">
  div
    v-container.font-source-sans
      cookie-law(
        :position="position" 
        transitionName="fade"
      ).Cookie--mcCookie.white--text.pa-1
        div(slot-scope="props").width100
          v-container.py-1.width100
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
</template>

<script>
  import CookieLaw from 'vue-cookie-law';
  export default {
    components: {
      CookieLaw
    },
    computed: {
      position () {
        if (!this.$isMobile) return 'top';
        else return 'bottom';
      }
    }
  };
</script>

<style scoped>
  .Cookie--mcCookie {
    margin-top: 15%;
    background-color: #075b76;
    font-size: 13px;
  }

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


