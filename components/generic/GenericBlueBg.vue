<template lang="pug">
  div.mx-n3.main-container
    div
      img(
        src="~/assets/images/commons/blue-gradient-bg.png"
        alt="blue gradient background"
        :style="backgroundStyle"
      )
      img(
        src="~/assets/images/commons/dots-left.png"
        alt="dots gradient"
      ).left-center
      img(
        src="~/assets/images/commons/dots-right.png"
        alt="dots gradient"
      ).right-center
    div.content
      slot(name="panel")
</template>

<script>
export default {
  computed: {
    backgroundStyle () {
      return {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: '1',
        objectFit: 'cover',
      };
    },
  },
};
</script>

<style scoped>
.main-container {
  position: relative;
}
.content {
  position: relative;
  z-index: 3;
}
.left-center {
  position: absolute;
  top: 10%;
  left: 0;
  z-index: 2;
}
.right-center {
  position: absolute;
  bottom: 10%;
  right: 0;
  z-index: 2;
}
</style>
