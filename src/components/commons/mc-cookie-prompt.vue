<template lang="pug">
  div#cookie-nav.pt-1
    b-container(style="padding-top: 0px; padding-bottom: 0px;").cookie-prompt
      b-row(style="width: 100vw;").pt-2.pb-1
        b-col(xs="12" md="1")
          img(src="../../assets/images/v4/mycure-emr-offline-online-website-cookie-prompt-icon.png")
        b-col(xs="12" md="8" style="padding: 0px 5px 0px 0px")
          b Thank you for visiting! 
          span To help improve your browsing experience, this site may use cookies, web beacons, tracking pixels and other tracking technologies while you access the site.
        b-col(xs="12" md="3" style="padding: 10px 5px 0px 0px")
          b-button(variant="primary" size="lg")#cookie-accept-button I AGREE.
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
    /* background-color: white !important; */
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
    padding-top: 50px;
    padding-bottom: 50px;
    /* background-color: blue; */
  }

</style>
