<template lang="pug">
  div
    div(v-if="!$isMobile")#panel6.pt-5
      v-container
        center
          strong.font-small.font-mc-blue LABORATORY &amp; IMAGING
        v-layout(row justify-center).add-spacing
          span.font-medium.text-xs-center Record and retrieve diagnostic results right where you need them.
        v-layout(row justify-center).add-spacing
          span.font-small.text-xs-center MYCURE can communicate with modern diagnostic machines through 
            br
            | HL7 interfacing and PACS configurations. 
            br
            br
            | Doctors can view DICOM images remotely or within clinic premises, while 
            br
            | patients can view their lab & imaging results through an online portal.
        v-layout(row justify-center).add-spacing
          img(src="@/assets/images/mycure-cms-web-features-arrow-down.png" alt="Arrow down icon")
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
                img(:src="require(`../../assets/images/mycure-web-features-mockup-04-${feature}.png`)" alt="Clinic Laboratory and Imaging" width="75%")
    div(v-else)#panel6.pt-5
      v-container
        center
          strong.font-s.font-mc-blue LABORATORY &amp; IMAGING
        br
        br
        v-layout(row justify-center)
          span.font-l Record and retrieve diagnostic results right where you need them.
        br
        v-layout(row justify-center)
          span.font-m MYCURE can communicate with modern diagnostic machines through HL7 interfacing and PACS configurations. 
            br
            br
            | Doctors can view DICOM images remotely or within clinic premises, while patients can view their lab & imaging results through an online portal.

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
            )
              slide(v-for="(feature,index) in features" :key="index" :data-index="index+1")
                img(:src="require(`../../assets/images/mycure-web-features-mockup-04-${feature}.png`)" alt="Clinic Laboratory and Imaging" width="100%")
    
</template>

<script>
  export default {
    data () {
      return {
        features: ['A','B']
      };
    }
  };
</script>

<style scoped>
  #panel6 {
    background-image: url('../../assets/images/mycure-web-features-gradient-background.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  .add-spacing {
    padding-top: 32px;
  }
</style>
