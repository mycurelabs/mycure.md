<template lang="pug">
  v-container
    v-row(justify="center")
      generic-sub-page-panel(
        :title="panelTitle"
        content-right
        :media-column-bindings="mediaColumnBindings"
        :content-column-bindings="contentColumnBindings"
      )
        div(slot="content")
          template(v-if="!versionTwo")
            p(:class="descriptionClasses") MYCURE works online and offline
            p(:class="descriptionClasses") Work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.
          template(v-else)
            p(:class="descriptionClasses") With MYCURE Syncbase, work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.
        template(slot="cta-button")
          //- mc-btn(
          //-   color="primary"
          //-   depressed
          //-   text
          //-   :large="$isRegularScreen"
          //-   :x-large="$isWideScreen"
          //-   :block="$isMobile"
          //-   :to="{ name: 'syncbase' }"
          //-   :class="{'font-s': !$isMobile}"
          //- ).text-none.button
          div(:class="{'text-center': $isMobile}")
            nuxt-link(:to="{ name: 'syncbase' }" :class="{'d-flex': !$isMobile}").button
              span(:class="descriptionClasses").primary--text Learn about MYCURE Syncbase
              v-icon(left color="primary" :large="$isWideScreen") mdi-chevron-right
        template(slot="image")
          //- video(:width="wXL ? '800' : '400'" playsinline autoplay muted loop).syncbase-animate
          //-     source(src="~/assets/videos/Syncbase.mp4" type="video/mp4")
          //-     | Your browser does not support the video tag.
          img(
            width="100%"
            src="~/assets/images/booking/mycure-syncbase-diagram-animate.gif"
            alt="MYCURE Syncbase"
          )
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericSubPagePanel from '~/components/generic/GenericSubPagePanel';
export default {
  components: {
    GenericSubPagePanel,
  },
  props: {
    versionTwo: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    panelTitle () {
      return this.versionTwo ? 'Internet connection won\'t be a problem' : 'Enjoy the best of both worlds';
    },
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'lh-title',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
    contentColumnBindings () {
      return {
        cols: 10,
        md: 6,
        xl: 5,
        alignSelf: 'center',
        offsetMd: 1,
      };
    },
    mediaColumnBindings () {
      return {
        cols: 12,
        md: 5,
        xl: 6,
      };
    },
  },
};
</script>

<style scoped>
.syncbase-animate {
  overflow: hidden;
  z-index: 0;
}
.content {
  z-index: 1 !important;
}
.button {
  text-decoration: none;
}
</style>
