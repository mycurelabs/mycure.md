<template lang="pug">
  div.pa-5
    v-layout(row wrap justify-center)
      font.font-l.text-xs-center MYCURE works for Private and Multispecialty Clinics
    v-layout(row wrap justify-center).pt-5
      table
        tr
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3
            | Solo Practice
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            | Group Clinics
        tr
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            | Multi-specialty Clinics
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            | Dermatology Clinics
        tr
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            | Family Clinics
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3
            | Multi-branch Clinics
        tr
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            | Industrial Clinics
          td 
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            | Dental Clinics
    br
    br
    br
    v-layout(row wrap justify-center)
      em.font-s If you manage a clinic, then you need MCYCURE.
    br
    br
    v-layout(row wrap justify-center)
      v-btn(color="info" large) 
        strong.text-none We got a solution
    br
    v-layout(row wrap justify-center)
      em.font-xs Have a question? 
        a.font-mc-blue 
          strong(@click="toggleChat") Start a quick chat
      
       

  
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
  border-collapse: separate;
  border-spacing: 0;
  width: 40%;
}

table tr td {
  border-right: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  padding: 15px;
}
table tr td:first-child {
  border-left: 1px solid #f5f5f5;
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
