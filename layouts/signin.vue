<template lang="pug">
  v-app#app
    v-row(align="end" justify="center" :class="[contentClasses]").footer-bg
      v-col(:class="[contentClasses, footerClasses]").footer-bg.pb-16
        nuxt
    v-footer.pa-0
      v-col
        v-row(align="center" justify="center" height="70px").footer
          v-col(cols="12").mt-2.text-center
            span.white--text Don't have MYCURE yet?
            nuxt-link(v-if="!routeContext" :to="{ name: 'signup-health-facilities'}").router-link.primary--text &nbsp;&nbsp;Get your account here.
            a(v-else :href="redirectSignUpLink").router-link.primary--text &nbsp;&nbsp;Get your account here.
            v-divider(dark).mt-5.edge-divider
        v-row(align="center" justify="center" height="70px" ).text-center.footer
          v-col(cols="12" md="6").pl-12.pr-12
            span.white--text Copyright &copy; 2016 - {{new Date().getFullYear()}} MYCURE Inc. All Rights Reserved.
          v-col(cols="12" md="6" :class="footerPaddingClasses")
            a(@click.stop="goToTerms") Terms of Use
            span.white--text &nbsp;&nbsp;|&nbsp;&nbsp;
            a(@click.stop="goToPrivacy") Privacy Policy
  </template>

<script>
import dayOrNight from '../utils/day-or-night';
export default {
  data () {
    return {
      dayOrNight: '',
    };
  },
  computed: {
    contentClasses () {
      return [this.dayOrNight === 'night' ? 'night-sky' : 'white'];
    },
    footerClasses () {
      return [
        this.dayOrNight === 'night' ? 'night-sky' : 'white',
        this.dayOrNight === 'night' ? 'night-bg' : 'day-bg',
      ];
    },
    footerPaddingClasses () {
      return [this.$isMobile ? 'pb-6' : ''];
    },
    routeContext () {
      return this.$route.query.context || '';
    },
    redirectSignUpLink () {
      switch (this.routeContext) {
        case 'pxp':
          return process.env.PX_PORTAL_URL;
        default:
          return this.$nuxt.$router.resolve({
            name: 'signup-health-facilities',
          }).href;
      }
    },
  },
  mounted () {
    this.dayOrNight = dayOrNight();
    this.$vuetify.theme.dark = this.dayOrNight === 'night';
  },
  methods: {
    goToTerms () {
      const routeData = this.$nuxt.$router.resolve({ name: 'terms' });
      const changeRoute = window.open(routeData.href, '_blank');
      changeRoute.opener = null;
      changeRoute.rel = 'noopener noreferrer';
    },
    goToPrivacy () {
      const routeData = this.$nuxt.$router.resolve({ name: 'privacy-policy' });
      const changeRoute = window.open(routeData.href, '_blank');
      changeRoute.opener = null;
      changeRoute.rel = 'noopener noreferrer';
    },
  },
};
</script>

<style scoped>
.footer-bg {
  background-repeat: repeat-x;
  background-position: bottom center;
}
.day-bg {
  background-image: url('../assets/images/sign-in/mycure-final-cta-background.png');
  background-size: auto 18%;
}
.night-bg {
  background-image: url('../assets/images/mycure-onboarding-background-dark-mode.png');
  background-size: auto 18%;
}
.night-sky {
  background-color: rgb(28, 28, 28);
  background-color: -moz-linear-gradient(
    180deg,
    rgba(28, 28, 28, 1) 0%,
    rgba(60, 60, 60, 1) 50%
  );
  background-color: -webkit-linear-gradient(
    180deg,
    rgba(28, 28, 28, 1) 0%,
    rgba(60, 60, 60, 1) 50%
  );
  background-color: linear-gradient(
    180deg,
    rgba(28, 28, 28, 1) 0%,
    rgba(60, 60, 60, 1) 50%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1c191c",endColorstr="#3c3c3c",GradientType=1);
}
.footer {
  background-color: #343a40 !important;
}
.router-link {
  text-decoration: none;
}
.edge-divider {
  margin-right: 11% !important;
  margin-left: 11% !important;
}
@media screen and (min-width: 768px) {
  .footer-bg {
    padding-bottom: unset;
  }
}
</style>
