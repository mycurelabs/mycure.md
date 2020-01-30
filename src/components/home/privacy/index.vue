<template lang="pug">
  div
    //- WEB
    div(v-if="!$isMobile").py-5
      v-container
        v-layout(row justify-center)
          v-flex(xs5)
            img(width="85%" :src="require(`@/assets/images/${panelImage}.png`)" alt="Data Privacy Law")
          v-flex(xs6 align-self-center)
            strong.font-40.lh-title.pb-3.font-work-sans {{ panelTitle }}
            br
            br
            span.font-18.mt-3 {{ panelText }}
    //- MOBILE
    div(v-else).pt-5
      v-container
        v-layout(row)
          v-flex(xs12 md12).text-xs-center
            br
            strong.lh-title.font-40.pb-4.font-work-sans {{ panelTitle }}
            img(width="85%" :src="require(`@/assets/images/${panelImage}.png`)" alt="Data Privacy Law").pb-3
            p.font-16.mt-3 {{ panelText }}
</template>

<script>
  export default {
    data () {
      return {
        panelTitle: 'Protect your patients\' medical records with confidence',
        panelText: 'With MYCURE you\'ll never have to worry much about data privacy concerns. Keeping them secure is our #1 priority.',
        panelImage: 'mycure-homepage-privacy'
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
