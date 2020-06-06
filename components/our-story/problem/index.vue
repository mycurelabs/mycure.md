<template lang="pug">
  div.white.my-10
    v-container
      v-row
        v-col(cols="12")
          v-row(justify="center").pt-5
            v-col(cols="11" md="8" offset-md="4").px-4.pb-4
              h1(:class="{'text-center': isMobile}").font-36 The Problem We Are Trying To Solve
            v-col(cols="11" md="4" align="center").px-4
              img(width="100%" v-lazy="require('~/assets/images/our-story/mycure-our-story-solving-problems-clinic-image.png')" alt="Our Story - Problem")
            v-col(cols="11" md="8").px-4.font-21
              p Medical record systems are highly fragmented, disorganized, and non-collaborative even in some developed countries. Many are still using legacy platforms and are not employing the latest available technologies. Some are exclusive and are not interoperable with other systems.
              p Thus health professionals are unable to optimize patient healthcare. In the same manner, patients have difficulty monitoring and organizing their medical data and history.
</template>

<script>
export default {
  props: {
    isMobile: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {};
  },
};
</script>

<style scoped>
  p {
    text-align: justify;
  }
</style>
