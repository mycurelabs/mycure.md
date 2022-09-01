<template lang="pug">
v-app#app
  v-container(fluid style="height: 100vh")
    v-row(style="height: 100vh" align="center" justify="center")
      v-col(
        v-if="!$isMobile && !hideLeftPanel"
        style="height: 100vh"
        cols="12"
        md="6"
      ).primary
      v-col(cols="12" md="6" lg="6")
        nuxt
</template>

<script>
export default {
  computed: {
    hideLeftPanel () {
      const routeName = [
        'register-otp',
      ];
      return routeName.includes(this.$route.name);
    },
  },
};
</script>
