<template lang="pug">
  div
    div(v-if="!$isMobile")
      div.panel-1
        v-container
          v-flex(xs12 md12).pt-5
            center 
              strong.font-large.text-xs-center.white--text Your best CMS investment yet
              br
              strong(style="font-size: 25px").white--text Quality clinic technology made more affordable. 
                br
                | Only pay for what you need.
              br
              br
        div      
          v-layout(row wrap justify-center).mx-5
            v-flex(xs6).px-1
              a(@click="isPrivate=true")
                div.tab.pa-3.right
                  center 
                    strong(style="font-size: 25px") Private Practice
                      br
                      | 
                      font.font-small.font-mc-grey Solo or group clinic practitioners
            v-flex(xs6).px-1
              a(@click="isPrivate=false")
                div.tab.pa-3
                  center 
                    strong(style="font-size: 25px") Multispecialty Clinics
                      br
                      | 
                      font.font-small.font-mc-grey One stop, multi-staff clinics
      div.white  
        v-container.py-5
          private_prac(v-if="isPrivate")
          multispecialty(v-else)
    div(v-else)
      div.panel-1
        v-container
          v-flex(xs12)
            center 
              strong(style="font-size: 29px").text-xs-center.white--text Your best CMS 
                br
                | investment yet
              br
              span(style="font-size: 13px").white--text Quality clinic technology made more affordable. Only pay for what you need.  
              br
      div.white
        v-layout(row).pa-3
          v-layout(column)  
            strong.font-m Private Practice
            span(style="font-size: 14px") Solo or group clinic practitioners
          v-spacer
            
          v-icon(v-if="!isPrivate" size=40 @click="isPrivate=!isPrivate") arrow_right
          v-icon(v-else size=40 @click="isPrivate=!isPrivate") arrow_drop_down
        div(v-if="isPrivate")
          div.pa-3
            private_prac

      hr
      div.white
        v-layout(row).pa-3
          v-layout(column)  
            strong.font-m Multispecialty Clinics
            span(style="font-size: 14px") One-stop, multi-staff clinics
          v-spacer
          v-icon(v-if="!isMulti" size=40 @click="isMulti=!isMulti") arrow_right
          v-icon(v-else size=40 @click="isMulti=!isMulti") arrow_drop_down
        div(v-if="isMulti")
          div.pa-3
            multispecialty
</template>

<script>
  import private_prac from './private';
  import multispecialty from './multispecialty';

  export default {
    components: {
      private_prac,
      multispecialty,
    },
    methods: {
      
    },
    data () {
      return {
        isPrivate: true,
        isMulti: false
      };
    }
  };
</script>

<style scoped>
  .panel-1{
    background-image: url("../../assets/images/mycure-pricing-background.png");
    background-position: center center;
    background-size: cover;
  }

  .tab{
    border-radius: 10px 10px 0 0;
    background-color: white;
    width: 450px;
    height: 100%px;
  }

  .tabMobile{
    border-radius: 10px 10px 0 0;
    background-color: white;
    width: 150px;
    height: 100%px;
  }

  a {
    color: black
  }

  #asd {
    color: blue
  }
</style>
