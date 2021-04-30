<template lang="pug">
  div
    v-app-bar(
      height="50"
      app
      dark
      elevate-on-scroll
    ).nav-bar
      v-container
        v-row(justify="center")
          v-col(cols="12" md="10")
            div.d-flex
              nuxt-link(to="/")
                img(
                  src="~/assets/images/MYCURE Logo - white.png"
                  width="120"
                  alt="MYCURE logo"
                ).mt-1
              template(v-if="!$isMobile")
                v-btn(
                  v-for="(nav, key) in navs"
                  :key="key"
                  text
                  depressed
                  large
                  @click="onNavClick(nav)"
                ).text-none.font-12
                  b {{ nav.name }}
                //- v-btn(
                //-   text
                //-   depressed
                //-   large
                //-   :to="{ name: 'pxp' }"
                //- ).text-none.mr-2.font-12 #[b For Patients]
                v-spacer
                mc-btn(
                  text
                  depressed
                  large
                  event-label="login"
                  :to="{ name: 'signin' }"
                ).text-none.mr-2.font-12 #[b LOG IN]
                mc-btn(
                  color="success"
                  large
                  tile
                  event-label="signup"
                  :to="{name: 'signup-health-facilities'}"
                ).text-none.font-12.font-weight-bold #[b SIGN UP]
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
      ).text-none.mr-2 #[b LOG IN]
      v-btn(
        color="success"
        large
        shaped
        :to="{name: 'signup-health-facilities'}"
      ).text-none #[b SIGN UP]
        //- v-menu(
        //-   v-else
        //-   bottom
        //-   left
        //-   large
        //- )
        //-   template(v-slot:activator="{ on, attrs }")
        //-     v-btn(icon v-bind="attrs" v-on="on")
        //-       v-icon mdi-menu
        //-   v-list(style="width: 250px")
        //-     v-list-item
        //-       v-btn(
        //-         text
        //-         block
        //-         href="/"
        //-       ) For Providers
        //-     //- v-list-item
        //-       //- v-btn(text block) Support
        //-     v-list-item
        //-       v-btn(
        //-         text
        //-         block
        //-       ) Get Started Free
</template>

<script>
import VueScrollTo from 'vue-scrollto';
export default {
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
      {
        name: 'Scheduling',
        route: 'pxp',
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
