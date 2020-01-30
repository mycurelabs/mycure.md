<template lang="pug">
  div
    //- WEB
    div(v-if="!$isMd" :class="shadow").toolbarMain
      toolbar-web
    //- MOBILE
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
                v-list-tile(v-for="(item, key) in solutionsMenuItems" :key="key")
                  v-list-tile-content
                    v-list-tile-title 
                      b {{ item.name }}
                v-list-tile(
                  v-for="(link, index) in toolbarLinks"
                  :key="index"
                  :to="{ name: link.route }")
                  v-list-tile-content
                    v-list-tile-title
                      b {{ link.name }}
              br
              br    
              v-divider
            v-flex(xs12 md12 dark)
              v-list(two-line) 
                template(v-for="section in navSectionLinks")
                  v-subheader {{ section.header }}
                  v-list-tile(
                    v-for="(item, key) in section.items"
                    :to="{ name: item.route }"
                  )
                    v-list-tile-content
                      v-list-tile-title 
                        b {{ item.name }}
                  v-divider
                v-subheader {{ contactDetails.header }}
                v-list-tile(
                  v-for="(contact, key) in contactDetails.items"
                  :key="key"
                )
                  v-list-tile-content
                    v-list-tile-title
                      b {{ contact }}
        div.navBottomBtns.py-3
          v-layout(row justify-center)
            v-btn(
                id="navdrawer-login-btn"
                :href="`${signInURL}?target=${cmsURL}/authenticate`"
                target="_blank"
                @click.stop="handleLoginBtnMobile"
              )
                strong.font-14.tab LOGIN
            v-btn(
              id="navdrawer-signup-btn"
              color="#18c551"
              :href="`${signInURL}/signup/choose`"
              target="_blank"
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
      signInURL: process.env.VUE_APP_SIGNIN_URL,
      cmsURL: process.env.VUE_APP_CMS_URL,
      drawer: false,
      scrollPosition: null,
      shadow: '',
      solutionsText: 'Solutions',
      solutionsMenuModel: false,
      solutionsMenuItems: [
        { name: 'Doctors Clinics' },
        { name: 'Specialized Clinics' },
        { name: 'Multispecialty Clinics' }
      ],
      toolbarLinks: [
        { name: 'Features', route: 'features' },
        { name: 'Pricing', route: 'pricing' }
      ],
      navSectionLinks: [
        {
          header: 'About',
          items: [
            { name: 'Our Story', route: 'our-story' },
            { name: 'Blog', route: 'blog-link' },
            { name: 'Careers', route: 'careers' },
          ]
        },
        {
          header: 'Support',
          items: [
            { name: 'Book A Demo' }
          ]
        },
        {
          header: 'Legal',
          items: [
            { name: 'Terms' },
            { name: 'Privacy Policy' }
          ]
        }
      ],
      contactDetails: {
        header: 'Contact',
        items: [
          'hello@mycure.md',
          '(+632) 7799 6262',
          '(+63) 917 303 4350'
        ]
      }
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
