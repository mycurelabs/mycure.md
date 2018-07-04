<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 2
    div.panel-2.pt-5
      b-container
        b-row
          div.col-xs-12.col-md-10.offset-md-1
            b-row.row-container.align-items-center
              div.col-xs-12.col-md-12.text-center
                center
                  div.hr-blue
                br
                h1 MYCURE starts and ends with 
                  br
                  | real people and real stories.
                br
              div.col-xs-12.col-md-4
                img(width="100%" src="../../assets/images/v4/mycure-ourstory-paulette.png")
              div.col-xs-12.col-md-8
                p Meet Paulette, a young widow at 30 years old with two kids (4 yo and 6 yo) in her care. Despite limited resources, she managed to give her kids a good foundation. Paulette is a cancer warrior and survivor. For about a decade and a half now, her life was all about doctor's visits, regular checkups, and staying healthy. 
                  strong Years of medical files 
                  | were definitely taking up a lot of space in their home and her daily life. As she was shuttling between Guam (where she is based) and the Philippines, carrying medical files to different doctors and pharmacies was becoming cumbersome and costly. Replenishing medications became a guessing game. Monitoring her own health sometimes affected her health too.
                p Our founder, Dale, was witness to all of this. Paulette is Dale’s mother.
            img(src="../../assets/images/v4/mycure-modules-bread.png" :class="{'animate': scrollTop > 550}").bread
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
  .panel-2 {
    min-height: 100vh;
    /* background-color: white; */
  }

  .container {
    /* padding-top: 50px; */
    /* padding-bottom: 50px; */
  }

  .bread {
    display: none;
  }

  @media (min-width: 576px) {
    .container {
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .bread {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .panel-2 {
      min-height: 100vh;
      /* background-color: white; */
    }

    .container {
      padding-top: 0;
      padding-bottom: 0;
    }

    .row-container {
      height: 100vh;
    }

    .bread {
      display: inline;
      position: absolute;
      left: -1000px;
      bottom: -200px;
      -webkit-transition: left 500ms;
      transition: left 500ms;
    }

    .bread.animate {
      left: -300px;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>