<template lang="pug">
  div.panel-1
    mc-navbar-home
    b-container
      b-row.row-container.row.align-items-center
        b-col(xs="12" md="5")
          h1(style="line-height: 1.3") Syncs Online, 
            br 
            | Works Offline!
          //- div.hr-blue
          //- br
          //- h1 MYCURE cares for people who care for people.
          br
          //- p MYCURE is a hybrid of cloud-based and on-premise software for clinics. It's complete, fast, and affordable.
          p Your clinic records are synced together and stored safely
            br 
            | in the cloud while running locally using one powerful
            br
            strong Clinic Management System
            |. 
          //- p Goodbye to multiple, complicated systems.
          p It’s fast, reliable, and affordable.
          br
          b-button(variant="primary" size="sm" href="https://accounts-v4.mycure.md/signup/") Start a trial
          //- b-button(variant="primary" size="sm" v-b-modal="'modal1'") WATCH VIDEO
        b-col(xs="12" md="7")
          img(width="100%" src="../../assets/images/v4/mycure-homepage-syncbase.png")
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