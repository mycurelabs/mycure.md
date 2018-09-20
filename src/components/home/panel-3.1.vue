<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 3
    div.panel-3.pt-5
      b-container
        b-row.align-items-center
          b-col(xs="12" md="12").text-center
            b-row.wrap.align-items-center.justify-content-md-center
              b-col(xs="12" md="9").pb-5
                h1 Syncs Online, WOrks Offline.
                br
                p MYCURE has finally solved the holy grail of combining online and offline technology. Now, you can enjoy the best of both worlds - reliability of and in-house server and affordability of the cloud.
                p Using our proprietary Syncbase technology, MYCURE works in your local network with multiple devices even if the internet goes down and just automatically synchronizes data back in the cloud once online.
                img(src="../../assets/images/v4/mycure-website-animated-syncbase-horizontal.gif")
   
</template>

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
    background-color: white;
  }
</style>