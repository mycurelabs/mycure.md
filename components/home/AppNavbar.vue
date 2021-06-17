<template lang="pug">
  div
    v-app-bar(
      height="50"
      app
      dark
      elevate-on-scroll
      style="padding-top: 1px;"
    ).nav-bar
      v-container.pa-0
        v-row(justify="center")
          generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
            v-col.d-flex
              nuxt-link(to="/")
                img(
                  src="~/assets/images/MYCURE Logo - white.png"
                  width="120"
                  alt="MYCURE logo"
                ).mt-1.mr-1
              template(v-if="!$isMobile")
                v-btn(
                  v-for="(nav, key) in navs"
                  text
                  depressed
                  tile
                  large
                  :key="key"
                  @click="onNavClick(nav)"
                ).text-none.font-12
                  span.font-weight-medium {{ nav.name }}
                //- v-btn(
                //-   text
                //-   depressed
                //-   large
                //-   :to="{ name: 'pxp' }"
                //- ).text-none.mr-2.font-12 #[b For Patients]
                v-spacer
                mc-btn(
                  event-label="login"
                  text
                  depressed
                  large
                  tile
                  :to="{ name: 'signin' }"
                ).text-none.font-12 #[span.font-weight-medium LOG IN]
                signup-button(
                  color="success"
                  large
                  tile
                ).text-none.font-12.font-weight-medium SIGN UP
              template(v-else)
                v-spacer
                v-app-bar-nav-icon(@click.stop="drawer = !drawer")

    v-navigation-drawer(
      v-if="$isMobile"
      v-model="drawer"
      fixed
      right
      dark
      color="black"
      width="500"
    )
      v-toolbar(flat color="black")
        img(
          src="~/assets/images/MYCURE Logo - white.png"
          width="120"
          alt="MYCURE logo"
        )
        v-spacer
        v-btn(icon @click="drawer = false")
          v-icon mdi-close
      v-list(dense nav)
        template(v-for="nav in navs")
          v-list-item(
            dense
            link
            @click="onNavClick(nav)"
          )
            v-list-item-title {{ nav.name }}
      v-divider
      br
      v-btn(
        text
        depressed
        large
        :to="{ name: 'signin' }"
      ).text-none.mr-2 #[span.font-weight-medium LOG IN]
      v-btn(
        color="success"
        large
        shaped
        :to="{name: 'signup-health-facilities'}"
      ).text-none #[span.font-weight-medium SIGN UP]
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import GenericPanel from '~/components/generic/GenericPanel';
import SignupButton from '~/components/commons/SignupButton';
export default {
  components: {
    GenericPanel,
    SignupButton,
  },
  data () {
    this.navs = [
      {
        name: 'Doctors',
        route: 'doctors-clinics',
      },
      {
        name: 'Clinics',
        route: 'clinics',
      },
      {
        name: 'Diagnostics',
        route: 'diagnostics',
      },
      // {
      //   name: 'Hospitals',
      //   route: 'hospitals',
      // },
      // {
      //   name: 'Telehealth',
      //   route: 'telehealth',
      // },
      {
        name: 'Booking',
        route: 'booking',
      },
      // {
      //   name: 'For Patients',
      //   route: 'patients',
      // },
    ];
    return {
      drawer: false,
    };
  },
  methods: {
    onNavClick (nav) {
      if (nav.route === this.$route.name && nav.panel) {
        VueScrollTo.scrollTo(`#${nav.panel}`, 500, {
          easing: 'ease',
          ...nav.panelOffset && { offset: nav.panelOffset },
        });
        return;
      }
      this.$router.push({
        name: nav.route,
        params: {
          ...nav.panel && { panel: nav.panel },
        },
      });
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: rgba(0,0,0,0.8);
}
</style>
