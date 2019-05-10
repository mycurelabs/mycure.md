<template lang="pug">
  div.mc-light-grey.pb-5
    v-container
      v-flex(xs12 md12)
        v-layout(column wrap justify-center).mx-5
          font.font-l.text-xs-center "It's a great experience using MYCURE app
              br
              | in our rural setup. I've been through many
              br
              | EMR apps, but this one is the best so far."
          br
          br
          font.font-xs.text-xs-center Dr. Gay Cadorna-Toledo
          b.font-xs.text-xs-center Pediatrician, Misamis Occidental
          font.font-xs.text-xs-center MYCURE Doctor since 2017
      v-layout(row wrap justify-center).ma-5
        v-flex(xs12 md6).px-3
          v-card
            v-img(src="../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png")
            v-card-title asdasd
        v-flex(xs12 md6).px-3 
          v-card
            v-img(src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png")
            v-card-title asdasd
          
        
              
          
</template>

<script scoped>
export default {
  data () {
    return {
    };
  }
};
</script>

<style scoped>

.sign-up-card {
  border-radius: 10px;
}

.indiv-pic, .multi-pic {
  height: 200px;
}

</style>

