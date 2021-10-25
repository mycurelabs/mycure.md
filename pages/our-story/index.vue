<template lang="pug">
  v-container(fluid v-show="!loading")
    //- 1st panel
    usp.pb-5.mx-n3
    //- 2nd panel
    paulette(
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
    )
    //- 3rd panel
    founders(
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
    )
    //- 4th panel
    problem(:header-classes="headerClasses" :description-classes="descriptionClasses")
    //- 5th panel
    purpose(:header-classes="headerClasses" :description-classes="descriptionClasses")
    //- 6th panel
    vid(:header-classes="headerClasses" :description-classes="descriptionClasses")
    //- 7th panel
    codes-of-being(:header-classes="headerClasses" :description-classes="descriptionClasses")
    //- cta
    mc-cta-bottom(image-only)
</template>

<script>
import Usp from '~/components/our-story/usp';
import headMeta from '~/utils/head-meta';
export default {
  components: {
    Usp,
    Paulette: () => import('~/components/our-story/paulette'),
    Founders: () => import('~/components/our-story/founders'),
    Problem: () => import('~/components/our-story/problem'),
    Purpose: () => import('~/components/our-story/purpose'),
    Vid: () => import('~/components/our-story/vid'),
    CodesOfBeing: () => import('~/components/our-story/codes-of-being'),
    McCtaBottom: () => import('~/components/commons/mc-cta-bottom'),
  },
  data () {
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-3', 'font-open-sans', 'font-gray'];
    return {
      isMobile: true,
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE - Our Story | Caring the Extra Mile',
      description: 'Caring the extra mile is our mantra. MYCURE is committed to saving lives by building advanced apps for patients, physicians, and other healthcare practitioners.',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Our-Story.png?alt=media&token=de5c4443-0b36-41ee-93e6-3fac9aae0b1d',
    });
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
    this.loading = false;
  },
};
</script>
