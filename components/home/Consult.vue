<template lang="pug">
  div
    v-row
      v-col(cols="8").image
        v-img(
          :src="require('../../assets/images/home/consult-image-from-pexel.png')"
          width="100%"
          alt="Online Consultaion"
        )
      v-col(cols="4").d-flex.text-container
        div.ma-auto
          h2.font-50.white--text.text-right Think you #[br] have #[span.highlighted COVID?]
          a(href="/index").text-decoration-none.white--text.font-25.mt-2 consult a doctor now
            v-icon(color="white").ml-4 mdi-arrow-right

</template>

<style scoped>
.highlighted {
  text-decoration: underline;
  text-decoration-color: white;
}
.text-container {
  background-color: #C93B3B;
  background-size: cover;
}
.image {
  padding: 0;
}
.font-50 {
  font-size: 50px;
}
a{
  text-decoration: none !important;
}
</style>
