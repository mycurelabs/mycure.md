<template lang="pug">
  div
    div(v-if="!$isMobile").pb-5
      v-container
        v-layout(row)
          v-flex(xs12 md5)
            img(width="100%" src="../../assets/images/mycure-web-banner-data-privacy-law.png")
          v-flex(xs12 md6 offset-xs1 align-self-center)
            span.font-medium.lh-title Protect your patients' medical records with confidence
            br
            br
            br
            span.font-small.mt-3 With MYCURE you'll never have to worry much about data privacy concerns. Keeping them secure is our #1  priority
            br
            br
            br
            v-btn(
              href="http://blog.mycure.md/2018/04/26/data-privacy-for-physicians/" 
              target="_blank"
              color="#2e9fdf"
              large
            ) 
              strong.text-none.white--text.font-small Learn More
    //- div(v-else).pa-3
      v-container
        v-layout(row)
          v-flex(xs12 md12)
            font.font-medium Protect your patients' medical records with confidence
            br
            br
            br
            font.font-small.mt-3 With MYCURE you'll never have to worry much about data privacy concerns. Keeping them secure is our #1  priority
            br
            br
            br
            a(href="http://blog.mycure.md/2018/04/26/data-privacy-for-physicians/" target="_blank")
              strong.font-mc-blue Continue Reading...
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
  a {
    text-decoration-color: #2e9fdf;
  }
</style>
