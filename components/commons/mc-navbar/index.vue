<template lang="pug">
  fragment
    //- MOBILE
    div(v-if="$isMobile")
      mc-cookie-prompt.cookie-prompt
      toolbar-mobile(
        :shadow="shadow"
        :loginURL="loginURL"
        :solutionsMenuItems="solutionsMenuItems"
        @toolbarLinkClick="handleToolbarLinkClick($event)"
        @subMenuClick="handleSubMenuClick($event)"
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
        @toolbarLinkClick="handleToolbarLinkClick($event)"
        @subMenuClick="handleSubMenuClick($event)"
        @logoClick="handleMycureLogo"
      )
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
      {
        name: 'For Patients',
        position: 'left',
        subMenus: [
          {
            name: 'Patient Portal',
            route: process.env.PX_PORTAL_URL,
            new: true,
            external: true,
          },
          // TODO: bring back later
          // {
          //   name: 'Doctor\'s Directory',
          //   route: 'directory-doctors',
          //   new: true,
          //   external: false,
          // },
        ],
      },
      {
        name: 'For Healthcare Professionals',
        position: 'right',
        subMenus: [
          {
            name: 'Digital Clinics',
            underSubMenus: [
              {
                name: 'Solo Practice',
                route: 'doctors-clinics',
                panel: 'app',
                new: false,
                external: false,
              },
              {
                name: 'Group Practice',
                route: 'doctors-clinics',
                panel: 'group-practice',
                new: false,
                external: false,
              },
              {
                name: 'Specialized Practice',
                route: 'doctors-clinics',
                panel: 'specialized-practice',
                new: false,
                external: false,
              },
            ],
          },
          {
            name: 'Enterprise',
            underSubMenus: [
              {
                name: 'Multispecialty Clinics',
                route: 'enterprise',
                panel: 'app',
                new: false,
                external: false,
              },
              {
                name: 'Multi-branch Facilities',
                route: 'enterprise',
                panel: 'multibranch-facilities',
                new: false,
                external: false,
              },
              {
                name: 'Corporate Clinics',
                route: 'enterprise',
                panel: 'corporate-clinics',
                new: false,
                external: false,
              },
              {
                name: 'Medical Arts Centers',
                route: 'enterprise',
                panel: 'medical-arts-centers',
                new: false,
                external: false,
              },
              {
                name: 'Diagnostic Centers',
                route: 'enterprise',
                panel: 'diagnostic-centers',
                new: false,
                external: false,
              },
            ],
          },
          {
            name: 'Features',
            route: 'features',
            new: false,
            external: false,
          },
        ],
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
        this.$nuxt.$router.push({ name: 'signup-individual' });
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
    handleSubMenuClick (item) {
      const { link, menu } = item;
      if (menu.external) {
        window.open(menu.route, '_blank', 'noopener, noreferrer');
        return;
      }
      this.handleToolbarLinkClick(link);
      if (menu.route !== this.$nuxt.$route.name) {
        this.$nuxt.$router.push({
          name: menu.route,
          params: { panel: menu.panel },
        });
        return;
      }
      const panelId = `#${menu.panel}`;
      VueScrollTo.scrollTo(panelId, 500, { easing: 'ease' });
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
