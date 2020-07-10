<template lang="pug">
  v-container(style="background-color: #f7e8e6" :class="{ 'border-radius': !$isMobile }").py-12
    v-row(justify="center" align="center" no-gutters)
      v-col(v-if="!$isMobile" cols="12" md="5")
        picture-source(
          custom-path="virtual-clinic-home/"
          :image="patientPortalImage"
          image-alt="Connect with your patient"
          image-file-extension=".webp"
        )
      v-col(cols="12" md="4" offset-md="1" wrap)
        h1.font-30.lh-title.pb-3.font-weight-light.pre-white-space {{ patientPortalContent.title }}
        br
        p.text-justify.font-16.mt-3.font-gray {{ patientPortalContent.description }}
        br
        v-btn(@click="goToPatientPortal" color="#EDBA42" depressed)
          span.white--text.text-none Learn More
      picture-source(
        v-if="$isMobile"
        custom-path="virtual-clinic-home/"
        :image="patientPortalImage"
        image-alt="Connect with your patient"
        image-file-extension=".webp"
      ).pt-12
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: { PictureSource },
  data () {
    this.patientPortalContent = {
      title: 'Increase your\npatient engagement.\nConnect online!',
      description: 'Streamline your workflow and save time! Set-up appointments and consultations, coordinate patient care, issue ePresciptions and release diagnostics results - all that and more with an online portal to interact with your patients.',
    };
    this.patientPortalImage = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-patient-banner';
    return {};
  },
  methods: {
    goToPatientPortal () {
      this.$emit('goToPatientPortal');
    },
  },
};
</script>

<style scoped>
.border-radius {
  border-radius: 10px;
}
</style>
