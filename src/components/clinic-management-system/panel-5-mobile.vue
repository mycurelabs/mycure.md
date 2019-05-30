<template lang="pug">
  div.pa-5.mc-light-grey
    v-container
      p.font-large.text-xs-center Designed for clinics of all shapes and sizes.
    v-layout(justify-center)
      table
        tr
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3
            span.font-medium Multispecialty Clinics
        tr
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-medium Skin &amp Aesthetic Clinics
        tr 
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-medium Outpatient Clinics
        tr 
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-medium Family Clinics
        tr 
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-medium Industrial Clinics
        tr 
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3
            span.font-medium PME Clinics
    br
    br
    br
    v-layout(row wrap justify-center)
      em.font-small.text-xs-center Not too complicated, 
          br  
          | not too basic.
          br
          | MYCURE is just right for your clinic.
    br
    br
    v-layout(row wrap justify-center)
      v-btn(color="info" large) 
        a(href="https://calendly.com/mycure" target="_blank").white--text
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
    border-collapse: collapse;
    border-radius:6px;
    width: 100%;
  }

  table tr {
    border: 1px solid #bbb;
    padding: 15px;
  }

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
  
  table tr:first-child {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  } 

  table tr:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  } 
  
  a {
    text-decoration: none;
  }
</style>
