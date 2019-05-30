<template lang="pug">
  div.white
    v-container
      v-layout(row wrap justify-center)
        v-flex(xs12 md12).text-xs-center
          div.hr-blue
          br
          h1.font-large.pb-3 About the Founders
          br
          br
        v-flex(xs12 md5).px-3.text-xs-center
          img(width="75%" src="../../assets/images/mycure-ourstory-dale.png")
          br
          br
          br
          p(style="text-align: justify").font-small
            strong Dale 
            | runs a tech company that started in 2004. Among numerous IT projects, their team also made the first Filipino-themed game on iTunes and Googleplay called 
            a(href="http://www.butchukoy.com/" target="_blank" style="text-decoration: none").font-mc-blue Sipa 
            | and a mobile photo diary meant to tell your story through photos called Pickld. He regularly shares experiences being a Mentor and Director at Founder Institute (Manila). He also started 
            a(href="http://www.mightyminds.org/" target="_blank" style="text-decoration: none").font-mc-blue Mighty Minds, 
            | a nonprofit organization that helps kids finish school.
        v-flex(xs12 md5).px-3.text-xs-center
          img(width="75%" src="../../assets/images/mycure-ourstory-joel.png")
          br
          br
          br
          p(style="text-align: justify").font-small
            strong Joel 
            | is a marketing executive and has been involved in the field for the last 20 years. His work involves a lot of travel and he loves to explore and talk to local folks during these times. Through these encounters, he was able to get a closer look at the plight of the Filipinos with regard to medical and health access. He believes that there are still a lot that can be done and that a good tech infrastructure can be a big boost in improving this sector.
</template>

<script>
  export default {
    data () {
      return {
        //
      };
    }  
  };
</script>

<style scoped>
  
</style>

