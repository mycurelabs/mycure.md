<template lang="pug">
  div
    div(v-if="!$isMobile")
      div.panel-1
        v-container
          v-flex(xs12 md12).pt-5
            center 
              strong.font-xl.text-xs-center.white--text Your best CMS investment yet
              br
              strong.font-m.white--text Quality clinic technology made more affordable. Only pay for what you need.
              br
              br
        div      
          v-layout(row wrap justify-center).mx-5
            v-flex(xs6).px-1
              a(@click="isPrivate=true")
                div.tab.pa-3.right
                  center 
                    strong.font-m Private Practice
                      br
                      | 
                      font.font-xs.font-mc-grey Solo or group clinic practitioners
            v-flex(xs6).px-1
              a(@click="isPrivate=false")
                div.tab.pa-3
                  center 
                    strong.font-m Multispecialty Clinics
                      br
                      | 
                      font.font-xs.font-mc-grey One stop, multi-staff clinics
      div.white  
        v-container.py-5
          private_prac(v-if="isPrivate")
          multispecialty(v-else)
    div(v-else)
      div.panel-1-mobile
        v-container
          v-flex(xs12)
            center 
              strong.font-m.text-xs-center.white--text Your best CMS investment yet
              br
              span(style="font-size: 9px").white--text Quality clinic technology made more affordable. Only pay for what you need.
              br
              br

</template>

<script>
  import private_prac from './private';
  import multispecialty from './multispecialty';

  export default {
    components: {
      private_prac,
      multispecialty
    },
    methods: {
      
    },
    data () {
      return {
        isPrivate: true,
      };
    }
  };
</script>

<style scoped>
  .panel-1{
    margin-top: 60px;
    height: auto;
    width: auto;
    background-image: url("../../assets/images/mycure-pricing-background.png");
    background-size: 100% auto;
  }

  .panel-1-mobile{
    height: 100%;
    background-image: url("../../assets/images/mycure-pricing-background.png");
    background-size: 100% auto;
  }

  .tab{
    border-radius: 10px 10px 0 0;
    background-color: white;
    width: 450px;
    height: 100%px;
  }

  a {
    color: black
  }

  #asd {
    color: blue
  }
</style>
