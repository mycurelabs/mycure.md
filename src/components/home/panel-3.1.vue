<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 3.1
    div.panel-3.pt-5.pb-5
      b-container
        b-row.align-items-center
          b-col(xs="12" md="12").text-center
            b-row.wrap.align-items-center.justify-content-md-center
              b-col(xs="12" md="8")
                br
                br
                br
                center
                  div.hr-blue
                br
                h1 Syncs Online, Works Offline.
                span(style="color: #acadae")
                  b
                    i Enjoy the best of both worlds — reliability of an in-house server and affordability of the cloud.
                br
                br
                p MYCURE finally uncovers the holy grail of combining online and offline technology.
                  br
                  | Using our proprietary tech called 
                  b MYCURE Syncbase
                  |, you can digitally process your clinic records in your local network using multiple devices, even if the internet goes down!
                  br
                  | Then once back online, it automatically synchronizes data back in the cloud.
                p Like magic, but scientifically-blended. 😉
              b-col(xs="12" md="6").pb-5
                img(width="100%" src="../../assets/images/v4/mycure-website-animated-syncbase-horizontal.gif")
              //start mew video
              b-col(xs="12" md="8")
                center
                  b-button(variant="primary" size="sm" v-b-modal="'modal2'" style="text-align:center;") WATCH VIDEO   
    b-modal(
      size="lg"
      hide-footer 
      hide-header 
      centered 
      @shown="showVid = true"
      @hidden="showVid = false"
    )#modal2
      iframe(
        v-if="showVid"
        id="ytplayer" 
        type="text/html" width="100%" height="450"
        src="https://www.youtube.com/embed/3MbUJd1g-lc?rel=0&amp;showinfo=0"
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
        videoId: '3MbUJd1g-lc',
        showVid: true
      }
    },
    methods: {
      goto(page) {
        this.$router.push({name: page});
      },
      addVid() {
        console.log('Add Vid');
        this.videoId = '3MbUJd1g-lc';
      },
      removeVid() {
        console.log('Remove Vid');
        this.videoId = null;
      }
    }
  }
</script>

<script>
  import mcRadioGroupImage from '../commons/mc-radio-group-image';
  import VueScrollTo from 'vue-scrollto';
  export default {
    methods: {
      itemSelected(item) {
        this.item1Selected = false;
        this.item2Selected = false;
        this.item3Selected = false;
        switch (item.id) {
          case 'individual': this.item1Selected = true; break;
          case 'group': this.item2Selected = true; break;
          case 'specialized': this.item3Selected = true; break;
          default:break;
        }
        setTimeout(() => {
          VueScrollTo.scrollTo(`#${item.id}`, 500, { easing: 'ease' } );
        }, 200);
      }
    }
  }
</script>

<style scoped>
  .panel-3 {
    /* margin-top: 80px; */
    background-color: white;
  }
</style>