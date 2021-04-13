<template lang="pug">
  v-footer(
    color="white"
    height="auto"
    :absolute="absolute"
  )
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
            v-btn(
              to="/privacy-policy"
              text
            ).text-none.letter-spacing-normal Privacy Policy
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
  background-color: #343a40 !important;
  bottom: 0;
  position: absolute;
  width: 100%;
}
a {
  text-decoration: none !important;
}
</style>
