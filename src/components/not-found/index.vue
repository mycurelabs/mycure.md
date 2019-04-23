<template lang="pug">
  div
    mc-navbar-home
    b-container.py-5
      b-row(style="height: 100vh;").align-items-center.justify-content-md-center.text-center
        b-col(xs="12" md="12")
          img(width="50%" src="../../assets/images/v4/mycure-online-offline-web-app-cms-emr-error-404-image-blue.png").not-found-pic
          br
          br
          h5 Oh snap!
          span There isn't any page like that in this site. 
          br
          span Please check out our other pages instead.
          // b-btn(variant="primary" :to="{name: 'home'}") Go back to home
    mc-footer
  
    
</template>

<script>
import mcNavbarHome from '../commons/mc-navbar-home';
import mcCookiePrompt from '../commons/mc-cookie-prompt';
import mcFooter from '../commons/mc-footer';

export default {
  components: {
    mcNavbarHome,
    mcCookiePrompt,
    mcFooter
  }
}

</script>
