<template lang="pug">
  div
    div.join-us-panel.pt-5.pb-5
      v-container
        v-layout(row wrap justify-center)
          v-flex(xs12 md12).mt-5(style="margin-top:100px;")
            img(src="../../assets/images/mycure-modules-plantg.png").plant
            img(src="../../assets/images/mycure-modules-almond.png").almonds
            div.hr-blue
            br
            h1.font-xl.text-xs-center Experience MYCURE
            br
            p.font-m.text-xs-center Explore what you can do more with our smart tools by your side.
            br
          v-flex(xs12 md12)
            v-layout(row wrap justify-center)
              v-btn(color="info" large).mb-3 GET STARTED TODAY 
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

  .join-us-panel {
    
  }

  .plant, .almonds {
    display: none;
  }

  @media (min-width: 576px) {
    .plant, .almonds {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .plant {
      display: inline;
      width: 600px;
      position: absolute;
      left: -150px;
      bottom: 300px;
    }

    .almonds {
      display: inline;
      position: absolute;
      right: -10px;
      bottom: 600px;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>