<template lang="pug">
  div
    div.py-5
      v-container
        p.font-l.text-xs-center MYCURE works for Private and Multi-specialty Clinics
      v-layout(justify-center).px-5
        table
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3
                span.font-m Solo Practice
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
                span.font-m Group Clinics
          tr 
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
                span.font-m Multi-specialty Clinics
          tr 
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
                span.font-m Dermatology Clinics
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
                span.font-m Family Clinics
          tr 
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3
                span.font-m Multi-branch Clinics
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
                span.font-m Industrial Clinics
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
                span.font-m Dental Clinics
</template>

<script scoped>
  export default {
    data () {
      return {
        //
      };
    }
  };
</script>

<style scoped>
  a:link {
    text-decoration: none;
  }

  .clinic-card {
    border-radius: 0 0 10px 10px;
  }

  table {
    border-collapse: collapse;
    border-radius: 6px;
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
</style>

