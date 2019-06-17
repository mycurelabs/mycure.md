<template lang="pug">
  div.pt-5
    v-container
      v-layout(row)
        v-flex(xs12 md12).text-xs-center
          br
          span(style="line-height: 45px").font-l Protect your patients' medical records with confidence
          br
          br
          img(width="85%" src="../../assets/images/mycure-web-banner-data-privacy-law.png" alt="Data Privacy Law")
          br
          br
          br
          span.font-s.mt-3 With MYCURE you'll never have to worry much about data privacy concerns. Keeping them secure is our #1 priority.
          //- br
          //- br
          //- br
          //- v-btn(
          //-   :to="{ name: 'data-privacy-for-physicians' }" 
          //-   color="#2e9fdf"
          //-   large
          //- ) 
          //-   strong.text-none.white--text.font-small Learn More
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
    text-decoration: none;
  }

</style>
