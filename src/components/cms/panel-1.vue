<template lang="pug">
  div.panel-1
    mc-navbar-home
    mc-cookie-prompt
    b-container
      b-row.row-container.row.align-items-center
        b-col(xs="12" md="6")
          h1(style="line-height: 1.3; font-size:2em;") Reliability of an in-house server,
          h1(style="font-size: 2.3em") Affordability of the cloud.
          //span(style="color: #acadae")
            b
              i Don't compromise speed, dependability, and affordability.
          br

          //- DESKTOP
          p().d-none.d-md-block
            //span(style="color: #acadae")
              b
                i Reliability of an in-house server,
              br
              b
                i Affordability of the cloud.

            strong MYCURE Clinic Management System 
            | empowers you to sync your clinical records together and store them safely in the cloud while running locally! 

          p().d-none.d-md-block

          //- DESKTOP END

          //- MOBILE
          p().d-block.d-md-none
            | Reliability of an in-house server,
            br
            | Affordability of the cloud.
            br
            br
            strong MYCURE Clinic Management System 
            | empowers you to sync your clinical records together and store them safely in the cloud while running locally! 
          p().d-block.d-md-none 
          br
          b-button(variant="primary" size="sm" href="https://accounts-v4.mycure.md/create-account-multi?type=multi" target="_blank") GET STARTED
          br
          b-button(variant="transparent" size="sm" v-b-modal="'cmsVid'" style="color: #0099cc; background-color: transparent;").pl-0.mt-3 Watch how it works ►
          
        b-col(xs="12" md="6")
          img(width="100%" src="../../assets/images/v4/panel1-cms.jpg")

    b-modal(
      size="lg"
      hide-footer 
      hide-header 
      centered 
      @shown="showVid = true"
      @hidden="showVid = false"
    )#cmsVid
      iframe(
        v-if="showVid"
        id="ytplayer" 
        type="text/html" width="100%" height="450"
        src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&controls=0&loop=1&showinfo=0"
        frameborder="0"
      )
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  import mcCookiePrompt from '../commons/mc-cookie-prompt';
  import { cookieStore } from '../../vuex';
  export default {
    components: {
      mcNavbarHome,
      mcCookiePrompt
    },
    data() {
      return {
        videoId: 'r7oewF5qDz4',
        showVid: true
      }
    },
    computed: {
      // browserID (){
      //   return cookieStore.state.browserID;
      // }
    },
    methods: {
      addVid() {
        console.log('Add Vid');
        this.videoId = 'r7oewF5qDz4';
      },
      removeVid() {
        console.log('Remove Vid');
        this.videoId = null;
      }
    }
  }
</script>

<style scoped>
  .panel-1 {
    height: auto;
    background-color: white;
    /* background-image: url('../../assets/images/v4/mycure-homepage-doctor-welcome-smile-emr-his-ehr-philippines-mobile-web-app.jpg'); */
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
  }

  .container {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media (min-width: 576px) {
    .container {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }

  @media (min-width: 768px) {
    .panel-1 {
      height: 100vh;
      /* background-image: url('../../assets/images/v4/mycure-homepage-doctor-kid-pediatrician-drawing.png'); */
      /* background-repeat: no-repeat; */
      /* background-position: center left; */
    }
    
    .container {
      padding-top: 0;
      padding-bottom: 0;
    }

    .row-container {
      height: 90vh;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>