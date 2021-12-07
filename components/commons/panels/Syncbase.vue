<template lang="pug">
  v-container
    v-row(justify="center")
      generic-sub-page-panel(
        :content-right="version !== 1"
        :title="title ? title : panelTitle"
        :title-classes="version === 3 ? headerClasses : null"
        :center-panel-title="version === 3 ? 'Enjoy the best of both worlds' : null"
        :media-column-bindings="mediaColumnBindings"
        :content-column-bindings="contentColumnBindings"
        :hide-btn="hideBtn"
      )
        div(v-if="version === 1" slot="super-title")
          p(:class="{ 'text-center' : $isMobile }").mc-h7.font-open-sans.font-weight-semibold MYCURE ONLINE & OFFLINE
        div(slot="content")
          template(v-if="version !== 2")
            p(:class="descriptionClasses") Work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.
          template(v-else)
            p(:class="descriptionClasses") With the MYCURE Syncbase, you’ll be able to work as if you have an in-house server for your practice management system – with all the conveniences of the cloud. Even if the Internet is down, you can still create electronic health records on any of your devices, and they will automatically sync once you’re back online.
        template(v-if="!hideBtn" slot="cta-button")
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
          div(v-if="version !== 3" :class="{'text-center ml-4': $isMobile}")
            nuxt-link(:to="{ name: 'syncbase' }" :class="{'d-flex': !$isMobile}").button
              span.mc-hyp1.primary--text Learn about MYCURE Syncbase
              v-icon(left color="primary" :small="!$isWideScreen" style="margin-top: 3px;") {{ mdiChevronRight }}
          div(v-else :class="{'text-center': $isMobile}")
            mc-btn(
              color="success"
              depressed
              class="rounded-pill"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
              @click="syncbaseVideoDialog = true"
            ).text-none
                v-icon(left) {{ mdiPlayCircle }}
                span.generic-button-text Watch how it works
        template(slot="image")
          div.vid-container
            video(width="101%" playsinline autoplay muted loop).syncbase-animate
                source(src="~/assets/videos/MYCURE-Syncbase animate.mp4" type="video/mp4")
                | Your browser does not support the video tag.
          //- img(
          //-   width="100%"
          //-   src="~/assets/images/booking/mycure-syncbase-diagram-animate.gif"
          //-   alt="MYCURE Syncbase"
          //- )
    //- Syncbase Video Dialog
    v-dialog(v-model="syncbaseVideoDialog" max-width="800" max-height="500")
      v-card(width="800").pt-5
        v-card-text
          a(v-if="syncbaseVideoDialog")
            iframe(
              align="middle"
              id="ytplayer"
              type="text/html" width="100%" height="500"
              src="https://www.youtube.com/embed/siFBgZMt26k?autoplay=1&loop=1&rel=0&modestbranding=1&showinfo=0"
              frameborder="0"
              allowfullscreen
            )
</template>

<script>
import { mdiPlayCircle, mdiChevronRight } from '@mdi/js';
import GenericSubPagePanel from '~/components/generic/GenericSubPagePanel';
export default {
  components: {
    GenericSubPagePanel,
  },
  props: {
    version: {
      type: Number,
      default: 1,
    },
    hideBtn: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
  },
  data () {
    this.descriptionClasses = ['mc-b2', 'font-open-sans', 'font-gray'];
    this.btnClasses = ['mc-btn1'];
    this.centerPanelTitleClasses = ['mc-h2'];
    this.headerClasses = ['mc-h2', 'primary--text'];
    return {
      syncbaseVideoDialog: false,
      mdiPlayCircle,
      mdiChevronRight,
    };
  },
  computed: {
    panelTitle () {
      switch (this.version) {
        case 2:
          return 'Enjoy the best of both worlds';
        case 3:
          return 'MYCURE works online and offline';
        default:
          return 'Internet connection won\'t be a problem';
      }
    },
    contentColumnBindings () {
      return {
        cols: 12,
        sm: 6,
        alignSelf: 'center',
      };
    },
    mediaColumnBindings () {
      return {
        cols: 12,
        sm: 6,
      };
    },
  },
};
</script>

<style scoped>
.vid-container {
  overflow: hidden;
}
.syncbase-animate {
  position: relative;
  right: 2px;
}

.syncbase-animate:focus {
  outline: none;
}
.content {
  z-index: 1 !important;
}
.button {
  text-decoration: none;
}
</style>
