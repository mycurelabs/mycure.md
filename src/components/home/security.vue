<template lang="pug">
  div
    div(v-if="!$isMobile").py-5
      v-container
        v-layout(row justify-center)
          v-flex(xs5)
            img(width="85%" src="../../assets/images/mycure-web-banner-data-privacy-law.png" alt="Data Privacy Law")
          v-flex(xs6 align-self-center)
            span.font-40.lh-title.pb-3 Protect your patients' medical records with confidence
            br
            br
            span.font-18.mt-3 With MYCURE you'll never have to worry much about data privacy concerns. Keeping them secure is our #1 priority.
    div(v-else).pt-5
      v-container
        v-layout(row)
          v-flex(xs12 md12).text-xs-center
            br
            p.lh-title.font-40.pb-4 Protect your patients' medical records with confidence
            img(width="85%" src="../../assets/images/mycure-web-banner-data-privacy-law.png" alt="Data Privacy Law").pb-3
            p.font-16.mt-3 With MYCURE you'll never have to worry much about data privacy concerns. Keeping them secure is our #1 priority.
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
