<template lang="pug">
  div.panel-1
    pre(v-if="!$isProduction()").panel-number 1
    mc-navbar-home
    div.container
      div.row-container.row.align-items-center
        div.col-xs-12.col-md-6
          //- h2 MYCURE | Modules
          //- div.hr-blue
          br
          h1 Enabling Heroes.
          h1 Saving Lives.
          br
          p Advanced tech tools for our everyday heroes - the doctors and everyone who care the extra mile. Enabling them to become better equipped and thus saving more lives.

          //- b-button(variant="primary" size="sm" :to="{name: 'join-today'}") GET MYCURE
          //- img(width="100%" src="../../assets/images/v4/mycure-modules-mobile-drawing.jpg")
          div(v-b-modal="'modal1'").custom-play-button
            div.media
              div.media-left
                img(width="50" src="../../assets/images/v4/mycure-play-btn.png").media-object
              div.media-body
                h4.media-heading(style="margin-top:10px; margin-left:10px;") Watch Video
          div.row
            div.col-xs-12.col-md-6
              div(@click="goto('cms')").product-card
                img(width="90%" src="../../assets/images/v4/mycure-home-product-card-clinic-management-system.png" style="margin:10px;")
                h5(align="center") Clinic Management System
            div.col-xs-12.col-md-6
              div(@click="goto('his')").product-card
                img(width="90%" src="../../assets/images/v4/mycure-home-product-card-hospital-information-system.png" style="margin:10px;")
                h5(align="center") Hospital Information System

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
        src="https://www.youtube.com/embed/h2I4h-IhEKU?rel=0&amp;showinfo=0"
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
        videoId: 'h2I4h-IhEKU',
        showVid: true
      }
    },
    methods: {
      goto(page) {
        this.$router.push({name: page});
      },
      addVid() {
        console.log('Add Vid');
        this.videoId = 'h2I4h-IhEKU';
      },
      removeVid() {
        console.log('Remove Vid');
        this.videoId = null;
      }
    }
  }
</script>

<style scoped>
  /* .panel-1 {
    height: auto;
    background-color: white !important;
    background-image: url('../../assets/images/v4/mycure-modules-mobile-drawing.jpg');
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 400px;
  } */

  .custom-play-button {

  }

  .custom-play-button:hover {
    cursor: pointer;
  }

  .product-card {
    background-color: white;
    margin: 20px 0 15px 0;
    padding: 10px;
    -webkit-box-shadow: 1px 4px 9px -2px #000000;
    -moz-box-shadow: 1px 4px 9px -2px #000000;
    box-shadow: 1px 4px 9px -2px #000000;
  }

  .product-card:hover {
    cursor: pointer;
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

    .panel-1 {
      background-position: right center;
      background-size: 300px;
    }
  }

  @media (min-width: 768px) {
    .panel-1 {
      height: auto;
      background-color: white !important;
      background-image: url('../../assets/images/v4/mycure-home-super-hero-doctor.png');
      background-repeat: repeat-x;
      background-position: right bottom;
      background-size: 1000px;
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
    .panel-1 {
      height: auto;
      background-color: white !important;
      background-image: url('../../assets/images/v4/mycure-home-super-hero-doctor.png');
      background-repeat: repeat-x;
      background-position: right bottom;
      background-size: 1600px;
    }
  }

  @media (min-width: 1200px) {

  }
</style>