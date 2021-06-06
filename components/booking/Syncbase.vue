<template lang="pug">
  v-container
    v-row(justify="center")
      generic-sub-page-panel(
        super-title="SYNCBASE TECHNOLOGY"
        title="MYCURE works online and offline"
        content="Work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud."
        content-right
      )
        template(slot="image")
           img(
              width="100%"
              src="../../assets/images/booking/mycure-syncbase-diagram-animate.gif"
              style="border-radius: 10px;"
            )
        template(slot="cta-button")
           mc-btn(
            href="https://calendly.com/mycure/demo"
            target="_blank"
            rel="noopener noreferrer"
            :class="{ 'pl-2' : $isMobile }"
            :block="$isMobile"
            depressed
            rounded
            :large="$isRegularScreen"
            :x-large="$isWideScreen"
            color="primary"
          ).text-none.font-s
            | Book a Demo
            v-icon(right) mdi-arrow-right
</template>

<script>
import GenericSubPagePanel from '~/components/generic/GenericSubPagePanel';
export default {
  components: {
    GenericSubPagePanel,
  },
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
</style>
