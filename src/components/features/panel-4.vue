<template lang="pug">
  div
    div(v-if="!$isMobile")#panel4.pt-5
      v-container
        center
          strong.font-small.font-mc-blue REGISTRATION AND QUEUEING
        br
        br
        v-layout(row justify-center)
          span.font-medium Value everyone's time more effectively.
        br
        v-layout(row justify-center)
          span.font-small.text-xs-center With MYCURE, queueing is easier done than spelled. Patients easily register
            br
            | via kiosks. Display multiple queues through auxiliary monitors or smart 
            br
            | TVs for waiting patients. Incoming doctors even get notified in their
            br
            | devices for every new patient in line.
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
              :autoplay="true"
              :loop="true"
              paginationActiveColor="white"
              paginationColor="grey"
              navigationNextLabel=" "
              navigationPrevLabel=" "
            )
              slide(v-for="(feature,index) in features" :key="index" :data-index="index+1").pa-1
                img(:src="require(`../../assets/images/mycure-web-features-mockup-02-${feature}.png`)" width="70%")
    div(v-else)#panel4.pt-5
      v-container
        center
          strong.font-s.font-mc-blue REGISTRATION AND QUEUEING
        br
        br
        v-layout(row justify-center)
          span.font-l Value everyone's time more effectively.
        br
        v-layout(row justify-center)
          span.font-m With MYCURE, queueing is easier done than spelled. Patients easily register
            br
            | via kiosks. Display multiple queues through auxiliary monitors or smart 
            br
            | TVs for waiting patients. Incoming doctors even get notified in their
            br
            | devices for every new patient in line.
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
              style="height: 225px"
            )
              slide(v-for="(feature,index) in features" :key="index" :data-index="index+1")
                img(:src="require(`../../assets/images/mycure-web-features-mockup-02-${feature}.png`)" width="70%")
    
      
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
  #panel4 {
    background-image: url('../../assets/images/mycure-web-features-gradient-background.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
</style>
