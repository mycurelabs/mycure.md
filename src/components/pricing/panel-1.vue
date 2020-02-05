<template lang="pug">
  div
    div(v-if="!$isMobile")
      div.panel1
        v-container
          v-flex(xs12 md12).pt-5
            v-layout(row justify-center) 
              strong.font-60.text-xs-cente.font-work-sans Your best CMS investment yet
            v-layout(row justify-center) 
              strong.font-25.text-xs-center.font-mc-grey Quality clinic technology made more affordable. 
                br
                | Only pay for what you need.
              br
              br
        div      
          v-layout(row wrap justify-center).mx-5
            v-flex(xs6).px-1
              a(@click="isPrivate=true; isMulti=false;")
                div(v-if="isPrivate").tabActive.pa-3.right
                  v-layout(row justify-center) 
                    strong.font-25.font-work-sans Individual Practice
                      br
                      | 
                      font.font-18.font-mc-grey Solo or group clinic practitioners
                div(v-else).tab.pa-3.right
                  v-layout(row justify-center) 
                    strong.font-25.font-work-sans Individual Practice
                      br
                      | 
                      font.font-18.font-mc-grey Solo or group clinic practitioners
            v-flex(xs6).px-1
              a(@click="isMulti=true; isPrivate=false")
                div(v-if="isMulti").tabActive.pa-3
                  v-layout(row justify-center) 
                    strong.font-25.font-work-sans Multispecialty Clinics
                      br
                      | 
                      font.font-18.font-mc-grey One stop, multi-staff clinics
                div(v-else).tab.pa-3
                  v-layout(row justify-center) 
                    strong.font-25.font-work-sans Multispecialty Clinics
                      br
                      | 
                      font.font-18.font-mc-grey One stop, multi-staff clinics
      div.white  
        v-container.py-5
          private_prac(v-if="isPrivate")
          multispecialty(v-else)
    div(v-else)
      div.panel1.px-2.pt-5
        v-layout(column justify-center) 
          strong.font-30.text-xs-center.font-work-sans Your best CMS 
            br
            | investment yet
          span.font-14.font-mc-grey.text-xs-center Quality clinic technology made more affordable. 
            br 
            | Only pay for what you need.  
          br
      div.white
        v-layout(row).pa-3
          v-layout(column)  
            strong.font-18 Individual Practice
            span.font-14 Solo or group clinic practitioners
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
            strong.font-18 Multispecialty Clinics
            span.font-14 One-stop, multi-staff clinics
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
  .panel1{
    background-image: url("../../assets/images/mycure-web-features-cover-banner.png");
    background-position: center center;
    background-size: cover;
  }

  .tab{
    border-radius: 10px 10px 0 0;
    background-color: lightgrey;
    opacity: 1;
    width: 450px;
    height: 100%;
    box-shadow: 0px 0px 10px 2px gray inset;
  }

  .tabActive{
    border-radius: 10px 10px 0 0;
    background-color: white;
    width: 450px;
    height: 100%;
    /* box-shadow: 0px 0px 20px 2px gray inset; */
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
