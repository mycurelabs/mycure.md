<template lang="pug">
  div
    div(v-if="!$isMobile" style="padding: 0 6% 0 6%;").white.py-5
      v-container
        v-layout(row justify-center)
          span.font-medium It's complete - everything your clinic needs.
      div.py-5
        center
          img(style="max-width: 90%;" src="../../assets/images/mycure-home-web-complete-clinic-management-system-diagram.png")
    div(v-else)
      v-container.pt-5
        v-layout(row justify-center)
          span.font-l.lh-title.text-xs-center It's complete - everything your clinic needs.
        br
        v-layout(row justify-center)
          div
            //- https://ssense.github.io/vue-carousel/
            carousel(
              :per-page="1" 
              :autoplay="true"
              :loop="true"
              :navigationEnabled="true"
              :adjustableHeight="true"
              paginationActiveColor="grey"
              paginationColor="lightgrey"
              :navigationClickTargetSize="50"
              navigationNextLabel=" "
              navigationPrevLabel=" "
            )
              slide(data-index="1").text-xs-center
                img(src="../../assets/images/mycure-web-clinic-room-01.png" width="100%")
              slide(data-index="2").text-xs-center
                img(src="../../assets/images/mycure-web-clinic-room-02.png" width="100%")
              slide(data-index="3").text-xs-center
                img(src="../../assets/images/mycure-web-clinic-room-03.png" width="100%")
              slide(data-index="4").text-xs-center
                img(src="../../assets/images/mycure-web-clinic-room-04.png" width="100%")
              slide(data-index="5").text-xs-center
                img(src="../../assets/images/mycure-web-clinic-room-05.png" width="100%")
              slide(data-index="6").text-xs-center
                img(src="../../assets/images/mycure-web-clinic-room-06.png" width="100%")

</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    },
    methods: {
      toggleChat () {
        window.$crisp.push(['do', 'chat:toggle']);
      }
    }
  };
</script>

<style scoped>

</style>