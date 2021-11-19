<template lang="pug">
  v-container
    v-row(justify="center")
      generic-sub-page-panel(
        center-panel-title="Simple and powerful"
        super-title="Say goodbye to paperwork and hello to an easy, compact database."
        content="MYCURE is infused with advanced user experience that you can never compare with another medical software. Experience smooth transitions from one workflow to another — you probably won't even consider using pen and paper ever again."
        :content-column-bindings="contentColumnBindings"
        :media-column-bindings="mediaColumnBindings"
        :center-panel-title-classes="headerClasses"
        :super-title-classes="subheaderClasses"
        :content-classes="descriptionClasses"
        hide-btn
      )
        template(slot="image")
          div(:class="{'text-center': $isMobile}")
            picture-source(v-bind="imageBindings" :class="{'ml-n10': wSM }")
        v-col(slot="additional-content" cols="12").order-last
          v-row(justify="center")
            v-col(v-for="(service, key) in services" :key="key").shrink
              v-hover(
                v-slot="{ hover }"
                open-delay="100"
              )
                mc-btn(
                  depressed
                  color="white"
                  :block="$isMobile"
                  :x-large="$isWideScreen"
                  :large="!$isWideScreen"
                  :to="{ name: service.route }"
                  :outlined="!hover"
                  :class="{'white--text': !hover, 'info--text': hover}"
                ).text-none
                  v-icon(left) {{ service.icon }}
                  strong {{ service.text }}
</template>

<script>
import { mdiStethoscope, mdiHospitalMarker, mdiFlask } from '@mdi/js';
import PictureSource from '~/components/commons/PictureSource';
import GenericSubPagePanel from '~/components/generic/GenericSubPagePanel';
export default {
  components: {
    PictureSource,
    GenericSubPagePanel,
  },
  data () {
    this.services = [
      {
        text: 'For Physicians',
        route: 'doctors-clinics',
        icon: mdiStethoscope,
        color: 'primary',
      },
      {
        text: 'For Clinics',
        route: 'clinics',
        icon: mdiHospitalMarker,
        color: 'info',
      },
      {
        text: 'For Diagnostics',
        route: 'diagnostics',
        icon: mdiFlask,
        color: 'error',
      },
      // - TODO: Bring back when page is visible
      // {
      //   text: 'For Hospitals',
      //   route: 'hospitals',
      // },
    ];
    this.headerClasses = ['mc-title-set-1', 'white--text', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-4', 'white--text', 'font-open-sans'];
    this.subheaderClasses = ['mc-subheader-set-2', 'white--text', 'font-open-sans'];
    return {
      mdiStethoscope,
      mdiHospitalMarker,
      mdiFlask,
    };
  },
  computed: {
    imageBindings () {
      return {
        image: 'simple-and-powerful',
        imageFileExtension: '.webp',
        imageAlt: 'Health application in Macbook laptop',
        imageWidth: this.$vuetify.breakpoint.width > 1919 ? '750px' : (this.$isRegularScreen ? '485px' : '250px'),
        imageHeight: this.$vuetify.breakpoint.width > 1919 ? '414.68px' : (this.$isRegularScreen ? '268.18px' : '138.23px'),
        customPath: 'home/',
      };
    },
    contentColumnBindings () {
      return {
        cols: 12,
        md: 6,
        alignSelf: 'center',
      };
    },
    mediaColumnBindings () {
      return {
        cols: 12,
        md: 6,
      };
    },
  },
};
</script>

<style scoped>
.simple-container {
  background-color: #0099cc;
}

.product-btn {
  width: 175px;
}
</style>
