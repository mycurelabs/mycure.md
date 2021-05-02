<template lang="pug">
  div(v-if="!loading")
    //- 1st panel
    usp.pb-5
    //- 2nd panel
    paulette(:isMobile="isMobile")
    //- 3rd panel
    founders(:isMobile="isMobile")
    //- 4th panel
    problem(:isMobile="isMobile")
    //- 5th panel
    purpose(:isMobile="isMobile")
    //- 6th panel
    vid(:isMobile="isMobile")
    //- 7th panel
    codes-of-being(:isMobile="isMobile")
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
    return {
      isMobile: true,
      loading: true,
    };
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
  head () {
    return headMeta({
      title: 'MYCURE - Our Story | Caring the Extra Mile',
      description: 'Caring the extra mile is our mantra. MYCURE is committed to saving lives by building advanced apps for patients, physicians, and other healthcare practitioners.',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Our-Story.png?alt=media&token=de5c4443-0b36-41ee-93e6-3fac9aae0b1d',
    });
  },
};
</script>
