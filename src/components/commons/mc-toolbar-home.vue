<template lang="pug">
  div
    div(v-if="!$isMobile" style="position: fixed; width: 100%; z-index: 9999;" :class="shadow").white
      v-container(style="height: 70px !important;").white.py-0
        v-layout(row wrap justify-center)
          v-flex(xs12 md12 style="margin-top: 3px;")
            v-toolbar(flat).white
              router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo").mr-3.mt-2
                img(src="../../assets/images/mycure-header-logo.png" width="140" alt="MYCURE logo")
              v-btn(v-for="(link, key) in $mainLinks" :key="key" :to="{ name: link.name }" :id="link.id" flat)
                span(style="font-size: 14px").tab.text-none {{link.meta.pageName}}
              v-spacer
              v-btn(
                flat
                :href="`${siginURL}?target=${cmsURL}/authenticate`"
                id="toolbar-login-btn"
              )
                strong(style="font-size: 14px").tab LOGIN
              v-btn(
                color="#2e9fdf"
                :href="`${siginURL}/signup/choose`"
                id="toolbar-signup-btn"
              )
                strong(style="font-size: 14px").white--text.tab SIGN UP
    div(v-else)
      v-container
        v-toolbar(flat fixed :class="shadow").white
          router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines").logo-a
            img(src="../../assets/images/mycure-header-logo.png" width="130" alt="MYCURE logo").mt-1
          v-spacer
          v-btn(icon large @click="drawer = !drawer")
            v-icon(style="font-size: 35px;") menu
      v-navigation-drawer(fixed app v-model="drawer" right width="500")   
        //- v-toolbar(flat app fixed).white
        div(style="position: sticky; top: 0px; z-index: 9999; width: 100%;")
          v-toolbar(flat :class="shadow").white
            router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo").logo-a
              img(src="../../assets/images/mycure-header-logo.png" width="130" alt="MYCURE logo").mt-1
            v-spacer
            v-btn(icon large @click="drawer = !drawer")
              v-icon(style="font-size: 35px;") close 
        v-content
          v-layout(row wrap)
            v-flex(xs12 md12)
              v-list(two-line)
                v-list-tile(v-for="(link, key) in $mainLinks" :key="key" :to="{ name: link.name }" :id="link.id")
                  v-list-tile-content
                    v-list-tile-title 
                      b {{link.meta.pageName}}
              br
              br    
              v-divider
            v-flex(xs12 md12 dark)
              v-list(two-line) 
                v-subheader Clinic Solutions
                v-list-tile(:to="{name: 'emr'}")
                  v-list-tile-content
                    v-list-tile-title 
                      b For Private Practice
                v-list-tile(:to="{name: 'cms'}")
                  v-list-tile-content
                    v-list-tile-title 
                      b For Multispecialty Practice
                v-divider
                v-subheader About
                v-list-tile(:to="{name: 'our-story'}")
                  v-list-tile-content
                    v-list-tile-title 
                      b Our Story
                v-list-tile(:to="{name: 'blog-link'}")
                  v-list-tile-content
                    v-list-tile-title     
                      b Blog
                v-list-tile(:to="{name: 'careers'}")
                  v-list-tile-content
                    v-list-tile-title 
                      b Careers
                v-divider
                v-subheader Support
                v-list-tile(:to="{name: 'faqs-link'}")
                  v-list-tile-content
                    v-list-tile-title 
                      b FAQs
                v-list-tile(:to="{name: 'pricing'}")
                  v-list-tile-content
                    v-list-tile-title 
                      b Pricing
                v-list-tile(:to="{name: 'calendly'}")
                  v-list-tile-content
                    v-list-tile-title 
                      b Book A Demo
                v-divider
                v-subheader Legal
                v-list-tile(:to="{name: 'terms'}")
                  v-list-tile-content
                    v-list-tile-title 
                      b Terms
                v-list-tile(:to="{name: 'privacy-policy'}")
                  v-list-tile-content
                    v-list-tile-title 
                      b Privacy Policy
                v-divider 
                v-subheader Contact Us
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title
                      b hello@mycure.md
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title
                      b (+632) 799 6262
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title
                      b (+63) 917 303 4350              
        div(style="position: sticky; bottom: 0px; z-index: 999; border-top: 1px solid lightgrey; background-color: white").py-3
          v-layout(row justify-center)
            v-btn(
                :href="`${siginURL}?target=${cmsURL}/authenticate`"
              )
                strong(style="font-size: 14px").tab LOGIN
            v-btn(
              color="#18c551"
              :href="`${siginURL}/signup/choose`"
            )
              strong(style="font-size: 14px").white--text.tab SIGN UP
    mc-cookie-prompt
</template>

<script>
  import mcCookiePrompt from './mc-cookie-prompt';
  export default {
    components: {
      mcCookiePrompt
    },
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
