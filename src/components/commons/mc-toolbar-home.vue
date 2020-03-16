<template lang="pug">
  div
    div(v-if="!$isMd" :class="shadow").toolbarMain
      v-container.grey-gradient.toolbarHeight.py-0
        v-layout(row wrap justify-center)
          v-flex(xs12 md12).toolbarMargin
            v-toolbar(flat).grey-gradient
              router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo" @click.stop="handleMycureLogo").mr-3.mt-2
                img(src="../../assets/images/mycure-header-logo.png" width="140" alt="MYCURE logo")
              v-btn(
                v-for="(link, key) in $mainLinks" 
                :key="key" 
                :to="{ name: link.name }" 
                :id="link.id" 
                flat
              ).mx-0
                span.font-14.tab.text-none {{link.meta.pageName}}
              span.ml-2.font-weight-bold |
              v-btn(
                flat
                :to="{ name: 'features' }"
                id="toolbar-features-btn"
                @click.stop="handleToolbarFeaturesBtn"
              )
                span.font-14.text-none.tab Features
              v-spacer
              v-btn(
                flat
                :to="{ name: 'csr' }"
                id="toolbar-csr-btn"
                @click.stop="handleToolbarCsrBtn"
              )
                span.font-14.text-none.tab CSR
              v-btn(
                outline
                color="#2e9fdf"
                :href="`${signInURL}?target=${cmsURL}`"
                target="_blank"
                id="toolbar-login-btn"
                :to="{ name: 'signin' }"
                @click.stop="handleLoginBtn"
              )
                strong.font-14.tab LOGIN
              v-btn(
                id="toolbar-signup-btn"
                color="#2e9fdf"
                :to="{ name: 'signup-choose' }"
                @click.stop="handleSignupBtn"
              )
                strong.font-14.white--text.tab SIGN UP
    div(v-else)
      v-container
        v-toolbar(flat fixed :class="shadow").white
          router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines").logo-a
            img(src="../../assets/images/mycure-header-logo.png" width="130" alt="MYCURE logo").mt-1
          v-spacer
          v-btn(icon large @click="drawer = !drawer")
            v-icon.font-35 menu
      v-navigation-drawer(fixed app v-model="drawer" right width="500").navMain   
        div.navHeader
          v-toolbar(flat :class="shadow").white
            router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo" @click.stop="handleMycureLogo").logo-a
              img(src="../../assets/images/mycure-header-logo.png" width="130" alt="MYCURE logo").mt-1
            v-spacer
            v-btn(icon large @click="drawer = !drawer")
              v-icon.font-35 close 
        v-content
          v-layout(row wrap)
            v-flex(xs12 md12)
              v-list(two-line)
                v-list-tile(v-for="(link, key) in $mainLinks" :key="key" :to="{ name: link.name }" :id="link.id")
                  v-list-tile-content
                    v-list-tile-title 
                      b {{link.meta.pageName}}
                v-list-tile(:to="{ name: 'features' }")
                  v-list-tile-content
                    v-list-tile-title
                      b Features
                v-list-tile(:to="{ name: 'csr' }")
                  v-list-tile-content
                    v-list-tile-title
                      b CSR
              br
              br    
              v-divider
            v-flex(xs12 md12 dark)
              v-list(two-line) 
                //- v-subheader Clinic Solutions
                //- v-list-tile(:to="{name: 'emr'}")
                //-   v-list-tile-content
                //-     v-list-tile-title 
                //-       b For Individual Practice
                //- v-list-tile(:to="{name: 'cms'}")
                //-   v-list-tile-content
                //-     v-list-tile-title 
                //-       b For Multispecialty Practice
                //- v-divider
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
                //- v-list-tile(:to="{name: 'faqs-link'}")
                  v-list-tile-content
                    v-list-tile-title 
                      b FAQs
                //- v-list-tile(:to="{name: 'pricing'}")
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
                      b (+632) 7799 6262
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title
                      b (+63) 917 303 4350              
        div.navBottomBtns.py-3
          v-layout(row justify-center)
            v-btn(
              id="navdrawer-login-btn"
              :to="{ name: 'signin' }"
              @click.stop="handleLoginBtnMobile"
            )
              strong.font-14.tab LOGIN
            v-btn(
              id="navdrawer-signup-btn"
              color="#18c551"
              :to="{ name: 'signup-choose' }"
              @click.stop="handleSignupBtnMobile"
            )
              strong.font-14.white--text.tab SIGN UP
    mc-cookie-prompt.forCookie
</template>

<script>
  import mcCookiePrompt from './mc-cookie-prompt';
  export default {
    components: {
      mcCookiePrompt
    },
    data () {
      return {
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
      },
      handleLoginBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-toolbar-login-btn',
          eventLabel: 'toolbar-login-btn'
        });
      },
      handleSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-toolbar-signup-btn',
          eventLabel: 'toolbar-signup-btn'
        });
      },
      handleLoginBtnMobile () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-navdrawer-login-btn',
          eventLabel: 'navdrawer-login-btn'
        });
      },
      handleSignupBtnMobile () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-navdrawer-signup-btn',
          eventLabel: 'navdrawer-signup-btn'
        });
      },
      handleMycureLogo () {
        this.$ga.event({
          eventCategory: 'logo-btn',
          eventAction: 'click-toolbar-mycure-logo',
          eventLabel: 'toolbar-mycure-logo'
        });
      },
      handleToolbarFeaturesBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-toolbar-features-btn',
          eventLabel: 'toolbar-features-btn'
        });
      },
      handleToolbarCsrBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-toolbar-csr-btn',
          eventLabel: 'toolbar-csr-btn'
        });
      }
      // foo () {
      //   console.log('asdasd');
      // }
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

  .toolbarMargin{
    margin-top: 3px;
  }

  .toolbarHeight {
    height: 70px !important;
  }

  .toolbarMain {
    position: fixed; 
    width: 100%; 
    z-index: 200;
    background-color: #f0f0f0;
  }

  .navMain {
    z-index: 999 !important
  }

  .forCookie {
    position: absolute; 
    z-index: 99;
  }

  .navBottomBtns {
    position: sticky; 
    bottom: 0px; 
    z-index: 999; 
    border-top: 1px solid lightgrey; 
    background-color: white
  }

  .navHeader {
    position: sticky; 
    top: 0px; 
    z-index: 9999; 
    width: 100%;
  }
  .grey-gradient {
    background-color: #f0f0f0;
  }
</style>
