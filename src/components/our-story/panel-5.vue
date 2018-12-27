<template lang="pug">
  div.panel-3
    pre(v-if="!$isProduction()").panel-number 5
    b-container
      b-row.align-items-center
        b-col(xs="12" md="12").text-center.pt-5
          center
            div.hr-blue
          br
          h1 Caring the Extra Mile
        b-col(xs="12" md="12")
          br
          div#video
            iframe(
              id="ytplayer" 
              type="text/html"
              src="https://www.youtube.com/embed/vn6tVc1EHQg"
              frameborder="0"
            )
</template>

<script>
</script>

<style scoped>
  .panel-3 {
    /* min-height: 100vh; */
    /* background-color: white; */
    padding-bottom: 80px;
  }

  .container {
    /* padding-top: 50px; */
    /* padding-bottom: 50px; */
  }
  /* mark- remove the blackbars in video */
  #video{
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;   
  }

  #video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  /*end - removed blackbars  */
  @media (min-width: 576px) {
    .container {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }

  @media (min-width: 768px) {
    .panel-2 {
      min-height: 100vh;
      background-color: white;
    }

    .container {
      padding-top: 0;
      padding-bottom: 0;
    }

    .row-container {
      height: 100vh;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>