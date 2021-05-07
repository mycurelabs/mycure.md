<template lang="pug">
  v-container.container
    v-row(justify="center" align="center")
      v-col(cols="12" md="10")
        v-row(justify="center")
          v-col(cols="12" md="8").text-center
            h1(:class="titleClasses").lh-title Why do clinics switch to MYCURE?
          v-col(cols="12" md="6").text-center.py-3
            p(:class="descriptionClasses").grey--text.font-open-sans MYCURE integrates critical clinic operations into a clean, simple interface to make record management much easier for everyone. Say goodbye to multiple, complicated systems.
          v-col(cols="12")
            v-row(justify="center")
              v-col(v-if="!$isMobile" cols="12").text-center
                picture-source(
                  extension-exclusive
                  custom-path="clinics/"
                  image="Workflow"
                  image-alt="Clinic workflow"
                  image-file-extension=".png"
                  image-width="60%"
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
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  props: {
    // - Height of panel
    panelHeight: {
      type: String,
      default: '1000px',
    },
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
    return {};
  },
  computed: {
    titleClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
      });
    },
  },
};
</script>

<style scoped>
.learnLink {
  text-decoration: none;
}
.container {
  padding-bottom: 100px;
  padding-top: 10px;
}
</style>
