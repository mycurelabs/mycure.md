<template lang="pug">
  v-app-bar(
      height="70"
      app
      color="transparent"
      elevate-on-scroll
    )
      v-container.pa-0
        v-row(justify="center" align="center" no-gutters)
          v-col
            nuxt-link(:to="{ name: 'index' }")
              img(src="~/assets/images/home/mycure-logo.png" width="140" alt="MYCURE logo" @click="scrollToTop")
          v-spacer
          v-btn(
            text
            depressed
          ).text-none For Providers
            v-icon mdi-chevron-down
          v-btn(
            text
            depressed
          ).text-none Support
            v-icon mdi-chevron-down
          v-btn(
            text
            depressed
          ).text-none #[b Login]
          v-btn(
            text
            depressed
            color="success"
            rounded
            outlined
          ).text-none #[b Get Started]
</template>
