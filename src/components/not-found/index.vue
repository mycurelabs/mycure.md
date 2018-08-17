<template lang="pug">
  b-container
    b-row(style="height: 100vh;").align-items-center.justify-content-md-center
      b-col(xs="12" md="6")
        b-card.text-center
          p Ooops! 
            br 
            | Looks like the page your are looking for does not exist.
          h1 404 PAGE NOT FOUND
          b-btn(variant="primary" :to="{name: 'home'}") Go back to home
</template>
