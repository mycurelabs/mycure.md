<template lang="pug">
  div(:class="{'main-container' : !$isMobile, 'mobile-container' : $isMobile}")
    v-container
      v-row(align="center" justify="center")
        v-col(cols="12")
          search-bar(v-if="!$isMobile").mt-8
        v-col.mt-8
          h1(:class="{ 'font-72' : !$isMobile }") Instantly Book #[br] Healthcare #[br] Services
          v-btn(
            large
            depressed
            color="success"
            rounded
          ).mt-2 #[b Get Started]
</template>

<script>
import SearchBar from '~/components/commons/SearchBar';
export default {
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
.main-container {
  background-image: url('../../assets/images/home/mycure-homepage-cover-01-b.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
}
.mobile-container{
  background-image: url('../../assets/images/home/mycure-homepage-cover-01-mobile.png');
  background-position: center;
  width: 100%;
  height: 100vh;
}
.font-72 {
  font-size: 72px;
}
</style>
