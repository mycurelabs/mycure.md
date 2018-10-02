<template lang="pug">
  div.panel-1
    mc-navbar-home
    b-container
      b-row.row-container.row.align-items-center
        b-col(xs="12" md="6")
          h1(style="line-height: 1.3; font-size:2em;") Your Clinic Deserves a Reliable
          h1(style="") Clinic Management System!
          span(style="color: #acadae")
            b
              i Don't compromise speed, dependability, and affordability.
          br
          br
          p().d-block.d-md-block
            strong MYCURE 
            | is a 
            strong clinic management system 
            | that empowers you
            br
            | to sync your clinical records together and store them safely
            br
            | in the cloud while running locally!
          p().d-block.d-md-block As fast as on-premise server,  
            br 
            | as affordable as cloud-based subscription.

          p().d-block.d-md-none
            strong MYCURE 
            | is a 
            strong clinic management system 
            | that empowers you to sync your clinical records together and store them safely in the cloud while running locally!
          p().d-block.d-md-none As fast as on-premise server, as affordable as cloud-based subscription.

          //- p.d-block.d-md-none Your clinic records can be synced together and stored safely in the cloud while running locally in one powerful  
          //-   strong MYCURE Clinic Management System!
          //-   | As fast as on-premise server, as affordable as cloud-based subscription.
          br
          b-button(variant="primary" size="sm" href="https://accounts-v4.mycure.md/signup/") START A TRIAL
          //- b-button(variant="primary" size="sm" v-b-modal="'modal1'") WATCH VIDEO
        b-col(xs="12" md="6")
          img(width="100%" src="../../assets/images/v4/mycure-homepage-syncbase-offline-online-clinic-management-system-animated.gif")
    b-modal(
      size="lg"
      hide-footer 
      hide-header 
      centered 
      @shown="showVid = true"
      @hidden="showVid = false"
    )#modal1
      iframe(
        v-if="showVid"
        id="ytplayer" 
        type="text/html" width="100%" height="450"
        src="https://www.youtube.com/embed/r7oewF5qDz4"
        frameborder="0"
      )
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  export default {
    components: {
      mcNavbarHome
    },
    data() {
      return {
        videoId: 'r7oewF5qDz4',
        showVid: true
      }
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