<template lang="pug">
  div.main-container
    v-container
      v-row(align="center")
        v-col(cols="12")
        v-col(cols="12")
          h1.font-72 Instantly Book #[br] Healthcare #[br] Services
          v-btn(
            large
            depressed
            color="success"
            rounded
          ) Get Started
</template>

<style scoped>
.main-container {
  background-image: url('../../assets/images/home/mycure-homepage-cover.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh
}
.font-72 {
  font-size: 72px;
}
</style>
