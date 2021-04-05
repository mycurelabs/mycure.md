<template lang="pug">
  div.white.py-8.my-10
    v-container
      v-row
        v-col(cols="12" md="8" offset-md="4")
          h1(:class="{'text-center': isMobile}").font-40 Meet Paulette
      v-row(justify="center").pt-3
        v-col(cols="12" md="4" align-self="center").text-center
          img(width="80%" v-lazy="require('~/assets/images/our-story/mycure-web-our-story-paulette.png')" alt="Our Story Paulette")
        v-col(cols="11" md="8").px-3.font-21
          p Paulette became a young widow at age 30. Her two children were just 4- and 6-year olds then. Despite limited resources, she managed to give her kids a good life.
          p Just when things got a lot better, Paulette encountered a bigger challenge—cancer.
          p For about a decade and a half, her life had been all about trips to the doctor, regular checkups, and staying healthy.&nbsp;
            strong Years of medical files&nbsp;
            | were definitely taking up space in their home and in her everyday life. As she shuttled between Guam (where she is based) and the Philippines, carrying her medical files to different doctors and pharmacies became too cumbersome and costly. Replenishing her medication had become a guessing game. Staying healthy sometimes became detrimental to her own health.
          p Paulette stood strong as a cancer warrior and survivor.
          p Our founder, Dale, had been witness to all of this. Paulette is Dale's mother.
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
