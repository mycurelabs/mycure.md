<template lang="pug">
  v-container
    cms-video-dialog(v-model="videoDialog")
    v-row(justify="center")
      generic-panel
        v-col(cols="12")
          v-row(justify="center")
            v-col(cols="12" md="10").text-center
              h1(:class="titleClasses").font-weight-semibold.mb-10 Why do clinics switch to MYCURE?
              v-row(justify="center")
                v-col(cols="12" md="7" xl="8")
                  p(:class="descriptionClasses").font-gray.font-open-sans.mb-10 MYCURE integrates critical clinic operations into a clean, simple interface to make record management much easier for everyone. Say goodbye to multiple, complicated systems.
              mc-btn(
                event-label="click-cms-video"
                event-category="Video"
                color="success"
                depressed
                  class="rounded-pill"
                  :width="!$isWideScreen ? '228px' : '300'"
                  :height="!$isWideScreen ? '59px' : '73.68'"
                @click="videoDialog = true"
              ).text-none.mb-10
                v-icon(left) mdi-play-circle
                span.generic-button-text Watch How It Works
            v-col(cols="12")
              v-row(justify="center")
                template(v-if="!$isMobile")
                  v-col(cols="12").text-center
                    picture-source(
                      custom-path="clinics/"
                      image="Problem Statement"
                      image-alt="Clinic workflow"
                      image-file-extension=".webp"
                      :image-width=" $isRegularScreen ? '850px' : '1300px' "
                      :image-height=" $isRegularScreen ? '677.73px' : '1036.52px' "
                    )
                template(v-else)
                  v-col(cols="12" v-for="(item, key) in items" :key="key").text-center
                      picture-source(
                        v-if="item.icon"
                        custom-path="clinics/"
                        :image="item.icon"
                        :image-alt="item.title"
                        image-file-extension=".webp"
                        image-width="111px"
                        image-height="92px"
                      )
                      br
                      h3.font-xs.font-open-sans.grey--text {{ item.title }}
</template>

<script>
import CmsVideoDialog from '~/components/outpatient-clinics/CmsVideoDialog';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    CmsVideoDialog,
    GenericPanel,
    PictureSource,
  },
  data () {
    this.items = [
      {
        title: 'Appointments',
        icon: '1M-Appointments',
      },
      {
        title: 'Patient Queueing',
        icon: '2M-Queuing',
      },
      {
        title: 'Nurse Triage',
        icon: '3M-Nurse Triage',
      },
      {
        title: 'Doctor\'s Consult',
        icon: '4M-Doctors Consult',
      },
      {
        title: 'Diagnostics',
        icon: '5M-Diagnostics',
      },
      {
        title: 'Pharmacy',
        icon: '6M-Pharmacy',
      },
      {
        title: 'Billings',
        icon: '7M-Billings',
      },
      {
        title: 'Flawless Patient Journeys from Booking to Billing',
        icon: '8M-Journeys',
      },
    ];
    this.titleClasses = ['mc-title-set-1'];
    this.descriptionClasses = ['mc-content-set-1'];
    return {
      videoDialog: false,
    };
  },
};
</script>

<style scoped>
.learnLink {
  text-decoration: none;
}
</style>
