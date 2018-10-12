<template lang="pug">
  div.panel-3
    pre(v-if="!$isProduction()").panel-number 3
    b-container
      b-row.pb-5.pt-5
        div.col-xs-12.col-md-10.offset-md-1
          //- img(src="../../assets/images/v4/mycure-modules-coffee.png" :class="{'animate': scrollTop > 2025}").coffee --> Note: Joff gusto ko sana ilagay sa right side instead of sa left ~ Mark :D
          b-row.align-items-center
            b-col(xs="12" md="8" offset-md="2").text-center
              center
                div.hr-blue
              br
              h1 About the Founders
              br
              br
              br
              p It started with coffee — a late night coffee break between college friends, Dale and Joel, who just came from a wake. A realization set in: life is short and the fact that they were a couple of years away from turning 40 made it much shorter (this explains the coffee and not the beer).
              //- br
              //- br
              //- br
            b-col(xs="12" md="6").text-center
              //- br
              //- br
              //- center
                div.hr-blue
              //- br
              //- h2 Dale
              //- br
              //- br
              img(src="../../assets/images/v4/mycure-ourstory-dale.png")
              p(style="text-align: justify")
                strong Dale 
                | runs a tech company that started in 2004. Among numerous IT projects, their team also made the first Filipino-themed game on iTunes and Googleplay called 
                a(href="http://www.butchukoy.com/" target="_blank") Sipa 
                | and a mobile photo diary meant to tell your story through photos called Pickld. He regularly shares experiences being a Mentor and Director at Founder Institute (Manila). He also started 
                a(href="http://www.mightyminds.org/" target="_blank") Mighty Minds, 
                | a nonprofit organization that helps kids finish school.
            b-col(xs="12" md="6").text-center
              //- br
              //- br
              //- center
                div.hr-blue
              //- br
              //- h2 Joel
              //- br
              //- br
              img(src="../../assets/images/v4/mycure-ourstory-joel.png")
              p(style="text-align: justify")
                strong Joel 
                | is a marketing executive and has been involved in the field for the last 20 years. His work involves a lot of travel and he loves to explore and talk to local folks during these times. Through these encounters, he was able to get a closer look at the plight of the Filipinos with regard to medical and health access. He believes that there are still a lot that can be done and that a good tech infrastructure can be a big boost in improving this sector.
</template>

<script>
  export default {
    created() {
      this.$scrollspy().subscribe({
        next: (scrollTop) => this.scrollTop = scrollTop
      });
    },
    data() {
      return {
        scrollTop: 0
      }
    },
    destroyed() {
      this.$removeScrollspy();
    }
  }
</script>

<style scoped>
  .panel-3 {
    /* min-height: 100vh; */
    background-color: white;
  }

  .container {
    /* padding-top: 50px; */
    /* padding-bottom: 50px; */
  }

  .coffee {
    display: none;
  }

  @media (min-width: 576px) {
    .container {
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .coffee {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .panel-2 {
      /* min-height: 100vh; */
      background-color: white;
    }

    .container {
      padding-top: 0;
      padding-bottom: 0;
    }

    .row-container {
      height: 100vh;
    }

    .coffee {
      width: 300px;
      display: inline;
      position: absolute;
      left: -1000px;
      /* top: -200px; */
      top: 350px;
      -webkit-transition: left 500ms;
      transition: left 500ms;
    }

    .coffee.animate {
      left: -280px;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>