<template lang="pug">
  div.home
    mcNavbarHome
    //- Section 1 of Home Page
    div.white.pa-5
      v-container
        h1.text-xs-center.pa-2 Because we know your clinic can do better.
        h3.em.font-weight-regular.font-italic.text-xs-center.pa-3 MYCURE | Your Most Complete Clinic Management System
        br
        v-layout(justify-center)
          v-btn(
            color="info"
            large
            ).px-5.text-capitalize 
            strong Sign Up
        v-layout(justify-center)
          v-btn(
            color="info"
            small
          ) Watch Video
    //- Section 2 of Home Page
    div.blue
      v-container
        v-layout(row wrap justify-center)
          v-flex(xs4).text-xs-center.white--text Is your system outdated
          v-flex(xs4).text-xs-center.white--text Is this you?
          v-flex(xs4).text-xs-center.white--text Is your clinic WiFi slow?

    //- Section 3 of Home Page
    div.silver.px-5
      v-container.px-5
        v-layout(row wrap justify-center)
          h2.pa-5 Is your current clinic system stopping you and your clinic from progress?
          v-layout(row wrap justify-center).mx-5
            v-flex(xs4)
              ul
                li Is your clinic system already outdated and lack reliablity?
                br
                li Is your clinic system providing accurate, real-time data?
                br
                li Is your clinic system already outdated and lack reliability?
                br
            v-flex(xs4)
              ul
                li Is your clinic system hard to maintain?
                br
                br
                li Is your clinic system help you in Data Privary Issues?
                br
                li Is your clinic system working perfectly even without WiFi?
                br
          v-layout(row wrap justify-center)
            v-btn(
            color="info"
            large
            ) 
              strong We got a solution
          
        p.text-xs-center.py-4 Have questions? Give us a call: (+63) 699 - 7272

    //- Section 4 of Home Page
    div.white.px-5
      v-container
        v-flex(xs12 md12)
            v-layout(row wrap justify-center)
              h2.pa-5 Does your clinic have more than 10 branches? Talk to us for custom pricing.

    //- Section 5 of Home Page
    div.silver.px-5
      v-container
        v-layout(row wrap justify-center)
          h2.text-xs-center.pa-5 Is this you right now?
          v-layout(row wrap justify-center)
            v-flex(xs12 md2).mx-1
              div.problem-pic.red 
              h3.text-center The admin with a headache
              | Telling the biggest problem of the great clinic admin in 158 characters
            v-flex(xs12 md2).mx-1
              div.problem-pic.orange
              h3.text-center The empty pocket techie doctor
              | Telling the biggest problem of the great clinic admin in 158 characters
            v-flex(xs12 md2).mx-1
              div.problem-pic.lime
              h3.text-center The admin in a rollercoaster ride
              | Telling the biggest problem of the great clinic admin in 158 characters
            v-flex(xs12 md2).mx-1
              div.problem-pic.purple
              h3.text-center The bill chasing clinic owner
              | Telling the biggest problem of the great clinic admin in 158 characters
            v-flex(xs12 md2).mx-1
              div.problem-pic.pink
              h3.text-center The daydreamer doctor
              | Telling the biggest problem of the great clinic admin in 158 characters

          v-layout(row wrap justify-center).pt-5
            v-btn(
              color="info"
              large
              ) 
              strong We got a solution
        p.text-xs-center.py-4 Have questions? Give us a call: (+63) 699 - 7272

    //- Section 6 of Home Page
    div.blue.px-5
      v-container
        v-layout(row wrap justify-center)
          h2.text-center.pa-5.white--text Lower your average monthly expenses and increase clinic productivity and effectiveness


    mcFooter
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  import mcFooter from '../commons/mc-footer';

  export default {
    components: {
      mcNavbarHome,
      mcFooter,
    }
  };
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');

.home {
  font-family: 'Poppins', sans-serif;
}

.problem-pic {
  height: 150px;
}

</style>
