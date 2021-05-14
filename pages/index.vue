<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    seven-wonders
    care(:class="panelMargins")
    div.simple-container
      simple
    patients(:class="panelMargins")
    tools(:class="panelMargins" :version="2")

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
import headMeta from '~/utils/head-meta';
// - components
import Care from '~/components/home/Care';
import JoinNextGeneration from '~/components/home/JoinNextGeneration';
import Patients from '~/components/home/Patients';
import PictureSource from '~/components/commons/PictureSource';
import SevenWonders from '~/components/home/SevenWonders';
import Simple from '~/components/home/Simple';
import Tools from '~/components/home/Tools';

export default {
  components: {
    Care,
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
      return { 'mt-10': this.$isMobile, 'mt-12': !this.$isMobile };
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
</style>
