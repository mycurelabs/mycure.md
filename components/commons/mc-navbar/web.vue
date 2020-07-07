<template lang="pug">
  fragment
    //- mc-covid-banner
    mc-cookie-prompt
    v-app-bar(app fixed flat height="70" :color="appBarColor" :class="[shadow]")
      v-container
        v-row(justify="center")
          v-col(cols="12" md="12").toolbarMargin
            v-toolbar(flat :color="appBarColor")
              nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo" @click.stop="handleMycureLogo").mr-3.mt-2
                img(src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg" width="140" alt="MYCURE logo")
              v-spacer
              template(v-for="(item, key) in solutionsMenuItems")
                v-menu(
                  offset-y
                  :left="item.position === 'left'"
                  :right="item.position === 'right'"
                  :nudge-right="item.position === 'right' ? '50': '0'"
                  :value="item.position === 'right' ? professionalSubMenuOpen : patientSubMenuOpen"
                  :max-width="item.position === 'right' ? '210' : '250'"
                ).solutions-menu
                  template(v-slot:activator="{ on }")
                    v-btn(
                      text
                      v-on="on"
                      @click="handleSubMenuOpen(item)"
                    ).mx-1
                      span.font-14.tab.text-none {{item.name}}
                      v-icon(small) mdi-chevron-down
                  v-card
                    v-list
                      template(v-for="(subMenu, key) in item.subMenus")
                        template(v-if="subMenu.underSubMenus === undefined")
                          v-list-item(
                            link
                            dense
                            @click="handleSubMenuClick(item, subMenu)"
                          )
                            span {{ subMenu.name }}
                            span(v-show="subMenu.new").ml-2.px-1.white--text.red.font-weight-bold.font-14.pill NEW
                        template(v-else)
                          v-menu(offset-x)
                            template(slot="activator" slot-scope="props")
                              v-btn(
                                text
                                v-on="props.on"
                                width="100%"
                              ).font-16.d-block.d-flex.justify-space-between
                                span.tab.text-none {{subMenu.name}}
                                v-icon(small) mdi-chevron-right
                            v-card
                              v-list
                                template(v-for="(underSubMenu, key) in subMenu.underSubMenus")
                                  v-list-item(
                                    link
                                    dense
                                    @click="handleSubMenuClick(subMenu, underSubMenu)"
                                  ).px-4 {{ underSubMenu.name }}
              v-btn(
                text
                :to="{ name: loginURL }"
                id="login-btn"
                @click.stop="handleToolbarLinkClick('login-btn')"
              ).mr-2.ml-1
                span.font-14.tab.text-none.font-weight-bold &nbsp;Login
              v-btn(
                width="130"
                v-if="currentRoute === 'doctors-clinics'"
                color="accent"
                :to="currentRoute === 'doctors-clinics' ? { name: 'signup-individual' } : { name: 'signup-multispecialty' }"
                id="start-free-btn"
                @click.stop="handleToolbarLinkClick('start-free-btn')"
              )
                strong.font-14.white--text.tab.text-none Get Started
              v-btn(
                width="130"
                v-else-if="currentRoute === 'enterprise'"
                color="accent"
                :to="{ name: 'signup-multispecialty' }"
                id="enterprise-book-demo-btn"
                @click.stop="handleToolbarLinkClick('enterprise-book-demo-btn')"
              )
                strong.font-14.white--text.tab.text-none Book A Demo
              v-btn(
                v-else-if="currentRoute === 'specialized-clinics'"
                color="accent"
                :to="{ name: 'signup-specialized' }"
                id="specialized-signup-btn"
                @click.stop="handleToolbarLinkClick('specialized-signup-btn')"
              )
                strong.font-14.white--text.tab.text-none Start 14-Day Trial
              v-btn(
                width="130"
                v-else-if="currentRoute === 'fight-covid-19'"
                color="accent"
                id="fight-covid-19-get-started-btn"
                @click.stop="handleToolbarLinkClick('fight-covid-19-get-started-btn')"
              )
                strong.font-14.white--text.tab.text-none Get Started
              v-btn(
                v-else
                width="130"
                color="accent"
                id="get-started-btn"
                @click.stop="handleToolbarLinkClick('get-started-btn')"
              )
                strong.font-14.white--text.tab.text-none Get Started
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
    handleDisableSubMenus () {
      this.patientSubMenuOpen = false;
      this.professionalSubMenuOpen = false;
    },
    handleToolbarLinkClick (link) {
      this.professionalSubMenuOpen = false;
      this.$emit('toolbarLinkClick', link);
    },
    handleMycureLogo () {
      this.professionalSubMenuOpen = false;
      this.$emit('logoClick');
    },
    handleSubMenuClick (link, menu) {
      this.professionalSubMenuOpen = false;
      this.$emit('subMenuClick', { link, menu });
    },
    handleSubMenuOpen (item) {
      if (item.position === 'right') {
        this.professionalSubMenuOpen = true;
        this.patientSubMenuOpen = false;
      } else {
        this.professionalSubMenuOpen = false;
        this.patientSubMenuOpen = true;
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
.toolbarMargin{
  margin-top: 3px;
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
</style>
