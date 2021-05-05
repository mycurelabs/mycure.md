<template lang="pug">
  v-app-bar(
    height="50"
    app
    elevate-on-scroll
    color="white"
  )
    v-container
      v-row(justify="center")
        v-col(cols="12" md="10")
          div.d-flex
            nuxt-link(to="/")
              img(
                src="~/assets/images/MYCURE-logo.png"
                width="120"
                alt="MYCURE logo"
              ).mt-1
</template>
