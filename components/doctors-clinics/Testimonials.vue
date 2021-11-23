<template lang="pug">
  v-container
    v-row(justify="center").py-16
      generic-panel(
        hide-btn
        disable-parent-padding
      )
        v-col(cols="12").pa-0
          v-row(justify="center")
            v-col(cols="12" sm="9").text-center
              h4.mc-h7.font-open-sans TESTIMONIALS
              span.font-weight-semibold.mc-h2 {{ title || (isBooking ? 'What Our Clients are Saying' : 'What do our Doctors say?') }}
          v-row(justify="center").mt-5
            //- hr(size="8" color="#0099cc" width="10%")
          v-row(justify="center").black--text
            v-col(cols="12" sm="6")
              v-card(elevation="2" :class="$isMobile ? 'pa-1' : 'pa-5'").rounded-xl
                v-card-text
                  v-col(cols="12")
                    v-icon(:large="$vuetify.breakpoint.width > 1024" :x-large="$isWideScreen" color="primary").mb-3 {{ mdiFormatQuoteOpen }}
                    br
                    span.font-weight-semibold.mc-list-b3.highlight MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are.
                    span.font-weight-light.mc-list-b3 &nbsp;It enables them also to prescribe and countercheck their prescriptions, issue medical certificate, communicate with other doctors for referrals. Patients could check and follow their medical progress, check their medications and look for doctors anywhere and set up appointments. I look forward to enjoying this app to improve my practice.
                    v-row(align="center").pt-4
                      //- v-col(cols="3")
                        //- v-icon(large) mdi-circle
                        //- picture-source(
                        //-   custom-path="/"
                        //-   image-file-extension=".png"
                        //-   image-alt="placeholder icon"
                        //-   :image="bundle.image"
                        //-   image-width="300"
                        //-   image-height="300"
                        //- )
                      v-col
                        h1.font-weight-semibold.mc-list-b3.highlight Dr. Nelson S. Abelardo
                        h1.font-weight-light.mc-list-b3.highlight Cardiologist
            //- v-col(v-if="!isBooking && $vuetify.breakpoint.width > 1023" cols="1")
            v-col(cols="12" sm="6")
              v-card(elevation="2" :class="$isMobile ? 'pa-1' : 'pa-5'").rounded-xl
                v-card-text
                  v-col(cols="12")
                    v-icon(:large="$vuetify.breakpoint.width > 1024" :x-large="$isWideScreen" color="primary").mb-3 {{ mdiFormatQuoteOpen }}
                    br
                    span.font-weight-light.mc-list-b3 It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far.
                    span.font-weight-semibold.mc-list-b3.highlight &nbsp;MYCURE provides a well organized patient data profiling with customized options
                    span.font-weight-light.mc-list-b3 &nbsp;for personalized encoding and with integration of lab tests, immunizations as well as growth charts that are very important for us as pediatricians for growth monitoring of our little ones. It is very convenient to use, simple, adaptable and user friendly even to my secretary.
                    v-row(align="center").pt-4
                      //- v-col(cols="3")
                        //- v-icon(large) mdi-circle
                        //- picture-source(
                        //-   custom-path="/"
                        //-   image-file-extension=".png"
                        //-   image-alt="placeholder icon"
                        //-   :image="bundle.image"
                        //-   image-width="300"
                        //-   image-height="300"
                        //- )
                      v-col
                        h1.font-weight-semibold.mc-list-b3.highlight Dr. Gay Cadorna-Toledo
                        h1.font-weight-light.mc-list-b3.highlight Pediatrician
</template>

<script>
import { mdiFormatQuoteOpen } from '@mdi/js';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericPanel,
    PictureSource,
  },
  props: {
    isBooking: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
  },
  data () {
    return {
      mdiFormatQuoteOpen,
    };
  },
};
</script>

<style scoped>
.card-bg{
  background: linear-gradient(208.18deg, #04B1E7 9.05%, #0098CC 76.74%);
}
.highlight{
  color: #252B42;
}
</style>
