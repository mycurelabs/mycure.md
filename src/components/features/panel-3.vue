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
        center
          strong.font-s.font-mc-blue MEDICAL RECORDS
        br
        br
        v-layout(row justify-center)
          span.font-l Designed for doctors, by doctors.
        br
        v-layout(row justify-center)
          span.font-m Record full medical history, vitals, and physical exam records according
            |  to SOAP charting. Eliminate the haste of scribbling with Rx printing, ICD-10
            | database, multiple image uploads, and more.
        br
        center
            v-btn(
              :href="`${siginURL}/signup/choose`" 
              color="#18c551" 
              style="padding: 25px 30px 25px 30px"
            ) 
              strong.font-small.text-none.white--text Sign Up Now 
        br
        br
        v-layout(row justify-center)
          //- https://ssense.github.io/vue-carousel/
          center
            carousel(
              :per-page="1" 
              :autoplay="false"
              :loop="true"
              paginationActiveColor="grey"
              paginationColor="#f5f5f5"
              navigationNextLabel=" "
              navigationPrevLabel=" "
            )
              slide(
                v-for="(feature,index) in features" 
                :key="index" 
                :data-index="index+1"
              )
                img(:src="require(`../../assets/images/mycure-web-features-mockup-01-${feature}.png`)" alt="Medical records" width="100%")
</template>

<script>
  export default {
    mounted () {
      setTimeout ( () => {
        this.$refs['carousel'].onResize();
        this.$refs['carousel'].goToPage(0);
      }, 200);
    },
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
