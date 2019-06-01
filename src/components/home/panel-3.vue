<template lang="pug">
  div
    div(v-if="!$isMobile" style="padding: 0 6% 0 6%;").white.py-5
      v-container
        v-layout(row justify-center)
          span.font-medium It's complete - everything your clinic needs.
      div.py-5
        center
          img(style="max-width: 90%;" src="../../assets/images/mycure-home-web-complete-clinic-management-system-diagram.png")
    div(v-else style="background-color: #f5f5f5")
      v-container
        v-layout(row justify-center)
          span.font-l.text-xs-center Are you having trouble in your clinic?
      v-container
        v-layout(row justify-center)
          v-list(two-line style="background-color: #f5f5f5")
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-m Are you having data privacy issues?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-m Do you need to cut on unnecessary costs?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-m Is your internet connection unreliable?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-m Do you have a duplicate or missing patient charts?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-m Do you have billing &amp; collection discrepancies?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-m Is your current system crappy and slows you down?  
        v-layout(row wrap justify-center)
          v-btn(
            :href="`${siginURL}/signup/private/step-1`"
            color="#18c551" 
            large
          ).mt-5 
            strong.font-s.white--text.text-none Sign Up Now
        p.text-xs-center.py-4.font-xs Have questions? Give us a call: 
          strong (+63) 917 303 4350
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }    
  };
</script>

<style scoped>

</style>