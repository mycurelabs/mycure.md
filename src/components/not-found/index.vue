<template lang="pug">
  div
    mc-navbar-home
    b-container
      b-row(style="height: 100vh;").align-items-center.justify-content-md-center
        b-col(xs="12" md="6")
          b-card.text-center
            p Ooops! 
              br 
              | Looks like the page your are looking for does not exist.
            h1 404 PAGE NOT FOUND
            b-btn(variant="primary" :to="{name: 'home'}") Go back to home
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
