<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    seven-wonders
    //- 2nd panel
    care
    //- 3rd panel
    div.simple-container.mx-n3
      simple
    //- 4th panel
    patients
    //- 5th panel
    div.grey-bg.mx-n3
      tools(:version="2")
    //-6th panel
    syncbase
    //- CTA
    div.text-center
      picture-source(
        image="CTA"
        image-file-extension=".png"
        extension-exclusive
        custom-path="home/"
        image-alt="CTA Home"
        :image-width="!$isMobile ? '30%' : '70%'"
        :image-styles="{ marginBottom: '5px' }"
      )
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
import Syncbase from '~/components/commons/panels/Syncbase';
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
    Syncbase,
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

.divider {
  margin-right: 30% !important;
  margin-left: 30% !important;
}
.grey-bg {
  background-color: #fafafa;
}
</style>
