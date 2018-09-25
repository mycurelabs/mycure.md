<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 6
    div.panel-6.pt-5.pb-5
      div.container
        div.row.align-items-center
          div.col-xs-12.col-md-12.text-center
            center
              div.hr-blue
            br
            h1 Heart-crafted Customer Care
            p We’re here with you throughout the transition process because more often than not, it’s hard to learn new technology!
            p We guarantee that we will meet your needs; if we cannot, then we will meet you.
            br
            div.row.justify-content-center
              div.col-xs-12.col-md-3.pl-3.pr-3
                img(width="100" src="../../assets/images/v4/mycure-homepage-image-user-friendly-icon.png").mb-3
                div.text-center
                  h6 User-friendly interface
                  p Being tech-savvy is not a requirement, Just tap, type, and go!
              div.col-xs-12.col-md-3.pl-3.pr-3
                img(width="100" src="../../assets/images/v4/mycure-homepage-image-customizable-icon.png").mb-3
                br
                div.text-center
                  strong Customizable Content
                  p You might ask if we can add this or change that. The answer is usually yes.
              div.col-xs-12.col-md-3.pl-3.pr-3
                img(width="100" src="../../assets/images/v4/mycure-homepage-image-user-hands-on-training-icon.png").mb-3
                br
                div.text-center
                  strong Hands-on Training
                  p We will be there with you as you learn a new skill and transform your practice.
              div.col-xs-12.col-md-3.pl-3.pr-3
                img(width="100" src="../../assets/images/v4/mycure-homepage-image-support-icon.png").mb-3
                br
                div.text-center
                  strong Responsive Support Team
                  p With a bit of technology and time management, we found a way to serve you faster.
            
</template>

<script>
</script>

<style scoped>
  .panel-6 {
    /* height: 100vh; */
    background-color: white;
  }
</style>