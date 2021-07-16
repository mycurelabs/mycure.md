<template lang="pug">
  v-container
    v-row(justify="center")
      generic-sub-page-panel(
        content-right
        :title="panelTitle"
        :title-classes="version === 3 ? headerClasses : null"
        :center-panel-title="version === 3 ? 'Enjoy the best of both worlds' : null"
        :media-column-bindings="mediaColumnBindings"
        :content-column-bindings="contentColumnBindings"
        :superTitleClasses="superTitleClasses"
        :hide-btn="hideBtn"
      )
        div(v-if="version === 1" slot="super-title")
          p(:class="{ 'text-center' : $isMobile }").primary--text MYCURE ONLINE & OFFLINE
        div(slot="content")
          template(v-if="version !== 2")
            p(:class="descriptionClasses") Work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.
          template(v-else)
            p(:class="descriptionClasses") With MYCURE Syncbase, work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.
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
          div(v-if="version !== 3")
            nuxt-link(:to="{ name: 'syncbase' }" :class="{'d-flex': !$isMobile}").button
              span(:class="[{'font-14':  $isMobile}, {'font-s':  $isRegularScreen}, {'font-m':  $isWideScreen}]").primary--text Learn about MYCURE Syncbase
              v-icon(left color="primary" :large="$isWideScreen" :small="$isMobile") mdi-chevron-right
          div(v-else :class="{'text-center': $isMobile}")
            mc-btn(
              color="success"
              depressed
              rounded
              :large="!$isWideScreen"
              :x-large="$isWideScreen"
              :class="btnClasses"
              @click="syncbaseVideoDialog = true"
            ).text-none Watch how it works
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
import classBinder from '~/utils/class-binder';
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
  },
  data () {
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.btnClasses = ['mc-button-set-1'];
    this.centerPanelTitleClasses = ['mc-title-set-1', 'font-weight-semibold'];
    return {
      syncbaseVideoDialog: false,
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
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-s', 'text-center'],
          regular: ['font-m'],
          wide: ['font-xl'],
        }),
        'font-weight-semibold',
        'primary--text',
      ];
      return headerClasses;
    },
    superTitleClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
        'font-open-sans',
        'font-weight-bold',
        'primary--text',
      ];
    },
    contentColumnBindings () {
      return {
        cols: 12,
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
