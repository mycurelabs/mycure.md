<template lang="pug">
  //- Section 1 of Home Page
  div.white.panel-1
    v-container
      h1.text-xs-center.pa-3 Because we know your clinic can do better.
      h3.em.font-weight-regular.font-italic.text-xs-center MYCURE | Your Most Complete Clinic Management System
      br
      v-layout(row wrap justify-center)
        v-btn(
          color="#2e9fdf"
          large 
          ).px-5.text-capitalize.white--text.sign-up
          strong.font-s Sign Up

      v-layout(row wrap justify-center)
        v-btn(  
          color="#ADD8E6"
        ).watch-video.ma-3
          v-icon(
            color="blue"
            left
          ) play_circle_filled

          strong.underline.font-xs Watch Video
</template>

<style scoped>

.panel-1 {
  padding: 140px;
}

.sign-up {
  width: 200px;
}

.underline{
  text-decoration: underline;
}

.watch-video{
  height: 35px;
  width: 160px;
}

</style>