<template lang="pug">
  div
    div(v-if="!$isMobile").white
      v-container(align-center fill-height).px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center).uspLeft
            p.lh-title.font-45 MYCURE cares for people who care for people
          v-flex(xs12 md6 align-self-center).uspRight
            img(width="90%" src="../../assets/images/mycure-csr-web-banner-first-panel-community-doctors-and-kids.png" alt="Group Clinics doctors").right
    div(v-else).white
      v-container.pt-5
        v-layout(column justify-center)
            p.font-40.text-xs-center.lh-title MYCURE cares for people who care for people
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-csr-web-banner-first-panel-community-doctors-and-kids.png" alt="Group Clinics doctors").pb-5
</template>

<script>
  export default {
    data () {
      return {
        showVid: false,
        signInURL: process.env.VUE_APP_SIGNIN_URL
      };
    },
  };
</script>

<style scoped>
.uspBtn {
  height: 70px;
}
</style>
