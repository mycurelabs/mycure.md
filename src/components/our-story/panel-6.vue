<template lang="pug">
  div.panel-3
    div.container
      div.row.row-container.align-items-center
        div.col-xs-12.col-md-8
          div.hr-blue
          br
          h1 Dale
          br
          p Dale runs a tech company that started in 2004. Among numerous IT projects, their team also made the first Filipino-themed game on iTunes and Googleplay called 
            a(href="http://www.butchukoy.com/" target="_blank") Sipa 
            | and a mobile photo diary meant to tell your story through photos called Pickld. He regularly shares experiences being a Mentor and Director at Founder Institute (Manila). He also started 
            a(href="http://www.mightyminds.org/" target="_blank") Mighty Minds, 
            | a nonprofit organization that helps kids finish school.
        div.col-xs-12.col-md-4
          img(width="100%" src="../../assets/images/v4/234x234px.png")
</template>

<script>
</script>

<style scoped>
  .panel-3 {
    min-height: 100vh;
    /* background-color: white; */
  }

  .container {
    /* padding-top: 50px; */
    /* padding-bottom: 50px; */
  }

  @media (min-width: 576px) {
    .container {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }

  @media (min-width: 768px) {
    .panel-2 {
      min-height: 100vh;
      background-color: white;
    }

    .container {
      padding-top: 0;
      padding-bottom: 0;
    }

    .row-container {
      height: 100vh;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>