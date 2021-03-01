<template lang="pug">
  div(style="background-color: #BDDBE6").header-gray
    v-container
      v-row(align="center" justify="center").my-10
        v-col(cols="11" md="5")
          img(
            width="100%"
            src="../../assets/images/providers/mycure-syncbase-diagram-animate.gif"
            style="border-radius: 10px;"
          )
        v-col(cols="12" md="1")
        v-col(cols="12" md="6")
          h4(:class="{ 'text-center' : $isMobile }").primary--text SYNCBASE TECHNOLOGY
          h1(:class="{ 'text-center font-20' : $isMobile }").mb-2 MYCURE works online and offline
          p(:class="{ 'pl-2' : $isMobile }") Work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.
          a(href="/pricing" :class="{ 'pl-2' : $isMobile }") Get MYCURE Syncbase in Pro Plan #[v-icon(color="primary").ml-2 mdi-arrow-right]
</template>

<style scoped>
a {
  text-decoration: none !important;
}
</style>
