<template lang="pug">
  div#top
    usp.pb-5
</template>

<script>
import Usp from '~/components/our-story/usp';
import headMeta from '~/utils/head-meta';
export default {
  components: {
    Usp,
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
