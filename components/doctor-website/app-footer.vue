<template lang="pug">
  div.footer.white
    v-container
      v-row(align="center" no-gutters)
        v-col(
          :class="{ 'text-center' : $isMobile }"
          cols="12"
          md="5"
        )
          div.d-flex
            p.mt-1 #[b Powered by]
            img(
              height="30"
              src="~/assets/images/MYCURE-logo.png"
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
            ).text-none.letter-spacing-normal Terms of Use
            span(v-if="!$isMobile").mt-1 &nbsp;&nbsp;|&nbsp;&nbsp;
            v-btn(
              to="/privacy-policy"
              text
            ).text-none.letter-spacing-normal Privacy Policy
            span(v-if="!$isMobile").mt-1 &nbsp;&nbsp;|&nbsp;&nbsp;
            v-btn(
              text
              @click="toggleChat"
            ).text-none.letter-spacing-normal Send us your feedback
          div(:class="{'flex-column': $isMobile}").d-flex
             v-btn(
              to="/directory/doctors"
              text
              color="primary"
            ).text-none.letter-spacing-normal.font-weight-bold See more Doctors
             span(v-if="!$isMobile").mt-1.primary--text &nbsp;&nbsp;|&nbsp;&nbsp;
             v-btn(
              href="https://doctors.mycure.md"
              text
              color="primary"
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
}
a {
  text-decoration: none !important;
}
</style>
