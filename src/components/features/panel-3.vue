<template lang="pug">
  div
    div(v-if="!$isMobile" style="padding-top: 200px")#panel3
      v-container
        center
          strong.font-small.font-mc-blue MEDICAL RECORDS
        v-layout(row justify-center).add-spacing
          span.font-medium Designed for doctors, by doctors.
        v-layout(row justify-center).add-spacing
          v-flex(xs7 align-self-center).text-xs-center
            span.font-small Record full medical history, vitals, and physical exam records according to SOAP charting. 
              | Eliminate the haste of scribbling with Rx printing, ICD-10 database, multiple image uploads, and more.
        v-layout(row justify-center).add-spacing
          img(src="@/assets/images/mycure-cms-web-features-arrow-down.png")
        v-layout(row justify-center).add-spacing 
          //- https://ssense.github.io/vue-carousel/
          center
            carousel(
              :per-page="1" 
              :autoplay="true"
              :loop="true"
              paginationActiveColor="white"
              paginationColor="grey"
              navigationNextLabel=" "
              navigationPrevLabel=" "
            )
              slide(v-for="(feature,index) in features" :key="index" :data-index="index+1").pa-1
                img(:src="require(`../../assets/images/mycure-web-features-mockup-01-${feature}.png`)" alt="Medical records" width="70%")
    div(v-else)#panel3.pt-5
      v-container
        v-layout(row justify-center)
          strong.font-s.font-mc-blue MEDICAL RECORDS
        br
        br
        v-layout(row justify-center)
          p.font-l.text-xs-center Designed for doctors, by doctors.
        br
        v-layout(row justify-center)
          p.font-m.text-xs-center Record full medical history, vitals, and physical exam records according
            |  to SOAP charting. Eliminate the haste of scribbling with Rx printing, ICD-10
            | database, multiple image uploads, and more.
        v-layout(row justify-center).add-spacing
          img(src="@/assets/images/mycure-cms-web-features-arrow-down.png")
        br
        br
        v-layout(row justify-center)
          //- https://ssense.github.io/vue-carousel/
          carousel(
            :per-page="1" 
            autoplay
            loop
            adjustableHeight
            paginationActiveColor="#3498db"
            paginationColor="#808080"
          )
            slide(
              v-for="(feature,index) in features" 
              :key="index" 
              :data-index="index+1"
            ).pa-1
              v-layout(row justify-center)
                img(:src="require(`../../assets/images/mycure-web-features-mockup-01-${feature}.png`)" alt="Medical records" height="200px")
</template>

<script>
  export default {
    data () {
      return {
        features: ['A','B','C'],
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }
  };
</script>

<style scoped>

  #panel3 {
    background-image: url('../../assets/images/mycure-web-features-gradient-background.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  .add-spacing {
    padding-top: 32px;
  }

</style>
