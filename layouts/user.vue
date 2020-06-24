<template lang="pug">
  v-app
    template(v-if="!loading")
      div(:class="contentClasses").bg-positions.pa-3.content-padding
        nuxt
      div(:class="footerClasses").footer-bg
        v-img(:src="require(`../assets/images/sign-up-individual-step-1/mycure-final-cta-background.png`)" alt="Sign up background")
    v-row(align="center" justify="center").footer
      v-row(align="center" justify="center").text-center
        v-col(cols="12" md="6").pl-12.pr-12
          span.white--text Copyright &copy; 2016 - {{new Date().getFullYear()}} MYCURE Inc. All Rights Reserved.
        v-col(cols="12" md="6")
          a(@click.stop="goToTerms") Terms of Use
          span.white--text &nbsp;&nbsp;|&nbsp;&nbsp;
          a(@click.stop="goToPrivacy") Privacy Policy
</template>

<script>
// - utils
// import VueScrollTo from 'vue-scrollto';
import dayOrNight from '../utils/day-or-night';

export default {
  data () {
    return {
      dayOrNight: '',
      loading: true,
    };
  },
  computed: {
    page () {
      return this.$route.name;
    },
    contentClasses () {
      return [this.dayOrNight === 'night' ? 'night-sky' : 'day-bg'];
    },
    footerClasses () {
      return [this.dayOrNight === 'night' ? 'night-sky' : 'day-bg', 'fixed-footer'];
    },
  },
  mounted () {
    this.init();
  },
  methods: {
    async init () {
      this.dayOrNight = await dayOrNight();
      this.$vuetify.theme.dark = this.dayOrNight === 'night';
      this.loading = false;
    },
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
#top {
  height: 100%;
}
.day-bg {
  background-color: #fafafa;
}
.bg-positions {
  background-position: left center, right center;
}
.night-sky {
  background-color: rgb(28,28,28);
  background-color: -moz-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: -webkit-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1c191c",endColorstr="#3c3c3c",GradientType=1);
}
.fixed-footer {
  position: relative;
  bottom: 0;
}
.footer {
  background-color: #343a40 !important;
  min-height: 60px;
}
@media screen and (min-width: 1024px) {
  .footer {
    max-height: 60px;
  }
}
</style>
