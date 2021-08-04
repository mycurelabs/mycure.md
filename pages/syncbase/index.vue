<template lang="pug">
  v-container(fluid v-if="!loading").white
    //- 1st panel
    div.mx-n3.syncbase-bg
      v-container
        v-row(justify="center")
          generic-panel
            v-col(cols="12").text-center
              p(:class="metaTitleClasses").mb-3 MYCURE Syncbase
              h1(:class="titleClasses").mb-10 The holy grail of online-offline technology
            v-col(cols="12").text-center
              iframe(
                align="middle"
                id="ytplayer"
                type="text/html" :width="!$isMobile ? '90%' : '100%'" :height="wXL? '600' : '450'"
                src="https://www.youtube.com/embed/siFBgZMt26k?autoplay=1&loop=1&rel=0&modestbranding=1&showinfo=0"
                frameborder="0"
                allowfullscreen
              )
    //- 2nd panel
    //- generic-media-panel(
    //-   :center-media="!$isMobile"
    //-   :content-align-left="$isMobile"
    //-   header="Which is best for your health facility?"
    //-   :header-classes="headerClasses"
    //-   :descriptions="['Download our comparative analysis on the different healthcare software setups.']"
    //-   :descriptionClasses="descriptionClasses"
    //-   :dense="$isMobile"
    //-   dummy
    //- )
    //- 3rd panel
    syncbase(hide-btn :version="2")
    //- 4th panel
    div.mx-n3.grey-bg
      features(
        title="Secure cloud-based software with the benefits of an on-premise system"
        title-col-size="10"
        image-dir="syncbase/"
        hide-learn-more
        :items="features"
      )
    //- 5th panel
    div.mx-n3.mb-n3.primary
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12" md="10").text-center
              h2(:class="headerClasses").mb-10.white--text See it in action. Book a demo today!
              mc-btn(
                depressed
                color="success"
                target="_blank"
                rel="noopener noreferrer"
                :large="$isRegularScreen"
                :x-large="$isWideScreen"
                :href="'https://calendly.com/mycure/demo'"
              ).font-s.text-none Book a Demo
</template>

<script>
// - utils
import classBinder from '~/utils/class-binder';
import headMeta from '~/utils/head-meta';
// - components
import Features from '~/components/commons/panels/Features';
import GenericPanel from '~/components/generic/GenericPanel';
import Syncbase from '~/components/commons/panels/Syncbase';

export default {
  components: {
    Features,
    GenericPanel,
    Syncbase,
  },
  data () {
    this.features = [
      {
        title: 'Grade A+ SSL',
        icon: 'Grade A+ SSL',
        iconExtension: '.webp',
      },
      {
        title: 'Data Encryption',
        icon: 'Data Encryption',
        iconExtension: '.webp',
      },
      {
        title: 'User Designated Access',
        icon: 'User Designated Access',
        iconExtension: '.webp',
      },
      {
        title: 'Secure Cloud Hosting',
        icon: 'Secure Cloud Hosting',
        iconExtension: '.webp',
      },
      {
        title: 'Data Privacy Standards',
        icon: 'Data Privacy standards',
        iconExtension: '.webp',
      },
    ];
    this.headerClasses = ['mc-title-set-2', 'lh-title', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-2', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE Syncbase',
      description: 'Digitally process your medical records in your local network using multiple devices, even if the internet goes down. Then once back online, it automatically synchronizes data back in the cloud. It’s like getting the best of both worlds — reliability of an on-premise server, and affordability of the cloud. Like magic, but scientifically-blended. ',
      socialBanner: require('~/assets/images/banners/OG Homepage.png'),
    });
  },
  computed: {
    // - USP Classes
    titleClasses () {
      const classes = classBinder(this, {
        mobile: ['font-l'],
        regular: ['font-xl'],
      });
      return [
        classes,
      ];
    },
    metaTitleClasses () {
      const classes = classBinder(this, {
        mobile: ['font-s'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
      return [
        'font-open-sans',
        'font-weight-bold',
        'primary--text',
        classes,
      ];
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped>
.syncbase-bg {
  width: 100vw;
  background-image: url('../../assets/images/syncbase/Syncbase BG.png');
  background-position: center center;
  background-size: 100% 100%;
}
.grey-bg {
  background-color: #fafafa;
}
</style>
