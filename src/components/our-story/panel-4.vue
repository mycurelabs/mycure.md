<template lang="pug">
  div.panel-3
    pre(v-if="!$isProduction()").panel-number 4
    b-container
      b-row
        //- div.col-xs-12.col-md-10.offset-md-1
        div.col-xs-12.col-md-11.offset-md-1
          b-row.row-container.align-items-center
            div.col-xs-12.col-md-4
              img(width="100%" src="../../assets/images/v4/mycure-ourstory-team.png")
            div.col-xs-12.col-md-8
              div.hr-blue
              br
              h1 Our Purpose
              br
              p(style="text-align: justify") We believe that even the small things can make a big difference. And that extra mile of care we give for humanity goes a long way and creates a lasting impact.  

              p(style="text-align: justify") Thus, we honor and support people who care the extra mile. They are the unsung heroes, the doctors, the mothers and the like who work day and night to make things work. These are the people who are fully committed, meticulously organized, and incredibly dedicated to what they do and what they believe in.

              p(style="text-align: justify") While they see themselves just doing their everyday jobs, we see people that create a dent in humanity. They are truly the heroes that make this world a better place.

              p(style="text-align: justify") MYCURE commits to design and build amazing tech tools and products specifically for them. These would help and enable these heroes to make their jobs easier and more efficient. They are our inspiration, the reason of our being, our existence.

              p(style="text-align: justify") Building these awesome apps is our mission, building them with love and passion is our extra mile.
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