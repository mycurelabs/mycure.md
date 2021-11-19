<template lang="pug">
  v-container
    v-row(justify="center").py-16
      generic-panel(
        hide-btn
        disable-parent-padding
      )
        v-col(cols="12").pa-0
          v-row(justify="center")
            v-col(cols="12").text-center
              h4.mc-h7.font-open-sans TESTIMONIALS
              span.font-weight-semibold.mc-h2 {{ isBooking ? 'What Our Clients are Saying' : 'What do our Doctors say?' }}
          v-row(justify="center").mt-5
            //- hr(size="8" color="#0099cc" width="10%")
          v-row(justify="center").black--text
            v-col(cols="12" sm="6")
              v-card(elevation="2" :class="$isMobile ? 'pa-1' : 'pa-5'").rounded-xl
                v-card-text
                  v-col(cols="12")
                    v-icon(:large="$vuetify.breakpoint.width > 1024" :x-large="$isWideScreen" color="primary").mb-3 {{ mdiFormatQuoteOpen }}
                    br
                    span.font-weight-light.mc-b5.font-open-sans MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are. It enables them also to prescribe and countercheck their prescriptions, issue medical certificate, communicate with other doctors for referrals. Patients could check and follow their medical progress, check their medications and look for doctors anywhere and set up appointments.
                    span.font-weight-semibold.mc-b5.font-open-sans.black--text &nbsp;I look forward to enjoying this app to improve my practice.
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
                        h1.font-weight-semibold.mc-metatitle-set-1 Dr. Nelson S. Abelardo
                        h1.font-weight-light.mc-metatitle-set-1 Cardiologist
            //- v-col(v-if="!isBooking && $vuetify.breakpoint.width > 1023" cols="1")
            v-col(cols="12" sm="6")
              v-card(elevation="2" :class="$isMobile ? 'pa-1' : 'pa-5'").rounded-xl
                v-card-text
                  v-col(cols="12")
                    v-icon(:large="$vuetify.breakpoint.width > 1024" :x-large="$isWideScreen" color="primary").mb-3 {{ mdiFormatQuoteOpen }}
                    br
                    span.font-weight-light.mc-metatitle-set-1.font-open-sans It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far. MYCURE provides a well organized patient data profiling with customized options for personalized encoding and with integration of lab tests, immunizations as well as growth charts that are very important for us as pediatricians for growth monitoring of our little ones.
                    span.font-weight-semibold.mc-metatitle-set-1.font-open-sans.black--text &nbsp;It is very convenient to use, simple, adaptable and user friendly even to my secretary.
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
                        h1.font-weight-semibold.mc-metatitle-set-1 Dr. Gay Cadorna-Toledo
                        h1.font-weight-light.mc-metatitle-set-1 Pediatrician
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
</style>
