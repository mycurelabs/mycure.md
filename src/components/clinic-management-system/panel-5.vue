<template lang="pug">
  div(style="padding-top: 100px").transparent#panel5
    v-layout(row wrap justify-center)
      font.font-medium.text-xs-center Designed for clinics of all shapes and sizes.
    br
    v-layout(row wrap justify-center).pt-5
      table
        tr
          td
            v-layout(row wrap center) 
              img(src="../../assets/images/mycure-web-bullet-check.png").mr-3
              span.font-small Multispecialty Clinics
          td 
            v-layout(row wrap center)
              img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
              span.font-small Skin &amp Aesthetic Clinics
        tr
          td 
            v-layout(row wrap center)
              img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
              span.font-small Outpatient Clinics
          td 
            v-layout(row wrap center)
              img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
              span.font-small Family Clinics
        tr
          td
            v-layout(row wrap center) 
              img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
              span.font-small Industrial Clinics
          td 
            v-layout(row wrap center)
              img(src="../../assets/images/mycure-web-bullet-check.png").mr-3
              span.font-small PME Clinics
    br
    br
    br
    v-layout(row wrap justify-center)
      em.font-small.text-xs-center Not too complicated, not too basic.
          br
          | MYCURE is just right for your clinic.
    br
    br
    v-layout(row wrap justify-center)
      v-btn(color="#18c551" large)
        //- a(style="text-decoration: none" href="https://calendly.com/mycure" target="_blank").white--text
        strong.text-none.white--text Sign Up Now
    br
    v-layout(row wrap justify-center)
      em.font-small Have a question? 
        a.font-mc-blue 
          strong(@click="toggleChat") Start a quick chat
    panel5a(style="padding-top: 150px")
    panel5b(style="padding-top: 150px")
</template>

<script>
  import panel5a from './panel-5a';
  import panel5b from './panel-5b';

  export default {
    components: {
      panel5a,
      panel5b
    },
    data () {
      return {
        //
      };
    },
    methods: {
      toggleChat () {
        window.$crisp.push(['do', 'chat:toggle']);
      }
    }
  };
</script>

<style scoped>
  #panel5 {
    background-image: url('../../assets/images/mycure-home-web-sky-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 45%;
  }

  table tr td {
    border-right: 1px solid #bbb;
    border-top: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    padding: 15px;
  }
  table tr td:first-child {
    border-left: 1px solid #bbb
  }

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }

  /* top-left border-radius */
  table tr:first-child td:first-child {
    border-top-left-radius: 6px;
  }

  /* top-right border-radius */
  table tr:first-child td:last-child {
    border-top-right-radius: 6px;
  }

  /* bottom-left border-radius */
  table tr:last-child td:first-child {
    border-bottom-left-radius: 6px;
  }

  /* bottom-right border-radius */
  table tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
  }
</style>
