<template lang="pug">
  div
    v-toolbar(
      flat
      color="rgba(52, 58, 64, 1)"
    )
      a(href="/")    
        img(src="../../assets/images/mycure-logo.svg" height="25")
      v-spacer
      a(href="https://www.facebook.com/mycure.md" target="_blank")
        img(src="../../assets/images/mycure-homepage-wireframe-icon-fb.png" height="25" href="https://google.com").px-2
      a(href="https://www.youtube.com/channel/UCfQ5QBdFh6f9Tuj2tWkRmvg" target="_blank")
        img(src="../../assets/images/mycure-homepage-wireframe-icon-ytub-e.png" height="25").px-2
      a(href="https://www.instagram.com/mycure.md/" target="_blank")
        img(src="../../assets/images/mycure-homepage-wireframe-icon-ig.png" height="25").px-2
      a(href="https://www.linkedin.com/company/mycure" target="_blank")
        img(src="../../assets/images/mycure-homepage-wireframe-icon-linkedin.png" height="25").px-2
      a(href="https://twitter.com/mycureapp" target="_blank")
        img(src="../../assets/images/mycure-homepage-wireframe-icon-twitter.png" height="25").px-2

</template>

<script>
export default {
  data () {
    return {
    };
  }
};
</script>

<style scoped>

.logo-img {
  height: 20%;
}


</style>

