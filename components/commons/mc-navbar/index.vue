<template lang="pug">
  fragment
    //- WEB
    //- MOBILE
    div(v-if="isMobile")
      toolbar-mobile(
        :shadow="shadow"
        :loginURL="loginURL"
        :solutionsMenuItems="solutionsMenuItems"
        :toolbarLinks="toolbarLinks"
        @toolbarLinkClick="handleToolbarLinkClick($event)"
        @logoClick="handleMycureLogo"
      )
    div(v-else).toolbarMain
      toolbar-web(
        :loginURL="loginURL"
        :shadow="shadow"
        :solutionsMenuItems="solutionsMenuItems"
        :solutionsText="solutionsText"
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
import ToolbarWeb from './web';
import ToolbarMobile from './mobile';
import McCookiePrompt from '~/components/commons/mc-cookie-prompt';

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
      // - TODO: Temporarily hide
      // { name: 'Hippocrates by MYCURE', route: 'hippocrates' },
    ];
    this.toolbarLinks = [
      {
        name: 'Features',
        id: 'features-nav-btn',
        route: 'features',
        text: true,
      },
      {
        name: 'Fight COVID-19: Free EMR',
        id: 'mycure-heart-nav-btn',
        route: 'fight-covid-19',
        color: '#C2F3FF',
      },
    ];
    return {
      loginURL: 'signin',
      scrollPosition: null,
      shadow: '',
      solutionsText: 'Solutions',
      isMobile: true,
    };
  },
  computed: {
    isMd () {
      return this.wMD;
    },
  },
  watch: {
    scrollPosition: 'showShadow',
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll);
    this.isMobile = this.$isMobile;
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
      const routes = ['index', 'virtual-clinic-temporary-home'];
      if (getStartedBtns.includes(link) && routes.includes(this.$nuxt.$route.name)) {
        VueScrollTo.scrollTo('#health-suites', 500, { easing: 'ease' });
      } else if (getStartedBtns.includes(link)) {
        this.$nuxt.$router.push({
          name: 'index',
          params: { scrollHealthSuites: true },
        });
      } else if (link === 'fight-covid-19-get-started-btn') {
        if (process.browser) {
          window.open('https://forms.gle/y4qpv7ajERaGE5Lr7', '_blank', 'noopener, noreferrer');
        }
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
  position: fixed;
  height: 30px;
  width: 100%;
  z-index: 200;
}
.cookie-prompt {
  z-index: 99;
}
</style>
