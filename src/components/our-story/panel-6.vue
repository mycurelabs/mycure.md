<template lang="pug">
  div.panel-3
    pre(v-if="!$isProduction()").panel-number 6
    b-container
      b-row
        //- div.col-xs-12.col-md-10.offset-md-1
        div.col-xs-12.col-md-12
          b-row.row-container.align-items-center
            //- div.col-xs-12.col-md-5
              img(width="100%" src="../../assets/images/v4/mycure-our-story-8-codes-of-being.png")
            div.col-xs-12.col-md-12(style="text-align:center; line-height: 3;")
              center
                div.hr-blue
              br
              h5(style="color:gray;") To further go the extra mile, we practice the following codes:
              br
              h1 8 Codes of Being
              p 
                br
                | We are passionate, fun-loving, innovative people.
                br
                | We grow through continuous learning.
                br
                | We dare to challenge status quo and make things happen.
                br
                | We value diversity and respect everyone’s opinions.
                br
                | We practice honesty, transparency and highly value integrity.
                br
                | We truly care and deliver awesomeness to our customers.
                br
                | We commit to be grateful of life and remain humble in our successes.
                br
                | We promise to help each other and make this world a better place.
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
      /* background-color: white; */
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