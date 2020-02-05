<template lang="pug">
  div.white
    v-container
      v-layout(row wrap)
        v-flex(xs12 md12)
          v-layout(row wrap align-center justify-center)
            v-flex(xs12 md12).text-xs-center.pb-5
              h1.pt-5.font-48.font-work-sans The Problem We Are Trying To Solve
            v-flex(xs12 md4).px-4
              img(width="100%" src="../../assets/images/mycure-our-story-solving-problems-clinic-image.png" alt="Our Story - Problem")
            v-flex(xs12 md8).px-4
              p.font-18.pt-5 Medical record systems are highly fragmented, disorganized, and non-collaborative even in some developed countries. Many are still using legacy platforms and not employing the latest available technologies. Some systems are exclusive and not interoperable with other systems. 
              p.font-18 Thus, health professionals are not able to optimize patient healthcare. In the same manner, it is very difficult for patients to monitor and organize their medical data and history.
</template>

<script>
  export default {
    data () {
      return {
        //
      };
    }
  };
</script>

<style scoped>
  p {
    text-align: justify;
  }
</style>

