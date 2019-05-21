<template lang="pug">
  div
    div.join-us-panel.pt-5.pb-5
      v-container
        v-layout(row wrap justify-center)
          v-flex(xs12 md12).mt-5(style="margin-top:100px;")
            div.hr-blue
            br
            h1.font-l.text-xs-center Experience MYCURE
            br
            p.font-m.text-xs-center Explore what you can do more with our smart tools by your side.
            br
          v-flex(xs12 md12)
            v-layout(row wrap justify-center)
              v-btn(style="width: 450px" color="info" large).mb-3 
                strong GET STARTED TODAY 
</template>

<script>
  export default {
    props: {
      bg: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style scoped>

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>