<template lang="pug">
  div.py-5.mc-light-grey
    v-layout(row wrap justify-center)
      font.font-large.text-xs-center Designed for clinics of all shapes and sizes.
    v-layout(row wrap justify-center).pt-5
      table
        tr
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3
            span.font-small Multispecialty Clinics
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-small Skin &amp Aesthetic Clinics
        tr
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-small Outpatient Clinics
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-small Family Clinics
        tr
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-small Industrial Clinics
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3
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
      v-btn(color="info" large)
        a(style="text-decoration: none" href="https://calendly.com/mycure" target="_blank").white--text
          strong.text-none BOOK A DEMO
    br
    v-layout(row wrap justify-center)
      em.font-xs Have a question? 
        a.font-mc-blue 
          strong(@click="toggleChat") Start a quick chat
</template>

<script>
  export default {
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
  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 40%;
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
