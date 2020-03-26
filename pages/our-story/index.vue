<template lang="pug">
  div#top
    //- 1st panel
    usp.pb-5
    //- 2nd panel
    paulette
    //- 3rd panel
    founders
    //- 4th panel
    problem
    //- 5th panel
    purpose
    //- 6th panel
    vid
    //- 7th panel
    codes-of-being
    //- cta
    mc-cta-bottom(image-only)
</template>

<script>
import Usp from '~/components/our-story/usp';
import Paulette from '~/components/our-story/paulette';
import Founders from '~/components/our-story/founders';
import Problem from '~/components/our-story/problem';
import Purpose from '~/components/our-story/purpose';
import Vid from '~/components/our-story/vid';
import CodesOfBeing from '~/components/our-story/codes-of-being';
import McCtaBottom from '~/components/commons/mc-cta-bottom';
import headMeta from '~/utils/head-meta';
export default {
  components: {
    Usp,
    Paulette,
    Founders,
    Problem,
    Purpose,
    Vid,
    CodesOfBeing,
    McCtaBottom,
  },
  head () {
    return headMeta({
      title: 'Our Story | Caring the Extra Mile',
      description: 'Caring the extra mile is our mantra. MYCURE is committed to saving lives by building advanced apps for patients, physicians, and other healthcare practitioners.',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Our-Story.png?alt=media&token=de5c4443-0b36-41ee-93e6-3fac9aae0b1d',
    });
  },
};
</script>
