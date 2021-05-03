<template lang="pug">
  div(style="background-color: #BDDBE6")
    v-container
      v-row(justify="center" no-gutters)
        v-col(cols="12" md="10")
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
              h1(:class="[{ 'text-center' : $isMobile }, ...headerClasses]").mb-2 MYCURE works online and offline
              br
              p(:class="[{ 'pl-2' : $isMobile }, ...descriptionClasses]") Work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.
              br
              mc-btn(
                href="https://calendly.com/mycure/demo"
                target="_blank"
                rel="noopener noreferrer"
                :class="{ 'pl-2' : $isMobile }"
                :block="$isMobile"
                tile
                small
                depressed
                color="primary"
              ).text-none
                | Book a Demo
                v-icon(small right) mdi-arrow-right
</template>

<script>
export default {
  props: {
    headerClasses: {
      type: Array,
      default: () => ([]),
    },
    descriptionClasses: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
</style>
