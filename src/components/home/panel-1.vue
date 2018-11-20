<template lang="pug">
  div
    div.panel-1
      pre(v-if="!$isProduction()").panel-number 1
      mc-navbar-home
      div.container
        div.row
          div.col-xs-12.col-md-6
            br
            h1 Enabling Heroes.
            h1(style="margin-top: -10px;") Saving Lives.
            p MYCURE builds advanced tech tools for our everyday heroes - doctors, medical practitioners, and people who care the extra mile.
            div(v-b-modal="'homeVid'").custom-play-button
              div.media
                div.media-left
                  img(width="20" src="../../assets/images/v4/mycure-play-btn.png").media-object
                div.media-body
                  label(style="margin-top:3px; margin-left:10px; font-size: 14px; font-weight: bold;") Watch Video
            div.product-card-container.row
              div.col-md-1
              div.col-xs-12.col-md-5
                div(@click="goto('cms')").product-card
                  img(width="100%" src="../../assets/images/v4/mycure-home-product-card-clinic-management-system.png" style="margin:10px;")
                  h5(align="center") Clinic Management System
              div.col-xs-12.col-md-5
                div(@click="goto('his')").product-card
                  img(width="100%" src="../../assets/images/v4/mycure-home-product-card-hospital-information-system.png" style="margin:10px;")
                  h5(align="center") Hospital Information System
          
          div(style="height: 490px;").col-xs-12.col-md-6
              img(width="80%" src="../../assets/images/v4/mycure-home-super-hero-doctor-main.png" style="position: absolute; bottom: -2px; right: 0px;")

    b-modal(
      size="lg"
      hide-footer 
      hide-header 
      centered 
      @shown="showVid = true"
      @hidden="showVid = false"
    )#homeVid
      iframe(
        v-if="showVid"
        id="ytplayer" 
        type="text/html" width="100%" height="450"
        src="https://www.youtube.com/embed/9sFxkKZktXs?rel=0&showinfo=0"
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
        videoId: '9sFxkKZktXs',
        showVid: true
      }
    },
    methods: {
      goto(page) {
        this.$router.push({name: page});
      },
      addVid() {
        console.log('Add Vid');
        this.videoId = '9sFxkKZktXs';
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

  .product-card-container {
    margin-bottom: -100px;
  }

  .product-card {
    background-color: white;
    margin: 15px 0 15px 0;
    padding: 10px 20px 10px 5px;
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
      height: 550px;
      background-color: white !important;
      background-image: url('../../assets/images/v4/mycure-home-super-hero-doctor.png');
      background-repeat: repeat-x;
      background-position: center 50px;
      background-size: contain;
    }
    
    .container {
      padding-top: 0;
      padding-bottom: 0;
    }

    /* .row-container {
      min-height: 90vh;
    } */
  }

  @media (min-width: 992px) {
    .panel-1 {
      height: 550px;
      background-color: white !important;
      background-image: url('../../assets/images/v4/mycure-home-super-hero-doctor.png');
      background-repeat: repeat-x;
      background-position: center 50px;
      background-size: contain;
    }
  }

  @media (min-width: 1200px) {

  }
</style>