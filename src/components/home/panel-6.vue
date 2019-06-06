<template lang="pug">
  div
    div(v-if="!$isMobile" style="padding-top: 100px")#panel6
      v-layout(row wrap justify-center)
        span.font-medium.text-xs-center.px-3 MYCURE works for Private and Multi-specialty Clinics
      br
      v-layout(row wrap justify-center).pt-5
        table
          tr
            td
              v-layout(row wrap center) 
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3
                span.font-small Solo Practice
            td
              v-layout(row wrap center) 
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
                span.font-small Group Clinics
          tr
            td 
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
                span.font-small Multi-specialty Clinics
            td 
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
                span.font-small Dermatology Clinics
          tr
            td 
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
                span.font-small Family Clinics
            td 
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3
                span.font-small Multi-branch Clinics
          tr
            td(style="border-bottom: 1px solid #bbb;")
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3 
                span.font-small Industrial Clinics
            td(style="border-bottom: 1px solid #bbb;")
              v-layout(row wrap center)
                img(src="../../assets/images/mycure-web-bullet-check.png").mr-3
                span.font-small Dental Clinics
      panel6a(style="padding-top: 100px")
    div(v-else)
</template>

<script>
  import panel6a from './panel-6a';

  export default {
    components: {
      panel6a
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
    border-bottom: 0px solid #bbb;
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

