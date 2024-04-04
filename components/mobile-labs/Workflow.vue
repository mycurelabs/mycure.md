<template lang="pug">
  v-container
    v-row(justify="center").py-16
      v-col(cols="12").text-center
        h1(:class="titleClasses").mb-5 Seamless Workflow Tailored for You
      v-col(cols="12")
        v-row(justify="center")
          template(v-if="!$isMobile")
            v-col(cols="12").text-center
              picture-source(
                custom-path="diagnostics/mobile-labs/"
                image="Mobile-Labs-Problem-Statement"
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
                  :image-file-extension="$useWebp? '.webp' : '.png'"
                  image-width="115px"
                  image-height="94.19px"
                )
                h3.mc-b3.mt-1 {{ item.title }}
      v-col(cols="10" :class="{'text-center': !$isMobile}")
        span.mc-b2 MYCURE Diagnostics is an end-to-end practice management system solution that eliminates the old challenges of processing paperwork manually and handles location-based registrations with ease. If you’re not using the technologies available today, you’re missing out on more than you might think. MYCURE Diagnostics was designed with the patient journey in mind, meaning you can book appointments, upload medical records, and accept payment all on one app. Reduce the time spent on manual recordkeeping and filing paperwork all thanks to MYCURE mobile labs clinic information system.
      v-col(cols="12").text-center
        signup-button(
          depressed
          color="primary"
          class="rounded-md"
          :width="!$isWideScreen ? '228px' : '300'"
          :height="!$isWideScreen ? '59px' : '73.68'"
        ).text-none
          span.mc-btn1 Contact Us
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
        icon: '1-Appointments-Mobile',
      },
      {
        title: 'Register via Kiosk',
        icon: '2-Register-Mobile',
      },
      {
        title: 'Specimen Collection Queueing',
        icon: '3-Queueing-Mobile',
      },
      {
        title: 'Online and Printed Results',
        icon: '4-Results-Mobile',
      },
    ];
    this.titleClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    this.btnClasses = ['mc-btn1'];
    return {
      videoDialog: false,
    };
  },
};
</script>
