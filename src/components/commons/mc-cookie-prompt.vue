<template lang="pug">
  div#cookie-nav.pt-1
    b-container.cookie-prompt
      b-row(style="width: 100%").pt-2.pb-1
        b-col(xs="4" offset="4" offset-sm="0" sm="2" md="2" lg="1")
          img(src="../../assets/images/v4/mycure-emr-offline-online-website-cookie-prompt-icon.png")
        b-col(xs="4" sm="8" md="8" lg="10" style="padding: 0px 5px 0px 0px").cookie-text
          b Thank you for visiting! 
          span To help improve your browsing experience, this site may use cookies, web beacons, tracking pixels and other tracking technologies while you access the site.
        b-col(xs="4" offset="4" offset-sm="0" sm="2" md="2" lg="1").agree-button
          b-button(variant="primary" size="lg")#cookie-accept-button I AGREE.
          // style="padding: 10px 5px 0px 1px"
</template>

<script>
  export default {
    data: () => ({
      scrollTop: 0
    }),
    methods: {
      toggleChat() {
        $crisp.push(['do', 'chat:toggle'])
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
    background: rgba(239,239,98,1);
    z-index: 999999;
  }

  #cookie-accept-button {
    font-size: 12px;
    padding: 8px 0px 10px 0px !important;
    min-width: 100px !important;
    height: 35px !important;
  }

  .cookie-prompt {
    padding: 0px 0px 10px 30px;
    
  }

  .agree-button{
    padding: 0px 0px 0px 0px;
  }

  @media (min-width: 576px) {
    .cookie-prompt {
      padding: 0px 0px 0px 0px;
    } 
    .agree-button {
      padding: 30px 0px 0px 0px;
    }
  }

  @media (min-width: 768px){
    .cookie-prompt {
      padding: 0px 0px 0px 0px;
    } 
    .agree-button {
      padding: 20px 30px 0px 0px;
    }
  }
  
  @media (min-width: 992px) {
    .cookie-prompt {
      padding: 0px 5px 0px 0px;
    } 
    .agree-button {
      padding: 5px 0px 0px 0px;
    }
  }

</style>
