<template lang="pug">
  v-footer(
    color="#343a40"
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
          span.call-number.white--text Copyright &copy; 2016 - {{ new Date().getFullYear() }}
            a(href="https://mycure.md" rel="noopener noreferrer")
              strong.primary--text &nbsp;MYCURE Inc.&nbsp;
          span.call-number.white--text #[br(v-if="$isMobile")] All Rights Reserved.
        v-col(v-if="$isMobile" cols="12")
          hr.mb-5
        v-spacer
        v-col
        v-btn(
          to="/terms"
          color="white"
          text
          :block="$isMobile"
        ).text-none.font-16.letter-spacing-normal Terms of Use
        v-btn(
          to="/privacy-policy"
          color="white"
          text
          :block="$isMobile"

        ).text-none.font-16.letter-spacing-normal Privacy Policy
        v-btn(
          color="white"
          text
          :block="$isMobile"
          @click="toggleChat"
        ).text-none.font-16.letter-spacing-normal Send us your feedback
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
