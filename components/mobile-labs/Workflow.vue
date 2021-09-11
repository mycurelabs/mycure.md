<template lang="pug">
  v-container
    v-row(justify="center").py-16
      v-col(cols="12" md="6").text-center
        h1(:class="[...titleClasses, {'mx-n1': $isMobile}]").mb-5 Seamless workflows anywhere you go.
        v-row(justify="center")
          v-col(cols="12" md="10")
            p(:class="descriptionClasses").mb-10 Value everyone's time more effectively. Handle location-based registrations like a breeze.
        //- signup-button(
        //-   depressed
        //-   rounded
        //-   :x-large="$isWideScreen"
        //-   :large="!$isWideScreen"
        //-   :class="btnClasses"
        //-   color="success"
        //- ).text-none
        //-   span Start Free
      v-col(cols="12")
        v-row(justify="center")
          template(v-if="!$isMobile")
            v-col(cols="12").text-center
              picture-source(
                custom-path="diagnostics/mobile-labs/"
                image="Mobile Labs Problem Statement"
                image-alt="Mobile labs workflow"
                image-file-extension=".png"
                :image-width="$isRegularScreen ? '945px' : '1445px'"
                :image-height="$isRegularScreen ? '174.35px' : '266.6px'"
              )
          template(v-else)
            v-col(cols="12" v-for="(item, key) in items" :key="key").text-center
                picture-source(
                  v-if="item.icon"
                  custom-path="diagnostics/mobile-labs/"
                  :image="item.icon"
                  :image-alt="item.title"
                  image-file-extension=".webp"
                  image-width="115px"
                  image-height="94.19px"
                )
                br
                h3.font-xs.font-open-sans.grey--text {{ item.title }}
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';
export default {
  components: {
    GenericPanel,
    PictureSource,
    SignupButton,
  },
  data () {
    this.items = [
      {
        title: 'Book Appointments',
        icon: '1-Appointments Mobile',
      },
      {
        title: 'Register via Kiosk',
        icon: '2-Register Mobile',
      },
      {
        title: 'Specimen Collection Queueing',
        icon: '3-Queueing Mobile',
      },
      {
        title: 'Online and Printed Results',
        icon: '4-Results Mobile',
      },
    ];
    this.titleClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.btnClasses = ['mc-button-set-1'];
    return {
      videoDialog: false,
    };
  },
};
</script>
