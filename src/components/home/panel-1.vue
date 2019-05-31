<template lang="pug">
  div(v-if="!$isMobile")
    div.panel-1.white.pa-5
      v-container.px-5
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center)
            span(style="line-height: 65px;").font-large Tools to 
              br
              | Manage &amp; Secure Your 
              br
              | Clinic's Records
            br
            br
            br
            v-btn(color="#18c551" style="padding: 10px 40px 40px 40px")
              strong.font-small.text-none.white--text Sign Up Now
          v-flex(xs12 md7 align-self-center)
            img(width="100%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients.png").right
      br
      br
      br
      br
  div(v-else).white
    v-container
      v-layout(row justify-center)
        v-flex(xs12 md5)
          span(style="line-height: 55px;").font-l Tools to  
            br
            | Manage &amp; Secure Your  
            br
            | Clinic's Records
          br
          br
          em
            strong.font-s - Secure Medical Records
            br
            | 
            strong.font-s - Minimized Costs
            br 
            | 
            strong.font-s - Lesser Paperwork
          br 
          br
    v-flex(xs12)
      img(width="100%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients-mobile.png")
      div(style="height: 75px").mc-green
        v-layout(row justify-center)
          a(style="padding: 20px 0")
            strong(style="font-size: 25px").white--text Sign Up Now   
</template>

<script>
  export default {
    data () {
        return {
          showVid: false
        };
      },
  };
</script>

<style scoped>
  .panel-1{
    height: auto;
  }
</style>
