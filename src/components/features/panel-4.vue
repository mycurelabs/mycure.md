<template lang="pug">
  div
    div(v-if="!$isMobile")#panel4.pt-5
      v-container
        center
          strong.font-18.font-18c-blue REGISTRATION AND QUEUEING
        v-layout(row justify-center).add-spacing
          span.font-48 Value everyone's time more effectively.
        v-layout(row justify-center).add-spacing
          v-flex(xs7 align-self-center).text-xs-center
            span.font-18 With MYCURE, queueing is easier done than spelled. Patients easily register
              |  via kiosks. Display multiple queues through auxiliary monitors or smart TVs for waiting patients. Incoming doctors even get notified in their
              | devices for every new patient in line.
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
                img(:src="require(`../../assets/images/mycure-web-features-mockup-02-${feature}.png`)" alt="Clinic Registration and Queueing" width="70%")
    div(v-else)#panel4.pt-5
      v-container
        v-layout(row justify-center)        
          strong.font-16.font-18c-blue REGISTRATION AND QUEUEING
        br
        br
        v-layout(row justify-center)
          p.font-40.text-xs-center Value everyone's time more effectively.
        br
        v-layout(row justify-center)
          p.font-18.text-xs-center With MYCURE, queueing is easier done than spelled. Patients easily register via kiosks.
            br
            br
            | Display multiple queues through auxiliary monitors or smart 
            | TVs for waiting patients. Incoming doctors even get notified in their devices for every new patient in line.
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
          ).pa-1
            slide(v-for="(feature,index) in features" :key="index" :data-index="index+1")
              v-layout(row justify-center)
                img(:src="require(`../../assets/images/mycure-web-features-mockup-02-${feature}.png`)" alt="Clinic Registration and Queueing" height="210px")
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

  .add-spacing {
    padding-top: 32px;
  }
</style>
