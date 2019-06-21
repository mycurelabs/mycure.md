<template lang="pug">
  div#panel5
    div(v-if="!$isMobile").pt-5
      v-container
        v-layout(row justify-center)
          v-flex(xs5)
            img(width="85%" src="../../assets/images/mycure-web-banner-data-privacy-law.png" alt="Data Privacy Law")
          v-flex(xs6 align-self-center)
            span.font-medium.lh-title.pb-3 Protect your patients' medical records with confidence
            span.font-small.mt-3 With MYCURE you'll never have to worry much about data privacy concerns. Keeping them secure is our #1 priority.
    div(v-else).pt-4
      v-container
        v-layout(row)
          v-flex(xs12 md12).text-xs-center
            br
            p(style="line-height: 45px").font-l.pb-4 Protect your patients' medical records with confidence
            img(width="85%" src="../../assets/images/mycure-web-banner-data-privacy-law.png" alt="Data Privacy Law").pb-3
            p.font-s.mt-3 With MYCURE you'll never have to worry much about data privacy concerns. Keeping them secure is our #1 priority.
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
    text-decoration: none;
  }
</style>
