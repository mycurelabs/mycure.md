<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(
        hide-btn
        :disable-parent-padding="disableParentPadding"
      )
        v-card(width="100%" :class="$isMobile ? 'pa-3' : 'pa-10' ").card-bg.rounded-xl.pt-16
          v-card-text.white--text
            v-row(justify="center")
              span.font-weight-semibold.mc-content-set-1 MYCURE helps medical practicioners anywhere they are
            v-row(justify="center").my-3
              span.font-weight-semibold.mc-content-set-1  --------
            v-row(align="center")
              v-col(cols="12" sm="6" justify="center")
                v-row(align="center")
                  v-col(cols="3")
                    //- v-icon(large) mdi-circle
                    //- picture-source(
                    //-   custom-path="/"
                    //-   image-file-extension=".png"
                    //-   image-alt="placeholder icon"
                    //-   :image="bundle.image"
                    //-   image-width="300"
                    //-   image-height="300"
                    //- )
                  v-col(justify="center")
                    h1.font-weight-semibold.mc-content-set-1 Dr. Gay Cadorna-Toledo
                    h1.font-weight-light.mc-content-set-2 MYCURE User since 2017
              v-col(cols="12" sm="6")
                span.font-weight-light.mc-content-set-1 “It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far. MYCURE provides a well organized patient data profiling with customized options for personalized encoding and with integration of lab tests, immunizations as well as growth charts that are very important for us as pediatricians for growth monitoring of our little ones. It is very convenient to use, simple, adaptable and user friendly even to my secretary.”
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericPanel,
    PictureSource,
  },
};
</script>

<style scoped>
.card-bg{
  background: linear-gradient(208.18deg, #04B1E7 9.05%, #0098CC 76.74%);
}
</style>
