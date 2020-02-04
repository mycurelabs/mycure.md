<template lang="pug">
  div
    //- TODO: Configure Google Analytics Events
    //- WEB
    div(v-if="!$isMd" :class="shadow").toolbarMain
      toolbar-web(
        :signUpURL="signUpURL"
        :loginURL="loginURL"
        :solutionsMenuItems="solutionsMenuItems"
        :solutionsText="solutionsText"
        :toolbarLinks="toolbarLinks"
      )
    //- MOBILE
    div(v-else)
      toolbar-mobile(
        :shadow="shadow"
        :loginURL="loginURL"
        :signUpURL="signUpURL"
        :solutionsMenuItems="solutionsMenuItems"
        :toolbarLinks="toolbarLinks"
      )
    mc-cookie-prompt.cookie-prompt
</template>

<script>
import mcCookiePrompt from '../mc-cookie-prompt';
import ToolbarWeb from './web';
import ToolbarMobile from './mobile';
export default {
  components: {
    mcCookiePrompt,
    ToolbarWeb,
    ToolbarMobile
  },
  data () {
    return {
      signUpURL: 'signup-choose',
      loginURL: 'signin',
      scrollPosition: null,
      shadow: '',
      solutionsText: 'Solutions',
      solutionsMenuItems: [
        { name: 'Doctors Clinics', route: 'doctors-clinics' },
        { name: 'Specialized Clinics' },
        { name: 'Multispecialty Clinics', route: 'multispecialty-clinics' }
      ],
      toolbarLinks: [
        { id: 'nav-features', name: 'Features', route: 'features' },
        { id: 'nav-pricing', name: 'Pricing', route: 'pricing' }
      ]
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
.toolbarMain {
  position: fixed; 
  width: 100%; 
  z-index: 200;
  background-color: #f0f0f0;
}
.cookie-prompt {
  position: absolute; 
  z-index: 99;
}
</style>
