<template lang="pug">
  fragment
    //- MOBILE
    div(v-if="$isMobile")
      mc-cookie-prompt.cookie-prompt
      toolbar-mobile(
        :shadow="shadow"
        :loginURL="loginURL"
        :solutionsMenuItems="solutionsMenuItems"
        @actionBtnClick="recordActionBtn($event)"
        @navLinkClick="onNavLinkClick($event)"
        @logoClick="handleMycureLogo"
      )
    //- WEB
    div(v-else).toolbarMain
      //- mc-cookie-prompt.cookie-prompt
      toolbar-web(
        :loginURL="loginURL"
        :shadow="shadow"
        :solutionsMenuItems="solutionsMenuItems"
        :solutionsText="solutionsText"
        :scroll-position="scrollPosition"
        @actionBtnClick="recordActionBtn($event)"
        @navLinkClick="onNavLinkClick($event)"
        @logoClick="handleMycureLogo"
      )
</template>

<script>
// - utils
import VueScrollTo from 'vue-scrollto';
// - components
import ToolbarWeb from './web';
import ToolbarMobile from './mobile';
import { getCountry } from '~/utils/axios';
import McCookiePrompt from '~/components/commons/mc-cookie-prompt';

export default {
  components: {
    McCookiePrompt,
    ToolbarWeb,
    ToolbarMobile,
  },
  data () {
    this.countryCode = 'PH';
    this.solutionsMenuItems = [
      // {
      //   name: 'What is MYCURE?',
      //   route: 'features',
      //   new: false,
      //   external: false,
      // },
      {
        name: 'Features',
        route: 'features',
        new: false,
        external: false,
        comingSoon: false,
      },
      // {
      //   name: 'Clinics',
      //   new: false,
      //   subMenus: [
      //     {
      //       name: 'Solo Practice',
      //       route: 'doctors-clinics',
      //       panel: 'app',
      //       external: false,
      //     },
      //     {
      //       name: 'Group Practice',
      //       route: 'doctors-clinics',
      //       panel: 'group-practice',
      //       panelOffset: -70,
      //       external: false,
      //     },
      //     {
      //       name: 'Specialized Practice',
      //       route: 'doctors-clinics',
      //       panel: 'specialized-practice',
      //       panelOffset: -70,
      //       external: false,
      //     },
      //   ],
      // },
      // {
      //   name: 'Enterprise',
      //   new: false,
      //   subMenus: [
      //     {
      //       name: 'Multispecialty Clinics',
      //       route: 'enterprise',
      //       panel: 'app',
      //       external: false,
      //     },
      //     {
      //       name: 'Multi-branch Facilities',
      //       route: 'enterprise',
      //       panel: 'multibranch-facilities',
      //       panelOffset: -70,
      //       external: false,
      //     },
      //     {
      //       name: 'Corporate Clinics',
      //       route: 'enterprise',
      //       panel: 'corporate-clinics',
      //       panelOffset: -70,
      //       external: false,
      //     },
      //     {
      //       name: 'Medical Arts Centers',
      //       route: 'enterprise',
      //       panel: 'medical-arts-centers',
      //       panelOffset: -70,
      //       external: false,
      //     },
      //     {
      //       name: 'Diagnostic Centers',
      //       route: 'enterprise',
      //       panel: 'diagnostic-centers',
      //       panelOffset: -70,
      //       external: false,
      //     },
      //   ],
      // },
      {
        name: 'Pricing',
        route: 'pricing',
        new: false,
        external: false,
        comingSoon: false,
        invisible: this.countryCode === 'PH',
      },
      {
        name: 'For Patients',
        route: 'pxp',
        new: false,
        external: false,
        // comingSoon: true,
      },
      // TODO: bring back later
      // {
      //   name: 'Doctor\'s Directory',
      //   route: 'directory-doctors',
      //   new: true,
      //   external: false,
      // },
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
    /**
     * Records action btn click to Google analytics
     */
    recordActionBtn (actionBtn) {
      if (process.browser && actionBtn === 'fight-covid-19-get-started-btn') {
        window.open('https://forms.gle/y4qpv7ajERaGE5Lr7', '_blank', 'noopener, noreferrer');
      }
      if (actionBtn === 'login-btn') {
        this.$router.push({ name: 'signin' });
      }
      if (actionBtn === 'get-started-btn') {
        this.$router.push({ name: 'signup-health-facilities' });
      }
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-toolbar-${actionBtn}`,
        eventLabel: actionBtn,
      });
    },
    /**
     * Redirects the nav link to specified route or panel
     */
    onNavLinkClick (navLink) {
      // Record Google analytics
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-toolbar-${navLink.route}`,
        eventLabel: navLink.route,
      });

      if (navLink.external) {
        window.open(navLink.route, '_blank', 'noopener, noreferrer');
        return;
      }

      if (navLink.route !== this.$nuxt.$route.name) {
        this.$nuxt.$router.push({
          name: navLink.route,
          params: {
            ...navLink.panel && { panel: navLink.panel },
          },
        });
        return;
      }
      if (!navLink.panel) return;
      VueScrollTo.scrollTo(`#${navLink.panel}`, 500, {
        easing: 'ease',
        ...navLink.panelOffset && { offset: navLink.panelOffset },
      });
    },
    async getCurrentCountry () {
      const country = await getCountry();
      this.countryCode = country.country_code;
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
