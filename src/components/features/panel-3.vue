<template lang="pug">
  //- TODO: mobile responsiveness
  div
    div(v-if="!$isMobile")#panel3.pt-5
      v-container
        center
          strong.font-small.font-mc-blue Medical Records
        br
        br
        v-layout(row justify-center)
          span.font-medium Designed for doctors, by doctors.
        br
        v-layout(row justify-center)
          span.font-small.text-xs-center Record full medical history, vitals, and physical exam records according
            br
            | to SOAP charting. Eliminate the haste of scribbling with Rx printing, ICD-10
            br
            | database, multiple image uploads, and more.
        br
        br
        br
        br
        br
        v-layout(row justify-center)  
          //- https://ssense.github.io/vue-carousel/
          center
            carousel(
              :per-page="1" 
              :autoplay="false"
              :loop="true"
              paginationActiveColor="white"
              paginationColor="grey"
              navigationNextLabel=" "
              navigationPrevLabel=" "
              style="height: 550px"
            )
              slide(v-for="(feature,index) in features" :key="index" :data-index="index+1")
                img(:src="require(`../../assets/images/mycure-web-features-mockup-01-${feature}.png`)" width="70%")
    //- div(v-else)
</template>

<script>
  export default {
    data () {
      return {
        features: ['A','B','C']
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

</style>
