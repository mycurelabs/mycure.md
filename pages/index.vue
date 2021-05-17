<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    seven-wonders
    //- 2nd panel
    care(:class="panelMargins")
    //- 3rd panel
    div.simple-container
      simple
    //- 4th panel
    patients(:class="panelMargins")
    //- 5th panel
    tools(:version="2" :class="panelMargins")
    //-6th panel
    generic-media-panel(
      :fluid="!$isMobile"
      content-align-right
      align-right-column="center"
      cols-left="5"
      cols-right="4"
      offset-cols-right="1"
      header="Internet connection won’t be a problem"
      :descriptions="['With MYCURE Syncbase, work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.']"
      :header-classes="headerClasses"
      :descriptionClasses="descriptionClasses"
      dense
    )
      template(slot="custom-left")
        video(v-if="!$isMobile" :width="wXL ? '1000' : '820'" playsinline autoplay muted loop).syncbase-animate
          source(src="~/assets/videos/mycure-syncbase-diagram-animate.webm" type="video/webm")
          source(src="~/assets/videos/mycure-syncbase-diagram-animate.mp4" type="video/mp4")
          | Your browser does not support the video tag.

    //- CTA
    div(:class="panelMargins").text-center
      picture-source(
        image="CTA"
        image-file-extension=".png"
        extension-exclusive
        custom-path="home/"
        image-alt="CTA Home"
        :image-width="!$isMobile ? '30%' : '70%'"
        :image-styles="{ marginBottom: '-7px' }"
      )
      div.cta-container
        join-next-generation
</template>

<script>
// - utils
import classBinder from '~/utils/class-binder';
import headMeta from '~/utils/head-meta';
// - components
import Care from '~/components/home/Care';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import JoinNextGeneration from '~/components/home/JoinNextGeneration';
import Patients from '~/components/home/Patients';
import PictureSource from '~/components/commons/PictureSource';
import SevenWonders from '~/components/home/SevenWonders';
import Simple from '~/components/home/Simple';
import Tools from '~/components/home/Tools';

export default {
  components: {
    Care,
    GenericMediaPanel,
    JoinNextGeneration,
    Patients,
    PictureSource,
    SevenWonders,
    Simple,
    Tools,
  },
  data () {
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE | Making Healthcare Accessible to All',
      description: 'MYCURE is a healthcare platform that connects physicians, clinics, hospitals, and medical organizations to anyone in need.',
      socialBanner: require('~/assets/images/banners/OG Homepage.png'),
    });
  },
  computed: {
    panelMargins () {
      return { 'mt-10': !this.$isWideScreen, 'mt-12': this.$isWideScreen };
    },
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'font-weight-medium',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped>
.simple-container {
  background-color: #0099cc;
}

.cta-container {
  background-color: #2b2d30;
}

.syncbase-animate {
  margin-left: -18vw;
}

@media screen and (min-width: 1920px) {
  .syncbase-animate {
    margin-left: -8vw;
  }
}
</style>
