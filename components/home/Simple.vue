<template lang="pug">
  //- USP
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? 'auto' : '520px' }"
    )
      v-col(cols="8" md="6" offset-md="1" :class="{ 'order-last' : !$isMobile }")
        //- Dummy
        v-card(
          width="100%"
          height="450px"
          color="primary"
          flat
        )
      v-col(cols="12" md="5" :class="{ 'text-center' : $isMobile }")
        h1(:class="{ 'font-xl mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }").lh-title Simple and powerful
        p.font-s.grey--text Say goodbye to paperwork and hello to an easy, compact database.
        p.font-xs.font-open-sans MYCURE is infused with advanced user experience that you can never compare with another medical software. Experience smooth transitions from one workflow
          | &nbsp;to another -- you probably won't even consider using pen and paper ever again.
        v-row(dense v-for="(service, key) in services" :key="key")
          v-col(col="4")
            nuxt-link(:to="{ name: service.route }").primary--text.service-link.font-xs.font-open-sans
              v-icon(small left color="primary") mdi-chevron-right
              span {{ service.text }}
</template>

<script>
export default {
  data () {
    this.services = [
      {
        text: 'For Physicians',
        route: 'doctors-clinics',
      },
      {
        text: 'For Clinics',
        route: 'clinics',
      },
    ];
    return {};
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}

.service-link {
  text-decoration: none;
}
</style>
