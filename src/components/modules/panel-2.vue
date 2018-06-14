<template lang="pug">
  div.panel-2
    b-container(fluid)
      b-row.justify-content-md-center
        b-col(md="2")
        b-col(xs="12" md="7").paper.pl-5.pr-5
          img(src="../../assets/images/v4/mycure-modules-pin.png" :class="{'animate': scrollTop > 300}").pin
          img(src="../../assets/images/v4/mycure-modules-plantg.png" :class="{'animate': scrollTop > 420}").pot
          img(src="../../assets/images/v4/mycure-modules-pen-and-pad.png" :class="{'animate': scrollTop > 570}").notepad
          img(src="../../assets/images/v4/mycure-modules-white-envelope.png" :class="{'animate': scrollTop > 750}").envelope
          img(src="../../assets/images/v4/mycure-modules-plate.png" :class="{'animate': scrollTop > 1100}").plate
          img(src="../../assets/images/v4/mycure-modules-chickpeas.png" :class="{'animate': scrollTop > 1200}").peas
          b-row.align-items-center.justify-content-md-center
            b-col(xs="12" md="12").text-center
              h2 HOW IT WORKS
              center
                div.hr-blue
                div.hr-blue
              br
              h1 Create the perfect blend 
                br 
                | for your clinic
              br
              center
                div.hr-blue
              br
              p Pick whatever modules you want and we’ll
                br
                | beautifully package them just for you.
          b-row.mt-5.pt-5.justify-content-md-center
            b-col(xs="12" md="4")
              h2.mb-5 
                strong CORE
              ul.list
                li(v-for="(module, key) in coreModules") ⛋ {{module.name}}
            b-col(xs="12" md="4")
              h2.mb-5 
                strong
                  i Premium
              ul.list
                li(v-for="(module, key) in premiumModules") ⛋ {{module.name}}
            b-col(xs="12" md="4")
              h2.mb-5 Add-ons
              ul.list
                li(v-for="(module, key) in adOnModules") ⛋ {{module.name}}
          //- b-row.mt-5.pt-5
            b-col(xs="12" md="4")
              p More coming soon
              ul.list
                li ⛋ Patient
                li ⛋ Philhealth
                li ⛋ Insurance

        b-col(md="2")
</template>

<script>
  import modules from '../../assets/modules';
  export default {
    created() {
      this.$scrollspy().subscribe({
        next: (scrollTop) => this.scrollTop = scrollTop
      });

      this.coreModules = modules.filter(module => module.type === 'core');
      this.premiumModules = modules.filter(module => module.type === 'premium');
      this.adOnModules = modules.filter(module => module.type === 'ad-on');
    },
    data() {
      return {
        scrollTop: 0,
        coreModules: [],
        premiumModules: [],
        adOnModules: []
      }
    },
    destroyed() {
      this.$removeScrollspy();
    }
  }
</script>

<style scoped>
  .panel-2 {
    padding-top: 100px;
    padding-bottom: 600px;
    background-image: url('../../assets/images/v4/mycure-homepage-background-wood.png');
    background-repeat: repeat;
  }

  .paper {
    box-shadow: 0px 0px 40px 0px rgba(160,181,191,0.66);
    -webkit-box-shadow: 0px 0px 40px 0px rgba(160,181,191,0.66);
    -moz-box-shadow: 0px 0px 40px 0px rgba(160,181,191,0.66);
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #eff3f5;
    height: 800px;
  }

  .square {
    width: 10px;
    height: 10px;
    border: 2px solid black;
  }

  .pin {
    width: 200px;
    position: absolute;
    right: -1000px;
    top: -50px;
    -webkit-transition: right 500ms; /* Safari */
    transition: right 500ms;
  }

  .pin.animate {
    right: -100px;
  }
  
  .pot {
    width: 700px;
    position: absolute;
    left: -2000px;
    top: -100px;
    -webkit-transition: left 500ms; /* Safari */
    transition: left 500ms;
  }

  .pot.animate {
    left: -400px;
  }

  .notepad {
    width: 300px;
    position: absolute;
    right: -1000px;
    top: 200px;
    -webkit-transition: right 500ms; /* Safari */
    transition: right 500ms;
  }

  .notepad.animate {
    right: -350px;
  }
  
  .envelope {
    width: 450px;
    position: absolute;
    left: -1000px;
    bottom: -400px;
    -webkit-transition: left 500ms; /* Safari */
    transition: left 500ms;
  }

  .envelope.animate {
    left: -520px;
  }

  .peas {
    width: 380px;
    position: absolute;
    left: -1000px;
    bottom: -400px;
    -webkit-transition: left 500ms; /* Safari */
    transition: left 500ms;
  }

  .peas.animate {
    left: -150px;
  }
  
  .plate {
    width: 800px;
    position: absolute;
    right: -2000px;
    bottom: -550px;
    z-index: inherit;
    -webkit-transition: right 500ms; /* Safari */
    transition: right 500ms;
  }

  .plate.animate {
    right: -450px;
  }
</style>

