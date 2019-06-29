<template lang="pug">
  div
    div(v-if="!$isMobile")#panel6.pt-5
      v-layout(row wrap justify-center)
        span.font-48.text-xs-center.px-3 MYCURE works for Private and Multispecialty Clinics
      br
      v-layout(row wrap justify-center).pt-5
        table
          tr
            td
              v-layout(row wrap center) 
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3
                span.font-18 Solo Practice
            td
              v-layout(row wrap center) 
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-18 Group Clinics
          tr
            td 
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-18 Multispecialty Clinics
            td 
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-18 Dermatology Clinics
          tr
            td 
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-18 Family Clinics
            td 
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3
                span.font-18 Multi-branch Clinics
          tr
            td
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3 
                span.font-18 Industrial Clinics
            td
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon").mr-3
                span.font-18 Dental Clinics
      testimonial.py-5
      finalWords.pb-5
      cards.pt-5
    div(v-else)
</template>

<script>
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
  #panel6 {
    background-image: url('../../assets/images/mycure-home-web-sky-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
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
    border-left: 1px solid #bbb
  }

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }

  tr:nth-child(odd) {
    background-color: white;
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

