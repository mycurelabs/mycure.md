<template lang="pug">
  div
    v-container
      v-layout(row wrap)
        v-flex(xs12 md10 offset-md1)
          v-layout(row wrap justify-center)
            v-flex(xs12 md12).text-xs-center
              div.hr-blue
              br
              h1.font-l MYCURE starts and ends with 
                br
                | real people and real stories.
              br
              br
              br
            v-flex(xs12 md4).text-xs-center
              img(width="100%" src="../../assets/images/mycure-ourstory-paulette.png")
            v-flex(xs12 md8).px-5
              p(style="text-align: justify").font-s Meet Paulette, a young widow at 30 years old with two kids (4 yo and 6 yo) in her care. Despite limited resources, she managed to give her kids a good foundation. Paulette is a cancer warrior and survivor. For about a decade and a half now, her life was all about doctor's visits, regular checkups, and staying healthy. 
                strong Years of medical files 
                | were definitely taking up a lot of space in their home and her daily life. As she was shuttling between Guam (where she is based) and the Philippines, carrying medical files to different doctors and pharmacies was becoming cumbersome and costly. Replenishing medications became a guessing game. Monitoring her own health sometimes affected her health too.
                p.font-s Our founder, Dale, was witness to all of this. Paulette is Dale’s mother.
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

</style>

