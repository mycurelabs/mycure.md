<template lang="pug">
  div
    div(v-if="!$isMobile" style="position: fixed; width: 100%; z-index: 9999;" :class="shadow").white
      v-container(style="height: 70px !important;").white.py-0
        v-layout(row wrap justify-center)
          v-flex(xs12 md12 style="margin-top: 3px;")
            v-toolbar(flat).white
              router-link(:to="{ name: 'home' }").mr-3.mt-2
                img(src="../../assets/images/mycure-header-logo.png" width="140")
              v-btn(v-for="(link, key) in $mainLinks" :key="key" :to="{ name: link.name }" flat)
                strong(style="font-size: 14px").tab.text-none {{link.meta.pageName}}
              v-spacer
              v-btn(
                flat
                :href="`${siginURL}?target=${cmsURL}/authenticate`"
              )
                strong(style="font-size: 14px").tab LOGIN
              v-btn(
                color="#2e9fdf"
                :href="`${siginURL}/signup/choose`"
              )
                strong(style="font-size: 14px").white--text.tab SIGN UP
    div(v-else)
      v-toolbar(app flat fixed :class="shadow").white
        router-link(:to="{ name: 'home' }").logo-a
          img(src="../../assets/images/mycure-header-logo.png" width="130").mt-1
        v-spacer
        v-btn(icon large @click="drawer = !drawer")
          v-icon(style="font-size: 35px;") menu
      v-navigation-drawer(fixed app v-model="drawer" right width="500")   
        //- v-toolbar(flat app fixed).white
        div(style="position: sticky; top: 0px; z-index: 9999; width: 100%;")
          v-toolbar(flat :class="shadow").white
            router-link(:to="{ name: 'home' }").logo-a
              img(src="../../assets/images/mycure-header-logo.png" width="130").mt-1
            v-spacer
            v-btn(icon large @click="drawer = !drawer")
              v-icon(style="font-size: 35px;") close 
        v-content
          v-layout(row wrap)
            v-flex(xs12 md12)
              v-list(two-line)
                v-list-tile(v-for="(link, key) in $mainLinks" :key="key" :to="{ name: link.name }")
                  v-list-tile-content
                    v-list-tile-title 
                      b {{link.meta.pageName}}
              br
              br    
              v-divider
            v-flex(xs12 md12 dark)
              //- h1 TODO: Add footer links here. Use list with section
              //- p See this https://vuetifyjs.com/en/components/lists#subheadings-and-dividers
              v-list(two-line) 
                v-subheader Clinic Solutions
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title 
                      router-link(:to="{name: 'emr'}").black--text For Individual Doctors
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title 
                      router-link(:to="{name: 'cms'}").black--text For Multi-specialty Practice
                v-divider
                v-subheader About
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title 
                      router-link(:to="{name: 'our-story'}").black--text Our Story
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title     
                      router-link(:to="{name: 'blog-link'}").black--text Blog
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title 
                      router-link(:to="{name: 'careers'}").black--text Careers
                v-divider
                v-subheader Support
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title 
                      router-link(:to="{name: 'faqs-link'}").black--text FAQs
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title 
                      router-link(:to="{name: 'pricing'}").black--text Pricing
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title 
                      router-link(:to="{name: 'calendly'}").black--text Book A Demo
                v-divider
                v-subheader Legal
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title 
                      router-link(:to="{name: 'terms'}").black--text Terms
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title 
                      router-link(:to="{name: 'privacy-policy'}").black--text Privacy Policy
                v-divider 
                v-subheader Contact Us
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title hello@mycure.md
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title (+632) 799 6262
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title (+63) 917 303 4350              
        div(style="position: sticky; bottom: 0px; z-index: 999; border-top: 1px solid lightgrey; background-color: white").py-3
          v-layout(row justify-center)
            v-btn(
                flat
                :href="`${siginURL}?target=${cmsURL}/authenticate`"
              )
                strong(style="font-size: 14px").tab LOGIN
            v-btn(
              color="#18c551"
              :href="`${siginURL}/signup/choose`"
            )
              strong(style="font-size: 14px").white--text.tab SIGN UP
                  
    //- div(v-else)
    //-   v-toolbar(app flat fixed :class="shadow").white
    //-     router-link(:to="{ name: 'home' }").logo-a
    //-       img(src="../../assets/images/mycure-header-logo.png" width="130").mt-1
    //-     v-spacer
    //-     v-btn(icon large @click="drawer = !drawer")
    //-       v-icon(style="font-size: 35px;") menu
    //-   v-navigation-drawer(app v-model="drawer" right)
    //-     center.py-5
    //-       a(href="/")
    //-         img(src="../../assets/images/mycure-header-logo.png" height="50px")
    //-     br(style="line-height: 25px")
    //-     div.sideNavBtn
    //-       a(href="/electronic-medical-records" flat)
    //-         v-layout(row center)
    //-           v-icon person
    //-           strong.black--text &nbsp; &nbsp; Private Practice 
    //-     center
    //-       hr(style="width: 80%; border-color: #f5f5f5")
    //-     div.sideNavBtn
    //-       a(href="/clinic-management-system" flat)
    //-         v-layout(row center)
    //-           v-icon group
    //-           strong.black--text &nbsp; &nbsp; Multispecialty Clinics
    //-     center
    //-       hr(style="width: 80%; border-color: #f5f5f5")
    //-     br
    //-     br
    //-     br
    //-     br
    //-     br
    //-     center
    //-       div.login
    //-         a(:href="`${siginURL}?target=${cmsURL}/authenticate`" flat)
    //-           strong.black--text LOGIN
    //-     center
    //-       hr(style="width: 80%; border-color: #f5f5f5")
    //-     br
    //-     center
    //-       div.signup
    //-         a(:href="`${siginURL}/signup/choose`" flat)
    //-           strong.white--text SIGNUP
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL,
        cmsURL: process.env.VUE_APP_CMS_URL,
        drawer: false,
        scrollPosition: null,
        shadow: ''
      };
    },
    methods: {
      updateScroll () {
        this.scrollPosition = window.scrollY;
      },
      showShadow () {
        this.scrollPosition !== 0 ? this.shadow = 'elevation-4' : this.shadow = '';
      }
    },
    mounted () {
      window.addEventListener('scroll', this.updateScroll);
    },
    watch: {
      'scrollPosition': 'showShadow'
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
