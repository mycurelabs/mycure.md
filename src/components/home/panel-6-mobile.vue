<template lang="pug"> 
  div.pa-5
    v-container
      p.font-l.text-xs-center MYCURE works for Private and Multispecialty Clinics
    v-layout(justify-center)
      table
        tr
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3
            span.font-m Solo Practice
        tr
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-m Group Clinics
        tr 
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-m Multi-specialty Clinics
        tr 
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-m Dermatology Clinics
        tr
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-m Family Clinics
        tr 
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3
            span.font-m Multi-branch Clinics
        tr
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-m Industrial Clinics
        tr
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-m Dental Clinics
</template>

<script>
  export default {
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
