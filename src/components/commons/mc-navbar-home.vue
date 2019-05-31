<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-toolbar(app flat fixed).py-1.white 
        v-layout(row wrap align-center style="padding: 0 6% 0 6%;")
          a(href="/").pr-4
            img(src="../../assets/images/mycure-logo.svg" height="35")
          v-btn(href="/electronic-medical-records" flat)
            strong(style="font-size: 14px").tab FOR PRIVATE PRACTICE
          v-btn(href="/clinic-management-system" flat)
            strong(style="font-size: 14px").tab FOR MULTISPECIALTY CLINICS
          v-spacer
          v-btn(
            flat
            :href="`${siginURL}?target=${cmsURL}/authenticate`"
          )
            strong(style="font-size: 14px").tab LOGIN
          v-btn(
            color="#2e9fdf"
            :href="`${siginURL}/signup/private/step-1`"
          )
            strong(style="font-size: 14px").white--text.tab SIGN UP
    div(v-else)
      v-toolbar(app flat fixed).white
        a(href="/")
          img(src="../../assets/images/mycure-logo.svg" height="25px")
        v-spacer
        v-toolbar-side-icon(@click="drawer = !drawer")
          v-icon(color="gray").sideMenu.pa-1 menu
      v-navigation-drawer(app v-model="drawer" right)
        center.py-5
          img(src="../../assets/images/mycure-logo.svg" height="50px")
        br(style="line-height: 25px")
        div.sideNavBtn
          a(href="/electronic-medical-records" flat)
            v-layout(row center)
              v-icon person
              strong.black--text &nbsp; &nbsp; FOR PRIVATE PRACTICE
        center
          hr(style="width: 80%; border-color: #f5f5f5")
        div.sideNavBtn
          a(href="/clinic-management-system" flat)
            v-layout(row center)
              v-icon group
              strong.black--text &nbsp; &nbsp; FOR MULTISPECIALTY CLINICS
        center
          hr(style="width: 80%; border-color: #f5f5f5")
        br
        br
        br
        br
        br
        center
          div.login
            a(href="/clinic-management-system" flat)
              strong.black--text LOGIN
        center
          hr(style="width: 80%; border-color: #f5f5f5")
        br
        center
          div.signup
            a(href="/clinic-management-system" flat)
              strong.white--text SIGNUP
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL,
        cmsURL: process.env.VUE_APP_CMS_URL,
        drawer: false
      };
    }
  };
</script>

<style scoped>
  .tab {
    letter-spacing: 0.5px;
  }

  .sideMenu {
    background-color: #f5f5f5; 
    border-style: solid; 
    border-color: gray; 
    border-width: 1px;
    border-radius: 7px;
  }
  
  .sideNavBtn {
    padding: 20px 15px 20px 25px; 
  }

  a {
    text-decoration: none
  }

  .login {
    padding: 10px 15px 10px 15px;
  }

  .signup {
    padding: 10px 15px 10px 15px;
    border-radius: 20px;
    background-color: #2e9fdf;
    width: 60%
  }
</style>
