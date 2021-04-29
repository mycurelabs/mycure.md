<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
    )
      v-col(cols="12" md="8").text-center
        h1(:class="{ 'font-l mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }") Flexible. Scalable.
        p.font-s.grey--text Customizable based on what you need
        p.font-xs.font-open-sans MYCURE is modularized and provides APIs for each so you are able to build from scratch, add missing modules while making your system secure and compliant.
    v-row(justify="center")
      v-col(cols="12" md="8")
        v-row(justify="center")
          v-col(
            v-for="(mod, key) in modules"
            :key="key"
            cols="6"
            md="4"
          ).text-center
            picture-source(
              extension-exclusive
              :image-alt="mod.name"
              custom-path="clinics/module-icons/"
              image-file-extension=".png"
              :image="mod.icon"
              image-width="30%"
            )
            br
            h3.font-open-sans.font-xs.grey--text {{ mod.name }}
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  data () {
    this.modules = [
      {
        name: 'Personal Details',
        icon: 'PERSONAL DETAILS',
      },
      {
        name: 'Electronic Medical Records (EMR)',
        icon: 'EMR',
      },
      {
        name: 'Queueing',
        icon: 'QUEUEING',
      },
      {
        name: 'Appointments',
        icon: 'APPOINTMENTS',
      },
      {
        name: 'Pharmacy',
        icon: 'PHARMA',
      },
      {
        name: 'Billing',
        icon: 'BILLING',
      },
      {
        name: 'Laboratory & Imaging',
        icon: 'LABORATORY',
      },
      {
        name: 'Physical Medical Exam',
        icon: 'PME',
      },
      {
        name: 'Inventory',
        icon: 'INVENTORY',
      },
      {
        name: 'Ward Management',
        icon: 'WARD MANAGEMENT',
      },
      {
        name: 'Authentication & Authorization',
        icon: 'AUTH',
      },
      {
        name: 'SMS',
        icon: 'SMS',
      },
      {
        name: 'Chat',
        icon: 'CHAT',
      },
      {
        name: 'Notifications',
        icon: 'NOTIF',
      },
    ];
    return {};
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}
</style>
