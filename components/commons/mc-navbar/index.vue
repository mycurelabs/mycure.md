<template lang="pug">
  fragment
    //- WEB
    div(v-if="isMd" :class="[shadow]").toolbarMain
      toolbar-web(
        :loginURL="loginURL"
        :solutionsMenuItems="solutionsMenuItems"
        :solutionsText="solutionsText"
        :toolbarLinks="toolbarLinks"
        :isMainRoute="isMainRoute"
        @toolbarLinkClick="handleToolbarLinkClick($event)"
        @logoClick="handleMycureLogo"
      )
    //- MOBILE
    div(v-else)
      toolbar-mobile(
        :shadow="shadow"
        :loginURL="loginURL"
        :solutionsMenuItems="solutionsMenuItems"
        :toolbarLinks="toolbarLinks"
        @toolbarLinkClick="handleToolbarLinkClick($event)"
        @logoClick="handleMycureLogo"
      )
    mc-cookie-prompt.cookie-prompt
</template>

<script>
// - utils
import VueScrollTo from 'vue-scrollto';
// - components
import McCookiePrompt from '../mc-cookie-prompt';
import ToolbarWeb from './web';
import ToolbarMobile from './mobile';

export default {
  components: {
    McCookiePrompt,
    ToolbarWeb,
    ToolbarMobile,
  },
  data () {
    this.solutionsMenuItems = [
      { name: 'Doctors Clinics', route: 'doctors-clinics' },
      { name: 'Specialized Clinics', route: 'specialized-clinics' },
      { name: 'Multispecialty Clinics', route: 'multispecialty-clinics' },
    ];
    this.toolbarLinks = [
      { id: 'features', name: 'Features', route: '/features' },
    ];
    return {
      loginURL: 'signin',
      scrollPosition: null,
      shadow: '',
      solutionsText: 'Solutions',
    };
  },
  computed: {
    isMainRoute () {
      const routes = ['doctors-clinics', 'specialized-clinics', 'multispecialty-clinics'];
      return routes.includes(this.$nuxt.$route.name);
    },
    isMd () {
      return this.wMD;
    },
  },
  watch: {
    scrollPosition: 'showShadow',
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY;
    },
    showShadow () {
      this.scrollPosition !== 0 ? this.shadow = 'elevation-4' : this.shadow = '';
    },
    handleMycureLogo () {
      this.$ga.event({
        eventCategory: 'logo-btn',
        eventAction: 'click-toolbar-mycure-logo',
        eventLabel: 'toolbar-mycure-logo',
      });
    },
    handleToolbarLinkClick (link) {
      const getStartedBtns = ['get-started-btn', 'mobile-navdrawer-get-started-btn'];
      if (getStartedBtns.includes(link) && this.$nuxt.$route.name === 'home') {
        VueScrollTo.scrollTo('#health-suites', 500, { easing: 'ease' });
      } else if (getStartedBtns.includes(link)) {
        this.$nuxt.$router.push({
          name: 'index',
          params: { scrollHealthSuites: true },
        });
      }
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-toolbar-${link}`,
        eventLabel: link,
      });
    },
  },
};
</script>

<style scoped>
.toolbarMain {
  width: 100%;
  z-index: 200;
}
.cookie-prompt {
  z-index: 99;
}
</style>
