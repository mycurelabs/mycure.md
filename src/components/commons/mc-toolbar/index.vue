<template lang="pug">
  div
    //- TODO: Configure Google Analytics Events
    //- WEB
    div(v-if="!$isMd" :class="[shadow]").toolbarMain.white
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
import mcCookiePrompt from '../mc-cookie-prompt';
import ToolbarWeb from './web';
import ToolbarMobile from './mobile';
import VueScrollTo from 'vue-scrollto';

export default {
  components: {
    mcCookiePrompt,
    ToolbarWeb,
    ToolbarMobile
  },
  data () {
    return {
      loginURL: 'signin',
      scrollPosition: null,
      shadow: '',
      solutionsText: 'Solutions',
      solutionsMenuItems: [
        { name: 'Doctors Clinics', route: 'doctors-clinics' },
        { name: 'Specialized Clinics', route: 'specialized-clinics' },
        { name: 'Multispecialty Clinics', route: 'multispecialty-clinics' }
      ],
      toolbarLinks: [
        { id: 'features', name: 'Features', route: 'features' },
      ]
    };
  },
  computed: {
    isMainRoute () {
      const routes = ['doctors-clinics', 'specialized-clinics', 'multispecialty-clinics'];
      return routes.includes(this.$route.name);
    }
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
        eventLabel: 'toolbar-mycure-logo'
      });
    },
    handleToolbarLinkClick (link) {
      const getStartedBtns = ['get-started-btn', 'mobile-navdrawer-get-started-btn'];
      if (getStartedBtns.includes(link) && this.$route.name === 'home') {
        VueScrollTo.scrollTo(`#health-suites`, 500, { easing: 'ease' } );
      } else if (getStartedBtns.includes(link)) {
        this.$router.push({
          name: 'home',
          params: { scrollHealthSuites: true }
        });
      }
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-toolbar-${link}`,
        eventLabel: link
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
}
.cookie-prompt {
  position: absolute; 
  z-index: 99;
}
</style>
