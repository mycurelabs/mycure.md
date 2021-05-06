<template lang="pug">
  //- USP
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? 'auto' : '70vh' }"
    )
      v-col(cols="8" md="5" offset-md="1" :class="{ 'order-last' : !$isMobile }")
        picture-source(
          image="MYCURE-virtual-clinic-healthcare-practice-online-features-B-01-emr"
          image-file-extension=".webp"
          image-alt="Patient List"
          custom-path="features/"
        )
      v-col(cols="11" md="4" :class="{ 'text-center' : $isMobile }")
        h1(:class="{ 'font-l' : !$isMobile, 'font-m' : $isMobile }").white--text.mb-4 Simple and powerful
        p(:class="{ 'font-s' : !$isMobile, 'font-xs' : $isMobile }").white--text Say goodbye to paperwork and hello to an easy, compact database.
        p.font-xs.font-open-sans.white--text MYCURE is infused with advanced user experience that you can never compare with another medical software. Experience smooth transitions from one workflow
          | &nbsp;to another — you probably won't even consider using pen and paper ever again.
        v-row(dense v-for="(service, key) in services" :key="key")
          v-col(col="4")
            v-hover(
              v-slot="{ hover }"
              open-delay="100"
            )
              mc-btn(
                small
                depressed
                :outlined="!hover"
                :to="{ name: service.route }"
                color="white"
              ).text-none.info--text
                v-icon(small left) {{ service.icon }}
                strong {{ service.text }}
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  data () {
    this.services = [
      {
        text: 'For Physicians',
        route: 'doctors-clinics',
        icon: 'mdi-stethoscope',
        color: 'primary',
      },
      {
        text: 'For Clinics',
        route: 'clinics',
        icon: 'mdi-hospital-marker',
        color: 'info',
      },
      {
        text: 'For Diagnostics',
        route: 'diagnostics',
        icon: 'mdi-flask',
        color: 'error',
      },
      // - TODO: Bring back when page is visible
      // {
      //   text: 'For Hospitals',
      //   route: 'hospitals',
      // },
    ];
    return {};
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 50px;
}

.product-btn {
  width: 175px;
}
</style>
