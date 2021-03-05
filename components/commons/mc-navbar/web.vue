<template lang="pug">
  fragment
    //- mc-covid-banner
    mc-cookie-prompt
    v-app-bar(
      height="70"
      app
      :color="appBarColor"
      elevate-on-scroll
    )
      v-container.pa-0
        v-row(justify="center" align="center" no-gutters)
          v-col(cols="12")
            v-toolbar(flat :color="appBarColor")
              nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo" @click.stop="handleMycureLogo").mr-3.mt-2
                img(src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg" width="140" alt="MYCURE logo" @click="scrollToTop")
              v-spacer
              template(v-for="(item, key) in solutionsMenuItems")
                v-btn(v-if="!item.subMenus && !item.invisible" text @click="onNavLinkClick(item)")
                  span.font-14.tab.text-none {{item.name}}
                  span(v-if="item.new").ml-2.px-1.white--text.red.font-weight-bold.font-14.pill NEW
                  span(v-if="item.comingSoon").ml-2.px-1.white--text.btn-yellow.font-weight-bold.font-12.pill.text-none Coming Soon!
                v-menu(offset-y v-if="item.subMenus && !item.invisible").solutions-menu
                  template(v-slot:activator="{ on }")
                    v-btn(
                      text
                      v-on="on"
                    )
                      span.font-14.tab.text-none {{item.name}}
                      v-icon(small) mdi-chevron-down
                  v-card
                    v-list
                      template(v-for="(subMenu, key) in item.subMenus")
                        v-list-item(
                          link
                          dense
                          @click="onNavLinkClick(subMenu)"
                        )
                          span {{ subMenu.name }}
              v-btn(
                text
                :to="{ name: loginURL }"
                id="login-btn"
                @click.stop="onActionBtnClick('login-btn')"
              ).mr-2.ml-1
                span.font-14.tab.text-none.font-weight-bold &nbsp;Log In
              v-btn(
                v-if="currentRoute === 'doctors-clinics'"
                color="accent"
                :to="currentRoute === 'doctors-clinics' ? { name: 'signup-individual' } : { name: 'signup-multispecialty-step-1' }"
                id="start-free-btn"
                @click.stop="onActionBtnClick('start-free-btn')"
              )
                strong.font-14.white--text.tab.text-none Request an Invite
              v-btn(
                width="130"
                v-else-if="currentRoute === 'enterprise'"
                color="accent"
                href="https://calendly.com/mycure/demo"
                id="enterprise-book-demo-btn"
                @click.stop="onActionBtnClick('enterprise-book-demo-btn')"
              )
                strong.font-14.white--text.tab.text-none Book a Demo
              v-btn(
                v-else-if="currentRoute === 'specialized-clinics'"
                color="accent"
                :to="{ name: 'signup-specialized' }"
                id="specialized-signup-btn"
                @click.stop="onActionBtnClick('specialized-signup-btn')"
              )
                strong.font-14.white--text.tab.text-none Start 14-Day Trial
              v-btn(
                width="130"
                v-else-if="currentRoute === 'fight-covid-19'"
                color="accent"
                id="fight-covid-19-get-started-btn"
                @click.stop="onActionBtnClick('fight-covid-19-get-started-btn')"
              )
                strong.font-14.white--text.tab.text-none Get Started
              v-btn(
                v-else
                color="accent"
                id="get-started-btn"
                rounded
                @click.stop="onActionBtnClick('get-started-btn')"
              )
                strong.font-14.white--text.tab.text-none Get Started Free
</template>

<script>
import McCookiePrompt from '~/components/commons/mc-cookie-prompt';
import McCovidBanner from '~/components/commons/mc-covid-banner';
export default {
  components: {
    McCookiePrompt,
    McCovidBanner,
  },
  props: {
    solutionsMenuItems: {
      type: Array,
      default: () => ([]),
    },
    loginURL: {
      type: String,
      default: 'signin',
    },
    shadow: {
      type: String,
      default: '',
    },
    scrollPosition: {
      type: Number,
      default: 0,
    },
  },
  data () {
    this.loginIcon = 'login-icon';
    return {
      patientSubMenuOpen: false,
      professionalSubMenuOpen: false,
      solutionsMenuModel: false,
    };
  },
  computed: {
    currentRoute () {
      return this.$nuxt.$route.name;
    },
    appBarColor () {
      if (!this.scrollPosition) {
        return 'transparent';
      }
      return this.scrollPosition === 0
        ? 'transparent'
        : 'white';
    },
  },
  methods: {
    onActionBtnClick (actionBtn) {
      this.$emit('actionBtnClick', actionBtn);
    },
    handleMycureLogo () {
      this.$emit('logoClick');
    },
    onNavLinkClick (navLink) {
      this.$emit('navLinkClick', navLink);
    },
    scrollToTop () {
      if (this.$nuxt.$route.name === 'index') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
.pill {
  border-radius: 10px;
}
a {
  text-decoration: none
}
.banner-description{
  color: white;
  letter-spacing: 1px;
}
.emphasis-impact {
  font-weight: bold;
  text-decoration: underline;
}
.toolbarHeight {
  height: 70px !important;
}
.tab {
  letter-spacing: 0.5px;
}
.solutions-menu {
  z-index: 250;
}
.btn-yellow {
  background-color: #E7C13A !important;
;
}
</style>
