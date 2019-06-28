<template lang="pug">
  div
    div.pt-4#panel6mobile
      v-container
        p.font-40.text-xs-center MYCURE works for Private and Multispecialty Clinics
      v-layout(justify-center).px-5
        table
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3
                span.font-18 Solo Practice
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-18 Group Clinics
          tr 
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-18 Multispecialty Clinics
          tr 
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-18 Dermatology Clinics
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-18 Family Clinics
          tr 
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3
                span.font-18 Multi-branch Clinics
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-18 Industrial Clinics
          tr
            div.pl-3.py-3
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-18 Dental Clinics
      testimonial.pt-4
      finalWords.pt-4
      cards.pt-4
</template>

<script scoped>
  import testimonial from './testimonial';
  import finalWords from './final-words';
  import cards from './cards';

  export default {
    components: {
      testimonial,
      finalWords,
      cards
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

