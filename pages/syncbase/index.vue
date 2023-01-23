<template lang="pug">
  v-container(fluid).white.page-container
    //- 1st panel
    div(:class="$isMobile? 'syncbase-bg-mobile' : 'syncbase-bg'").mx-n3
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
    div.mx-n3.grey-bg
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-row(justify="center")
              story-brand(
                title="The more cost-effective setup for your clinic management system"
                :content="storybrandContent"
              )
    //- 3rd panel
    div.mx-n3.grey-bg
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-row(justify="center")
              v-col(cols="12" md="6" :class="{'text-center': !$isMobile}").mb-4
                v-row(justify="center")
                  h2.mc-h2.mb-6 Work Online or Offline: Enjoy the best of both worlds
                  p.mc-b2 Even if the internet is down, you can still create electronic health records on any of your devices, and they will automatically sync once you’re back online. Using MYCURE syncbase is like getting the best of both worlds — reliability of an on-premise server, and affordability of the cloud. Like magic, but scientifically-blended.
                v-row(justify="center")
                  h2.mc-h2.mb-6 Built to scale
                  p.mc-b2 Whether your health facility has one or many branches, MYCURE Syncbase can be installed in any or all of the locations. Data can be consolidated once the health facility branch reconnects to the internet to sync the data back to the cloud.
              v-col(cols="12" md="6" :class="{'text-center': !$isMobile}").mb-4
                div.vid-container
                  video(width="101%" playsinline autoplay muted loop).syncbase-animate
                      source(src="~/assets/videos/MYCURE-Syncbase animate.mp4" type="video/mp4")
                      | Your browser does not support the video tag.
    //- 4th panel
    div.mx-n3.grey-bg
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-row(justify="center")
              v-col(cols="12" md="10" :class="{'text-center': !$isMobile}").mb-4
                h2.mc-h2.mb-6 Data privacy and security is our #1 priority.
                p.mc-b2 MYCURE is built with data security at its core. We strive to ensure that the medical records created through our clinic management system pass international data privacy and security standards for you and your patients’ protection.
                features(
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
              v-row(justify="center")
                h2(:class="headerClasses").mb-10.white--text See it in action. Book a demo today!
                p Watch how fast you and your staff can encode medical records with MYCURE Syncbase. Learn with one of our product specialists what can be the best setup for your clinic.
                mc-btn(
                  color="success"
                  target="_blank"
                  rel="noopener noreferrer"
                  width="228px"
                  height="59px"
                  rounded
                  depressed
                  :href="'https://calendly.com/mycure/demo'"
                ).text-none
                  span.generic-button-text Pick a Schedule
</template>

<script>
// - utils
import classBinder from '~/utils/class-binder';
import headMeta from '~/utils/head-meta';
// - components
import Features from '~/components/commons/panels/Features';
import GenericPanel from '~/components/generic/GenericPanel';
import StoryBrand from '~/components/commons/panels/Storybrand';

export default {
  components: {
    Features,
    GenericPanel,
    StoryBrand,
  },
  data () {
    this.storybrandContent = [
      'Setting up a health information system is a major investment for healthcare facilities like clinics and hospitals. Majority of the cost is spent on hardware and network infrastructure, especially for legacy desktop-based applications that require on-premise servers to run the program onsite.',
      'With new technology coming in and more affordable web-based applications being offered, the options for healthcare facilities are becoming more diverse. The problem with web-based applications is that it’s inaccessible if there is little to no internet connection available.',
      'With the MYCURE Syncbase, you’ll be able to work as if you have an on-premise server for your practice management system – with all the conveniences of the cloud. ',
    ];
    this.features = [
      {
        title: 'Grade A+ SSL',
        icon: 'Grade-A-Plus-SSL',
        iconExtension: '.webp',
      },
      {
        title: 'Data-Encryption',
        icon: 'Data-Encryption',
        iconExtension: '.webp',
      },
      {
        title: 'User Designated Access',
        icon: 'User-Designated-Access',
        iconExtension: '.webp',
      },
      {
        title: 'Secure Cloud Hosting',
        icon: 'Secure-Cloud-Hosting',
        iconExtension: '.webp',
      },
      {
        title: 'Data Privacy Standards',
        icon: 'Data-Privacy-standards',
        iconExtension: '.webp',
      },
    ];
    this.headerClasses = ['mc-title-set-2', 'lh-title', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-2', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
      syncbaseVideoDialog: false,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE Syncbase online-offline technology',
      description: 'Digitally process your medical records in your local network using multiple devices, even if the internet goes down. Then once back online, it automatically synchronizes data back in the cloud. It’s like getting the best of both worlds — reliability of an on-premise server, and affordability of the cloud. Like magic, but scientifically-blended.',
      socialBanner: require('~/assets/images/banners/homepage-og-banner.png'),
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
  created () {
    this.loading = false;
  },
};
</script>

<style scoped>
.syncbase-bg {
  background-image: url('../../assets/images/syncbase/Syncbase-BG.png');
  background-position: center center;
  background-size: 100%;
}
.syncbase-bg-mobile {
  background-image: url('../../assets/images/syncbase/Syncbase-BG.png');
  background-position: center bottom;
}
.grey-bg {
  background-color: #F9FEFF;
}
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
</style>
