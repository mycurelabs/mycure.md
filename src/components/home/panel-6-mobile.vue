<template lang="pug">
  div
    div.pt-4#panel6mobile
      v-container
        p.font-l.text-xs-center MYCURE works for Private and Multispecialty Clinics
      v-layout(justify-center).px-5
        table
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3
                span.font-m Solo Practice
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-m Group Clinics
          tr 
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-m Multispecialty Clinics
          tr 
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-m Dermatology Clinics
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-m Family Clinics
          tr 
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3
                span.font-m Multi-branch Clinics
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-m Industrial Clinics
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-m Dental Clinics
      panel7.pt-4
      panel8.pt-4
      panel9.pt-4
</template>

<script scoped>
  import panel7 from './panel-7';
  import panel8 from './panel-8';
  import panel9 from './panel-9';

  export default {
    components: {
      panel7,
      panel8,
      panel9
    },
    data () {
      return {
        // 
      };
    }
  };
</script>

<style scoped>
  #panel6mobile {
    background-image: url('../../assets/images/mycure-home-web-sky-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }

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
  
  tr:nth-child(odd) {
    background-color: white;
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

