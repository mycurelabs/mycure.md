<template lang="pug">
  v-col(:style="backgroundStyle").main-container
    v-container.pa-0
      v-row(align="center" justify="center").content-container
        v-col(md="6").text-center
          h1.white--text Consult online with {{ name }} healthcare providers today
          v-btn(
            depressed
            block
            rounded
            @click="onSelectBrgy"
          ).mt-5 Select your Barangay
</template>

<script>
export default {
  props: {
    backgroundPic: {
      type: String,
      default: () => require('~/assets/images/mycure-homepage-usp-cover.png'),
    },
    name: {
      type: String,
      default: 'MyCure LGU',
    },
  },
  computed: {
    backgroundStyle () {
      const overlay = 'linear-gradient(270deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))';
      return { 'background-image': `${overlay}, url(${this.backgroundPic})` };
    },
  },
  methods: {
    onSelectBrgy () {
      this.$emit('selectBrgy', true);
    },
  },
};
</script>

<style scoped>
.main-container {
  margin-top: 70px;
  padding: 0;
  width: 100%;
  height: 425px;
  background-size: cover;
  background-position: center;
}

.content-container {
  height: 425px;
}
</style>
