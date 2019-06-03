<template lang="pug">
  div
    //- div(v-if="!$isMobile")
      v-container
        v-layout(row wrap justify-center)
          span.font-medium What makes MYCURE so different?
        br
        v-layout(row wrap justify-center)
          span.font-small.text-xs-center You can enjoy the best of both worlds — reliability of an in-house server and 
            br
            | affordability of the cloud. Digitally process your medical records in your local 
            br
            | network using multiple devices, even if the internet goes down! 
            br
            br
            br
            | Then once back online, it automatically synchronizes data back in the cloud.
        br
        br 
        v-layout(row wrap justify-center)
          v-btn(color="#96cfef")
            v-icon(color="#2e9fdf" left) play_circle_filled
            strong
              u WATCH VIDEO 
    div(v-if="!$isMobile")
      v-container
        v-layout(row wrap justify center)
          v-flex(xs6 align-self-center).px-3
            span.font-medium What makes MYCURE so different?
            br
            br
            span.font-small.text-xs-center You can enjoy the best of both worlds — 
              | reliability of an in-house server and  affordability of the cloud. 
              | Digitally process your medical records in your local network using 
              | multiple devices, even if the internet goes down! 
              br
              br
              | Then once back online, it automatically synchronizes data back in the cloud.
          v-flex(xs6 align-self-center).px-4
            v-card.elevation-10
              img(width="100%" src="../../assets/images/mycure-web-video-cover-syncbase-online-offline.png")
            

    div(v-else)
</template>

<script>
  export default {
    data () {
      return {
        //
      };
    }
  };
</script>

<style scoped>

</style>

