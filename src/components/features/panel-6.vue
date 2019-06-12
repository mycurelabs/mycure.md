<template lang="pug">
  //- TODO: mobile responsiveness
  div
    div(v-if="!$isMobile")#panel6.pt-5
      v-container
        center
          strong.font-small.font-mc-blue Laboratory &amp; Imaging
        br
        br
        v-layout(row justify-center)
          span.font-medium.text-xs-center Record and retrieve diagnostic results right 
            br
            | where you need them.
        br
        v-layout(row justify-center)
          span.font-small.text-xs-center MYCURE can communicate with modern diagnostic machines through 
            br
            | HL7 interfacing and PACS configurations. 
            br
            br
            | Doctors can view DICOM images remotely or within clinic premises, while 
            br
            | patients can view their lab & imaging results through an online portal.

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
                img(:src="require(`../../assets/images/mycure-web-features-mockup-04-${feature}.png`)" width="70%")
    //- div(v-else)
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
</style>
