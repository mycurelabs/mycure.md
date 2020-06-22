<template lang="pug">
  fragment
    //- mc-covid-banner
    v-app-bar(app fixed flat height="70" :color="appBarColor" :class="[shadow]")
      v-container
        v-row(justify="center")
          v-col(cols="12" md="12").toolbarMargin
            v-toolbar(flat :color="appBarColor")
              nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo" @click.stop="handleMycureLogo").mr-3.mt-2
                img(src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg" width="140" alt="MYCURE logo")
              v-spacer
              template(v-for="(item, key) in solutionsMenuItems")
                v-menu(offset-y).solutions-menu
                  template(slot="activator" slot-scope="props")
                    v-btn(
                      text
                      v-on="props.on"
                    ).mx-1
                      span.font-14.tab.text-none {{item.name}}
                      v-icon(small) mdi-chevron-down
                  v-card
                    v-list
                      template(v-for="(menu, index) in item.subMenus")
                        v-list-item(
                          link
                          dense
                          @click="handleSubMenuClick(item, menu)"
                        ).pl-7 {{ menu.name }}
                        v-divider(v-if="key === 1 && index === 0").pb-5.edge-divider
              div(v-for="(link, key) in toolbarLinks" :key="key")
                v-btn(
                  :to="{ name: link.route }"
                  :id="link.id"
                  :text="link.text"
                  :color="link.color"
                  depressed
                  @click.stop="handleToolbarLinkClick(link.id)"
                ).mx-1
                  u(v-if="key === 1").font-14.tab.text-none {{link.name}}
                  span(v-else).font-14.tab.text-none {{link.name}}
              v-btn(
                text
                :to="{ name: loginURL }"
                id="login-btn"
                @click.stop="handleToolbarLinkClick('login-btn')"
              ).mr-2.ml-1
                span.font-14.tab.text-none &nbsp;Login
              v-btn(
                width="130"
                v-if="currentRoute === 'doctors-clinics'"
                color="#98be58"
                :to="currentRoute === 'doctors-clinics' ? { name: 'signup-individual' } : { name: 'signup-multispecialty' }"
                id="start-free-btn"
                @click.stop="handleToolbarLinkClick('start-free-btn')"
              )
                strong.font-14.white--text.tab.text-none Get Started
              v-btn(
                width="130"
                v-else-if="currentRoute === 'enterprise'"
                color="#98be58"
                :to="{ name: 'signup-multispecialty' }"
                id="enterprise-book-demo-btn"
                @click.stop="handleToolbarLinkClick('enterprise-book-demo-btn')"
              )
                strong.font-14.white--text.tab.text-none Book A Demo
              v-btn(
                v-else-if="currentRoute === 'specialized-clinics'"
                color="#98be58"
                :to="{ name: 'signup-specialized' }"
                id="specialized-signup-btn"
                @click.stop="handleToolbarLinkClick('specialized-signup-btn')"
              )
                strong.font-14.white--text.tab.text-none Start 14-Day Trial
              v-btn(
                width="130"
                v-else-if="currentRoute === 'fight-covid-19'"
                color="#98be58"
                id="fight-covid-19-get-started-btn"
                @click.stop="handleToolbarLinkClick('fight-covid-19-get-started-btn')"
              )
                strong.font-14.white--text.tab.text-none Get Started
              v-btn(
                v-else
                width="130"
                color="#98be58"
                id="get-started-btn"
                @click.stop="handleToolbarLinkClick('get-started-btn')"
              )
                strong.font-14.white--text.tab.text-none Get Started
</template>

<script>
import McCovidBanner from '~/components/commons/mc-covid-banner';
export default {
  components: {
    McCovidBanner,
  },
  props: {
    solutionsMenuItems: {
      type: Array,
      default: () => ([]),
    },
    toolbarLinks: {
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
    handleToolbarLinkClick (link) {
      this.$emit('toolbarLinkClick', link);
    },
    handleMycureLogo () {
      this.$emit('logoClick');
    },
    handleSubMenuClick (link, menu) {
      this.$emit('subMenuClick', { link, menu });
    },
  },
};
</script>

<style scoped>
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
