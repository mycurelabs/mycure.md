<template lang="pug">
  v-container
    cms-video-dialog(v-model="videoDialog")
    v-row(justify="center")
      generic-panel
        v-col(cols="12")
          v-row(justify="center")
            v-col(cols="12" md="10").text-center
              h1(:class="titleClasses").font-weight-medium.mb-10 Why do clinics switch to MYCURE?
              v-row(justify="center")
                v-col(cols="12" md="7" xl="8")
                  p(:class="descriptionClasses").font-gray.font-open-sans.mb-10 MYCURE integrates critical clinic operations into a clean, simple interface to make record management much easier for everyone. Say goodbye to multiple, complicated systems.
              mc-btn(
                event-label="click-cms-video"
                event-category="Video"
                color="primary"
                depressed
                rounded
                :large="$isRegularScreen"
                :x-large="$isWideScreen"
                :class="{'font-s': !$isMobile}"
                @click="videoDialog = true"
              ).text-none.mb-10
                v-icon(left) mdi-play-circle
                span Watch How It Works
            v-col(cols="12")
              v-row(justify="center")
                template(v-if="!$isMobile")
                  v-col(cols="12").text-center
                    picture-source(
                      extension-exclusive
                      custom-path="clinics/"
                      image="Problem Statement"
                      image-alt="Clinic workflow"
                      image-file-extension=".png"
                      image-width="60%"
                    )
                  v-col(cols="12").text-center
                    picture-source(
                      extension-exclusive
                      custom-path="clinics/"
                      image="Step 8"
                      image-alt="Flawless Patient Journeys"
                      image-file-extension=".png"
                      image-width="25%"
                    )
                template(v-else)
                  v-col(cols="12" v-for="(item, key) in items" :key="key").text-center
                      picture-source(
                        v-if="item.icon"
                        extension-exclusive
                        custom-path="clinics/"
                        :image="item.icon"
                        :image-alt="item.title"
                        image-file-extension=".png"
                        image-width="40%"
                      )
                      br
                      h3.font-xs.font-open-sans.grey--text {{ item.title }}
</template>

<script>
import classBinder from '~/utils/class-binder';
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
        title: 'Patient Registration and Queuing',
        icon: '2M-Queuing',
      },
      {
        title: 'Nurse Triage',
        icon: '3M-Nurse Triage',
      },
      {
        title: 'Doctors Consult',
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
    return {
      videoDialog: false,
    };
  },
  computed: {
    titleClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
    },
  },
};
</script>

<style scoped>
.learnLink {
  text-decoration: none;
}
</style>
