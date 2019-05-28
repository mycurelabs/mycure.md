<template lang="pug">
  div.red.pt-5#panel5
    div(v-if="!$isMobile")
      center
        span.font-l MYCURE works for Private and Multispecialty Clinics
      v-layout(row wrap justify-center).pt-5
        table
          tr
            td 
              img(src="../../assets/images/mycure-icon-check.png").mr-3
              span.font-s Solo Practice
            td 
              img(src="../../assets/images/mycure-icon-check.png").mr-3 
              span.font-s Group Clinics
          tr
            td 
              img(src="../../assets/images/mycure-icon-check.png").mr-3 
              span.font-s Multi-specialty Clinics
            td 
              img(src="../../assets/images/mycure-icon-check.png").mr-3 
              span.font-s Dermatology Clinics
          tr
            td 
              img(src="../../assets/images/mycure-icon-check.png").mr-3 
              span.font-s Family Clinics
            td 
              img(src="../../assets/images/mycure-icon-check.png").mr-3
              span.font-s Multi-branch Clinics
          tr
            td 
              img(src="../../assets/images/mycure-icon-check.png").mr-3 
              span.font-s Industrial Clinics
            td 
              img(src="../../assets/images/mycure-icon-check.png").mr-3 
              span.font-s Dental Clinics
      panel6.transparent
      panel7
    div(v-else)
</template>

<script>  
  import panel6 from './panel-6';
  import panel7 from './panel-7';

  export default {
    components: {
      panel6,
      panel7
    },
    data () {
      return {
        //
      }
    }
  }
</script>


<style scoped>
  #panel5 {
    background-image: url('../../assets/images/mycure-home-web-sky-background.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  a:link {
    text-decoration: none;
  }

  .clinic-card {
    border-radius: 0 0 10px 10px;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 50%;
  }

  table tr td {
    border-right: 1px solid #bbb;
    border-top: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    padding: 15px;
  }

  table tr td:first-child {
    border-left: 1px solid #bbb;
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