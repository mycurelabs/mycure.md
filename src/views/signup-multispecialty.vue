<template lang="pug">
  v-app
    v-content
      v-container(
        fluid fill-height
      ).bg.white
        router-view
</template>

<style scoped>
.bg {
  background-image: url('../assets/images/mycure-signup-062618-footer-BG.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom center;
  /* background-size: 250px, contain; */
  /* background-position: bottom right 50px, bottom; */
}
</style>