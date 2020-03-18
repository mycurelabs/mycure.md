<template lang="pug">
  div.white
    v-container
      v-layout(row wrap)
        v-flex(xs12 md12)
          v-layout(row wrap justify-center).pt-5
            v-flex(xs12 md8 offset-md4).px-4.pb-4
              h1.font-36.font-work-sans The Problem We Are Trying To Solve
            v-flex(xs12 md4 align-center).px-4
              img(width="100%" src="../../assets/images/mycure-our-story-solving-problems-clinic-image.png" alt="Our Story - Problem")
            v-flex(xs12 md8).px-4.font-21
              p Medical record systems are highly fragmented, disorganized, and non-collaborative even in some developed countries. Many are still using legacy platforms and are not employing the latest available technologies. Some are exclusive and are not interoperable with other systems.
              p Thus health professionals are unable to optimize patient healthcare. In the same manner, patients have difficulty monitoring and organizing their medical data and history.
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

