<template lang="pug">
  v-container
    cms-video-dialog(v-model="videoDialog")
    v-row(justify="center")
      generic-panel
        v-col(cols="12")
          v-row(justify="center")
            v-col(cols="12" md="10").text-center
              h2(:class="titleClasses").mb-6 Why do clinics switch to MYCURE?
              v-row(justify="center")
                v-col(cols="12" sm="10")
                  p(:class="descriptionClasses").mb-10 MYCURE integrates critical clinic operations into a clean, simple interface to make record management much easier for everyone. Say goodbye to multiple, complicated systems.
              //- mc-btn(
              //-   event-label="click-cms-video"
              //-   event-category="Video"
              //-   color="success"
              //-   depressed
              //-     class="rounded-pill"
              //-     :width="!$isWideScreen ? '240px' : '299.7'"
              //-     :height="!$isWideScreen ? '59px' : '73.68'"
              //-   @click="videoDialog = true"
              //- ).text-none.mb-10
              //-   v-icon(left) {{ mdiPlayCircle }}
              //-   span.generic-button-text Watch How It Works
            v-col(cols="12")
              v-row(justify="center")
                template(v-if="!$isMobile")
                  v-col(cols="12").text-center
                    picture-source(
                      custom-path="clinics/"
                      image="problem-statement"
                      image-alt="Clinic workflow"
                      image-file-extension=".png"
                      extension-exclusive
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
                        :image-file-extension="$useWebp? '.webp' : '.png'"
                        image-width="111px"
                        image-height="92px"
                      )
                      br
                      h3.font-xs.font-open-sans.grey--text {{ item.title }}
</template>

<script>
import { mdiPlayCircle } from '@mdi/js';
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
        icon: '3m-nurse-triage',
      },
      {
        title: 'Doctor\'s Consult',
        icon: '4m-doctors-consult',
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
    this.titleClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    return {
      videoDialog: false,
      mdiPlayCircle,
    };
  },
};
</script>

<style scoped>
.learnLink {
  text-decoration: none;
}
</style>
