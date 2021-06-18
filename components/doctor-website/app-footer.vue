<template lang="pug">
  div.footer
    v-container
      v-row(align="center" no-gutters)
        v-col(
          :class="{ 'text-center' : $isMobile }"
          cols="12"
          md="5"
        ).white--text
          div.d-flex
            p.mt-1 #[b Powered by]
            img(
              height="30"
              src="~/assets/images/mycure-footer-logo.png"
              alt="MYCURE"
              @click="$nuxt.$router.push({ name: 'index' })"
            ).ml-2
          span &copy; 2016 - {{ new Date().getFullYear() }}
          span #[br(v-if="$isMobile")] All Rights Reserved.
        v-col(v-if="$isMobile" cols="12")
          hr.mb-5
        v-spacer
        v-col
          div(:class="{'flex-column': $isMobile}").d-flex
            v-btn(
              to="/terms"
              text
              color="secondary"
            ).text-none.letter-spacing-normal Terms of Use
            span(v-if="!$isMobile").mt-1.white--text &nbsp;&nbsp;|&nbsp;&nbsp;
            v-btn(
              to="/privacy-policy"
              text
              color="secondary"
            ).text-none.letter-spacing-normal Privacy Policy
            span(v-if="!$isMobile").mt-1.white--text &nbsp;&nbsp;|&nbsp;&nbsp;
            v-btn(
              text
              color="secondary"
              @click="toggleChat"
            ).text-none.letter-spacing-normal Send us your feedback
          div(:class="{'flex-column': $isMobile}").d-flex
             v-btn(
              to="/directory/doctors"
              text
              color="secondary"
            ).text-none.letter-spacing-normal.font-weight-bold See more Doctors
             span(v-if="!$isMobile").mt-1.white--text &nbsp;&nbsp;|&nbsp;&nbsp;
             v-btn(
              href="https://doctors.mycure.md"
              text
              color="secondary"
            ).text-none.letter-spacing-normal Create my own Doctor Website
</template>

<script>
export default {
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleChat () {
      window.$crisp.push(['do', 'chat:toggle']);
    },
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  background-color: #343A40;
}
a {
  text-decoration: none !important;
}
</style>
