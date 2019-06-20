<template lang="pug">
  div#panel5
    div(v-if="!$isMobile")
      v-container
        v-layout(row justify-center)
          v-flex(xs5)
            img(width="85%" src="../../assets/images/mycure-web-banner-data-privacy-law.png" alt="Data Privacy Law")
          v-flex(xs6 align-self-center)
            span.font-medium.lh-title Protect your patients' medical records with confidence
            br
            br
            br
            span.font-small.mt-3 With MYCURE you'll never have to worry much about data privacy concerns. Keeping them secure is our #1 priority.
    div(v-else)
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
