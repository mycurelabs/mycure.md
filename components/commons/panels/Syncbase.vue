<template lang="pug">
  v-row(justify="center")
    generic-sub-page-panel(
      title="Enjoy the best of both worlds"
      content-right
      :media-column-bindings="mediaColumnBindings"
      :content-column-bindings="contentColumnBindings"
    )
      div(slot="content")
        p(:class="descriptionClasses") MYCURE works online and offline
        p(:class="descriptionClasses") Work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.
      template(slot="cta-button")
        mc-btn(
          color="primary"
          depressed
          rounded
          :large="$isRegularScreen"
          :x-large="$isWideScreen"
          :block="$isMobile"
          :to="{ name: 'syncbase' }"
          :class="{'font-s': !$isMobile}"
        ).text-none
          v-icon(left) mdi-information-outline
          span Learn about MYCURE Syncbase
      template(slot="image")
        video(v-if="!$isMobile" :width="wXL ? '1000' : '800'" playsinline autoplay muted loop).syncbase-animate
            source(src="~/assets/videos/mycure-syncbase-diagram-animate.webm" type="video/webm")
            source(src="~/assets/videos/mycure-syncbase-diagram-animate.mp4" type="video/mp4")
            | Your browser does not support the video tag.
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericSubPagePanel from '~/components/generic/GenericSubPagePanel';
export default {
  components: {
    GenericSubPagePanel,
  },
  computed: {
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
        }),
        'lh-title',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-gray',
        'text-justify',
      ];
      return descriptionClasses;
    },
    contentColumnBindings () {
      return {
        sm: 10,
        md: 5,
        alignSelf: 'center',
        offsetMd: 1,
      };
    },
    mediaColumnBindings () {
      return {
        sm: 12,
        md: 6,
      };
    },
  },
};
</script>

<style scoped>
.syncbase-animate {
  margin-left: -16vw;
  margin-top: -5vh;
  overflow: hidden;
  z-index: 0;
}
.content {
  z-index: 1 !important;
}

@media screen and (min-width: 1920px) {
  .syncbase-animate {
    margin-left: -10vw;
  }
}
</style>
