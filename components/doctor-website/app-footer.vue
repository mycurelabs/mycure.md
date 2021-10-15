<template lang="pug">
  v-footer(dark color="#343A40")
    v-container.my-3
      v-row(justify="center")
        generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
          v-row(align="center" no-gutters)
            v-col(
              :class="{ 'text-center' : $isMobile }"
              cols="12"
              md="5"
            ).white--text
              div(:class="{'text-center justify-center': $isMobile}").d-flex
                p.mt-1 #[b Powered by]
                img(
                  src="~/assets/images/MYCURE Logo - white.png"
                  width="120px"
                  height="34.46px"
                  alt="MYCURE logo"
                ).ml-3
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
                  href="https://airtable.com/shrgkdR8ASEdbQ1Pa"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="secondary"
                  @click="toggleChat"
                ).text-none.letter-spacing-normal Send us your feedback
              div(:class="{'flex-column': $isMobile}").d-flex
                  v-btn(
                  to="/directory/results?searchMode=account"
                  text
                  color="secondary"
                ).text-none.letter-spacing-normal.font-weight-bold See more Doctors
                  span(v-if="!$isMobile").mt-1.white--text &nbsp;&nbsp;|&nbsp;&nbsp;
                  v-btn(
                  to="/signup/health-facilities?type=doctor"
                  text
                  color="secondary"
                ).text-none.letter-spacing-normal Create my own Doctor Website
</template>

<script>
export default {
  components: {
    GenericPanel: () => import('~/components/generic/GenericPanel'),
  },
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
