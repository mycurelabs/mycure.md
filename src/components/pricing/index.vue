<template lang="pug">
  div
    panel-1#panel-1
    panel-2#panel-2
    panel-3#panel-3
    //- panel-4#panel-4
    panel-5#panel-5
    // panel-6
    // panel-7
    // join-us
    mc-footer
      
</template>

<script>
  import panel1 from './panel-1';
  import panel2 from './panel-2';
  import panel3 from './panel-3';
  import panel4 from './panel-4';
  import panel5 from './panel-5';
  // import panel6 from './panel-6';
  // import panel7 from './panel-7';
  // import joinUs from '../home/panel-9';
  import mcFooter from '../commons/mc-footer';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      'panel-1': panel1,
      'panel-2': panel2,
      'panel-3': panel3,
      'panel-4': panel4,
      'panel-5': panel5,
      // 'panel-6': panel6,
      // 'panel-7': panel7,
      // joinUs,
      mcFooter
    },
    created() { 
      this.scroll(this.$route.query.id, 500, 500);
    },
    methods: {
      scroll(id, timeout = 1000, duration = 500) {
        setTimeout(() => {
          VueScrollTo.scrollTo(`#${id}`, duration, { easing: 'ease' } );
        }, timeout);
      }
    },
    watch: {
      $route(to, from) {
        const { query } = to;
        this.scroll(query.id, 0, 500);
      }
    }
  }
</script>
